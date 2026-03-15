'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────
interface Recommendation {
  cardName: string;
  reason: string;
  bonus: string;
  annualFee: string;
  bestFor: string;
  extraLink?: { href: string; label: string };
}

interface Step {
  id: string;
  question: string;
  options: { label: string; next: string | null; recommendation?: Recommendation }[];
}

// ─── Flowchart Data ───────────────────────────────────────────
const steps: Record<string, Step> = {
  start: {
    id: 'start',
    question: 'What is your current 5/24 status?',
    options: [
      { label: 'Under 5/24 (fewer than 5 new personal cards in 24 months)', next: 'under524_rewards' },
      { label: 'At or over 5/24', next: 'over524_amex' },
    ],
  },
  under524_rewards: {
    id: 'under524_rewards',
    question: 'What type of rewards do you prefer?',
    options: [
      { label: 'Travel points / miles', next: 'under524_travel' },
      { label: 'Cash back', next: 'under524_cashback' },
      { label: 'Not sure yet', next: 'under524_notsure' },
    ],
  },
  under524_travel: {
    id: 'under524_travel',
    question: 'Do you have a Chase Sapphire card?',
    options: [
      {
        label: 'No, I don\'t have a Sapphire card',
        next: null,
        recommendation: {
          cardName: 'Chase Sapphire Preferred',
          reason: 'This is the best travel rewards card for someone under 5/24. It has a strong welcome bonus, earns 3x on dining and 2x on travel, and gives you access to transfer partners like United, Hyatt, and Southwest. Since you\'re under 5/24, Chase will approve you — use this slot wisely.',
          bonus: '60,000 Ultimate Rewards points (typical)',
          annualFee: '$95',
          bestFor: 'Dining, travel, and transferable points',
        },
      },
      {
        label: 'Yes, I have the Sapphire Preferred',
        next: null,
        recommendation: {
          cardName: 'Chase Ink Business Preferred',
          reason: 'Since you already have the Sapphire Preferred, the Ink Business Preferred is your best next card. Business cards do not count toward 5/24, so you preserve your remaining slots. It earns the same Ultimate Rewards points and has one of the highest welcome bonuses available.',
          bonus: '100,000 Ultimate Rewards points (typical)',
          annualFee: '$95',
          bestFor: 'Travel, shipping, advertising, and telecom (3x categories)',
        },
      },
      {
        label: 'Yes, I have the Sapphire Reserve',
        next: null,
        recommendation: {
          cardName: 'Chase Ink Business Preferred or Amex Platinum',
          reason: 'You\'ve maxed out Chase personal travel cards. The Ink Business Preferred adds another 100K UR points without using a 5/24 slot. Alternatively, the Amex Platinum gives you a massive bonus and lounge access — Amex doesn\'t enforce 5/24, but you\'ll still want to fill Chase slots first since those are limited.',
          bonus: '100,000 UR (Ink) or 80,000 MR (Platinum, typical)',
          annualFee: '$95 (Ink) or $695 (Platinum)',
          bestFor: 'Premium travel benefits and transferable points',
        },
      },
    ],
  },
  under524_cashback: {
    id: 'under524_cashback',
    question: 'Do you have a Chase Freedom Unlimited or Freedom Flex?',
    options: [
      {
        label: 'No, I don\'t have either',
        next: null,
        recommendation: {
          cardName: 'Chase Freedom Unlimited',
          reason: 'The Freedom Unlimited earns a flat 1.5% (or 1.5x UR points) on everything with no annual fee. If you later add a Sapphire card, these points become transferable to airlines and hotels — making this card far more valuable than a typical 1.5% cash back card. It\'s the ideal foundation card while under 5/24.',
          bonus: '$200 bonus (typical) after $500 spend',
          annualFee: '$0',
          bestFor: 'Flat-rate rewards on all purchases',
        },
      },
      {
        label: 'Yes, I have the Freedom Unlimited',
        next: null,
        recommendation: {
          cardName: 'Chase Freedom Flex',
          reason: 'The Freedom Flex earns 5% on rotating quarterly categories (groceries, gas, restaurants, Amazon rotate throughout the year) and 3% on dining and drugstores. It complements your Freedom Unlimited perfectly — use the Flex for bonus categories and the Unlimited for everything else.',
          bonus: '$200 bonus (typical) after $500 spend',
          annualFee: '$0',
          bestFor: '5% rotating categories, 3% dining and drugstores',
        },
      },
      {
        label: 'I have both Freedom cards',
        next: null,
        recommendation: {
          cardName: 'Amex Blue Cash Preferred',
          reason: 'With both Freedom cards covered, the Blue Cash Preferred gives you best-in-class 6% cash back on groceries (up to $6,000/year) and 6% on select streaming. For most households spending $500+/month on groceries, the $95 annual fee pays for itself many times over.',
          bonus: '$350 back (typical) after spend requirement',
          annualFee: '$95',
          bestFor: '6% groceries, 6% streaming, 3% gas and transit',
        },
      },
    ],
  },
  under524_notsure: {
    id: 'under524_notsure',
    question: 'What is your biggest monthly spending category?',
    options: [
      {
        label: 'Groceries',
        next: null,
        recommendation: {
          cardName: 'Amex Blue Cash Preferred',
          reason: 'If groceries are your biggest expense, the Blue Cash Preferred\'s 6% back on up to $6,000/year in U.S. supermarket purchases is unmatched. A household spending $500/month on groceries earns $360/year in cash back — making the $95 annual fee an easy win.',
          bonus: '$350 back (typical) after spend requirement',
          annualFee: '$95',
          bestFor: '6% groceries, 6% streaming, 3% gas and transit',
        },
      },
      {
        label: 'Dining / restaurants',
        next: null,
        recommendation: {
          cardName: 'Chase Sapphire Preferred',
          reason: 'The Sapphire Preferred earns 3x on dining and 2x on travel, with points transferable to airline and hotel partners. For regular diners, this is the most versatile rewards card available. The welcome bonus alone is worth $600+ in travel when transferred to partners like Hyatt.',
          bonus: '60,000 Ultimate Rewards points (typical)',
          annualFee: '$95',
          bestFor: '3x dining, 2x travel, transferable points',
        },
      },
      {
        label: 'Gas',
        next: null,
        recommendation: {
          cardName: 'Citi Custom Cash',
          reason: 'The Custom Cash automatically gives you 5% back on your top spending category each billing cycle (up to $500/month). If gas is consistently your top category, you\'ll earn 5% without having to activate or think about it. No annual fee makes this a simple, high-value keeper card.',
          bonus: '$200 back (typical) after spend requirement',
          annualFee: '$0',
          bestFor: '5% on your top spending category automatically',
        },
      },
      {
        label: 'Travel / flights',
        next: null,
        recommendation: {
          cardName: 'Chase Sapphire Preferred',
          reason: 'For travel spending, the Sapphire Preferred earns 2x on travel and 3x on dining, with points that transfer 1:1 to partners like United, Hyatt, Southwest, and British Airways. The welcome bonus alone can fund a round-trip domestic flight or several hotel nights.',
          bonus: '60,000 Ultimate Rewards points (typical)',
          annualFee: '$95',
          bestFor: '2x travel, 3x dining, airline/hotel transfer partners',
        },
      },
      {
        label: 'Everything equally',
        next: null,
        recommendation: {
          cardName: 'Chase Freedom Unlimited',
          reason: 'If your spending is spread evenly, a flat-rate card is your best bet. The Freedom Unlimited earns 1.5% (or 1.5x UR points) on every purchase. Pair it with a Sapphire card later and those points become transferable to travel partners — far more valuable than plain cash back.',
          bonus: '$200 bonus (typical) after $500 spend',
          annualFee: '$0',
          bestFor: 'Flat 1.5% on all purchases, no annual fee',
        },
      },
    ],
  },
  over524_amex: {
    id: 'over524_amex',
    question: 'Do you have any Amex cards?',
    options: [
      { label: 'No, I don\'t have any Amex cards', next: 'over524_which_amex' },
      { label: 'Yes, I have some Amex cards', next: 'over524_amex_bonuses' },
    ],
  },
  over524_which_amex: {
    id: 'over524_which_amex',
    question: 'Which Amex card interests you most?',
    options: [
      {
        label: 'Amex Platinum (premium travel)',
        next: null,
        recommendation: {
          cardName: 'Amex Platinum',
          reason: 'Amex ignores Chase\'s 5/24 rule entirely, so being over 5/24 doesn\'t matter. The Platinum has one of the largest welcome bonuses available, global lounge access (Centurion Lounges + Priority Pass), and extensive travel credits that offset much of the $695 annual fee. This is the top premium travel card.',
          bonus: '80,000-150,000 Membership Rewards points (varies by offer)',
          annualFee: '$695 (offset by $200 airline credit, $200 hotel credit, and other perks)',
          bestFor: 'Lounge access, premium travel benefits, large welcome bonus',
        },
      },
      {
        label: 'Amex Gold (dining + groceries)',
        next: null,
        recommendation: {
          cardName: 'Amex Gold',
          reason: 'The Amex Gold earns 4x on dining worldwide and 4x at U.S. supermarkets — the highest multipliers available in those categories. The $250 annual fee is partially offset by $120 in Uber Cash and $120 in dining credits. Amex doesn\'t care about 5/24, so apply anytime.',
          bonus: '60,000-90,000 Membership Rewards points (varies by offer)',
          annualFee: '$250 (offset by $120 Uber Cash + $120 dining credit)',
          bestFor: '4x dining, 4x U.S. supermarkets, Membership Rewards transfers',
        },
      },
      {
        label: 'Something with no annual fee',
        next: null,
        recommendation: {
          cardName: 'Amex Blue Cash Everyday',
          reason: 'The Blue Cash Everyday earns 3% at U.S. supermarkets, U.S. online retail, and gas stations with no annual fee. It\'s a great entry point into the Amex ecosystem if you don\'t want to commit to annual fees. Amex ignores 5/24, so your over-5/24 status is irrelevant.',
          bonus: '$200 back (typical) after spend requirement',
          annualFee: '$0',
          bestFor: '3% groceries, gas, and online retail — no annual fee',
        },
      },
    ],
  },
  over524_amex_bonuses: {
    id: 'over524_amex_bonuses',
    question: 'Have you received the welcome bonus on your current Amex cards?',
    options: [
      { label: 'Yes, I\'ve earned my Amex bonuses', next: 'over524_capone' },
      {
        label: 'No, still working on spending requirements',
        next: null,
        recommendation: {
          cardName: 'Focus on current cards first',
          reason: 'Before applying for new cards, make sure you\'ve met the minimum spend requirements on your existing cards and earned those welcome bonuses. Each bonus is a one-time opportunity worth hundreds of dollars — don\'t risk missing a deadline by spreading your spending too thin across new applications.',
          bonus: 'Varies by current cards',
          annualFee: 'N/A',
          bestFor: 'Maximizing existing welcome bonus value',
          extraLink: { href: '/spend-tracker', label: 'Track your spend progress' },
        },
      },
    ],
  },
  over524_capone: {
    id: 'over524_capone',
    question: 'Do you have any Capital One cards?',
    options: [
      {
        label: 'No Capital One cards',
        next: null,
        recommendation: {
          cardName: 'Capital One Venture X',
          reason: 'The Venture X is the best premium travel card outside the Chase and Amex ecosystems. The $395 annual fee is effectively $95 after the $300 annual travel credit, and you earn 10,000 bonus miles on each anniversary (worth ~$100). Capital One ignores 5/24 and gives you access to Capital One Lounges.',
          bonus: '75,000 miles (typical) after $4,000 spend',
          annualFee: '$395 (offset by $300 travel credit + 10K anniversary miles)',
          bestFor: 'Premium travel, lounge access, low effective annual fee',
        },
      },
      {
        label: 'Yes, I have 1 Capital One card',
        next: null,
        recommendation: {
          cardName: 'Capital One SavorOne',
          reason: 'Capital One generally allows up to 2 consumer cards. The SavorOne earns 3% on dining, entertainment, grocery stores, and streaming with no annual fee. It\'s a strong everyday companion to your existing Capital One card and fills the dining/entertainment niche well.',
          bonus: '$200 back (typical) after spend requirement',
          annualFee: '$0',
          bestFor: '3% dining, entertainment, groceries, streaming — no annual fee',
        },
      },
      {
        label: 'Yes, I have 2 or more Capital One cards',
        next: null,
        recommendation: {
          cardName: 'Wait and focus on getting back under 5/24',
          reason: 'With 2+ Capital One cards, you\'re at their consumer card limit. Since you\'re also over 5/24, your best move is to wait for your oldest cards to age off the 24-month window. Once you\'re back under 5/24, you can apply for Chase cards again — those opportunities are time-limited and shouldn\'t be wasted.',
          bonus: 'N/A — patience is the strategy',
          annualFee: 'N/A',
          bestFor: 'Waiting for 5/24 count to drop',
          extraLink: { href: '/card-tracker', label: 'Check when your 5/24 count drops' },
        },
      },
    ],
  },
};

