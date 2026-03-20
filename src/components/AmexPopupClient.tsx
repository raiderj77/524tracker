'use client';

import { useState } from 'react';

interface FormData {
  cardsOpen: number;
  cardsOpenedLast12Mo: number;
  cardsClosedLast12Mo: number;
  avgMonthlySpend: number;
  monthsSinceLastApp: number;
  receivedBonusLast12Mo: boolean;
  returnedPurchases: boolean;
}

interface ScoreFactor {
  label: string;
  points: number;
}

type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

interface RiskResult {
  score: number;
  level: RiskLevel;
  factors: ScoreFactor[];
  recommendations: string[];
}

function calculateRisk(data: FormData): RiskResult {
  let riskScore = 0;
  const factors: ScoreFactor[] = [];

  if (data.cardsOpenedLast12Mo >= 2) {
    riskScore += 2;
    factors.push({ label: 'Opened 2+ Amex cards in last 12 months', points: 2 });
  }

  if (data.cardsClosedLast12Mo >= 1) {
    riskScore += 1;
    factors.push({ label: 'Closed 1+ Amex cards in last 12 months', points: 1 });
  }

  if (data.cardsClosedLast12Mo >= 2) {
    riskScore += 1;
    factors.push({ label: 'Closed 2+ Amex cards in last 12 months', points: 1 });
  }

  if (data.avgMonthlySpend < 500 && data.cardsOpen > 0) {
    riskScore += 2;
    factors.push({ label: 'Average monthly spend below $500', points: 2 });
  }

  if (data.avgMonthlySpend < 200 && data.cardsOpen > 0) {
    riskScore += 1;
    factors.push({ label: 'Average monthly spend below $200', points: 1 });
  }

  if (data.receivedBonusLast12Mo) {
    riskScore += 1;
    factors.push({ label: 'Received a welcome bonus in last 12 months', points: 1 });
  }

  if (data.returnedPurchases) {
    riskScore += 3;
    factors.push({ label: 'Returned purchases to meet minimum spend', points: 3 });
  }

  if (data.monthsSinceLastApp > 12) {
    riskScore -= 1;
    factors.push({ label: '12+ months since last Amex application', points: -1 });
  }

  if (data.avgMonthlySpend > 1000) {
    riskScore -= 1;
    factors.push({ label: 'Average monthly spend above $1,000', points: -1 });
  }

  if (data.avgMonthlySpend > 2000) {
    riskScore -= 1;
    factors.push({ label: 'Average monthly spend above $2,000', points: -1 });
  }

  riskScore = Math.max(0, riskScore);

  let level: RiskLevel;
  if (riskScore <= 1) {
    level = 'LOW';
  } else if (riskScore <= 3) {
    level = 'MEDIUM';
  } else {
    level = 'HIGH';
  }

  const recommendations: string[] = [];

  if (data.avgMonthlySpend < 500 && data.cardsOpen > 0) {
    recommendations.push('Increase your monthly Amex spending to $500+ per card');
  }

  if (data.cardsClosedLast12Mo >= 1) {
    recommendations.push('Avoid closing any Amex cards for at least 12 months');
  }

  if (data.returnedPurchases) {
    recommendations.push('Never return purchases made to meet minimum spend requirements');
  }

  if (data.cardsOpenedLast12Mo >= 2) {
    recommendations.push('Wait at least 6 months before applying for another Amex card');
  }

  if (data.receivedBonusLast12Mo) {
    recommendations.push('Put organic spend on your Amex cards for 6+ months');
  }

  return { score: riskScore, level, factors, recommendations };
}

