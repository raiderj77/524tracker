'use client';

import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = '524tracker-hard-inquiries';

interface HardInquiry {
  id: string;
  lender: string;
  purpose: string;
  inquiryDate: string;
}

const purposes = [
  'Credit Card',
  'Auto Loan',
  'Mortgage',
  'Personal Loan',
  'Student Loan',
  'Other',
];

function loadInquiries(): HardInquiry[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveInquiries(items: HardInquiry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage full or unavailable
  }
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function daysUntil(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export default function HardInquiryTracker() {
  const [inquiries, setInquiries] = useState<HardInquiry[]>(loadInquiries);
  const [expanded, setExpanded] = useState(false);
  const mountedRef = useRef(false);

  // Form state
  const [lender, setLender] = useState('');
  const [purpose, setPurpose] = useState('Credit Card');
  const [inquiryDate, setInquiryDate] = useState(todayISO());

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  useEffect(() => {
    if (mountedRef.current) {
      saveInquiries(inquiries);
    }
  }, [inquiries]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!lender.trim()) return;

    const newInquiry: HardInquiry = {
      id: generateId(),
      lender: lender.trim(),
      purpose,
      inquiryDate,
    };
    setInquiries((prev) => [...prev, newInquiry]);
    setLender('');
    setPurpose('Credit Card');
    setInquiryDate(todayISO());
  }

  function deleteInquiry(id: string) {
    const item = inquiries.find((i) => i.id === id);
    if (!item) return;
    if (!window.confirm(`Delete inquiry from "${item.lender}"?`)) return;
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  }

  // Calculations
  const now = new Date();
  const cutoff12 = new Date(now);
  cutoff12.setDate(cutoff12.getDate() - 365);
  const cutoff24 = new Date(now);
  cutoff24.setDate(cutoff24.getDate() - 730);

  const count12 = inquiries.filter((i) => new Date(i.inquiryDate) >= cutoff12).length;
  const count24 = inquiries.filter((i) => new Date(i.inquiryDate) >= cutoff24).length;

  const sorted = [...inquiries].sort(
    (a, b) => new Date(b.inquiryDate).getTime() - new Date(a.inquiryDate).getTime()
  );

  // Next drop-off
  const activeInquiries = inquiries
    .filter((i) => {
      const dropoff = new Date(i.inquiryDate);
      dropoff.setDate(dropoff.getDate() + 730);
      return dropoff > now;
    })
    .map((i) => {
      const dropoff = new Date(i.inquiryDate);
      dropoff.setDate(dropoff.getDate() + 730);
      return { ...i, dropoffDate: dropoff, daysLeft: daysUntil(dropoff) };
    })
    .sort((a, b) => a.daysLeft - b.daysLeft);

  const nextDropoff = activeInquiries.length > 0 ? activeInquiries[0] : null;

  const count12Color = count12 <= 3 ? 'text-brand-green' : count12 <= 5 ? 'text-brand-gold' : 'text-brand-red';

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors min-h-[44px]"
        aria-expanded={expanded}
        aria-controls="hard-inquiry-section"
      >
        <svg
          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Hard Inquiry Tracker
        {count12 > 0 && (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            count12 <= 3 ? 'bg-green-100 text-green-800' :
            count12 <= 5 ? 'bg-amber-100 text-amber-800' :
            'bg-red-100 text-red-800'
          }`}>
            {count12} in 12mo
          </span>
        )}
      </button>

      {expanded && (
        <div id="hard-inquiry-section" className="mt-4 space-y-6">
          {/* Input form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
              Add Hard Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="inquiry-lender" className="block text-sm font-medium text-text-primary mb-1">
                    Lender / Bank
                  </label>
                  <input
                    id="inquiry-lender"
                    type="text"
                    value={lender}
                    onChange={(e) => setLender(e.target.value)}
                    placeholder="e.g. Chase"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-purpose" className="block text-sm font-medium text-text-primary mb-1">
                    Purpose
                  </label>
                  <select
                    id="inquiry-purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                  >
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="inquiry-date" className="block text-sm font-medium text-text-primary mb-1">
                    Inquiry Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={inquiryDate}
                    onChange={(e) => setInquiryDate(e.target.value)}
                    max={todayISO()}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors min-h-[44px] text-sm"
              >
                Add Inquiry
              </button>
            </form>
          </div>

          {/* Dashboard */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
              Hard Inquiry Dashboard
            </h3>
            <div className="flex items-center gap-8 mb-4">
              <div className="text-center">
                <p className={`text-3xl font-bold tabular-nums ${count12Color}`}>{count12}</p>
                <p className="text-xs text-text-secondary">Last 12 months</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tabular-nums text-text-primary">{count24}</p>
                <p className="text-xs text-text-secondary">Last 24 months</p>
              </div>
              {nextDropoff && (
                <div className="text-center">
                  <p className="text-3xl font-bold tabular-nums text-brand-gold">{nextDropoff.daysLeft}</p>
                  <p className="text-xs text-text-secondary">Days to next drop-off</p>
                </div>
              )}
            </div>
            <p className="text-xs text-text-secondary mb-4">
              Most lenders prefer fewer than 6 inquiries in 12 months. Excessive inquiries can signal credit risk.
            </p>

            {/* Timeline */}
            {sorted.length > 0 ? (
              <div className="space-y-2">
                {sorted.map((inq) => {
                  const dropoff = new Date(inq.inquiryDate);
                  dropoff.setDate(dropoff.getDate() + 730);
                  const dropsInDays = daysUntil(dropoff);
                  const droppedOff = dropsInDays <= 0;

                  return (
                    <div
                      key={inq.id}
                      className={`flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg hover:bg-brand-light/50 transition-colors group ${droppedOff ? 'opacity-50' : ''}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-sm">{inq.lender}</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                            {inq.purpose}
                          </span>
                        </div>
                        <div className="text-xs text-text-secondary mt-0.5">
                          {new Date(inq.inquiryDate + 'T00:00:00').toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                          {droppedOff ? (
                            <span className="ml-2">&middot; Dropped off report</span>
                          ) : (
                            <span className="ml-2">
                              &middot; Drops off in{' '}
                              <span className="font-medium">{dropsInDays} days</span>
                              {' '}({dropoff.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })})
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteInquiry(inq.id)}
                        className="p-2 text-text-secondary hover:text-brand-red rounded min-w-[44px] min-h-[44px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`Delete inquiry from ${inq.lender}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-text-secondary">
                No hard inquiries tracked yet. Add an inquiry above.
              </p>
            )}

            <p className="text-xs text-text-secondary mt-4 pt-3 border-t border-gray-100">
              Hard inquiries typically remain on your credit report for 24 months but only affect your credit score for 12 months.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
