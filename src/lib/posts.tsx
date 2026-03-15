import Link from 'next/link';
import type { ReactNode } from 'react';
import { newPosts1to4 } from './newPosts';
import { newPosts5to8 } from './newPosts5to8';
import { postBestCardsAfter524 } from './postBestCardsAfter524';
import { postApplicationStrategy } from './postApplicationStrategy';

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
  {
    slug: 'citi-8-65-rule-explained',
    title: 'Citi 8/65 Rule: Complete Guide (2026)',
    description:
      'The Citi 8/65 rule limits you to 1 Citi card every 8 days and 2 Citi cards every 65 days. Learn how to time your Citi applications correctly.',
    keywords: 'citi 8/65 rule, citi application rules, citi credit card timing, citi 8/65 explained 2026',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTimeMinutes: 7,
    ctaText: 'Track Your Citi Application Timing Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'Does a Citi denial count toward the 8/65 rule?',
        answer:
          'No. Only approvals count toward the 8-day and 65-day windows. A denial does not start or affect either clock.',
      },
      {
        question: 'Can I apply for two Citi cards on the same day?',
        answer:
          'No. Applying for two Citi cards on the same day will result in one approval and one denial in most cases. Always wait the full 8 days between Citi applications.',
      },
      {
        question: 'Does closing a Citi card reset my 8/65 eligibility?',
        answer:
          "Closing a card has no effect on the 8/65 velocity rules — those only track approval dates. However, closing a Citi card within 24 months of receiving its welcome bonus does affect your bonus eligibility under the separate 24-month rule.",
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/amex-lifetime-bonus-rule-explained', label: 'Amex Lifetime Bonus Rule: Complete Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/faq', label: 'Credit Card Churning FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Citi 8/65 rule is actually two separate restrictions operating together: Citi will not approve more than one Citi card within any 8-day window, and no more than two Citi cards within any 65-day window. Both rules apply simultaneously. Timing your Citi applications correctly is the difference between building a strong Citi card lineup and burning through applications with nothing to show for it.
        </p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is">
            What Is the Citi 8/65 Rule?
          </h2>
          <p className="text-sm mb-3">
            Citi enforces two velocity limits on credit card approvals:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>The 8-day rule</strong>: You cannot be approved for more than 1 Citi card within any rolling 8-day period</li>
            <li><strong>The 65-day rule</strong>: You cannot be approved for more than 2 Citi cards within any rolling 65-day period</li>
          </ul>
          <p className="text-sm mb-3">
            These rules apply to Citi personal credit cards. Both rules must be satisfied simultaneously — passing the 8-day rule does not exempt you from the 65-day rule.
          </p>
          <p className="text-sm">
            Unlike Chase&apos;s 5/24 rule, which counts cards from all banks, the Citi 8/65 rule only counts Citi-issued cards. A card from Chase or Amex opened last week has no effect on your Citi application timing.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-they-work">
            How Do the 8-Day and 65-Day Rules Work Together?
          </h2>
          <p className="text-sm mb-3">
            The two rules stack, which creates a specific application cadence that maximizes approvals:
          </p>
          <p className="text-sm mb-2"><strong>Scenario 1 — Applying for 2 Citi cards:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
            <li>Apply for Card A on Day 1 &rarr; Approved</li>
            <li>Wait at least 8 days</li>
            <li>Apply for Card B on Day 9 or later &rarr; Eligible (passes 8-day rule, still within first 65-day window with only 1 prior approval)</li>
          </ul>
          <p className="text-sm mb-2"><strong>Scenario 2 — Applying for 3 Citi cards:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
            <li>Apply for Card A on Day 1 &rarr; Approved</li>
            <li>Apply for Card B on Day 9 &rarr; Approved (passes 8-day rule)</li>
            <li>Apply for Card C on Day 66 or later &rarr; Eligible (Card A is now outside the 65-day window, leaving only 1 approval in the last 65 days)</li>
          </ul>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Application</th>
                  <th className="text-left px-4 py-2 font-medium">Minimum Wait</th>
                  <th className="text-left px-4 py-2 font-medium">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">1st Citi card</td><td className="px-4 py-2">No wait needed</td><td className="px-4 py-2">No prior approvals</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">2nd Citi card</td><td className="px-4 py-2">8 days after 1st</td><td className="px-4 py-2">8-day rule</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">3rd Citi card</td><td className="px-4 py-2">65 days after 1st</td><td className="px-4 py-2">65-day window resets</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">4th Citi card</td><td className="px-4 py-2">8 days after 3rd</td><td className="px-4 py-2">8-day rule again</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Tracking your exact approval dates is essential here. A single day&apos;s error in your timing can result in a denial that wastes a hard inquiry and delays your next eligible application window.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="business-cards">
            Does the Citi 8/65 Rule Apply to Business Cards?
          </h2>
          <p className="text-sm mb-3">
            The 8/65 rule applies to Citi personal credit cards. Citi business cards are subject to separate rules and are generally not affected by the personal card velocity limits, though Citi&apos;s overall business card lineup is limited compared to Chase or Amex.
          </p>
          <p className="text-sm">
            For practical purposes, most churners focus on Citi&apos;s personal card lineup — the Strata Premier, Double Cash, Custom Cash, and co-branded airline cards — where the 8/65 rule is most relevant.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="24-month-rule">
            What Is the Citi 24-Month Bonus Rule?
          </h2>
          <p className="text-sm mb-3">
            Separate from the 8/65 velocity rule, Citi also enforces a 24-month bonus eligibility restriction. You cannot earn a welcome bonus on a Citi card if:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>You currently hold that card, OR</li>
            <li>You have received a welcome bonus on that card OR a predecessor card in the past 24 months, OR</li>
            <li>You have closed that card in the past 24 months</li>
          </ul>
          <p className="text-sm mb-4">
            This rule is stricter than it first appears because it applies to <strong>card families</strong>, not just individual products. The Citi Strata Premier and the older Citi Premier are considered the same card family — earning a bonus on one affects your eligibility for the other.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Rule</th>
                  <th className="text-left px-4 py-2 font-medium">Applies To</th>
                  <th className="text-left px-4 py-2 font-medium">Resets?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">8-day rule</td><td className="px-4 py-2">Approval velocity</td><td className="px-4 py-2 text-brand-green font-medium">Yes — after 8 days</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">65-day rule</td><td className="px-4 py-2">Approval velocity</td><td className="px-4 py-2 text-brand-green font-medium">Yes — rolling 65-day window</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">24-month bonus rule</td><td className="px-4 py-2">Welcome bonus eligibility</td><td className="px-4 py-2 text-brand-green font-medium">Yes — after 24 months</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Unlike the <Link href="/blog/amex-lifetime-bonus-rule-explained" className="text-brand-gold hover:text-amber-600">Amex lifetime rule</Link>, Citi&apos;s bonus restriction does reset. Waiting 24 months after closing a card and receiving its bonus restores your eligibility for that card family&apos;s welcome offer.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="best-cards">
            Which Citi Cards Are Most Worth Targeting?
          </h2>
          <p className="text-sm mb-3">
            The cards most commonly targeted under the 8/65 framework, in order of welcome bonus value:
          </p>
          <p className="text-sm mb-3">
            <strong>Citi Strata Premier</strong> — The flagship travel card with transferable ThankYou points. Strong welcome bonus, broad transfer partners including Air France/KLM, Turkish Airlines, and Avianca. Points transfer at 1:1 to most partners.
          </p>
          <p className="text-sm mb-3">
            <strong>Citi Double Cash</strong> — 2% cash back on everything (1% when you buy, 1% when you pay). No annual fee. Frequently offers elevated welcome bonuses for new cardholders. Earned cash back can be converted to ThankYou points if you also hold a Strata Premier.
          </p>
          <p className="text-sm mb-3">
            <strong>Citi Custom Cash</strong> — 5% back on your top eligible spend category each billing cycle (up to $500 in purchases). Categories include groceries, gas, restaurants, and more. No annual fee. A powerful companion to the Double Cash.
          </p>
          <p className="text-sm">
            <strong>Citi AAdvantage Platinum Select</strong> — American Airlines co-branded card with strong welcome bonuses during elevated offer periods. Free checked bag benefit. Counts toward AAdvantage status milestones.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="timing-strategy">
            How to Time Citi Applications for Maximum Value
          </h2>
          <p className="text-sm mb-3">
            The optimal Citi application strategy given the 8/65 rule:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
            <li><strong>Apply for your highest-priority Citi card first</strong> — If you only get one approval in the near term, make it count</li>
            <li><strong>Wait exactly 8 days</strong> before applying for a second Citi card</li>
            <li><strong>Track your Day 1 approval date precisely</strong> — The 65-day window starts from that date</li>
            <li><strong>Wait until Day 66</strong> before applying for a third card if you used both slots in the first 65 days</li>
            <li><strong>Use the <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker bank rules dashboard</Link></strong> to monitor your Citi window automatically</li>
          </ol>
          <p className="text-sm">
            One common mistake: applicants confuse the application date with the approval date. The 8-day and 65-day windows start from the date of <strong>approval</strong>, not the date you submitted the application.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="comparison">
            Citi 8/65 vs. Other Bank Application Rules
          </h2>
          <p className="text-sm mb-4">
            How Citi&apos;s rules compare to the other major bank velocity restrictions:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Bank</th>
                  <th className="text-left px-4 py-2 font-medium">Rule</th>
                  <th className="text-left px-4 py-2 font-medium">Window</th>
                  <th className="text-left px-4 py-2 font-medium">Counts Other Banks?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Chase</td><td className="px-4 py-2">5/24</td><td className="px-4 py-2">24 months</td><td className="px-4 py-2 text-brand-red font-medium">Yes — all banks</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex</td><td className="px-4 py-2">2/90 (personal)</td><td className="px-4 py-2">90 days</td><td className="px-4 py-2 text-brand-green font-medium">No — Amex only</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Citi</td><td className="px-4 py-2">8/65</td><td className="px-4 py-2">8 and 65 days</td><td className="px-4 py-2 text-brand-green font-medium">No — Citi only</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Bank of America</td><td className="px-4 py-2">2/3/4</td><td className="px-4 py-2">30/12/24 months</td><td className="px-4 py-2 text-brand-green font-medium">No — BoA only</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Capital One</td><td className="px-4 py-2">1 per 6 months</td><td className="px-4 py-2">180 days</td><td className="px-4 py-2 text-brand-green font-medium">No — Cap One only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Citi&apos;s rules are among the most favorable for volume applicants because the windows reset quickly — 65 days is far shorter than Chase&apos;s 24-month window or even Amex&apos;s 90-day window.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does a Citi denial count toward the 8/65 rule?</h3>
              <p className="text-sm">
                No. Only approvals count toward the 8-day and 65-day windows. A denial does not start or affect either clock. However, the hard inquiry from a denial does appear on your credit report, so repeated denials in a short window can still harm your approval odds at other banks.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does closing a Citi card reset my 8/65 eligibility?</h3>
              <p className="text-sm">
                Closing a card has no effect on the 8/65 velocity rules — those only track approval dates. However, closing a Citi card within 24 months of receiving its welcome bonus does affect your bonus eligibility under the separate 24-month rule.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the 8/65 rule apply to Citi store cards?</h3>
              <p className="text-sm">
                Store cards issued by Citi — such as certain retail co-branded cards — may or may not count depending on whether they are issued on the Citi network. Cards issued under a store&apos;s own credit program typically do not count. Cards clearly branded as Citi products do count.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I apply for two Citi cards on the same day?</h3>
              <p className="text-sm">
                No. Applying for two Citi cards on the same day will result in one approval and one denial in most cases, as the second application is processed after the first and the 8-day clock has already started. Always wait the full 8 days between Citi applications.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What if I&apos;m denied for a Citi card — should I call reconsideration?</h3>
              <p className="text-sm">
                Yes. Citi has a reconsideration line and agents have discretion to overturn denials. Citi is generally considered to have responsive reconsideration agents. Common successful reconsideration arguments include offering to move credit from an existing Citi card to the new one, or clarifying income information that may have been misread.
              </p>
            </div>
          </div>
        </section>
      </>
    ),
  },
  {
    slug: 'bank-of-america-2-3-4-rule-explained',
    title: 'Bank of America 2/3/4 Rule: Complete Guide (2026)',
    description:
      'The BoA 2/3/4 rule limits approvals to 2 cards in 30 days, 3 in 12 months, and 4 in 24 months. Learn how to maximize your BoA applications.',
    keywords: 'bank of america 2/3/4 rule, boa application rules, bank of america credit card limits, 2/3/4 rule explained 2026',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTimeMinutes: 8,
    ctaText: 'Track Your BoA Application Windows Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'Does the 2/3/4 rule count cards I applied for but was denied?',
        answer:
          'No. Only approvals count toward the 2/30, 3/12, and 4/24 limits. Denials do not consume any slots.',
      },
      {
        question: 'If I close a BoA card does it stop counting toward the 2/3/4 limits?',
        answer:
          'No. Closing a card does not remove it from the 2/3/4 count. Only time — waiting for approvals to exit their respective rolling windows — clears the slots.',
      },
      {
        question: 'How do I know which of the three BoA limits is blocking my next application?',
        answer:
          'Count your BoA approvals in the last 30 days, last 12 months, and last 24 months separately. The most restrictive window is your current bottleneck.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/citi-8-65-rule-explained', label: 'Citi 8/65 Rule: Complete Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/faq', label: 'Credit Card Churning FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Bank of America 2/3/4 rule restricts how many BoA credit cards you can be approved for across three separate time windows simultaneously: no more than 2 cards in 30 days, 3 cards in 12 months, and 4 cards in 24 months. All three limits apply at once, making BoA one of the more complex banks to plan around. Understanding which window is your current bottleneck is the key to timing your next application correctly.
        </p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is">
            What Is the Bank of America 2/3/4 Rule?
          </h2>
          <p className="text-sm mb-3">
            Bank of America enforces three concurrent approval velocity limits on its credit cards:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>2 cards in 30 days</strong>: No more than 2 BoA card approvals in any rolling 30-day window</li>
            <li><strong>3 cards in 12 months</strong>: No more than 3 BoA card approvals in any rolling 12-month window</li>
            <li><strong>4 cards in 24 months</strong>: No more than 4 BoA card approvals in any rolling 24-month window</li>
          </ul>
          <p className="text-sm mb-3">
            All three rules apply simultaneously. At any given moment, your eligibility for a new BoA card depends on which of the three limits is most restrictive given your recent approval history.
          </p>
          <p className="text-sm">
            Like <Link href="/blog/citi-8-65-rule-explained" className="text-brand-gold hover:text-amber-600">Citi&apos;s 8/65 rule</Link>, BoA&apos;s limits only count BoA-issued cards — approvals from Chase, Amex, or other banks have no effect on your BoA eligibility.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-they-work">
            How Do All Three Rules Work at the Same Time?
          </h2>
          <p className="text-sm mb-4">
            The three windows interact, which means your bottleneck shifts depending on how many cards you&apos;ve gotten and when. Here&apos;s a practical example:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Card</th>
                  <th className="text-left px-4 py-2 font-medium">Approval Date</th>
                  <th className="text-left px-4 py-2 font-medium">30-Day</th>
                  <th className="text-left px-4 py-2 font-medium">12-Month</th>
                  <th className="text-left px-4 py-2 font-medium">24-Month</th>
                  <th className="text-left px-4 py-2 font-medium">Eligible?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Card 1</td><td className="px-4 py-2">Jan 1, 2025</td><td className="px-4 py-2">1/2</td><td className="px-4 py-2">1/3</td><td className="px-4 py-2">1/4</td><td className="px-4 py-2 text-brand-green font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Card 2</td><td className="px-4 py-2">Jan 20, 2025</td><td className="px-4 py-2">2/2</td><td className="px-4 py-2">2/3</td><td className="px-4 py-2">2/4</td><td className="px-4 py-2 text-brand-green font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Card 3</td><td className="px-4 py-2">Apr 1, 2025</td><td className="px-4 py-2">1/2</td><td className="px-4 py-2">3/3</td><td className="px-4 py-2">3/4</td><td className="px-4 py-2 text-brand-green font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Card 4</td><td className="px-4 py-2">Jan 2, 2026</td><td className="px-4 py-2">1/2</td><td className="px-4 py-2">1/3</td><td className="px-4 py-2">4/4</td><td className="px-4 py-2 text-brand-green font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Card 5</td><td className="px-4 py-2">Jan 3, 2026</td><td className="px-4 py-2">2/2</td><td className="px-4 py-2">2/3</td><td className="px-4 py-2">4/4</td><td className="px-4 py-2 text-brand-red font-medium">No — at 4/24</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            The 24-month window is almost always the longest constraint for active applicants. Once you reach 4 approvals in 24 months, you must wait for your oldest approval to exit the 24-month window before applying again. Use the <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker bank rules dashboard</Link> to see exactly which BoA window is your current limiting factor and when your next slot opens.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="best-cards">
            Which Bank of America Cards Are Worth Targeting?
          </h2>
          <p className="text-sm mb-3">
            BoA&apos;s most valuable cards for points and cash back maximizers:
          </p>
          <p className="text-sm mb-3">
            <strong>Bank of America Premium Rewards</strong> — The flagship travel card earning 2x on travel and dining, 1.5x on everything else. The value scales significantly with Preferred Rewards status. Welcome bonus typically ranges from 50,000&ndash;75,000 points.
          </p>
          <p className="text-sm mb-3">
            <strong>Bank of America Premium Rewards Elite</strong> — Premium version with higher annual fee, travel credits, and accelerated earn rates. Best suited to Platinum Honors tier Preferred Rewards members.
          </p>
          <p className="text-sm mb-3">
            <strong>Bank of America Customized Cash Rewards</strong> — 3% back in a category of your choice (gas, online shopping, dining, travel, drug stores, or home improvement), 2% at grocery stores and wholesale clubs (up to $2,500/quarter combined), 1% everywhere else. No annual fee.
          </p>
          <p className="text-sm mb-3">
            <strong>Bank of America Travel Rewards</strong> — 1.5x on all purchases with no annual fee and no foreign transaction fees. Simple, reliable, good for Preferred Rewards members who get a bonus multiplier on earn rates.
          </p>
          <p className="text-sm">
            <strong>Alaska Airlines Visa</strong> — Co-branded card with a strong companion fare benefit. One of the most consistently valuable airline card benefits in the market — the annual companion fare alone can justify the annual fee for frequent Alaska flyers.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="preferred-rewards">
            What Is Bank of America Preferred Rewards and Why Does It Matter?
          </h2>
          <p className="text-sm mb-4">
            The Preferred Rewards program is BoA&apos;s loyalty tier system based on the combined balance across your Bank of America banking and Merrill investment accounts. Reaching higher tiers dramatically increases the earn rates on BoA credit cards.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Tier</th>
                  <th className="text-left px-4 py-2 font-medium">3-Month Avg Balance</th>
                  <th className="text-left px-4 py-2 font-medium">Rewards Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Gold</td><td className="px-4 py-2">$20,000&ndash;$49,999</td><td className="px-4 py-2">25% bonus</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Platinum</td><td className="px-4 py-2">$50,000&ndash;$99,999</td><td className="px-4 py-2">50% bonus</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Platinum Honors</td><td className="px-4 py-2">$100,000+</td><td className="px-4 py-2">75% bonus</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Diamond</td><td className="px-4 py-2">$1,000,000+</td><td className="px-4 py-2">75% bonus + other perks</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mb-3">
            At Platinum Honors, the Premium Rewards card effectively earns 3.5x on travel and dining and 2.625x on everything else — competitive with premium cards charging $550+ annual fees, while the Premium Rewards card charges $95.
          </p>
          <p className="text-sm">
            If you have significant assets in brokerage accounts, moving them to Merrill (BoA&apos;s investment arm) to qualify for Preferred Rewards is one of the highest-ROI moves in personal finance optimization. A $100,000 brokerage balance at Merrill qualifies you for Platinum Honors regardless of which broker currently holds those assets.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="business-cards">
            Does the 2/3/4 Rule Apply to BoA Business Cards?
          </h2>
          <p className="text-sm mb-3">
            BoA business cards are generally subject to the same 2/3/4 restrictions, unlike Chase and Amex where business cards are treated separately from personal velocity rules. This means a BoA business card approval counts against your 2/30, 3/12, and 4/24 limits just like a personal card approval.
          </p>
          <p className="text-sm">
            This is an important distinction. If you are planning to apply for both BoA personal and business cards, all approvals draw from the same pool of slots under the 2/3/4 framework.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="comparison">
            How Does the 2/3/4 Rule Compare to Other Banks?
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Bank</th>
                  <th className="text-left px-4 py-2 font-medium">Rule</th>
                  <th className="text-left px-4 py-2 font-medium">Complexity</th>
                  <th className="text-left px-4 py-2 font-medium">Resets</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Chase</td><td className="px-4 py-2">5/24</td><td className="px-4 py-2">Simple — one threshold</td><td className="px-4 py-2">Every 24 months as cards age off</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex</td><td className="px-4 py-2">2/90 (personal)</td><td className="px-4 py-2">Simple — one 90-day window</td><td className="px-4 py-2">Rolling 90-day window</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Citi</td><td className="px-4 py-2">8/65 (two rules)</td><td className="px-4 py-2">Moderate — two windows</td><td className="px-4 py-2">Rolling 8 and 65-day windows</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Bank of America</td><td className="px-4 py-2">2/3/4 (three rules)</td><td className="px-4 py-2">Complex — three windows</td><td className="px-4 py-2">Rolling 30, 12, and 24-month windows</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Capital One</td><td className="px-4 py-2">1 per 6 months</td><td className="px-4 py-2">Simple — one threshold</td><td className="px-4 py-2">Rolling 180-day window</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            BoA&apos;s 2/3/4 system is the most complex of the major bank rules because you always need to check three windows simultaneously. The <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker bank eligibility grid</Link> calculates all three BoA windows automatically once you enter your approval history.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="strategy">
            What Is the Best Strategy for Bank of America Cards?
          </h2>
          <p className="text-sm mb-3">
            Practical approach to maximizing BoA approvals:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
            <li><strong>Prioritize your highest-value BoA card first</strong> — The Premium Rewards or Alaska Airlines card typically offers the best welcome bonus. Apply for this one before filling your slots with lower-value cards.</li>
            <li><strong>Apply for two cards in a single session</strong> — Since the 30-day rule allows 2 approvals, experienced applicants sometimes apply for two BoA cards on the same day or within the same week to maximize their 30-day window.</li>
            <li><strong>Track all three windows, not just the most recent</strong> — The 24-month window is often the binding constraint for active churners. Do not assume you are eligible just because the 30-day and 12-month windows are clear.</li>
            <li><strong>Consider Preferred Rewards before applying</strong> — If you are close to a Preferred Rewards tier threshold, consolidating assets to reach the next tier before applying significantly increases the long-term value of every BoA card you hold.</li>
            <li><strong>Verify directly with Bank of America</strong> — As with all bank rules, BoA&apos;s policies can change. Always confirm your eligibility and the current welcome bonus offer before submitting an application.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the 2/3/4 rule count cards I applied for but was denied?</h3>
              <p className="text-sm">
                No. Only approvals count toward the 2/30, 3/12, and 4/24 limits. Denials do not consume any slots but do add hard inquiries to your credit report.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">If I close a BoA card does it stop counting toward the 2/3/4 limits?</h3>
              <p className="text-sm">
                No. Closing a card does not remove it from the 2/3/4 count. The approval date is what matters, not whether the account is still open. Only time — waiting for approvals to exit their respective rolling windows — clears the slots.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the Alaska Airlines card count toward BoA 2/3/4?</h3>
              <p className="text-sm">
                Yes. The Alaska Airlines Visa is issued by Bank of America and counts toward all three BoA velocity limits just like any other BoA card.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I apply for a BoA card if I have no existing relationship with Bank of America?</h3>
              <p className="text-sm">
                Yes. You do not need an existing BoA checking or savings account to apply for a BoA credit card. However, having a banking relationship — and especially qualifying for Preferred Rewards — significantly improves approval odds and card value.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">How do I know which of the three BoA limits is blocking my next application?</h3>
              <p className="text-sm">
                Check each window separately: count your BoA approvals in the last 30 days, last 12 months, and last 24 months. The most restrictive window is your current bottleneck. The <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker eligibility dashboard</Link> calculates all three automatically.
              </p>
            </div>
          </div>
        </section>
      </>
    ),
  },
  {
    slug: 'how-to-check-5-24-status',
    title: 'How to Check Your Chase 5/24 Status (Without Applying)',
    description:
      'Check your Chase 5/24 count for free without a hard inquiry. Three methods that work in 2026, including a free online tracker.',
    keywords: 'how to check 5/24 status, check chase 5/24, 5/24 count free, chase 5/24 checker 2026',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTimeMinutes: 7,
    ctaText: 'Check Your 5/24 Status Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'Does checking my 5/24 status hurt my credit score?',
        answer:
          'No. Checking your own credit report at AnnualCreditReport.com is a soft inquiry and does not affect your score. Using the 524Tracker tool requires no credit pull at all.',
      },
      {
        question: 'Can I check my 5/24 status by calling Chase?',
        answer:
          'Chase customer service representatives will not tell you your 5/24 count. The rule is applied algorithmically during the application process. Your credit report is the authoritative source.',
      },
      {
        question: 'If I am at 5/24, when is the soonest I can apply for a Chase card?',
        answer:
          'You need to wait until your oldest qualifying card exits the 24-month window, dropping you to 4/24. Enter your approval dates into the 524Tracker to see your next eligible date.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/amex-lifetime-bonus-rule-explained', label: 'Amex Lifetime Bonus Rule: Complete Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/best-cards-by-category', label: 'Best Cards by Spend Category' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          You can check your Chase 5/24 status for free without applying for a card and without triggering a hard inquiry. The most reliable method takes under five minutes: pull your free credit report, count every personal credit card opened in the past 24 months, and compare that number to the 5/24 threshold. A free tracker tool can automate this and show you exactly when each card drops off your count.
        </p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="why-check">
            Why Checking Your 5/24 Status Before Applying Matters
          </h2>
          <p className="text-sm mb-3">
            Applying for a Chase card while over 5/24 results in an automatic denial. That denial comes with a hard inquiry on your credit report — a wasted pull that can slightly lower your score and signals to other lenders that you recently sought new credit.
          </p>
          <p className="text-sm mb-3">
            More importantly, understanding your exact 5/24 count and drop-off timeline lets you plan your entire application strategy across all banks. Knowing you will drop from 5/24 to 4/24 in six weeks changes which cards you apply for and when.
          </p>
          <p className="text-sm">
            Checking your status first costs nothing. Applying blind can cost you a hard inquiry and a denial.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="method-1">
            Method 1: Use a Free 5/24 Tracker (Fastest)
          </h2>
          <p className="text-sm mb-3">
            The fastest way to check your 5/24 status is to enter your recent card approvals into the <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker 5/24 tool</Link>. The tool:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Calculates your current 5/24 count instantly</li>
            <li>Shows the exact drop-off date for each card in your 24-month window</li>
            <li>Displays a countdown to when your next slot opens</li>
            <li>Tracks authorized user card toggles (include or exclude)</li>
            <li>Saves your data locally in your browser — nothing is sent to any server</li>
          </ul>
          <p className="text-sm">
            This method requires you to know your card approval dates, which you can find on your credit report or in old approval emails. If you have tracked your applications over time, this is the most accurate and useful method because it gives you a forward-looking timeline, not just a current count.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="method-2">
            Method 2: Check Your Free Credit Reports
          </h2>
          <p className="text-sm mb-3">
            The most authoritative source for your 5/24 count is your credit report itself, since Chase uses your credit report to calculate 5/24 in the first place.
          </p>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Step-by-step:</h3>
          <ol className="list-decimal pl-6 space-y-1 text-sm mb-4">
            <li>Go to <strong>AnnualCreditReport.com</strong> — the only federally authorized source for free credit reports</li>
            <li>Pull reports from all three bureaus: Equifax, Experian, and TransUnion</li>
            <li>Open each report and navigate to the &ldquo;Accounts&rdquo; section</li>
            <li>Find every credit card account with an <strong>open date within the past 24 months</strong></li>
            <li>Count those accounts — that is your 5/24 number</li>
          </ol>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">What to include in your count:</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Personal credit cards from any bank with an open date in the past 24 months</li>
            <li>Store/retail cards</li>
            <li>Authorized user accounts (these typically appear on your report)</li>
            <li>Amex charge cards (Green, Gold, Platinum)</li>
          </ul>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">What to exclude:</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Business credit cards from Chase, Amex, Citi, Capital One, BoA, Barclays</li>
            <li>Personal loans, auto loans, mortgages</li>
            <li>Cards opened more than 24 months ago</li>
          </ul>
          <p className="text-sm">
            As of 2024, AnnualCreditReport.com allows you to pull your reports weekly for free, up from the previous once-per-year limit.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="method-3">
            Method 3: Check Chase&apos;s Pre-Qualification Tool
          </h2>
          <p className="text-sm mb-3">
            Chase&apos;s pre-qualification tool at chase.com/pre-qualify shows which cards you may be pre-qualified for based on a soft pull — no hard inquiry, no effect on your credit score.
          </p>
          <p className="text-sm mb-3">
            If you are over 5/24, Chase personal cards typically will not appear in your pre-qualification results. If you see Sapphire Preferred, Freedom Flex, or other personal cards in your results, you are likely under 5/24.
          </p>
          <p className="text-sm mb-2"><strong>Important caveats:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Pre-qualification is not a guarantee of approval</li>
            <li>Not seeing a card in pre-qualification does not definitively mean you are over 5/24 — some cards simply are not included in the pre-qual tool</li>
            <li>This method gives you a signal, not a precise count</li>
          </ul>
          <p className="text-sm">
            Use this method as a quick sanity check, not as your primary 5/24 verification method.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="authorized-users">
            How to Count Authorized User Cards in Your 5/24 Status
          </h2>
          <p className="text-sm mb-3">
            Authorized user (AU) accounts are the most common source of confusion when calculating 5/24. Here is the definitive breakdown:
          </p>
          <p className="text-sm mb-3">
            <strong>AU cards typically DO count toward 5/24</strong> because they appear on your personal credit report. If a parent added you to their card two years ago, that account shows on your report with the open date and counts toward your 24-month window.
          </p>
          <p className="text-sm mb-3">
            <strong>AU cards can sometimes be removed from Chase&apos;s calculation.</strong> If you are denied for a Chase card and believe an AU account pushed you over 5/24, call Chase&apos;s reconsideration line (1-888-270-2127) and explain that the account is an authorized user card you had no control over. Many data points from the community confirm this approach works.
          </p>
          <p className="text-sm mb-3">
            <strong>Best practice:</strong> When calculating your own 5/24 count, run the number both ways — with and without AU accounts — so you know your count under either scenario before you apply.
          </p>
          <p className="text-sm">
            The <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker 5/24 tool</Link> includes a toggle to include or exclude authorized user cards from your count, so you can see both numbers at once.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-count-means">
            What Does My 5/24 Number Actually Mean?
          </h2>
          <p className="text-sm mb-4">
            Your 5/24 number is a count of new personal credit card accounts opened in the past 24 months. Here is what each count means for Chase applications:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">5/24 Count</th>
                  <th className="text-left px-4 py-2 font-medium">Chase Personal Card Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">0/24</td><td className="px-4 py-2 text-brand-green font-medium">Fully eligible — 5 slots available</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">1/24</td><td className="px-4 py-2 text-brand-green font-medium">Fully eligible — 4 slots available</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">2/24</td><td className="px-4 py-2 text-brand-green font-medium">Fully eligible — 3 slots available</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">3/24</td><td className="px-4 py-2 text-brand-green font-medium">Eligible — 2 slots remaining, plan carefully</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">4/24</td><td className="px-4 py-2 font-medium" style={{ color: '#D97706' }}>One slot left — save it for highest-value Chase card</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">5/24</td><td className="px-4 py-2 text-brand-red font-medium">Ineligible for Chase personal cards</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">6/24+</td><td className="px-4 py-2 text-brand-red font-medium">Ineligible — wait for oldest cards to age off</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            At 4/24, most experienced churners pause and evaluate carefully before using their last Chase slot. The Sapphire Reserve, World of Hyatt, and Southwest cards are generally considered the highest-value uses of a Chase slot.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="drop-off">
            When Will My 5/24 Count Drop?
          </h2>
          <p className="text-sm mb-3">
            Your count drops by 1 each time a card exits your rolling 24-month window. The exact timing is based on the calendar month of the card&apos;s open date, not the specific day.
          </p>
          <p className="text-sm mb-3">
            <strong>Example:</strong> A card opened on August 14, 2024 exits your 5/24 window at the start of September 2026 — not on August 14, 2026. Chase counts by month, so the effective wait period can be up to 24 months and 30 days.
          </p>
          <p className="text-sm">
            This monthly-rounding detail matters when you are close to dropping under the 5/24 threshold. Applying in the last week of a month when you think you are eligible can still result in a denial if Chase&apos;s calculation has not yet rolled over to the new month. The <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker drop-off calendar</Link> shows the exact month each of your cards exits the 24-month window so you never mistime an application.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="common-mistakes">
            Common Mistakes When Checking 5/24 Status
          </h2>
          <p className="text-sm mb-3">
            <strong>Mistake 1 — Counting hard inquiries instead of account openings</strong><br />
            Hard inquiries and new accounts are different things. A hard inquiry from an application that was denied does not count toward 5/24. Only approved and opened accounts count.
          </p>
          <p className="text-sm mb-3">
            <strong>Mistake 2 — Forgetting store cards</strong><br />
            Retail cards opened at checkout — Target RedCard, Amazon Store Card, Gap Visa — count toward 5/24 just like bank-issued cards. Many people forget these when counting.
          </p>
          <p className="text-sm mb-3">
            <strong>Mistake 3 — Excluding charge cards</strong><br />
            Amex charge cards (Green, Gold, Platinum, Business Platinum) appear on credit reports and count toward 5/24. They are not credit cards in the traditional sense but they do report to bureaus.
          </p>
          <p className="text-sm mb-3">
            <strong>Mistake 4 — Not accounting for authorized user cards</strong><br />
            As covered above, AU cards on your report typically count. If you were added to someone else&apos;s account recently, that may be inflating your count.
          </p>
          <p className="text-sm">
            <strong>Mistake 5 — Using the application date instead of the open date</strong><br />
            Chase counts from the account open date, not the date you applied. For most cards these are the same or very close, but for cards with a processing delay they can differ by several days.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does checking my 5/24 status hurt my credit score?</h3>
              <p className="text-sm">
                No. Checking your own credit report at AnnualCreditReport.com is a soft inquiry and does not affect your score. Using the 524Tracker tool requires no credit pull at all — you simply enter your own card dates manually.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I check my 5/24 status by calling Chase?</h3>
              <p className="text-sm">
                Chase customer service representatives will not tell you your 5/24 count directly. They do not have access to a &ldquo;5/24 counter&rdquo; — the rule is applied algorithmically during the application process. Your credit report is the authoritative source.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">If I am at 5/24, when is the soonest I can apply for a Chase card?</h3>
              <p className="text-sm">
                You need to wait until your oldest qualifying card exits the 24-month window, dropping you to 4/24. Enter your approval dates into the <Link href="/" className="text-brand-gold hover:text-amber-600">524Tracker</Link> to see your next eligible date.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Do Chase cards I already have count toward my 5/24?</h3>
              <p className="text-sm">
                Yes. Every Chase personal card you have been approved for in the past 24 months counts toward your 5/24, the same as any other bank&apos;s personal cards.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What if two of my cards drop off in the same month?</h3>
              <p className="text-sm">
                Your count drops by 2 in that month, potentially moving you from 6/24 to 4/24 in a single calendar flip. The tracker will show multiple drop-offs happening simultaneously when this occurs.
              </p>
            </div>
          </div>
        </section>
      </>
    ),
  },
];

const allPosts: BlogPost[] = [...posts, ...newPosts1to4, ...newPosts5to8, postBestCardsAfter524, postApplicationStrategy];

export function getAllPosts(): BlogPost[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}
