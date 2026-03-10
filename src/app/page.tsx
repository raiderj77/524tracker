import TrackerTool from '@/components/TrackerTool';
import Link from 'next/link';

const featuredCards = [
  {
    name: 'Chase Sapphire Preferred',
    bank: 'Chase',
    benefit: 'Top travel rewards card with 3x on dining and 2x on travel worldwide.',
    offer: '60,000 bonus points after $4,000 spend in 3 months',
    countsToward524: true,
    slug: 'chase-sapphire-preferred',
  },
  {
    name: 'Amex Gold',
    bank: 'American Express',
    benefit: 'Best dining rewards card with 4x at restaurants and supermarkets.',
    offer: '60,000 Membership Rewards points after $6,000 spend in 6 months',
    countsToward524: true,
    slug: 'amex-gold',
  },
  {
    name: 'Capital One Venture X',
    bank: 'Capital One',
    benefit: 'Premium travel card with lounge access and $300 travel credit.',
    offer: '75,000 bonus miles after $4,000 spend in 3 months',
    countsToward524: true,
    slug: 'capital-one-venture-x',
  },
  {
    name: 'Chase Ink Business Preferred',
    bank: 'Chase',
    benefit: 'Top business card with 3x on travel, shipping, and advertising.',
    offer: '100,000 bonus points after $8,000 spend in 3 months',
    countsToward524: false,
    slug: 'chase-ink-business-preferred',
  },
  {
    name: 'Citi Strata Premier',
    bank: 'Citi',
    benefit: 'Strong travel card with 3x on travel, dining, and groceries.',
    offer: '75,000 bonus ThankYou Points after $4,000 spend in 3 months',
    countsToward524: true,
    slug: 'citi-strata-premier',
  },
  {
    name: 'Amex Platinum',
    bank: 'American Express',
    benefit: 'Premium card with global lounge access and elite travel benefits.',
    offer: '80,000 Membership Rewards points after $8,000 spend in 6 months',
    countsToward524: true,
    slug: 'amex-platinum',
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: '524Tracker',
                url: 'https://524tracker.com',
                description:
                  'Free credit card application rules tracker covering Chase 5/24, Amex lifetime bonuses, Citi 8/65, and more.',
              },
              {
                '@type': 'WebApplication',
                name: '524Tracker — Credit Card Application Rules Tracker',
                url: 'https://524tracker.com',
                applicationCategory: 'FinanceApplication',
                description:
                  'Track Chase 5/24 status, Amex lifetime bonuses, Citi 8/65, Bank of America 2/3/4, and more bank rules in one place.',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                },
                operatingSystem: 'All',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://524tracker.com',
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight mb-6">
            Know Exactly Which Credit Cards You&apos;re Eligible For
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Track Chase 5/24, Amex lifetime bonuses, Citi 8/65, and 8 more bank
            rules in one place. Free forever.
          </p>
          <a
            href="#tracker"
            className="inline-block px-8 py-3.5 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-amber-400 transition-colors text-lg"
          >
            Start Tracking My Applications
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <span>Used by 10,000+ card enthusiasts</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>All rules updated March 2026</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>No account required</span>
          </div>
        </div>
      </section>

      {/* Tracker Tool */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TrackerTool />
      </div>

      {/* Top Card Recommendations */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs text-text-secondary mb-6 bg-brand-light border border-gray-200 rounded-lg px-4 py-3">
          <strong>Disclosure:</strong> 524Tracker may earn a commission when you
          apply for and are approved for a credit card through our affiliate
          links. This does not affect our editorial recommendations.
        </p>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
          Top Cards to Consider
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCards.map((card) => (
            <div
              key={card.slug}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-sm text-brand-navy">
                  {card.name}
                </h3>
              </div>
              <span
                className={`inline-flex items-center self-start px-2 py-0.5 rounded-full text-[10px] font-medium mb-2 ${
                  card.countsToward524
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {card.countsToward524
                  ? 'Counts toward 5/24'
                  : 'Does NOT count (business)'}
              </span>
              <p className="text-xs text-text-secondary mb-2">{card.bank}</p>
              <p className="text-sm text-text-primary mb-2">{card.benefit}</p>
              <p className="text-xs text-brand-green font-medium mb-4">
                {card.offer}
              </p>
              <div className="mt-auto">
                <a
                  href={`#apply-${card.slug}`}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  data-affiliate-card={card.name}
                  data-affiliate-bank={card.bank}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm min-h-[44px]"
                >
                  Apply Now
                </a>
                <p className="text-[10px] text-text-secondary mt-2 text-center">
                  We may earn a commission if you apply and are approved.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/top-cards"
            className="text-sm text-brand-gold hover:text-amber-600 font-medium transition-colors"
          >
            View all top card recommendations &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
