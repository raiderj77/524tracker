import Link from 'next/link';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Calculation Methodology',
  description:
    'See exactly how 524Tracker handles dates, account types, authorized-user entries, uncertainty, sources, and privacy.',
  path: '/methodology',
  type: 'article',
});

const reviewed = '2026-08-02';

export default function MethodologyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '524Tracker calculation methodology',
    description: 'How the unofficial 5/24 date tracker calculates a reference count and communicates uncertainty.',
    url: 'https://524tracker.com/methodology',
    datePublished: '2026-04-26',
    dateModified: reviewed,
    author: { '@type': 'Person', name: 'Jason Ramirez', url: 'https://524tracker.com/about' },
    publisher: { '@type': 'Organization', name: '524Tracker', url: 'https://524tracker.com' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy">
            Calculation methodology
          </h1>
          <p className="text-base leading-relaxed text-text-primary">
            524Tracker performs date arithmetic on information a visitor enters. It does not
            access credit reports, issuer systems, underwriting models, or approval data.
          </p>
          <p className="mt-3 text-xs text-text-secondary">Reviewed: August 2, 2026</p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What the count means</h2>
            <p className="text-sm leading-relaxed text-text-primary">
              The count is a personal reference: the number of approved entries whose selected
              account-open date falls after the date 24 calendar months before today and no later
              than today. It is not an issuer-calculated count and does not represent eligibility.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Date handling</h2>
            <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-text-primary">
              <li>The account-open date is used when supplied; otherwise the application date is a fallback.</li>
              <li>Dates are parsed as local calendar dates to avoid UTC day shifts.</li>
              <li>The reference date is the entered date shifted forward by 24 calendar months.</li>
              <li>End-of-month dates are clamped to the last valid day of the target month.</li>
              <li>Issuer reporting and internal treatment may use a different date or boundary.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Account-type controls</h2>
            <p className="mb-4 text-sm leading-relaxed text-text-primary">
              The tracker does not assume that every business or authorized-user account receives
              the same treatment.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-text-primary">
              <li>A business entry counts only when the visitor marks that it appears on a personal credit report.</li>
              <li>An authorized-user entry can be included or excluded with the visible toggle.</li>
              <li>Only entries marked approved are included in the reference count.</li>
              <li>Visitors should compare entries with all relevant consumer credit reports.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Known limitations</h2>
            <p className="text-sm leading-relaxed text-text-primary">
              Chase does not publish “5/24” as a guaranteed policy. Product coverage, exceptions,
              account reporting, authorized-user treatment, date boundaries, preapproval results,
              and underwriting can vary. A below-threshold display is not an approval signal; an
              at-or-above-threshold display is not a denial prediction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Privacy and exports</h2>
            <p className="text-sm leading-relaxed text-text-primary">
              Tracker entries are designed to remain in this browser&apos;s local storage during
              ordinary use. Printing, copying, sharing, exporting, browser synchronization,
              extensions, device backups, and clearing storage are controlled outside the site and
              can move, retain, or erase information. Do not enter account numbers or other secrets.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Sources and corrections</h2>
            <p className="text-sm leading-relaxed text-text-primary">
              The site prefers current issuer and regulator sources for factual claims. Community
              observations are labeled as such. See the{' '}
              <Link href="/editorial-policy" className="font-semibold text-brand-gold underline underline-offset-2">
                editorial policy
              </Link>{' '}
              for the evidence hierarchy and the{' '}
              <Link href="/contact" className="font-semibold text-brand-gold underline underline-offset-2">
                contact page
              </Link>{' '}
              for corrections.
            </p>
          </section>
        </div>

        <FinancialDisclaimer />
      </article>
    </>
  );
}
