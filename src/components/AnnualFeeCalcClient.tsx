'use client';

import { useState, useMemo } from 'react';
import { getAffiliateUrl } from '@/lib/affiliateUrls';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface CardCredit {
  name: string;
  value: number;
  description: string;
}

interface EarningRate {
  category: string;
  multiplier: number; // points per dollar
}

interface CardData {
  name: string;
  issuer: string;
  annualFee: number;
  credits: CardCredit[];
  earningRates: EarningRate[];
  pointsProgram: string;
  defaultCpp: number; // cents per point
  slug: string;
}

interface SpendingInputs {
  dining: number;
  groceries: number;
  gas: number;
  travel: number;
  other: number;
}

/* ------------------------------------------------------------------ */
/*  Card Data                                                         */
/* ------------------------------------------------------------------ */

const PRESET_CARDS: CardData[] = [
  {
    name: 'Chase Sapphire Reserve',
    issuer: 'Chase',
    annualFee: 550,
    credits: [
      { name: '$300 Travel Credit', value: 300, description: 'Annual statement credit for travel purchases' },
      { name: 'Global Entry/TSA PreCheck', value: 20, description: '$100 credit amortized to $20/year' },
    ],
    earningRates: [
      { category: 'dining', multiplier: 3 },
      { category: 'travel', multiplier: 3 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'Chase UR',
    defaultCpp: 0.02,
    slug: 'chase-sapphire-reserve',
  },
  {
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    annualFee: 95,
    credits: [
      { name: '$50 Hotel Credit', value: 50, description: 'Annual hotel credit via Chase Travel' },
    ],
    earningRates: [
      { category: 'dining', multiplier: 3 },
      { category: 'travel', multiplier: 2 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'Chase UR',
    defaultCpp: 0.015,
    slug: 'chase-sapphire-preferred',
  },
  {
    name: 'Amex Platinum',
    issuer: 'American Express',
    annualFee: 695,
    credits: [
      { name: '$200 Airline Fee Credit', value: 200, description: 'Annual incidental airline fee credit' },
      { name: '$200 Uber Credit', value: 200, description: '$15/month + $20 in December via Uber Cash' },
      { name: '$240 Digital Entertainment', value: 240, description: '$20/month for streaming services' },
      { name: '$155 Walmart+ Credit', value: 155, description: 'Monthly Walmart+ membership credit' },
      { name: '$100 Saks Credit', value: 100, description: '$50 twice per year at Saks Fifth Avenue' },
      { name: '$189 CLEAR Plus Credit', value: 189, description: 'Annual CLEAR Plus membership credit' },
      { name: 'Global Entry/TSA PreCheck', value: 20, description: '$100 credit amortized to $20/year' },
    ],
    earningRates: [
      { category: 'travel', multiplier: 5 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'Amex MR',
    defaultCpp: 0.014,
    slug: 'amex-platinum',
  },
  {
    name: 'Amex Gold',
    issuer: 'American Express',
    annualFee: 250,
    credits: [
      { name: '$120 Dining Credit', value: 120, description: '$10/month at select restaurants' },
      { name: '$120 Uber Credit', value: 120, description: '$10/month via Uber Cash' },
    ],
    earningRates: [
      { category: 'dining', multiplier: 4 },
      { category: 'groceries', multiplier: 4 },
      { category: 'travel', multiplier: 3 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'Amex MR',
    defaultCpp: 0.014,
    slug: 'amex-gold',
  },
  {
    name: 'Capital One Venture X',
    issuer: 'Capital One',
    annualFee: 395,
    credits: [
      { name: '$300 Travel Portal Credit', value: 300, description: 'Annual credit for Capital One Travel bookings' },
      { name: 'Global Entry/TSA PreCheck', value: 20, description: '$100 credit amortized to $20/year' },
      { name: '10,000 Anniversary Miles', value: 170, description: '10,000 bonus miles annually (~$170 value)' },
    ],
    earningRates: [
      { category: 'travel', multiplier: 2 },
      { category: 'dining', multiplier: 2 },
      { category: 'groceries', multiplier: 2 },
      { category: 'gas', multiplier: 2 },
      { category: 'other', multiplier: 2 },
    ],
    pointsProgram: 'Cap One Miles',
    defaultCpp: 0.017,
    slug: 'capital-one-venture-x',
  },
  {
    name: 'Citi Strata Premier',
    issuer: 'Citi',
    annualFee: 95,
    credits: [],
    earningRates: [
      { category: 'dining', multiplier: 3 },
      { category: 'groceries', multiplier: 3 },
      { category: 'gas', multiplier: 3 },
      { category: 'travel', multiplier: 3 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'Citi TY',
    defaultCpp: 0.016,
    slug: 'citi-strata-premier',
  },
  {
    name: 'Wells Fargo Autograph Journey',
    issuer: 'Wells Fargo',
    annualFee: 95,
    credits: [
      { name: '$50 Airline Credit', value: 50, description: 'Annual airline purchase credit' },
    ],
    earningRates: [
      { category: 'travel', multiplier: 5 },
      { category: 'dining', multiplier: 4 },
      { category: 'other', multiplier: 1 },
    ],
    pointsProgram: 'WF Rewards',
    defaultCpp: 0.01,
    slug: 'wells-fargo-autograph-journey',
  },
];

const EMPTY_CUSTOM_CARD: CardData = {
  name: '',
  issuer: '',
  annualFee: 0,
  credits: [],
  earningRates: [
    { category: 'dining', multiplier: 1 },
    { category: 'groceries', multiplier: 1 },
    { category: 'gas', multiplier: 1 },
    { category: 'travel', multiplier: 1 },
    { category: 'other', multiplier: 1 },
  ],
  pointsProgram: 'Custom',
  defaultCpp: 0.01,
  slug: '',
};

const SPENDING_CATEGORIES: { key: keyof SpendingInputs; label: string }[] = [
  { key: 'dining', label: 'Monthly Dining' },
  { key: 'groceries', label: 'Monthly Groceries' },
  { key: 'gas', label: 'Monthly Gas' },
  { key: 'travel', label: 'Monthly Travel' },
  { key: 'other', label: 'Monthly Other' },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatCurrencyCents(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getMultiplier(earningRates: EarningRate[], category: string): number {
  const rate = earningRates.find((r) => r.category === category);
  return rate ? rate.multiplier : 1;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function AnnualFeeCalcClient() {
  const [selectedIndex, setSelectedIndex] = useState(0); // 0 = first preset, last index = custom
  const [creditToggles, setCreditToggles] = useState<Record<string, boolean>>({});
  const [spending, setSpending] = useState<SpendingInputs>({
    dining: 0,
    groceries: 0,
    gas: 0,
    travel: 0,
    other: 0,
  });
  const [cpp, setCpp] = useState<number>(PRESET_CARDS[0].defaultCpp);

  // Custom card state
  const [customCard, setCustomCard] = useState<CardData>({ ...EMPTY_CUSTOM_CARD });
  const [customCreditName, setCustomCreditName] = useState('');
  const [customCreditValue, setCustomCreditValue] = useState('');

  const isCustom = selectedIndex === PRESET_CARDS.length;
  const activeCard = isCustom ? customCard : PRESET_CARDS[selectedIndex];

  // When card selection changes
  const handleCardChange = (newIndex: number) => {
    setSelectedIndex(newIndex);
    const card = newIndex === PRESET_CARDS.length ? customCard : PRESET_CARDS[newIndex];
    setCpp(card.defaultCpp);
    // Reset credit toggles — default all to true for presets
    const toggles: Record<string, boolean> = {};
    card.credits.forEach((c) => {
      toggles[c.name] = true;
    });
    setCreditToggles(toggles);
  };

  const handleCreditToggle = (creditName: string) => {
    setCreditToggles((prev) => ({ ...prev, [creditName]: !prev[creditName] }));
  };

  const handleSpendingChange = (key: keyof SpendingInputs, value: string) => {
    const num = value === '' ? 0 : parseFloat(value);
    if (!isNaN(num)) {
      setSpending((prev) => ({ ...prev, [key]: num }));
    }
  };

  const handleCustomRateChange = (category: string, value: string) => {
    const num = value === '' ? 0 : parseFloat(value);
    if (!isNaN(num)) {
      setCustomCard((prev) => ({
        ...prev,
        earningRates: prev.earningRates.map((r) =>
          r.category === category ? { ...r, multiplier: num } : r
        ),
      }));
    }
  };

  const handleAddCustomCredit = () => {
    const name = customCreditName.trim();
    const value = parseFloat(customCreditValue);
    if (!name || isNaN(value) || value <= 0) return;
    const newCredit: CardCredit = { name, value, description: 'Custom credit' };
    setCustomCard((prev) => ({ ...prev, credits: [...prev.credits, newCredit] }));
    setCreditToggles((prev) => ({ ...prev, [name]: true }));
    setCustomCreditName('');
    setCustomCreditValue('');
  };

  const handleRemoveCustomCredit = (creditName: string) => {
    setCustomCard((prev) => ({
      ...prev,
      credits: prev.credits.filter((c) => c.name !== creditName),
    }));
    setCreditToggles((prev) => {
      const next = { ...prev };
      delete next[creditName];
      return next;
    });
  };

  // Calculations
  const calculations = useMemo(() => {
    const creditsValue = activeCard.credits.reduce((sum, c) => {
      return sum + (creditToggles[c.name] ? c.value : 0);
    }, 0);

    const categoryBreakdown = SPENDING_CATEGORIES.map(({ key, label }) => {
      const monthlySpend = spending[key];
      const multiplier = getMultiplier(activeCard.earningRates, key);
      const annualPoints = monthlySpend * 12 * multiplier;
      const annualValue = annualPoints * cpp;
      return { key, label, monthlySpend, multiplier, annualPoints, annualValue };
    });

    const totalAnnualPoints = categoryBreakdown.reduce((sum, c) => sum + c.annualPoints, 0);
    const totalRewardsValue = categoryBreakdown.reduce((sum, c) => sum + c.annualValue, 0);
    const netValue = creditsValue + totalRewardsValue - activeCard.annualFee;

    return {
      creditsValue,
      categoryBreakdown,
      totalAnnualPoints,
      totalRewardsValue,
      netValue,
    };
  }, [activeCard, creditToggles, spending, cpp]);

  const hasSpending = Object.values(spending).some((v) => v > 0);
  const showResults = activeCard.annualFee > 0 || isCustom;

  return (
    <div className="space-y-8">
      {/* ---- Card Selector ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Select Your Card</h2>
        <div>
          <label htmlFor="afc-card" className="block text-sm font-body font-medium text-text-primary mb-1">
            Credit Card
          </label>
          <select
            id="afc-card"
            value={selectedIndex}
            onChange={(e) => handleCardChange(parseInt(e.target.value, 10))}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
          >
            {PRESET_CARDS.map((card, i) => (
              <option key={card.slug} value={i}>
                {card.name} ({formatCurrency(card.annualFee)}/yr)
              </option>
            ))}
            <option value={PRESET_CARDS.length}>Custom Card</option>
          </select>
        </div>

        {/* Custom Card Fields */}
        {isCustom && (
          <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="afc-custom-name" className="block text-sm font-body font-medium text-text-primary mb-1">
                  Card Name
                </label>
                <input
                  id="afc-custom-name"
                  type="text"
                  placeholder="e.g. My Premium Card"
                  value={customCard.name}
                  onChange={(e) => setCustomCard((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="afc-custom-fee" className="block text-sm font-body font-medium text-text-primary mb-1">
                  Annual Fee ($)
                </label>
                <input
                  id="afc-custom-fee"
                  type="number"
                  min="0"
                  step="1"
                  value={customCard.annualFee || ''}
                  onChange={(e) => setCustomCard((prev) => ({ ...prev, annualFee: parseFloat(e.target.value) || 0 }))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>
            </div>

            {/* Custom Earning Rates */}
            <div>
              <p className="text-sm font-body font-medium text-text-primary mb-2">
                Earning Rates (points per dollar)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {customCard.earningRates.map((rate) => (
                  <div key={rate.category}>
                    <label
                      htmlFor={`afc-rate-${rate.category}`}
                      className="block text-xs text-text-secondary mb-1 capitalize"
                    >
                      {rate.category}
                    </label>
                    <input
                      id={`afc-rate-${rate.category}`}
                      type="number"
                      min="0"
                      step="0.5"
                      value={rate.multiplier}
                      onChange={(e) => handleCustomRateChange(rate.category, e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Cents Per Point */}
            <div className="max-w-xs">
              <label htmlFor="afc-custom-cpp" className="block text-sm font-body font-medium text-text-primary mb-1">
                Cents Per Point
              </label>
              <input
                id="afc-custom-cpp"
                type="number"
                min="0.001"
                step="0.001"
                value={cpp}
                onChange={(e) => setCpp(parseFloat(e.target.value) || 0.01)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            {/* Custom Credits */}
            <div>
              <p className="text-sm font-body font-medium text-text-primary mb-2">Card Credits</p>
              {customCard.credits.length > 0 && (
                <div className="space-y-2 mb-3">
                  {customCard.credits.map((credit) => (
                    <div key={credit.name} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2">
                      <span className="text-sm text-text-primary">
                        {credit.name} ({formatCurrency(credit.value)})
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveCustomCredit(credit.name)}
                        className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors"
                        aria-label={`Remove ${credit.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap items-end gap-2">
                <div>
                  <label htmlFor="afc-credit-name" className="block text-xs text-text-secondary mb-1">Credit Name</label>
                  <input
                    id="afc-credit-name"
                    type="text"
                    placeholder="e.g. Travel Credit"
                    value={customCreditName}
                    onChange={(e) => setCustomCreditName(e.target.value)}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div>
                  <label htmlFor="afc-credit-value" className="block text-xs text-text-secondary mb-1">Value ($)</label>
                  <input
                    id="afc-credit-value"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="300"
                    value={customCreditValue}
                    onChange={(e) => setCustomCreditValue(e.target.value)}
                    className="w-24 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddCustomCredit}
                  disabled={!customCreditName.trim() || !customCreditValue}
                  className="bg-brand-navy text-white font-body font-medium px-4 py-2 rounded-lg text-sm hover:bg-brand-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Credit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---- Credits Section ---- */}
      {activeCard.credits.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
          <h2 className="font-display font-bold text-xl text-brand-navy mb-4">
            Card Credits &mdash; Which Do You Use?
          </h2>
          <div className="space-y-3">
            {activeCard.credits.map((credit) => {
              const isOn = creditToggles[credit.name] ?? true;
              return (
                <div
                  key={credit.name}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                    isOn ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="min-w-0 mr-4">
                    <p className="text-sm font-medium text-text-primary">
                      {credit.name} &mdash; {formatCurrency(credit.value)}/yr
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">{credit.description}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        if (!isOn) handleCreditToggle(credit.name);
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        isOn
                          ? 'bg-green-600 text-white'
                          : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
                      }`}
                      aria-pressed={isOn}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (isOn) handleCreditToggle(credit.name);
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        !isOn
                          ? 'bg-red-500 text-white'
                          : 'bg-white border border-gray-300 text-text-secondary hover:bg-gray-50'
                      }`}
                      aria-pressed={!isOn}
                    >
                      No
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-text-secondary mt-3">
            Only count credits you would use regardless of having this card.
          </p>
        </div>
      )}

      {/* ---- Spending Inputs ---- */}
      <div className="bg-brand-light border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Your Monthly Spending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPENDING_CATEGORIES.map(({ key, label }) => {
            const multiplier = getMultiplier(activeCard.earningRates, key);
            return (
              <div key={key}>
                <label
                  htmlFor={`afc-spend-${key}`}
                  className="block text-sm font-body font-medium text-text-primary mb-1"
                >
                  {label} ($)
                </label>
                <input
                  id={`afc-spend-${key}`}
                  type="number"
                  min="0"
                  step="50"
                  placeholder="0"
                  value={spending[key] || ''}
                  onChange={(e) => handleSpendingChange(key, e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
                <p className="text-xs text-text-secondary mt-1">
                  {multiplier}x &mdash; {(spending[key] * 12 * multiplier).toLocaleString()} pts/yr
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---- Points Valuation ---- */}
      {!isCustom && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
          <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Points Valuation</h2>
          <div className="flex flex-wrap items-end gap-4">
            <div>
              <p className="text-sm font-body font-medium text-text-primary mb-1">
                Points Program: <span className="font-semibold">{activeCard.pointsProgram}</span>
              </p>
              <label htmlFor="afc-cpp" className="block text-xs text-text-secondary mb-1">
                Cents per point (default: {activeCard.defaultCpp})
              </label>
              <input
                id="afc-cpp"
                type="number"
                min="0.001"
                step="0.001"
                value={cpp}
                onChange={(e) => setCpp(parseFloat(e.target.value) || 0.01)}
                className="w-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>
            {hasSpending && (
              <div className="text-sm text-text-primary">
                <p>
                  Total annual points: <strong>{calculations.totalAnnualPoints.toLocaleString()}</strong>
                </p>
                <p>
                  Rewards value at {cpp} cpp: <strong>{formatCurrencyCents(calculations.totalRewardsValue)}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---- Results ---- */}
      {showResults && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
          <h2 className="font-display font-bold text-xl text-brand-navy mb-4">Annual Value Breakdown</h2>

          {/* Breakdown Table */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-text-primary">Annual Fee</span>
              <span className="text-sm font-semibold text-red-600">
                &minus;{formatCurrency(activeCard.annualFee)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-text-primary">Credits You&apos;ll Use</span>
              <span className="text-sm font-semibold text-green-600">
                +{formatCurrency(calculations.creditsValue)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-text-primary">Annual Rewards Value</span>
              <span className="text-sm font-semibold text-green-600">
                +{formatCurrencyCents(calculations.totalRewardsValue)}
              </span>
            </div>

            {/* Category Breakdown (collapsible details) */}
            {hasSpending && (
              <details className="text-xs text-text-secondary border-b border-gray-100 pb-2">
                <summary className="cursor-pointer hover:text-text-primary transition-colors py-1">
                  View rewards breakdown by category
                </summary>
                <div className="mt-2 space-y-1 pl-4">
                  {calculations.categoryBreakdown
                    .filter((c) => c.monthlySpend > 0)
                    .map((c) => (
                      <div key={c.key} className="flex justify-between">
                        <span className="capitalize">
                          {c.key}: {formatCurrency(c.monthlySpend)}/mo x {c.multiplier}x x 12mo = {c.annualPoints.toLocaleString()} pts
                        </span>
                        <span>{formatCurrencyCents(c.annualValue)}</span>
                      </div>
                    ))}
                </div>
              </details>
            )}

            {/* Net Value */}
            <div className="flex items-center justify-between py-3">
              <span className="text-base font-display font-bold text-brand-navy">Net Value</span>
              <span
                className={`text-lg font-display font-bold ${
                  calculations.netValue >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {calculations.netValue >= 0 ? '+' : ''}
                {formatCurrencyCents(calculations.netValue)}
              </span>
            </div>
          </div>

          {/* Verdict */}
          {calculations.netValue >= 0 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
              <p className="text-green-800 font-display font-bold text-lg mb-2">
                This card saves you {formatCurrencyCents(calculations.netValue)} per year
              </p>
              <p className="text-sm text-green-700 mb-4">
                Based on your spending and credit usage, this card more than pays for itself.
              </p>
              {!isCustom && (
                <>
                  <a
                    href={getAffiliateUrl(activeCard.slug)}
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-block bg-brand-gold text-brand-navy font-body font-semibold px-8 py-3 rounded-lg text-sm hover:bg-amber-500 transition-colors shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </a>
                  <p className="text-xs text-text-secondary mt-3">
                    We may earn a commission if you apply through our links at no cost to you.
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
              <p className="text-red-800 font-display font-bold text-lg mb-2">
                This card costs you {formatCurrencyCents(Math.abs(calculations.netValue))} net per year
              </p>
              <p className="text-sm text-red-700 mb-4">
                Consider downgrading to a no-annual-fee version to keep your credit history and points.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
