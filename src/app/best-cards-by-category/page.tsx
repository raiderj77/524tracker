'use client';

import { useState } from 'react';

interface CategoryCard {
  name: string;
  bank: string;
  rate: string;
  why: string;
  isBusiness: boolean;
  slug: string;
}

interface Category {
  name: string;
  cards: CategoryCard[];
}

const categories: Category[] = [
  {
    name: 'Gas / Fuel',
    cards: [
      { name: 'Citi Custom Cash', bank: 'Citi', rate: '5% on top category (up to $500/mo)', why: 'Automatically earns 5% on your top spend category each billing cycle, including gas.', isBusiness: false, slug: 'citi-custom-cash' },
      { name: 'Costco Anywhere Visa', bank: 'Citi', rate: '4% on gas (up to $7,000/yr)', why: 'Highest flat gas rate among major cards, plus Costco gas savings stack on top.', isBusiness: false, slug: 'costco-anywhere-visa' },
      { name: 'US Bank Altitude Connect', bank: 'US Bank', rate: '4x on gas and EV charging', why: 'Strong gas rate with no annual fee after first-year waiver.', isBusiness: false, slug: 'us-bank-altitude-connect' },
    ],
  },
  {
    name: 'Groceries',
    cards: [
      { name: 'Amex Gold', bank: 'American Express', rate: '4x at US supermarkets (up to $25k/yr)', why: 'Best grocery earn rate among premium cards with broad supermarket coverage.', isBusiness: false, slug: 'amex-gold' },
      { name: 'Amex Blue Cash Preferred', bank: 'American Express', rate: '6% at US supermarkets (up to $6k/yr)', why: 'Highest grocery cashback rate available, ideal if spend stays under $6k annually.', isBusiness: false, slug: 'amex-blue-cash-preferred' },
      { name: 'Capital One SavorOne', bank: 'Capital One', rate: '3% on groceries', why: 'No annual fee with unlimited 3% grocery cashback and no spending cap.', isBusiness: false, slug: 'capital-one-savorone' },
    ],
  },
  {
    name: 'Dining / Restaurants',
    cards: [
      { name: 'Amex Gold', bank: 'American Express', rate: '4x at restaurants worldwide', why: 'Highest dining earn rate with global acceptance at restaurants.', isBusiness: false, slug: 'amex-gold' },
      { name: 'Capital One Savor', bank: 'Capital One', rate: '4% on dining and entertainment', why: 'Matches Amex Gold on dining with added entertainment bonus.', isBusiness: false, slug: 'capital-one-savor' },
      { name: 'Chase Sapphire Reserve', bank: 'Chase', rate: '3x on dining + DoorDash perks', why: 'Premium travel protections plus complimentary DashPass membership.', isBusiness: false, slug: 'chase-sapphire-reserve' },
    ],
  },
  {
    name: 'Travel (General)',
    cards: [
      { name: 'Chase Sapphire Reserve', bank: 'Chase', rate: '3x on travel + best protections', why: 'Industry-leading travel insurance, trip delay coverage, and 1.5x point value in Chase portal.', isBusiness: false, slug: 'chase-sapphire-reserve' },
      { name: 'Amex Platinum', bank: 'American Express', rate: '5x on flights booked direct', why: 'Global lounge access, $200 airline credit, $200 hotel credit, and elite status benefits.', isBusiness: false, slug: 'amex-platinum' },
      { name: 'Capital One Venture X', bank: 'Capital One', rate: '2x on everything + lounge access', why: 'Best value premium card — $300 travel credit effectively reduces $395 fee to $95.', isBusiness: false, slug: 'capital-one-venture-x' },
    ],
  },
  {
    name: 'Hotels',
    cards: [
      { name: 'Amex Hilton Aspire', bank: 'American Express', rate: '14x at Hilton + free night + Diamond', why: 'Automatic Diamond status, annual free night certificate, and massive Hilton earning.', isBusiness: false, slug: 'amex-hilton-aspire' },
      { name: 'Chase World of Hyatt', bank: 'Chase', rate: '4x at Hyatt + Globalist path', why: 'Hyatt points are worth ~2 cents each — the highest value hotel currency available.', isBusiness: false, slug: 'chase-world-of-hyatt' },
      { name: 'Amex Marriott Bonvoy Brilliant', bank: 'American Express', rate: '6x at Marriott + free night', why: 'Annual free night certificate (up to 85k points) often covers the annual fee alone.', isBusiness: false, slug: 'amex-marriott-bonvoy-brilliant' },
    ],
  },
  {
    name: 'Airlines',
    cards: [
      { name: 'Chase United Explorer', bank: 'Chase', rate: '2x on United + 2 free checked bags', why: 'Two free checked bags save $140+ per roundtrip for a family, plus United Club discounts.', isBusiness: false, slug: 'chase-united-explorer' },
      { name: 'Amex Delta Gold', bank: 'American Express', rate: '2x on Delta + free first checked bag', why: 'Free checked bag on Delta saves $60+ per roundtrip, plus priority boarding.', isBusiness: false, slug: 'amex-delta-gold' },
      { name: 'Citi AAdvantage Platinum Select', bank: 'Citi', rate: '2x on AA + preferred boarding', why: 'Free checked bag on American Airlines plus 25% savings on in-flight purchases.', isBusiness: false, slug: 'citi-aadvantage-platinum' },
    ],
  },
  {
    name: 'Online Shopping',
    cards: [
      { name: 'Amazon Prime Rewards Visa', bank: 'Chase', rate: '5% at Amazon and Whole Foods', why: 'Unbeatable 5% return for Amazon Prime members with no annual card fee.', isBusiness: false, slug: 'amazon-prime-rewards-visa' },
      { name: 'Amex Blue Cash Preferred', bank: 'American Express', rate: '6% on select streaming', why: 'Top streaming cashback covering Netflix, Disney+, Hulu, Spotify, and more.', isBusiness: false, slug: 'amex-blue-cash-preferred' },
      { name: 'Citi Custom Cash', bank: 'Citi', rate: '5% on top category', why: 'Automatically earns 5% on whatever you spend the most on, including online shopping.', isBusiness: false, slug: 'citi-custom-cash' },
    ],
  },
  {
    name: 'Everyday / Everything',
    cards: [
      { name: 'Capital One Venture X', bank: 'Capital One', rate: '2x on everything + lounge', why: 'Best flat-rate premium card — unlimited 2x miles on every purchase with lounge access.', isBusiness: false, slug: 'capital-one-venture-x' },
      { name: 'Citi Double Cash', bank: 'Citi', rate: '2% on everything (1% + 1%)', why: 'Simplest flat-rate cashback card with no annual fee and no category tracking needed.', isBusiness: false, slug: 'citi-double-cash' },
      { name: 'Chase Freedom Unlimited', bank: 'Chase', rate: '1.5% + bonus categories', why: 'Earns 1.5x on everything plus 3% on dining and drugstores — points transfer to Sapphire.', isBusiness: false, slug: 'chase-freedom-unlimited' },
    ],
  },
  {
    name: 'Business Expenses',
    cards: [
      { name: 'Amex Business Gold', bank: 'American Express', rate: '4x on top 2 categories', why: 'Automatically earns 4x on your top 2 spend categories from a list of 6 common business expenses.', isBusiness: true, slug: 'amex-business-gold' },
      { name: 'Chase Ink Business Preferred', bank: 'Chase', rate: '3x on travel, shipping, ads', why: 'Best overall business card — 3x on shipping, advertising, and travel with 100k point bonus.', isBusiness: true, slug: 'chase-ink-business-preferred' },
      { name: 'Capital One Spark Cash Plus', bank: 'Capital One', rate: '2% on everything', why: 'Unlimited 2% flat-rate cashback on all business purchases with no preset spending limit.', isBusiness: true, slug: 'capital-one-spark-cash-plus' },
    ],
  },
];

