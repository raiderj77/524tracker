import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chase 5/24 Rule: Complete Guide (2026)',
  description:
    "Chase 5/24 rejects applications if you've opened 5+ cards in 24 months. Learn what counts, what doesn't, and how to check your status free.",
  keywords:
    'chase 5/24 rule, chase 5/24 explained, what counts toward 5/24, chase 5/24 2026',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/blog/chase-5-24-rule-explained' },
  openGraph: {
    title: 'Chase 5/24 Rule: Complete Guide (2026)',
    description:
      "Chase 5/24 rejects applications if you've opened 5+ cards in 24 months. Learn what counts, what doesn't, and how to check your status free.",
    url: 'https://524tracker.com/blog/chase-5-24-rule-explained',
    type: 'article',
  },
  authors: [{ name: 'Built by an experienced web developer' }],
};

export default function Chase524BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Chase 5/24 Rule: Complete Guide (2026)',
                description:
                  "Chase 5/24 rejects applications if you've opened 5+ cards in 24 months. Learn what counts, what doesn't, and how to check your status free.",
                datePublished: '2026-03-09',
                dateModified: '2026-03-09',
                author: {
                  '@type': 'Person',
                  name: 'Built by an experienced web developer',
                },
                publisher: {
                  '@type': 'Organization',
                  name: '524Tracker',
                },
                url: 'https://524tracker.com/blog/chase-5-24-rule-explained',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Does a hard inquiry count toward 5/24?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Hard inquiries do not count toward 5/24. Only new account openings that were actually approved count toward the threshold.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does closing a card remove it from my 5/24 count?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Closing a card does not remove it from your 5/24 count. The account was still opened within the 24-month window. Only time removes it.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does 5/24 apply to Chase business cards?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. The 5/24 rule does not apply when applying for Chase business cards like the Ink Business Preferred, Cash, or Unlimited.',
                    },
                  },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
                  { '@type': 'ListItem', position: 3, name: 'Chase 5/24 Rule Explained', item: 'https://524tracker.com/blog/chase-5-24-rule-explained' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/blog" className="text-brand-gold hover:text-amber-600">Blog</Link>
          <span className="mx-1">/</span>
          <span>Chase 5/24 Rule Explained</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Chase 5/24 Rule: Complete Guide (2026)
          </h1>
          <p className="text-xs text-text-secondary">
            Last updated: March 9, 2026 &middot; By an experienced web developer
          </p>
        </header>

        <div className="prose-sm text-text-primary leading-relaxed space-y-6">
          <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
            The Chase 5/24 rule automatically rejects your credit card application if you have opened 5 or more new credit card accounts across any bank in the past 24 months. It is Chase&apos;s most important application restriction — and the first rule every card enthusiast needs to understand before applying. Unlike most bank velocity rules, 5/24 counts cards from all issuers, not just Chase.
          </p>

          {/* What Is */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is">
              What Is the Chase 5/24 Rule?
            </h2>
            <p className="text-sm mb-3">
              Chase denies applications from anyone who has opened 5 or more new credit card accounts in the past 24 months, regardless of which bank issued those cards. The rule applies to virtually all Chase personal credit cards, including the Sapphire Preferred, Sapphire Reserve, Freedom Flex, Freedom Unlimited, and most co-branded cards.
            </p>
            <p className="text-sm mb-3">
              Chase has never officially published this policy. It was identified and named by the credit card community after thousands of data points collected on forums like r/churning. The &ldquo;5/24&rdquo; name refers to the threshold: 5 new accounts within a 24-month rolling window.
            </p>
            <p className="text-sm">
              The rule exists because Chase wants to avoid approving cardholders who are actively accumulating cards primarily for welcome bonuses rather than long-term use.
            </p>
          </section>

          {/* What counts */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-counts">
              Which Cards Count Toward Chase 5/24?
            </h2>
            <p className="text-sm mb-4">
              Most personal credit cards opened at any bank count toward your 5/24 number. Business credit cards from most major issuers do not appear on your personal credit report and therefore do not count. This distinction is the foundation of most advanced churning strategies.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-brand-light">
                    <th className="text-left px-4 py-2 font-medium">Card Type</th>
                    <th className="text-left px-4 py-2 font-medium">Counts Toward 5/24?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Personal credit cards (any bank)</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Store/retail cards opened at checkout</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Authorized user cards on your report</td><td className="px-4 py-2 text-brand-red font-medium">Yes (can be disputed)</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex charge cards (Green, Gold, Platinum)</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Chase Ink business cards</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex business cards</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Citi business cards</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Capital One Spark business cards</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2">Bank of America business cards</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              The core strategy most experienced churners use is to apply for business cards first — earning those welcome bonuses without adding to their 5/24 count — before eventually cycling through Chase personal cards.
            </p>
          </section>

          {/* What doesn't count */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-doesnt-count">
              Which Cards Do NOT Count Toward 5/24?
            </h2>
            <p className="text-sm mb-3">
              Business credit cards from the following issuers are reported to business credit bureaus only and do not appear on your personal credit report:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
              <li><strong>Chase</strong>: Ink Business Preferred, Ink Business Cash, Ink Business Unlimited</li>
              <li><strong>American Express</strong>: Business Gold, Business Platinum, Blue Business Plus, Business Green</li>
              <li><strong>Citi</strong>: All business cards</li>
              <li><strong>Capital One</strong>: Spark Cash Plus, Spark Miles</li>
              <li><strong>Bank of America</strong>: All business cards</li>
              <li><strong>Barclays</strong>: All business cards</li>
            </ul>
            <p className="text-sm mb-3">
              One important exception: <strong>US Bank business cards</strong> sometimes report to personal credit bureaus depending on the product. Verify before applying if you are close to the 5/24 threshold.
            </p>
            <p className="text-sm">
              Capital One personal cards and Discover cards always count toward 5/24 — these appear on personal credit reports regardless of the card type.
            </p>
          </section>

          {/* Authorized users */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="authorized-users">
              Do Authorized User Cards Count Toward 5/24?
            </h2>
            <p className="text-sm mb-3">
              Authorized user (AU) accounts can count toward your 5/24 number because they typically appear on your personal credit report. This surprises many applicants who were added to a parent&apos;s or spouse&apos;s card years ago.
            </p>
            <p className="text-sm mb-3">
              There is a known workaround: if you are declined and an AU account contributed to the denial, calling Chase&apos;s reconsideration line and explaining that the card is an authorized user account — not a card you applied for — has historically worked for many applicants. Chase agents have discretion to remove AU accounts from their 5/24 calculation.
            </p>
            <p className="text-sm">
              This is not guaranteed, but it is worth attempting if an AU account is pushing you over the limit. Have the name of the primary cardholder and the date you were added ready when you call.
            </p>
          </section>

          {/* How to check */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="check-status">
              How Do I Check My Chase 5/24 Status?
            </h2>
            <p className="text-sm mb-3">
              You can check your 5/24 status without applying for any card and without a hard inquiry. Here are the most reliable methods:
            </p>
            <h3 className="font-display font-bold text-base text-brand-navy mb-2">Method 1 — Use a free tracker (fastest)</h3>
            <p className="text-sm mb-3">
              Enter your recent card approvals into the <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker 5/24 tool</Link> and it calculates your current count and shows you exactly when each card drops off your 24-month window.
            </p>
            <h3 className="font-display font-bold text-base text-brand-navy mb-2">Method 2 — Check your credit reports</h3>
            <p className="text-sm mb-3">
              Pull your free credit reports at AnnualCreditReport.com. Count every personal credit card account opened in the past 24 months. That number is your 5/24 count.
            </p>
            <h3 className="font-display font-bold text-base text-brand-navy mb-2">Method 3 — Check Chase&apos;s pre-qualification tool</h3>
            <p className="text-sm">
              Chase&apos;s pre-qualification tool at chase.com shows which cards you are pre-qualified for. If you are over 5/24, Chase personal cards typically will not appear.
            </p>
          </section>

          {/* Drop-off */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="drop-off">
              When Does a Card Drop Off My 5/24 Count?
            </h2>
            <p className="text-sm mb-3">
              A card drops off your 5/24 count exactly 24 months after the month it was opened — not the exact date. Chase counts by calendar month, not by the specific day.
            </p>
            <p className="text-sm mb-3">
              <strong>Example:</strong> A card opened on March 15, 2024 drops off your 5/24 count at the start of April 2026, not on March 15, 2026. This means the effective wait is sometimes up to 24 months and 30 days depending on when in the month you opened the account.
            </p>
            <p className="text-sm">
              This detail matters when you are planning your next application. Use the <Link href="/" className="text-brand-gold hover:text-amber-600">5/24 drop-off tracker</Link> to see your exact dates rather than estimating manually.
            </p>
          </section>

          {/* Which Chase cards */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="which-chase-cards">
              Which Chase Cards Are Subject to 5/24?
            </h2>
            <p className="text-sm mb-3">
              Nearly all Chase personal credit cards enforce the 5/24 rule. The most common ones:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
              <li>Chase Sapphire Preferred and Sapphire Reserve</li>
              <li>Chase Freedom Flex and Freedom Unlimited</li>
              <li>Chase Freedom Rise</li>
              <li>Chase Amazon Prime Rewards Visa</li>
              <li>Chase co-branded cards: United, Southwest, Marriott, IHG, British Airways, World of Hyatt</li>
            </ul>
            <p className="text-sm mb-2"><strong>Not subject to 5/24</strong> (Chase business cards you can get even while over 5/24):</p>
            <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
              <li>Chase Ink Business Preferred</li>
              <li>Chase Ink Business Cash</li>
              <li>Chase Ink Business Unlimited</li>
            </ul>
            <p className="text-sm">
              This means that even if you are currently over 5/24, you may still be able to get approved for Chase Ink business cards, which carry some of the strongest welcome bonuses in the market.
            </p>
          </section>

          {/* Strategy */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="strategy">
              What Is the Best Strategy for Chase Cards?
            </h2>
            <p className="text-sm mb-3">
              The most widely recommended approach in the churning community follows this sequence:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
              <li><strong>Apply for Chase personal cards first</strong> while you are under 5/24</li>
              <li><strong>Then shift to business cards</strong> from all issuers — these don&apos;t count toward 5/24</li>
              <li><strong>Return to Chase personal cards</strong> once earlier approvals drop off the 24-month window</li>
              <li><strong>Track your count continuously</strong> so you know exactly when you can re-enter the Chase ecosystem</li>
            </ol>
            <p className="text-sm">
              Most experienced churners treat their 5/24 slots as a limited resource. Spending a slot on a low-value card with a small welcome bonus — when you could have used it on a Sapphire Reserve or World of Hyatt — is a common mistake beginners make.
            </p>
            <div className="text-center my-6">
              <Link href="/best-cards-by-category" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
                Find the Best Cards by Category &rarr;
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does a hard inquiry count toward 5/24?</h3>
                <p className="text-sm">
                  No. Hard inquiries on your credit report do not count toward 5/24. Only new account openings — cards that were actually approved and opened — count. You can have 20 hard inquiries and still be at 0/24 if none of those applications were approved.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does closing a card remove it from my 5/24 count?</h3>
                <p className="text-sm">
                  No. Closing a card does not remove it from your 5/24 count. The account was still opened within the 24-month window. The only way for a card to stop counting is for 24 months to pass since it was opened.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does a Chase card I was approved for count toward my own 5/24?</h3>
                <p className="text-sm">
                  Yes. Every Chase personal card you are approved for counts toward your 5/24 just like any other personal card. This is why churners often apply for multiple Chase personal cards in a single application session before moving on to other issuers.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I get a Chase card if I am at exactly 5/24?</h3>
                <p className="text-sm">
                  No. The threshold is &ldquo;fewer than 5 new accounts.&rdquo; If you are at exactly 5/24, Chase will deny the application. You need to be at 4/24 or fewer to be approved.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does 5/24 apply to Chase business cards?</h3>
                <p className="text-sm">
                  No. The 5/24 rule does not apply when you are applying for a Chase business card. You can be at 10/24 and still get approved for a Chase Ink card (though Chase does review your overall credit profile). This is one of the most useful exceptions in the entire bank rules system.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            Check Your 5/24 Status Free &rarr;
          </Link>
        </div>

        {/* Related links */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-3">Related</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">Complete Bank Rules Guide &rarr;</Link></li>
            <li><Link href="/best-cards-by-category" className="text-brand-gold hover:text-amber-600">Best Cards by Spend Category &rarr;</Link></li>
            <li><Link href="/faq" className="text-brand-gold hover:text-amber-600">Credit Card Churning FAQ &rarr;</Link></li>
          </ul>
        </div>

        <p className="text-xs text-text-secondary mt-8 italic">
          Rules verified as of March 2026. Bank policies change without notice. Always verify with the card issuer before applying.
        </p>
      </article>
    </>
  );
}
