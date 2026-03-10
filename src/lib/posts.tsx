import Link from 'next/link';
import type { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  datePublished: string;
  dateModified: string;
  readTimeMinutes: number;
  faqSchema: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string }[];
  ctaText: string;
  ctaHref: string;
  content: () => ReactNode;
}

const posts: BlogPost[] = [
  {
    slug: 'chase-5-24-rule-explained',
    title: 'Chase 5/24 Rule: Complete Guide (2026)',
    description:
      "Chase 5/24 rejects applications if you've opened 5+ cards in 24 months. Learn what counts, what doesn't, and how to check your status free.",
    keywords: 'chase 5/24 rule, chase 5/24 explained, what counts toward 5/24, chase 5/24 2026',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTimeMinutes: 8,
    ctaText: 'Check Your 5/24 Status Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'Does a hard inquiry count toward 5/24?',
        answer:
          'No. Hard inquiries do not count toward 5/24. Only new account openings that were actually approved count toward the threshold.',
      },
      {
        question: 'Does closing a card remove it from my 5/24 count?',
        answer:
          'No. Closing a card does not remove it from your 5/24 count. The account was still opened within the 24-month window. Only time removes it.',
      },
      {
        question: 'Does 5/24 apply to Chase business cards?',
        answer:
          'No. The 5/24 rule does not apply when applying for Chase business cards like the Ink Business Preferred, Cash, or Unlimited.',
      },
    ],
    relatedLinks: [
      { href: '/blog/amex-lifetime-bonus-rule-explained', label: 'Amex Lifetime Bonus Rule: Complete Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/best-cards-by-category', label: 'Best Cards by Spend Category' },
      { href: '/faq', label: 'Credit Card Churning FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Chase 5/24 rule automatically rejects your credit card application if you have opened 5 or more new credit card accounts across any bank in the past 24 months. It is Chase&apos;s most important application restriction — and the first rule every card enthusiast needs to understand before applying. Unlike most bank velocity rules, 5/24 counts cards from all issuers, not just Chase.
        </p>

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
      </>
    ),
  },
  {
    slug: 'amex-lifetime-bonus-rule-explained',
    title: 'Amex Lifetime Bonus Rule: Complete Guide (2026)',
    description:
      'The Amex lifetime rule means you can only earn a welcome bonus on each card once per lifetime. Learn which cards are affected and how to check eligibility.',
    keywords: 'amex lifetime rule, amex once per lifetime, amex welcome bonus eligibility, amex lifetime bonus 2026',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTimeMinutes: 9,
    ctaText: 'Track Your Amex Bonus History Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'If I never received the welcome bonus, am I still subject to the lifetime rule?',
        answer:
          "It depends on how you got the card. If you applied and were approved but never met the minimum spend, Amex's system may still record you as having held that product. The popup during a new application is the only reliable indicator of your current eligibility.",
      },
      {
        question: 'Does the lifetime rule apply to Amex co-branded airline and hotel cards?',
        answer:
          'Yes. The lifetime rule applies to all co-branded Amex cards including Delta, Hilton, and Marriott. Each card product within a family is tracked separately — the Delta Gold and Delta Platinum are treated as distinct products.',
      },
      {
        question: 'Can I earn an Amex bonus if I product-changed into a card?',
        answer:
          'Generally no. If you upgraded or product-changed into a card, Amex typically considers you to have held that product and the popup will appear on future applications for the same card.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/best-cards-by-category', label: 'Best Cards by Spend Category' },
      { href: '/faq', label: 'Credit Card Churning FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The American Express lifetime bonus rule means you can only earn the welcome bonus on each Amex card once per lifetime — even if you cancel the card, wait years, and reapply. Amex tracks bonus history at the card-product level and will approve your application but display a popup warning that you are not eligible for the welcome offer. Missing this rule is one of the most expensive mistakes in credit card strategy, costing applicants hundreds of dollars in points value on a single application.
        </p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is">
            What Is the Amex Lifetime Bonus Rule?
          </h2>
          <p className="text-sm mb-3">
            American Express limits each welcome bonus to one per person per card product, for life. If you received the welcome bonus on the Amex Gold Card in 2019, you are permanently ineligible for the Gold Card welcome bonus again — even if you closed that account years ago.
          </p>
          <p className="text-sm mb-3">
            The rule operates at the card-product level, not the card network level. This means the Amex Platinum and the Amex Gold are treated as separate products — earning the Platinum bonus does not affect your eligibility for the Gold bonus.
          </p>
          <p className="text-sm">
            Amex enforces this through a popup that appears during the online application process. If you are ineligible for the welcome bonus, Amex will show a warning before you submit. Crucially, you can still choose to proceed with the application — but you will not receive the bonus.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="which-cards">
            Which Amex Cards Have the Lifetime Bonus Rule?
          </h2>
          <p className="text-sm mb-4">
            The lifetime rule applies to virtually all American Express credit and charge cards that carry a welcome bonus. This includes both personal and business cards.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Card</th>
                  <th className="text-left px-4 py-2 font-medium">Lifetime Rule Applies?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Platinum (Personal)</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Gold (Personal)</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Green (Personal)</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Blue Cash Preferred</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Blue Cash Everyday</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Delta SkyMiles Gold, Platinum, Reserve</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Hilton Honors, Surpass, Aspire</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Marriott Bonvoy Brilliant</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Business Platinum</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Business Gold</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Blue Business Plus</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            The key principle: if the card has ever offered a welcome bonus, the lifetime rule applies to it. There are no known exceptions among current Amex products.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-tracking-works">
            How Does Amex Track Lifetime Bonus History?
          </h2>
          <p className="text-sm mb-3">
            American Express tracks welcome bonus history by Social Security number and card product. The tracking persists across account closures, product changes, and even name changes. It is permanent.
          </p>
          <p className="text-sm mb-3">
            The tracking does not depend on whether the account is still open. Closing an Amex card does not reset your lifetime bonus eligibility for that product. Many applicants have learned this the hard way — canceling a card to clear their &ldquo;slot,&rdquo; then reapplying and discovering they still see the popup.
          </p>
          <p className="text-sm">
            Amex began consistently enforcing this rule around 2014. Approvals prior to that date may or may not be tracked depending on the card and account history. If you held an Amex card before 2014 and are unsure whether your bonus history is on file, the only reliable way to check is to start an application and see if the popup appears.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="popup">
            What Is the Amex Popup and What Does It Mean?
          </h2>
          <p className="text-sm mb-3">
            The Amex popup — formally called the &ldquo;welcome offer not available&rdquo; popup — appears on the final screen of the online application before you submit. It states that based on your history with this card, you are not eligible for the welcome offer.
          </p>
          <p className="text-sm mb-3">
            When you see this popup you have two options:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
            <li><strong>Do not proceed</strong> — Exit the application. No hard inquiry has been placed yet at this stage in most cases. You avoid a wasted application with no bonus.</li>
            <li><strong>Proceed anyway</strong> — Submit the application. You may be approved for the card but will receive zero welcome bonus points or miles.</li>
          </ol>
          <p className="text-sm mb-3">
            The only reason to proceed after seeing the popup is if the card&apos;s ongoing earning rates and perks justify the annual fee without a welcome bonus. For most people, the answer is no.
          </p>
          <p className="text-sm">
            <strong>Important</strong>: The popup does not always appear even when you are ineligible. Some data points from the community suggest Amex&apos;s system occasionally fails to display it. Never assume you are eligible simply because the popup did not appear.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="workarounds">
            Is There Any Way Around the Amex Lifetime Rule?
          </h2>
          <p className="text-sm mb-3">
            There is no reliable method to circumvent the Amex lifetime bonus rule. A few partial workarounds have been documented by the community:
          </p>
          <p className="text-sm mb-3">
            <strong>Upgraded vs. applied</strong>: If you were upgraded into a card product rather than applying for it directly, you may not have received a welcome bonus — and may therefore still be eligible if you apply fresh. This is not guaranteed and varies by situation.
          </p>
          <p className="text-sm mb-3">
            <strong>Different card variants</strong>: Some Amex cards have issued multiple variants over the years. For example, the Amex Hilton Honors Surpass and the older Amex Hilton Honors Ascend were treated as different products by some accounts. This is increasingly rare as Amex has consolidated its card lineup.
          </p>
          <p className="text-sm mb-3">
            <strong>Business vs. personal</strong>: Personal and business versions of similar products are treated as separate cards. If you earned the personal Amex Platinum bonus, you are still eligible for the Business Platinum welcome bonus (subject to Amex&apos;s 2/90 business card rule).
          </p>
          <p className="text-sm">
            The community consensus is clear: there is no consistent, reliable workaround. Plan your Amex applications carefully and track which bonuses you have already received.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="2-90-rule">
            What Is the Amex 2/90 Rule?
          </h2>
          <p className="text-sm mb-3">
            The Amex 2/90 rule is a separate but related restriction that limits personal card approvals. American Express will not approve more than 2 personal credit card applications within any 90-day window.
          </p>
          <p className="text-sm mb-3">
            This rule works alongside the lifetime bonus rule:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>You can apply for 2 Amex personal cards within 90 days — but only earn the bonus on each if you have never held those products before</li>
            <li>Applying for a third Amex personal card within 90 days will typically result in a denial regardless of your credit profile</li>
            <li>Business cards are subject to a separate rule (approximately 1 business card per 5 days)</li>
          </ul>
          <p className="text-sm">
            The 2/90 rule and the lifetime rule together mean most people have only a handful of Amex personal card applications worth making over their lifetime. Choosing the right timing and sequencing matters significantly.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="track-history">
            How to Track Your Amex Bonus History
          </h2>
          <p className="text-sm mb-3">
            The most reliable way to track which Amex bonuses you have already received is to maintain a personal record going back to your first Amex card. The <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker Amex Bonus Tracker</Link> lets you log each Amex card with a simple checkbox — &ldquo;Did you receive the welcome bonus?&rdquo; — so you always know your eligibility status at a glance.
          </p>
          <p className="text-sm mb-3">Other useful approaches:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Check your Amex account history</strong>: Log in to americanexpress.com and review your card history under &ldquo;Account Services.&rdquo; Closed accounts appear in your history.</li>
            <li><strong>Review old emails</strong>: Welcome bonus confirmation emails from Amex are timestamped and serve as a permanent record.</li>
            <li><strong>Check r/churning&apos;s data points</strong>: The community maintains extensive records of popup experiences and eligibility patterns for every Amex product.</li>
          </ul>
          <p className="text-sm">
            Tracking this information proactively — before you apply — is the only way to avoid the popup and a wasted hard inquiry.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="vs-citi">
            Amex Lifetime Rule vs. Citi 24-Month Rule
          </h2>
          <p className="text-sm mb-4">
            The Amex lifetime rule and Citi&apos;s 24-month bonus rule are both welcome bonus restrictions but work very differently:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Feature</th>
                  <th className="text-left px-4 py-2 font-medium">Amex Lifetime Rule</th>
                  <th className="text-left px-4 py-2 font-medium">Citi 24-Month Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Duration</td><td className="px-4 py-2">Permanent — once per lifetime</td><td className="px-4 py-2">24-month rolling window</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Trigger</td><td className="px-4 py-2">Earned the bonus OR held the card</td><td className="px-4 py-2">Held the card OR a predecessor card</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Reset?</td><td className="px-4 py-2 text-brand-red font-medium">Never</td><td className="px-4 py-2 text-brand-green font-medium">Yes — after 24 months</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Applies to</td><td className="px-4 py-2">Card product level</td><td className="px-4 py-2">Card family level</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Enforcement</td><td className="px-4 py-2">Popup before submission</td><td className="px-4 py-2">Denial or no bonus after approval</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            The practical difference is significant. With Citi, waiting 24 months after closing a card restores your bonus eligibility. With Amex, no amount of waiting changes your eligibility once a bonus has been received. See the <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">Complete Bank Rules Guide</Link> for details on all bank restrictions.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">If I never received the welcome bonus, am I still subject to the lifetime rule?</h3>
              <p className="text-sm">
                It depends on how you got the card. If you applied and were approved but spent below the minimum spending requirement — and therefore never triggered the bonus — Amex&apos;s system may still consider you to have received it depending on the product and year. The popup is the only reliable indicator of your current eligibility status.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the lifetime rule apply if I was a secondary cardholder?</h3>
              <p className="text-sm">
                No. Being added as an additional cardholder on someone else&apos;s Amex account does not affect your lifetime bonus eligibility. Only accounts where you were the primary applicant count.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I earn an Amex bonus if I product-changed into a card?</h3>
              <p className="text-sm">
                Generally no. If you upgraded or product-changed into a card product, Amex typically considers you to have &ldquo;had&rdquo; that card and you will see the popup. Some exceptions exist for very old product changes before Amex tightened enforcement, but these are unreliable.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the lifetime rule apply to Amex co-branded airline and hotel cards?</h3>
              <p className="text-sm">
                Yes. The lifetime rule applies to all co-branded Amex cards including Delta, Hilton, Marriott, and Air Canada. Each card product within a family is tracked separately — the Delta Gold and Delta Platinum are treated as distinct products with independent lifetime eligibility.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What happens to my points if I apply after seeing the popup?</h3>
              <p className="text-sm">
                If you proceed after the popup and are approved, your points earning on purchases begins normally. You will earn points on every dollar spent. The only thing the popup affects is the one-time welcome bonus — your ongoing card benefits are unaffected.
              </p>
            </div>
          </div>
        </section>
      </>
    ),
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
