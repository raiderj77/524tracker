import Link from 'next/link';
import type { BlogPost } from './posts';

export const postAmexGoldWorthIt: BlogPost = {
  slug: 'amex-gold-worth-it-2026',
  title: 'Is the Amex Gold Card Worth the $250 Annual Fee in 2026?',
  description:
    'The Amex Gold has $120 dining credits, $120 Uber Cash, and 4x points at restaurants and groceries. We calculate whether the $250 annual fee pays for itself.',
  keywords:
    'is amex gold worth it, amex gold annual fee worth it 2026, amex gold card review 2026, amex gold benefits',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 8,
  ctaText: 'Calculate Your Card Value Free',
  ctaHref: '/annual-fee-calculator',
  faqSchema: [
    {
      question: 'Does the Amex Gold grocery 4x have a cap?',
      answer:
        'Yes. The Amex Gold earns 4x Membership Rewards points at U.S. supermarkets on up to $25,000 in purchases per calendar year. After reaching $25,000, supermarket purchases earn 1x points. For most households, $25,000 per year in grocery spending is more than enough to stay under the cap.',
    },
    {
      question: 'Can I have both the Amex Gold and Amex Platinum?',
      answer:
        'Yes, you can hold both cards simultaneously. Many strategists recommend this combination because the Gold covers dining and groceries at 4x while the Platinum handles flights at 5x and provides lounge access. Both cards earn Membership Rewards points that pool together in one account.',
    },
    {
      question: 'Is the Amex Gold good for travel?',
      answer:
        'The Amex Gold earns 3x on flights booked directly with airlines and on amextravel.com, which is solid but not industry-leading for airfare. Its real strength is dining and groceries. For dedicated travel earning, the Amex Platinum or a card like the Chase Sapphire Reserve may be stronger choices.',
    },
  ],
  relatedLinks: [
    { href: '/annual-fee-calculator', label: 'Annual Fee Calculator' },
    { href: '/blog/is-amex-platinum-worth-it-2026', label: 'Is the Amex Platinum Worth It in 2026?' },
    { href: '/downgrade-guide', label: 'Card Downgrade Guide' },
    { href: '/top-cards', label: 'Top Card Recommendations' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        For most people who spend at least $300 per month on dining and $300 per month on groceries, the Amex Gold
        is worth the $250 annual fee &mdash; and it is not close. The $120 dining credit plus $120 Uber Cash offset
        all but $10 of the annual fee before you even count the 4x earning rate on restaurants and supermarkets. At
        typical spending levels, the Gold generates $500 to $800+ in annual value. It is one of the strongest
        everyday earning cards available in 2026.
      </p>

      {/* Annual Fee Breakdown */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="annual-fee-breakdown">
          The $250 Annual Fee Breakdown
        </h2>
        <p className="text-sm mb-3">
          The Amex Gold carries a $250 annual fee with no option to waive it. At face value, that sounds steep for a
          non-premium card. But unlike many annual-fee cards, the Gold comes with automatic statement credits that
          require minimal effort to use. Here is how the math works before you earn a single point:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>$120 Dining Credit:</strong> $10 per month at select restaurants and food services</li>
          <li><strong>$120 Uber Cash:</strong> $10 per month in Uber Cash (rides or Uber Eats)</li>
          <li><strong>Net fee after credits:</strong> $250 &minus; $120 &minus; $120 = <strong>$10 per year</strong></li>
        </ul>
        <p className="text-sm mb-3">
          If you use both credits consistently, the Gold&apos;s effective annual fee is just $10. That makes the
          value proposition fundamentally different from cards like the Chase Sapphire Preferred ($95 fee, no automatic
          credits) or the Citi Strata Premier ($95 fee, no automatic credits). The Gold&apos;s credits are not
          aspirational &mdash; they cover dining and rideshares, things most people already spend money on.
        </p>
        <p className="text-sm mb-3">
          Use our{' '}
          <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
            Annual Fee Calculator
          </Link>{' '}
          to see exactly how the Gold&apos;s value stacks up based on your personal spending.
        </p>
      </section>

      {/* Dining Credit */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="dining-credit">
          Dining Credit: $120 Per Year
        </h2>
        <p className="text-sm mb-3">
          The Amex Gold&apos;s dining credit provides $10 per month as a statement credit when you spend at select
          dining partners. As of 2026, the list of participating merchants includes:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Grubhub:</strong> Food delivery, including Grubhub+ subscription costs</li>
          <li><strong>The Cheesecake Factory:</strong> In-restaurant and online orders</li>
          <li><strong>Goldbelly:</strong> Specialty food delivery from restaurants nationwide</li>
          <li><strong>Wine.com:</strong> Online wine purchases</li>
          <li><strong>Milk Bar:</strong> Bakery items and dessert boxes</li>
          <li><strong>Select Shake Shack locations:</strong> In-store purchases at participating locations</li>
        </ul>
        <p className="text-sm mb-3">
          The credit resets monthly and does not roll over. If you do not spend at any of these merchants in a given
          month, you lose that $10. The key question is whether you would naturally spend at these places anyway. For
          most urban cardholders, a single Grubhub order per month covers the credit effortlessly. If you live in a
          rural area without access to these merchants, the credit&apos;s value drops significantly.
        </p>
        <p className="text-sm mb-3">
          Amex has rotated the participating merchants over the years, so the exact list may change. However, Grubhub
          has been a consistent partner and is the easiest way for most people to use the credit.
        </p>
      </section>

      {/* Uber Cash */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="uber-cash">
          Uber Cash: $120 Per Year
        </h2>
        <p className="text-sm mb-3">
          The Gold provides $10 per month in Uber Cash, loaded automatically to your Uber account when linked. This
          can be used for Uber rides, Uber Eats orders, or even Uber grocery delivery in supported markets. Like the
          dining credit, unused Uber Cash does not roll over to the next month.
        </p>
        <p className="text-sm mb-3">
          The practical value of this credit depends on whether you use Uber at all. In major cities, $10 per month
          is almost certainly going to get used &mdash; a single Uber Eats order or one short ride covers it. In
          smaller markets where Uber availability is limited, this credit may be harder to use consistently.
        </p>
        <p className="text-sm mb-3">
          One important detail: Uber Cash from the Amex Gold does stack with other Uber promotions and Uber One
          membership discounts. If you are already an Uber One subscriber, the $10 monthly credit provides
          additional savings on top of your existing benefits.
        </p>
      </section>

      {/* 4x Earning Rate */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="4x-earning-rate-math">
          4x Earning Rate: Where the Real Value Lives
        </h2>
        <p className="text-sm mb-3">
          Credits aside, the Amex Gold&apos;s 4x Membership Rewards earning rate on U.S. restaurants and U.S.
          supermarkets is the core of its value proposition. Here is what that looks like at different spending levels,
          valuing Membership Rewards at a conservative 1.8 cents per point (the approximate value when transferred to
          airline partners):
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Monthly Spend</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Category</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Annual Points</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Value (1.8 cpp)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">$400/mo dining</td>
                <td className="px-4 py-2">Restaurants (4x)</td>
                <td className="px-4 py-2">19,200 MR</td>
                <td className="px-4 py-2">$345</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">$500/mo groceries</td>
                <td className="px-4 py-2">Supermarkets (4x)</td>
                <td className="px-4 py-2">24,000 MR</td>
                <td className="px-4 py-2">$432</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">$200/mo flights</td>
                <td className="px-4 py-2">Flights (3x)</td>
                <td className="px-4 py-2">7,200 MR</td>
                <td className="px-4 py-2">$129</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">$500/mo other</td>
                <td className="px-4 py-2">Everything else (1x)</td>
                <td className="px-4 py-2">6,000 MR</td>
                <td className="px-4 py-2">$108</td>
              </tr>
              <tr className="bg-brand-light font-bold">
                <td className="px-4 py-2">$1,600/mo total</td>
                <td className="px-4 py-2">&mdash;</td>
                <td className="px-4 py-2">56,400 MR</td>
                <td className="px-4 py-2">$1,015</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm mb-3">
          At this moderate spending level, the Gold earns over $1,000 in annual value from points alone. Subtract the
          $10 effective annual fee and you are netting roughly $1,005 in rewards. Even if you value Membership Rewards
          at a conservative 1.5 cents per point, the numbers remain compelling: $846 in value minus the $10 net fee
          equals $836 net.
        </p>
        <p className="text-sm mb-3">
          The grocery 4x multiplier applies to up to $25,000 in U.S. supermarket purchases per calendar year. After
          that, supermarket purchases earn 1x. For a household spending $500/month on groceries, you would hit the cap
          at about $6,000 per year &mdash; well under the $25,000 limit. Most cardholders never come close to the cap.
        </p>
      </section>

      {/* When It's Worth It */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-gold-is-worth-it">
          When the Amex Gold Is Worth It
        </h2>
        <p className="text-sm mb-3">
          The Gold card delivers exceptional value when:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You spend $200+ per month on dining:</strong> At 4x points, even $200/month in restaurant spending generates 9,600 MR points per year &mdash; worth $172 at 1.8 cpp. Combined with credits, this alone justifies the fee.</li>
          <li><strong>You spend $300+ per month on groceries:</strong> The 4x supermarket rate makes the Gold one of the strongest grocery cards available. A family spending $600/month earns 28,800 MR points ($518 value) from groceries alone.</li>
          <li><strong>You can use both monthly credits:</strong> The $120 dining credit and $120 Uber Cash need to be used monthly. If you live in an area with Uber and any of the dining partners, both credits are practical.</li>
          <li><strong>You transfer points to airline partners:</strong> Membership Rewards are most valuable when transferred to partners like ANA, Air France/KLM, or Singapore Airlines. If you book flights this way, your effective point value may exceed 2 cents each.</li>
        </ul>
      </section>

      {/* When It's Not Worth It */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-gold-is-not-worth-it">
          When the Amex Gold Is Not Worth It
        </h2>
        <p className="text-sm mb-3">
          The Gold card loses its edge when:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You rarely eat out or order delivery:</strong> If your dining spending is under $100/month, the 4x multiplier generates limited value and the dining credit may go unused.</li>
          <li><strong>You do not use Uber:</strong> In markets without reliable Uber service, $120 per year in Uber Cash is effectively worthless. That changes the net fee from $10 to $130.</li>
          <li><strong>You prefer cash back over points:</strong> Membership Rewards points require transfer knowledge to maximize value. If you just want cash back, the Citi Double Cash (2% flat) or Wells Fargo Active Cash (2% flat) are simpler with no annual fee.</li>
          <li><strong>You shop at warehouse clubs:</strong> Costco, Sam&apos;s Club, and BJ&apos;s are coded as wholesale clubs, not supermarkets. They do not earn 4x on the Gold card. If most of your grocery budget goes to warehouse stores, the 4x benefit is diminished.</li>
        </ul>
      </section>

      {/* Comparison */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="gold-vs-csp-vs-citi-premier">
          Amex Gold vs Chase Sapphire Preferred vs Citi Strata Premier
        </h2>
        <p className="text-sm mb-3">
          These three cards compete for the same spot in your wallet: the mid-tier flexible points earner. Here is
          how they compare head-to-head:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Feature</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Amex Gold</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Chase Sapphire Preferred</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Citi Strata Premier</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Annual Fee</td>
                <td className="px-4 py-2">$250</td>
                <td className="px-4 py-2">$95</td>
                <td className="px-4 py-2">$95</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Net Fee After Credits</td>
                <td className="px-4 py-2">~$10</td>
                <td className="px-4 py-2">$45 (with $50 hotel credit)</td>
                <td className="px-4 py-2">$95 (no credits)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Dining Rate</td>
                <td className="px-4 py-2">4x</td>
                <td className="px-4 py-2">3x</td>
                <td className="px-4 py-2">3x</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Grocery Rate</td>
                <td className="px-4 py-2">4x (up to $25k/yr)</td>
                <td className="px-4 py-2">1x</td>
                <td className="px-4 py-2">3x</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Travel Rate</td>
                <td className="px-4 py-2">3x flights</td>
                <td className="px-4 py-2">2x-5x travel</td>
                <td className="px-4 py-2">3x travel</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Transfer Partners</td>
                <td className="px-4 py-2">21+ airline/hotel</td>
                <td className="px-4 py-2">14+ airline/hotel</td>
                <td className="px-4 py-2">16+ airline/hotel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm mb-3">
          The Amex Gold wins decisively on dining and groceries. The CSP is better for general travel bookings through
          the Chase portal (5x on Chase Travel). The Citi Strata Premier offers the best grocery earning among the
          three if you do not want to pay a $250 annual fee, earning 3x compared to the CSP&apos;s 1x. For most
          everyday spenders focused on food categories, the Gold delivers the most value despite the higher
          sticker-price annual fee.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Does the Amex Gold grocery 4x have a cap?
        </h3>
        <p className="text-sm mb-4">
          Yes. The Amex Gold earns 4x Membership Rewards points at U.S. supermarkets on up to $25,000 in purchases
          per calendar year. After reaching $25,000, supermarket purchases earn 1x points. For most households,
          $25,000 per year in grocery spending is more than enough to stay under the cap.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Can I have both the Amex Gold and Amex Platinum?
        </h3>
        <p className="text-sm mb-4">
          Yes, you can hold both cards simultaneously. Many strategists recommend this combination because the Gold
          covers dining and groceries at 4x while the Platinum handles flights at 5x and provides lounge access. Both
          cards earn Membership Rewards points that pool together in one account.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Is the Amex Gold good for travel?
        </h3>
        <p className="text-sm mb-4">
          The Amex Gold earns 3x on flights booked directly with airlines and on amextravel.com, which is solid but
          not industry-leading for airfare. Its real strength is dining and groceries. For dedicated travel earning,
          the Amex Platinum or a card like the Chase Sapphire Reserve may be stronger choices.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice. Credit card approval
          decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility. Card
          benefits and terms may change &mdash; verify current details with American Express before applying.
        </p>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-3">
        <p className="text-xs text-gray-600 italic">
          Some links on this page are affiliate links. We may receive compensation if you apply and are approved, at
          no additional cost to you. This does not affect our recommendations.
        </p>
      </div>
    </>
  ),
};
