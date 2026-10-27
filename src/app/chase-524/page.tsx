import Link from 'next/link';
import AuthorAttribution from '@/components/AuthorAttribution';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Unofficial Chase 5/24 Practice',
  description:
    'A cautious explanation of the community-observed Chase 5/24 practice, what a 24-month reference count can show, and what only Chase can decide.',
  path: '/chase-524',
  type: 'article',
});

const faqs = [
  {
    question: 'What does “5/24” mean?',
    answer:
      'It is community shorthand for an observed pattern: applicants with five or more recently opened personal credit-card accounts within roughly 24 months are often reported as having lower odds for some Chase cards. Chase does not publicly guarantee this formula.',
  },
  {
    question: 'Do authorized-user accounts count?',
    answer:
      'Authorized-user accounts can appear on a personal credit report, but 524Tracker cannot know how Chase will treat a specific account. The tracker lets you include or exclude them so you can compare both reference counts.',
  },
  {
    question: 'Do business cards count?',
    answer:
      'Reporting varies by issuer and product. Instead of assuming that every business card is excluded, check whether the account appears on your personal credit reports and mark that fact in the tracker.',
  },
  {
    question: 'When does an account leave the reference window?',
    answer:
      '524Tracker shows a calendar-based reference date 24 months after the account-open date you enter. That is an organizing aid, not a statement about Chase’s exact internal calculation or the day an application will be approved.',
  },
  { question: "Does closing a recently opened card remove its opening?", answer: "Closing an account does not change when it was opened. Keep a recently opened closed account in your reference history while its opening falls within the window you are examining. The account\u2019s current balance or closure date answers a different question from its opening date." },
  { question: "Why might my reports produce different reference counts?", answer: "Reports can differ in account coverage, update timing, ownership labels, or date details. A new account might appear on one report before another. Record the source and retrieval date, reconcile differences with issuer records, and preserve unresolved entries instead of assuming the smallest count is authoritative." },
  { question: "Does an inquiry date establish the account-open date?", answer: "No. An inquiry records report access, while an opening records an account relationship. An application can leave an inquiry without an account. Use the account section and issuer records to establish opening history, and keep inquiry dates separately when reviewing application activity." },
];

