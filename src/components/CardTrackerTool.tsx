'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// ─── Types ────────────────────────────────────────────────────
interface TrackedCard {
  id: string;
  cardName: string;
  issuer: string;
  cardType: 'personal' | 'business';
  applicationDate: string; // ISO
  status: 'open' | 'closed';
}

type RuleStatus = 'eligible' | 'caution' | 'blocked';

interface RuleResult {
  name: string;
  issuer: string;
  status: RuleStatus;
  summary: string;
  details: string[];
}

// ─── Constants ────────────────────────────────────────────────
const STORAGE_KEY = 'card_tracker_v1';
const ISSUERS = ['Chase', 'Amex', 'Citi', 'Bank of America', 'Capital One', 'Discover', 'Other'] as const;

// Business cards from these issuers do NOT report to personal bureaus
const BIZ_CARDS_DONT_COUNT = new Set(['Chase', 'Amex', 'Citi', 'Bank of America']);

// ─── Helpers ──────────────────────────────────────────────────
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 86400000;
  const da = new Date(a);
  da.setHours(0, 0, 0, 0);
  const db = new Date(b);
  db.setHours(0, 0, 0, 0);
  return Math.round((db.getTime() - da.getTime()) / msPerDay);
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function loadCards(): TrackedCard[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCards(cards: TrackedCard[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch {
    // localStorage full or unavailable
  }
}

// ─── Rule Calculations ───────────────────────────────────────

function countsToward524(card: TrackedCard): boolean {
  if (card.cardType === 'business' && BIZ_CARDS_DONT_COUNT.has(card.issuer)) return false;
  return true;
}

function calculate524(cards: TrackedCard[]): RuleResult {
  const now = new Date();
  const windowStart = addDays(now, -730);

  const qualifying = cards
    .filter((c) => {
      if (!countsToward524(c)) return false;
      const d = new Date(c.applicationDate + 'T00:00:00');
      return d >= windowStart && d <= now;
    })
    .sort((a, b) => new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime());

  const count = qualifying.length;
  const slotsRemaining = Math.max(0, 5 - count);
  const status: RuleStatus = count >= 5 ? 'blocked' : count === 4 ? 'caution' : 'eligible';

  const details: string[] = [`${count}/24 personal cards in the last 24 months`];
  if (count < 5) {
    details.push(`${slotsRemaining} slot${slotsRemaining !== 1 ? 's' : ''} remaining`);
  }

  // Next drop-off
  if (qualifying.length > 0) {
    const oldest = new Date(qualifying[0].applicationDate + 'T00:00:00');
    const dropoff = addDays(oldest, 730);
    if (dropoff > now) {
      details.push(`Next card ages off: ${formatDate(qualifying[0].applicationDate)} → ${dropoff.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`);
    }
  }

  return {
    name: 'Chase 5/24',
    issuer: 'Chase',
    status,
    summary: count >= 5 ? `Over 5/24 (${count} cards)` : `${count}/24 — ${slotsRemaining} slot${slotsRemaining !== 1 ? 's' : ''} open`,
    details,
  };
}

function calculateAmexLifetime(cards: TrackedCard[]): RuleResult {
  const amexCards = cards.filter((c) => c.issuer === 'Amex');
  const details: string[] = [];

  if (amexCards.length === 0) {
    return {
      name: 'Amex Lifetime Bonus',
      issuer: 'Amex',
      status: 'eligible',
      summary: 'No Amex cards on file',
      details: ['You have no Amex cards tracked. All Amex bonuses may be available.'],
    };
  }

  const uniqueNames = [...new Set(amexCards.map((c) => c.cardName))];
  for (const name of uniqueNames) {
    details.push(`⚠ You may have received a lifetime bonus on "${name}" — Amex's once-per-lifetime rule may prevent you from earning the bonus again`);
  }

  return {
    name: 'Amex Lifetime Bonus',
    issuer: 'Amex',
    status: 'caution',
    summary: `${uniqueNames.length} Amex card${uniqueNames.length !== 1 ? 's' : ''} on file — check lifetime eligibility`,
    details,
  };
}

function calculateCiti865(cards: TrackedCard[]): RuleResult {
  const now = new Date();
  const citiCards = cards
    .filter((c) => c.issuer === 'Citi')
    .sort((a, b) => new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime());

  if (citiCards.length === 0) {
    return {
      name: 'Citi 8/65',
      issuer: 'Citi',
      status: 'eligible',
      summary: 'No Citi applications on file',
      details: ['You have no Citi applications tracked.'],
    };
  }

  const last8Days = citiCards.filter((c) => {
    const d = new Date(c.applicationDate + 'T00:00:00');
    return daysBetween(d, now) <= 8;
  });
  const last65Days = citiCards.filter((c) => {
    const d = new Date(c.applicationDate + 'T00:00:00');
    return daysBetween(d, now) <= 65;
  });

  const blocked8 = last8Days.length >= 1;
  const blocked65 = last65Days.length >= 2;
  const blocked = blocked8 || blocked65;

  const details: string[] = [];
  const lastApp = new Date(citiCards[0].applicationDate + 'T00:00:00');
  const daysSinceLast = daysBetween(lastApp, now);
  details.push(`Days since last Citi application: ${daysSinceLast}`);

  if (blocked8) {
    const eligible8 = addDays(lastApp, 9);
    details.push(`8-day rule: Wait until ${formatDate(eligible8.toISOString().split('T')[0])}`);
  } else {
    details.push('8-day rule: Eligible');
  }

  if (blocked65) {
    const sorted65 = [...last65Days].sort(
      (a, b) => new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime()
    );
    const oldest65 = new Date(sorted65[0].applicationDate + 'T00:00:00');
    const eligible65 = addDays(oldest65, 66);
    details.push(`65-day rule: ${last65Days.length}/2 — wait until ${formatDate(eligible65.toISOString().split('T')[0])}`);
  } else {
    details.push(`65-day rule: ${last65Days.length}/2 — eligible`);
  }

  let status: RuleStatus = 'eligible';
  if (blocked) status = 'blocked';
  else if (last65Days.length === 1) status = 'caution';

  return {
    name: 'Citi 8/65',
    issuer: 'Citi',
    status,
    summary: blocked ? 'Application restricted' : 'Eligible to apply',
    details,
  };
}

function calculateBofa234(cards: TrackedCard[]): RuleResult {
  const now = new Date();
  const bofaCards = cards.filter((c) => c.issuer === 'Bank of America');

  const last30 = bofaCards.filter((c) => daysBetween(new Date(c.applicationDate + 'T00:00:00'), now) <= 30).length;
  const last12mo = bofaCards.filter((c) => daysBetween(new Date(c.applicationDate + 'T00:00:00'), now) <= 365).length;
  const last24mo = bofaCards.filter((c) => daysBetween(new Date(c.applicationDate + 'T00:00:00'), now) <= 730).length;

  const blocked2 = last30 >= 2;
  const blocked3 = last12mo >= 3;
  const blocked4 = last24mo >= 4;
  const blocked = blocked2 || blocked3 || blocked4;

  const details = [
    `${last30}/2 in last 30 days${blocked2 ? ' — limit reached' : ''}`,
    `${last12mo}/3 in last 12 months${blocked3 ? ' — limit reached' : ''}`,
    `${last24mo}/4 in last 24 months${blocked4 ? ' — limit reached' : ''}`,
  ];

  let status: RuleStatus = 'eligible';
  if (blocked) {
    status = 'blocked';
  } else if (last30 === 1 || last12mo === 2 || last24mo === 3) {
    status = 'caution';
  }

  return {
    name: 'BofA 2/3/4',
    issuer: 'Bank of America',
    status,
    summary: blocked ? 'Application restricted' : 'Eligible to apply',
    details,
  };
}

function calculateCapOne(cards: TrackedCard[]): RuleResult {
  const openCapOne = cards.filter((c) => c.issuer === 'Capital One' && c.status === 'open');
  const count = openCapOne.length;

  const blocked = count >= 2;
  const details = [`${count} open Capital One card${count !== 1 ? 's' : ''}`];

  if (blocked) {
    details.push('Capital One generally limits consumers to 2 open cards. Close a card before applying for a new one.');
  }

  let status: RuleStatus = 'eligible';
  if (count >= 2) status = 'blocked';
  else if (count === 1) status = 'caution';

  return {
    name: 'Capital One 2-Card Limit',
    issuer: 'Capital One',
    status,
    summary: blocked ? `At limit (${count} open cards)` : `${count}/2 open cards`,
    details,
  };
}

// ─── Status Badge ─────────────────────────────────────────────
function StatusBadge({ status }: { status: RuleStatus }) {
  const config = {
    eligible: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300', label: 'Eligible' },
    caution: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300', label: 'Caution' },
    blocked: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300', label: 'Blocked' },
  }[status];

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
}

// ─── Rule Card ────────────────────────────────────────────────
function RuleCard({ result }: { result: RuleResult }) {
  const borderColor = {
    eligible: 'border-emerald-300',
    caution: 'border-amber-300',
    blocked: 'border-red-300',
  }[result.status];

  return (
    <div className={`bg-white rounded-xl border-2 ${borderColor} p-4 sm:p-5`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display font-bold text-base text-brand-navy">{result.name}</h3>
        <StatusBadge status={result.status} />
      </div>
      <p className="text-sm font-medium text-text-primary mb-2">{result.summary}</p>
      <ul className="space-y-1">
        {result.details.map((d, i) => (
          <li key={i} className="text-xs text-text-secondary">{d}</li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function CardTrackerTool() {
  const [cards, setCards] = useState<TrackedCard[]>(loadCards);
  const mountedRef = useRef(false);
  const liveRef = useRef<HTMLDivElement>(null);

  // Form state
  const [cardName, setCardName] = useState('');
  const [issuer, setIssuer] = useState<string>('Chase');
  const [cardType, setCardType] = useState<'personal' | 'business'>('personal');
  const [appDate, setAppDate] = useState(todayISO());
  const [cardStatus, setCardStatus] = useState<'open' | 'closed'>('open');

  // Editing
  const [editingId, setEditingId] = useState<string | null>(null);

  // Clear confirmation
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Save indicator
  const [showSaved, setShowSaved] = useState(false);

  const announce = useCallback((msg: string) => {
    if (liveRef.current) liveRef.current.textContent = msg;
  }, []);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  useEffect(() => {
    if (mountedRef.current) {
      saveCards(cards);
      setShowSaved(true);
      const t = setTimeout(() => setShowSaved(false), 2000);
      return () => clearTimeout(t);
    }
  }, [cards]);

  // ─── Rule results ─────────────────────────────────────────
  const ruleResults = useMemo<RuleResult[]>(() => [
    calculate524(cards),
    calculateAmexLifetime(cards),
    calculateCiti865(cards),
    calculateBofa234(cards),
    calculateCapOne(cards),
  ], [cards]);

  // ─── Form handlers ────────────────────────────────────────
  function resetForm() {
    setCardName('');
    setIssuer('Chase');
    setCardType('personal');
    setAppDate(todayISO());
    setCardStatus('open');
    setEditingId(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cardName.trim()) return;

    if (editingId) {
      setCards((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? { ...c, cardName: cardName.trim(), issuer, cardType, applicationDate: appDate, status: cardStatus }
            : c
        )
      );
      announce(`Updated ${cardName.trim()}.`);
    } else {
      const newCard: TrackedCard = {
        id: generateId(),
        cardName: cardName.trim(),
        issuer,
        cardType,
        applicationDate: appDate,
        status: cardStatus,
      };
      setCards((prev) => [...prev, newCard]);
      announce(`Added ${cardName.trim()}.`);
    }
    resetForm();
  }

  function startEdit(card: TrackedCard) {
    setCardName(card.cardName);
    setIssuer(card.issuer);
    setCardType(card.cardType);
    setAppDate(card.applicationDate);
    setCardStatus(card.status);
    setEditingId(card.id);
  }

  function deleteCard(id: string) {
    setCards((prev) => prev.filter((c) => c.id !== id));
    if (editingId === id) resetForm();
    announce('Card removed.');
  }

  function handleClearAll() {
    setCards([]);
    resetForm();
    setShowClearConfirm(false);
    announce('All data cleared.');
  }

  const sortedCards = useMemo(
    () => [...cards].sort((a, b) => new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime()),
    [cards]
  );

  return (
    <div className="space-y-8">
      {/* ARIA live region */}
      <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-xs text-amber-900 leading-relaxed">
          This tool is for informational and educational purposes only. Credit card terms, eligibility rules, and
          approval odds change frequently. Always verify current rules directly with the card issuer before applying.
          This is not financial advice.
        </p>
      </div>

      {/* ─── Results Dashboard ─────────────────────────────── */}
      <section aria-label="Rule status dashboard">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Your Rule Status</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ruleResults.map((r) => (
            <RuleCard key={r.name} result={r} />
          ))}
        </div>
      </section>

      {/* ─── Card Entry Form ───────────────────────────────── */}
      <section aria-label="Add a card">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">
          {editingId ? 'Edit Card' : 'Add a Card'}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Card name */}
            <div>
              <label htmlFor="ct-card-name" className="block text-sm font-medium text-brand-navy mb-1">
                Card Name
              </label>
              <input
                id="ct-card-name"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="e.g. Sapphire Preferred"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                required
              />
            </div>

            {/* Issuer */}
            <div>
              <label htmlFor="ct-issuer" className="block text-sm font-medium text-brand-navy mb-1">
                Issuer
              </label>
              <select
                id="ct-issuer"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                {ISSUERS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

            {/* Card type toggle */}
            <div>
              <span className="block text-sm font-medium text-brand-navy mb-1">Card Type</span>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden" role="radiogroup" aria-label="Card type">
                <button
                  type="button"
                  role="radio"
                  aria-checked={cardType === 'personal'}
                  onClick={() => setCardType('personal')}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    cardType === 'personal'
                      ? 'bg-brand-navy text-white'
                      : 'bg-white text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  Personal
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={cardType === 'business'}
                  onClick={() => setCardType('business')}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    cardType === 'business'
                      ? 'bg-brand-navy text-white'
                      : 'bg-white text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  Business
                </button>
              </div>
            </div>

            {/* Application date */}
            <div>
              <label htmlFor="ct-date" className="block text-sm font-medium text-brand-navy mb-1">
                Application Date
              </label>
              <input
                id="ct-date"
                type="date"
                value={appDate}
                onChange={(e) => setAppDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                required
              />
            </div>

            {/* Status toggle */}
            <div>
              <span className="block text-sm font-medium text-brand-navy mb-1">Status</span>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden" role="radiogroup" aria-label="Card status">
                <button
                  type="button"
                  role="radio"
                  aria-checked={cardStatus === 'open'}
                  onClick={() => setCardStatus('open')}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    cardStatus === 'open'
                      ? 'bg-brand-green text-white'
                      : 'bg-white text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  Open
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={cardStatus === 'closed'}
                  onClick={() => setCardStatus('closed')}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    cardStatus === 'closed'
                      ? 'bg-gray-500 text-white'
                      : 'bg-white text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  Closed
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
            >
              {editingId ? 'Save Changes' : 'Add Card'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2.5 border border-gray-300 text-text-secondary rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* ─── Card List ─────────────────────────────────────── */}
      {cards.length > 0 && (
        <section aria-label="Your cards">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl text-brand-navy">
              Your Cards ({cards.length})
            </h2>
            <div className="flex items-center gap-3">
              {showSaved && (
                <span className="text-xs text-brand-green font-medium animate-pulse">
                  Data saved to your browser
                </span>
              )}
              {!showClearConfirm ? (
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  Clear all data
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-600 font-medium">Are you sure?</span>
                  <button
                    onClick={handleClearAll}
                    className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Yes, clear
                  </button>
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="px-4 py-3 font-semibold text-brand-navy">Card</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Issuer</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Type</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Date</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Status</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy sr-only">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedCards.map((card) => (
                  <tr key={card.id} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-medium">{card.cardName}</td>
                    <td className="px-4 py-3 text-text-secondary">{card.issuer}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        card.cardType === 'personal'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {card.cardType === 'personal' ? 'Personal' : 'Business'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-text-secondary tabular-nums">{formatDate(card.applicationDate)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        card.status === 'open'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {card.status === 'open' ? 'Open' : 'Closed'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(card)}
                          className="text-xs text-brand-gold hover:text-amber-600 font-medium"
                          aria-label={`Edit ${card.cardName}`}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteCard(card.id)}
                          className="text-xs text-red-500 hover:text-red-700 font-medium"
                          aria-label={`Delete ${card.cardName}`}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {sortedCards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-sm text-brand-navy">{card.cardName}</p>
                    <p className="text-xs text-text-secondary">{card.issuer}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(card)}
                      className="text-xs text-brand-gold hover:text-amber-600 font-medium"
                      aria-label={`Edit ${card.cardName}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="text-xs text-red-500 hover:text-red-700 font-medium"
                      aria-label={`Delete ${card.cardName}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-full font-medium ${
                    card.cardType === 'personal' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {card.cardType === 'personal' ? 'Personal' : 'Business'}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-medium ${
                    card.status === 'open' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {card.status === 'open' ? 'Open' : 'Closed'}
                  </span>
                  <span className="text-text-secondary tabular-nums">{formatDate(card.applicationDate)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Privacy note */}
      <p className="text-xs text-text-secondary text-center">
        Your data is stored only in this browser. It is never sent to our servers.
      </p>
    </div>
  );
}