const stepOrder = [
  'start',
  'under524_rewards', 'under524_travel', 'under524_cashback', 'under524_notsure',
  'over524_amex', 'over524_which_amex', 'over524_amex_bonuses', 'over524_capone',
];

function getStepNumber(history: string[]): number {
  return history.length;
}

function getTotalEstimate(history: string[]): number {
  // The longest path is 4 steps
  const depth = history.length;
  if (depth <= 1) return 4;
  if (depth <= 2) return 3;
  return depth + 1;
}

// ─── Main Component ───────────────────────────────────────────
export default function ApplicationFlowchart() {
  const [history, setHistory] = useState<string[]>(['start']);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  const currentStepId = history[history.length - 1];
  const currentStep = steps[currentStepId];

  const announce = useCallback((msg: string) => {
    if (liveRef.current) liveRef.current.textContent = msg;
  }, []);

  function handleAnswer(next: string | null, rec?: Recommendation) {
    if (rec) {
      setRecommendation(rec);
      announce(`Recommendation: ${rec.cardName}`);
    } else if (next && steps[next]) {
      setHistory((prev) => [...prev, next]);
      announce(steps[next].question);
    }
  }

  function goBack() {
    if (recommendation) {
      setRecommendation(null);
      return;
    }
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  }

  function startOver() {
    setHistory(['start']);
    setRecommendation(null);
    announce('Starting over.');
  }

  const stepNum = getStepNumber(history);
  const totalEst = getTotalEstimate(history);

  // ─── Recommendation Screen ──────────────────────────────
  if (recommendation) {
    return (
      <div className="space-y-6">
        <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

        {/* Result card */}
        <div className="bg-white rounded-2xl border-2 border-brand-gold p-6 sm:p-8">
          <p className="text-xs text-brand-gold font-semibold uppercase tracking-wide mb-2">Our Recommendation</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy mb-4">
            {recommendation.cardName}
          </h2>
          <p className="text-sm text-text-primary leading-relaxed mb-6">
            {recommendation.reason}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-brand-light rounded-lg p-3">
              <p className="text-[10px] text-text-secondary uppercase tracking-wide mb-1">Typical Bonus</p>
              <p className="text-sm font-semibold text-brand-navy">{recommendation.bonus}</p>
            </div>
            <div className="bg-brand-light rounded-lg p-3">
              <p className="text-[10px] text-text-secondary uppercase tracking-wide mb-1">Annual Fee</p>
              <p className="text-sm font-semibold text-brand-navy">{recommendation.annualFee}</p>
            </div>
            <div className="bg-brand-light rounded-lg p-3">
              <p className="text-[10px] text-text-secondary uppercase tracking-wide mb-1">Best For</p>
              <p className="text-sm font-semibold text-brand-navy">{recommendation.bestFor}</p>
            </div>
          </div>

          {recommendation.extraLink && (
            <div className="mb-6">
              <Link
                href={recommendation.extraLink.href}
                className="text-sm text-brand-gold hover:text-amber-600 font-semibold"
              >
                {recommendation.extraLink.label} &rarr;
              </Link>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={startOver}
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm min-h-[44px]"
            >
              Start Over
            </button>
            <Link
              href="/card-tracker"
              className="px-6 py-2.5 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-sm min-h-[44px] inline-flex items-center"
            >
              Track Your Applications
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Disclaimer:</strong> Credit card terms, welcome bonuses, and approval odds change frequently.
            Always verify current offers directly with the card issuer before applying. This is not financial advice.
          </p>
        </div>
      </div>
    );
  }

  // ─── Question Screen ────────────────────────────────────
  return (
    <div className="space-y-6">
      <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-text-secondary font-medium">
          Step {stepNum} of ~{totalEst}
        </p>
        <div className="flex-1 mx-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-gold rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, (stepNum / totalEst) * 100)}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-navy mb-6">
          {currentStep.question}
        </h2>

        <div className="space-y-3">
          {currentStep.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.next, opt.recommendation)}
              className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-brand-gold hover:bg-brand-light/50 transition-colors text-sm font-medium text-text-primary min-h-[52px]"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Back button */}
      {history.length > 1 && (
        <button
          onClick={goBack}
          className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand-gold transition-colors min-h-[44px]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to previous question
        </button>
      )}

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-xs text-amber-900 leading-relaxed">
          <strong>Disclaimer:</strong> Credit card terms, welcome bonuses, and approval odds change frequently.
          Always verify current offers directly with the card issuer before applying. This is not financial advice.
        </p>
      </div>
    </div>
  );
}
