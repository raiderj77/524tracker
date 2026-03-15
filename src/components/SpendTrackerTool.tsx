'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────
interface SpendCard {
  id: string;
  cardName: string;
  issuer: string;
  bonusAmount: string;
  minSpend: number;
  spentSoFar: number;
  applicationDate: string; // ISO
  deadlineOverride: string; // ISO or ''
  status: 'active' | 'earned' | 'abandoned';
}

type Urgency = 'green' | 'yellow' | 'red';

// ─── Constants ────────────────────────────────────────────────
const STORAGE_KEY = 'spend_tracker_v1';
const ISSUERS = ['Chase', 'Amex', 'Citi', 'Bank of America', 'Capital One', 'Discover', 'Other'] as const;

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

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d;
}

function daysFromNow(target: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const t = new Date(target);
  t.setHours(0, 0, 0, 0);
  return Math.ceil((t.getTime() - now.getTime()) / 86400000);
}

function getDeadline(card: SpendCard): Date {
  if (card.deadlineOverride) {
    return new Date(card.deadlineOverride + 'T00:00:00');
  }
  return addDays(card.applicationDate, 90);
}

function getUrgency(daysLeft: number, dailySpend: number): Urgency {
  if (daysLeft < 15 || dailySpend > 50) return 'red';
  if (daysLeft < 30 || dailySpend > 20) return 'yellow';
  return 'green';
}

