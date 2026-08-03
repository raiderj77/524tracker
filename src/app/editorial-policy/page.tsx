import Link from 'next/link';
import AuthorAttribution from '@/components/AuthorAttribution';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Editorial and Sourcing Policy',
  description:
    'How 524Tracker labels official issuer terms, regulator guidance, community observations, corrections, commercial links, and review dates.',
  path: '/editorial-policy',
  type: 'article',
});

const evidenceLevels = [
  {
    name: 'Official issuer term',
    use: 'A claim appears on a current issuer-owned page or in the terms for the specific offer or product.',
    limit: 'Terms can be personalized, product-specific, and changed without notice.',
  },
  {
    name: 'Regulator or government guidance',
    use: 'General credit-report, inquiry, consumer-rights, or disclosure guidance from a government source.',
    limit: 'It does not reveal an issuer’s private underwriting criteria.',
  },
  {
    name: 'Community observation',
    use: 'A pattern reported by applicants or rewards communities, such as the shorthand “5/24.”',
    limit: 'It is not an official policy, a complete dataset, or an approval guarantee.',
  },
];

export default function EditorialPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="mb-2 text-xs text-text-secondary">Last reviewed: August 2, 2026</p>
      <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        Editorial & sourcing policy
      </h1>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-text-primary">
        Credit-card information can affect a person&apos;s finances and credit history. 524Tracker
        therefore separates published facts from community observations and from calculations
        based on a visitor&apos;s own inputs.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-navy">Evidence labels</h2>
        <div
          className="overflow-x-auto rounded-xl border border-gray-200 bg-white"
          role="region"
          aria-label="Evidence levels table"
          tabIndex={0}
        >
          <table className="min-w-[44rem] w-full text-left text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-4 py-3">Evidence level</th>
                <th className="px-4 py-3">What it supports</th>
                <th className="px-4 py-3">Important limit</th>
              </tr>
            </thead>
            <tbody>
              {evidenceLevels.map((level) => (
                <tr key={level.name} className="border-t border-gray-200 align-top">
                  <th className="px-4 py-3 font-semibold text-brand-navy">{level.name}</th>
                  <td className="px-4 py-3 leading-relaxed">{level.use}</td>
                  <td className="px-4 py-3 leading-relaxed">{level.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-brand-navy">Rules for financial content</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-text-primary">
          <li>Issuer-specific terms are linked to the issuer whenever a public primary source exists.</li>
          <li>Numerical community shorthand is labeled unofficial and never presented as certain eligibility.</li>
          <li>Approval, credit-score, savings, and welcome-offer outcomes are never guaranteed.</li>
          <li>Calculators explain which numbers came from the visitor and which assumptions they apply.</li>
          <li>Pages with unverified or materially stale card recommendations are removed from navigation and search.</li>
          <li>Material reviews use a visible date; a build date is not presented as an editorial review date.</li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-brand-navy">Current 5/24 position</h2>
        <p className="text-sm leading-relaxed text-text-primary">
          524Tracker treats “5/24” as a community-observed Chase application practice. In the public
          Chase application, education, and cardmember-agreement pages we reviewed, Chase does not
          define a policy using that name. The tracker therefore calls its output a reference count,
          not an eligibility result.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.chase.com/personal/credit-cards/cardmember-agreement"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            Chase cardmember agreements
          </a>
          <a
            href="https://www.chase.com/personal/credit-cards/education/basics/what-does-pre-approved-mean-for-a-credit-card"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            Chase preapproval guidance
          </a>
        </div>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-brand-navy">Commercial independence</h2>
        <p className="text-sm leading-relaxed text-text-primary">
          524Tracker currently links directly to official or public informational sources and does
          not present credit-card affiliate application buttons on maintained pages. If compensated
          links are introduced later, each will be clearly labeled and the relationship will be
          disclosed before the link. Advertising code remains disabled unless explicit account and
          consent-readiness gates are enabled.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Corrections</h2>
        <p className="text-sm leading-relaxed text-text-primary">
          If a source, calculation, or label is wrong, send the URL, the disputed statement, and a
          current primary source through the <Link href="/contact" className="font-semibold underline">contact page</Link>.
          Corrections are reviewed before publication; no fixed response or publication time is promised.
        </p>
      </section>

      <AuthorAttribution />
    </article>
  );
}
