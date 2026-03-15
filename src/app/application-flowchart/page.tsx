import type { Metadata } from 'next';
import Link from 'next/link';
import ApplicationFlowchart from '@/components/ApplicationFlowchart';

export const metadata: Metadata = {
  title: 'Credit Card Application Flowchart — What Card Should I Get Next?',
  description:
    'Interactive flowchart to find the best credit card for your situation. Based on your 5/24 status, rewards preference, and existing cards. Free, no account required.',
  keywords:
    'credit card flowchart, what card should I get, credit card decision tool, churning flowchart, best credit card for me, card application order',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/application-flowchart' },
  openGraph: {
    title: 'Credit Card Application Flowchart — What Card Should I Get Next?',
    description:
      'Interactive flowchart to find the best credit card for your situation. Based on your 5/24 status, rewards preference, and existing cards.',
    url: 'https://524tracker.com/application-flowchart',
    type: 'website',
  },
};

export default function ApplicationFlowchartPage() {
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
                name: 'Credit Card Application Flowchart',
                description:
                  'Interactive decision flowchart that recommends the best credit card based on your 5/24 status, rewards preference, and existing cards.',
                url: 'https://524tracker.com/application-flowchart',
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
                    name: 'Application Flowchart',
                    item: 'https://524tracker.com/application-flowchart',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Application Flowchart</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Application Flowchart
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Answer a few questions to find out what credit card you should apply for next.
            Based on your 5/24 status, rewards preferences, and existing cards.
          </p>
        </header>

        <ApplicationFlowchart />
      </div>
    </>
  );
}