function ToggleButton({
  value,
  selected,
  onClick,
  children,
}: {
  value: boolean;
  selected: boolean;
  onClick: (val: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
        selected
          ? 'bg-brand-navy text-white'
          : 'bg-white text-text-secondary border border-gray-300 hover:border-brand-navy'
      }`}
    >
      {children}
    </button>
  );
}

export default function AmexPopupClient() {
  const [cardsOpen, setCardsOpen] = useState('');
  const [cardsOpenedLast12Mo, setCardsOpenedLast12Mo] = useState('');
  const [cardsClosedLast12Mo, setCardsClosedLast12Mo] = useState('');
  const [avgMonthlySpend, setAvgMonthlySpend] = useState('');
  const [monthsSinceLastApp, setMonthsSinceLastApp] = useState('');
  const [receivedBonusLast12Mo, setReceivedBonusLast12Mo] = useState<boolean | null>(null);
  const [returnedPurchases, setReturnedPurchases] = useState<boolean | null>(null);
  const [result, setResult] = useState<RiskResult | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data: FormData = {
      cardsOpen: parseInt(cardsOpen, 10) || 0,
      cardsOpenedLast12Mo: parseInt(cardsOpenedLast12Mo, 10) || 0,
      cardsClosedLast12Mo: parseInt(cardsClosedLast12Mo, 10) || 0,
      avgMonthlySpend: parseInt(avgMonthlySpend, 10) || 0,
      monthsSinceLastApp: parseInt(monthsSinceLastApp, 10) || 0,
      receivedBonusLast12Mo: receivedBonusLast12Mo ?? false,
      returnedPurchases: returnedPurchases ?? false,
    };

    setResult(calculateRisk(data));
  }

  const riskStyles: Record<RiskLevel, { bg: string; border: string; text: string; icon: string; label: string }> = {
    LOW: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-800',
      icon: '\u2705',
      label: 'Low Risk \u2014 You\'re likely safe to apply',
    },
    MEDIUM: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      text: 'text-yellow-800',
      icon: '\u26A0\uFE0F',
      label: 'Medium Risk \u2014 Proceed with caution',
    },
    HIGH: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-800',
      icon: '\uD83D\uDED1',
      label: 'High Risk \u2014 Popup is likely',
    },
  };

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-brand-light border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6"
      >
        <h2 className="font-display font-bold text-xl text-brand-navy">
          Enter Your Amex Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cards currently open */}
          <div>
            <label htmlFor="cardsOpen" className="block text-sm font-semibold text-text-primary mb-1">
              Amex cards currently open
            </label>
            <input
              id="cardsOpen"
              type="number"
              min={0}
              value={cardsOpen}
              onChange={(e) => setCardsOpen(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          {/* Cards opened last 12 months */}
          <div>
            <label htmlFor="cardsOpenedLast12Mo" className="block text-sm font-semibold text-text-primary mb-1">
              Amex cards opened in last 12 months
            </label>
            <input
              id="cardsOpenedLast12Mo"
              type="number"
              min={0}
              value={cardsOpenedLast12Mo}
              onChange={(e) => setCardsOpenedLast12Mo(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          {/* Cards closed last 12 months */}
          <div>
            <label htmlFor="cardsClosedLast12Mo" className="block text-sm font-semibold text-text-primary mb-1">
              Amex cards closed in last 12 months
            </label>
            <input
              id="cardsClosedLast12Mo"
              type="number"
              min={0}
              value={cardsClosedLast12Mo}
              onChange={(e) => setCardsClosedLast12Mo(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          {/* Average monthly spend */}
          <div>
            <label htmlFor="avgMonthlySpend" className="block text-sm font-semibold text-text-primary mb-1">
              Average monthly spend across all Amex cards ($)
            </label>
            <input
              id="avgMonthlySpend"
              type="number"
              min={0}
              value={avgMonthlySpend}
              onChange={(e) => setAvgMonthlySpend(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          {/* Months since last app */}
          <div>
            <label htmlFor="monthsSinceLastApp" className="block text-sm font-semibold text-text-primary mb-1">
              Months since last Amex application
            </label>
            <input
              id="monthsSinceLastApp"
              type="number"
              min={0}
              value={monthsSinceLastApp}
              onChange={(e) => setMonthsSinceLastApp(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>
        </div>

        {/* Toggle: Received bonus last 12 months */}
        <div>
          <p className="text-sm font-semibold text-text-primary mb-2">
            Received an Amex welcome bonus in the last 12 months?
          </p>
          <div className="flex gap-3">
            <ToggleButton
              value={true}
              selected={receivedBonusLast12Mo === true}
              onClick={setReceivedBonusLast12Mo}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              value={false}
              selected={receivedBonusLast12Mo === false}
              onClick={setReceivedBonusLast12Mo}
            >
              No
            </ToggleButton>
          </div>
        </div>

        {/* Toggle: Returned purchases */}
        <div>
          <p className="text-sm font-semibold text-text-primary mb-2">
            Returned purchases to meet minimum spend requirements?
          </p>
          <div className="flex gap-3">
            <ToggleButton
              value={true}
              selected={returnedPurchases === true}
              onClick={setReturnedPurchases}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              value={false}
              selected={returnedPurchases === false}
              onClick={setReturnedPurchases}
            >
              No
            </ToggleButton>
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-brand-gold hover:bg-amber-600 text-brand-navy font-bold py-3 px-8 rounded-lg text-base transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
        >
          Estimate My Risk
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Risk Indicator */}
          <div
            className={`${riskStyles[result.level].bg} ${riskStyles[result.level].border} border-2 rounded-xl p-6 text-center`}
          >
            <p className="text-4xl mb-2" role="img" aria-label={`${result.level.toLowerCase()} risk`}>
              {riskStyles[result.level].icon}
            </p>
            <p className={`font-display font-bold text-2xl ${riskStyles[result.level].text}`}>
              {riskStyles[result.level].label}
            </p>
            <p className={`text-sm mt-1 ${riskStyles[result.level].text} opacity-80`}>
              Risk score: {result.score}
            </p>
          </div>

          {/* Factor Breakdown */}
          {result.factors.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Score Breakdown
              </h3>
              <ul className="space-y-2">
                {result.factors.map((factor) => (
                  <li key={factor.label} className="flex items-center justify-between text-sm">
                    <span className="text-text-primary">{factor.label}</span>
                    <span
                      className={`font-bold ${
                        factor.points > 0 ? 'text-red-600' : 'text-green-600'
                      }`}
                    >
                      {factor.points > 0 ? '+' : ''}{factor.points}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
                Recommendations to Reduce Risk
              </h3>
              <ul className="space-y-2">
                {result.recommendations.map((rec) => (
                  <li key={rec} className="flex items-start gap-2 text-sm text-text-primary">
                    <span className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true">&bull;</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ways to Escape Popup Jail */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4">
              Ways to Escape Popup Jail
            </h3>
            <ul className="space-y-2">
              {[
                'Spend $500+ per month on every Amex card you hold for at least 6 months',
                'Do not close any Amex cards during your rehabilitation period',
                'Add recurring bills and subscriptions to your Amex cards to build consistent spend history',
                'Use Amex Offers and shop through the Amex portal to demonstrate engagement',
                'Avoid applying for any new Amex cards for 6-12 months',
                'Check for the popup periodically by starting an application without submitting',
                'Consider adding an authorized user to increase natural spending on your cards',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-text-primary">
                  <span className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true">&bull;</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caveat */}
          <p className="text-xs text-text-secondary italic leading-relaxed">
            This is an estimate based on community data patterns. American Express&apos;s actual algorithm
            is proprietary and unknown. Results are not guaranteed.
          </p>
        </div>
      )}
    </div>
  );
}
