import Link from 'next/link';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'About Jason Ramirez',
  description:
    'Meet Jason Ramirez, the independent publisher and developer of 524Tracker, and review the site’s scope, qualifications, and editorial safeguards.',
  path: '/about',
});

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jason Ramirez',
    jobTitle: 'Independent publisher and web developer',
    url: 'https://524tracker.com/about',
    description:
      'Independent web developer and publisher of 524Tracker. Jason is not a financial adviser, credit counselor, lender, or issuer representative.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy">
            About the publisher
          </h1>
          <p className="text-base leading-relaxed text-text-primary">
            524Tracker is independently published and maintained by Jason Ramirez, a self-taught
            web developer who builds practical browser-based tools.
          </p>
          <p className="mt-3 text-xs text-text-secondary">Reviewed: August 2, 2026</p>
        </header>

        <div className="space-y-10">
          <section aria-labelledby="publisher-role">
            <h2 id="publisher-role" className="mb-3 font-display text-2xl font-bold text-brand-navy">
              Publisher role and qualifications
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-text-primary">
              <p>
                Jason designs, codes, tests, and edits this site. His relevant qualification for
                this project is software development and maintaining a transparent calculation
                method. He has personal experience rebuilding credit, but personal experience is
                not a professional finance credential.
              </p>
              <p>
                Jason also holds a CADC-II counseling credential. That credential is public for
                identity transparency, but it is unrelated to credit-card underwriting or
                financial advice and is not presented as authority for this site&apos;s financial
                information.
              </p>
              <p>
                Jason is not a financial adviser, credit counselor, lender, attorney, tax
                professional, or representative of Chase or another card issuer.
              </p>
            </div>
          </section>

          <section aria-labelledby="site-scope">
            <h2 id="site-scope" className="mb-3 font-display text-2xl font-bold text-brand-navy">
              What 524Tracker does
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-text-primary">
              <p>
                The primary tool organizes dates a visitor enters and shows a calendar-based
                24-month reference count. The phrase “5/24” describes a community-observed Chase
                application practice. Chase does not publish it as a guaranteed approval policy.
              </p>
              <p>
                The site cannot determine eligibility, predict approval, interpret a credit
                report, or tell a visitor whether to open, close, keep, or change an account.
                Issuers make their own decisions under current terms and applicable law.
              </p>
            </div>
          </section>

          <section aria-labelledby="safeguards">
            <h2 id="safeguards" className="mb-3 font-display text-2xl font-bold text-brand-navy">
              Editorial safeguards
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-text-primary">
              <li>Official issuer and regulator sources are preferred for factual claims.</li>
              <li>Community observations are labeled and never presented as guaranteed policy.</li>
              <li>Pages show a review date and material corrections are welcomed.</li>
              <li>Recommendation and affiliate-card pages are not currently published.</li>
            </ul>
            <p className="mt-5 text-sm text-text-primary">
              Read the complete{' '}
              <Link href="/editorial-policy" className="font-semibold text-brand-gold underline underline-offset-2">
                editorial and sourcing policy
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="font-semibold text-brand-gold underline underline-offset-2">
                submit a correction
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
