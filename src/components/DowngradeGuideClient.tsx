'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DowngradeOption {
  toCard: string;
  toFee: number;
  benefitsLost: string[];
  benefitsGained: string[];
  pointsTransfer: boolean;
  timingRequirement: string;
  notes: string;
}

interface DowngradePath {
  fromCard: string;
  fromFee: number;
  fromIssuer: string;
  options: DowngradeOption[];
}

const downgradePaths: DowngradePath[] = [
  // CHASE
  {
    fromCard: 'Chase Sapphire Reserve',
    fromFee: 550,
    fromIssuer: 'Chase',
    options: [
      {
        toCard: 'Chase Sapphire Preferred',
        toFee: 95,
        benefitsLost: [
          'Priority Pass lounge access',
          '$300 annual travel credit',
          'Global Entry/TSA PreCheck credit',
          '3x on travel and dining reduced to 2x/3x',
        ],
        benefitsGained: ['$50 annual hotel credit'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: 'Lose 1.5 cents per point portal redemption, keep 1.25 cents per point.',
      },
      {
        toCard: 'Chase Freedom Flex',
        toFee: 0,
        benefitsLost: [
          'All premium travel benefits',
          'Transfer partners access',
          'Priority Pass lounge access',
          '$300 travel credit',
          'Global Entry credit',
        ],
        benefitsGained: [
          '5% on rotating quarterly categories (up to $1,500/quarter)',
          '3% on dining and drugstores',
        ],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: 'Points transfer but you cannot transfer to airline/hotel partners without a premium Chase card.',
      },
      {
        toCard: 'Chase Freedom Unlimited',
        toFee: 0,
        benefitsLost: [
          'All premium travel benefits',
          'Transfer partners access',
          'Priority Pass lounge access',
          '$300 travel credit',
          'Global Entry credit',
        ],
        benefitsGained: ['1.5% flat rate cash back on everything'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: 'Points transfer but you cannot transfer to airline/hotel partners without a premium Chase card.',
      },
    ],
  },
  {
    fromCard: 'Chase Sapphire Preferred',
    fromFee: 95,
    fromIssuer: 'Chase',
    options: [
      {
        toCard: 'Chase Freedom Flex',
        toFee: 0,
        benefitsLost: ['Transfer partners access', '3x on dining', '2x on travel'],
        benefitsGained: [
          '5% on rotating quarterly categories (up to $1,500/quarter)',
          '3% on dining and drugstores',
        ],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
      {
        toCard: 'Chase Freedom Unlimited',
        toFee: 0,
        benefitsLost: ['Transfer partners access', 'Category bonuses on dining and travel'],
        benefitsGained: ['1.5% flat rate cash back on everything'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Chase Ink Business Preferred',
    fromFee: 95,
    fromIssuer: 'Chase',
    options: [
      {
        toCard: 'Chase Ink Business Unlimited',
        toFee: 0,
        benefitsLost: ['3x on shipping, travel, internet, and advertising', 'Transfer partners access'],
        benefitsGained: ['1.5% flat rate cash back on everything'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
      {
        toCard: 'Chase Ink Business Cash',
        toFee: 0,
        benefitsLost: ['3x on shipping, travel, internet, and advertising', 'Transfer partners access'],
        benefitsGained: [
          '5% on office supplies, internet, and phone (up to $25k/yr)',
          '2% on gas and dining (up to $25k/yr)',
        ],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },

  // AMEX
  {
    fromCard: 'Amex Platinum',
    fromFee: 695,
    fromIssuer: 'American Express',
    options: [
      {
        toCard: 'Amex Gold',
        toFee: 250,
        benefitsLost: [
          'Centurion Lounge and Priority Pass access',
          '$200 airline fee credit',
          '$189 CLEAR Plus credit',
          'Walmart+ membership',
          '$100 Saks credit',
        ],
        benefitsGained: [
          '4x on dining worldwide',
          '4x on U.S. grocery stores (up to $25k/yr)',
          '$120 annual dining credit',
          '$120 annual Uber Cash',
        ],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: 'May need to call directly. Not all representatives offer this path initially.',
      },
      {
        toCard: 'Amex Green',
        toFee: 150,
        benefitsLost: [
          'Centurion Lounge and Priority Pass access',
          '$200 airline fee credit',
          '$189 CLEAR Plus credit',
          'Walmart+ membership',
          '$100 Saks credit',
          '5x on flights',
        ],
        benefitsGained: ['3x on travel and transit', '3x on dining'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Amex Gold',
    fromFee: 250,
    fromIssuer: 'American Express',
    options: [
      {
        toCard: 'Amex Green',
        toFee: 150,
        benefitsLost: [
          '4x on dining and groceries',
          '$120 dining credit',
          '$120 Uber Cash',
        ],
        benefitsGained: ['3x on travel and transit', '3x on dining'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
      {
        toCard: 'Amex EveryDay',
        toFee: 0,
        benefitsLost: [
          'All category bonuses (4x dining, 4x grocery)',
          '$120 dining credit',
          '$120 Uber Cash',
        ],
        benefitsGained: [
          '2x on U.S. grocery stores (up to $6,000/yr)',
          '1x on everything else',
        ],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Amex Delta Reserve',
    fromFee: 650,
    fromIssuer: 'American Express',
    options: [
      {
        toCard: 'Amex Delta Platinum',
        toFee: 250,
        benefitsLost: ['Delta Sky Club access', 'Companion certificate upgrade to First Class'],
        benefitsGained: ['Companion certificate (Main Cabin)', 'Sky Club discounted day pass'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Amex Delta Platinum',
    fromFee: 250,
    fromIssuer: 'American Express',
    options: [
      {
        toCard: 'Amex Delta Gold',
        toFee: 150,
        benefitsLost: ['Companion certificate'],
        benefitsGained: ['Priority boarding', 'First checked bag free'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Amex Delta Gold',
    fromFee: 150,
    fromIssuer: 'American Express',
    options: [
      {
        toCard: 'Amex Delta Blue',
        toFee: 0,
        benefitsLost: ['Priority boarding', 'Checked bag bonus'],
        benefitsGained: ['No annual fee'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },

  // CAPITAL ONE
  {
    fromCard: 'Capital One Venture X',
    fromFee: 395,
    fromIssuer: 'Capital One',
    options: [
      {
        toCard: 'Capital One Venture',
        toFee: 95,
        benefitsLost: [
          '$300 annual travel portal credit',
          '10,000 bonus miles anniversary',
          'Priority Pass lounge access',
          'Global Entry/TSA PreCheck credit',
        ],
        benefitsGained: ['Lower annual fee'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
      {
        toCard: 'Capital One VentureOne',
        toFee: 0,
        benefitsLost: [
          '$300 annual travel portal credit',
          '10,000 bonus miles anniversary',
          'Priority Pass lounge access',
          'Global Entry/TSA PreCheck credit',
          '2x miles reduced to 1.25x',
        ],
        benefitsGained: ['No annual fee'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
  {
    fromCard: 'Capital One Venture',
    fromFee: 95,
    fromIssuer: 'Capital One',
    options: [
      {
        toCard: 'Capital One VentureOne',
        toFee: 0,
        benefitsLost: ['2x miles reduced to 1.25x'],
        benefitsGained: ['No annual fee'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },

  // CITI
  {
    fromCard: 'Citi Strata Premier',
    fromFee: 95,
    fromIssuer: 'Citi',
    options: [
      {
        toCard: 'Citi Rewards+',
        toFee: 0,
        benefitsLost: ['3x on travel, dining, groceries, and gas', 'Transfer partners access'],
        benefitsGained: ['No annual fee', '10% points back on redemptions (up to 10,000 points/yr)'],
        pointsTransfer: true,
        timingRequirement: '12 months',
        notes: '',
      },
    ],
  },
];

// Group paths by issuer for dropdown
const issuerGroups: { issuer: string; paths: DowngradePath[] }[] = [];
const issuerMap = new Map<string, DowngradePath[]>();
for (const path of downgradePaths) {
  const existing = issuerMap.get(path.fromIssuer);
  if (existing) {
    existing.push(path);
  } else {
    issuerMap.set(path.fromIssuer, [path]);
  }
}
for (const [issuer, paths] of issuerMap) {
  issuerGroups.push({ issuer, paths });
}

export default function DowngradeGuideClient() {
  const [selectedCard, setSelectedCard] = useState<string>('');

  const activePath = downgradePaths.find((p) => p.fromCard === selectedCard);

  return (
    <div className="space-y-8">
      {/* Card Selector */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <label
          htmlFor="card-select"
          className="block font-display font-bold text-lg text-brand-navy mb-3"
        >
          Select your current card
        </label>
        <select
          id="card-select"
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-text-primary focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
        >
          <option value="">-- Choose a card --</option>
          {issuerGroups.map((group) => (
            <optgroup key={group.issuer} label={group.issuer}>
              {group.paths.map((path) => (
                <option key={path.fromCard} value={path.fromCard}>
                  {path.fromCard} (${path.fromFee}/yr)
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Selected Card Display */}
      {activePath && (
        <div className="space-y-6">
          <div className="bg-brand-navy text-white rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Your current card</p>
            <p className="font-display font-bold text-xl">{activePath.fromCard}</p>
            <p className="text-brand-gold font-semibold text-lg mt-1">
              ${activePath.fromFee}/year
            </p>
          </div>

          <h3 className="font-display font-bold text-xl text-brand-navy">
            Downgrade Options ({activePath.options.length})
          </h3>

          {activePath.options.map((option) => {
            const savings = activePath.fromFee - option.toFee;
            const feeBarWidth =
              activePath.fromFee > 0
                ? Math.round((option.toFee / activePath.fromFee) * 100)
                : 0;

            return (
              <div
                key={option.toCard}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="font-display font-bold text-lg text-brand-navy">
                      {option.toCard}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {option.toFee === 0 ? 'No annual fee' : `$${option.toFee}/year`}
                    </p>
                  </div>
                  <div className="bg-brand-green/10 text-brand-green font-bold text-lg px-4 py-2 rounded-lg whitespace-nowrap">
                    Save ${savings}/year
                  </div>
                </div>

                {/* Fee Comparison Bar */}
                <div>
                  <p className="text-xs text-text-secondary mb-1">Annual fee comparison</p>
                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-brand-gold rounded-full transition-all duration-300"
                      style={{ width: `${feeBarWidth}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-1">
                    <span>${option.toFee}</span>
                    <span>${activePath.fromFee}</span>
                  </div>
                </div>

                {/* Benefits Lost / Gained */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm text-brand-red mb-2">Benefits Lost</p>
                    <ul className="space-y-1">
                      {option.benefitsLost.map((b) => (
                        <li key={b} className="text-sm text-brand-red flex items-start gap-1.5">
                          <span className="mt-0.5 shrink-0" aria-hidden="true">&minus;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-green mb-2">Benefits Gained</p>
                    <ul className="space-y-1">
                      {option.benefitsGained.map((b) => (
                        <li key={b} className="text-sm text-brand-green flex items-start gap-1.5">
                          <span className="mt-0.5 shrink-0" aria-hidden="true">+</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Points Transfer & Timing */}
                <div className="flex flex-wrap gap-4 text-sm border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={
                        option.pointsTransfer
                          ? 'text-brand-green font-bold'
                          : 'text-brand-red font-bold'
                      }
                      aria-hidden="true"
                    >
                      {option.pointsTransfer ? '\u2713' : '\u2717'}
                    </span>
                    <span className="text-text-primary">
                      Points transfer: {option.pointsTransfer ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-gold font-bold" aria-hidden="true">&#9201;</span>
                    <span className="text-text-primary">
                      Must hold current card for {option.timingRequirement}
                    </span>
                  </div>
                </div>

                {/* Notes */}
                {option.notes && (
                  <p className="text-xs text-text-secondary bg-brand-light rounded-lg px-4 py-2">
                    <span className="font-semibold">Note:</span> {option.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* No selection prompt */}
      {!activePath && selectedCard === '' && (
        <div className="text-center py-12 text-text-secondary">
          <p className="text-lg">Select a card above to see available downgrade paths.</p>
        </div>
      )}

      {/* Instead of downgrading section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
        <h3 className="font-display font-bold text-lg text-brand-navy mb-3">
          Instead of downgrading...
        </h3>
        <p className="text-base text-text-primary mb-4 leading-relaxed">
          Instead of downgrading, consider a card with comparable benefits at a lower cost. You may
          find that a different card from another issuer offers the perks you actually use at a
          fraction of the annual fee.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#apply-compare"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-amber-500 transition-colors text-sm"
          >
            Compare Top Cards
          </a>
          <Link
            href="/annual-fee-calculator"
            className="inline-flex items-center justify-center px-6 py-3 border border-brand-navy text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-sm"
          >
            Calculate if your card is worth keeping &rarr;
          </Link>
        </div>
        <p className="text-xs text-text-secondary mt-3">
          Some links on this page are affiliate links. We may receive compensation if you apply and
          are approved, at no additional cost to you. This does not affect our recommendations.
        </p>
      </div>
    </div>
  );
}
