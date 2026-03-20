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

/** Priority order: lower number = apply first (most restrictive). */
const ISSUER_PRIORITY: Record<Issuer, number> = {
  Chase: 1,
  Barclays: 2,
  'US Bank': 3,
  Citi: 4,
  BofA: 5,
  'Wells Fargo': 6,
  'Capital One': 7,
  Amex: 8,
  Discover: 9,
};

interface WishlistCard {
  id: string;
  cardName: string;
  issuer: Issuer;
  cardType: 'personal' | 'business';
}

interface TimingResult {
  order: number;
  cardName: string;
  issuer: Issuer;
  cardType: 'personal' | 'business';
  earliestDate: string; // YYYY-MM-DD
  warnings: string[];
}

const VELOCITY_STORAGE_KEY = '524tracker-velocity-apps';
const WISHLIST_STORAGE_KEY = '524tracker-timing-wishlist';

const ISSUER_COLORS: Record<Issuer, string> = {
  Chase: '#1A73E8',
  Amex: '#006FCF',
  Citi: '#003B70',
  BofA: '#E31837',
  'Capital One': '#004977',
  Barclays: '#00AEEF',
  'US Bank': '#D52B1E',
  'Wells Fargo': '#D71E28',
  Discover: '#FF6000',
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadApps(): CardApplication[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(VELOCITY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveApps(apps: CardApplication[]) {
  try {
    localStorage.setItem(VELOCITY_STORAGE_KEY, JSON.stringify(apps));
  } catch {
    // localStorage full or unavailable
  }
}

function loadWishlist(): WishlistCard[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveWishlist(cards: WishlistCard[]) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(cards));
  } catch {
    // localStorage full or unavailable
  }
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr + 'T00:00:00');
}

