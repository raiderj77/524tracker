import type { Metadata } from 'next';
import Link from 'next/link';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';
import DataPointSubmissionForm from '@/components/DataPointSubmissionForm';

export const metadata: Metadata = {
  title: 'Submit a Credit Bureau Pull Data Point | 524Tracker',
  description:
    'Help build the most accurate credit bureau pull database. Submit your verified data point: which bureau your bank pulled, which state, and which card.',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/submit-data-point' },
  openGraph: {
    title: 'Submit a Credit Bureau Pull Data Point',
    description:
      'Help build the most accurate credit bureau pull database by submitting your verified application data.',
    url: 'https://524tracker.com/submit-data-point',
    type: 'website',
  },
};

export default function SubmitDataPointPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
      { '@type': 'ListItem', position: 2, name: 'Credit Pull Database', item: 'https://524tracker.com/credit-pull-database' },
      { '@type': 'ListItem', position: 3, name: 'Submit a Data Point', item: 'https://524tracker.com/submit-data-point' },
    ],
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '524Tracker',
    url: 'https://524tracker.com',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600">Credit Pull Database</Link>
          <span className="mx-1">/</span>
          <span>Submit a Data Point</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Submit a Data Point
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Help build a more accurate credit bureau pull database. Submit the bureau your bank pulled when you applied for a credit card. No name or email required.
          </p>
          <p className="text-sm text-text-secondary mt-3">
            Read{' '}
            <Link href="/methodology" className="text-brand-gold hover:text-amber-600">
              our methodology
            </Link>{' '}
            to understand how submissions are reviewed and verified before being added to the database.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last reviewed: April 2026</p>
        </header>

        <div className="mb-8 bg-brand-light border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-brand-navy text-sm mb-2">What makes a good data point?</h2>
          <ul className="space-y-1 text-sm text-text-secondary list-disc list-inside ml-1">
            <li>You applied recently (within the past 12 months)</li>
            <li>You verified the pull by checking your credit report, not by guessing</li>
            <li>You know which state your application was processed in</li>
          </ul>
        </div>

        <DataPointSubmissionForm />

        <div className="mt-10 pt-6 border-t border-gray-100">
          <h2 className="font-display font-semibold text-lg text-brand-navy mb-2">Privacy</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            No name, email, or personal identifying information is collected. Submissions are stored with only the
            data you enter above. IP addresses are used only for rate limiting and are not stored with submissions.
            Submissions are reviewed manually before being added to the database.
          </p>
        </div>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </div>
    </>
  );
}
