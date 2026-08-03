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