function loadCards(): SpendCard[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCards(cards: SpendCard[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch {
    // localStorage full or unavailable
  }
}

function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

// ─── Status Badge ─────────────────────────────────────────────
function UrgencyBadge({ urgency, daysLeft }: { urgency: Urgency; daysLeft: number }) {
  const config = {
    green: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300', label: 'On Track' },
    yellow: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300', label: 'Caution' },
    red: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300', label: daysLeft <= 0 ? 'Expired' : 'Urgent' },
  }[urgency];

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────
function ProgressBar({ spent, target, urgency }: { spent: number; target: number; urgency: Urgency }) {
  const pct = Math.min(100, Math.round((spent / target) * 100));
  const barColor = {
    green: 'bg-emerald-500',
    yellow: 'bg-amber-500',
    red: 'bg-red-500',
  }[urgency];

  return (
    <div className="w-full" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${pct}% of minimum spend reached`}>
      <div className="flex justify-between text-xs text-text-secondary mb-1">
        <span>{formatCurrency(spent)} spent</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function SpendTrackerTool() {
  const [cards, setCards] = useState<SpendCard[]>(loadCards);
  const mountedRef = useRef(false);
  const liveRef = useRef<HTMLDivElement>(null);

  // Form state
  const [cardName, setCardName] = useState('');
  const [issuer, setIssuer] = useState<string>('Chase');
  const [bonusAmount, setBonusAmount] = useState('');
  const [minSpend, setMinSpend] = useState('');
  const [spentSoFar, setSpentSoFar] = useState('');
  const [appDate, setAppDate] = useState(todayISO());
  const [deadlineOverride, setDeadlineOverride] = useState('');
  const [status, setStatus] = useState<'active' | 'earned' | 'abandoned'>('active');

  // Edit
  const [editingId, setEditingId] = useState<string | null>(null);

  // Clear confirmation
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Save indicator
  const [showSaved, setShowSaved] = useState(false);

  // Completed section
  const [showCompleted, setShowCompleted] = useState(false);

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

  // ─── Computed ───────────────────────────────────────────────
  const activeCards = useMemo(
    () => cards
      .filter((c) => c.status === 'active')
      .sort((a, b) => getDeadline(a).getTime() - getDeadline(b).getTime()),
    [cards]
  );

  const completedCards = useMemo(
    () => cards.filter((c) => c.status === 'earned' || c.status === 'abandoned'),
    [cards]
  );

  const totalBonusAtStake = activeCards.reduce((sum, c) => {
    const match = c.bonusAmount.match(/[\d,]+/);
    return sum + (match ? parseInt(match[0].replace(/,/g, ''), 10) : 0);
  }, 0);

  const totalRemaining = activeCards.reduce((sum, c) => sum + Math.max(0, c.minSpend - c.spentSoFar), 0);

  // ─── Form handlers ─────────────────────────────────────────
  function resetForm() {
    setCardName('');
    setIssuer('Chase');
    setBonusAmount('');
    setMinSpend('');
    setSpentSoFar('');
    setAppDate(todayISO());
    setDeadlineOverride('');
    setStatus('active');
    setEditingId(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cardName.trim() || !minSpend) return;

    const minSpendNum = parseFloat(minSpend) || 0;
    const spentNum = parseFloat(spentSoFar) || 0;

    if (editingId) {
      setCards((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? { ...c, cardName: cardName.trim(), issuer, bonusAmount: bonusAmount.trim(), minSpend: minSpendNum, spentSoFar: spentNum, applicationDate: appDate, deadlineOverride, status }
            : c
        )
      );
      announce(`Updated ${cardName.trim()}.`);
    } else {
      const newCard: SpendCard = {
        id: generateId(),
        cardName: cardName.trim(),
        issuer,
        bonusAmount: bonusAmount.trim(),
        minSpend: minSpendNum,
        spentSoFar: spentNum,
        applicationDate: appDate,
        deadlineOverride,
        status,
      };
      setCards((prev) => [...prev, newCard]);
      announce(`Added ${cardName.trim()}.`);
    }
    resetForm();
  }

  function startEdit(card: SpendCard) {
    setCardName(card.cardName);
    setIssuer(card.issuer);
    setBonusAmount(card.bonusAmount);
    setMinSpend(String(card.minSpend));
    setSpentSoFar(String(card.spentSoFar));
    setAppDate(card.applicationDate);
    setDeadlineOverride(card.deadlineOverride);
    setStatus(card.status);
    setEditingId(card.id);
  }

  function deleteCard(id: string) {
    setCards((prev) => prev.filter((c) => c.id !== id));
    if (editingId === id) resetForm();
    announce('Card removed.');
  }

  function markEarned(id: string) {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, status: 'earned' as const } : c)));
    announce('Bonus marked as earned.');
  }

  function handleClearAll() {
    setCards([]);
    resetForm();
    setShowClearConfirm(false);
    announce('All data cleared.');
  }

  return (
    <div className="space-y-8">
      {/* ARIA live region */}
      <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-xs text-amber-900 leading-relaxed">
          This tool is for informational and educational purposes only. Credit card terms and bonus requirements change frequently.
          Always verify current offer terms directly with the card issuer. This is not financial advice.
        </p>
      </div>

      {/* ─── Summary Dashboard ─────────────────────────────── */}
      {activeCards.length > 0 && (
        <section aria-label="Spend tracker summary">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-brand-navy">{activeCards.length}</p>
              <p className="text-xs text-text-secondary mt-1">Active Card{activeCards.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-brand-gold">{totalBonusAtStake.toLocaleString()}</p>
              <p className="text-xs text-text-secondary mt-1">Bonus Value at Stake</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-brand-navy">{formatCurrency(totalRemaining)}</p>
              <p className="text-xs text-text-secondary mt-1">Total Remaining Spend</p>
            </div>
          </div>
        </section>
      )}

      {/* ─── Active Cards ──────────────────────────────────── */}
      {activeCards.length > 0 && (
        <section aria-label="Active cards">
          <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Active Cards</h2>
          <div className="space-y-4">
            {activeCards.map((card) => {
              const deadline = getDeadline(card);
              const daysLeft = daysFromNow(deadline);
              const remaining = Math.max(0, card.minSpend - card.spentSoFar);
              const dailySpend = daysLeft > 0 ? remaining / daysLeft : remaining > 0 ? Infinity : 0;
              const urgency = card.spentSoFar >= card.minSpend ? 'green' as Urgency : getUrgency(daysLeft, dailySpend);
              const completed = card.spentSoFar >= card.minSpend;

              return (
                <div key={card.id} className={`bg-white rounded-xl border-2 p-4 sm:p-5 ${
                  completed ? 'border-emerald-300' :
                  urgency === 'red' ? 'border-red-300' :
                  urgency === 'yellow' ? 'border-amber-300' :
                  'border-gray-200'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-base text-brand-navy">{card.cardName}</h3>
                        <span className="text-xs text-text-secondary">{card.issuer}</span>
                        {completed ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-emerald-100 text-emerald-800 border-emerald-300">
                            Spend Met
                          </span>
                        ) : (
                          <UrgencyBadge urgency={urgency} daysLeft={daysLeft} />
                        )}
                      </div>
                      {card.bonusAmount && (
                        <p className="text-sm text-brand-gold font-medium mt-1">{card.bonusAmount}</p>
                      )}
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {!completed && (
                        <button
                          onClick={() => markEarned(card.id)}
                          className="text-xs text-emerald-600 hover:text-emerald-800 font-medium"
                          aria-label={`Mark ${card.cardName} bonus as earned`}
                        >
                          Earned
                        </button>
                      )}
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

                  <ProgressBar spent={card.spentSoFar} target={card.minSpend} urgency={urgency} />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 text-xs">
                    <div>
                      <span className="text-text-secondary">Remaining</span>
                      <p className="font-semibold tabular-nums">{formatCurrency(remaining)}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Deadline</span>
                      <p className="font-semibold tabular-nums">{formatDate(deadline.toISOString().split('T')[0])}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Days Left</span>
                      <p className={`font-semibold tabular-nums ${daysLeft <= 0 ? 'text-red-600' : daysLeft < 15 ? 'text-red-600' : daysLeft < 30 ? 'text-amber-600' : ''}`}>
                        {daysLeft <= 0 ? 'Expired' : daysLeft}
                      </p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Daily Spend Needed</span>
                      <p className={`font-semibold tabular-nums ${
                        completed ? 'text-emerald-600' :
                        dailySpend > 50 ? 'text-red-600' :
                        dailySpend > 20 ? 'text-amber-600' : ''
                      }`}>
                        {completed ? 'Done' : daysLeft <= 0 ? '—' : formatCurrency(Math.ceil(dailySpend)) + '/day'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

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
              <label htmlFor="st-card-name" className="block text-sm font-medium text-brand-navy mb-1">
                Card Name
              </label>
              <input
                id="st-card-name"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="e.g. Sapphire Preferred"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
                required
              />
            </div>

            {/* Issuer */}
            <div>
              <label htmlFor="st-issuer" className="block text-sm font-medium text-brand-navy mb-1">
                Issuer
              </label>
              <select
                id="st-issuer"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
              >
                {ISSUERS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

            {/* Bonus amount */}
            <div>
              <label htmlFor="st-bonus" className="block text-sm font-medium text-brand-navy mb-1">
                Bonus Amount
              </label>
              <input
                id="st-bonus"
                type="text"
                value={bonusAmount}
                onChange={(e) => setBonusAmount(e.target.value)}
                placeholder='e.g. 60,000 points or $500 cash back'
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
              />
            </div>

            {/* Min spend */}
            <div>
              <label htmlFor="st-minspend" className="block text-sm font-medium text-brand-navy mb-1">
                Minimum Spend Required
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">$</span>
                <input
                  id="st-minspend"
                  type="number"
                  min="0"
                  step="1"
                  value={minSpend}
                  onChange={(e) => setMinSpend(e.target.value)}
                  placeholder="e.g. 4000"
                  className="w-full pl-7 pr-3 rounded-lg border border-gray-300 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
                  required
                />
              </div>
            </div>

            {/* Spent so far */}
            <div>
              <label htmlFor="st-spent" className="block text-sm font-medium text-brand-navy mb-1">
                Amount Spent So Far
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">$</span>
                <input
                  id="st-spent"
                  type="number"
                  min="0"
                  step="0.01"
                  value={spentSoFar}
                  onChange={(e) => setSpentSoFar(e.target.value)}
                  placeholder="0"
                  className="w-full pl-7 pr-3 rounded-lg border border-gray-300 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
                />
              </div>
            </div>

            {/* Application date */}
            <div>
              <label htmlFor="st-date" className="block text-sm font-medium text-brand-navy mb-1">
                Application Date
              </label>
              <input
                id="st-date"
                type="date"
                value={appDate}
                onChange={(e) => setAppDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
                required
              />
            </div>

            {/* Deadline override */}
            <div>
              <label htmlFor="st-deadline" className="block text-sm font-medium text-brand-navy mb-1">
                Deadline Override <span className="text-text-secondary font-normal">(optional)</span>
              </label>
              <input
                id="st-deadline"
                type="date"
                value={deadlineOverride}
                onChange={(e) => setDeadlineOverride(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold min-h-[44px]"
              />
              <p className="text-[10px] text-text-secondary mt-0.5">Defaults to 90 days from application date</p>
            </div>

            {/* Status */}
            <div>
              <span className="block text-sm font-medium text-brand-navy mb-1">Status</span>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden" role="radiogroup" aria-label="Card status">
                {([
                  { value: 'active' as const, label: 'Active', activeBg: 'bg-brand-navy' },
                  { value: 'earned' as const, label: 'Bonus Earned', activeBg: 'bg-emerald-600' },
                  { value: 'abandoned' as const, label: 'Abandoned', activeBg: 'bg-gray-500' },
                ]).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={status === opt.value}
                    onClick={() => setStatus(opt.value)}
                    className={`flex-1 py-2 text-xs font-medium transition-colors min-h-[44px] ${
                      status === opt.value
                        ? `${opt.activeBg} text-white`
                        : 'bg-white text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm min-h-[44px]"
            >
              {editingId ? 'Save Changes' : 'Add Card'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2.5 border border-gray-300 text-text-secondary rounded-lg hover:bg-gray-50 transition-colors text-sm min-h-[44px]"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* ─── Completed Cards ───────────────────────────────── */}
      {completedCards.length > 0 && (
        <section aria-label="Completed cards">
          <button
            type="button"
            onClick={() => setShowCompleted(!showCompleted)}
            className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors min-h-[44px]"
            aria-expanded={showCompleted}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showCompleted ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Completed ({completedCards.length})
          </button>

          {showCompleted && (
            <div className="mt-3 space-y-2">
              {completedCards.map((card) => (
                <div key={card.id} className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{card.cardName}</p>
                    <div className="flex gap-2 text-xs text-text-secondary">
                      <span>{card.issuer}</span>
                      {card.bonusAmount && <span>&middot; {card.bonusAmount}</span>}
                      <span>&middot;
                        <span className={card.status === 'earned' ? 'text-emerald-600 font-medium' : 'text-gray-500'}>
                          {card.status === 'earned' ? ' Bonus Earned' : ' Abandoned'}
                        </span>
                      </span>
                    </div>
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
              ))}
            </div>
          )}
        </section>
      )}

      {/* ─── Clear / Cross-link ────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/card-tracker" className="text-sm text-brand-gold hover:text-amber-600 font-medium">
          Tracking issuer rules? Use our Card Tracker &rarr;
        </Link>
        <div className="flex items-center gap-3">
          {showSaved && (
            <span className="text-xs text-brand-green font-medium animate-pulse">
              Data saved to your browser
            </span>
          )}
          {cards.length > 0 && (
            !showClearConfirm ? (
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
            )
          )}
        </div>
      </div>

      {/* Privacy note */}
      <p className="text-xs text-text-secondary text-center">
        Your data is stored only in this browser and is never sent to our servers.
      </p>
    </div>
  );
}
