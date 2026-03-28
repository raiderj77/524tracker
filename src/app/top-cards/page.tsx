import type { Metadata } from 'next';
import Link from 'next/link';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AnswerBlock from '@/components/AnswerBlock';

export const metadata: Metadata = {
  title: 'Best Credit Cards to Apply For in 2026',
  description:
    'Best credit cards for points maximizers in 2026. Top welcome bonuses and travel rewards ranked by value with 5/24 impact.',
  keywords:
    'best credit cards 2026, best travel credit cards, best welcome bonus, credit card churning, chase sapphire preferred, amex platinum',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/top-cards' },
  openGraph: {
    title: 'Best Credit Cards to Apply For in 2026',
    description:
      'Best credit cards for points maximizers in 2026 — optimized for welcome bonuses and bank rule compatibility.',
    url: 'https://524tracker.com/top-cards',
    type: 'article',
  },
};

const cards = [
  { name: 'Chase Sapphire Preferred', bank: 'Chase', offer: '60,000 UR points', impact: 'Counts', fee: '$95', bestFor: 'Travel beginners', slug: 'chase-sapphire-preferred', url: 'https://creditcards.chase.com/travel-credit-cards/sapphire/preferred' },
  { name: 'Chase Sapphire Reserve', bank: 'Chase', offer: '60,000 UR points', impact: 'Counts', fee: '$550', bestFor: 'Frequent travelers', slug: 'chase-sapphire-reserve', url: 'https://creditcards.chase.com/travel-credit-cards/sapphire/reserve' },
  { name: 'Chase Ink Business Preferred', bank: 'Chase', offer: '100,000 UR points', impact: 'Does NOT count', fee: '$95', bestFor: 'Business owners under 5/24', slug: 'chase-ink-business-preferred', url: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred' },
  { name: 'Chase Freedom Flex', bank: 'Chase', offer: '$200 bonus', impact: 'Counts', fee: '$0', bestFor: 'Rotating categories', slug: 'chase-freedom-flex', url: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/flex' },
  { name: 'Chase United Explorer', bank: 'Chase', offer: '60,000 miles', impact: 'Counts', fee: '$95', bestFor: 'United Airlines flyers', slug: 'chase-united-explorer', url: 'https://creditcards.chase.com/travel-credit-cards/united/explorer' },
  { name: 'Chase World of Hyatt', bank: 'Chase', offer: '60,000 points', impact: 'Counts', fee: '$95', bestFor: 'Hotel loyalty', slug: 'chase-world-of-hyatt', url: 'https://creditcards.chase.com/travel-credit-cards/world-of-hyatt' },
  { name: 'Amex Platinum', bank: 'Amex', offer: '80,000 MR points', impact: 'Counts', fee: '$695', bestFor: 'Premium travel perks', slug: 'amex-platinum', url: 'https://www.americanexpress.com/us/credit-cards/card/platinum/' },
  { name: 'Amex Gold', bank: 'Amex', offer: '60,000 MR points', impact: 'Counts', fee: '$250', bestFor: 'Dining & groceries', slug: 'amex-gold', url: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/' },
  { name: 'Amex Blue Cash Preferred', bank: 'Amex', offer: '$350 bonus', impact: 'Counts', fee: '$95', bestFor: 'Grocery spending', slug: 'amex-blue-cash-preferred', url: 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/' },
  { name: 'Amex Business Platinum', bank: 'Amex', offer: '120,000 MR points', impact: 'Does NOT count', fee: '$695', bestFor: 'Business travel', slug: 'amex-business-platinum', url: 'https://www.americanexpress.com/us/credit-cards/business/business-charge-cards/american-express-business-platinum-card-amex/' },
  { name: 'Amex Hilton Aspire', bank: 'Amex', offer: '175,000 Hilton points', impact: 'Counts', fee: '$450', bestFor: 'Hilton Diamond status', slug: 'amex-hilton-aspire', url: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/' },
  { name: 'Capital One Venture X', bank: 'Capital One', offer: '75,000 miles', impact: 'Counts', fee: '$395', bestFor: 'Lounge access + value', slug: 'capital-one-venture-x', url: 'https://www.capitalone.com/credit-cards/venture-x/' },
  { name: 'Capital One Venture', bank: 'Capital One', offer: '75,000 miles', impact: 'Counts', fee: '$95', bestFor: 'Simple travel rewards', slug: 'capital-one-venture', url: 'https://www.capitalone.com/credit-cards/venture/' },
  { name: 'Citi Strata Premier', bank: 'Citi', offer: '75,000 TY points', impact: 'Counts', fee: '$95', bestFor: 'Flexible travel', slug: 'citi-strata-premier', url: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card' },
  { name: 'Citi Double Cash', bank: 'Citi', offer: '$200 bonus', impact: 'Counts', fee: '$0', bestFor: 'Flat-rate cashback', slug: 'citi-double-cash', url: 'https://www.citi.com/credit-cards/citi-double-cash-credit-card' },
];

export default function TopCardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'SoftwareApplication',
                name: '524Tracker',
                applicationCategory: 'FinanceApplication',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              },
              {
                '@type': 'ItemList',
                name: 'Best Credit Cards for Points Maximizers 2026',
                numberOfItems: cards.length,
                itemListElement: cards.map((card, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: card.name,
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Top Cards', item: 'https://524tracker.com/top-cards' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Affiliate disclosure above fold */}
        <p className="text-xs text-text-secondary mb-6 bg-brand-light border border-gray-200 rounded-lg px-4 py-3">
          <strong>Affiliate Disclosure:</strong> 524Tracker may earn a commission when you apply for and are approved for a credit card through our affiliate links. This does not affect our editorial recommendations.
        </p>

        <AnswerBlock
          what="A curated comparison of the best credit cards for points maximizers in 2026, ranked by welcome bonus value and 5/24 impact."
          who="Rewards-focused applicants looking for the highest-value welcome bonuses while managing bank application rules."
          bottomLine="Compare top cards by issuer and plan your application order around 5/24 and other velocity rules — always verify current offers directly with the issuer."
          lastUpdated="2026-03-20"
        />

        <p className="text-xs text-text-secondary mb-2">Last updated: March 16, 2026</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-6">
          Best Credit Cards for Points Maximizers in 2026
        </h1>

        <p className="text-base text-text-primary mb-8 leading-relaxed">
          These cards offer the strongest welcome bonuses and ongoing rewards for credit card enthusiasts. We&apos;ve organized them by issuer so you can plan your application strategy around bank-specific rules like Chase 5/24, Amex&apos;s lifetime bonus restriction, and Citi 8/65.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-brand-navy text-white text-left">
                <th className="px-3 py-2.5 font-medium">Card</th>
                <th className="px-3 py-2.5 font-medium">Bank</th>
                <th className="px-3 py-2.5 font-medium">Welcome Offer</th>
                <th className="px-3 py-2.5 font-medium">5/24 Impact</th>
                <th className="px-3 py-2.5 font-medium">Annual Fee</th>
                <th className="px-3 py-2.5 font-medium">Best For</th>
                <th className="px-3 py-2.5 font-medium">Apply</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card.slug} className="border-t border-gray-100 hover:bg-brand-light/50">
                  <td className="px-3 py-2.5 font-medium">{card.name}</td>
                  <td className="px-3 py-2.5 text-text-secondary">{card.bank}</td>
                  <td className="px-3 py-2.5 text-brand-green font-medium">{card.offer}</td>
                  <td className="px-3 py-2.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      card.impact === 'Counts' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {card.impact}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 tabular-nums">{card.fee}</td>
                  <td className="px-3 py-2.5 text-text-secondary">{card.bestFor}</td>
                  <td className="px-3 py-2.5">
                    <a
                      href={card.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      data-affiliate-card={card.name}
                      data-affiliate-bank={card.bank}
                      className="inline-flex items-center justify-center px-3 py-1.5 bg-brand-gold text-brand-navy font-semibold rounded text-xs hover:bg-amber-400 transition-colors min-h-[44px]"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chase section */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Why Chase Cards Should Come First</h2>
          <p className="text-sm text-text-primary mb-4 leading-relaxed">
            Chase cards should be your first priority if you&apos;re under 5/24. The Sapphire Preferred and Reserve are the foundation of most travel rewards strategies, while Ink Business cards let you earn valuable Ultimate Rewards points without counting toward 5/24. Chase Ultimate Rewards points are worth approximately 2 cents each when transferred to partners like Hyatt.
          </p>
          <p className="text-sm text-text-secondary">
            <Link href="/rules-guide#chase-524" className="text-brand-gold hover:text-amber-600">Learn more about Chase 5/24 &rarr;</Link>
          </p>
        </section>

        {/* Amex section */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">How American Express Cards Compare</h2>
          <p className="text-sm text-text-primary mb-4 leading-relaxed">
            Amex cards offer some of the highest welcome bonuses in the industry, but remember the lifetime rule — you only get one shot at each card&apos;s bonus. Prioritize cards with the largest bonuses first. The Platinum and Gold cards are charge cards and don&apos;t count toward the 4-card credit limit. Amex Membership Rewards points are worth approximately 1.5–2 cents each.
          </p>
          <p className="text-sm text-text-secondary">
            <Link href="/rules-guide#amex-lifetime" className="text-brand-gold hover:text-amber-600">Learn more about Amex rules &rarr;</Link>
          </p>
        </section>

        {/* Capital One section */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">How Capital One Cards Compare</h2>
          <p className="text-sm text-text-primary mb-4 leading-relaxed">
            The Venture X offers premium lounge access and a $300 travel credit that effectively reduces its $395 annual fee to $95. Capital One limits you to 2 personal cards and generally 1 new approval per 6 months. Capital One miles are worth 1 cent each and transfer to a growing list of airline and hotel partners.
          </p>
          <p className="text-sm text-text-secondary">
            <Link href="/rules-guide#capital-one" className="text-brand-gold hover:text-amber-600">Learn more about Capital One rules &rarr;</Link>
          </p>
        </section>

        {/* Citi section */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">How Citi Cards Compare</h2>
          <p className="text-sm text-text-primary mb-4 leading-relaxed">
            The Strata Premier is Citi&apos;s best travel card with 3x points on travel, dining, and groceries. Citi ThankYou points are worth approximately 1.5 cents each when transferred to partners. Remember the 8/65 rule: wait 8 days between applications and limit to 2 per 65 days. Citi&apos;s 24-month bonus restriction is more forgiving than Amex&apos;s lifetime rule.
          </p>
          <p className="text-sm text-text-secondary">
            <Link href="/rules-guide#citi-865" className="text-brand-gold hover:text-amber-600">Learn more about Citi rules &rarr;</Link>
          </p>
        </section>

        <div className="text-center mt-8">
          <Link href="/#tracker" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
            Track Your Applications Free &rarr;
          </Link>
        </div>

        <FinancialDisclaimer />
      </article>
    </>
  );
}
