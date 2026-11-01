import Link from 'next/link';
import AuthorAttribution from '@/components/AuthorAttribution';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Affiliate Disclosure',
  description:
    'How 524Tracker uses affiliate links, how commissions work, and why offers must be confirmed with the issuer.',
  path: '/affiliate-disclosure',
});

export default function AffiliateDisclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Affiliate Disclosure — 524Tracker',
            description:
              'How 524Tracker uses affiliate links, how commissions work, and why offers must be confirmed with the issuer.',
            url: 'https://524tracker.com/affiliate-disclosure',
          }),
        }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-2 font-display text-3xl font-bold text-brand-navy">
          Affiliate Disclosure
        </h1>
        <p className="mb-8 text-xs text-text-secondary">Last updated November 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-text-primary">
          <section>
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">
              How affiliate links work here
            </h2>
            <p>
              Some links on 524Tracker that point to a card issuer&apos;s website are
              affiliate links. They pass through an affiliate network (for example CJ
              Affiliate or FlexOffers) before reaching the issuer. Pages that carry these
              links show a short affiliate disclosure next to them, and affiliate links
              are tagged so search engines can identify them as sponsored.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">
              How the site earns commissions
            </h2>
            <p>
              If a visitor follows an affiliate link, applies for a card, and is approved,
              the issuer or its affiliate network may pay the site operator a commission.
              The commission comes out of the issuer&apos;s marketing budget. It does not
              add any cost to the applicant, and it does not change the offer the issuer
              shows. Not every outbound link is an affiliate link: links without a network
              relationship go straight to the issuer&apos;s public pages and earn nothing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">
              Commissions do not set the tool output
            </h2>
            <p>
              The tracker and calculators on this site run entirely on dates and values
              the visitor enters. Affiliate relationships never feed into a count, a
              calculation, or a reference date, and no issuer pays to change how the
              tools describe its application patterns. Card lists shown next to the tools
              are informational starting points for a reader&apos;s own research. They are
              not rankings, ratings, or personalized recommendations, and a card&apos;s
              presence in a list does not mean it suits any particular reader.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">
              Why offers must be confirmed with the issuer
            </h2>
            <p>
              524Tracker does not restate card bonuses, annual fees, APRs, or other offer
              terms as its own claims, because those terms change and vary by applicant.
              The issuer&apos;s current offer page is the controlling source. Review it,
              including the pricing and terms document linked from it, before applying.
              A community-observed pattern such as 5/24 is also not an issuer policy and
              cannot predict an application decision.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">
              Questions
            </h2>
            <p>
              Questions about this disclosure or about a specific link can be sent through
              the{' '}
              <Link href="/contact" className="font-semibold underline">
                contact page
              </Link>
              . Corrections to how a relationship is described are welcome and are handled
              under the site&apos;s{' '}
              <Link href="/editorial-policy" className="font-semibold underline">
                editorial and sourcing policy
              </Link>
              .
            </p>
          </section>
        </div>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </article>
    </>
  );
}
