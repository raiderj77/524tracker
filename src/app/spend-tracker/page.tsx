import type { Metadata } from 'next';
import Link from 'next/link';
import SpendTrackerTool from '@/components/SpendTrackerTool';

export const metadata: Metadata = {
  title: 'Welcome Bonus Spend Tracker — Track Minimum Spend Requirements Free',
  description:
    'Free tool to track credit card welcome bonus minimum spend requirements. See progress, days remaining, and daily spend needed across all your cards. No account required.',
  keywords:
    'welcome bonus spend tracker, minimum spend tracker, credit card spend tracker, welcome bonus deadline, minimum spend calculator, bonus spend progress',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/spend-tracker' },
  openGraph: {
    title: 'Welcome Bonus Spend Tracker — Track Minimum Spend Free',
    description:
      'Free tool to track credit card welcome bonus minimum spend requirements. See progress, days remaining, and daily spend needed across all your cards.',
    url: 'https://524tracker.com/spend-tracker',
    type: 'website',
  },
};

export default function SpendTrackerPage() {
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
                name: 'Welcome Bonus Spend Tracker',
                description:
                  'Track credit card welcome bonus minimum spend requirements. See progress bars, days remaining, and daily spend needed across all your active cards.',
                url: 'https://524tracker.com/spend-tracker',
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
                    name: 'Spend Tracker',
                    item: 'https://524tracker.com/spend-tracker',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Spend Tracker</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Welcome Bonus Spend Tracker
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Track minimum spend requirements across all your credit cards simultaneously.
            See progress bars, days remaining, and daily spend needed to hit every bonus deadline.
            No account required — all data stays in your browser.
          </p>
        </header>

        <SpendTrackerTool />
      </div>
    </>
  );
}
