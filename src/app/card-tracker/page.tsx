import type { Metadata } from 'next';
import Link from 'next/link';
import CardTrackerTool from '@/components/CardTrackerTool';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';
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
                dateModified: new Date().toISOString().substring(0,10),
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
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is the Chase 5/24 rule?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Community reports describe a pattern involving five or more recently opened personal credit-card accounts in about 24 months. It is not a published approval formula; verify current terms with Chase.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I track my credit card applications?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Record account-opening dates separately from application dates, identify account types, and compare the tracker’s reference results with your records. Only an issuer can determine an application outcome.',
                    },
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
          who="People organizing account history and researching community-reported issuer patterns."
          bottomLine="Log your cards below for reference counts based on your entries — always verify current terms directly with the issuer."
          lastUpdated="2026-03-20"
        />

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            My Card Tracker — All Issuer Rules in One Place
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Log your credit card applications below. This tool automatically calculates your status across
            Chase 5/24, Amex lifetime bonus, Citi 8/65, Bank of America 2/3/4, and Capital One&apos;s 2-card limit.
            No account required — entries are stored in this browser; shared-device access, extensions, and browser backups can expose them.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 16, 2026</p>
        </header>

        <CardTrackerTool />

        <section className="mt-10 mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">How to build an account-opening record</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">An application, a hard inquiry, and a newly opened account are different events. A declined or withdrawn application may leave an inquiry without creating an account. An approved account may have an opening date that differs from the application date. For an account-based reference such as the community-reported Chase 5/24 practice, start with the account-open date in your records rather than substituting the date an inquiry appeared. The <Link href="/chase-524" className="text-brand-gold hover:text-amber-600 font-semibold">5/24 walkthrough</Link> explains that distinction in more detail.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Keep recently opened accounts in your history even after they close. Closing an account does not erase its opening event. Conversely, a replacement physical card is not enough evidence that a new account was opened. For a product change, compare the account history and issuer correspondence before creating another tracker entry. Otherwise, one continuing account can accidentally become two openings in your worksheet.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Business cards are often discussed separately because personal-report visibility can differ by issuer and product. Community discussions commonly distinguish business accounts that appear on personal reports from those that do not. That does not mean a business account is invisible to its own issuer or irrelevant to every application pattern. Check the specific reporting and current issuer terms, and record the account type rather than relying on its marketing name alone.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Authorized-user accounts can appear in personal reports even though the person did not open the underlying account as primary borrower. Community accounts differ on how these entries are handled during an application review. Preserve the role in your records and compare interpretations where the tool permits it. Do not silently treat a spouse’s primary account as your own opening, or assume every authorized-user entry is disregarded.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Interpreting a count near a reported threshold</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">A count near a community-reported threshold deserves an input review before any interpretation. Check for duplicate entries, uncertain opening dates, recent accounts missing from a report, and accounts recorded under a different issuer name. If one disputed entry changes the result, keep both possible counts in your notes. The uncertainty is useful information; a single clean-looking total can hide it.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Different shorthand rules may count applications, openings, or existing accounts over different periods. The <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600 font-semibold">evidence guide</Link> helps separate those concepts. A date shown by the <Link href="/application-timing" className="text-brand-gold hover:text-amber-600 font-semibold">application timing tool</Link> describes its calculation method, not a promised issuer processing date. Being below a reported threshold does not establish an application outcome.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What this tracker cannot determine</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The tracker cannot inspect credit reports, verify an offer, or reproduce underwriting. Income, existing obligations, account history with the issuer, identity checks, and product-specific terms sit outside a date log. A result also depends on the completeness of your entries. Missing an account does not make it absent from an issuer’s review, and a community pattern may change without the tracker knowing.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">velocity reference route</Link> concerns a different question from the <Link href="/inquiry-tracker" className="text-brand-gold hover:text-amber-600 font-semibold">inquiry tracker</Link>: application frequency and credit-report access are not interchangeable with account openings. Some reference routes redirect to the evidence guide while their underlying claims are under review. Treat a redirect as a limitation of available evidence, rather than confirmation of an older numerical rule.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Keeping your records accurate</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Reconcile entries when a new statement or credit report becomes available. Keep the source and review date in your own records, distinguish confirmed dates from estimates, and resolve discrepancies with the issuer or reporting bureau. Retain enough history to understand closed accounts and earlier offers; the current reference window is not a reason to delete everything older. Store supporting documents securely outside this worksheet without adding account numbers or credentials here.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Frequently asked questions</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary"><strong>What is the Chase 5/24 rule?</strong> Community reports describe a pattern involving five or more recently opened personal credit-card accounts in about 24 months. It is not a published approval formula; verify current terms with Chase.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary"><strong>How do I track my credit card applications?</strong> Record account-opening dates separately from application dates, identify account types, and compare the tracker’s reference results with your records. Only an issuer can determine an application outcome.</p>
        </section>


        <div className="mt-8 bg-brand-light border border-gray-200 rounded-xl p-5">
          <p className="text-sm">
            Tracking your spend toward welcome bonuses?{' '}
            <Link href="/spend-tracker" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use our Spend Tracker &rarr;
            </Link>
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-3">Learn More About Credit Card Rules</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">
                Complete Bank Rules Guide &rarr;
              </Link>
            </li>
            <li>
              <Link href="/application-timing" className="text-brand-gold hover:text-amber-600">
                Application Timing Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/chase-524" className="text-brand-gold hover:text-amber-600">
                Chase 5/24 Guide &rarr;
              </Link>
            </li>
            <li>
              <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">
                Complete Bank Rules Guide &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </main>
    </>
  );
}
