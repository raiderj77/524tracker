import Link from 'next/link';
import AuthorAttribution from '@/components/AuthorAttribution';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Credit-Card Application Evidence Guide',
  description:
    'Learn which credit-card eligibility information comes from official product terms, government guidance, or unofficial community observations.',
  path: '/rules-guide',
  type: 'article',
});

const rows = [
  {
    topic: 'Chase “5/24”',
    evidence: 'Community observation',
    safeUse: 'Use only as an approximate account-date reference.',
    limitation: 'Not defined as a public Chase policy; never an approval decision.',
  },
  {
    topic: 'Welcome-offer eligibility',
    evidence: 'Product- and offer-specific issuer terms',
    safeUse: 'Read the exact offer terms shown to you before applying.',
    limitation: 'Terms and personalized offers vary; a generic site summary can become stale.',
  },
  {
    topic: 'Hard and soft inquiries',
    evidence: 'CFPB and issuer guidance',
    safeUse: 'Understand when a credit check may affect a score.',
    limitation: 'The score impact differs by file and scoring model.',
  },
  {
    topic: 'Issuer “velocity” shorthand',
    evidence: 'Mostly community observation',
    safeUse: 'Use as a research prompt, then check current issuer terms.',
    limitation: 'Numerical shorthand is not treated by 524Tracker as certain eligibility.',
  },
];