export default function Chase524Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'What Is Chase 5/24? An Unofficial Practice Explained',
        description:
          'A source-conscious explanation of the community-observed Chase 5/24 practice and its limitations.',
        datePublished: '2026-03-16',
        dateModified: '2026-08-02',
        author: { '@type': 'Person', name: 'Jason Ramirez', url: 'https://524tracker.com/about' },
        publisher: { '@id': 'https://524tracker.com/#org' },
        mainEntityOfPage: 'https://524tracker.com/chase-524',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mb-2 text-xs text-text-secondary">Reviewed August 2, 2026</p>
      <h1 className="mb-5 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        What is Chase 5/24?
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-text-primary">
        “5/24” is an unofficial label used by credit-card communities for a reported Chase
        application pattern. It is useful as a planning reference, but it is not a published Chase
        promise, a complete underwriting model, or a guarantee that an application will be approved
        or denied.
      </p>

      <section className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950">
        <h2 className="mb-2 font-display text-xl font-bold">Bottom line</h2>
        <p className="text-sm leading-relaxed">
          Use a 24-month count to organize your dates, not to declare yourself eligible. Review your
          credit reports for the account dates actually reported, check the current product&apos;s terms,
          and remember that only Chase can make an application decision.
        </p>
      </section>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What the shorthand describes</h2>
          <p className="text-sm leading-relaxed text-text-primary">
            Community reports commonly describe a threshold involving five or more recently opened
            personal revolving accounts across issuers within about 24 months. That summary has
            exceptions, ambiguous account types, and no public Chase formula behind it. For that
            reason, 524Tracker uses neutral labels such as “reference count” and “reported threshold.”
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            As current secondary reporting, NerdWallet&apos;s article reviewed July 16, 2026 describes
            the same broad community shorthand and notes that Chase does not currently publish it.
            This source documents the reported convention; it is not issuer terms or proof of how
            Chase will evaluate a particular application.{' '}
            <a
              href="https://www.nerdwallet.com/travel/learn/chase-5-24-rule-explained"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Read the secondary-source explanation
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">How to check the dates you control</h2>
          <ol className="list-decimal space-y-3 pl-6 text-sm leading-relaxed text-text-primary">
            <li>
              Request your reports through{' '}
              <a href="https://www.annualcreditreport.com/" rel="noopener noreferrer" className="font-semibold underline">
                AnnualCreditReport.com
              </a>
              , the service identified by the FTC for free reports.
            </li>
            <li>Review the account-open date shown for each revolving account, including closed accounts.</li>
            <li>Notice authorized-user accounts and whether any business account appears on a personal report.</li>
            <li>Enter the dates into the tracker and compare the count with and without ambiguous accounts.</li>
            <li>Read the current issuer terms before submitting an application.</li>
          </ol>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Why the tool cannot predict approval</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">
            Chase itself explains that even a preapproval is not a final approval guarantee. The
            CFPB also explains that a lender may review credit history, income, debt, and other
            application information. A date count cannot reproduce that review.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.chase.com/personal/credit-cards/education/basics/what-does-pre-approved-mean-for-a-credit-card"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Chase: What does pre-approved mean for a credit card?
              </a>
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/ask-cfpb/what-information-is-a-card-issuer-not-allowed-to-base-decisions-on-when-i-apply-for-credit-en-19/"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                CFPB: credit-card application decisions
              </a>
            </li>
            <li>
              <a
                href="https://www.chase.com/personal/credit-cards/cardmember-agreement"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Chase: current sample cardmember agreements
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">A closer walkthrough: build a report-based reference count</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">First, choose the date you are examining and record when each report was retrieved. A count is a snapshot, so comparing reports collected at different times can create apparent discrepancies. Keep the report copies securely in your own records. There is no need to enter report files, account numbers, or identifying documents into the tracker.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Second, work through the account section rather than the inquiry list. Create one row per credit-card account and note the issuer, opening date, ownership role, and whether it is open or closed. Distinguish revolving credit cards from installment loans and other report entries. If an unfamiliar creditor name appears, reconcile it with your own account documents before treating it as another card.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Third, check whether two entries describe the same underlying account across reports. Seeing an account at multiple bureaus is not multiple openings. Likewise, an older card with a new physical replacement should not become a new entry simply because a card arrived recently. For product changes, compare the reported history and issuer correspondence before deciding how to label the record.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Fourth, identify the openings within your 24-month reference window. Include recently opened accounts that have since closed, and flag authorized-user entries and business accounts separately. Where only a month is available or two sources disagree, write down that uncertainty. Avoid supplying an invented exact day merely to get a precise-looking result.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Finally, enter the reconciled history in the <Link href="/card-tracker" className="font-semibold underline">card tracker</Link> and compare the output with your manual list. If the totals differ, inspect account types, duplicates, and date assumptions before interpreting the threshold. The <Link href="/rules-guide" className="font-semibold underline">evidence guide</Link> explains why this reference exercise remains separate from current issuer terms and underwriting.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Borderline counts and differences between reports</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Consider a hypothetical history with four clearly documented recent personal openings and one authorized-user entry whose treatment is uncertain. Writing “four confirmed, one ambiguous” preserves more useful information than picking a definitive total without explanation. Similarly, an account near the edge of the window may move the arithmetic when an opening-date estimate is corrected. The calculation becomes more informative when its assumptions are visible.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Bureaus may receive updates at different times, and report formats may expose different levels of date detail. A recently opened account missing from one report can still exist in your issuer records. Do not treat the least populated report as a complete record of your history. Compare sources and seek correction of inaccurate reporting through the appropriate issuer or bureau process.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The <Link href="/credit-pull-database" className="font-semibold underline">credit-pull reference route</Link> addresses a separate issue from account counting and currently redirects to the methodology page. A community report about a bureau used for another application does not establish which report Chase will consult for yours. Keep your opening history complete across reports rather than constructing it around an assumed bureau.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The <Link href="/application-timing" className="font-semibold underline">application timing reference</Link> can help explain calendar calculations, but a date crossing does not resolve an ambiguous account or establish an issuer decision. Before drawing conclusions from a borderline count, revisit the current offer terms and the documents behind each entry. The useful outcome is a clearer record of known facts and open questions.</p>
        </section>

        <section>
          <h2 className="mb-5 font-display text-2xl font-bold text-brand-navy">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section key={faq.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-text-primary">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link href="/#tracker" className="inline-flex min-h-11 items-center rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy">
          Open the date tracker
        </Link>
      </div>
      <AuthorAttribution />
      <FinancialDisclaimer />
    </article>
  );
}
