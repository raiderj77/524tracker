'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  type CardApplication,
  get524Count,
  get524DropoffDate,
  get524Dropoffs,
  getEligibleBanks,
  sortByDate,
  generateId,
  exportToCSV,
  getAnnualFeeDueDate,
} from '@/lib/tracker';
import HardInquiryTracker from './HardInquiryTracker';
import { searchCards, type CardInfo } from '@/lib/cardList';

const STORAGE_KEY = '524tracker-applications';

const banks = [
  'Chase',
  'American Express',
  'Citi',
  'Bank of America',
  'Capital One',
  'Discover',
  'US Bank',
  'Barclays',
  'Wells Fargo',
  'Other',
];

function loadApplications(): CardApplication[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveApplications(apps: CardApplication[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  } catch {
    // localStorage full or unavailable
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function daysUntil(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

// SVG Progress Circle
function ProgressCircle({
  count,
  max,
  label,
}: {
  count: number;
  max: number;
  label: string;
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(count / max, 1);
  const offset = circumference - progress * circumference;
  const color =
    count <= 3 ? 'var(--brand-green)' : count === 4 ? 'var(--brand-gold)' : 'var(--brand-red)';

  return (
    <div
      className="relative inline-flex items-center justify-center"
      role="img"
      aria-label={label}
    >
      <svg width="140" height="140" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-3xl font-display font-bold tabular-nums"
          style={{ color }}
        >
          {count}
        </span>
        <span className="text-xs text-text-secondary font-medium">/ {max}</span>
      </div>
    </div>
  );
}

export default function TrackerTool() {
  const [applications, setApplications] = useState<CardApplication[]>(loadApplications);
  const mountedRef = useRef(false);
  const [countAU, setCountAU] = useState(true);

  // Form state
  const [cardName, setCardName] = useState('');
  const [bank, setBank] = useState('Chase');
  const [appDate, setAppDate] = useState(todayISO());
  const [status, setStatus] = useState<'approved' | 'denied' | 'pending'>('approved');
  const [isBusiness, setIsBusiness] = useState(false);
  const [amexBonus, setAmexBonus] = useState(false);
  const [annualFee, setAnnualFee] = useState('');
  const [cardOpenDate, setCardOpenDate] = useState('');

  // Autocomplete
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = useMemo<CardInfo[]>(() => {
    if (cardName.length >= 2) {
      return searchCards(cardName).slice(0, 8);
    }
    return [];
  }, [cardName]);

  // Editing
  const [editingId, setEditingId] = useState<string | null>(null);

  // Live region
  const liveRef = useRef<HTMLDivElement>(null);
  const announce = useCallback((msg: string) => {
    if (liveRef.current) {
      liveRef.current.textContent = msg;
    }
  }, []);

  // Mark component as mounted (for SSR hydration)
  useEffect(() => {
    mountedRef.current = true;
  }, []);

  // Save whenever applications change
  useEffect(() => {
    if (mountedRef.current) {
      saveApplications(applications);
    }
  }, [applications]);

  // Close suggestions on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function selectSuggestion(card: CardInfo) {
    setCardName(card.name);
    setBank(card.bank);
    setIsBusiness(card.isBusiness);
    setShowSuggestions(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cardName.trim()) return;

    const feeValue = annualFee !== '' ? parseFloat(annualFee) : undefined;
    const openDateValue = cardOpenDate || undefined;

    if (editingId) {
      setApplications((prev) =>
        prev.map((app) =>
          app.id === editingId
            ? {
                ...app,
                cardName: cardName.trim(),
                bank,
                applicationDate: appDate,
                status,
                isBusinessCard: isBusiness,
                amexBonusReceived: bank === 'American Express' ? amexBonus : undefined,
                annualFee: feeValue,
                cardOpenDate: openDateValue,
              }
            : app
        )
      );
      setEditingId(null);
      announce(`Updated ${cardName.trim()}.`);
    } else {
      const newApp: CardApplication = {
        id: generateId(),
        cardName: cardName.trim(),
        bank,
        applicationDate: appDate,
        status,
        isBusinessCard: isBusiness,
        amexBonusReceived: bank === 'American Express' ? amexBonus : undefined,
        annualFee: feeValue,
        cardOpenDate: openDateValue,
      };
      setApplications((prev) => [...prev, newApp]);
      const newCount = get524Count([...applications, newApp], countAU);
      announce(`Added ${cardName.trim()}. You are now ${newCount}/24.`);
    }

    resetForm();
  }

  function resetForm() {
    setCardName('');
    setBank('Chase');
    setAppDate(todayISO());
    setStatus('approved');
    setIsBusiness(false);
    setAmexBonus(false);
    setAnnualFee('');
    setCardOpenDate('');
    setEditingId(null);
  }

  function startEdit(app: CardApplication) {
    setEditingId(app.id);
    setCardName(app.cardName);
    setBank(app.bank);
    setAppDate(app.applicationDate);
    setStatus(app.status);
    setIsBusiness(app.isBusinessCard);
    setAmexBonus(app.amexBonusReceived ?? false);
    setAnnualFee(app.annualFee != null ? String(app.annualFee) : '');
    setCardOpenDate(app.cardOpenDate ?? '');
    document.getElementById('app-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  function deleteApp(id: string) {
    const app = applications.find((a) => a.id === id);
    if (!app) return;
    if (!window.confirm(`Delete "${app.cardName}" from your tracker?`)) return;
    setApplications((prev) => prev.filter((a) => a.id !== id));
    announce(`Deleted ${app.cardName}.`);
  }

  function handleExport() {
    const csv = exportToCSV(applications);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '524tracker-applications.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Computed values
  const count524 = get524Count(applications, countAU);
  const dropoffDate = get524DropoffDate(applications, countAU);
  const dropoffs = get524Dropoffs(applications, countAU);
  const eligibility = getEligibleBanks(applications);
  const sorted = sortByDate(applications);

  // Amex cards
  const amexCards = applications.filter(
    (a) => a.bank === 'American Express' && a.status === 'approved'
  );
  const amex90Count = amexCards.filter((a) => {
    const d = new Date(a.applicationDate);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 90);
    return d >= cutoff && !a.isBusinessCard;
  }).length;

  return (
    <section id="tracker" className="py-8">
      {/* ARIA live region */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />

      {/* Privacy banner */}
      <div className="bg-brand-navy/5 border border-brand-slate/20 rounded-xl p-4 mb-8 text-sm text-text-secondary">
        <strong className="text-text-primary">Your data is private.</strong> All
        application data is saved locally in your browser using localStorage.
        Nothing is sent to any server.
      </div>

      {/* Application Input Form */}
      <div
        id="app-form"
        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8"
      >
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">
          {editingId ? 'Edit Application' : 'Add a Card Application'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card Name */}
            <div className="relative">
              <label
                htmlFor="card-name"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Card Name
              </label>
              <input
                ref={inputRef}
                id="card-name"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                placeholder="e.g. Chase Sapphire Preferred"
                required
                autoComplete="off"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul
                  ref={suggestionsRef}
                  className="absolute z-20 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto"
                  role="listbox"
                >
                  {suggestions.map((card, i) => (
                    <li
                      key={i}
                      role="option"
                      aria-selected={false}
                      className="px-3 py-2.5 text-sm hover:bg-brand-light cursor-pointer flex justify-between items-center min-h-[44px]"
                      onClick={() => selectSuggestion(card)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') selectSuggestion(card);
                      }}
                      tabIndex={0}
                    >
                      <span>{card.name}</span>
                      <span className="text-xs text-text-secondary ml-2">
                        {card.bank}
                        {card.isBusiness ? ' (Biz)' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bank */}
            <div>
              <label
                htmlFor="bank"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Bank
              </label>
              <select
                id="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              >
                {banks.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="application-date"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Application Date
              </label>
              <input
                id="application-date"
                type="date"
                value={appDate}
                onChange={(e) => setAppDate(e.target.value)}
                max={todayISO()}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
            </div>

            {/* Status */}
            <fieldset>
              <legend className="block text-sm font-medium text-text-primary mb-1">
                Status
              </legend>
              <div className="flex gap-4 items-center h-[44px]">
                {[
                  { value: 'approved' as const, icon: '\u2705', label: 'Approved' },
                  { value: 'denied' as const, icon: '\u274C', label: 'Denied' },
                  { value: 'pending' as const, icon: '\u23F3', label: 'Pending' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-1.5 text-sm cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="status"
                      value={opt.value}
                      checked={status === opt.value}
                      onChange={() => setStatus(opt.value)}
                      className="w-4 h-4 accent-brand-gold"
                    />
                    <span aria-hidden="true">{opt.icon}</span>
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6 items-center">
            <label className="flex items-center gap-2 text-sm cursor-pointer min-h-[44px]">
              <input
                type="checkbox"
                checked={isBusiness}
                onChange={(e) => setIsBusiness(e.target.checked)}
                className="w-4 h-4 accent-brand-gold rounded"
              />
              <span>Business card</span>
              <span className="text-xs text-text-secondary" title="Most business cards do NOT count toward Chase 5/24">
                (?)
              </span>
            </label>

            {bank === 'American Express' && (
              <label className="flex items-center gap-2 text-sm cursor-pointer min-h-[44px]">
                <input
                  type="checkbox"
                  checked={amexBonus}
                  onChange={(e) => setAmexBonus(e.target.checked)}
                  className="w-4 h-4 accent-brand-gold rounded"
                />
                <span>Received welcome bonus</span>
              </label>
            )}
          </div>

          {/* Annual Fee & Card Open Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="annual-fee"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Annual Fee (optional)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">$</span>
                <input
                  id="annual-fee"
                  type="number"
                  min="0"
                  step="1"
                  value={annualFee}
                  onChange={(e) => setAnnualFee(e.target.value)}
                  placeholder="e.g. 95"
                  className="w-full pl-7 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="card-open-date"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Card Open Date (optional)
              </label>
              <input
                id="card-open-date"
                type="date"
                value={cardOpenDate}
                onChange={(e) => setCardOpenDate(e.target.value)}
                max={todayISO()}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
              <p className="text-[10px] text-text-secondary mt-0.5">Defaults to application date if blank</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors min-h-[44px] text-sm"
            >
              {editingId ? 'Save Changes' : 'Add Application'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-secondary hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Dashboard - only show when applications exist */}
      {applications.length > 0 && (
        <div className="space-y-6">
          {/* Top row: 5/24 + Amex */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Chase 5/24 Status */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Chase 5/24 Status
              </h3>
              <div className="flex items-center gap-6">
                <ProgressCircle
                  count={count524}
                  max={5}
                  label={`Chase 5/24 status: ${count524} out of 5 cards`}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-sm font-medium">
                    You are{' '}
                    <span
                      className="text-lg font-bold tabular-nums"
                      style={{
                        color:
                          count524 <= 3
                            ? 'var(--brand-green)'
                            : count524 === 4
                              ? 'var(--brand-gold)'
                              : 'var(--brand-red)',
                      }}
                    >
                      {count524}/24
                    </span>
                  </p>
                  <p className="text-xs text-text-secondary">
                    {count524 < 5
                      ? `You can open ${5 - count524} more personal card${5 - count524 !== 1 ? 's' : ''} and remain under 5/24.`
                      : 'You are at or over 5/24. Chase will likely deny new card applications.'}
                  </p>
                  {dropoffDate && (
                    <p className="text-xs text-text-secondary">
                      Next drop-off:{' '}
                      <strong>
                        {dropoffDate.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </strong>{' '}
                      ({daysUntil(dropoffDate)} days)
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <label className="flex items-center gap-2 text-xs text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={countAU}
                    onChange={(e) => setCountAU(e.target.checked)}
                    className="w-3.5 h-3.5 accent-brand-gold rounded"
                  />
                  Count authorized user cards toward 5/24
                </label>
              </div>
            </div>

            {/* Card 2: Amex Bonus Tracker */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Amex Bonus Tracker
              </h3>
              {amexCards.length > 0 ? (
                <>
                  <ul className="space-y-2 mb-4">
                    {amexCards.map((app) => (
                      <li
                        key={app.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <span>{app.cardName}</span>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            app.amexBonusReceived
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {app.amexBonusReceived
                            ? 'Bonus Received'
                            : 'Eligible for Bonus'}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {amexCards.some((a) => a.amexBonusReceived) && (
                    <p className="text-xs text-brand-red font-medium">
                      Amex lifetime rule: You cannot earn the welcome bonus again
                      on cards where you already received it.
                    </p>
                  )}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-text-secondary">
                      2/90 Status:{' '}
                      <span
                        className={`font-semibold ${amex90Count >= 2 ? 'text-brand-red' : 'text-brand-green'}`}
                      >
                        {amex90Count}/2
                      </span>{' '}
                      personal Amex cards in past 90 days
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-text-secondary">
                  No Amex cards tracked yet. Add an American Express application above.
                </p>
              )}
            </div>
          </div>

          {/* Card 3: Bank-by-Bank Eligibility */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-x-auto">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
              Bank-by-Bank Eligibility
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="pb-2 font-medium text-text-secondary">Bank</th>
                  <th className="pb-2 font-medium text-text-secondary">Rule</th>
                  <th className="pb-2 font-medium text-text-secondary">Count</th>
                  <th className="pb-2 font-medium text-text-secondary">Status</th>
                  <th className="pb-2 font-medium text-text-secondary">
                    Next Eligible
                  </th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((bankEl) =>
                  bankEl.rules.map((ruleCheck, i) => (
                    <tr
                      key={`${bankEl.bank}-${i}`}
                      className="border-b border-gray-50"
                    >
                      {i === 0 && (
                        <td
                          className="py-2 font-medium align-top"
                          rowSpan={bankEl.rules.length}
                        >
                          {bankEl.bank}
                        </td>
                      )}
                      <td className="py-2 text-text-secondary">
                        {ruleCheck.rule.ruleCode}
                      </td>
                      <td className="py-2 tabular-nums">
                        {ruleCheck.count}/{ruleCheck.rule.maxApplications}
                      </td>
                      <td className="py-2">
                        {ruleCheck.violated ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Ineligible
                          </span>
                        ) : ruleCheck.count >= ruleCheck.rule.maxApplications - 1 ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Approaching Limit
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Eligible
                          </span>
                        )}
                      </td>
                      <td className="py-2 text-xs text-text-secondary">
                        {ruleCheck.resetDate
                          ? ruleCheck.resetDate.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          : '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Card 4: Application Timeline */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg text-brand-navy">
                Application Timeline
              </h3>
              <button
                onClick={handleExport}
                className="text-sm text-brand-gold hover:text-amber-600 font-medium transition-colors min-h-[44px] px-3"
              >
                Export to CSV
              </button>
            </div>
            <div className="space-y-2">
              {sorted.map((app) => {
                const dropoff524 = new Date(app.applicationDate);
                dropoff524.setDate(dropoff524.getDate() + 730);
                const countsFor524 =
                  app.status === 'approved' && !app.isBusinessCard;
                const feeDue = getAnnualFeeDueDate(app);
                const feeDays = feeDue ? daysUntil(feeDue) : null;

                return (
                  <div
                    key={app.id}
                    className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg hover:bg-brand-light/50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-sm truncate">
                          {app.cardName}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {app.bank}
                        </span>
                        {app.isBusinessCard && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-800">
                            Biz
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${
                            app.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : app.status === 'denied'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <div className="text-xs text-text-secondary mt-0.5">
                        {formatDate(app.applicationDate)}
                        {countsFor524 && dropoff524 > new Date() && (
                          <span className="ml-2">
                            &middot; Drops off 5/24 on{' '}
                            {dropoff524.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                        {feeDue && feeDays != null ? (
                          <span className="ml-2">
                            &middot; Fee ${app.annualFee} due{' '}
                            <span className={
                              feeDays < 30 ? 'text-brand-red font-medium' :
                              feeDays < 60 ? 'text-brand-gold font-medium' :
                              'text-brand-green'
                            }>
                              in {feeDays} days
                            </span>
                          </span>
                        ) : app.annualFee != null && app.annualFee <= 0 ? (
                          <span className="ml-2">&middot; No annual fee</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEdit(app)}
                        className="p-2 text-text-secondary hover:text-brand-gold rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label={`Edit ${app.cardName}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteApp(app.id)}
                        className="p-2 text-text-secondary hover:text-brand-red rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label={`Delete ${app.cardName}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 5: Upcoming Drop-offs */}
          {dropoffs.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Upcoming 5/24 Drop-offs
              </h3>
              <div className="space-y-3">
                {dropoffs.slice(0, 3).map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{d.cardName}</p>
                      <p className="text-xs text-text-secondary">
                        Drops off{' '}
                        {d.dropoffDate.toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold tabular-nums text-brand-gold">
                        {daysUntil(d.dropoffDate)} days
                      </p>
                      <p className="text-xs text-text-secondary">
                        You&apos;ll be {d.countAfter}/5
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upcoming Annual Fees */}
      {applications.length > 0 && (() => {
        const upcomingFees = applications
          .map((app) => {
            const due = getAnnualFeeDueDate(app);
            if (!due) return null;
            const days = daysUntil(due);
            if (days > 90) return null;
            return { cardName: app.cardName, fee: app.annualFee!, dueDate: due, days };
          })
          .filter((x): x is { cardName: string; fee: number; dueDate: Date; days: number } => x !== null)
          .sort((a, b) => a.days - b.days);

        return (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-6">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
              Upcoming Annual Fees
            </h3>
            {upcomingFees.length > 0 ? (
              <div className="space-y-3">
                {upcomingFees.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium">{item.cardName}</p>
                      <p className="text-xs text-text-secondary">
                        Due {item.dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold tabular-nums">${item.fee}</p>
                      <p className={`text-xs font-medium tabular-nums ${
                        item.days < 30 ? 'text-brand-red' :
                        item.days < 60 ? 'text-brand-gold' :
                        'text-brand-green'
                      }`}>
                        {item.days} days
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-secondary">
                No annual fees due in the next 90 days.
              </p>
            )}
          </div>
        );
      })()}

      {/* Hard Inquiry Tracker */}
      <HardInquiryTracker />

      {/* Informational disclaimer */}
      <div className="mt-8 p-4 border border-gray-200 rounded-xl text-xs text-text-secondary leading-relaxed">
        <strong>Disclaimer:</strong> This tool tracks application dates and
        applies published bank rules. It cannot guarantee approval or predict
        your credit score impact. Rules verified as of March 2026. Bank policies
        change without notice. Always verify with the card issuer before
        applying.
      </div>
    </section>
  );
}