function formatDate(dateStr: string): string {
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function toYMD(d: Date): string {
  return d.toISOString().split('T')[0];
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

function addMonths(d: Date, months: number): Date {
  const r = new Date(d);
  r.setMonth(r.getMonth() + months);
  return r;
}

function maxDate(...dates: Date[]): Date {
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

/* ------------------------------------------------------------------ */
/*  Sequencing Algorithm                                              */
/* ------------------------------------------------------------------ */

/**
 * Given existing application history + a sorted wishlist, calculate the
 * earliest safe date for each wishlist card, accounting for all velocity
 * rules and treating earlier wishlist recommendations as if they were
 * already applied.
 */
function calculateTimeline(
  existingApps: CardApplication[],
  wishlist: WishlistCard[],
): TimingResult[] {
  // Sort wishlist by issuer priority
  const sorted = [...wishlist].sort(
    (a, b) => ISSUER_PRIORITY[a.issuer] - ISSUER_PRIORITY[b.issuer],
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Build a running list of "all apps" that includes existing + already-scheduled wishlist cards
  const runningApps: CardApplication[] = [...existingApps];
  const results: TimingResult[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const wish = sorted[i];
    const warnings: string[] = [];
    let earliest = new Date(today);

    // Helper: apps for a specific issuer within a window from a candidate date
    const issuerAppsInWindow = (issuer: Issuer, candidateDate: Date, windowDays: number) =>
      runningApps.filter(
        (a) => a.issuer === issuer && parseDate(a.date) >= addDays(candidateDate, -windowDays),
      );

    const issuerAppsInMonthWindow = (issuer: Issuer, candidateDate: Date, windowMonths: number) =>
      runningApps.filter(
        (a) => a.issuer === issuer && parseDate(a.date) >= addMonths(candidateDate, -windowMonths),
      );

    // Personal cards counting toward 5/24 (all issuers, personal + CapOne/Discover biz)
    const fiveTwentyFourCount = (candidateDate: Date) =>
      runningApps.filter((a) => {
        if (parseDate(a.date) < addMonths(candidateDate, -24)) return false;
        if (a.cardType === 'personal') return true;
        if (a.cardType === 'business' && (a.issuer === 'Capital One' || a.issuer === 'Discover')) return true;
        return false;
      }).length;

    const allAccountsInMonths = (candidateDate: Date, months: number) =>
      runningApps.filter(
        (a) => !a.isAuthorizedUser && parseDate(a.date) >= addMonths(candidateDate, -months),
      ).length;

    // Find the earliest date that satisfies all rules for this issuer
    // We iterate day by day from today (or later) until rules pass.
    // For efficiency, we jump to the next constraint boundary rather than
    // truly iterating day-by-day.

    const findEarliestSafe = (): Date => {
      let candidate = new Date(earliest);
      // Max 730 days look-ahead to prevent infinite loop
      const maxLookahead = addDays(today, 730);
      let iterations = 0;

      while (candidate <= maxLookahead && iterations < 1000) {
        iterations++;
        let satisfied = true;
        let nextJump: Date | null = null;

        const jumpTo = (d: Date) => {
          if (!nextJump || d > nextJump) nextJump = d;
          satisfied = false;
        };

        switch (wish.issuer) {
          case 'Chase': {
            // 5/24: must have fewer than 5 personal cards in 24 months
            {
              const count524 = fiveTwentyFourCount(candidate);
              if (count524 >= 5) {
                // Find when the oldest 5/24 card drops off
                const cards524 = runningApps
                  .filter((a) => {
                    if (parseDate(a.date) < addMonths(candidate, -24)) return false;
                    if (a.cardType === 'personal') return true;
                    if (a.cardType === 'business' && (a.issuer === 'Capital One' || a.issuer === 'Discover')) return true;
                    return false;
                  })
                  .sort((a, b) => a.date.localeCompare(b.date));
                const dropOff = cards524[cards524.length - 5];
                if (dropOff) {
                  jumpTo(addDays(addMonths(parseDate(dropOff.date), 24), 1));
                  warnings.push(`At ${count524}/24 — must wait for a card to drop off 5/24`);
                }
              }
            }
            // 2/30: max 2 Chase apps in 30 days
            const chase30 = issuerAppsInWindow('Chase', candidate, 30);
            if (chase30.length >= 2) {
              const sorted30 = chase30.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(parseDate(sorted30[sorted30.length - 2].date), 31));
            }
            break;
          }
          case 'Citi': {
            // 1/8
            const citi8 = issuerAppsInWindow('Citi', candidate, 8);
            if (citi8.length >= 1) {
              const latest = citi8.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(parseDate(latest.date), 9));
            }
            // 2/65
            const citi65 = issuerAppsInWindow('Citi', candidate, 65);
            if (citi65.length >= 2) {
              const sorted65 = citi65.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(parseDate(sorted65[sorted65.length - 2].date), 66));
            }
            break;
          }
          case 'Amex': {
            // 1/5
            const amex5 = issuerAppsInWindow('Amex', candidate, 5);
            if (amex5.length >= 1) {
              const latest = amex5.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(parseDate(latest.date), 6));
            }
            // 2/90
            const amex90 = issuerAppsInWindow('Amex', candidate, 90);
            if (amex90.length >= 2) {
              const sorted90 = amex90.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(parseDate(sorted90[sorted90.length - 2].date), 91));
            }
            break;
          }
          case 'BofA': {
            // 2/30d (using months approximation: 2 months window to match velocity checker)
            const bofa2 = issuerAppsInMonthWindow('BofA', candidate, 2);
            if (bofa2.length >= 2) {
              const sortedB = bofa2.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(addMonths(parseDate(sortedB[sortedB.length - 2].date), 2), 1));
            }
            // 3/12mo
            const bofa12 = issuerAppsInMonthWindow('BofA', candidate, 12);
            if (bofa12.length >= 3) {
              const sortedB = bofa12.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(addMonths(parseDate(sortedB[sortedB.length - 3].date), 12), 1));
            }
            // 4/24mo
            const bofa24 = issuerAppsInMonthWindow('BofA', candidate, 24);
            if (bofa24.length >= 4) {
              const sortedB = bofa24.sort((a, b) => a.date.localeCompare(b.date));
              jumpTo(addDays(addMonths(parseDate(sortedB[sortedB.length - 4].date), 24), 1));
            }
            break;
          }
          case 'Capital One': {
            // 1/6mo
            const cap6 = issuerAppsInMonthWindow('Capital One', candidate, 6);
            if (cap6.length >= 1) {
              const latest = cap6.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(addMonths(parseDate(latest.date), 6), 1));
            }
            break;
          }
          case 'Barclays': {
            // 6/24 (soft, all accounts)
            const total24 = allAccountsInMonths(candidate, 24);
            if (total24 >= 6) {
              warnings.push(`At ${total24} accounts in 24 months — Barclays 6/24 soft rule may trigger denial`);
              // Still allow but warn — it's a soft rule
            }
            break;
          }
          case 'US Bank': {
            // 1/60
            const usb60 = issuerAppsInWindow('US Bank', candidate, 60);
            if (usb60.length >= 1) {
              const latest = usb60.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(parseDate(latest.date), 61));
            }
            // 5/12 (soft, all accounts)
            const total12 = allAccountsInMonths(candidate, 12);
            if (total12 >= 5) {
              warnings.push(`At ${total12} accounts in 12 months — US Bank 5/12 soft rule may trigger denial`);
            }
            break;
          }
          case 'Wells Fargo': {
            // 1/6mo
            const wf6 = issuerAppsInMonthWindow('Wells Fargo', candidate, 6);
            if (wf6.length >= 1) {
              const latest = wf6.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(addMonths(parseDate(latest.date), 6), 1));
            }
            break;
          }
          case 'Discover': {
            // 1/12mo
            const disc12 = issuerAppsInMonthWindow('Discover', candidate, 12);
            if (disc12.length >= 1) {
              const latest = disc12.sort((a, b) => b.date.localeCompare(a.date))[0];
              jumpTo(addDays(addMonths(parseDate(latest.date), 12), 1));
            }
            break;
          }
        }

        // Cross-issuer 5/24 check for all personal cards (not just Chase)
        if (wish.issuer !== 'Chase' && wish.cardType === 'personal') {
          // Chase 5/24 is the binding constraint — warn if over
          const count524 = fiveTwentyFourCount(candidate);
          if (count524 >= 5) {
            warnings.push(`At ${count524}/24 — you are over 5/24 which limits Chase options`);
          }
        }

        if (satisfied) return candidate;
        if (nextJump) {
          candidate = nextJump;
        } else {
          candidate = addDays(candidate, 1);
        }
      }

      return candidate;
    };

    const safeDate = findEarliestSafe();

    results.push({
      order: i + 1,
      cardName: wish.cardName,
      issuer: wish.issuer,
      cardType: wish.cardType,
      earliestDate: toYMD(safeDate),
      warnings: [...new Set(warnings)], // deduplicate
    });

    // Add this scheduled card to running apps for subsequent calculations
    runningApps.push({
      id: generateId(),
      issuer: wish.issuer,
      cardName: wish.cardName,
      date: toYMD(safeDate),
      cardType: wish.cardType,
      isAuthorizedUser: false,
    });
  }

  return results;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function ApplicationTimingClient() {
  const [apps, setApps] = useState<CardApplication[]>(loadApps);
  const [wishlist, setWishlist] = useState<WishlistCard[]>(loadWishlist);
  const [results, setResults] = useState<TimingResult[] | null>(null);

  // Application form state
  const [issuer, setIssuer] = useState<Issuer>('Chase');
  const [cardName, setCardName] = useState('');
  const [appDate, setAppDate] = useState('');
  const [cardType, setCardType] = useState<'personal' | 'business'>('personal');
  const [isAU, setIsAU] = useState(false);

  // Wishlist form state
  const [wishIssuer, setWishIssuer] = useState<Issuer>('Chase');
  const [wishCardName, setWishCardName] = useState('');
  const [wishCardType, setWishCardType] = useState<'personal' | 'business'>('personal');

  const persistApps = useCallback((updated: CardApplication[]) => {
    setApps(updated);
    saveApps(updated);
    setResults(null);
  }, []);

  const persistWishlist = useCallback((updated: WishlistCard[]) => {
    setWishlist(updated);
    saveWishlist(updated);
    setResults(null);
  }, []);

  const handleAddApp = () => {
    if (!cardName.trim() || !appDate) return;
    const newApp: CardApplication = {
      id: generateId(),
      issuer,
      cardName: cardName.trim(),
      date: appDate,
      cardType,
      isAuthorizedUser: isAU,
    };
    persistApps([...apps, newApp]);
    setCardName('');
    setAppDate('');
    setIsAU(false);
  };

  const handleDeleteApp = (id: string) => {
    persistApps(apps.filter((a) => a.id !== id));
  };

  const handleAddWish = () => {
    if (!wishCardName.trim()) return;
    if (wishlist.length >= 5) return;
    const newWish: WishlistCard = {
      id: generateId(),
      cardName: wishCardName.trim(),
      issuer: wishIssuer,
      cardType: wishCardType,
    };
    persistWishlist([...wishlist, newWish]);
    setWishCardName('');
  };

  const handleRemoveWish = (id: string) => {
    persistWishlist(wishlist.filter((w) => w.id !== id));
  };

  const handleCalculate = () => {
    setResults(calculateTimeline(apps, wishlist));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all application and wishlist data? This cannot be undone.')) {
      persistApps([]);
      persistWishlist([]);
      setResults(null);
    }
  };

  const sortedApps = [...apps].sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  /* Timeline visualization helpers */
  const timelineMonths = 12;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const timelineEnd = addMonths(today, timelineMonths);

  const getTimelinePosition = (dateStr: string): number => {
    const d = parseDate(dateStr);
    const totalMs = timelineEnd.getTime() - today.getTime();
    const elapsed = d.getTime() - today.getTime();
    return Math.max(0, Math.min(100, (elapsed / totalMs) * 100));
  };

  const getMonthLabels = (): { label: string; position: number }[] => {
    const labels: { label: string; position: number }[] = [];
    for (let i = 0; i <= timelineMonths; i += 2) {
      const d = addMonths(today, i);
      labels.push({
        label: d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        position: (i / timelineMonths) * 100,
      });
    }
    return labels;
  };

  return (
    <div className="space-y-8">
      {/* ---- Application History Entry Form ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-2">Application History</h2>
        {apps.length > 0 && (
          <p className="text-xs text-text-secondary mb-4">
            {apps.length} {apps.length === 1 ? 'card' : 'cards'} loaded from your saved data.
          </p>
        )}
        {apps.length === 0 && (
          <p className="text-xs text-text-secondary mb-4">
            Enter your recent credit card applications (past 24 months). Data shared with the Velocity Checker.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="at-issuer" className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Issuer
            </label>
            <select
              id="at-issuer"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value as Issuer)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {ISSUERS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="at-name" className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Name
            </label>
            <input
              id="at-name"
              type="text"
              placeholder="e.g. Sapphire Preferred"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <div>
            <label htmlFor="at-date" className="block text-sm font-body font-medium text-text-primary mb-1">
              Application Date
            </label>
            <input
              id="at-date"
              type="date"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
        </div>

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

        <div className="mt-4">
          <button
            type="button"
            onClick={handleAddApp}
            disabled={!cardName.trim() || !appDate}
            className="bg-brand-gold text-brand-navy font-body font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Card
          </button>
        </div>
      </div>

      {/* ---- Application History Table ---- */}
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
                        onClick={() => handleDeleteApp(app.id)}
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

      {/* ---- Wishlist Section ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-2">Card Wishlist</h2>
        <p className="text-xs text-text-secondary mb-4">
          Add up to 5 cards you want to apply for. The calculator will determine the optimal order and timing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="wish-name" className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Name
            </label>
            <input
              id="wish-name"
              type="text"
              placeholder="e.g. Freedom Unlimited"
              value={wishCardName}
              onChange={(e) => setWishCardName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <div>
            <label htmlFor="wish-issuer" className="block text-sm font-body font-medium text-text-primary mb-1">
              Issuer
            </label>
            <select
              id="wish-issuer"
              value={wishIssuer}
              onChange={(e) => setWishIssuer(e.target.value as Issuer)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {ISSUERS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-body font-medium text-text-primary mb-1">
              Card Type
            </label>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setWishCardType('personal')}
                className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                  wishCardType === 'personal'
                    ? 'bg-brand-navy text-white'
                    : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
                }`}
              >
                Personal
              </button>
              <button
                type="button"
                onClick={() => setWishCardType('business')}
                className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                  wishCardType === 'business'
                    ? 'bg-brand-navy text-white'
                    : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
                }`}
              >
                Business
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleAddWish}
            disabled={!wishCardName.trim() || wishlist.length >= 5}
            className="bg-brand-gold text-brand-navy font-body font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Wishlist
          </button>
          {wishlist.length >= 5 && (
            <span className="ml-3 text-xs text-text-secondary">Maximum of 5 wishlist cards reached.</span>
          )}
        </div>
      </div>

      {/* ---- Wishlist Cards ---- */}
      {wishlist.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {wishlist.map((w) => (
            <div
              key={w.id}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-start justify-between gap-3"
            >
              <div className="min-w-0">
                <p className="font-body font-semibold text-sm text-brand-navy truncate">{w.cardName}</p>
                <p className="text-xs text-text-secondary">
                  {w.issuer} &middot; <span className="capitalize">{w.cardType}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveWish(w.id)}
                className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors shrink-0"
                aria-label={`Remove ${w.cardName} from wishlist`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ---- Empty Wishlist State ---- */}
      {wishlist.length === 0 && (
        <div className="bg-brand-light border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-text-secondary text-sm">
            No cards in your wishlist yet. Add the cards you want to apply for above.
          </p>
        </div>
      )}

      {/* ---- Calculate Button ---- */}
      {wishlist.length > 0 && (
        <div className="text-center">
          <button
            type="button"
            onClick={handleCalculate}
            className="bg-brand-gold text-brand-navy font-display font-bold px-10 py-4 rounded-lg text-lg hover:bg-amber-500 transition-colors shadow-md hover:shadow-lg"
          >
            Calculate Optimal Timing
          </button>
        </div>
      )}

      {/* ---- Results ---- */}
      {results && results.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl text-brand-navy">Recommended Application Timeline</h2>

          {/* Ordered Results List */}
          <div className="space-y-3">
            {results.map((r) => {
              const isToday = r.earliestDate === toYMD(today);
              return (
                <div
                  key={r.order}
                  className={`border rounded-xl p-5 ${
                    r.warnings.length > 0 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm text-white"
                      style={{ backgroundColor: ISSUER_COLORS[r.issuer] }}
                    >
                      {r.order}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display font-bold text-lg text-brand-navy">{r.cardName}</h3>
                        <span className="text-sm text-text-secondary">
                          {r.issuer} &middot; <span className="capitalize">{r.cardType}</span>
                        </span>
                      </div>
                      <p className="text-sm text-text-primary mt-1">
                        Earliest safe date:{' '}
                        <span className="font-semibold">
                          {isToday ? 'Today' : formatDate(r.earliestDate)}
                        </span>
                      </p>
                      {r.warnings.map((w, idx) => (
                        <p key={idx} className="text-xs text-amber-700 mt-1 flex items-start gap-1">
                          <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.66 16.59A1 1 0 0120.66 21H3.34a1 1 0 01-.86-1.41L12 3z" />
                          </svg>
                          {w}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline Visualization */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-6">Visual Timeline</h3>
            <div className="relative">
              {/* Timeline bar */}
              <div className="relative h-3 bg-gray-200 rounded-full overflow-visible">
                {/* Today marker */}
                <div
                  className="absolute top-0 left-0 h-3 w-1 bg-brand-navy rounded-full"
                  style={{ left: '0%' }}
                />
                {/* Card markers */}
                {results.map((r) => (
                  <div
                    key={r.order}
                    className="absolute -top-1.5 w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      left: `${getTimelinePosition(r.earliestDate)}%`,
                      backgroundColor: ISSUER_COLORS[r.issuer],
                      transform: 'translateX(-50%)',
                    }}
                    title={`${r.cardName} — ${formatDate(r.earliestDate)}`}
                  >
                    {r.order}
                  </div>
                ))}
              </div>

              {/* Month labels */}
              <div className="relative mt-4 h-6">
                {getMonthLabels().map((m) => (
                  <span
                    key={m.label}
                    className="absolute text-[10px] text-text-secondary"
                    style={{ left: `${m.position}%`, transform: 'translateX(-50%)' }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Card labels below timeline */}
              <div className="mt-4 flex flex-wrap gap-3">
                {results.map((r) => (
                  <div key={r.order} className="flex items-center gap-1.5">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: ISSUER_COLORS[r.issuer] }}
                    />
                    <span className="text-xs text-text-primary">
                      {r.order}. {r.cardName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- Privacy Notice + Clear Button ---- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          All data stays in your browser. Nothing is sent to our servers.
        </p>
        {(apps.length > 0 || wishlist.length > 0) && (
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
