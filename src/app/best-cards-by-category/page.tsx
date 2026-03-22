'use client';

import { useState } from 'react';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AnswerBlock from '@/components/AnswerBlock';

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
        <AnswerBlock
          what="An interactive tool to find the best credit card for any spending category — gas, groceries, dining, travel, hotels, airlines, and more."
          who="Anyone looking to maximize credit card rewards by matching the right card to their highest spending categories."
          bottomLine="Select a category to see the top 3 cards ranked by rewards rate — always verify current offers and terms directly with the issuer."
          lastUpdated="2026-03-20"
        />

        {/* Affiliate disclosure */}
        <p className="text-xs text-text-secondary mb-6 bg-brand-light border border-gray-200 rounded-lg px-4 py-3">
          <strong>Affiliate Disclosure:</strong> 524Tracker may earn a commission when you apply for and are approved for a credit card through our affiliate links. This does not affect our editorial recommendations.
        </p>

        <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">
          Best Credit Cards by Spend Category
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Select a spending category to see the top 3 credit cards with the highest rewards rates. Last updated: March 16, 2026.
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

        {/* Informational content */}
        <section className="mt-12 space-y-8">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Are Credit Cards Categorized?</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              Credit cards earn rewards at different rates depending on where you spend. Most issuers assign merchant category codes (MCCs) to each transaction, and cards offer bonus multipliers for specific MCCs. For example, a grocery card earns elevated rewards at supermarkets because those merchants are classified under grocery MCCs. Understanding these categories helps you pick the right card for each type of spending.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              We organize cards into nine spending categories: gas and fuel, groceries, dining and restaurants, general travel, hotels, airlines, online shopping, everyday spending, and business expenses. Each category includes the top three cards ranked by rewards rate, annual fee value, and overall utility. Some cards appear in multiple categories because they excel in more than one area.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Makes a Card the Best for a Category?</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              We evaluate cards on three primary factors. <strong>Rewards rate</strong> is the most important — a card earning 5% cashback on gas is objectively better than one earning 2% for that specific category. <strong>Welcome bonus</strong> matters for the first year because a large sign-up bonus can offset an annual fee or provide exceptional one-time value. <strong>Annual fee</strong> affects the long-term equation — a high rewards rate means less if the annual fee eats into your earnings.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              Beyond these three factors, we also consider spending caps (some cards limit bonus rewards to a certain dollar amount per quarter or year), additional perks like purchase protection and extended warranty, and whether the card counts toward Chase 5/24 since that affects your ability to open other cards. A card that earns 6% on groceries but caps at $6,000 per year in bonus spending may be less valuable to a large family than one earning 4% with no cap.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How to Evaluate Cards for Your Spending</h2>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              Start by reviewing your last three months of credit card or bank statements to identify where your money actually goes. Most people overestimate dining spending and underestimate grocery spending. Once you know your top two or three categories by dollar volume, focus on maximizing rewards in those areas first.
            </p>
            <p className="text-sm text-text-primary leading-relaxed mb-3">
              For example, if you spend $800 per month on groceries, $400 on dining, and $200 on gas, a card earning 4x on groceries generates $384 in annual rewards value on groceries alone (at 1 cent per point). That same card at 1x on gas only generates $24 from gas spending. The category where you spend the most deserves the card with the highest multiplier.
            </p>
            <p className="text-sm text-text-primary leading-relaxed">
              Consider whether you prefer simplicity or optimization. A single 2% cashback card on everything earns a respectable return with zero effort. A multi-card strategy using category specialists can earn 3% to 5% effective cashback but requires carrying and remembering to use the right card for each purchase. According to industry data, the average American household spends roughly $6,000 per month across all categories, meaning the difference between a 1.5% flat card and a 3% average optimized setup is approximately $1,080 per year.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Tips for Choosing the Right Card</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-text-primary leading-relaxed">
              <li><strong>Check your 5/24 count first.</strong> If you are under Chase 5/24, prioritize Chase cards before opening cards from other issuers. Use the <a href="/" className="text-brand-gold hover:text-amber-600">524Tracker</a> to see your current count.</li>
              <li><strong>Watch for spending caps.</strong> Cards advertising high bonus rates often cap the bonus spending at a certain threshold. Make sure your actual spending in that category falls within the cap to get the full benefit.</li>
              <li><strong>Factor in the annual fee.</strong> A $95 annual fee on a card earning 4x at restaurants only makes sense if you spend at least $2,375 per year dining out (assuming 1 cent per point). Below that threshold, a no-fee 3% dining card may deliver better net value.</li>
              <li><strong>Consider the rewards ecosystem.</strong> Cards earning transferable points (Chase Ultimate Rewards, Amex Membership Rewards, Capital One Miles) offer more flexibility than cards locked into cashback or a single airline program.</li>
              <li><strong>Read the fine print on category definitions.</strong> Not all groceries count as groceries — warehouse clubs like Costco and Sam&apos;s Club, and superstores like Walmart and Target, often code differently and may not earn grocery bonus rates.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">How often are these recommendations updated?</h3>
                <p className="text-sm text-text-primary leading-relaxed">We review card recommendations monthly and update whenever a card changes its rewards structure, annual fee, or welcome bonus. The last update date is shown at the top of the page. Card issuers may change terms at any time, so always verify current offers directly with the issuer before applying.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">Do business cards count toward Chase 5/24?</h3>
                <p className="text-sm text-text-primary leading-relaxed">Most business cards from Chase, Amex, Capital One, and other issuers do not count toward your 5/24 count when approved. However, opening a Chase business card still requires you to be under 5/24 at the time of application. Business cards are flagged in our recommendations so you can plan your application strategy accordingly.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">Should I get multiple cards in the same category?</h3>
                <p className="text-sm text-text-primary leading-relaxed">It depends on spending caps. If your top grocery card caps bonus rewards at $6,000 per year and you spend $12,000 on groceries annually, a second grocery card for the overflow spending can make sense. Otherwise, it is usually better to diversify across categories to maximize total rewards from all your spending.</p>
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-navy mb-1">What if I do not see my preferred category listed?</h3>
                <p className="text-sm text-text-primary leading-relaxed">Our categories cover the most common spending types. For niche categories like transit, home improvement, or recurring bills, the best approach is often a flat-rate 2% card or a rotating 5% category card that periodically covers your area of spending. Check the Everyday category for the best all-purpose options.</p>
              </div>
            </div>
          </div>
        </section>

        <FinancialDisclaimer />
      </article>
    </>
  );
}
