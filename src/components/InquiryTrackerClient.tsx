'use client';

import { useState, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

type Bureau = 'Experian' | 'Equifax' | 'TransUnion';
type InquiryResult = 'Approved' | 'Denied' | 'Pending';

interface Inquiry {
  id: string;
  date: string; // YYYY-MM-DD
  issuer: string;
  bureau: Bureau;
  result: InquiryResult;
}

type SensitivityStatus = 'safe' | 'caution' | 'risky' | 'info';

interface IssuerSensitivity {
  issuer: string;
  rule: string;
  relevantCount: number;
  threshold: number | null; // null for info-only issuers
  status: SensitivityStatus;
  detail: string;
}

const BUREAUS: Bureau[] = ['Experian', 'Equifax', 'TransUnion'];
const RESULTS: InquiryResult[] = ['Approved', 'Denied', 'Pending'];
const STORAGE_KEY = '524tracker-inquiries';

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadInquiries(): Inquiry[] {
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

function saveInquiries(inquiries: Inquiry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  } catch {
    // localStorage full or unavailable — silently fail
  }
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr + 'T00:00:00');
}

function formatDate(dateStr: string): string {
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function monthsAgo(months: number): Date {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  d.setHours(0, 0, 0, 0);
  return d;
}

function countInWindow(inquiries: Inquiry[], bureau: Bureau | null, windowStart: Date): number {
  return inquiries.filter((inq) => {
    if (bureau && inq.bureau !== bureau) return false;
    return parseDate(inq.date) >= windowStart;
  }).length;
}

/* ------------------------------------------------------------------ */
/*  Color helpers                                                     */
/* ------------------------------------------------------------------ */

function countColor6mo(count: number): string {
  if (count <= 2) return 'text-green-600';
  if (count <= 5) return 'text-amber-600';
  return 'text-red-600';
}

function countBg6mo(count: number): string {
  if (count <= 2) return 'bg-green-50';
  if (count <= 5) return 'bg-amber-50';
  return 'bg-red-50';
}

function countColor12mo(count: number): string {
  if (count <= 4) return 'text-green-600';
  if (count <= 7) return 'text-amber-600';
  return 'text-red-600';
}

function countBg12mo(count: number): string {
  if (count <= 4) return 'bg-green-50';
  if (count <= 7) return 'bg-amber-50';
  return 'bg-red-50';
}

function countColor24mo(count: number): string {
  if (count <= 6) return 'text-green-600';
  if (count <= 10) return 'text-amber-600';
  return 'text-red-600';
}

function countBg24mo(count: number): string {
  if (count <= 6) return 'bg-green-50';
  if (count <= 10) return 'bg-amber-50';
  return 'bg-red-50';
}

function bureauBadgeClasses(bureau: Bureau): string {
  switch (bureau) {
    case 'Experian':
      return 'bg-blue-100 text-blue-700';
    case 'Equifax':
      return 'bg-green-100 text-green-700';
    case 'TransUnion':
      return 'bg-purple-100 text-purple-700';
  }
}

function bureauAccent(bureau: Bureau): string {
  switch (bureau) {
    case 'Experian':
      return 'border-blue-400';
    case 'Equifax':
      return 'border-green-400';
    case 'TransUnion':
      return 'border-purple-400';
  }
}

function resultClasses(result: InquiryResult): string {
  switch (result) {
    case 'Approved':
      return 'text-green-600 font-medium';
    case 'Denied':
      return 'text-red-600 font-medium';
    case 'Pending':
      return 'text-amber-600 font-medium';
  }
}

function sensitivityBadge(status: SensitivityStatus): { text: string; classes: string } {
  switch (status) {
    case 'safe':
      return { text: 'SAFE', classes: 'bg-green-100 text-green-700' };
    case 'caution':
      return { text: 'CAUTION', classes: 'bg-amber-100 text-amber-700' };
    case 'risky':
      return { text: 'RISKY', classes: 'bg-red-100 text-red-700' };
    case 'info':
      return { text: 'INFO', classes: 'bg-blue-100 text-blue-700' };
  }
}

/* ------------------------------------------------------------------ */
/*  Issuer Sensitivity Engine                                         */
/* ------------------------------------------------------------------ */

function computeSensitivity(inquiries: Inquiry[]): IssuerSensitivity[] {
  const ex6mo = countInWindow(inquiries, 'Experian', monthsAgo(6));
  const total12mo = countInWindow(inquiries, null, monthsAgo(12));
  const total24mo = countInWindow(inquiries, null, monthsAgo(24));

  const results: IssuerSensitivity[] = [];

  // Citi — 6+ inquiries on pulled bureau (usually Experian) in 6 months
  {
    let status: SensitivityStatus = 'safe';
    if (ex6mo >= 6) status = 'risky';
    else if (ex6mo >= 4) status = 'caution';
    results.push({
      issuer: 'Citi',
      rule: 'Sensitive at 6+ inquiries in 6 months on pulled bureau (usually Experian)',
      relevantCount: ex6mo,
      threshold: 6,
      status,
      detail: `${ex6mo} Experian inquiries in last 6 months`,
    });
  }

  // US Bank — 5+ new accounts in 12 months (inquiries as proxy)
  {
    let status: SensitivityStatus = 'safe';
    if (total12mo >= 5) status = 'risky';
    else if (total12mo >= 3) status = 'caution';
    results.push({
      issuer: 'US Bank',
      rule: 'Sensitive at 5+ new accounts in 12 months (inquiries as proxy)',
      relevantCount: total12mo,
      threshold: 5,
      status,
      detail: `${total12mo} total inquiries in last 12 months`,
    });
  }

  // Barclays — 6+ new accounts in 24 months
  {
    let status: SensitivityStatus = 'safe';
    if (total24mo >= 6) status = 'risky';
    else if (total24mo >= 4) status = 'caution';
    results.push({
      issuer: 'Barclays',
      rule: 'Sensitive at 6+ new accounts in 24 months',
      relevantCount: total24mo,
      threshold: 6,
      status,
      detail: `${total24mo} total inquiries in last 24 months`,
    });
  }

  // Wells Fargo — soft 5/24-like sensitivity
  {
    let status: SensitivityStatus = 'safe';
    if (total24mo >= 5) status = 'risky';
    else if (total24mo >= 3) status = 'caution';
    results.push({
      issuer: 'Wells Fargo',
      rule: 'Soft 5/24-like sensitivity on total accounts',
      relevantCount: total24mo,
      threshold: 5,
      status,
      detail: `${total24mo} total inquiries in last 24 months`,
    });
  }

  // Chase — lenient on inquiries
  results.push({
    issuer: 'Chase',
    rule: 'Lenient on inquiries, strict on accounts (5/24)',
    relevantCount: total24mo,
    threshold: null,
    status: 'info',
    detail: `${total24mo} total inquiries in last 24 months — inquiry count is not a primary factor`,
  });

  // Amex — generally inquiry-friendly
  results.push({
    issuer: 'Amex',
    rule: 'Generally inquiry-friendly for existing customers',
    relevantCount: total24mo,
    threshold: null,
    status: 'info',
    detail: `${total24mo} total inquiries in last 24 months — Amex focuses on relationship history`,
  });

  return results;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function InquiryTrackerClient() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(loadInquiries);

  // Form state
  const [date, setDate] = useState('');
  const [issuer, setIssuer] = useState('');
  const [bureau, setBureau] = useState<Bureau>('Experian');
  const [result, setResult] = useState<InquiryResult>('Approved');

  const persist = useCallback((updated: Inquiry[]) => {
    setInquiries(updated);
    saveInquiries(updated);
  }, []);

  const handleAdd = () => {
    if (!date || !issuer.trim()) return;
    const newInquiry: Inquiry = {
      id: generateId(),
      date,
      issuer: issuer.trim(),
      bureau,
      result,
    };
    const updated = [...inquiries, newInquiry];
    persist(updated);
    setIssuer('');
    setDate('');
    setResult('Approved');
  };

  const handleDelete = (id: string) => {
    persist(inquiries.filter((inq) => inq.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all inquiry data? This cannot be undone.')) {
      persist([]);
    }
  };

  const sortedInquiries = [...inquiries].sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  const hasInquiries = inquiries.length > 0;

  // Per-bureau counts
  const bureauCounts = BUREAUS.map((b) => ({
    bureau: b,
    six: countInWindow(inquiries, b, monthsAgo(6)),
    twelve: countInWindow(inquiries, b, monthsAgo(12)),
    twentyFour: countInWindow(inquiries, b, monthsAgo(24)),
  }));

  const sensitivity = hasInquiries ? computeSensitivity(inquiries) : [];

  return (
    <div className="space-y-8">
      {/* ---- Entry Form ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Add a Hard Inquiry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date */}
          <div>
            <label htmlFor="inq-date" className="block text-sm font-body font-medium text-text-primary mb-1">
              Date of Inquiry
            </label>
            <input
              id="inq-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          {/* Issuer / Creditor */}
          <div>
            <label htmlFor="inq-issuer" className="block text-sm font-body font-medium text-text-primary mb-1">
              Issuer / Creditor
            </label>
            <input
              id="inq-issuer"
              type="text"
              placeholder="e.g. Chase, Citi, US Bank"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          {/* Bureau */}
          <div>
            <label htmlFor="inq-bureau" className="block text-sm font-body font-medium text-text-primary mb-1">
              Bureau Pulled
            </label>
            <select
              id="inq-bureau"
              value={bureau}
              onChange={(e) => setBureau(e.target.value as Bureau)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {BUREAUS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Result */}
          <div>
            <label htmlFor="inq-result" className="block text-sm font-body font-medium text-text-primary mb-1">
              Result
            </label>
            <select
              id="inq-result"
              value={result}
              onChange={(e) => setResult(e.target.value as InquiryResult)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {RESULTS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Add Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!date || !issuer.trim()}
            className="bg-brand-gold text-brand-navy font-body font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Inquiry
          </button>
        </div>
      </div>

      {/* ---- Empty State ---- */}
      {!hasInquiries && (
        <div className="bg-brand-light border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-text-secondary text-sm">
            No inquiries entered yet. Add your hard inquiries above to see per-bureau counts and issuer sensitivity analysis.
          </p>
        </div>
      )}

      {/* ---- Inquiry History Table ---- */}
      {hasInquiries && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="font-display font-bold text-xl text-brand-navy">
              Inquiry History ({inquiries.length} {inquiries.length === 1 ? 'inquiry' : 'inquiries'})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-text-secondary">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Issuer</th>
                  <th className="px-4 py-3 font-medium">Bureau</th>
                  <th className="px-4 py-3 font-medium">Result</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-text-primary whitespace-nowrap">{formatDate(inq.date)}</td>
                    <td className="px-4 py-3 text-text-primary">{inq.issuer}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${bureauBadgeClasses(inq.bureau)}`}>
                        {inq.bureau === 'Experian' ? 'EX' : inq.bureau === 'Equifax' ? 'EQ' : 'TU'}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-sm ${resultClasses(inq.result)}`}>
                      {inq.result}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => handleDelete(inq.id)}
                        className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors"
                        aria-label={`Delete inquiry from ${inq.issuer}`}
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

      {/* ---- Per-Bureau Summary Cards ---- */}
      {hasInquiries && (
        <div>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Per-Bureau Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bureauCounts.map(({ bureau: b, six, twelve, twentyFour }) => (
              <div
                key={b}
                className={`bg-white border-l-4 ${bureauAccent(b)} border border-gray-200 rounded-xl p-5`}
              >
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{b}</h3>
                <div className="space-y-2">
                  <div className={`flex justify-between items-center px-3 py-2 rounded-lg ${countBg6mo(six)}`}>
                    <span className="text-sm text-text-primary">Last 6 months</span>
                    <span className={`font-bold text-lg ${countColor6mo(six)}`}>{six}</span>
                  </div>
                  <div className={`flex justify-between items-center px-3 py-2 rounded-lg ${countBg12mo(twelve)}`}>
                    <span className="text-sm text-text-primary">Last 12 months</span>
                    <span className={`font-bold text-lg ${countColor12mo(twelve)}`}>{twelve}</span>
                  </div>
                  <div className={`flex justify-between items-center px-3 py-2 rounded-lg ${countBg24mo(twentyFour)}`}>
                    <span className="text-sm text-text-primary">Last 24 months</span>
                    <span className={`font-bold text-lg ${countColor24mo(twentyFour)}`}>{twentyFour}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- Issuer Sensitivity Panel ---- */}
      {hasInquiries && (
        <div>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Issuer Inquiry Sensitivity</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-text-secondary">
                    <th className="px-4 py-3 font-medium">Issuer</th>
                    <th className="px-4 py-3 font-medium">Rule</th>
                    <th className="px-4 py-3 font-medium">Your Count</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sensitivity.map((item) => {
                    const badge = sensitivityBadge(item.status);
                    return (
                      <tr key={item.issuer} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-text-primary font-medium whitespace-nowrap">{item.issuer}</td>
                        <td className="px-4 py-3 text-text-secondary text-xs sm:text-sm">{item.rule}</td>
                        <td className="px-4 py-3 text-text-primary">
                          <span className="font-bold">{item.relevantCount}</span>
                          {item.threshold !== null && (
                            <span className="text-text-secondary">/{item.threshold}</span>
                          )}
                          <span className="block text-xs text-text-secondary mt-0.5">{item.detail}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold ${badge.classes}`}>
                            {badge.text}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ---- Privacy Notice + Clear Button ---- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          All data stays in your browser. Nothing is sent to our servers.
        </p>
        {hasInquiries && (
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