export default function RulesGuidePage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="mb-2 text-xs text-text-secondary">Reviewed August 2, 2026</p>
      <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        Credit-card application evidence guide
      </h1>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-text-primary">
        Many popular “bank rules” are shorthand created by applicants, not terms published by an
        issuer. This guide shows how to separate official terms from useful but uncertain community
        observations before making a financial decision.
      </p>

      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-navy">Evidence at a glance</h2>
        <p className="mb-3 text-xs text-text-secondary sm:hidden">Swipe horizontally to review all columns.</p>
        <div
          className="overflow-x-auto rounded-xl border border-gray-200 bg-white"
          role="region"
          aria-label="Credit-card application evidence table"
          tabIndex={0}
        >
          <table className="min-w-[52rem] w-full text-left text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-4 py-3">Topic</th>
                <th className="px-4 py-3">Best evidence available</th>
                <th className="px-4 py-3">Reasonable use</th>
                <th className="px-4 py-3">Do not infer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic} className="border-t border-gray-200 align-top">
                  <th className="px-4 py-3 font-semibold text-brand-navy">{row.topic}</th>
                  <td className="px-4 py-3">{row.evidence}</td>
                  <td className="px-4 py-3">{row.safeUse}</td>
                  <td className="px-4 py-3">{row.limitation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-secondary">Step 1</p>
          <h2 className="mb-2 font-display text-lg font-bold text-brand-navy">Open the exact offer</h2>
          <p className="text-sm leading-relaxed">
            Start at the issuer&apos;s official product page. Review pricing, fees, eligibility language,
            and the offer shown to you instead of relying on an old screenshot or article.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-secondary">Step 2</p>
          <h2 className="mb-2 font-display text-lg font-bold text-brand-navy">Check your own reports</h2>
          <p className="text-sm leading-relaxed">
            Use the authorized free-report service to verify account-open dates and how accounts are
            actually reported. Do not assume every business or authorized-user account is treated alike.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-secondary">Step 3</p>
          <h2 className="mb-2 font-display text-lg font-bold text-brand-navy">Treat patterns as uncertain</h2>
          <p className="text-sm leading-relaxed">
            Community data can reveal a pattern, but it cannot reproduce an issuer&apos;s underwriting or
            account-specific offer eligibility. Keep the language conditional.
          </p>
        </div>
      </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Chase: account openings and the 5/24 shorthand</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Community reports describe 5/24 as counting recent personal credit-card openings across issuers, rather than only Chase applications or inquiries. A recently closed account can still represent an opening within the reference window. Replacement cards and product changes deserve a closer look before being logged as separate accounts; a new card number alone does not establish a new opening.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Authorized-user entries and business accounts are common sources of disagreement in community discussions. Check the role, opening date, and personal-report visibility on each report, then compare those entries with issuer statements. Keep ambiguous accounts identified separately. This is a way to document a reference count, not to verify an unpublished Chase formula. Confirm current product and offer terms directly with Chase.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">American Express: prior offers and application messages</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The community phrase “once per lifetime” concerns reported welcome-offer restrictions tied to prior card history; it should not be confused with a universal account-opening limit. Exact offer language may address a particular product, related products, or other conditions. Community reports also describe an application message, often called a popup, indicating that a welcome offer may not be available on the displayed terms.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">A previous product change, a prior bonus, or a differently worded offer can complicate comparisons between applicants. Do not infer a reliable reset period or popup prediction from those anecdotes. Review the actual offer and any message presented by American Express, and compare them with saved offer disclosures and account statements. Statements can help establish your history, but they cannot substitute for current issuer terms or explain every application message.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Citi: distinguish application spacing from bonus conditions</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Community discussions commonly use “8/65” for a reported spacing pattern of one application in eight days and two in 65 days. It is an application-frequency shorthand, not a count of all personal accounts opened across banks. Reports may differ about product coverage, business applications, and which date starts a window. Those uncertainties make it unsuitable as a guaranteed processing schedule.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Keep application confirmations and decision correspondence alongside opening dates; a credit report alone may not reconstruct every submitted application. Check current Citi terms for the specific product and welcome offer, including any prior-account or bonus restrictions. A separate bonus waiting period should not be treated as another name for application spacing. Where your records are incomplete, mark the gap instead of inventing a date to make the calculation work.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Bank of America: the reported 2/3/4 pattern</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The community label “2/3/4” generally describes reports of two Bank of America card openings in two months, three in 12 months, and four in 24 months. These are reported issuer-specific windows, unlike a cross-issuer personal-account reference. Discussions can differ about business products, existing banking relationships, and how simultaneous requests are treated. None of those anecdotes establishes an exception for a particular reader.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Reconcile opening dates with Bank of America correspondence and statements, and compare the reported tradelines with your personal reports. Keep applications that did not create accounts in a separate list. Read current issuer terms rather than assuming that a count below every reported window settles the application or welcome-offer question.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Capital One: product scope matters</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Community discussions of Capital One include reported cardholding limits and application-spacing patterns, but a broad “two-card limit” label can hide differences between product categories. Reports about co-branded cards, business products, or older accounts should not be combined into a single universal cap. An existing-account count is also a different measure from recent application frequency.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Inventory the actual products and their current account status using issuer statements, then compare personal-report entries without assuming every product reports identically. Review current Capital One application and offer disclosures for the product in question. A community account of approval with several existing cards does not establish that all products share its treatment, just as one refusal does not prove a universal numerical limit.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">How to use this guide with the tracker</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Begin with the <Link href="/card-tracker" className="font-semibold underline">card tracker</Link> to organize dates and account types, then use the <Link href="/chase-524" className="font-semibold underline">5/24 walkthrough</Link> for a personal-report reference count. Keep applications, inquiries, openings, and prior bonuses distinct. That separation makes it easier to see which evidence a question actually requires.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The <Link href="/velocity-checker" className="font-semibold underline">velocity reference route</Link> and <Link href="/application-flowchart" className="font-semibold underline">application flowchart route</Link> lead to this evidence guide and the value calculator, respectively. Those destinations do not validate an older timing prediction. Use your records to identify uncertainties, then verify current terms with the issuer; the guide cannot resolve an unpublished underwriting decision.</p>
        </section>

      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-navy">Primary sources</h2>
        <ul className="space-y-4 text-sm leading-relaxed">
          <li>
            <a href="https://www.chase.com/personal/credit-cards/cardmember-agreement" rel="noopener noreferrer" className="font-semibold underline">
              Chase sample cardmember agreements
            </a>{' '}
            — general terms and a reminder to review the pricing and terms for the particular offer.
          </li>
          <li>
            <a href="https://www.chase.com/personal/credit-cards/education/basics/what-does-pre-approved-mean-for-a-credit-card" rel="noopener noreferrer" className="font-semibold underline">
              Chase preapproval guidance
            </a>{' '}
            — explains that preapproval is not a final approval guarantee.
          </li>
          <li>
            <a href="https://www.americanexpress.com/us/customer-service/faq.card-application-criteria-qualifications.html" rel="noopener noreferrer" className="font-semibold underline">
              American Express application qualifications
            </a>{' '}
            — states that the outcome depends on application and credit-bureau information and is known only after processing.
          </li>
          <li>
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-inquiry-en-1317/" rel="noopener noreferrer" className="font-semibold underline">
              CFPB credit-inquiry guidance
            </a>{' '}
            — distinguishes hard inquiries from requests for your own reports.
          </li>
          <li>
            <a href="https://consumer.ftc.gov/consumer-alerts/2023/10/you-now-have-permanent-access-free-weekly-credit-reports" rel="noopener noreferrer" className="font-semibold underline">
              FTC free weekly credit-report guidance
            </a>{' '}
            — identifies AnnualCreditReport.com and warns that other sites may charge or be fraudulent.
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-blue-950">
        <h2 className="mb-3 font-display text-xl font-bold">Why some old tools now redirect here</h2>
        <p className="text-sm leading-relaxed">
          Previous pages predicted issuer “velocity,” popup risk, downgrade paths, credit-bureau
          pulls, and specific card recommendations from unverified or time-sensitive data. They were
          removed from navigation and search until each claim can be supported and maintained. The
          browser-local date, spend, and user-input value tools remain available.
        </p>
      </section>

      <p className="mt-8 text-sm">
        For the complete review standard, see the{' '}
        <Link href="/editorial-policy" className="font-semibold underline">editorial and sourcing policy</Link>.
      </p>
      <AuthorAttribution />
      <FinancialDisclaimer />
    </article>
  );
}
