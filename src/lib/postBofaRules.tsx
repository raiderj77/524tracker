import Link from 'next/link';
import type { BlogPost } from './posts';

export const postBofaRules: BlogPost = {
  slug: 'bank-of-america-credit-card-rules',
  title: 'Bank of America Credit Card Rules (2026)',
  description:
    'Bank of America enforces the 2/3/4 velocity rule, Preferred Rewards tiers, and business card limits. Learn every BofA rule and how to plan your applications.',
  keywords:
    'bank of america credit card rules, bofa credit card rules, bank of america 2/3/4 rule, bofa preferred rewards, bofa business card rules, bofa application limits',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  lastUpdated: 'March 16, 2026',
  readTimeMinutes: 7,
  ctaText: 'Track Your BofA Status Free',
  ctaHref: '/card-tracker',
  faqSchema: [
    {
      question: 'Does BofA pull from all three credit bureaus?',
      answer:
        'Bank of America typically pulls from Experian, but may pull from TransUnion or Equifax depending on your state and the card product. Some applicants report pulls from two bureaus on a single application. You can check which bureau BofA uses in your state on credit report tracking forums before applying.',
    },
    {
      question: 'What credit score do you need for BofA cards?',
      answer:
        'Most Bank of America rewards cards require a credit score of 670 or higher for approval. Premium cards like the Premium Rewards and Premium Rewards Elite generally require scores of 720 or above. Having a BofA banking relationship and Preferred Rewards status can improve your approval odds at lower credit scores.',
    },
    {
      question: 'Does the BofA 2/3/4 rule count business cards?',
      answer:
        'Data points are mixed. Most reports suggest that BofA business cards are tracked separately from personal cards for the 2/3/4 rule, but some applicants report business cards affecting personal approvals. To be safe, count both personal and business BofA cards toward your limits and space all applications conservatively.',
    },
    {
      question: 'How long should I wait between BofA applications?',
      answer:
        'The safest spacing is one BofA card every 3 to 4 months. This keeps you comfortably under all three 2/3/4 windows: 2 per 30 days, 3 per 12 months, and 4 per 24 months. Applying more aggressively is possible but increases the risk of automatic denials.',
    },
  ],
  relatedLinks: [
    { href: '/card-tracker', label: 'Track Your BofA 2/3/4 Status' },
    { href: '/blog/bank-of-america-2-3-4-rule', label: 'BofA 2/3/4 Rule: Deep Dive' },
    { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
    { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule Explained' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        Bank of America enforces several application rules that control how many cards you can open and when. The most important is the 2/3/4 velocity rule, which limits you to 2 BofA cards per 30 days, 3 per 12 months, and 4 per 24 months. BofA also rewards existing banking customers through its Preferred Rewards program, which can significantly improve approval odds and card benefits.
      </p>

      {/* Section 1 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="234-rule">
          The BofA 2/3/4 Rule
        </h2>
        <p className="text-sm mb-3">
          The 2/3/4 rule is Bank of America&apos;s core application velocity restriction. It operates across three overlapping time windows that all apply simultaneously. Hitting any single limit can result in an automatic denial.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-brand-light">
                <th className="text-left px-4 py-2 font-medium">Limit</th>
                <th className="text-left px-4 py-2 font-medium">Max Cards</th>
                <th className="text-left px-4 py-2 font-medium">Time Window</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">2/30</td>
                <td className="px-4 py-2">2 BofA cards</td>
                <td className="px-4 py-2">Rolling 30 days</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">3/12</td>
                <td className="px-4 py-2">3 BofA cards</td>
                <td className="px-4 py-2">Rolling 12 months</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">4/24</td>
                <td className="px-4 py-2">4 BofA cards</td>
                <td className="px-4 py-2">Rolling 24 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          Unlike Chase 5/24, the BofA 2/3/4 rule counts only Bank of America cards — cards from other issuers do not count toward these limits. However, BofA still reviews your overall credit profile, so a high volume of recent applications at other banks can lead to separate denial reasons like &ldquo;too many recent inquiries.&rdquo;
        </p>
        <p className="text-sm">
          For a detailed breakdown of each window and how to calculate your exact eligibility dates, see the{' '}
          <Link href="/blog/bank-of-america-2-3-4-rule" className="text-brand-gold hover:text-amber-600 font-medium">BofA 2/3/4 rule deep dive</Link>.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="preferred-rewards">
          BofA Preferred Rewards
        </h2>
        <p className="text-sm mb-3">
          Bank of America&apos;s Preferred Rewards program is one of the most significant factors in both card approval odds and ongoing card value. The program rewards customers who maintain combined balances across BofA checking, savings, and Merrill investment accounts.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-brand-light">
                <th className="text-left px-4 py-2 font-medium">Tier</th>
                <th className="text-left px-4 py-2 font-medium">Balance Required</th>
                <th className="text-left px-4 py-2 font-medium">Rewards Boost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">Gold</td>
                <td className="px-4 py-2">$20,000+</td>
                <td className="px-4 py-2">25% bonus on card rewards</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">Platinum</td>
                <td className="px-4 py-2">$50,000+</td>
                <td className="px-4 py-2">50% bonus on card rewards</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">Platinum Honors</td>
                <td className="px-4 py-2">$100,000+</td>
                <td className="px-4 py-2">75% bonus on card rewards</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          The rewards boost applies to all BofA cards, making cards like the Customized Cash Rewards significantly more valuable at higher tiers. A Platinum Honors member earning 3% cash back on a chosen category effectively earns 5.25% — among the highest flat rates available.
        </p>
        <p className="text-sm">
          Beyond rewards, Preferred Rewards members consistently report stronger approval odds when applying for BofA cards, even when approaching the 2/3/4 velocity limits. An existing banking relationship signals loyalty and reduces risk from BofA&apos;s perspective.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="lifetime-rule">
          Does BofA Have a Lifetime Bonus Rule?
        </h2>
        <p className="text-sm mb-3">
          Bank of America does not have a formal once-per-lifetime bonus restriction like American Express. You may be eligible to earn the welcome bonus on the same BofA card product more than once, provided you close the card first and wait before reapplying.
        </p>
        <p className="text-sm mb-3">
          Community data points suggest a waiting period of approximately 24 months after closing a BofA card before you can earn its welcome bonus again. This is a soft guideline based on applicant reports, not an officially published policy.
        </p>
        <p className="text-sm">
          This is a significant advantage over Amex, where each bonus is truly a one-time opportunity. With BofA, patients applicants can potentially cycle through the same cards over multiple years, earning the bonus each time as long as they respect the waiting period and the 2/3/4 velocity limits.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="business-cards">
          BofA Business Card Rules
        </h2>
        <p className="text-sm mb-3">
          Bank of America offers a smaller business card lineup compared to Chase or Amex, but the cards available — particularly the Business Advantage Customized Cash Rewards — can be strong choices for small business spending.
        </p>
        <p className="text-sm mb-3">
          Most data points suggest that BofA business cards are tracked separately from personal cards for 2/3/4 purposes. Opening a business card does not appear to count against your personal card velocity limits. However, some applicants report business card openings affecting subsequent personal card approvals, so the separation may not be absolute.
        </p>
        <p className="text-sm">
          BofA business cards do not report to personal credit bureaus in most cases, which means they do not count toward Chase 5/24. This makes them a safe option for keeping your 5/24 count low while still earning BofA business card bonuses.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="comparison">
          How BofA Rules Compare to Chase and Citi
        </h2>
        <p className="text-sm mb-4">
          Each major issuer has different application velocity rules. Understanding how they interact is essential for sequencing applications across banks.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-brand-light">
                <th className="text-left px-4 py-2 font-medium">Feature</th>
                <th className="text-left px-4 py-2 font-medium">Chase 5/24</th>
                <th className="text-left px-4 py-2 font-medium">Citi 8/65</th>
                <th className="text-left px-4 py-2 font-medium">BofA 2/3/4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Counts cards from</td><td className="px-4 py-2">All banks</td><td className="px-4 py-2">Citi only</td><td className="px-4 py-2">BofA only</td></tr>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Time windows</td><td className="px-4 py-2">24 months</td><td className="px-4 py-2">8 days / 65 days</td><td className="px-4 py-2">30 days / 12 mo / 24 mo</td></tr>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Max cards</td><td className="px-4 py-2">5 (all banks)</td><td className="px-4 py-2">1 per 8d, 2 per 65d</td><td className="px-4 py-2">2 / 3 / 4</td></tr>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Business cards count?</td><td className="px-4 py-2">Usually no</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">Possibly separate</td></tr>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Lifetime bonus?</td><td className="px-4 py-2">48-mo (Sapphire)</td><td className="px-4 py-2">24-month reset</td><td className="px-4 py-2">~24-month soft reset</td></tr>
              <tr className="border-t border-gray-100"><td className="px-4 py-2">Banking relationship helps?</td><td className="px-4 py-2">Somewhat</td><td className="px-4 py-2">Minimal</td><td className="px-4 py-2 text-brand-green font-medium">Significantly</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          The standard sequencing strategy is to prioritize Chase cards first (since every personal card counts toward 5/24), then move to Citi and BofA once you are over 5/24. BofA is particularly attractive after 5/24 because the cards are not affected by your Chase count and the Preferred Rewards boost makes the ongoing earn rates competitive. See the{' '}
          <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600 font-medium">complete bank rules guide</Link>{' '}
          for a full sequencing framework.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="track-status">
          How to Track Your BofA Status
        </h2>
        <p className="text-sm mb-3">
          To check your 2/3/4 status, count how many Bank of America credit cards you have opened in the last 30 days, 12 months, and 24 months. Your BofA account history shows current and closed cards. You can also pull your credit report from AnnualCreditReport.com and search for BofA account open dates.
        </p>
        <p className="text-sm mb-3">
          Use the{' '}
          <Link href="/card-tracker" className="text-brand-gold hover:text-amber-600 font-medium">524Tracker card tracker</Link>{' '}
          to log your application history and automatically calculate your status across all three BofA windows. The tool shows your current counts, how close you are to each limit, and exactly when your next slot opens. All data stays in your browser.
        </p>
        <p className="text-sm">
          Before applying, verify your Preferred Rewards tier by checking your BofA account dashboard. Higher tiers may improve your approval odds and make even basic BofA cards significantly more rewarding.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-sm text-brand-navy mb-1">
              Does BofA pull from all three credit bureaus?
            </h3>
            <p className="text-sm">
              Bank of America typically pulls from Experian, but may pull from TransUnion or Equifax depending on your state and the card product. Some applicants report pulls from two bureaus on a single application. Check which bureau BofA uses in your state before applying if you want to manage your inquiry exposure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-brand-navy mb-1">
              What credit score do you need for BofA cards?
            </h3>
            <p className="text-sm">
              Most BofA rewards cards require a credit score of 670 or higher. Premium cards like the Premium Rewards and Premium Rewards Elite generally require 720 or above. A BofA banking relationship and Preferred Rewards status can improve approval odds at lower scores.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-brand-navy mb-1">
              Does the BofA 2/3/4 rule count business cards?
            </h3>
            <p className="text-sm">
              Data points are mixed. Most reports suggest business cards are tracked separately, but some applicants report business openings affecting personal card approvals. The safer approach is to count both types toward your limits when planning applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-brand-navy mb-1">
              How long should I wait between BofA applications?
            </h3>
            <p className="text-sm">
              One BofA card every 3 to 4 months is the safest cadence. This keeps you comfortably under 2/30, 3/12, and 4/24 simultaneously. You can apply more aggressively — up to 2 in one 30-day burst — but this uses your slots faster and leaves less room for error.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-xs text-amber-900 leading-relaxed">
          <strong>Disclaimer:</strong> Credit card terms and approval rules change frequently. Always verify current rules directly with the card issuer before applying. This is not financial advice.
        </p>
      </div>
    </>
  ),
};
