import type { Metadata } from 'next';
import Link from 'next/link';
import CreditPullClient from '@/components/CreditPullClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Bureau Pull Database — Which Bureau Each Bank Pulls | 524Tracker',
  description:
    'Find which credit bureau each bank pulls for every major credit card. Covers Chase, Amex, Citi, Capital One, and more. Filter by issuer or bureau instantly.',
  keywords:
    'credit bureau pull, which bureau does chase pull, credit pull database, experian equifax transunion, credit card hard pull, bureau freeze strategy',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/credit-pull-database' },
  openGraph: {
    title: 'Credit Bureau Pull Database — Which Bureau Each Bank Pulls',
    description:
      'Find which credit bureau each bank pulls for every major credit card. Filter by issuer or bureau. Free tool from 524Tracker.',
    url: 'https://524tracker.com/credit-pull-database',
    type: 'website',
  },
};

const pullFaqs = [
  {
    question: 'Why does it matter which credit bureau a bank pulls?',
    answer:
      'Knowing which bureau a bank pulls lets you strategically freeze bureaus to control hard inquiries. If you freeze Equifax and TransUnion, banks that only pull Experian can still process your application while the others cannot, concentrating inquiries on one report.',
  },
  {
    question: 'Can I freeze a credit bureau to avoid a hard pull?',
    answer:
      'Yes, you can freeze any bureau for free at each bureau\'s website. However Capital One pulls all three bureaus so freezing won\'t help there. Some banks will deny your application if they can\'t pull from their preferred bureau rather than trying another.',
  },
  {
    question: 'Do credit bureau pulls vary by state?',
    answer:
      'Yes, many banks pull different bureaus depending on your state. Chase primarily pulls Experian but may pull TransUnion in some states. Citi varies between Experian and Equifax. Check community data points for your specific state before freezing bureaus.',
  },
];

export default function CreditPullDatabasePage() {
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
                name: 'Credit Bureau Pull Database',
                description:
                  'Look up which credit bureau each bank pulls for every major credit card. Filter by issuer or bureau to plan your application strategy.',
                url: 'https://524tracker.com/credit-pull-database',
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
                datePublished: '2026-03-19',
                dateModified: '2026-03-19',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Credit Pull Database',
                    item: 'https://524tracker.com/credit-pull-database',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: pullFaqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Credit Pull Database</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Bureau Pull Database &mdash; Which Bureau Does Each Bank Pull?
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Look up which credit bureau each bank pulls when you apply for a credit card.
            Use this data to plan bureau freezes, minimize hard inquiries, and optimize your
            application strategy across Chase, Amex, Citi, Capital One, and more.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Understanding Credit Bureau Pulls
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              When you apply for a credit card, the issuing bank checks your credit report by pulling data from
              one or more of the three major credit bureaus: Experian, Equifax, and TransUnion. This is called a
              hard inquiry, and it temporarily lowers your credit score by a few points. Each hard inquiry stays
              on your credit report for two years, though its impact on your score diminishes after a few months.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              A soft pull, by contrast, does not affect your credit score. Some banks perform soft pulls for
              pre-qualification offers or when you are already a customer. American Express, for example, often
              does a soft pull for existing cardholders applying for a new card, only performing a hard pull for
              new-to-Amex applicants. Understanding the difference helps you predict the credit impact of each
              application.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Most banks have a preferred bureau they pull from for the majority of applicants, but the specific
              bureau can vary by state, by product, and even by the time of year. The database below reflects the
              most commonly reported pulls from community data points, but your experience may differ based on
              your location and relationship with the bank.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Strategic Bureau Freezes
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              One of the most effective ways to manage hard inquiries is to strategically freeze credit bureaus.
              You can freeze and unfreeze any bureau for free at any time through each bureau&apos;s website. If
              you know that Chase pulls Experian in your state, you can freeze Equifax and TransUnion before
              applying. This ensures the hard inquiry only appears on your Experian report, keeping the other
              two reports clean for future applications with banks that pull those bureaus.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This strategy does not work with every bank. Capital One is known to pull all three bureaus for
              every application, so freezing any bureau will either result in a denial or simply delay processing.
              Some banks will deny your application outright if their preferred bureau is frozen rather than
              attempting to pull from an alternative. Always research your specific bank and state combination
              before relying on a freeze strategy.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Pull Database
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Use the filters below to narrow results by issuer, bureau, or card name. The bureau column shows
              colored badges indicating which bureau each card typically pulls. Cards that pull all three bureaus
              are highlighted with a warning background since freezing will not help reduce inquiries for those
              applications. Check the notes column for state-specific variations and other important details.
            </p>
          </section>
        </article>

        <div className="mt-8 mb-8 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-amber-900">
            <strong>Note:</strong> Bureau pull data is community-sourced and may vary by region and change over
            time. Always verify before freezing a bureau.
          </p>
        </div>

        <CreditPullClient />

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Credit Bureau Pulls
            </h2>
            <div className="space-y-6">
              {pullFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-base text-text-primary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-8 bg-brand-light border border-gray-200 rounded-xl p-5">
          <p className="text-sm">
            Want to check your velocity rule eligibility?{' '}
            <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use the Velocity Checker &rarr;
            </Link>
          </p>
        </div>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
