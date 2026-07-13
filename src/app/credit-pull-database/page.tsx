import type { Metadata } from 'next';
import Link from 'next/link';
import CreditPullClient from '@/components/CreditPullClient';
import AnswerBlock from '@/components/AnswerBlock';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';

export const metadata: Metadata = {
  title: 'Credit Bureau Pull Database — Community Reference for Credit Card Applications | 524Tracker',
  description:
    'A starting reference for which credit bureau each major bank pulls. Compiled from public sources. Help us build the most accurate database by submitting verified data points.',
  keywords:
    'credit bureau pull, which bureau does chase pull, credit pull database, experian equifax transunion, credit card hard pull, bureau freeze strategy',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/credit-pull-database' },
  openGraph: {
    title: 'Credit Bureau Pull Database — Community Reference for Credit Card Applications',
    description:
      'A starting reference for which credit bureau each major bank pulls. Compiled from public sources. Help us build the most accurate database.',
    url: 'https://524tracker.com/credit-pull-database',
    type: 'website',
  },
};

const pullFaqs = [
  {
    question: 'Where does this data come from?',
    answer:
      'This database is compiled from publicly known issuer patterns reported on community forums (r/CreditCards, FlyerTalk, doctorofcredit.com) and from cardholder agreements. We are building a community-verified database. The current entries are starting references and have not yet been independently verified through our submission process.',
  },
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
                  'A starting reference for which credit bureau each major bank pulls for credit card applications. Community-sourced patterns from public forums and cardholder agreements.',
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
                dateModified: new Date().toISOString().substring(0, 10),
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
            Credit Bureau Pull Database
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            A starting reference for which bureau each major bank pulls when you apply for a credit card.
            Patterns compiled from public community sources. Read the{' '}
            <Link href="/methodology" className="text-brand-gold hover:text-amber-600 font-semibold">
              sourcing and verification methodology
            </Link>{' '}
            before relying on an entry.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link href="/methodology" className="text-xs text-brand-gold hover:text-amber-600 underline underline-offset-2">
              How this data is sourced
            </Link>
            <Link href="/credit-pull-database/analysis" className="text-xs text-brand-gold hover:text-amber-600 underline underline-offset-2">
              Database analysis and patterns
            </Link>
          </div>
        </header>

        <AnswerBlock
          what="A searchable reference database showing which credit bureau (Experian, Equifax, or TransUnion) each bank typically pulls for credit card applications. Data compiled from public community forums and cardholder agreements."
          who="Applicants who want to strategically freeze bureaus or concentrate hard inquiries on a single report."
          bottomLine="These are starting references, not verified data points. Bureau pulls vary by state and change over time. Verify with your bank before freezing."
          lastUpdated="2026-04-26"
        />

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
              most commonly reported patterns from community forums, but your experience may differ based on
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
              colored badges indicating which bureau each card typically pulls based on publicly reported patterns.
              Cards that pull all three bureaus are highlighted with a warning background since freezing will not
              help reduce inquiries for those applications. All entries are marked as reference-only until
              independently verified through community submissions.
            </p>
          </section>
        </article>

        {/* Prominent data quality banner */}
        <div className="mt-8 mb-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
          <p className="text-sm font-semibold text-amber-900 mb-2">Starting reference - not yet community-verified</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            This is a starting reference compiled from publicly known patterns. Bank pull behavior changes
            frequently and varies by state. Verify current behavior with the bank before relying on this data.
            The site is not currently accepting community submissions; see the{' '}
            <Link href="/methodology" className="font-semibold underline underline-offset-2 hover:text-amber-900">
              methodology and source limitations
            </Link>{' '}
            for safer ways to verify a pull pattern.
          </p>
        </div>

        <CreditPullClient />

        {/* Link to analysis */}
        <div className="mt-6 mb-4 bg-brand-light border border-gray-200 rounded-xl p-5">
          <p className="text-sm font-semibold text-brand-navy mb-1">See what the data shows</p>
          <p className="text-sm text-text-secondary mb-3">
            Bureau distribution by issuer, freeze strategy recommendations, and patterns across all 29 cards in this reference set.
          </p>
          <Link href="/credit-pull-database/analysis" className="text-sm text-brand-gold hover:text-amber-600 font-semibold">
            View database analysis &rarr;
          </Link>
        </div>

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

        <AuthorAttribution />
        <FinancialDisclaimer />
      </div>
    </>
  );
}
