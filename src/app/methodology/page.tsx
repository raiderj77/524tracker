import type { Metadata } from 'next';
import Link from 'next/link';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Database Methodology — How Credit Bureau Pull Data Is Sourced | 524Tracker',
  description:
    'How the 524Tracker credit bureau pull database is built: public community sources, known issuer patterns, and our verification roadmap. Honest about what we have and what we do not.',
  keywords:
    'credit bureau pull methodology, credit pull data sources, doctorofcredit, flyertalk credit pulls, community credit card data',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/methodology' },
  openGraph: {
    title: 'Database Methodology — How Credit Bureau Pull Data Is Sourced',
    description:
      'How the 524Tracker credit bureau pull database is built, its limitations, and how community verification will work.',
    url: 'https://524tracker.com/methodology',
    type: 'article',
  },
};

const datePublished = '2026-04-26';
const dateModified = new Date().toISOString().substring(0, 10);

export default function MethodologyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Database Methodology: How Credit Bureau Pull Data Is Sourced',
    description:
      'How the 524Tracker credit bureau pull database is built: public community sources, known issuer patterns, and our verification roadmap.',
    url: 'https://524tracker.com/methodology',
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: '524Tracker',
      url: 'https://524tracker.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '524Tracker',
      url: 'https://524tracker.com',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
      { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://524tracker.com/methodology' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600">Credit Pull Database</Link>
          <span className="mx-1">/</span>
          <span>Methodology</span>
        </nav>

        <header className="mb-10">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
            Database Methodology
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            How the credit bureau pull database is built, what its limitations are, and how we plan to improve it through community verification.
          </p>
          <p className="text-xs text-text-secondary mt-3">
            Published {datePublished} &middot; Updated {dateModified} &middot; Built by an experienced web professional
          </p>
        </header>

        <article className="space-y-10 prose-guide">

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Why We Built This Database</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The single most frustrating part of optimizing a credit card application strategy is not knowing which bureau a bank will pull. That information determines whether a strategic freeze will work, where your inquiries will concentrate, and how many reports you can keep clean for future applications.
            </p>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The information exists, scattered across forum threads, data point logs, and cardholder agreements. We wanted one place to look it up. So we built this database.
            </p>
            <p className="text-base text-text-primary leading-relaxed">
              The honest caveat: the data we launched with is a starting point. It reflects publicly known patterns, not a proprietary dataset we collected ourselves. That is what this page explains.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">How Data Is Currently Sourced</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The current 29 entries in the database were compiled from three types of public sources:
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Community forums and data point threads</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The credit card hobbyist community has spent years logging which bureau each bank pulled for specific cards and states. The most reliable aggregations live in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-text-primary mb-6 ml-2">
              <li>
                <strong>r/CreditCards</strong> on Reddit, particularly the DataPoints megathread and wiki. Community members report their actual application results including which bureau was pulled and in which state.
              </li>
              <li>
                <strong>FlyerTalk</strong>, specifically the Credit Card Comparison forum. This community skews toward travel rewards and has extensive issuer-specific threads with pull data going back years.
              </li>
              <li>
                <strong>Doctor of Credit (doctorofcredit.com)</strong>, which maintains issuer-specific pages with community-reported data points organized by card and state.
              </li>
            </ul>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Cardholder agreements and issuer disclosures</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Some issuers disclose their credit bureau preferences in application terms or cardholder agreements. These are not always specific to the card product and may not reflect current practice, but they provide a baseline.
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">What this means for accuracy</h3>
            <p className="text-base text-text-primary leading-relaxed">
              The patterns in this database represent what has been most commonly reported. They are not the result of our own application testing, and they have not been independently verified through a structured process. Treat every entry as a starting reference, not a guarantee.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">How Verification Will Work</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              We are building a community submission system. The goal is to move every entry from &ldquo;publicly reported pattern&rdquo; to &ldquo;verified by multiple independent data points.&rdquo;
            </p>

            <p className="text-base text-text-primary leading-relaxed mb-4">
              The verification roadmap works like this:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-base text-text-primary mb-6 ml-2">
              <li>
                <strong>Submission:</strong> A cardholder submits a data point using our{' '}
                <Link href="/submit-data-point" className="text-brand-gold hover:text-amber-600 font-semibold">
                  submission form
                </Link>
                . They report the issuer, card, bureau pulled, state, application date, and source of knowledge.
              </li>
              <li>
                <strong>Review:</strong> Each submission is manually reviewed for completeness and plausibility before being added to the verification queue.
              </li>
              <li>
                <strong>Corroboration threshold:</strong> An entry needs at least three independent matching data points before it moves from &ldquo;reference only&rdquo; to &ldquo;community verified.&rdquo; Independent means different submitters, ideally from different time periods.
              </li>
              <li>
                <strong>Conflict flagging:</strong> If submissions conflict with existing entries (for example, a state that was previously reported as Experian now consistently shows TransUnion), the entry is flagged as disputed pending further data points.
              </li>
              <li>
                <strong>Date-stamping:</strong> Verified entries will carry a &ldquo;last confirmed&rdquo; date so you can see how recently the pattern was corroborated.
              </li>
            </ol>

            <p className="text-base text-text-primary leading-relaxed">
              We have not reached that verification threshold for any entry yet. That is why every row currently shows &ldquo;Reference only.&rdquo; We are being transparent about where we are in the process.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Known Limitations</h2>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">State variance</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Bureau pull behavior varies significantly by state for many issuers. Chase pulls Experian in most states but TransUnion in others. Citi splits between Experian and Equifax depending on your state. The database currently shows the most commonly reported pattern without state-level granularity. This is a limitation we intend to address as more state-specific data points come in.
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Policy changes</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Banks change their bureau preferences without announcement. A pattern that was accurate six months ago may not be accurate today. High-volume issuers like Chase and Citi are particularly prone to regional adjustments. Any data older than six months should be treated with extra skepticism, especially if your application outcome depends on it.
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Soft vs. hard pull confusion</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Community reports sometimes conflate soft pulls and hard pulls. American Express commonly does a soft pull for existing cardholders and a hard pull for new applicants. If a community member reports &ldquo;Amex pulled Experian&rdquo; without specifying whether they were an existing customer, the data point may not apply to your situation. We flag known soft/hard distinctions in the Notes column.
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Product-level variation</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Different cards from the same issuer can pull different bureaus. The database tracks pull patterns at the card level where possible, but some issuers show inconsistency even within a single product. Treat issuer-level generalizations as rough guides only.
            </p>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-2">Credit union and small bank gaps</h3>
            <p className="text-base text-text-primary leading-relaxed">
              The database currently covers 11 major issuers. Credit unions and regional banks are largely absent because community data is sparse. Navy Federal and PenFed are included as the largest credit unions, but hundreds of smaller institutions are not represented.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Why This Matters for Credit Card Applications</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              A hard inquiry typically costs 2 to 5 points on your credit score, and the inquiry remains on your report for two years. For most people applying for one card at a time, this is not a major concern.
            </p>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              For people who apply for multiple cards in a short window, which is a common strategy for earning sign-up bonuses, the bureau question becomes more important. Concentrating all your inquiries on a single bureau means the other two bureaus look completely clean. A bank that pulls only TransUnion will not see the four Experian inquiries you accumulated over the past three months.
            </p>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              A strategic bureau freeze makes this possible. You freeze the bureaus you want to keep clean, apply only with issuers that pull the unfrozen bureau, and unfreeze when you need to apply with a different issuer. Done carefully, this approach can let you apply for more cards with less total visible inquiry load.
            </p>
            <p className="text-base text-text-primary leading-relaxed">
              Getting the freeze strategy wrong means a denial if the bank cannot pull the bureau it wants. That is why accuracy in this database matters, and why we are transparent about the current state of the data.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Public Sources Referenced</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The following publicly available resources informed the initial database entries. These are the best places to check for current, state-specific data points before making application decisions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-text-primary ml-2">
              <li>
                <a
                  href="https://www.reddit.com/r/CreditCards/wiki/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-amber-600"
                >
                  r/CreditCards wiki and DataPoints threads
                </a>{' '}
                - Community-reported application results organized by issuer
              </li>
              <li>
                <a
                  href="https://www.flyertalk.com/forum/credit-card-programs-discussion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-amber-600"
                >
                  FlyerTalk Credit Card Programs forum
                </a>{' '}
                - Issuer-specific threads with data points going back years
              </li>
              <li>
                <a
                  href="https://www.doctorofcredit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-amber-600"
                >
                  Doctor of Credit (doctorofcredit.com)
                </a>{' '}
                - Structured issuer pages with community data points and state breakdowns
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Help Improve This Database</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The most useful thing you can do after reading this page is submit your own data point. If you recently applied for a credit card and checked your credit report, you know exactly which bureau was pulled, which state you applied from, and which card it was for. That is a real data point.
            </p>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Submissions are anonymous. No name or email required. We ask only for the issuer, card, bureau pulled, state, application month and year, and your source of knowledge.
            </p>
            <Link
              href="/submit-data-point"
              className="inline-flex items-center px-5 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
            >
              Submit a data point &rarr;
            </Link>
          </section>

        </article>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
