'use client';

import { useState, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface CardApplication {
  id: string;
  issuer: Issuer;
  cardName: string;
  date: string; // YYYY-MM-DD
  cardType: 'personal' | 'business';
  isAuthorizedUser: boolean;
}

type Issuer =
  | 'Chase'
  | 'Amex'
  | 'Citi'
  | 'BofA'
  | 'Capital One'
  | 'Barclays'
  | 'US Bank'
  | 'Wells Fargo'
  | 'Discover';

const ISSUERS: Issuer[] = [
  'Chase',
  'Amex',
  'Citi',
  'BofA',
  'Capital One',
  'Barclays',
  'US Bank',
  'Wells Fargo',
  'Discover',
];

type RuleStatus = 'pass' | 'warning' | 'fail';

interface RuleResult {
  ruleName: string;
  status: RuleStatus;
  count: number;
  limit: number;
  nextEligibleDate: string | null; // YYYY-MM-DD or null if passing
  description: string;
}

interface IssuerResults {
  issuer: string;
  overallStatus: RuleStatus;
  rules: RuleResult[];
}

const STORAGE_KEY = '524tracker-velocity-apps';

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadApps(): CardApplication[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveApps(apps: CardApplication[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  } catch {
    // localStorage full or unavailable — silently fail
  }
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(0, 0, 0, 0);
  return d;
}

function monthsAgo(months: number): Date {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  d.setHours(0, 0, 0, 0);
  return d;
}

function parseDate(dateStr: string): Date {
  const d = new Date(dateStr + 'T00:00:00');
  return d;
}

function formatDate(dateStr: string): string {
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateObj(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Find earliest date when count drops below limit by computing when the oldest relevant card exits the window. */
function computeNextEligibleDate(
  relevantDates: string[],
  limit: number,
  windowDays: number,
): string | null {
  if (relevantDates.length < limit) return null;
  // Sort dates ascending
  const sorted = [...relevantDates].sort();
  // We need (limit) cards to drop off. The card that needs to drop is at index (count - limit)
  // counting from newest. That's the (count - limit)th oldest card.
  // After that card's date + windowDays + 1, we're eligible.
  const dropIndex = sorted.length - limit;
  const dropDate = parseDate(sorted[dropIndex]);
  const eligible = new Date(dropDate);
  eligible.setDate(eligible.getDate() + windowDays + 1);
  return eligible.toISOString().split('T')[0];
}

function computeNextEligibleDateMonths(
  relevantDates: string[],
  limit: number,
  windowMonths: number,
): string | null {
  if (relevantDates.length < limit) return null;
  const sorted = [...relevantDates].sort();
  const dropIndex = sorted.length - limit;
  const dropDate = parseDate(sorted[dropIndex]);
  const eligible = new Date(dropDate);
  eligible.setMonth(eligible.getMonth() + windowMonths);
  eligible.setDate(eligible.getDate() + 1);
  return eligible.toISOString().split('T')[0];
}

/* ------------------------------------------------------------------ */
/*  Rules Engine                                                      */
/* ------------------------------------------------------------------ */

function runAllRules(apps: CardApplication[]): IssuerResults[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Helper to filter apps by issuer and date window
  const appsInWindow = (issuer: Issuer | null, windowStart: Date, excludeBiz = false, auOnly = false) =>
    apps.filter((a) => {
      if (issuer && a.issuer !== issuer) return false;
      if (excludeBiz && a.cardType === 'business') return false;
      if (auOnly && !a.isAuthorizedUser) return false;
      return parseDate(a.date) >= windowStart;
    });

  // Personal cards from all issuers (for 5/24 style rules)
  // AU cards count. Business cards from CapOne and Discover count. Other biz cards don't.
  const personalCardsForFiveTwentyFour = (windowStart: Date) =>
    apps.filter((a) => {
      if (parseDate(a.date) < windowStart) return false;
      if (a.cardType === 'personal') return true;
      // Business cards that report to personal
      if (a.cardType === 'business' && (a.issuer === 'Capital One' || a.issuer === 'Discover')) return true;
      return false;
    });

  const allAccountsInWindow = (windowStart: Date) =>
    apps.filter((a) => parseDate(a.date) >= windowStart && !a.isAuthorizedUser);

  const results: IssuerResults[] = [];

  // --- CHASE ---
  {
    const fiveTwentyFourCards = personalCardsForFiveTwentyFour(monthsAgo(24));
    const fiveTwentyFourCount = fiveTwentyFourCards.length;
    const fiveTwentyFourDates = fiveTwentyFourCards.map((a) => a.date);

    const twoThirtyCards = apps.filter(
      (a) => a.issuer === 'Chase' && parseDate(a.date) >= daysAgo(30),
    );
    const twoThirtyCount = twoThirtyCards.length;
    const twoThirtyDates = twoThirtyCards.map((a) => a.date);

    const rules: RuleResult[] = [
      {
        ruleName: '5/24',
        status: fiveTwentyFourCount >= 5 ? 'fail' : 'pass',
        count: fiveTwentyFourCount,
        limit: 5,
        nextEligibleDate:
          fiveTwentyFourCount >= 5
            ? computeNextEligibleDateMonths(fiveTwentyFourDates, 5, 24)
            : null,
        description: `${fiveTwentyFourCount}/5 personal cards (all issuers) in 24 months`,
      },
      {
        ruleName: '2/30',
        status: twoThirtyCount >= 2 ? 'fail' : 'pass',
        count: twoThirtyCount,
        limit: 2,
        nextEligibleDate:
          twoThirtyCount >= 2
            ? computeNextEligibleDate(twoThirtyDates, 2, 30)
            : null,
        description: `${twoThirtyCount}/2 Chase applications in 30 days`,
      },
    ];
    results.push({
      issuer: 'Chase',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : rules.some((r) => r.status === 'warning') ? 'warning' : 'pass',
      rules,
    });
  }

  // --- AMEX ---
  {
    const oneFiveCards = apps.filter(
      (a) => a.issuer === 'Amex' && parseDate(a.date) >= daysAgo(5),
    );
    const twoNinetyCards = apps.filter(
      (a) => a.issuer === 'Amex' && parseDate(a.date) >= daysAgo(90),
    );

    const rules: RuleResult[] = [
      {
        ruleName: '1/5',
        status: oneFiveCards.length >= 1 ? 'fail' : 'pass',
        count: oneFiveCards.length,
        limit: 1,
        nextEligibleDate:
          oneFiveCards.length >= 1
            ? computeNextEligibleDate(oneFiveCards.map((a) => a.date), 1, 5)
            : null,
        description: `${oneFiveCards.length}/1 Amex credit cards in 5 days`,
      },
      {
        ruleName: '2/90',
        status: twoNinetyCards.length >= 2 ? 'fail' : 'pass',
        count: twoNinetyCards.length,
        limit: 2,
        nextEligibleDate:
          twoNinetyCards.length >= 2
            ? computeNextEligibleDate(twoNinetyCards.map((a) => a.date), 2, 90)
            : null,
        description: `${twoNinetyCards.length}/2 Amex credit cards in 90 days`,
      },
    ];
    results.push({
      issuer: 'Amex',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : 'pass',
      rules,
    });
  }

  // --- CITI ---
  {
    const oneEightCards = apps.filter(
      (a) => a.issuer === 'Citi' && parseDate(a.date) >= daysAgo(8),
    );
    const twoSixtyFiveCards = apps.filter(
      (a) => a.issuer === 'Citi' && parseDate(a.date) >= daysAgo(65),
    );

    const rules: RuleResult[] = [
      {
        ruleName: '1/8',
        status: oneEightCards.length >= 1 ? 'fail' : 'pass',
        count: oneEightCards.length,
        limit: 1,
        nextEligibleDate:
          oneEightCards.length >= 1
            ? computeNextEligibleDate(oneEightCards.map((a) => a.date), 1, 8)
            : null,
        description: `${oneEightCards.length}/1 Citi applications in 8 days`,
      },
      {
        ruleName: '2/65',
        status: twoSixtyFiveCards.length >= 2 ? 'fail' : 'pass',
        count: twoSixtyFiveCards.length,
        limit: 2,
        nextEligibleDate:
          twoSixtyFiveCards.length >= 2
            ? computeNextEligibleDate(twoSixtyFiveCards.map((a) => a.date), 2, 65)
            : null,
        description: `${twoSixtyFiveCards.length}/2 Citi applications in 65 days`,
      },
    ];
    results.push({
      issuer: 'Citi',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : 'pass',
      rules,
    });
  }

  // --- BOFA ---
  {
    const twoThirtyBofA = apps.filter(
      (a) => a.issuer === 'BofA' && parseDate(a.date) >= monthsAgo(2),
    );
    const threeTwelveBofA = apps.filter(
      (a) => a.issuer === 'BofA' && parseDate(a.date) >= monthsAgo(12),
    );
    const fourTwentyFourBofA = apps.filter(
      (a) => a.issuer === 'BofA' && parseDate(a.date) >= monthsAgo(24),
    );

    const rules: RuleResult[] = [
      {
        ruleName: '2/30',
        status: twoThirtyBofA.length >= 2 ? 'fail' : 'pass',
        count: twoThirtyBofA.length,
        limit: 2,
        nextEligibleDate:
          twoThirtyBofA.length >= 2
            ? computeNextEligibleDateMonths(twoThirtyBofA.map((a) => a.date), 2, 2)
            : null,
        description: `${twoThirtyBofA.length}/2 BofA cards in 2 months`,
      },
      {
        ruleName: '3/12',
        status: threeTwelveBofA.length >= 3 ? 'fail' : 'pass',
        count: threeTwelveBofA.length,
        limit: 3,
        nextEligibleDate:
          threeTwelveBofA.length >= 3
            ? computeNextEligibleDateMonths(threeTwelveBofA.map((a) => a.date), 3, 12)
            : null,
        description: `${threeTwelveBofA.length}/3 BofA cards in 12 months`,
      },
      {
        ruleName: '4/24',
        status: fourTwentyFourBofA.length >= 4 ? 'fail' : 'pass',
        count: fourTwentyFourBofA.length,
        limit: 4,
        nextEligibleDate:
          fourTwentyFourBofA.length >= 4
            ? computeNextEligibleDateMonths(fourTwentyFourBofA.map((a) => a.date), 4, 24)
            : null,
        description: `${fourTwentyFourBofA.length}/4 BofA cards in 24 months`,
      },
    ];
    results.push({
      issuer: 'Bank of America',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : 'pass',
      rules,
    });
  }

  // --- CAPITAL ONE ---
  {
    const oneSixCards = apps.filter(
      (a) => a.issuer === 'Capital One' && parseDate(a.date) >= monthsAgo(6),
    );

    const rules: RuleResult[] = [
      {
        ruleName: '1/6',
        status: oneSixCards.length >= 1 ? 'fail' : 'pass',
        count: oneSixCards.length,
        limit: 1,
        nextEligibleDate:
          oneSixCards.length >= 1
            ? computeNextEligibleDateMonths(oneSixCards.map((a) => a.date), 1, 6)
            : null,
        description: `${oneSixCards.length}/1 Capital One approvals in 6 months`,
      },
    ];
    results.push({
      issuer: 'Capital One',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : 'pass',
      rules,
    });
  }

  // --- BARCLAYS ---
  {
    const allTwentyFour = allAccountsInWindow(monthsAgo(24));

    const rules: RuleResult[] = [
      {
        ruleName: '6/24',
        status: allTwentyFour.length >= 6 ? 'warning' : 'pass',
        count: allTwentyFour.length,
        limit: 6,
        nextEligibleDate:
          allTwentyFour.length >= 6
            ? computeNextEligibleDateMonths(allTwentyFour.map((a) => a.date), 6, 24)
            : null,
        description: `${allTwentyFour.length}/6 total new accounts in 24 months (soft rule)`,
      },
    ];
    results.push({
      issuer: 'Barclays',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : rules.some((r) => r.status === 'warning') ? 'warning' : 'pass',
      rules,
    });
  }

  // --- US BANK ---
  {
    const oneSixtyCards = apps.filter(
      (a) => a.issuer === 'US Bank' && parseDate(a.date) >= daysAgo(60),
    );
    const allTwelve = allAccountsInWindow(monthsAgo(12));

    const rules: RuleResult[] = [
      {
        ruleName: '1/60',
        status: oneSixtyCards.length >= 1 ? 'fail' : 'pass',
        count: oneSixtyCards.length,
        limit: 1,
        nextEligibleDate:
          oneSixtyCards.length >= 1
            ? computeNextEligibleDate(oneSixtyCards.map((a) => a.date), 1, 60)
            : null,
        description: `${oneSixtyCards.length}/1 US Bank approvals in 60 days`,
      },
      {
        ruleName: '5/12',
        status: allTwelve.length >= 5 ? 'warning' : 'pass',
        count: allTwelve.length,
        limit: 5,
        nextEligibleDate:
          allTwelve.length >= 5
            ? computeNextEligibleDateMonths(allTwelve.map((a) => a.date), 5, 12)
            : null,
        description: `${allTwelve.length}/5 total new accounts in 12 months (soft rule)`,
      },
    ];
    results.push({
      issuer: 'US Bank',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : rules.some((r) => r.status === 'warning') ? 'warning' : 'pass',
      rules,
    });
  }

  // --- WELLS FARGO ---
  {
    const wfSixMonth = apps.filter(
      (a) => a.issuer === 'Wells Fargo' && parseDate(a.date) >= monthsAgo(6),
    );
    const personalTwentyFour = personalCardsForFiveTwentyFour(monthsAgo(24));

    const rules: RuleResult[] = [
      {
        ruleName: '1/6mo',
        status: wfSixMonth.length >= 1 ? 'fail' : 'pass',
        count: wfSixMonth.length,
        limit: 1,
        nextEligibleDate:
          wfSixMonth.length >= 1
            ? computeNextEligibleDateMonths(wfSixMonth.map((a) => a.date), 1, 6)
            : null,
        description: `${wfSixMonth.length}/1 Wells Fargo cards in 6 months`,
      },
      {
        ruleName: '5/24 soft',
        status: personalTwentyFour.length >= 5 ? 'warning' : 'pass',
        count: personalTwentyFour.length,
        limit: 5,
        nextEligibleDate:
          personalTwentyFour.length >= 5
            ? computeNextEligibleDateMonths(personalTwentyFour.map((a) => a.date), 5, 24)
            : null,
        description: `${personalTwentyFour.length}/5 personal cards in 24 months (soft rule)`,
      },
    ];
    results.push({
      issuer: 'Wells Fargo',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : rules.some((r) => r.status === 'warning') ? 'warning' : 'pass',
      rules,
    });
  }

  // --- DISCOVER ---
  {
    const discoverTwelve = apps.filter(
      (a) => a.issuer === 'Discover' && parseDate(a.date) >= monthsAgo(12),
    );

    const rules: RuleResult[] = [
      {
        ruleName: '1/12mo',
        status: discoverTwelve.length >= 1 ? 'fail' : 'pass',
        count: discoverTwelve.length,
        limit: 1,
        nextEligibleDate:
          discoverTwelve.length >= 1
            ? computeNextEligibleDateMonths(discoverTwelve.map((a) => a.date), 1, 12)
            : null,
        description: `${discoverTwelve.length}/1 Discover applications in 12 months`,
      },
    ];
    results.push({
      issuer: 'Discover',
      overallStatus: rules.some((r) => r.status === 'fail') ? 'fail' : 'pass',
      rules,
    });
  }

  return results;
}

/* ------------------------------------------------------------------ */
/*  Status icon helpers                                               */
/* ------------------------------------------------------------------ */

function StatusIcon({ status }: { status: RuleStatus }) {
  if (status === 'pass') {
    return (
      <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (status === 'warning') {
    return (
      <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.66 16.59A1 1 0 0120.66 21H3.34a1 1 0 01-.86-1.41L12 3z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function overallBg(status: RuleStatus): string {
  if (status === 'pass') return 'bg-green-50 border-green-200';
  if (status === 'warning') return 'bg-amber-50 border-amber-200';
  return 'bg-red-50 border-red-200';
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function VelocityCheckerClient() {
  const [apps, setApps] = useState<CardApplication[]>(loadApps);
  const [results, setResults] = useState<IssuerResults[] | null>(null);

  // Form state
  const [issuer, setIssuer] = useState<Issuer>('Chase');
  const [cardName, setCardName] = useState('');
  const [appDate, setAppDate] = useState('');
  const [cardType, setCardType] = useState<'personal' | 'business'>('personal');
  const [isAU, setIsAU] = useState(false);

  const persist = useCallback((updated: CardApplication[]) => {
    setApps(updated);
    saveApps(updated);
    setResults(null); // Clear results when data changes
  }, []);

  const handleAdd = () => {
    if (!cardName.trim() || !appDate) return;
    const newApp: CardApplication = {
      id: generateId(),
      issuer,
      cardName: cardName.trim(),
      date: appDate,
      cardType,
      isAuthorizedUser: isAU,
    };
    const updated = [...apps, newApp];
    persist(updated);
    setCardName('');
    setAppDate('');
    setIsAU(false);
  };

  const handleDelete = (id: string) => {
    persist(apps.filter((a) => a.id !== id));
  };

  const handleCheck = () => {
    setResults(runAllRules(apps));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all application data? This cannot be undone.')) {
      persist([]);
      setResults(null);
    }
  };

  const sortedApps = [...apps].sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  return (
    <div className="space-y-8">
      {/* ---- Entry Form ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Add a Card Application</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Issuer */}
          <div>
            <label htmlFor="vc-issuer" className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Issuer
            </label>
            <select
              id="vc-issuer"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value as Issuer)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {ISSUERS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          {/* Card Name */}
          <div>
            <label htmlFor="vc-name" className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Name
            </label>
            <input
              id="vc-name"
              type="text"
              placeholder="e.g. Sapphire Preferred"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          {/* Application Date */}
          <div>
            <label htmlFor="vc-date" className="block text-sm font-body font-medium text-text-primary mb-1">
              Application Date
            </label>
            <input
              id="vc-date"
              type="date"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
        </div>

        {/* Card Type Toggle + AU Checkbox */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCardType('personal')}
              className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                cardType === 'personal'
                  ? 'bg-brand-navy text-white'
                  : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
              }`}
            >
              Personal
            </button>
            <button
              type="button"
              onClick={() => setCardType('business')}
              className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                cardType === 'business'
                  ? 'bg-brand-navy text-white'
                  : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
              }`}
            >
              Business
            </button>
          </div>

          <label className="flex items-center gap-2 text-sm font-body text-text-primary cursor-pointer">
            <input
              type="checkbox"
              checked={isAU}
              onChange={(e) => setIsAU(e.target.checked)}
              className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold h-4 w-4"
            />
            Authorized user card
          </label>
        </div>

        {/* Add Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!cardName.trim() || !appDate}
            className="bg-brand-gold text-brand-navy font-body font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Card
          </button>
        </div>
      </div>

      {/* ---- Application History ---- */}
      {apps.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="font-display font-bold text-xl text-brand-navy">
              Application History ({apps.length} {apps.length === 1 ? 'card' : 'cards'})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-text-secondary">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Issuer</th>
                  <th className="px-4 py-3 font-medium">Card Name</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">AU?</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedApps.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-text-primary whitespace-nowrap">{formatDate(app.date)}</td>
                    <td className="px-4 py-3 text-text-primary">{app.issuer}</td>
                    <td className="px-4 py-3 text-text-primary">{app.cardName}</td>
                    <td className="px-4 py-3 text-text-primary capitalize">{app.cardType}</td>
                    <td className="px-4 py-3 text-text-primary">{app.isAuthorizedUser ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => handleDelete(app.id)}
                        className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors"
                        aria-label={`Delete ${app.cardName}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ---- Empty State ---- */}
      {apps.length === 0 && (
        <div className="bg-brand-light border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-text-secondary text-sm">
            No card applications entered yet. Add your recent credit card applications above to check your velocity rule eligibility.
          </p>
        </div>
      )}

      {/* ---- Check Eligibility Button ---- */}
      {apps.length > 0 && (
        <div className="text-center">
          <button
            type="button"
            onClick={handleCheck}
            className="bg-brand-gold text-brand-navy font-display font-bold px-10 py-4 rounded-lg text-lg hover:bg-amber-500 transition-colors shadow-md hover:shadow-lg"
          >
            Check My Eligibility
          </button>
        </div>
      )}

      {/* ---- Results Dashboard ---- */}
      {results && (
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-brand-navy">Velocity Rule Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((issuerResult) => (
              <div
                key={issuerResult.issuer}
                className={`border rounded-xl p-5 ${overallBg(issuerResult.overallStatus)}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <StatusIcon status={issuerResult.overallStatus} />
                  <h3 className="font-display font-bold text-lg text-brand-navy">{issuerResult.issuer}</h3>
                </div>
                <div className="space-y-2">
                  {issuerResult.rules.map((rule) => (
                    <div key={rule.ruleName} className="flex items-start gap-2">
                      <StatusIcon status={rule.status} />
                      <div className="min-w-0">
                        <p className="text-sm text-text-primary font-medium">
                          {rule.ruleName}: {rule.description}
                        </p>
                        {rule.status !== 'pass' && rule.nextEligibleDate && (
                          <p className="text-xs text-text-secondary mt-0.5">
                            Next safe date: {formatDate(rule.nextEligibleDate)}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- Privacy Notice + Clear Button ---- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          All data stays in your browser. Nothing is sent to our servers.
        </p>
        {apps.length > 0 && (
          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs font-body font-medium text-red-500 hover:text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
          >
            Clear All Data
          </button>
        )}
      </div>
    </div>
  );
}
