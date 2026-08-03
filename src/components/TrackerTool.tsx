'use client';

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { PrintResultsButton } from './PrintResultsButton';
import {
  type CardApplication,
  get524Count,
  get524DropoffDate,
  get524Dropoffs,
  get524ReferenceDate,
  sortByDate,
  generateId,
  exportToCSV,
  parseStoredApplications,
} from '@/lib/tracker';
import { searchCards, type CardInfo } from '@/lib/cardList';

const STORAGE_KEY = '524tracker-applications';
const subscribeToHydration = () => () => {};

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
    return parseStoredApplications(localStorage.getItem(STORAGE_KEY));
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
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const previousApplicationsRef = useRef(applications);
  const [countAU, setCountAU] = useState(true);

  // Form state
  const [cardName, setCardName] = useState('');
  const [bank, setBank] = useState('Chase');
  const [appDate, setAppDate] = useState(todayISO());
  const [status, setStatus] = useState<'approved' | 'denied' | 'pending'>('approved');
  const [isBusiness, setIsBusiness] = useState(false);
  const [isAuthorizedUser, setIsAuthorizedUser] = useState(false);
  const [reportsToPersonalCredit, setReportsToPersonalCredit] = useState(false);
  const [cardOpenDate, setCardOpenDate] = useState('');

  // Autocomplete
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
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
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Live region
  const liveRef = useRef<HTMLDivElement>(null);
  const announce = useCallback((msg: string) => {
    if (liveRef.current) {
      liveRef.current.textContent = msg;
    }
  }, []);

  // State initializes from browser storage, while visible data stays empty until hydration.
  // Save only after a user action changes the initialized state.
  useEffect(() => {
    if (!hydrated || previousApplicationsRef.current === applications) return;
    saveApplications(applications);
    previousApplicationsRef.current = applications;
  }, [applications, hydrated]);

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
        setActiveSuggestionIndex(-1);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function selectSuggestion(card: CardInfo) {
    setCardName(card.name);
    setBank(card.bank);
    setIsBusiness(card.isBusiness);
    setReportsToPersonalCredit(false);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  }

  function handleAutocompleteKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (suggestions.length === 0) return;
      event.preventDefault();
      setShowSuggestions(true);
      setActiveSuggestionIndex((current) => {
        if (event.key === 'ArrowDown') return current < suggestions.length - 1 ? current + 1 : 0;
        return current > 0 ? current - 1 : suggestions.length - 1;
      });
      return;
    }

    if (
      event.key === 'Enter' &&
      showSuggestions &&
      activeSuggestionIndex >= 0 &&
      suggestions[activeSuggestionIndex]
    ) {
      event.preventDefault();
      selectSuggestion(suggestions[activeSuggestionIndex]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cardName.trim()) return;

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
                isAuthorizedUser,
                reportsToPersonalCredit: isBusiness ? reportsToPersonalCredit : true,
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
        isAuthorizedUser,
        reportsToPersonalCredit: isBusiness ? reportsToPersonalCredit : true,
        cardOpenDate: openDateValue,
      };
      setApplications((prev) => [...prev, newApp]);
      const newCount = get524Count([...applications, newApp], countAU);
      announce(`Added ${cardName.trim()}. Your current 24-month reference count is ${newCount} out of 5.`);
    }

    resetForm();
  }

  function resetForm() {
    setCardName('');
    setBank('Chase');
    setAppDate(todayISO());
    setStatus('approved');
    setIsBusiness(false);
    setIsAuthorizedUser(false);
    setReportsToPersonalCredit(false);
    setCardOpenDate('');
    setEditingId(null);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  }

  function startEdit(app: CardApplication) {
    setEditingId(app.id);
    setCardName(app.cardName);
    setBank(app.bank);
    setAppDate(app.applicationDate);
    setStatus(app.status);
    setIsBusiness(app.isBusinessCard);
    setIsAuthorizedUser(app.isAuthorizedUser ?? false);
    setReportsToPersonalCredit(app.reportsToPersonalCredit ?? !app.isBusinessCard);
    setCardOpenDate(app.cardOpenDate ?? '');
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
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
  const visibleApplications = hydrated ? applications : [];
  const count524 = get524Count(visibleApplications, countAU);
  const dropoffDate = get524DropoffDate(visibleApplications, countAU);
  const dropoffs = get524Dropoffs(visibleApplications, countAU);
  const sorted = sortByDate(visibleApplications);
  const suggestionsOpen = showSuggestions && suggestions.length > 0;
  return (
    <section id="tracker" className="py-8">
      {/* ARIA live region */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />

      {/* Privacy banner */}
      <div className="bg-brand-navy/5 border border-brand-slate/20 rounded-xl p-4 mb-8 text-sm text-text-secondary">
        <strong className="text-text-primary">Your entries stay in this browser by default.</strong>{' '}
        Application data is saved in localStorage and is not intentionally sent to 524Tracker
        servers. Printing, exporting, copying, or sharing is initiated only when you choose it.
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
                onChange={(e) => {
                  const value = e.target.value;
                  setCardName(value);
                  setShowSuggestions(value.trim().length >= 2);
                  setActiveSuggestionIndex(0);
                }}
                onFocus={() => {
                  if (suggestions.length > 0) {
                    setShowSuggestions(true);
                    setActiveSuggestionIndex(0);
                  }
                }}
                onKeyDown={handleAutocompleteKeyDown}
                placeholder="e.g. Chase Sapphire Preferred"
                required
                autoComplete="off"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={suggestionsOpen}
                aria-controls="card-name-suggestions"
                aria-activedescendant={
                  suggestionsOpen && activeSuggestionIndex >= 0
                    ? `card-name-suggestion-${activeSuggestionIndex}`
                    : undefined
                }
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
              {suggestionsOpen && (
                <ul
                  id="card-name-suggestions"
                  ref={suggestionsRef}
                  className="absolute z-20 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto"
                  role="listbox"
                >
                  {suggestions.map((card, i) => (
                    <li
                      id={`card-name-suggestion-${i}`}
                      key={`${card.bank}-${card.name}-${i}`}
                      role="option"
                      aria-selected={activeSuggestionIndex === i}
                      className={`flex min-h-[44px] cursor-pointer items-center justify-between px-3 py-2.5 text-sm ${
                        activeSuggestionIndex === i ? 'bg-brand-light' : 'hover:bg-brand-light'
                      }`}
                      onMouseEnter={() => setActiveSuggestionIndex(i)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        selectSuggestion(card);
                      }}
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
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
            </div>

            {/* Status */}
            <fieldset>
              <legend className="block text-sm font-medium text-text-primary mb-1">
                Status
              </legend>
              <div className="flex min-h-[44px] flex-wrap items-center gap-x-4 gap-y-2">
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
                onChange={(e) => {
                  setIsBusiness(e.target.checked);
                  if (!e.target.checked) setReportsToPersonalCredit(false);
                }}
                className="w-4 h-4 accent-brand-gold rounded"
              />
              <span>Business card</span>
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer min-h-[44px]">
              <input
                type="checkbox"
                checked={isAuthorizedUser}
                onChange={(e) => setIsAuthorizedUser(e.target.checked)}
                className="w-4 h-4 accent-brand-gold rounded"
              />
              <span>Authorized-user account</span>
            </label>

            {isBusiness && (
              <label className="flex items-center gap-2 text-sm cursor-pointer min-h-[44px]">
                <input
                  type="checkbox"
                  checked={reportsToPersonalCredit}
                  onChange={(e) => setReportsToPersonalCredit(e.target.checked)}
                  className="w-4 h-4 accent-brand-gold rounded"
                />
                <span>Appears on my personal credit report</span>
              </label>
            )}

          </div>

          {/* Account-open date */}
          <div className="max-w-md">
            <div>
              <label
                htmlFor="card-open-date"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Account Open Date (recommended)
              </label>
              <input
                id="card-open-date"
                type="date"
                value={cardOpenDate}
                onChange={(e) => setCardOpenDate(e.target.value)}
                max={todayISO()}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
              />
              <p className="text-[10px] text-text-secondary mt-0.5">
                Used for the 24-month count; falls back to application date if blank.
              </p>
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
      {visibleApplications.length > 0 && (
        <div data-printable-results className="space-y-6">
          <div className="flex justify-end">
            <PrintResultsButton label="Print Tracker Results" />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Unofficial 5/24 Reference Count
              </h3>
              <div className="flex items-center gap-6">
                <ProgressCircle
                  count={count524}
                  max={5}
                  label={`Unofficial 24-month reference count: ${count524} out of 5 accounts`}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-sm font-medium">
                    Reference count:{' '}
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
                      {count524}/5
                    </span>
                  </p>
                  <p className="text-xs text-text-secondary">
                    {count524 < 5
                      ? 'This is below the commonly reported threshold. It does not show eligibility or approval odds.'
                      : 'This meets or exceeds the commonly reported threshold. Only Chase can make an application decision.'}
                  </p>
                  {dropoffDate && (
                    <p className="text-xs text-text-secondary">
                      Next 24-month reference date:{' '}
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
                  Include accounts marked “authorized user” in this reference count
                </label>
              </div>
          </div>

          {/* Application timeline */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display font-bold text-lg text-brand-navy">
                Entered Account History
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const nextSlot = dropoffDate
                      ? dropoffDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                      : 'N/A';
                    const text = `My unofficial 24-month reference count: ${count524}/5. Next reference date: ${nextSlot}. This is not an eligibility result. Checked at 524tracker.com`;
                    navigator.clipboard.writeText(text).then(() => {
                      setCopiedSummary(true);
                      setTimeout(() => setCopiedSummary(false), 2000);
                    });
                  }}
                  className="text-sm text-brand-gold hover:text-amber-600 font-medium transition-colors min-h-[44px] px-3"
                >
                  {copiedSummary ? '✓ Copied!' : 'Copy Summary'}
                </button>
                <button
                  onClick={() => {
                    const shareText = 'Organize an unofficial Chase 5/24 reference count free at 524tracker.com';
                    if (typeof navigator !== 'undefined' && navigator.share) {
                      navigator.share({ title: '524 Tracker', text: shareText, url: 'https://524tracker.com' }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(shareText).then(() => {
                        setCopiedShare(true);
                        setTimeout(() => setCopiedShare(false), 2000);
                      });
                    }
                  }}
                  className="text-sm text-brand-gold hover:text-amber-600 font-medium transition-colors min-h-[44px] px-3"
                >
                  {copiedShare ? '✓ Copied!' : 'Share'}
                </button>
                <button
                  onClick={handleExport}
                  className="text-sm text-brand-gold hover:text-amber-600 font-medium transition-colors min-h-[44px] px-3"
                >
                  Export to CSV
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {sorted.map((app) => {
                const dropoff524 = get524ReferenceDate(app);
                const countsFor524 =
                  app.status === 'approved' &&
                  (!app.isBusinessCard || app.reportsToPersonalCredit === true) &&
                  (countAU || !app.isAuthorizedUser);
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
                      {countsFor524 && dropoff524 && dropoff524 > new Date() && (
                          <span className="ml-2">
                            &middot; 24-month reference date:{' '}
                            {dropoff524.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
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

          {/* Upcoming reference dates */}
          {dropoffs.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Upcoming 24-Month Reference Dates
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
                        Reference date{' '}
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
                        Reference count after date: {d.countAfter}/5
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Informational disclaimer */}
      <div className="mt-8 p-4 border border-gray-200 rounded-xl text-xs text-text-secondary leading-relaxed">
        <strong>Important:</strong> This tool compares dates with an unofficial,
        community-reported application pattern. Chase does not publish or guarantee the
        5/24 shorthand. The count cannot determine eligibility, predict approval or credit-score
        impact, or confirm how Chase will classify an account. Review your credit reports and the
        exact current issuer terms before applying. This is not financial advice.
      </div>
    </section>
  );
}
