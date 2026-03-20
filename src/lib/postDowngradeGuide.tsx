import Link from 'next/link';
import type { BlogPost } from './posts';

export const postDowngradeGuide: BlogPost = {
  slug: 'credit-card-downgrade-guide-2026',
  title: "When and How to Downgrade a Credit Card in 2026 (Without Losing Points)",
  description:
    "The complete guide to credit card product changes — when to downgrade vs cancel, how points transfer, timing rules by issuer, and every major downgrade path.",
  keywords:
    'credit card downgrade guide, how to downgrade credit card, product change credit card, downgrade chase sapphire, downgrade amex platinum',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 9,
  ctaText: 'Find Your Downgrade Path',
  ctaHref: '/downgrade-guide',
  faqSchema: [
    {
      question: 'Do I lose my credit limit when downgrading a credit card?',
      answer:
        'No. When you product change (downgrade) a credit card, your credit limit transfers to the new card. Your account number usually stays the same as well. The issuer treats it as the same account with different product terms, so your available credit and account age are preserved.',
    },
    {
      question: 'Can I downgrade a card and then upgrade back to the premium version later?',
      answer:
        'Yes, most issuers allow you to upgrade back to the premium version after a product change. However, upgrading back does not earn a new welcome bonus. If the welcome bonus is valuable, it is usually better to apply for a new card rather than upgrading an existing one.',
    },
    {
      question: 'Does downgrading a credit card affect my credit score?',
      answer:
        'Downgrading (product changing) a credit card does not directly affect your credit score. The account remains open with the same age and credit limit. Unlike canceling, a product change does not reduce your total available credit or shorten your average account age.',
    },
  ],
  relatedLinks: [
    { href: '/downgrade-guide', label: 'Interactive Downgrade Guide Tool' },
    { href: '/annual-fee-calculator', label: 'Annual Fee Calculator' },
    { href: '/blog/is-chase-sapphire-reserve-worth-it-2026', label: 'Is the Chase Sapphire Reserve Worth It?' },
    { href: '/blog/is-amex-platinum-worth-it-2026', label: 'Is the Amex Platinum Worth It?' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        A credit card product change (downgrade) lets you switch to a lower-tier card from the same issuer
        without closing your account. Your credit limit, account age, and often your account number stay
        the same. In most cases, downgrading is better than canceling because it preserves your credit
        history and available credit. The key exception is when you plan to reapply for the same card&apos;s
        welcome bonus &mdash; in that case, canceling and waiting out the bonus restriction period may be
        the better move.
      </p>

      {/* When to Downgrade vs Cancel */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="downgrade-vs-cancel">
          When to Downgrade vs. Cancel
        </h2>
        <p className="text-sm mb-3">
          The decision between downgrading and canceling comes down to two factors: whether you want the
          welcome bonus again someday, and whether the issuer&apos;s bonus rules treat downgrades and
          cancellations differently.
        </p>
        <p className="text-sm mb-3">
          <strong>Downgrade when:</strong>
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You want to keep the account open for credit score purposes.</strong> Long account age and high total credit limits both help your score. A product change preserves both.</li>
          <li><strong>You do not plan to reapply for the welcome bonus.</strong> If you have no interest in earning the bonus again (or the issuer has a once-per-lifetime rule like Amex), downgrading costs you nothing strategically.</li>
          <li><strong>You have points on the account.</strong> Some issuers (like Chase) require you to have an eligible card to hold certain points. Downgrading to a no-fee card in the same family keeps your points accessible.</li>
          <li><strong>You want to avoid the Citi clock reset trap.</strong> If you are within 48 months of your last Citi bonus, closing restarts the clock. Keeping the card open (even downgraded) avoids this penalty.</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Cancel when:</strong>
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You plan to reapply for the welcome bonus.</strong> Most issuers require that you do not currently hold the card (or a card in the same family) to be eligible for a new welcome bonus. Canceling is the only way to clear this restriction.</li>
          <li><strong>The issuer does not have a no-fee downgrade option.</strong> Some card families have no fee-free tier to downgrade to, making cancellation the only way to stop paying the annual fee.</li>
          <li><strong>The account is relatively new.</strong> If the card is only 1&ndash;2 years old, the credit history benefit of keeping it open is minimal. The strategic value of a future welcome bonus may outweigh the small credit score impact of closing.</li>
        </ul>
      </section>

      {/* How to Request */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-to-request">
          How to Request a Product Change
        </h2>
        <p className="text-sm mb-3">
          The process for requesting a product change is straightforward, though it varies slightly by issuer:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Chase:</strong> Call the number on the back of your card or send a secure message through the Chase app or website. Ask for a &ldquo;product change&rdquo; to a specific card. Chase representatives are generally familiar with available options and will walk you through eligible downgrades.</li>
          <li><strong>Amex:</strong> Call the Membership Services number on your card. Amex may also display upgrade or downgrade options in your online account under &ldquo;Account Services.&rdquo; Some product changes can be initiated through chat.</li>
          <li><strong>Capital One:</strong> Call customer service or check the Capital One app for product change options. Capital One has historically been flexible with changes within the Venture family.</li>
          <li><strong>Citi:</strong> Call the number on your card. Citi product changes sometimes require persistence &mdash; if the first representative says it is not possible, try calling back or asking for a supervisor.</li>
          <li><strong>Bank of America:</strong> Call customer service. BofA allows product changes between most of their personal card products, though some changes may require a waiting period.</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Timing tip:</strong> Request the product change shortly before your annual fee posts (usually
          within the first month of your cardmember year). Most issuers will refund the annual fee if you
          downgrade within 30&ndash;41 days of it being charged. Do not wait until the fee has been on your
          statement for months &mdash; the refund window varies by issuer and is not always generous.
        </p>
      </section>

      {/* Points During PC */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="points-during-product-change">
          What Happens to Your Points During a Product Change
        </h2>
        <p className="text-sm mb-3">
          Points behavior during a product change depends entirely on the issuer and the specific cards
          involved. Here is what to expect:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Chase Ultimate Rewards:</strong> Points transfer to the new card. If you downgrade from a Sapphire Reserve to a Freedom Flex, your UR points move to the Freedom. However, without a Sapphire or Ink Preferred card, you lose the ability to transfer points to airline/hotel partners. You can still use them for cash back at 1 cent each. If you have another Sapphire or Ink Preferred, you can move points there first.</li>
          <li><strong>Amex Membership Rewards:</strong> Points stay in your MR account as long as you have at least one MR-earning card. If you downgrade your last MR card (like the Platinum) to a non-MR card (like the Amex Green with a different earning structure), you may lose access to your MR points. Always ensure you have another MR-earning card before downgrading.</li>
          <li><strong>Capital One Miles:</strong> Miles transfer to the new card seamlessly. Downgrading from Venture X to VentureOne keeps all your miles intact and accessible.</li>
          <li><strong>Citi ThankYou Points:</strong> Points transfer with the product change. The key concern is whether the new card allows the same transfer partners and redemption options.</li>
          <li><strong>Co-branded cards (airline/hotel):</strong> Points that have already posted to the airline or hotel loyalty program are not affected by product changes. They live in the loyalty program account, not on the credit card.</li>
        </ul>
        <p className="text-sm mb-3">
          Use our{' '}
          <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
            Annual Fee Calculator
          </Link>{' '}
          to determine whether the annual fee is worth paying or if a downgrade makes financial sense.
        </p>
      </section>

      {/* Timing Rules by Issuer */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="timing-rules">
          Timing Rules by Issuer
        </h2>
        <p className="text-sm mb-3">
          Each issuer has different policies on when you can product change and how soon after a product
          change you can make another change or apply for a new card.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Issuer</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Minimum Hold Before PC</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Fee Refund Window</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Chase</td>
                <td className="px-4 py-2">12 months</td>
                <td className="px-4 py-2">30&ndash;41 days</td>
                <td className="px-4 py-2">Must hold card 12 months before downgrade</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Amex</td>
                <td className="px-4 py-2">12 months</td>
                <td className="px-4 py-2">30 days</td>
                <td className="px-4 py-2">Some PCs available online; retention offers may appear</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Capital One</td>
                <td className="px-4 py-2">12 months (typical)</td>
                <td className="px-4 py-2">30 days</td>
                <td className="px-4 py-2">Flexible within Venture family</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Citi</td>
                <td className="px-4 py-2">12 months</td>
                <td className="px-4 py-2">30 days</td>
                <td className="px-4 py-2">Closing resets 48-month bonus clock</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Bank of America</td>
                <td className="px-4 py-2">12 months</td>
                <td className="px-4 py-2">30 days</td>
                <td className="px-4 py-2">May require patience with customer service</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          The 12-month minimum is not always a hard rule, but attempting a product change before 12 months
          often results in denial. Some issuers may also flag accounts for early product changes, especially
          if paired with recent welcome bonus earnings. The safest practice is to hold any card at least
          12 months before requesting a change.
        </p>
      </section>

      {/* Major Downgrade Paths */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="downgrade-paths">
          Major Downgrade Paths by Issuer
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Chase Downgrade Paths
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Sapphire Reserve → Sapphire Preferred → Freedom Flex or Freedom Unlimited:</strong> The most common Chase downgrade path. Going to a Freedom card eliminates the annual fee while keeping the account open. Points remain as UR and can be transferred to another Sapphire card if you have one.</li>
          <li><strong>United Explorer → United Gateway (no annual fee):</strong> Keeps your United relationship alive. You lose the free checked bag and lounge passes but keep the account age.</li>
          <li><strong>Southwest Priority → Southwest Plus:</strong> Reduces the annual fee from $149 to $69 while keeping Southwest earning ability. Anniversary points drop from 7,500 to 3,000.</li>
          <li><strong>World of Hyatt → no downgrade available:</strong> The Hyatt card does not have a no-fee version. Your options are to keep it, cancel it, or product change to a different Chase Visa (not Hyatt-branded).</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Amex Downgrade Paths
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Platinum → Amex Green ($150 annual fee):</strong> Reduces the fee significantly while keeping MR earning. Note that the Green still has an annual fee &mdash; Amex charge cards do not have a true no-fee option in the MR family.</li>
          <li><strong>Amex Gold → Amex Green:</strong> Similar to above. Reduces fees while staying in the MR ecosystem.</li>
          <li><strong>Blue Cash Preferred → Blue Cash Everyday (no annual fee):</strong> The simplest Amex downgrade. Earning rates drop (6% groceries becomes 3%) but you eliminate the $95 annual fee.</li>
          <li><strong>Hilton Surpass → Hilton Honors (no annual fee):</strong> Keeps the Hilton earning relationship at zero cost. You lose the free night certificate and Gold status.</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Capital One Downgrade Paths
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Venture X → Venture → VentureOne (no annual fee):</strong> The cleanest downgrade path among all issuers. Three tiers with a no-fee floor. Miles stay intact through each change.</li>
          <li><strong>Savor → SavorOne (no annual fee):</strong> Drops from 4% to 3% on dining but eliminates the annual fee. A good move if you do not spend enough on dining to justify the Savor&apos;s fee.</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Citi Downgrade Paths
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Citi Strata Premier → Citi Double Cash (no annual fee):</strong> Moves you to a 2% everywhere card at no cost. ThankYou points from the Premier transfer to the Double Cash account. This is the most popular Citi downgrade.</li>
          <li><strong>Citi AAdvantage Executive → Citi AAdvantage Platinum Select:</strong> Drops the massive annual fee while keeping AAdvantage earning. You lose Admirals Club access.</li>
          <li><strong>Important:</strong> Remember the Citi 48-month clock reset trap. If you are within 48 months of your last bonus, downgrade rather than cancel to avoid resetting the clock.</li>
        </ul>
        <p className="text-sm mb-3">
          Find your specific downgrade path with our{' '}
          <Link href="/downgrade-guide" className="text-brand-gold hover:text-amber-600 font-semibold">
            Interactive Downgrade Guide Tool
          </Link>.
        </p>
      </section>

      {/* When Canceling Is Better */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-canceling-is-better">
          When Canceling Is the Better Choice
        </h2>
        <p className="text-sm mb-3">
          Despite the general preference for downgrading, there are scenarios where canceling a card
          outright is the smarter move:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You want to reapply for the welcome bonus.</strong> Chase, Citi, and Bank of America all have bonus restriction windows (48 months for Chase Sapphire, 48 months for Citi, 24 months for BofA). To be eligible for a new bonus, you typically cannot hold the card. Cancel, wait out the restriction period, then reapply for a fresh bonus.</li>
          <li><strong>The card has no downgrade path.</strong> Some cards, like the Chase World of Hyatt, do not have a lower-tier version in the same brand. Your options are to cancel or product change to an unrelated Chase card.</li>
          <li><strong>You have too many accounts with the issuer.</strong> Some issuers consider your total number of open accounts when evaluating new applications. If you are bumping against Capital One&apos;s 2-card limit, closing an account may be necessary to open a new one.</li>
          <li><strong>Annual fee retention offer is not worth it.</strong> Before canceling, always call and ask for a retention offer. Issuers often provide statement credits or bonus points to keep you. If the offer does not make the math work, proceed with cancellation.</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Always call for a retention offer first.</strong> Even if you are planning to cancel, call
          the issuer and say you are considering closing due to the annual fee. Many issuers will offer
          statement credits ($50&ndash;$200), bonus points (5,000&ndash;25,000 points), or reduced annual
          fees to keep you. These offers can make keeping or downgrading the card worthwhile even when you
          initially planned to cancel.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Do I lose my credit limit when downgrading a credit card?
        </h3>
        <p className="text-sm mb-4">
          No. When you product change (downgrade) a credit card, your credit limit transfers to the new
          card. Your account number usually stays the same as well. The issuer treats it as the same account
          with different product terms, so your available credit and account age are preserved.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Can I downgrade a card and then upgrade back to the premium version later?
        </h3>
        <p className="text-sm mb-4">
          Yes, most issuers allow you to upgrade back to the premium version after a product change.
          However, upgrading back does not earn a new welcome bonus. If the welcome bonus is valuable, it
          is usually better to apply for a new card rather than upgrading an existing one.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Does downgrading a credit card affect my credit score?
        </h3>
        <p className="text-sm mb-4">
          Downgrading (product changing) a credit card does not directly affect your credit score. The
          account remains open with the same age and credit limit. Unlike canceling, a product change does
          not reduce your total available credit or shorten your average account age.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice. Credit card
          approval decisions and product change availability are determined solely by the issuing bank. We
          cannot guarantee that specific downgrade paths will be available. Rules change frequently &mdash;
          always verify current options directly with your card issuer before requesting a product change.
          Last verified: March 2026.
        </p>
      </div>
    </>
  ),
};
