import type { Metadata } from 'next';
import Link from 'next/link';
import CardTrackerTool from '@/components/CardTrackerTool';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AnswerBlock from '@/components/AnswerBlock';

export const metadata: Metadata = {
  title: 'Credit Card Rule Tracker | 524Tracker',
  description:
    'Free tool to track your credit card application history and instantly calculate your status across all major issuer rules. No account required.',
  keywords:
    'credit card tracker, chase 5/24 tracker, amex lifetime bonus tracker, citi 8/65, bank of america 2/3/4, capital one card limit, credit card application tracker',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/card-tracker' },
  openGraph: {
    title: 'Credit Card Rule Tracker — All Issuer Rules in One Place',
    description:
      'Free tool to track your credit card application history and instantly calculate your status across all major issuer rules.',
    url: 'https://524tracker.com/card-tracker',
    type: 'website',
  },
};

export default function CardTrackerPage() {
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
                name: 'Credit Card Rule Tracker',
                description:
                  'Track your credit card application history and instantly calculate your status across Chase 5/24, Amex lifetime bonus, Citi 8/65, BofA 2/3/4, and Capital One 2-card rules.',
                url: 'https://524tracker.com/card-tracker',
                applicationCategory: 'FinanceApplication',
                operatingSystem: 'All',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                },
                author: {
                  '@type': 'Organization',
                  name: '524Tracker',
                },
                datePublished: '2026-03-15',
                dateModified: '2026-03-15',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Card Tracker',
                    item: 'https://524tracker.com/card-tracker',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Card Tracker</span>
        </nav>

        <AnswerBlock
          what="A free tool to log your credit card applications and instantly see your status across Chase 5/24, Amex lifetime, Citi 8/65, BofA 2/3/4, and Capital One rules."
          who="Credit card enthusiasts tracking multiple issuer rules to plan their next application without risking a denial."
          bottomLine="Log your cards below to see real-time eligibility across all major issuers — always verify current rules directly with the issuer."
          lastUpdated="2026-03-20"
        />

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy dark:text-slate-100 mb-3">
            My Card Tracker — All Issuer Rules in One Place
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Log your credit card applications below. This tool automatically calculates your status across
            Chase 5/24, Amex lifetime bonus, Citi 8/65, Bank of America 2/3/4, and Capital One&apos;s 2-card limit.
            No account required — all data stays in your browser.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 16, 2026</p>
        </header>

        <CardTrackerTool />

        <div className="mt-8 bg-brand-light border border-gray-200 dark:border-slate-700 rounded-xl p-5">
          <p className="text-sm">
            Tracking your spend toward welcome bonuses?{' '}
            <Link href="/spend-tracker" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use our Spend Tracker &rarr;
            </Link>
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700">
          <h2 className="font-display font-bold text-lg text-brand-navy dark:text-slate-200 mb-3">Learn More About Credit Card Rules</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">
                Complete Bank Rules Guide &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/credit-card-application-strategy" className="text-brand-gold hover:text-amber-600">
                Credit Card Application Strategy &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-calculate-chase-5-24" className="text-brand-gold hover:text-amber-600">
                How to Calculate Your 5/24 Status &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/best-cards-after-5-24" className="text-brand-gold hover:text-amber-600">
                Best Cards After 5/24 &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <FinancialDisclaimer />
      </main>
    </>
  );
}
