'use client';

import { useState } from 'react';
import AnswerBlock from '@/components/AnswerBlock';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';

interface Perk {
  id: string;
  name: string;
  value: string;
}

const defaultPerks: Perk[] = [
  { id: '1', name: 'Travel credit', value: '' },
  { id: '2', name: 'Dining credit', value: '' },
  { id: '3', name: 'Lounge access', value: '' },
  { id: '4', name: 'Statement credits', value: '' },
  { id: '5', name: 'Hotel status', value: '' },
  { id: '6', name: 'Other perks', value: '' },
];

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export default function CardValueCalculatorPage() {
  const [cardName, setCardName] = useState('');
  const [annualFee, setAnnualFee] = useState('');
  const [perks, setPerks] = useState<Perk[]>(defaultPerks);
  const [rewardsEarned, setRewardsEarned] = useState('');
  const [valuePerPoint, setValuePerPoint] = useState('');
  const [calculated, setCalculated] = useState(false);

  function addPerk() {
    setPerks((prev) => [...prev, { id: generateId(), name: '', value: '' }]);
  }

  function updatePerk(id: string, field: 'name' | 'value', val: string) {
    setPerks((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: val } : p))
    );
  }

  function removePerk(id: string) {
    setPerks((prev) => prev.filter((p) => p.id !== id));
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setCalculated(true);
  }

  function handleReset() {
    setCardName('');
    setAnnualFee('');
    setPerks(defaultPerks);
    setRewardsEarned('');
    setValuePerPoint('');
    setCalculated(false);
  }

  const fee = parseFloat(annualFee) || 0;
  const totalPerkValue = perks.reduce(
    (sum, p) => sum + (parseFloat(p.value) || 0),
    0
  );
  const rewards = parseFloat(rewardsEarned) || 0;
  const vpp = parseFloat(valuePerPoint) || 0;
  const rewardsValue = rewards * vpp;
  const totalBenefits = totalPerkValue + rewardsValue;
  const netValue = totalBenefits - fee;

  const barMax = Math.max(fee, totalBenefits, 1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                name: 'Card Value Calculator — 524Tracker',
                url: 'https://524tracker.com/card-value-calculator',
                applicationCategory: 'FinanceApplication',
                description:
                  'Compare a user-entered annual fee with user-entered benefit and reward values.',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                operatingSystem: 'All',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Card Value Calculator', item: 'https://524tracker.com/card-value-calculator' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">
          Card Value Calculator
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Enter an annual fee and your own benefit assumptions to see the arithmetic in one place.
        </p>
        <p className="text-xs text-text-secondary mb-0">Reviewed: August 2, 2026</p>

        <AnswerBlock
          what="A calculator that subtracts a user-entered annual fee from user-entered perk and rewards values."
          who="Cardholders who want a transparent worksheet for their own assumptions."
          bottomLine="The result is only as reliable as the values you enter and is not a keep, cancel, or downgrade recommendation."
          lastUpdated="2026-08-02"
        />

        <form onSubmit={handleCalculate} className="space-y-6">
          {/* Card info */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cv-card-name" className="block text-sm font-medium text-text-primary mb-1">
                  Card Name
                </label>
                <input
                  id="cv-card-name"
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="e.g. Chase Sapphire Reserve"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                />
              </div>
              <div>
                <label htmlFor="cv-annual-fee" className="block text-sm font-medium text-text-primary mb-1">
                  Annual Fee
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">$</span>
                  <input
                    id="cv-annual-fee"
                    type="number"
                    min="0"
                    step="1"
                    value={annualFee}
                    onChange={(e) => setAnnualFee(e.target.value)}
                    placeholder="e.g. 550"
                    required
                    className="w-full pl-7 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Credits & Perks */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
              Credits &amp; Perks Used This Year
            </h2>
            <div className="space-y-3">
              {perks.map((perk) => (
                <div key={perk.id} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={perk.name}
                    onChange={(e) => updatePerk(perk.id, 'name', e.target.value)}
                    placeholder="Perk name"
                    aria-label="Perk name"
                    className="min-h-[44px] min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:ring-0"
                  />
                  <div className="relative w-28">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">$</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={perk.value}
                      onChange={(e) => updatePerk(perk.id, 'value', e.target.value)}
                      placeholder="0"
                      aria-label={`Value for ${perk.name || 'perk'}`}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removePerk(perk.id)}
                    className="p-2 text-text-secondary hover:text-brand-red min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={`Remove ${perk.name || 'perk'}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addPerk}
              className="mt-3 text-sm text-brand-gold hover:text-amber-600 font-medium min-h-[44px]"
            >
              + Add another perk
            </button>
          </div>

          {/* Rewards Earned */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
              Rewards Earned This Year
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cv-rewards" className="block text-sm font-medium text-text-primary mb-1">
                  Reward Units Earned (optional)
                </label>
                <input
                  id="cv-rewards"
                  type="number"
                  min="0"
                  step="1"
                  value={rewardsEarned}
                  onChange={(e) => setRewardsEarned(e.target.value)}
                  placeholder="e.g. 50000"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                />
              </div>
              <div>
                <label htmlFor="cv-vpp" className="block text-sm font-medium text-text-primary mb-1">
                  Value Per Point / Mile ($)
                </label>
                <input
                  id="cv-vpp"
                  type="number"
                  min="0"
                  step="0.0001"
                  value={valuePerPoint}
                  onChange={(e) => setValuePerPoint(e.target.value)}
                  placeholder="Enter your realized value"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                  aria-describedby="cv-vpp-help"
                />
                <p id="cv-vpp-help" className="text-[10px] text-text-secondary mt-0.5">
                  Enter the value you actually received from a recent redemption; the site does not supply a valuation.
                </p>
                <p className="text-[10px] text-text-secondary mt-0.5">
                  Calculated value: ${rewardsEarned ? (rewards * vpp).toFixed(2) : '0.00'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors min-h-[44px] text-sm"
            >
              Calculate Card Value
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-secondary hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Results */}
        {calculated && (
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
              Calculation complete for {cardName || 'your card'}. Estimated annual net value is{' '}
              {netValue >= 0 ? 'positive ' : 'negative '}${Math.abs(netValue).toFixed(2)}.
            </p>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
              {cardName || 'Your Card'} — Value Analysis
            </h2>

            {/* Bar chart */}
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Annual Fee</span>
                  <span className="tabular-nums">${fee.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-red/80 transition-all duration-500"
                    style={{ width: `${(fee / barMax) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Total Benefits</span>
                  <span className="tabular-nums">${totalBenefits.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-green/80 transition-all duration-500"
                    style={{ width: `${(totalBenefits / barMax) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="border-t border-gray-100 pt-4 mb-4 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Credits &amp; Perks Value</span>
                <span className="tabular-nums">${totalPerkValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Rewards Value ({rewards.toLocaleString()} × ${vpp})</span>
                <span className="tabular-nums">${rewardsValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Benefits</span>
                <span className="tabular-nums text-brand-green">${totalBenefits.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Annual Fee</span>
                <span className="tabular-nums text-brand-red">-${fee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                <span>Net Card Value</span>
                <span className={`tabular-nums ${netValue >= 0 ? 'text-brand-green' : 'text-brand-red'}`}>
                  {netValue >= 0 ? '+' : '-'}${Math.abs(netValue).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Neutral interpretation */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800">
              Based only on your entries, benefits minus the annual fee equal{' '}
              <strong>{netValue >= 0 ? '+' : '-'}${Math.abs(netValue).toFixed(2)}</strong>.
              This arithmetic does not account for interest, opportunity cost, issuer terms,
              credit effects, or whether you would otherwise buy each benefit.
            </div>
          </div>
        )}

        <section className="mt-12 space-y-8">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How the calculation works</h2>
            <p className="text-sm text-text-primary leading-relaxed">
              The calculator adds only the perk values and rewards valuation you enter, then subtracts
              the annual fee you enter. It does not retrieve current card terms, estimate points for
              you, or assign a value to a benefit you did not price yourself.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Use realized values</h2>
            <p className="text-sm text-text-primary leading-relaxed">
              For a benefit, enter what it replaced in your real spending, not the issuer&apos;s headline
              value. For points or miles, use the dollars received divided by the points redeemed in a
              completed redemption. Verify the annual fee and every benefit in the current issuer terms.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <h2 className="font-display font-bold text-xl mb-3">Do not use the result alone</h2>
            <p className="text-sm leading-relaxed">
              A positive or negative number does not decide whether to keep, cancel, or change a credit
              account. Interest, debt, credit utilization, account history, refund timing, product-change
              availability, and issuer-specific terms are outside this calculator.
            </p>
          </div>
        </section>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </article>
    </>
  );
}
