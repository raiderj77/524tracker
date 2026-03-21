import type { Metadata } from 'next';
import TrackerTool from '@/components/TrackerTool';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AnswerBlock from '@/components/AnswerBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chase 5/24 Tracker & Credit Card Rules | 524Tracker',
  description:
    'Track Chase 5/24 status, Amex lifetime bonuses, Citi 8/65, and 8 more bank rules free. Know exactly which credit cards you can apply for today.',
  keywords:
    'chase 5/24 tracker, chase 5/24 calculator, credit card application tracker, amex lifetime rule, citi 8/65, churning rules, bank of america 2/3/4',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com' },
  openGraph: {
    title: 'Chase 5/24 Tracker & Credit Card Rules | 524Tracker',
    description:
      'Track Chase 5/24 status, Amex lifetime bonuses, Citi 8/65, and 8 more bank rules free.',
    url: 'https://524tracker.com',
    type: 'website',
  },
};

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
            <span>Free &middot; No account required</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>All rules updated March 2026</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>No account required</span>
          </div>
        </div>
      </section>

      {/* Answer Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <AnswerBlock
          what="A free tracker for credit card application rules including Chase 5/24, Amex lifetime bonuses, Citi 8/65, and BofA 2/3/4 restrictions."
          who="Credit card rewards enthusiasts who want to maximize sign-up bonuses without accidentally violating bank application restrictions."
          bottomLine="Enter your recent card applications to see which cards you are currently eligible for — always verify current rules directly with the issuer."
          lastUpdated="2026-03-20"
        />
      </div>

      {/* Featured Tools */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/card-tracker"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-brand-gold/40 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold font-display font-bold text-lg shrink-0">
              5
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Card Tracker
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                All 5 issuer rules calculated from your application history
              </p>
            </div>
          </Link>
          <Link
            href="/velocity-checker"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-brand-gold/40 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold font-display font-bold text-lg shrink-0">
              V
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Velocity Checker
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Check eligibility across all 9 issuer velocity rules
              </p>
            </div>
          </Link>
          <Link
            href="/spend-tracker"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-brand-gold/40 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold font-display font-bold text-lg shrink-0">
              %
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Spend Tracker
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Track welcome bonus minimum spend across all your cards
              </p>
            </div>
          </Link>
          <Link
            href="/annual-fee-calculator"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-brand-gold/40 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold font-display font-bold text-lg shrink-0">
              $
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Annual Fee Calculator
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Is your card&apos;s annual fee worth it?
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <Link
            href="/application-timing"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              T
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Application Timing
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Optimal dates and sequence for your card wishlist
              </p>
            </div>
          </Link>
          <Link
            href="/amex-popup-estimator"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              A
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Amex Popup Estimator
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Estimate your Amex popup jail risk
              </p>
            </div>
          </Link>
          <Link
            href="/downgrade-guide"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              D
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Downgrade Guide
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Product change paths for premium cards
              </p>
            </div>
          </Link>
          <Link
            href="/credit-pull-database"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              B
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Credit Pull Database
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Which bureau does each bank pull?
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <Link
            href="/inquiry-tracker"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              H
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Inquiry Tracker
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Monitor hard inquiries per credit bureau
              </p>
            </div>
          </Link>
          <Link
            href="/card-value-calculator"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              C
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Card Value Calculator
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Calculate the real dollar value of any card&apos;s rewards
              </p>
            </div>
          </Link>
          <Link
            href="/application-flowchart"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              &rarr;
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Flowchart
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Find out what card to apply for next
              </p>
            </div>
          </Link>
          <Link
            href="/rules-guide"
            className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-gold shadow-sm transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 text-brand-navy dark:text-slate-200 font-display font-bold text-lg shrink-0">
              ?
            </span>
            <div>
              <span className="font-display font-bold text-sm text-brand-navy dark:text-slate-100 group-hover:text-brand-gold transition-colors">
                Rules Guide
              </span>
              <p className="text-xs text-text-secondary mt-0.5">
                Every bank rule explained with examples and tips
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Tracker Tool */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-xs text-text-secondary mb-4">Last updated: March 16, 2026</p>
        <TrackerTool />
      </div>

      {/* Top Card Recommendations */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs text-text-secondary mb-6 bg-brand-light border border-gray-200 dark:border-slate-700 rounded-lg px-4 py-3">
          <strong>Disclosure:</strong> 524Tracker may earn a commission when you
          apply for and are approved for a credit card through our affiliate
          links. This does not affect our editorial recommendations.
        </p>
        <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-slate-100 mb-6">
          Top Credit Cards to Consider in 2026
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCards.map((card) => (
            <div
              key={card.slug}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-sm text-brand-navy dark:text-slate-100">
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

      <FinancialDisclaimer />
    </>
  );
}