export default function BestCardsByCategoryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.name === selected);

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
                name: 'Best Credit Cards by Spend Category — 524Tracker',
                url: 'https://524tracker.com/best-cards-by-category',
                applicationCategory: 'FinanceApplication',
                description:
                  'Find the best credit card for any spending category — gas, groceries, dining, travel, hotels, airlines, online shopping, and more.',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                operatingSystem: 'All',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Best Cards by Category', item: 'https://524tracker.com/best-cards-by-category' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Affiliate disclosure */}
        <p className="text-xs text-text-secondary mb-6 bg-brand-light border border-gray-200 rounded-lg px-4 py-3">
          <strong>Affiliate Disclosure:</strong> 524Tracker may earn a commission when you apply for and are approved for a credit card through our affiliate links. This does not affect our editorial recommendations.
        </p>

        <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">
          Best Credit Cards by Spend Category
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Select a spending category to see the top 3 credit cards with the highest rewards rates. Updated March 2026.
        </p>

        {/* Category selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelected(selected === cat.name ? null : cat.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                selected === cat.name
                  ? 'bg-brand-gold text-brand-navy'
                  : 'bg-white border border-gray-200 text-text-primary hover:border-brand-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        {activeCategory ? (
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-brand-navy">
              Top 3 Cards for {activeCategory.name}
            </h2>
            {activeCategory.cards.map((card, i) => (
              <div
                key={card.slug}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold">
                        {i + 1}
                      </span>
                      <h3 className="font-display font-bold text-base text-brand-navy">
                        {card.name}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">{card.bank}</p>
                    <p className="text-sm text-brand-green font-medium mb-2">
                      {card.rate}
                    </p>
                    <p className="text-sm text-text-primary mb-3">{card.why}</p>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        card.isBusiness
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {card.isBusiness
                        ? 'Business — does NOT count toward 5/24'
                        : 'Counts toward 5/24'}
                    </span>
                  </div>
                  <a
                    href={`#apply-${card.slug}`}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    data-affiliate-card={card.name}
                    data-affiliate-bank={card.bank}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm min-h-[44px] whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
            <p className="text-[10px] text-text-secondary text-center mt-2">
              We may earn a commission if you apply and are approved.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
            <p className="text-text-secondary">
              Select a category above to see the top credit cards for that spending type.
            </p>
          </div>
        )}

        <p className="text-xs text-text-secondary mt-8 italic">
          Card rewards rates and terms subject to change. Verify with issuers before applying.
        </p>
      </article>
    </>
  );
}
