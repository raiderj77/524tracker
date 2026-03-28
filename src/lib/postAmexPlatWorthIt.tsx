import Link from 'next/link';
import type { BlogPost } from './posts';

export const postAmexPlatWorthIt: BlogPost = {
  slug: 'is-amex-platinum-worth-it-2026',
  title: 'Is the Amex Platinum Worth the $695 Annual Fee in 2026?',
  description:
    'The Amex Platinum has $695 annual fee but $1,400+ in credits. We calculate exactly when it\'s worth keeping — and when you should downgrade instead.',
  keywords:
    'is amex platinum worth it, amex platinum annual fee worth it 2026, amex platinum review 2026, amex platinum benefits',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 10,
  ctaText: 'Calculate If Your Card Pays for Itself',
  ctaHref: '/annual-fee-calculator',
  faqSchema: [
    {
      question: 'Is the Amex Platinum good for groceries?',
      answer:
        'No. The Amex Platinum earns only 1x points on groceries. If grocery spending is a major category for you, the Amex Gold earns 4x at U.S. supermarkets (up to $25,000/year), making it the far better choice for everyday food shopping. Many cardholders pair the Platinum with the Gold for this reason.',
    },
    {
      question: 'Can I have both the Amex Platinum and Amex Gold at the same time?',
      answer:
        'Yes. You can hold both cards simultaneously. Many Amex cardholders pair the Platinum for travel and lounge benefits with the Gold for everyday dining and grocery earnings. Both cards earn Membership Rewards points that pool into the same account, maximizing value across categories.',
    },
    {
      question: 'What is the single best Amex Platinum benefit?',
      answer:
        'For most cardholders, Centurion Lounge access is the most valuable benefit. Centurion Lounges offer complimentary food, drinks, and a premium experience that standalone lounge memberships cannot match. If you fly through airports with Centurion Lounges 5+ times per year, this benefit alone can justify a large portion of the annual fee.',
    },
    {
      question: 'Should I downgrade the Amex Platinum to the Amex Gold?',
      answer:
        'You cannot directly downgrade a Platinum to a Gold because the Platinum is a charge card and the Gold is a separate product. You would need to cancel the Platinum and apply separately for the Gold. Consider keeping the Platinum if you use $400+ in credits annually; otherwise, the Gold at $250/year may deliver better everyday value.',
    },
  ],
  relatedLinks: [
    { href: '/annual-fee-calculator', label: 'Annual Fee Value Calculator' },
    { href: '/blog/amex-lifetime-bonus-rule-explained', label: 'Amex Lifetime Bonus Rule Explained' },
    { href: '/downgrade-guide', label: 'Card Downgrade Guide' },
    { href: '/amex-popup-estimator', label: 'Amex Popup Risk Estimator' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        The Amex Platinum costs $695 per year but includes over $1,400 in statement credits. The
        catch: not every credit is &ldquo;real money&rdquo; for every cardholder. If you
        naturally use $400+ in credits (travel, Uber, streaming, Walmart+), the effective fee
        drops to $295 or less, making the Platinum worth keeping for its Centurion Lounge access,
        5x on flights, and premium travel insurance. If you would have to force spending to use
        most credits, the Amex Gold at $250/year may be the better value.
      </p>

      {/* Every Credit Explained */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="every-credit-explained">
          Every Amex Platinum Credit Explained
        </h2>
        <p className="text-sm mb-3">
          The Amex Platinum&apos;s credit lineup has grown significantly over the years. Here is
          every credit, its face value, and what you need to know about actually using it.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $200 Airline Incidental Credit
        </h3>
        <p className="text-sm mb-3">
          This credit reimburses incidental airline charges on one selected airline per calendar
          year. It covers checked bag fees, seat upgrades, in-flight purchases, and lounge day
          passes. It does <strong>not</strong> cover airfare (the ticket itself). You must select
          one airline at the beginning of each year and all incidental charges must be on that
          airline. This credit can be easy to use if you frequently check bags or upgrade seats,
          but it requires planning.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $200 Uber Credit ($15/month + $20 December bonus)
        </h3>
        <p className="text-sm mb-3">
          You receive $15 in Uber Cash each month, automatically added to your Uber account, plus
          an extra $20 in December for a total of $200/year. This can be used for Uber rides or
          Uber Eats. The monthly structure means unused credits expire each month &mdash; you
          cannot bank them. If you use Uber or Uber Eats at least once per month, this is
          straightforward value. If you do not live in an area with Uber service or prefer
          cooking, this credit may go partially unused.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $240 Digital Entertainment Credit ($20/month)
        </h3>
        <p className="text-sm mb-3">
          $20/month toward eligible streaming and digital services including Disney+, Hulu, ESPN+,
          The New York Times, Audible, SiriusXM, and Peacock. The credit applies automatically
          when you pay for eligible services with your Platinum card. Most households already pay
          for at least one streaming service, making this one of the easier credits to use.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $155 Walmart+ Credit
        </h3>
        <p className="text-sm mb-3">
          Covers the cost of a Walmart+ membership, which includes free delivery on Walmart
          orders, fuel discounts, and Paramount+ streaming. If you shop at Walmart regularly,
          this is genuine value. If Walmart is not part of your shopping routine, this credit
          may feel like forced spend &mdash; though the included Paramount+ adds some
          entertainment value.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $100 Saks Fifth Avenue Credit ($50 semi-annual)
        </h3>
        <p className="text-sm mb-3">
          $50 in January-June and $50 in July-December, usable at Saks Fifth Avenue (in-store or
          online). Saks carries luxury goods, so $50 does not stretch far. However, Saks sells
          everyday items too &mdash; fragrances, skincare, candles, and small accessories can be
          purchased within the credit amount. If you would never shop at Saks, this credit is
          worth $0 to you.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $189 CLEAR Plus Credit
        </h3>
        <p className="text-sm mb-3">
          Covers the annual cost of a CLEAR Plus membership, which provides expedited security
          screening at participating airports and venues. CLEAR is available at 50+ airports. If
          you fly frequently through airports with CLEAR lanes, this saves time at security. If
          you already have TSA PreCheck and rarely encounter long lines, CLEAR adds marginal
          value.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $100 Global Entry or TSA PreCheck Credit (every 4 years)
        </h3>
        <p className="text-sm mb-3">
          Reimburses the application fee for Global Entry ($100) or TSA PreCheck ($78) once every
          4 years. This is straightforward value if you travel, but the annualized value is only
          $25/year. You can also use this credit for a family member.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          $200 Hotel Credit (via FHR/THC bookings)
        </h3>
        <p className="text-sm mb-3">
          Amex offers a $200 annual hotel credit when booking through the Fine Hotels + Resorts
          (FHR) or The Hotel Collection (THC) programs. FHR properties are luxury hotels with
          rates often starting above $400/night. THC requires a 2-night minimum. This credit is
          genuinely valuable if you already book premium hotels, but it is not usable on budget
          accommodations.
        </p>
      </section>

      {/* Credit Value Summary */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="which-credits-valuable">
          Which Credits Are Actually Valuable?
        </h2>
        <p className="text-sm mb-3">
          Here is an honest assessment categorizing each credit by how easy it is for the average
          cardholder to use at face value.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Credit</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Face Value</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Realistic Value</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Ease of Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Uber</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$100-$200</td>
                <td className="px-4 py-2">Easy (if you use Uber/Eats)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Digital Entertainment</td>
                <td className="px-4 py-2">$240</td>
                <td className="px-4 py-2">$120-$240</td>
                <td className="px-4 py-2">Easy (most pay for streaming)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Airline Incidental</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$50-$200</td>
                <td className="px-4 py-2">Medium (requires planning)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Walmart+</td>
                <td className="px-4 py-2">$155</td>
                <td className="px-4 py-2">$0-$155</td>
                <td className="px-4 py-2">Medium (only if you shop Walmart)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">CLEAR</td>
                <td className="px-4 py-2">$189</td>
                <td className="px-4 py-2">$0-$189</td>
                <td className="px-4 py-2">Medium (only if you fly often)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Hotel (FHR/THC)</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$0-$200</td>
                <td className="px-4 py-2">Hard (luxury hotels only)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Saks</td>
                <td className="px-4 py-2">$100</td>
                <td className="px-4 py-2">$0-$100</td>
                <td className="px-4 py-2">Hard (niche retailer)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Global Entry</td>
                <td className="px-4 py-2">$25/yr</td>
                <td className="px-4 py-2">$25</td>
                <td className="px-4 py-2">Easy (one-time enrollment)</td>
              </tr>
              <tr className="border-b border-gray-200 font-semibold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">$1,309/yr</td>
                <td className="px-4 py-2">$295-$1,309</td>
                <td className="px-4 py-2">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          The realistic range is enormous. A cardholder who uses Uber, streams content, flies
          frequently, and shops at Saks could realize $1,000+ in credit value. Someone who does
          none of those things might realize less than $300. Run your own numbers with our{' '}
          <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
            Annual Fee Value Calculator &rarr;
          </Link>
        </p>
      </section>

      {/* The Rewards Math */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="rewards-math">
          The Rewards Math
        </h2>
        <p className="text-sm mb-3">
          Beyond credits, the Amex Platinum earns Membership Rewards points. The earning structure
          is focused on travel:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>5x on flights booked directly with airlines or through Amex Travel:</strong> This is the Platinum&apos;s strongest earning category and one of the highest airline earning rates on any card.</li>
          <li><strong>5x on prepaid hotels through Amex Travel:</strong> Only applies to bookings made through amextravel.com, not directly with hotels.</li>
          <li><strong>1x on everything else:</strong> The Platinum is not an everyday spending card. Its 1x base rate is below what many no-annual-fee cards offer.</li>
        </ul>
        <p className="text-sm mb-3">
          Membership Rewards points are worth approximately 1.5-2.0 cents each when transferred
          to airline partners like ANA, Air France/KLM, or Singapore Airlines. At 2 cents per
          point, $1,000/month in flights earns 5,000 points/month = $1,200/year in travel value.
          Combined with credits, this pushes total value well above the $695 fee for frequent
          flyers.
        </p>
        <p className="text-sm mb-3">
          However, the 1x base rate means the Platinum is a poor everyday spending card. Most
          Platinum holders pair it with the Amex Gold (4x dining and groceries) or a flat-rate
          card for non-travel spending.
        </p>
      </section>

      {/* When Worth It */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-worth-it">
          When the Amex Platinum Is Worth $695
        </h2>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You fly 8+ times per year</strong> &mdash; Centurion Lounge access, 5x on flights, airline credit, and CLEAR all compound in value for frequent flyers</li>
          <li><strong>You naturally use $500+ in credits annually</strong> &mdash; Uber, streaming, and airline incidentals are the easiest to use for most people</li>
          <li><strong>You book premium hotels 1-2 times per year</strong> &mdash; FHR perks include room upgrades, late checkout, and the $200 credit, which can total $500+ in value on a single booking</li>
          <li><strong>You transfer points to international airline partners</strong> &mdash; business and first class redemptions through ANA, Air France, or Singapore Airlines can yield 3-5 cents per point</li>
          <li><strong>You value travel insurance</strong> &mdash; the Platinum includes trip cancellation/interruption, car rental, and baggage insurance that can save thousands on a single claim</li>
        </ul>
        <p className="text-sm mb-3">
          If you match 3+ of these criteria, the Platinum likely delivers positive net value.{' '}
          <a href="https://www.americanexpress.com/us/credit-cards/card/platinum/" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-brand-gold hover:text-amber-600 font-semibold">
            Apply for the Amex Platinum &rarr;
          </a>
        </p>
      </section>

      {/* When to Downgrade */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-to-downgrade">
          When You Should Cancel Instead
        </h2>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You use fewer than $300 in credits annually</strong> &mdash; the effective fee exceeds $395, which is hard to justify on points alone</li>
          <li><strong>You fly fewer than 4 times per year</strong> &mdash; Centurion Lounge access, CLEAR, and airline credits lose most of their value</li>
          <li><strong>You use the card for everyday spending</strong> &mdash; at 1x on non-travel purchases, you are leaving significant value on the table compared to the Amex Gold (4x dining/groceries) or even a 2% cash-back card</li>
          <li><strong>You redeem points at 1 cent each</strong> &mdash; if you cash out Membership Rewards at the base rate instead of transferring to partners, the earning math does not support the $695 fee</li>
          <li><strong>You have travel fatigue</strong> &mdash; if your travel patterns have slowed since you got the card, reassess annually before the fee posts</li>
        </ul>
        <p className="text-sm mb-3">
          Note: You cannot downgrade the Amex Platinum to the Amex Gold &mdash; they are separate
          products. You would need to cancel the Platinum and apply for the Gold separately (subject
          to the{' '}
          <Link href="/blog/amex-lifetime-bonus-rule-explained" className="text-brand-gold hover:text-amber-600 font-semibold">
            once-per-lifetime bonus rule
          </Link>).
          If you cancel, call the retention line first &mdash; Amex frequently offers retention
          bonuses of 30,000-50,000 points to keep the card.
        </p>
      </section>

      {/* Platinum vs Gold */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="platinum-vs-gold">
          Amex Platinum vs Amex Gold: Quick Comparison
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Feature</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Platinum</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Gold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Annual Fee</td>
                <td className="px-4 py-2">$695</td>
                <td className="px-4 py-2">$250</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Best Earning Category</td>
                <td className="px-4 py-2">5x flights</td>
                <td className="px-4 py-2">4x dining + groceries</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Lounge Access</td>
                <td className="px-4 py-2">Centurion + Priority Pass</td>
                <td className="px-4 py-2">None</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Dining Credit</td>
                <td className="px-4 py-2">None (separate from Uber)</td>
                <td className="px-4 py-2">$120/yr ($10/mo)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Uber Credit</td>
                <td className="px-4 py-2">$200/yr</td>
                <td className="px-4 py-2">$120/yr ($10/mo)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Best For</td>
                <td className="px-4 py-2">Frequent flyers, lounge users</td>
                <td className="px-4 py-2">Everyday spenders, foodies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          For most people who do not fly frequently, the Amex Gold is the better standalone
          card. Its 4x earning on dining and U.S. supermarkets generates more points from
          everyday spending than the Platinum&apos;s 5x on flights &mdash; simply because most
          people spend more on food than airfare. The ideal setup for Amex maximizers is to hold
          both: the Platinum for travel and lounges, the Gold for everyday earning.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Is the Amex Platinum good for groceries?
        </h3>
        <p className="text-sm mb-4">
          No. The Amex Platinum earns only 1x points on groceries. If grocery spending is a
          major category for you, the Amex Gold earns 4x at U.S. supermarkets (up to
          $25,000/year), making it the far better choice for everyday food shopping. Many
          cardholders pair the Platinum with the Gold for this reason.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Can I have both the Amex Platinum and Amex Gold?
        </h3>
        <p className="text-sm mb-4">
          Yes. You can hold both cards simultaneously. Many Amex cardholders pair the Platinum
          for travel and lounge benefits with the Gold for everyday dining and grocery earnings.
          Both cards earn Membership Rewards points that pool into the same account, maximizing
          value across categories.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          What is the single best Amex Platinum benefit?
        </h3>
        <p className="text-sm mb-4">
          For most cardholders, Centurion Lounge access is the most valuable benefit. Centurion
          Lounges offer complimentary food, drinks, and a premium experience that standalone
          lounge memberships cannot match. If you fly through airports with Centurion Lounges
          5+ times per year, this benefit alone can justify a large portion of the annual fee.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Should I downgrade the Amex Platinum to the Amex Gold?
        </h3>
        <p className="text-sm mb-4">
          You cannot directly downgrade a Platinum to a Gold because the Platinum is a charge
          card and the Gold is a separate product. You would need to cancel the Platinum and
          apply separately for the Gold. Consider keeping the Platinum if you use $400+ in
          credits annually; otherwise, the Gold at $250/year may deliver better everyday value.
        </p>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
        <p className="text-xs text-blue-900 italic">
          Some links on this page are affiliate links. We may receive compensation if you apply
          and are approved, at no additional cost to you. This does not affect our recommendations.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice.
          Credit card approval decisions are made solely by the issuing bank. We cannot guarantee
          approval or bonus eligibility. Card benefits, fees, and terms may change at any time
          &mdash; verify current terms directly with American Express before applying. Last
          verified: March 20, 2026.
        </p>
      </div>
    </>
  ),
};
