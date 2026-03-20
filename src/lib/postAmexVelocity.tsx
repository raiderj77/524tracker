import Link from 'next/link';
import type { BlogPost } from './posts';

export const postAmexVelocity: BlogPost = {
  slug: 'amex-1-5-rule-2-90-rule-explained',
  title: 'Amex Application Rules Explained: 1/5 Rule, 2/90 Rule, and More',
  description:
    "Every American Express application rule in one place — the 1/5 rule, 2/90 rule, 4 credit card limit, 5 business card limit, charge card exceptions, and how popup jail interacts.",
  keywords:
    'amex 1/5 rule, amex 2/90 rule, amex application rules, american express velocity rules, amex card limits',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 9,
  ctaText: 'Check Your Amex Eligibility',
  ctaHref: '/velocity-checker',
  faqSchema: [
    {
      question: 'Do Amex charge cards count toward the 2/90 rule?',
      answer:
        'No. Amex charge cards (Platinum, Gold, Green, and their business variants) are exempt from the 2/90 rule. The 2/90 rule only counts credit card approvals. You could be approved for 2 credit cards and 3 charge cards in the same 90-day window without violating this rule.',
    },
    {
      question: 'Can I have more than 4 Amex credit cards?',
      answer:
        'Generally no. American Express limits most consumers to 4 open personal credit cards at a time. If you hold 4 and want a 5th, you will typically need to close or product-change an existing card first. Charge cards and business credit cards have separate limits and do not count toward the 4-card personal cap.',
    },
    {
      question: 'Does the 1/5 rule apply to Amex charge cards?',
      answer:
        'No. The 1/5 rule (1 credit card per 5 days) applies only to Amex credit cards. Charge cards are exempt. You could be approved for an Amex credit card on Monday and a charge card on Tuesday without violating the 1/5 rule. However, applying for 2 credit cards within 5 days would trigger a denial on the second.',
    },
  ],
  relatedLinks: [
    { href: '/velocity-checker', label: 'Velocity Checker Tool' },
    { href: '/blog/amex-popup-jail-explained', label: 'Amex Popup Jail Guide' },
    { href: '/blog/amex-lifetime-bonus-rule-explained', label: 'Amex Lifetime Bonus Rule' },
    { href: '/application-timing', label: 'Application Timing Tool' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        American Express enforces several application and account rules: the 1/5 rule (1 credit
        card per 5 days), the 2/90 rule (2 credit cards per 90 days), a 4 personal credit card
        limit, and a 5 business credit card limit. Charge cards (Platinum, Gold, Green) are
        exempt from most of these restrictions. These rules are separate from the once-per-lifetime
        bonus rule and the popup jail system. Understanding all of them is essential for timing
        Amex applications correctly.
      </p>

      {/* 1/5 Rule */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="amex-1-5-rule">
          The Amex 1/5 Rule Explained
        </h2>
        <p className="text-sm mb-3">
          The 1/5 rule states that American Express will approve you for a maximum of 1 credit
          card every 5 calendar days. If you are approved for an Amex credit card on Monday, your
          next Amex credit card application must wait until the following Saturday at the earliest.
          An application submitted before the 5-day window expires will be automatically denied.
        </p>
        <p className="text-sm mb-3">
          This rule applies specifically to Amex credit cards &mdash; products with a credit limit,
          like the Blue Cash Preferred, Hilton Honors cards, Delta cards, and Marriott Bonvoy
          cards. Charge cards (Platinum, Gold, Green, and their business versions) are completely
          exempt from the 1/5 rule.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Rule:</strong> Maximum 1 Amex credit card approval per 5 calendar days</li>
          <li><strong>What counts:</strong> Personal and business Amex credit cards</li>
          <li><strong>What&apos;s exempt:</strong> All Amex charge cards (Platinum, Gold, Green, Business Platinum, Business Gold)</li>
          <li><strong>Trigger:</strong> Approval date, not application date &mdash; if you apply on day 1 and get approved on day 3, the 5-day window starts on day 3</li>
          <li><strong>Penalty:</strong> Automatic denial of the second credit card application</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Date math example:</strong> You apply for and are approved for the Amex Hilton
          Honors Surpass on March 1. Your next Amex credit card application should not be submitted
          until March 6 at the earliest (5 full calendar days later). However, you could apply for
          the Amex Gold charge card on March 2 without violating the 1/5 rule.
        </p>
        <p className="text-sm mb-3">
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Check your current Amex eligibility with our Velocity Checker &rarr;
          </Link>
        </p>
      </section>

      {/* 2/90 Rule */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="amex-2-90-rule">
          The Amex 2/90 Rule Explained
        </h2>
        <p className="text-sm mb-3">
          The 2/90 rule limits you to a maximum of 2 Amex credit card approvals within any rolling
          90-day window. This is the more impactful of the two velocity rules because it sets a
          hard cap on how many Amex credit cards you can open in a 3-month period.
        </p>
        <p className="text-sm mb-3">
          Like the 1/5 rule, the 2/90 rule only counts credit cards. Charge cards are completely
          exempt. This means you could theoretically open 2 credit cards and 2 charge cards (or
          more) in the same 90-day window without any issue.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Rule:</strong> Maximum 2 Amex credit card approvals per 90 rolling days</li>
          <li><strong>What counts:</strong> Personal and business Amex credit cards &mdash; both count toward the same 2/90 limit</li>
          <li><strong>What&apos;s exempt:</strong> All Amex charge cards</li>
          <li><strong>Window start:</strong> Counts from approval date of each credit card</li>
          <li><strong>Penalty:</strong> Automatic denial when applying for a 3rd credit card within 90 days</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Date math example:</strong> You are approved for the Amex Blue Cash Preferred on
          January 5 and the Amex Delta Gold on January 15. You are now at 2/90. Your next Amex
          credit card application must wait until April 5 (90 days after the first approval on
          January 5). After April 5, one slot opens up. The second slot opens April 15 (90 days
          from the second approval). During this waiting period, you can still apply for charge
          cards like the Amex Platinum or Gold.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Optimal Application Spacing
        </h3>
        <p className="text-sm mb-3">
          To maximize Amex credit card applications per year while respecting both 1/5 and 2/90:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Credit card 1:</strong> Day 0</li>
          <li><strong>Credit card 2:</strong> Day 5 or later (respects 1/5)</li>
          <li><strong>Credit card 3:</strong> Day 90 from card 1 (respects 2/90)</li>
          <li><strong>Credit card 4:</strong> Day 95 from card 1 / Day 90 from card 2 (respects both rules)</li>
          <li><strong>Charge cards:</strong> Any time &mdash; they do not count</li>
        </ul>
        <p className="text-sm mb-3">
          This pacing allows a maximum of approximately 8 Amex credit cards per year, plus
          unlimited charge cards. In practice, the 4-card personal credit card limit (explained
          below) will be the binding constraint for most people.
        </p>
      </section>

      {/* 4 Personal Credit Card Limit */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="4-credit-card-limit">
          The 4 Personal Credit Card Limit
        </h2>
        <p className="text-sm mb-3">
          American Express limits most consumers to 4 open personal credit cards at any given
          time. This is not a velocity rule (it does not involve a time window) &mdash; it is a
          total account cap. If you already hold 4 Amex personal credit cards and apply for a 5th,
          your application will be denied regardless of how long you have held the existing cards.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Limit:</strong> 4 open Amex personal credit cards maximum</li>
          <li><strong>What counts:</strong> Only Amex personal credit cards (Blue Cash, Hilton personal, Delta personal, Marriott personal, etc.)</li>
          <li><strong>What doesn&apos;t count:</strong> Charge cards, business credit cards, business charge cards</li>
          <li><strong>Workaround:</strong> Close or product-change an existing personal credit card to open a slot before applying</li>
        </ul>
        <p className="text-sm mb-3">
          This limit is important for long-term Amex card strategy. If you plan to accumulate
          multiple Amex credit cards over time, be selective about which cards you keep open and
          which you close or product-change. Closing a card to free up a slot is fine for the
          account limit, but be aware that closing cards can be a trigger for{' '}
          <Link href="/blog/amex-popup-jail-explained" className="text-brand-gold hover:text-amber-600 font-semibold">
            Amex popup jail
          </Link>{' '}
          if done shortly after earning a welcome bonus.
        </p>
      </section>

      {/* 5 Business Card Limit */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="5-business-card-limit">
          The 5 Business Credit Card Limit
        </h2>
        <p className="text-sm mb-3">
          Similar to the personal card cap, Amex limits business credit cards to 5 open accounts
          at a time. This includes cards like the Blue Business Plus, Blue Business Cash, Hilton
          Business, Delta Business, and Marriott Business credit cards.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Limit:</strong> 5 open Amex business credit cards maximum</li>
          <li><strong>What counts:</strong> Only Amex business credit cards</li>
          <li><strong>What doesn&apos;t count:</strong> Business charge cards (Business Platinum, Business Gold), personal credit cards, personal charge cards</li>
          <li><strong>Combined cap:</strong> Some reports suggest a total limit of 10 Amex credit cards (personal + business combined), but this is less consistently confirmed</li>
        </ul>
        <p className="text-sm mb-3">
          Business credit cards count toward the 2/90 rule along with personal credit cards. If
          you open a business credit card and a personal credit card in the same 90-day window,
          that counts as 2 toward 2/90.
        </p>
      </section>

      {/* Charge Cards: The Exception */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="charge-card-exception">
          Charge Cards: The Exception to Almost Every Rule
        </h2>
        <p className="text-sm mb-3">
          Amex charge cards occupy a special category in the application rules landscape. They are
          exempt from nearly every velocity and account limit:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Exempt from 1/5:</strong> You can be approved for a charge card the same day as a credit card</li>
          <li><strong>Exempt from 2/90:</strong> Charge cards do not count toward the 2 credit card limit per 90 days</li>
          <li><strong>Exempt from 4-card personal limit:</strong> You can hold 4 personal credit cards plus multiple personal charge cards</li>
          <li><strong>Exempt from 5-card business limit:</strong> Business charge cards do not count toward the 5 business credit card cap</li>
          <li><strong>NOT exempt from popup jail:</strong> The popup can still appear on charge card applications</li>
          <li><strong>NOT exempt from once-per-lifetime:</strong> The welcome bonus lifetime rule still applies to charge cards</li>
        </ul>
        <p className="text-sm mb-3">
          Amex charge cards include the personal Platinum, Gold, and Green, plus the Business
          Platinum, Business Gold, and Business Green. The key distinction is that charge cards
          have no preset spending limit and are technically expected to be paid in full each
          month (though Amex now offers &ldquo;Pay Over Time&rdquo; features on most charge cards).
        </p>
        <p className="text-sm mb-3">
          The practical implication: when planning a multi-card Amex application strategy, apply
          for credit cards first (to stay within 1/5 and 2/90 limits), then add charge cards at
          any point without affecting your velocity windows.
        </p>
      </section>

      {/* How Popup Jail Interacts */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="popup-jail-interaction">
          How Popup Jail Interacts with These Rules
        </h2>
        <p className="text-sm mb-3">
          Popup jail is a separate system from the velocity rules described above. The velocity
          rules (1/5, 2/90, card limits) determine whether your application will be approved or
          denied. Popup jail determines whether you will receive the welcome bonus on an approved
          card. They can interact in confusing ways:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>You can pass velocity rules but be in popup jail:</strong> Your application may be approved (you are within 1/5 and 2/90), but the popup appears, meaning no welcome bonus</li>
          <li><strong>You can be out of popup jail but blocked by velocity:</strong> You may be eligible for the bonus, but your application is denied because you hit the 2/90 cap</li>
          <li><strong>Rapid applications can trigger both:</strong> Opening multiple Amex cards quickly can put you in popup jail for future applications while also filling your velocity slots</li>
          <li><strong>Closing cards to free velocity slots can worsen popup:</strong> Closing a card to open a new slot for the 4-card limit can trigger or extend popup jail if done shortly after earning a bonus</li>
        </ul>
        <p className="text-sm mb-3">
          The safest approach is to verify you are within velocity limits and then test for the
          popup by starting (but not submitting) an application. If the popup does not appear and
          you are within velocity rules, proceed with confidence.{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Use our Velocity Checker to confirm your velocity status &rarr;
          </Link>
        </p>
        <p className="text-sm mb-3">
          For a complete guide to popup jail &mdash; triggers, escape strategies, and NLL
          offers &mdash; see our{' '}
          <Link href="/blog/amex-popup-jail-explained" className="text-brand-gold hover:text-amber-600 font-semibold">
            Amex Popup Jail guide
          </Link>.
        </p>
      </section>

      {/* Date Math Examples */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="date-math-examples">
          Date Math Examples: Planning Your Amex Applications
        </h2>
        <p className="text-sm mb-3">
          Here are three common scenarios showing how the rules work together in practice.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Scenario 1: Maximum Credit Cards in 6 Months
        </h3>
        <p className="text-sm mb-3">
          Starting from zero Amex cards, here is the fastest you can accumulate personal credit
          cards:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>January 1:</strong> Apply for and approved for Credit Card A (1/90 used)</li>
          <li><strong>January 7:</strong> Apply for and approved for Credit Card B (2/90 used &mdash; 2/90 cap reached)</li>
          <li><strong>January 15:</strong> Apply for Charge Card C (approved &mdash; charge cards exempt from 2/90)</li>
          <li><strong>April 1:</strong> 90 days from Card A &mdash; one slot opens. Apply for Credit Card D (1/90 in new window)</li>
          <li><strong>April 7:</strong> 90 days from Card B &mdash; second slot opens. Apply for Credit Card E (2/90 in new window, 4/4 personal limit reached)</li>
        </ul>
        <p className="text-sm mb-3">
          Result: 4 personal credit cards + 1 charge card in under 4 months. To open a 5th credit
          card, you would need to close or product-change one of the first four.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Scenario 2: Mixed Personal and Business Cards
        </h3>
        <p className="text-sm mb-3">
          Business credit cards share the 2/90 limit with personal credit cards:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>March 1:</strong> Approved for personal Hilton Surpass (1/90)</li>
          <li><strong>March 8:</strong> Approved for business Blue Business Plus (2/90 &mdash; cap reached)</li>
          <li><strong>March 10:</strong> Approved for Business Platinum charge card (exempt &mdash; charge card)</li>
          <li><strong>May 30:</strong> 90 days from Hilton &mdash; apply for personal Delta Gold (1/90 in new window)</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Scenario 3: When You Hit the 4-Card Wall
        </h3>
        <p className="text-sm mb-3">
          If you already hold 4 personal Amex credit cards and want a new one:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Step 1:</strong> Choose which existing card to close or product-change</li>
          <li><strong>Step 2:</strong> Close/PC the card (takes effect immediately)</li>
          <li><strong>Step 3:</strong> Wait at least 24 hours for Amex systems to update</li>
          <li><strong>Step 4:</strong> Apply for the new card (ensure you are also within 2/90)</li>
          <li><strong>Caution:</strong> Closing a card &mdash; especially one where you recently earned a bonus &mdash; can trigger popup jail on the new application</li>
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Do Amex charge cards count toward the 2/90 rule?
        </h3>
        <p className="text-sm mb-4">
          No. Amex charge cards (Platinum, Gold, Green, and their business variants) are exempt
          from the 2/90 rule. The 2/90 rule only counts credit card approvals. You could be
          approved for 2 credit cards and 3 charge cards in the same 90-day window without
          violating this rule.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Can I have more than 4 Amex credit cards?
        </h3>
        <p className="text-sm mb-4">
          Generally no. American Express limits most consumers to 4 open personal credit cards
          at a time. If you hold 4 and want a 5th, you will typically need to close or
          product-change an existing card first. Charge cards and business credit cards have
          separate limits and do not count toward the 4-card personal cap.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Does the 1/5 rule apply to Amex charge cards?
        </h3>
        <p className="text-sm mb-4">
          No. The 1/5 rule (1 credit card per 5 days) applies only to Amex credit cards. Charge
          cards are exempt. You could be approved for an Amex credit card on Monday and a charge
          card on Tuesday without violating the 1/5 rule. However, applying for 2 credit cards
          within 5 days would trigger a denial on the second.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice.
          Credit card approval decisions are made solely by the issuing bank. We cannot guarantee
          approval or bonus eligibility. American Express application rules are based on community
          data and may change at any time. Always verify current terms directly with American
          Express before applying. Last verified: March 20, 2026.
        </p>
      </div>
    </>
  ),
};
