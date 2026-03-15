'use client';

import { useState } from 'react';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

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
  const [valuePerPoint, setValuePerPoint] = useState('0.01');
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
    setValuePerPoint('0.01');
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
                  'Calculate whether your credit card is worth keeping at renewal by comparing annual fee vs benefits received.',
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
          Should you keep or cancel your credit card at renewal? Enter your benefits and find out if the card is paying for itself.
        </p>

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
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
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
                  Points / Miles / Cashback Earned
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
                <select
                  id="cv-vpp"
                  value={valuePerPoint}
                  onChange={(e) => setValuePerPoint(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-gold focus:ring-0 min-h-[44px]"
                >
                  <option value="0.01">$0.01 — Cashback</option>
                  <option value="0.015">$0.015 — Transferable Points (avg)</option>
                  <option value="0.02">$0.02 — Premium Travel Redemption</option>
                  <option value="0.005">$0.005 — Low-value Redemption</option>
                </select>
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

            {/* Verdict */}
            <div className={`rounded-xl p-4 text-sm font-medium ${
              netValue > 0
                ? 'bg-green-50 text-green-800 border border-green-200'
                : netValue >= -50
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {netValue > 0
                ? 'This card is paying for itself — keep it.'
                : netValue >= -50
                  ? 'Borderline — consider downgrading to a no-fee version.'
                  : 'This card is costing you money — cancel or downgrade.'}
            </div>
          </div>
        )}

        {/* Informational content */}
        <section className="mt-12 space-y-8">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Is the Card Value Calculator?</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              The Card Value Calculator helps you determine whether a credit card with an annual fee is worth keeping at renewal time. Many premium cards charge annual fees ranging from $95 to $695, but they also offer credits, perks, and rewards that can offset or exceed that cost. This tool compares your total benefits received against the annual fee to give you a clear net value figure.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              Rather than guessing whether a card pays for itself, you can enter the specific credits and perks you actually used over the past year, add in the value of points or miles you earned, and see an objective breakdown. The calculator accounts for the most common card benefits including travel credits, dining credits, lounge access valuations, streaming credits, statement credits, hotel status, and any other perks your card offers.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How to Use This Calculator</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              Start by entering your card name and its annual fee. Then list every credit or perk you actually used in the past 12 months along with the dollar value you received. Be honest with yourself here — only count benefits you genuinely used, not the theoretical maximum. A $300 travel credit is worth $0 if you never redeemed it.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              Next, enter the total points, miles, or cashback you earned on the card during the year and select a valuation rate. The calculator multiplies your rewards by the per-point value to estimate your total rewards benefit. Click Calculate to see a visual comparison of your annual fee versus total benefits, a detailed breakdown, and a keep-or-cancel recommendation.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Why Credit Card Point Values Vary by Redemption Method</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              Not all points are created equal. The same 100,000 Chase Ultimate Rewards points can be worth $1,000 as cashback, $1,250 through the Chase travel portal, or $2,000 or more when transferred to airline partners for premium cabin flights. The redemption method you choose dramatically affects the value you extract from your rewards.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              Cashback is the simplest valuation — typically 1 cent per point. Travel portal redemptions often provide a 25% to 50% boost for premium cardholders. Transfer partners offer the highest ceiling but require more effort and flexibility. When using this calculator, select the valuation that matches how you actually redeem your rewards, not the aspirational best case. According to industry data, the average credit card holder redeems points at roughly 1 to 1.5 cents per point.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Common Redemption Options Compared</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              <strong>Cash back</strong> delivers a straightforward $0.01 per point with no effort required. <strong>Travel portal bookings</strong> through Chase, Amex, or Capital One portals typically yield $0.01 to $0.02 per point depending on your card tier. <strong>Transfer partners</strong> can deliver $0.02 or more per point when you transfer to airline or hotel loyalty programs and book award flights or stays. <strong>Statement credits</strong> and <strong>gift cards</strong> generally match cashback at $0.01 per point or less.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              The right redemption method depends on your travel habits and willingness to plan. If you value simplicity, cashback is the baseline. If you travel frequently and can be flexible with dates, transfer partners unlock the highest per-point value. Use the valuation dropdown in the calculator to reflect your typical redemption approach.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Tips for Maximizing Card Value</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-text-primary leading-relaxed">
              <li><strong>Set calendar reminders</strong> for annual credits. Many cardholders forfeit hundreds in unused travel or dining credits simply because they forget to redeem before the card year resets.</li>
              <li><strong>Stack benefits</strong> by pairing card perks with other loyalty programs. For example, use a hotel card&apos;s elite status to earn free breakfast and late checkout, which adds value beyond the card&apos;s stated benefits.</li>
              <li><strong>Consider the downgrade path</strong> before canceling. Many issuers let you product-change to a no-annual-fee version of the same card, preserving your credit history and any remaining rewards balance.</li>
              <li><strong>Call the retention line</strong> at renewal. Many issuers offer statement credits or bonus points to keep you as a cardholder, which can tip a borderline card into positive territory.</li>
              <li><strong>Re-evaluate annually</strong> because your spending patterns change over time. A card that was worth it last year may not be this year, and vice versa.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">How do I value lounge access?</h3>
                <p className="text-sm text-text-primary leading-relaxed">Estimate the dollar amount you would have spent on airport meals and drinks during the year if you did not have lounge access. A reasonable estimate is $30 to $50 per visit. If you visited airport lounges 10 times, that could represent $300 to $500 in value.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">Should I count the welcome bonus in my card value calculation?</h3>
                <p className="text-sm text-text-primary leading-relaxed">No. The welcome bonus is a one-time benefit. This calculator focuses on the ongoing annual value to help you decide whether to keep the card at renewal. The welcome bonus should influence your decision to open the card, not whether to keep it in year two and beyond.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">What if my card has a $0 annual fee?</h3>
                <p className="text-sm text-text-primary leading-relaxed">Cards with no annual fee always have a positive or neutral net value. You can still use this calculator to compare the rewards value of no-fee cards against each other to determine which one deserves the most spend.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">How often should I recalculate?</h3>
                <p className="text-sm text-text-primary leading-relaxed">Run this calculation once a year, ideally one to two months before your card anniversary date. This gives you enough time to either cancel, downgrade, or negotiate a retention offer before the next annual fee posts.</p>
              </div>
            </div>
          </div>
        </section>

        <FinancialDisclaimer />
      </article>
    </>
  );
}
