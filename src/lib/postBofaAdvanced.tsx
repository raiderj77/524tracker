import Link from 'next/link';
import type { BlogPost } from './posts';

export const postBofaAdvanced: BlogPost = {
  slug: 'bank-of-america-7-12-rule-preferred-rewards',
  title: 'Bank of America 7/12 Rule and Preferred Rewards: Advanced BofA Strategies',
  description:
    'Beyond 2/3/4 — the BofA 7/12 cross-issuer rule, how Preferred Rewards status helps approvals, Alaska companion fare strategy, and maximizing BofA card value.',
  keywords:
    'bank of america 7/12 rule, bofa preferred rewards, bank of america application strategy, alaska companion fare, bofa advanced rules',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 8,
  ctaText: 'Check Your BofA Eligibility',
  ctaHref: '/velocity-checker',
  faqSchema: [
    {
      question: 'What is Bank of America Preferred Rewards?',
      answer:
        'Preferred Rewards is a loyalty program that rewards BofA customers based on their combined balance across Bank of America banking and Merrill investment accounts. Tiers start at $20,000 (Gold), $50,000 (Platinum), and $100,000 (Platinum Honors). Benefits include boosted credit card rewards, reduced loan rates, and fee waivers.',
    },
    {
      question: 'How does the Alaska Airlines companion fare work?',
      answer:
        'The Alaska Airlines Visa Signature card includes an annual companion fare that lets you buy one ticket on Alaska Airlines and bring a companion for just the cost of taxes and fees (typically $100 to $150). The companion fare is issued each year on your card anniversary and is valid for coach travel on Alaska-operated flights.',
    },
    {
      question: 'Can I re-earn Bank of America welcome bonuses?',
      answer:
        'Yes. Bank of America allows you to earn welcome bonuses on cards you have previously held, as long as you closed the original account and wait the required period before reapplying. BofA does not enforce an Amex-style once-per-lifetime restriction. The typical waiting period is 24 months from when you closed the account.',
    },
  ],
  relatedLinks: [
    { href: '/velocity-checker', label: 'Velocity Checker Tool' },
    { href: '/blog/bank-of-america-2-3-4-rule-explained', label: 'BofA 2/3/4 Rule Explained' },
    { href: '/credit-pull-database', label: 'Credit Pull Database' },
    { href: '/annual-fee-calculator', label: 'Annual Fee Calculator' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        Beyond the well-known 2/3/4 rule, Bank of America enforces a 7/12 cross-issuer rule: applicants with 7 or
        more new credit card accounts from any bank in the past 12 months face near-automatic denial. Preferred
        Rewards status (starting at $20,000 in combined BofA/Merrill balances) significantly improves approval odds
        and boosts card rewards by up to 75%. The Alaska Airlines companion fare is one of the highest-value card
        perks available, and BofA&apos;s bonus re-earning policy is more generous than Chase or Amex, allowing
        repeat welcome bonuses after closing and waiting.
      </p>

      {/* The 7/12 Cross-Issuer Rule */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="7-12-cross-issuer-rule">
          The 7/12 Cross-Issuer Rule
        </h2>
        <p className="text-sm mb-3">
          Most BofA strategy guides focus on the 2/3/4 rule: a maximum of 2 new Bank of America cards per 30 days,
          3 per 12 months, and 4 per 24 months. But there is a lesser-known rule that trips up even experienced
          applicants: the <strong>7/12 cross-issuer rule</strong>.
        </p>
        <p className="text-sm mb-3">
          Bank of America tracks not just your BofA account openings but your total new credit card accounts across
          all issuers. If you have opened 7 or more new credit card accounts from any combination of banks in the
          past 12 months, BofA is very likely to deny your application &mdash; even if you are well within the
          2/3/4 limits for BofA-specific cards.
        </p>
        <p className="text-sm mb-3">
          This rule is particularly important for aggressive applicants who may be comfortably under the 2/3/4
          BofA-specific thresholds but have been applying heavily at Chase, Amex, Citi, and other issuers. You could
          have zero BofA cards and still get denied if your total new-account count across all banks exceeds 7 in the
          past 12 months.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          How to Track Your 7/12 Count
        </h3>
        <p className="text-sm mb-3">
          Your 7/12 count includes every new personal credit card account opened at any bank within the trailing 12
          months. Business cards that do not report to personal credit bureaus are generally excluded. To check your
          count, pull your credit report and count all accounts with an open date within the last 12 months, or use
          our{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Velocity Checker
          </Link>{' '}
          to calculate it automatically.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Combining 7/12 with 2/3/4
        </h3>
        <p className="text-sm mb-3">
          Both rules must be satisfied simultaneously. You need to be under 7 total new accounts in 12 months
          (across all banks) <em>and</em> under the 2/3/4 limits for BofA-specific cards. Here is a quick reference:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>2/30:</strong> No more than 2 new BofA cards in the past 30 days</li>
          <li><strong>3/12:</strong> No more than 3 new BofA cards in the past 12 months</li>
          <li><strong>4/24:</strong> No more than 4 new BofA cards in the past 24 months</li>
          <li><strong>7/12:</strong> No more than 7 new cards from any bank in the past 12 months</li>
        </ul>
        <p className="text-sm mb-3">
          The 7/12 rule makes BofA one of the more restrictive issuers for heavy applicants. If you are applying for
          cards at a pace of one per month or faster, you will hit 7/12 before you exhaust the 2/3/4 limits.
        </p>
      </section>

      {/* Preferred Rewards */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="preferred-rewards">
          Preferred Rewards: The Approval Advantage
        </h2>
        <p className="text-sm mb-3">
          Bank of America&apos;s Preferred Rewards program is one of the most impactful loyalty programs offered by
          any credit card issuer. It rewards customers who maintain combined balances across Bank of America banking
          accounts and Merrill Lynch investment accounts. The program has three tiers:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Tier</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Combined Balance</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Rewards Boost</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Key Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Gold</td>
                <td className="px-4 py-2">$20,000+</td>
                <td className="px-4 py-2">25% bonus</td>
                <td className="px-4 py-2">No-fee banking, boosted rewards</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Platinum</td>
                <td className="px-4 py-2">$50,000+</td>
                <td className="px-4 py-2">50% bonus</td>
                <td className="px-4 py-2">Reduced loan rates, priority service</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Platinum Honors</td>
                <td className="px-4 py-2">$100,000+</td>
                <td className="px-4 py-2">75% bonus</td>
                <td className="px-4 py-2">Maximum rewards boost, top-tier service</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          How Preferred Rewards Boosts Card Value
        </h3>
        <p className="text-sm mb-3">
          The rewards boost applies to all BofA credit card earnings. For the Premium Rewards card, which normally
          earns 2 points per dollar on travel and dining and 1.5 points on everything else, Platinum Honors status
          transforms those rates dramatically:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Travel and dining:</strong> 2x base &times; 1.75 boost = 3.5 points per dollar</li>
          <li><strong>Everything else:</strong> 1.5x base &times; 1.75 boost = 2.625 points per dollar</li>
        </ul>
        <p className="text-sm mb-3">
          A 2.625% return on all non-category spending is one of the highest flat-rate earning opportunities available
          from any issuer. With the Customized Cash Rewards card, which earns 3% in a chosen category, Platinum Honors
          boosts that to an effective 5.25% &mdash; significantly outperforming most category-specific cards.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Preferred Rewards and Approval Odds
        </h3>
        <p className="text-sm mb-3">
          Beyond the rewards boost, Preferred Rewards status appears to help with credit card approval decisions.
          Data points suggest that applicants with Preferred Rewards &mdash; particularly at the Platinum and
          Platinum Honors tiers &mdash; have higher approval rates, even when they are closer to the 7/12 or 2/3/4
          thresholds. BofA values its deposit and investment customers and appears to extend more favorable treatment
          to them in credit decisions.
        </p>
        <p className="text-sm mb-3">
          If Bank of America cards are part of your long-term strategy, establishing a Preferred Rewards relationship
          is one of the most impactful moves you can make. Even the Gold tier ($20,000 combined balance) provides
          meaningful benefits.
        </p>
      </section>

      {/* Alaska Companion Fare */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="alaska-companion-fare">
          Alaska Airlines Companion Fare Strategy
        </h2>
        <p className="text-sm mb-3">
          The Alaska Airlines Visa Signature card, issued by Bank of America, includes one of the most valuable
          annual perks in the credit card world: the companion fare. Here is how it works and how to maximize its
          value.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          How the Companion Fare Works
        </h3>
        <p className="text-sm mb-3">
          Each year on your card anniversary, Alaska Airlines issues a companion fare code to your Mileage Plan
          account. This code lets you buy one Alaska Airlines ticket at the regular price and add a companion for
          just the taxes and fees &mdash; typically $100 to $150 for a domestic round trip. The companion fare is
          valid for coach travel on Alaska Airlines-operated flights (not partner airlines).
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Maximizing Companion Fare Value
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Book expensive routes:</strong> The companion fare saves the most money on expensive routes. A $500+ one-way flight means $500+ in savings for the companion. Popular routes like Seattle to Hawaii, West Coast to Alaska, and transcontinental flights tend to offer the highest savings.</li>
          <li><strong>Book early for best availability:</strong> Companion fare availability is tied to regular coach fare availability. The earlier you book, the more likely your preferred flights will be available for the companion fare.</li>
          <li><strong>Use for holiday travel:</strong> The companion fare works even on peak-pricing dates, making it especially valuable during Thanksgiving, Christmas, and summer travel when fares are highest.</li>
          <li><strong>Multiple cards, multiple fares:</strong> BofA allows you to hold multiple Alaska Airlines cards. Each card generates its own annual companion fare. Holding two cards means two companion fares per year.</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The Annual Fee Math
        </h3>
        <p className="text-sm mb-3">
          The Alaska Airlines Visa Signature has a $95 annual fee. If you use the companion fare on even a moderately
          priced route (saving $300+), the card pays for itself nearly three times over from the companion fare alone.
          Add in the free checked bag (saving $35 per round trip for you and up to 6 travel companions on the same
          reservation) and 3x miles on Alaska purchases, and the Alaska card is one of the easiest annual fees to
          justify.
        </p>
        <p className="text-sm mb-3">
          Use our{' '}
          <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
            Annual Fee Calculator
          </Link>{' '}
          to see exactly how the Alaska card&apos;s value stacks up against its annual fee based on your travel
          patterns.
        </p>
      </section>

      {/* Bonus Re-Earning */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="bonus-re-earning">
          BofA Bonus Re-Earning: More Generous Than You Think
        </h2>
        <p className="text-sm mb-3">
          One of Bank of America&apos;s most overlooked advantages is its relatively generous bonus re-earning policy.
          Unlike Amex (once-per-lifetime) or Chase (48-month Sapphire restriction), BofA allows you to earn welcome
          bonuses on cards you have previously held, as long as you meet certain conditions.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The Re-Earning Rules
        </h3>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Close the existing card first:</strong> You must close your current account before applying for the same card again. You cannot hold two of the same card simultaneously.</li>
          <li><strong>Wait 24 months:</strong> The standard waiting period is 24 months from when you closed the previous account. Some data points suggest shorter waits may work, but 24 months is the safe guideline.</li>
          <li><strong>Check the application terms:</strong> Always read the fine print on the application page to verify current bonus eligibility language. BofA updates these terms periodically.</li>
          <li><strong>2/3/4 and 7/12 still apply:</strong> Even when re-applying for a previously held card, you must still be within the velocity limits. The re-earning policy does not exempt you from application rules.</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Strategic Re-Earning Cycle
        </h3>
        <p className="text-sm mb-3">
          The re-earning policy makes BofA cards particularly attractive for long-term cycling. Here is an example
          cycle for the Alaska Airlines card:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Year 1:</strong> Open Alaska card, earn welcome bonus, use companion fare</li>
          <li><strong>Year 2:</strong> Pay second annual fee, use companion fare, close card after anniversary</li>
          <li><strong>Year 3-4:</strong> Wait 24 months from closure date</li>
          <li><strong>Year 4-5:</strong> Reapply for Alaska card, earn welcome bonus again</li>
        </ul>
        <p className="text-sm mb-3">
          This cycle generates a welcome bonus roughly every 3 to 4 years, plus companion fares during the years you
          hold the card. Compare this to Amex, where you can only earn each welcome bonus once in your lifetime, and
          the BofA advantage becomes clear.
        </p>
      </section>

      {/* Best BofA Cards to Target */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="best-bofa-cards">
          Best BofA Cards to Target
        </h2>
        <p className="text-sm mb-3">
          With the 7/12 rule, Preferred Rewards, and bonus re-earning in mind, here are the BofA cards that deliver
          the most value for strategic applicants:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Alaska Airlines Visa Signature:</strong> The companion fare alone makes this a must-have for anyone who flies Alaska even once a year. Multiple cards mean multiple companion fares. Re-earnable bonus adds long-term value.</li>
          <li><strong>Premium Rewards:</strong> With Preferred Rewards Platinum Honors, this becomes a 2.625% flat-rate card on everything &mdash; one of the best non-category earning rates available anywhere. The $95 annual fee is easily justified.</li>
          <li><strong>Customized Cash Rewards:</strong> Choose your own 3% category (online shopping, dining, gas, travel, drugstores, or home improvement). With Platinum Honors, that jumps to 5.25%. No annual fee. You can hold multiple of these with different categories selected.</li>
          <li><strong>Unlimited Cash Rewards:</strong> A 1.5% flat cash-back card with no annual fee. With Platinum Honors, that becomes 2.625% &mdash; matching the Premium Rewards card&apos;s non-category rate but without the annual fee. A strong everyday card for Preferred Rewards members.</li>
        </ul>
        <p className="text-sm mb-3">
          The key insight is that BofA cards become dramatically more valuable when paired with Preferred Rewards
          status. Without it, BofA cards are competitive but not exceptional. With Platinum Honors, they are among
          the best earning cards in the market. Plan your BofA strategy around establishing a Preferred Rewards
          relationship first, then applying for cards that benefit from the boost.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          What is Bank of America Preferred Rewards?
        </h3>
        <p className="text-sm mb-4">
          Preferred Rewards is a loyalty program that rewards BofA customers based on their combined balance across
          Bank of America banking and Merrill investment accounts. Tiers start at $20,000 (Gold), $50,000 (Platinum),
          and $100,000 (Platinum Honors). Benefits include boosted credit card rewards, reduced loan rates, and fee
          waivers.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          How does the Alaska Airlines companion fare work?
        </h3>
        <p className="text-sm mb-4">
          The Alaska Airlines Visa Signature card includes an annual companion fare that lets you buy one ticket on
          Alaska Airlines and bring a companion for just the cost of taxes and fees (typically $100 to $150). The
          companion fare is issued each year on your card anniversary and is valid for coach travel on
          Alaska-operated flights.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Can I re-earn Bank of America welcome bonuses?
        </h3>
        <p className="text-sm mb-4">
          Yes. Bank of America allows you to earn welcome bonuses on cards you have previously held, as long as you
          closed the original account and wait the required period before reapplying. BofA does not enforce an
          Amex-style once-per-lifetime restriction. The typical waiting period is 24 months from when you closed
          the account.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice. Credit card approval
          decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility. Rules may
          change at any time &mdash; last verified March 2026.
        </p>
      </div>
    </>
  ),
};
