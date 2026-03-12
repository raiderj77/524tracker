import Link from 'next/link';
import type { ReactNode } from 'react';
import type { BlogPost } from './posts';

export const newPosts1to4: BlogPost[] = [
  {
    slug: 'chase-5-24-rule',
    title: 'Chase 5/24 Rule Explained: The Complete Guide',
    description:
      'Chase 5/24 rejects applications if you opened 5+ cards in 24 months. Learn which cards are exempt, authorized user fixes, and optimal strategy.',
    keywords: 'chase 5/24 rule explained, chase 5/24, 5/24 rule, chase credit card rules, chase sapphire 5/24, ink business 5/24 exempt',
    datePublished: '2026-03-11',
    dateModified: '2026-03-11',
    readTimeMinutes: 12,
    ctaText: 'Track Your 5/24 Status Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'Can I get approved for a Chase card at exactly 5/24?',
        answer:
          'No. Chase requires you to be under 5/24, meaning 4 or fewer new accounts in 24 months. At exactly 5/24 your application will be automatically denied for personal cards.',
      },
      {
        question: 'Do Chase Ink business cards count toward my 5/24 number?',
        answer:
          'No. Chase Ink business cards do not report to personal credit bureaus and therefore do not add to your 5/24 count. They are also exempt from the 5/24 rule when applying.',
      },
      {
        question: 'How long does it take for a card to fall off my 5/24 count?',
        answer:
          'A card drops off 24 months after the month it was opened. Chase counts by calendar month, so a card opened March 15, 2024 drops off at the start of April 2026 — potentially up to 25 months from the open date.',
      },
      {
        question: 'Does the authorized user workaround still work in 2026?',
        answer:
          'Based on crowdsourced community data as of March 2026, calling the Chase reconsideration line to explain that an authorized user account is not your own application has worked for many applicants. Results vary and this is not guaranteed.',
      },
      {
        question: 'Should I apply for Chase Sapphire Preferred or Reserve first?',
        answer:
          'Most strategists recommend the Sapphire Preferred first due to its lower minimum spend requirement and strong bonus-to-fee ratio. You cannot hold both Sapphire products simultaneously, so choose based on your travel spending patterns.',
      },
    ],
    relatedLinks: [
      { href: '/blog/amex-once-per-lifetime-rule', label: 'Amex Once-Per-Lifetime Rule Guide' },
      { href: '/blog/citi-8-65-rule', label: 'Citi 8/65 Rule: Application Timing Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/top-cards', label: 'Top Card Recommendations' },
      { href: '/faq', label: 'Credit Card Rules FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Chase 5/24 rule is an unofficial policy that automatically rejects credit card applications from anyone who has opened 5 or more new credit card accounts across all banks within the past 24 months. Understanding exactly which cards are subject to 5/24, which are exempt, and how to calculate your personal count is the foundation of every effective card strategy. This guide covers everything you need to know as of March 2026.
        </p>

        <p className="text-xs text-gray-500 mt-2 mb-4">Last verified: March 2026 &middot; Rules may change &mdash; verify with Chase before applying</p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is-524">
            What Is the Chase 5/24 Rule and Why Does It Matter?
          </h2>
          <p className="text-sm mb-3">
            The 5/24 rule is Chase&apos;s most important application restriction, automatically declining applicants with 5 or more new accounts opened in the last 24 months. It applies to nearly all Chase personal cards.
          </p>
          <p className="text-sm mb-3">
            Chase has never officially confirmed this rule. It was identified by the credit card community through thousands of data points collected on forums, blogs, and sites like r/churning beginning around 2015. The name &ldquo;5/24&rdquo; refers to the threshold: 5 new accounts within a 24-month rolling window.
          </p>
          <p className="text-sm mb-3">
            The rule exists because Chase wants cardholders who will use their products long-term. Chase personal cards like the <a href="#apply-chase-sapphire-preferred" target="_blank" rel="nofollow sponsored noopener noreferrer">Sapphire Preferred</a> and <a href="#apply-chase-freedom-unlimited" target="_blank" rel="nofollow sponsored noopener noreferrer">Freedom Unlimited</a> carry welcome bonuses worth $500&ndash;$1,000+ in travel value, so Chase restricts access to protect against applicants who open cards solely for bonuses.
          </p>
          <p className="text-sm">
            For informational purposes only &mdash; credit card approval decisions are made solely by the issuing bank.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="subject-vs-exempt">
            Which Chase Cards Are Subject to 5/24 vs. Exempt?
          </h2>
          <p className="text-sm mb-4">
            Not all Chase cards enforce 5/24. Business cards are generally exempt, which makes them critical for card strategy. Here is the complete breakdown based on crowdsourced community data as of March 2026.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Card</th>
                  <th className="text-left px-4 py-2 font-medium">Type</th>
                  <th className="text-left px-4 py-2 font-medium">Subject to 5/24?</th>
                  <th className="text-left px-4 py-2 font-medium">Counts Toward 5/24?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Sapphire Preferred</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Sapphire Reserve</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Freedom Flex</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Freedom Unlimited</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">United Explorer / Quest</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Southwest Priority / Plus</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">World of Hyatt</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">IHG One Rewards</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Marriott Bonvoy Boundless</td><td className="px-4 py-2">Personal</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Ink Business Preferred</td><td className="px-4 py-2">Business</td><td className="px-4 py-2 text-brand-green font-medium">No</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Ink Business Cash</td><td className="px-4 py-2">Business</td><td className="px-4 py-2 text-brand-green font-medium">No</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Ink Business Unlimited</td><td className="px-4 py-2">Business</td><td className="px-4 py-2 text-brand-green font-medium">No</td><td className="px-4 py-2 text-brand-green font-medium">No</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            The key takeaway: Chase business cards are both exempt from 5/24 enforcement and do not count toward your 5/24 number. This makes them the most important &ldquo;free slot&rdquo; cards in any strategy. The <a href="#apply-ink-business-preferred" target="_blank" rel="nofollow sponsored noopener noreferrer">Ink Business Preferred</a> alone typically offers 100,000 Ultimate Rewards points as a welcome bonus.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-to-calculate">
            How Do You Calculate Your Current 5/24 Count?
          </h2>
          <p className="text-sm mb-3">
            Your 5/24 count equals the number of new personal credit card accounts opened across all banks in the past 24 months. Here is how to calculate it accurately.
          </p>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Step-by-Step Calculation</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Pull your free credit reports from AnnualCreditReport.com (all three bureaus)</li>
            <li>List every personal credit card account with an open date within the last 24 months</li>
            <li>Include store cards, retail cards, and authorized user accounts</li>
            <li>Exclude business cards that only appear on business credit reports</li>
            <li>Count the total &mdash; that is your 5/24 number</li>
          </ul>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Calculation Example with Specific Dates</h3>
          <p className="text-sm mb-3">
            Suppose today is March 11, 2026. You have opened the following personal cards:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Amex Gold &mdash; opened January 2025 (counts, within 24 months)</li>
            <li>Citi Premier &mdash; opened June 2024 (counts, within 24 months)</li>
            <li>Chase Freedom Flex &mdash; opened November 2024 (counts)</li>
            <li>Capital One Venture X &mdash; opened August 2024 (counts)</li>
            <li>Ink Business Preferred &mdash; opened February 2025 (does NOT count &mdash; business card)</li>
            <li>Discover It &mdash; opened February 2024 (counts, within 24 months)</li>
            <li>Target RedCard &mdash; opened December 2023 (does NOT count &mdash; outside 24 months)</li>
          </ul>
          <p className="text-sm mb-3">
            Your 5/24 count is <strong>5/24</strong>. You would be denied for Chase personal cards. The Ink Business Preferred does not count, and the Target RedCard is outside the 24-month window.
          </p>
          <p className="text-sm">
            The fastest way to calculate: use the <Link href="/" className="text-brand-gold hover:text-amber-600">524 Tracker tool</Link>, which automatically counts your 5/24 status and shows drop-off dates for each card.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="drop-off-dates">
            When Does a Card Drop Off Your 5/24 Count?
          </h2>
          <p className="text-sm mb-3">
            Cards drop off your 5/24 count on the first day of the month that is 24 months after the opening month. Chase counts by calendar month, not by exact date.
          </p>
          <p className="text-sm mb-3">
            <strong>Example:</strong> A card opened on March 15, 2024 drops off at the start of April 2026 &mdash; not March 15, 2026. This means the effective wait can be up to 24 months and 30 days depending on when in the month the account was opened.
          </p>
          <p className="text-sm mb-3">
            <strong>Example 2:</strong> A card opened on March 1, 2024 also drops off at the start of April 2026. Whether you opened on the 1st or 31st of March, the drop-off date is the same.
          </p>
          <p className="text-sm">
            This is why tracking exact open dates matters. Use the <Link href="/" className="text-brand-gold hover:text-amber-600">5/24 drop-off calculator</Link> to see your specific dates rather than guessing.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="authorized-user">
            Does the Authorized User Workaround Still Work?
          </h2>
          <p className="text-sm mb-3">
            Authorized user (AU) accounts appear on your personal credit report and count toward 5/24. However, there is a well-documented workaround that has worked for many applicants based on crowdsourced data.
          </p>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">How the AU Workaround Works</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Apply for a Chase personal card and receive a denial citing too many accounts</li>
            <li>Call the Chase reconsideration line at 1-888-270-2127</li>
            <li>Explain that one or more accounts on your report are authorized user accounts, not cards you applied for yourself</li>
            <li>Request that the agent exclude AU accounts from the 5/24 calculation</li>
            <li>Have the primary cardholder&apos;s name and the date you were added available</li>
          </ul>
          <p className="text-sm mb-3">
            As of March 2026, community data points suggest this continues to work for many applicants, but success is not guaranteed. Chase agents have discretion, and outcomes vary by representative.
          </p>
          <p className="text-sm">
            A proactive alternative: ask the primary cardholder to remove you from the account, then dispute the AU tradeline with all three credit bureaus before applying. This removes it from your report entirely.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="sapphire-strategy">
            What Is the Best Chase Sapphire and Ink Card Strategy Under 5/24?
          </h2>
          <p className="text-sm mb-3">
            The optimal order for Chase cards depends on your 5/24 count, spending patterns, and travel goals. Here is the strategy most experienced card enthusiasts follow.
          </p>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Priority Order for 5/24 Slots</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Slot 1:</strong> <a href="#apply-chase-sapphire-preferred" target="_blank" rel="nofollow sponsored noopener noreferrer">Chase Sapphire Preferred</a> &mdash; strong welcome bonus (typically 60,000&ndash;80,000 points), $95 annual fee, excellent for beginners</li>
            <li><strong>Slot 2:</strong> Chase Freedom Flex or <a href="#apply-chase-freedom-unlimited" target="_blank" rel="nofollow sponsored noopener noreferrer">Freedom Unlimited</a> &mdash; $0 annual fee, earns Ultimate Rewards that transfer to your Sapphire card</li>
            <li><strong>Slot 3:</strong> World of Hyatt or United Explorer &mdash; co-brand with outsized value in specific programs</li>
            <li><strong>Slot 4:</strong> Second co-brand (Southwest, IHG, Marriott) or fill based on travel goals</li>
          </ul>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Business Cards Between Personal Apps</h3>
          <p className="text-sm mb-3">
            Between each personal card application, apply for Chase Ink business cards. The <a href="#apply-ink-business-preferred" target="_blank" rel="nofollow sponsored noopener noreferrer">Ink Business Preferred</a> earns 100,000 Ultimate Rewards points, does not count toward 5/24, and is not subject to 5/24 enforcement. Space applications 3+ months apart for best approval odds.
          </p>
          <p className="text-sm">
            The &ldquo;one Sapphire&rdquo; rule: Chase only allows you to hold one Sapphire product at a time. If you have the Preferred, you cannot apply for the Reserve (and vice versa) until 48 months after your last Sapphire bonus. Plan accordingly.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="other-banks">
            How Does 5/24 Interact with Other Bank Rules?
          </h2>
          <p className="text-sm mb-3">
            Your 5/24 count is affected by cards from all banks, so other issuer rules interact directly with your Chase strategy.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Amex personal cards</strong> count toward 5/24 (including charge cards like Gold and Platinum)</li>
            <li><strong>Amex business cards</strong> do not count toward 5/24 &mdash; great for earning bonuses without using a slot</li>
            <li><strong>Citi personal cards</strong> count toward 5/24. See the <Link href="/blog/citi-8-65-rule" className="text-brand-gold hover:text-amber-600">Citi 8/65 rule guide</Link> for timing</li>
            <li><strong>Capital One personal cards</strong> count toward 5/24 and Capital One generally limits you to 2 consumer cards</li>
            <li><strong>Bank of America personal cards</strong> count toward 5/24. See the <Link href="/blog/bank-of-america-2-3-4-rule" className="text-brand-gold hover:text-amber-600">BoA 2/3/4 rule guide</Link></li>
          </ul>
          <p className="text-sm">
            For a complete overview of every bank&apos;s restrictions and how they interact, see the <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">Complete Bank Rules Guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="common-mistakes">
            What Are the Most Common 5/24 Mistakes?
          </h2>
          <p className="text-sm mb-3">
            These mistakes cost applicants valuable 5/24 slots every year. Avoid them to maximize your card strategy returns.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Opening store cards at checkout:</strong> That 10% off Target or Macy&apos;s counts as a 5/24 slot worth hundreds in Chase bonuses</li>
            <li><strong>Forgetting authorized user accounts:</strong> Check all three credit reports for AU accounts you may have forgotten about</li>
            <li><strong>Applying for low-value cards first:</strong> A Freedom Rise uses the same slot as a Sapphire Preferred with a much smaller bonus</li>
            <li><strong>Not spacing applications:</strong> Chase may deny back-to-back applications even under 5/24 &mdash; wait 3+ months between Chase apps</li>
            <li><strong>Miscounting business cards:</strong> Amex and Chase business cards do not count, but some US Bank business cards may appear on personal reports</li>
          </ul>
          <p className="text-sm">
            The <Link href="/" className="text-brand-gold hover:text-amber-600">524 Tracker</Link> helps prevent these mistakes by showing exactly what counts and when each card drops off.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can I get approved for a Chase card at exactly 5/24?</h3>
              <p className="text-sm">
                No. Chase requires you to be under 5/24, meaning 4 or fewer new accounts in the past 24 months. At exactly 5/24, your application will be automatically denied for all Chase personal cards. You need to wait until one or more accounts drop off.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Do Chase Ink business cards count toward my 5/24 number?</h3>
              <p className="text-sm">
                No. Chase Ink business cards (Preferred, Cash, and Unlimited) do not report to personal credit bureaus and do not add to your 5/24 count. They are also exempt from the 5/24 rule when applying, meaning you can get approved even if you are over 5/24.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">How long does it take for a card to fall off my 5/24 count?</h3>
              <p className="text-sm">
                A card drops off 24 months after the month it was opened, counting by calendar month. A card opened on March 15, 2024 drops off at the start of April 2026, not on March 15. The effective wait is 24 to 25 months depending on your open date within the month.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the authorized user workaround still work in 2026?</h3>
              <p className="text-sm">
                Based on crowdsourced community data as of March 2026, calling the Chase reconsideration line to explain that an AU account is not your own application has worked for many applicants. Results vary and this is not guaranteed &mdash; Chase agents have individual discretion.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Should I apply for Chase Sapphire Preferred or Reserve first?</h3>
              <p className="text-sm">
                Most strategists recommend the <a href="#apply-chase-sapphire-preferred" target="_blank" rel="nofollow sponsored noopener noreferrer">Sapphire Preferred</a> first due to its lower $95 annual fee and lower minimum spend requirement ($4,000 vs. $4,000 in 3 months). You cannot hold both simultaneously, and there is a 48-month cooldown between Sapphire bonuses. Choose based on your travel spending patterns and annual fee tolerance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center my-6">
            <Link href="/" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
              Track your 5/24 status automatically with our free 524 Tracker tool &rarr;
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-2">
            This tool is for informational purposes only and does not constitute financial advice. Credit card approval decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility.
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Some links on this page are affiliate links. We may receive compensation if you apply and are approved, at no additional cost to you. This does not affect our recommendations.
          </p>
          <p className="text-xs text-gray-500">
            Reviewed by an experienced credit card strategist and verified against crowdsourced community data.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: 'amex-once-per-lifetime-rule',
    title: 'Amex Once-Per-Lifetime Rule: What You Need to Know',
    description:
      'Amex limits welcome bonuses to once per card per lifetime. Learn about NLL offers, pop-up jail, family card rules, and how to maximize bonus eligibility.',
    keywords: 'amex once per lifetime rule, amex lifetime bonus rule, amex popup jail, amex NLL offer, amex welcome bonus eligibility',
    datePublished: '2026-03-11',
    dateModified: '2026-03-11',
    readTimeMinutes: 8,
    ctaText: 'Track Your Amex Cards Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'What is an Amex NLL (no lifetime language) offer?',
        answer:
          'An NLL offer is a targeted Amex welcome bonus offer that does not include the standard "once per lifetime" restriction language. These offers may allow you to earn a second welcome bonus on a card you have previously held, though Amex can change these offers at any time.',
      },
      {
        question: 'How do I know if I am in Amex pop-up jail?',
        answer:
          'When you start an Amex application and reach the final review page, a pop-up message may appear stating you are not eligible for the welcome bonus. This is commonly called "pop-up jail." You can still proceed with the application, but you will not receive the bonus.',
      },
      {
        question: 'Does the lifetime rule apply separately to each card in the same family?',
        answer:
          'Yes. Amex tracks lifetime eligibility at the card product level, not the card family level. The Amex Gold and Amex Platinum are separate products, so earning the Gold bonus does not affect your Platinum bonus eligibility.',
      },
      {
        question: 'Can my spouse earn a bonus on the same Amex card I already have?',
        answer:
          'Yes. The lifetime rule applies per person, not per household. Your spouse can apply for and earn the welcome bonus on any Amex card regardless of your history, as long as they have not previously held that specific card product themselves.',
      },
      {
        question: 'Does upgrading an Amex card trigger the lifetime rule?',
        answer:
          'It may. If you upgrade from Amex Green to Amex Gold, Amex may consider you to have "held" the Gold card. Future applications for a new Gold card may trigger the pop-up. Community data suggests downgrading and waiting before applying for a new card may help, but results are not guaranteed.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/citi-8-65-rule', label: 'Citi 8/65 Rule: Application Timing Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/top-cards', label: 'Top Card Recommendations' },
      { href: '/faq', label: 'Credit Card Rules FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Amex once-per-lifetime rule restricts welcome bonuses to one per card product per lifetime. Once you have earned a bonus on a specific Amex card &mdash; or in some cases, simply held the card &mdash; you are permanently ineligible for that same bonus again. Understanding NLL offers, pop-up jail, and the correct application order is essential for maximizing your Amex card value.
        </p>

        <p className="text-xs text-gray-500 mt-2 mb-4">Last verified: March 2026 &middot; Rules may change &mdash; verify with American Express before applying</p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-it-works">
            How Does the Amex Once-Per-Lifetime Rule Work?
          </h2>
          <p className="text-sm mb-3">
            Amex&apos;s official terms state that you may not be eligible for a welcome bonus if you have or have had the same card product in the past. This is a permanent restriction with no time-based reset.
          </p>
          <p className="text-sm mb-3">
            Unlike Citi&apos;s 24-month rule or Chase&apos;s 48-month Sapphire rule, the Amex lifetime rule never expires. If you earned the <a href="#apply-amex-platinum" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Platinum</a> welcome bonus in 2018, you are still ineligible for the Platinum bonus in 2026 &mdash; even if you closed the card years ago.
          </p>
          <p className="text-sm">
            Amex enforces this through a pop-up notification during the application process and through their internal records of your card history.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="card-bonus-table">
            Which Amex Cards Have the Best Bonuses to Prioritize?
          </h2>
          <p className="text-sm mb-4">
            Since each bonus can only be earned once, the order in which you apply matters significantly. Here are the major Amex cards and their typical bonus structures as of March 2026.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Card</th>
                  <th className="text-left px-4 py-2 font-medium">Annual Fee</th>
                  <th className="text-left px-4 py-2 font-medium">Typical Bonus</th>
                  <th className="text-left px-4 py-2 font-medium">Lifetime Rule?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Platinum</td><td className="px-4 py-2">$695</td><td className="px-4 py-2">80,000&ndash;150,000 MR</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Gold</td><td className="px-4 py-2">$325</td><td className="px-4 py-2">60,000&ndash;90,000 MR</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Amex Green</td><td className="px-4 py-2">$150</td><td className="px-4 py-2">40,000&ndash;60,000 MR</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Hilton Honors Surpass</td><td className="px-4 py-2">$150</td><td className="px-4 py-2">130,000&ndash;150,000 pts</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Hilton Honors Aspire</td><td className="px-4 py-2">$550</td><td className="px-4 py-2">150,000&ndash;175,000 pts</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Marriott Bonvoy Brilliant</td><td className="px-4 py-2">$650</td><td className="px-4 py-2">95,000&ndash;150,000 pts</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Delta SkyMiles Gold</td><td className="px-4 py-2">$150</td><td className="px-4 py-2">50,000&ndash;70,000 miles</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Delta SkyMiles Platinum</td><td className="px-4 py-2">$350</td><td className="px-4 py-2">70,000&ndash;90,000 miles</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Blue Business Plus</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">15,000 MR</td><td className="px-4 py-2 text-brand-red font-medium">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Since every bonus is a one-time opportunity, prioritize the highest-value bonuses first. The <a href="#apply-amex-platinum" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Platinum</a> and <a href="#apply-amex-gold" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Gold</a> are typically the most valuable starting points due to their high Membership Rewards bonuses and strong transfer partner ecosystems.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="nll-offers">
            What Are NLL (No Lifetime Language) Offers?
          </h2>
          <p className="text-sm mb-3">
            NLL offers are targeted Amex promotions that omit the standard &ldquo;once per lifetime&rdquo; restriction language from the offer terms. These may allow you to earn a second welcome bonus on a card you have previously held.
          </p>
          <p className="text-sm mb-3">
            NLL offers are not publicly available. They appear as targeted offers through:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Direct mailers from Amex to your physical address</li>
            <li>Targeted emails with unique application links</li>
            <li>In-app offers within your Amex account</li>
            <li>Referral links (in some cases)</li>
          </ul>
          <p className="text-sm mb-3">
            Important: Amex has tightened NLL availability in recent years. As of early 2026, these offers are less common than in 2023&ndash;2024. Rules may change at any time, and there is no guarantee that any NLL offer will be honored.
          </p>
          <p className="text-sm">
            Always screenshot the offer terms showing the absence of lifetime language before applying. This serves as documentation if there is a dispute about your bonus eligibility.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="popup-jail">
            How Do You Avoid Amex Pop-Up Jail?
          </h2>
          <p className="text-sm mb-3">
            Pop-up jail is the community term for Amex&apos;s bonus eligibility warning that appears during the application process. If you see the pop-up, you may still be approved for the card but will not receive the welcome bonus.
          </p>
          <h3 className="font-display font-bold text-base text-brand-navy mb-2">Strategies That May Help (Not Guaranteed)</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Increase spending on existing Amex cards for 3&ndash;6 months before applying</li>
            <li>Keep current Amex cards open and active rather than closing them</li>
            <li>Use Amex Offers (the in-app shopping deals) regularly</li>
            <li>Wait at least 90 days between Amex applications</li>
            <li>Avoid applying for and canceling Amex cards in rapid succession</li>
          </ul>
          <p className="text-sm">
            Pop-up jail is not permanent. Many cardholders report that consistent spending on existing Amex products eventually clears the pop-up. Check with your issuer for the most current policies and always verify eligibility before applying.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="family-rules">
            Does the Lifetime Rule Apply Per Person or Per Household?
          </h2>
          <p className="text-sm mb-3">
            The lifetime rule applies per person, not per household. Each individual has their own independent bonus eligibility for every Amex card product.
          </p>
          <p className="text-sm mb-3">
            This means your spouse or partner can apply for and earn the welcome bonus on any Amex card &mdash; even if you currently hold or have previously held that exact card. Each person&apos;s application history is tracked separately.
          </p>
          <p className="text-sm mb-3">
            Being an authorized user on someone else&apos;s Amex card does not affect your own lifetime bonus eligibility. Only accounts where you were the primary applicant count against your lifetime eligibility.
          </p>
          <p className="text-sm">
            Household strategies &mdash; where both partners apply for the highest-value cards &mdash; can effectively double the total bonuses earned across a family, since each person gets their own lifetime opportunity on every card product.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="optimal-order">
            What Is the Best Order to Apply for Amex Cards?
          </h2>
          <p className="text-sm mb-3">
            Because each bonus can only be earned once, the application order determines your total lifetime value. Prioritize the highest-value bonuses first, then work down.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Tier 1 (apply first):</strong> <a href="#apply-amex-platinum" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Platinum</a> (80,000&ndash;150,000 MR), <a href="#apply-amex-gold" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Gold</a> (60,000&ndash;90,000 MR)</li>
            <li><strong>Tier 2:</strong> <a href="#apply-amex-hilton-aspire" target="_blank" rel="nofollow sponsored noopener noreferrer">Hilton Aspire</a>, <a href="#apply-amex-marriott-brilliant" target="_blank" rel="nofollow sponsored noopener noreferrer">Marriott Brilliant</a>, Delta Platinum</li>
            <li><strong>Tier 3:</strong> <a href="#apply-amex-green" target="_blank" rel="nofollow sponsored noopener noreferrer">Amex Green</a>, Hilton Surpass, Delta Gold</li>
            <li><strong>Tier 4:</strong> Blue Business Plus, Everyday Preferred, no-fee options</li>
          </ul>
          <p className="text-sm mb-3">
            Wait for elevated offers before applying. The Amex Platinum bonus, for example, has ranged from 80,000 to 150,000 MR points in recent years. Since you can only earn it once, waiting for a higher offer is often worth the patience.
          </p>
          <p className="text-sm">
            Track all of your Amex applications and bonus history with the <Link href="/" className="text-brand-gold hover:text-amber-600">524 Tracker tool</Link> so you always know which bonuses you have already earned and which are still available.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What is an Amex NLL (no lifetime language) offer?</h3>
              <p className="text-sm">
                An NLL offer is a targeted Amex welcome bonus offer that omits the standard &ldquo;once per lifetime&rdquo; restriction language from the terms. These offers may allow you to earn a second welcome bonus on a card you have previously held, though Amex can change or revoke these offers at any time. Always screenshot the offer terms before applying.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">How do I know if I am in Amex pop-up jail?</h3>
              <p className="text-sm">
                When you begin an Amex application and reach the final review step, a pop-up message may appear stating you are not eligible for the welcome bonus on this product. This is pop-up jail. You can still proceed and get the card, but the welcome bonus will not be awarded. The only way to check is to start an application and look for the pop-up.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the lifetime rule apply separately to each card in the same family?</h3>
              <p className="text-sm">
                Yes. Amex tracks lifetime eligibility at the individual card product level. The Amex Gold and Amex Platinum are separate products with independent lifetime eligibility. The Delta Gold and Delta Platinum are also separate. Earning one bonus does not affect eligibility for the other.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Can my spouse earn a bonus on the same Amex card I already have?</h3>
              <p className="text-sm">
                Yes. The lifetime rule is per person, not per household. Your spouse or partner can apply for and earn the welcome bonus on any Amex card regardless of your personal card history, as long as they have not previously held that specific product themselves.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does upgrading an Amex card trigger the lifetime rule?</h3>
              <p className="text-sm">
                It may. If you upgrade from one Amex product to another (for example, Green to Gold), Amex may consider you to have &ldquo;held&rdquo; the upgraded product. Future applications for that same card may trigger the pop-up. Community data suggests waiting and applying fresh rather than upgrading if the welcome bonus is your goal. Results are not guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center my-6">
            <Link href="/" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
              Track Your Amex Cards Free &rarr;
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-2">
            This tool is for informational purposes only and does not constitute financial advice. Credit card approval decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility.
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Some links on this page are affiliate links. We may receive compensation if you apply and are approved, at no additional cost to you. This does not affect our recommendations.
          </p>
          <p className="text-xs text-gray-500">
            Reviewed by an experienced credit card strategist and verified against crowdsourced community data.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: 'citi-8-65-rule',
    title: 'Citi 8/65 Rule: Application Timing Guide',
    description:
      'Citi limits credit card applications to 1 per 8 days and 2 per 65 days. Learn the 1/8, 2/65, and 6/6 rules plus optimal timing for Citi cards.',
    keywords: 'citi 8/65 rule, citi 1/8 rule, citi 2/65 rule, citi application rules, citi credit card timing, citi 6/6 rule',
    datePublished: '2026-03-11',
    dateModified: '2026-03-11',
    readTimeMinutes: 6,
    ctaText: 'Track Your Citi Applications Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'What is the difference between the Citi 1/8 and 2/65 rules?',
        answer:
          'The 1/8 rule limits you to 1 Citi application per 8-day period. The 2/65 rule limits you to 2 Citi applications per 65-day period. Both rules run simultaneously, so you need to satisfy both before applying again.',
      },
      {
        question: 'Does the Citi 8/65 rule apply to business cards?',
        answer:
          'Yes. The Citi 8/65 rule applies to both personal and business card applications. All Citi credit card applications count toward your 1/8 and 2/65 limits regardless of card type.',
      },
      {
        question: 'What is the Citi 6/6 rule?',
        answer:
          'The Citi 6/6 rule means Citi may deny your application if you have 6 or more hard inquiries on your credit report in the past 6 months, from any bank. This is separate from the 1/8 and 2/65 application velocity rules.',
      },
      {
        question: 'How long should I wait between Citi applications?',
        answer:
          'Wait at least 9 days between Citi applications to satisfy the 1/8 rule (8 days plus a buffer day). If you have already applied twice recently, wait at least 66 days from your first application to satisfy the 2/65 rule.',
      },
      {
        question: 'Does the Citi 24-month bonus rule still apply?',
        answer:
          'Yes. Even if you satisfy the 8/65 velocity rules, Citi restricts welcome bonuses to once per 24 months for the same card product or card family. You must close the card and wait 24 months before earning the bonus again.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/amex-once-per-lifetime-rule', label: 'Amex Once-Per-Lifetime Rule Guide' },
      { href: '/blog/bank-of-america-2-3-4-rule', label: 'Bank of America 2/3/4 Rule Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/faq', label: 'Credit Card Rules FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Citi 8/65 rule limits credit card applications to 1 per 8 days and 2 per 65 days. These velocity restrictions apply to all Citi card applications &mdash; personal and business. Combined with the 6/6 inquiry rule and the 24-month bonus restriction, timing your Citi applications correctly is essential for approval and bonus eligibility.
        </p>

        <p className="text-xs text-gray-500 mt-2 mb-4">Last verified: March 2026 &middot; Rules may change &mdash; verify with Citi before applying</p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="rules-overview">
            What Are Citi&apos;s Credit Card Application Rules?
          </h2>
          <p className="text-sm mb-4">
            Citi enforces multiple overlapping application velocity rules. You must satisfy all of them simultaneously to be approved. Here is the complete summary.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Rule Name</th>
                  <th className="text-left px-4 py-2 font-medium">Description</th>
                  <th className="text-left px-4 py-2 font-medium">Window</th>
                  <th className="text-left px-4 py-2 font-medium">Affects</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">1/8 Rule</td><td className="px-4 py-2">Max 1 Citi application</td><td className="px-4 py-2">8 days</td><td className="px-4 py-2">All Citi cards</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">2/65 Rule</td><td className="px-4 py-2">Max 2 Citi applications</td><td className="px-4 py-2">65 days</td><td className="px-4 py-2">All Citi cards</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">6/6 Rule</td><td className="px-4 py-2">Max 6 hard inquiries (any bank)</td><td className="px-4 py-2">6 months</td><td className="px-4 py-2">Approval odds</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">1/24 Bonus Rule</td><td className="px-4 py-2">One bonus per card family</td><td className="px-4 py-2">24 months</td><td className="px-4 py-2">Welcome bonus only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            The 1/8 and 2/65 rules are the core velocity restrictions. The 6/6 rule is a soft guideline that affects approval likelihood. The 1/24 bonus rule is separate &mdash; it controls bonus eligibility, not application approval.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-1-8-works">
            How Does the Citi 1/8 Rule Work?
          </h2>
          <p className="text-sm mb-3">
            The 1/8 rule means you can submit only 1 Citi credit card application per 8-day period. If you apply for a second Citi card within 8 days of your last application, the second application will be automatically denied.
          </p>
          <p className="text-sm mb-3">
            The 8-day count starts from the date of your last Citi application, regardless of whether that application was approved or denied. To be safe, wait at least 9 full days between applications to account for any timing edge cases.
          </p>
          <p className="text-sm">
            This rule applies to all Citi credit card products including personal cards, business cards, and co-branded cards like the <a href="#apply-citi-strata-premier" target="_blank" rel="nofollow sponsored noopener noreferrer">Citi Strata Premier</a> and Citi AAdvantage cards.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-2-65-works">
            How Does the Citi 2/65 Rule Work?
          </h2>
          <p className="text-sm mb-3">
            The 2/65 rule limits you to 2 Citi credit card applications within any 65-day rolling window. After your second application within 65 days, you must wait until the 65-day window resets before submitting another.
          </p>
          <p className="text-sm mb-3">
            <strong>Example:</strong> You apply for the Citi Strata Premier on January 5 and the Citi AAdvantage Platinum on January 15. You have now used both of your 2/65 slots. Your next Citi application cannot be submitted until March 12 (65 days after January 5).
          </p>
          <p className="text-sm">
            The 2/65 rule runs independently of the 1/8 rule. You must satisfy both. If you apply for two cards on days 1 and 9, you have satisfied 1/8 but used both 2/65 slots. Your next application must wait 65 days from day 1.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="6-6-rule">
            What Is the Citi 6/6 Inquiry Rule?
          </h2>
          <p className="text-sm mb-3">
            The 6/6 rule is a softer guideline: Citi may deny your application if you have 6 or more hard inquiries on your credit report from any bank within the past 6 months. This is separate from the 1/8 and 2/65 velocity rules.
          </p>
          <p className="text-sm mb-3">
            Unlike the hard limits of 1/8 and 2/65, the 6/6 rule is not an absolute cutoff. Some applicants report approvals with more than 6 inquiries, while others are denied with fewer. The rule appears to be one factor in Citi&apos;s overall approval algorithm.
          </p>
          <p className="text-sm">
            To manage your inquiry count, space out applications across banks and consider which bureau each issuer pulls. Citi typically pulls from Experian or Equifax depending on your state.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="thankyou-strategy">
            What Is the Best Strategy for Citi ThankYou Points Cards?
          </h2>
          <p className="text-sm mb-3">
            Citi&apos;s ThankYou Points ecosystem centers around the <a href="#apply-citi-strata-premier" target="_blank" rel="nofollow sponsored noopener noreferrer">Citi Strata Premier</a>, which earns ThankYou Points transferable to airline and hotel partners. The optimal approach accounts for both velocity rules and bonus eligibility windows.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>First application:</strong> Citi Strata Premier for its strong welcome bonus (typically 75,000 ThankYou Points)</li>
            <li><strong>Wait 9+ days,</strong> then apply for your second Citi card within the 65-day window</li>
            <li><strong>Wait 65+ days</strong> from your first application before applying for a third Citi card</li>
            <li><strong>Track your 24-month bonus windows</strong> for each card family using the <Link href="/" className="text-brand-gold hover:text-amber-600">524 Tracker</Link></li>
          </ul>
          <p className="text-sm">
            Remember that Citi&apos;s 24-month bonus rule applies at the card family level. The Premier and the old Prestige are in the same family, so holding or earning a bonus on either affects the other.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="aa-cards">
            How Do Citi AAdvantage Cards Fit the 8/65 Rules?
          </h2>
          <p className="text-sm mb-3">
            Citi AAdvantage cards follow the same 1/8, 2/65, and 6/6 rules as all other Citi cards. They also have their own 24-month bonus family restrictions.
          </p>
          <p className="text-sm mb-3">
            The AAdvantage Platinum Select, Executive, and MileUp are treated as separate card families for bonus purposes. You can earn the bonus on each within a 24-month period as long as you satisfy the velocity rules.
          </p>
          <p className="text-sm">
            For travelers focused on American Airlines, combining a ThankYou Points card (Strata Premier) with an AAdvantage card provides access to both transfer partners and direct AA mile earning. Space the applications to comply with 2/65 timing.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="timing-calendar">
            How Should You Time Your Citi Applications?
          </h2>
          <p className="text-sm mb-3">
            Here is a practical timing calendar for maximizing Citi approvals while respecting all velocity rules.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Day 1:</strong> Submit first Citi application</li>
            <li><strong>Day 9+:</strong> Submit second Citi application (satisfies 1/8 rule)</li>
            <li><strong>Day 66+:</strong> Submit third Citi application (satisfies 2/65 from first app)</li>
            <li><strong>Day 75+:</strong> Submit fourth Citi application (satisfies 1/8 from third app and 2/65 from second app)</li>
          </ul>
          <p className="text-sm mb-3">
            This pattern yields up to 4 Citi cards in roughly 75 days. Add buffer days for safety &mdash; applying on day 10 and day 70 instead of the minimums reduces the risk of edge-case denials.
          </p>
          <p className="text-sm">
            Keep your overall inquiry count below 6 in the past 6 months for the best approval odds. Use the <Link href="/" className="text-brand-gold hover:text-amber-600">application tracker</Link> to monitor your exact dates and windows.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What is the difference between the Citi 1/8 and 2/65 rules?</h3>
              <p className="text-sm">
                The 1/8 rule limits you to 1 Citi application per 8-day period. The 2/65 rule limits you to 2 Citi applications per 65-day period. Both rules run simultaneously &mdash; you must satisfy both before submitting your next application. A denied application still counts toward both limits.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the Citi 8/65 rule apply to business cards?</h3>
              <p className="text-sm">
                Yes. The Citi 1/8 and 2/65 rules apply to all Citi credit card applications regardless of whether the card is personal or business. Both personal and business applications count toward your velocity limits.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What is the Citi 6/6 rule?</h3>
              <p className="text-sm">
                The Citi 6/6 rule means Citi may deny your application if you have 6 or more hard inquiries from any bank on your credit report in the past 6 months. Unlike the hard limits of 1/8 and 2/65, the 6/6 rule is more of a soft guideline that affects approval probability.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">How long should I wait between Citi applications?</h3>
              <p className="text-sm">
                Wait at least 9 days between individual Citi applications to satisfy the 1/8 rule with a buffer day. If you have already applied twice in the current 65-day window, wait at least 66 days from your first application before submitting a third.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the Citi 24-month bonus rule still apply?</h3>
              <p className="text-sm">
                Yes. Even if you satisfy all velocity rules (1/8, 2/65, 6/6), Citi restricts welcome bonuses to once per 24 months for the same card product or card family. You typically must close the card and wait 24 months before being eligible for the same bonus again. Check with Citi for the most current terms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center my-6">
            <Link href="/" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
              Track Your Citi Applications Free &rarr;
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-2">
            This tool is for informational purposes only and does not constitute financial advice. Credit card approval decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility.
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Some links on this page are affiliate links. We may receive compensation if you apply and are approved, at no additional cost to you. This does not affect our recommendations.
          </p>
          <p className="text-xs text-gray-500">
            Reviewed by an experienced credit card strategist and verified against crowdsourced community data.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: 'bank-of-america-2-3-4-rule',
    title: 'Bank of America 2/3/4 Rule: How It Works',
    description:
      'Bank of America limits cards to 2 per 30 days, 3 per 12 months, and 4 per 24 months. Learn tracking tips, Preferred Rewards impact, and card priority.',
    keywords: 'bank of america 2/3/4 rule, boa 2/3/4 rule, bank of america credit card rules, boa application limits, bank of america velocity rule',
    datePublished: '2026-03-11',
    dateModified: '2026-03-11',
    readTimeMinutes: 6,
    ctaText: 'Track Your BoA Applications Free',
    ctaHref: '/',
    faqSchema: [
      {
        question: 'What does the Bank of America 2/3/4 rule mean?',
        answer:
          'The 2/3/4 rule means Bank of America limits cardholders to 2 new cards per 30 days, 3 new cards per 12 months, and 4 new cards per 24 months. All three limits apply simultaneously, so you must be under all thresholds to be approved.',
      },
      {
        question: 'Does the 2/3/4 rule count cards from other banks?',
        answer:
          'The 2/3/4 rule counts only Bank of America credit cards, not cards from other banks. However, BoA does review your overall credit profile and may deny applications if you have too many recent accounts across all issuers.',
      },
      {
        question: 'Does Preferred Rewards status help with BoA card approvals?',
        answer:
          'Preferred Rewards status does not exempt you from the 2/3/4 rule, but it may improve your overall approval odds and can unlock higher credit limits. BoA values the banking relationship when making credit decisions.',
      },
      {
        question: 'Do Bank of America business cards count toward 2/3/4?',
        answer:
          'Based on crowdsourced community data, BoA business card applications may count toward the 2/3/4 limits. The community consensus is less certain than with other bank rules, so track both personal and business applications to be safe.',
      },
      {
        question: 'What is the BoA 3/12 and 7/12 rule?',
        answer:
          'The 3/12 rule is part of the 2/3/4 system — max 3 BoA cards per 12 months. The 7/12 rule is a separate guideline suggesting BoA may deny applications if you have 7 or more new accounts across all banks in the past 12 months.',
      },
    ],
    relatedLinks: [
      { href: '/blog/chase-5-24-rule', label: 'Chase 5/24 Rule: Complete Guide' },
      { href: '/blog/amex-once-per-lifetime-rule', label: 'Amex Once-Per-Lifetime Rule Guide' },
      { href: '/blog/citi-8-65-rule', label: 'Citi 8/65 Rule: Application Timing Guide' },
      { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
      { href: '/faq', label: 'Credit Card Rules FAQ' },
    ],
    content: () => (
      <>
        <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
          The Bank of America 2/3/4 rule limits credit card approvals to 2 new BoA cards per 30 days, 3 per 12 months, and 4 per 24 months. Unlike Chase&apos;s 5/24, this rule only counts Bank of America cards &mdash; not cards from other issuers. Understanding how rolling windows reset, how Preferred Rewards status affects approvals, and which BoA cards to prioritize is key to maximizing your applications.
        </p>

        <p className="text-xs text-gray-500 mt-2 mb-4">Last verified: March 2026 &middot; Rules may change &mdash; verify with Bank of America before applying</p>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-is-234">
            What Is the Bank of America 2/3/4 Rule?
          </h2>
          <p className="text-sm mb-4">
            The 2/3/4 rule is Bank of America&apos;s application velocity restriction, limiting how many new BoA credit cards you can open within specific time windows. All three limits apply simultaneously.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-light">
                  <th className="text-left px-4 py-2 font-medium">Rule</th>
                  <th className="text-left px-4 py-2 font-medium">Limit</th>
                  <th className="text-left px-4 py-2 font-medium">Window</th>
                  <th className="text-left px-4 py-2 font-medium">Resets</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">2/30</td><td className="px-4 py-2">2 BoA cards</td><td className="px-4 py-2">30 days</td><td className="px-4 py-2">Rolling &mdash; 30 days from each approval</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">3/12</td><td className="px-4 py-2">3 BoA cards</td><td className="px-4 py-2">12 months</td><td className="px-4 py-2">Rolling &mdash; 12 months from each approval</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">4/24</td><td className="px-4 py-2">4 BoA cards</td><td className="px-4 py-2">24 months</td><td className="px-4 py-2">Rolling &mdash; 24 months from each approval</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Each window is a rolling period measured from each individual approval date. When your oldest BoA approval within a window passes the threshold, that slot opens up again. Track your exact approval dates to know when each slot becomes available.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="only-boa">
            Does the 2/3/4 Rule Count Cards from Other Banks?
          </h2>
          <p className="text-sm mb-3">
            No. The 2/3/4 rule counts only Bank of America credit cards. Cards from Chase, Amex, Citi, and other issuers do not count toward these limits.
          </p>
          <p className="text-sm mb-3">
            However, Bank of America does review your overall credit profile. The community has identified a separate informal guideline known as the <strong>7/12 rule</strong>: BoA may deny applications if you have opened 7 or more new accounts across all banks in the past 12 months. This is not as firm as the 2/3/4 limits but has been observed in numerous data points.
          </p>
          <p className="text-sm">
            This means you could be under the 2/3/4 limits for BoA cards specifically but still get denied due to too many total new accounts across all issuers. Monitor your overall account velocity if you are applying to multiple banks.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="preferred-rewards">
            How Does Preferred Rewards Status Affect BoA Approvals?
          </h2>
          <p className="text-sm mb-3">
            Bank of America&apos;s Preferred Rewards program provides tiered benefits based on your combined BoA banking and Merrill Lynch investment balances. While Preferred Rewards status does not exempt you from the 2/3/4 rule, it may improve your approval odds.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Gold ($20K+ combined balance):</strong> 25% bonus on BoA card rewards, may improve approval odds</li>
            <li><strong>Platinum ($50K+):</strong> 50% bonus on rewards, stronger relationship signal for approvals</li>
            <li><strong>Platinum Honors ($100K+):</strong> 75% bonus on rewards, highest-tier relationship status</li>
          </ul>
          <p className="text-sm mb-3">
            The Preferred Rewards boost is particularly valuable for the <a href="#apply-boa-premium-rewards" target="_blank" rel="nofollow sponsored noopener noreferrer">BoA Premium Rewards</a> card, where the 75% Platinum Honors bonus increases the effective cash back rate significantly.
          </p>
          <p className="text-sm">
            Having a BoA checking account and existing banking relationship is also a positive signal for approval. BoA values their existing customers when making credit decisions, though this does not override the hard 2/3/4 velocity limits.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="rolling-windows">
            How Do the Rolling Window Resets Work?
          </h2>
          <p className="text-sm mb-3">
            Each of the three windows (30-day, 12-month, 24-month) is a rolling period that resets independently based on individual approval dates.
          </p>
          <p className="text-sm mb-3">
            <strong>Example:</strong> You are approved for BoA cards on the following dates:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>Card 1: January 10, 2025</li>
            <li>Card 2: January 20, 2025</li>
            <li>Card 3: June 15, 2025</li>
          </ul>
          <p className="text-sm mb-3">
            As of March 11, 2026, your status is:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>2/30:</strong> 0 cards in last 30 days &mdash; both slots open</li>
            <li><strong>3/12:</strong> 1 card in last 12 months (Card 3) &mdash; 2 slots open</li>
            <li><strong>4/24:</strong> 3 cards in last 24 months &mdash; 1 slot open</li>
          </ul>
          <p className="text-sm">
            You could apply for a new BoA card today. Card 1 drops off your 4/24 count on January 10, 2027, opening another slot. Use the <Link href="/" className="text-brand-gold hover:text-amber-600">524 Tracker</Link> to calculate your exact rolling window dates.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="which-cards">
            Which BoA Cards Should You Prioritize?
          </h2>
          <p className="text-sm mb-3">
            Since the 2/3/4 rule limits how many BoA cards you can open, choosing the right ones first maximizes your return.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li><strong>Priority 1:</strong> <a href="#apply-boa-premium-rewards" target="_blank" rel="nofollow sponsored noopener noreferrer">BoA Premium Rewards</a> &mdash; best general rewards card, especially with Preferred Rewards status. $95 annual fee, strong welcome bonus.</li>
            <li><strong>Priority 2:</strong> <a href="#apply-boa-travel-rewards" target="_blank" rel="nofollow sponsored noopener noreferrer">BoA Travel Rewards</a> &mdash; no annual fee, solid travel rewards card, good as a long-term keeper</li>
            <li><strong>Priority 3:</strong> BoA Customized Cash Rewards &mdash; $0 annual fee, 3% in a category of your choice</li>
            <li><strong>Priority 4:</strong> BoA Unlimited Cash Rewards &mdash; $0 annual fee, flat 1.5% cash back on everything</li>
          </ul>
          <p className="text-sm">
            If you have Preferred Rewards Platinum Honors status, multiple BoA cash back cards become significantly more valuable due to the 75% rewards boost. Some strategists open multiple Customized Cash cards in different 3% categories to maximize return across spending types.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="business-cards">
            Do BoA Business Cards Count Toward the 2/3/4 Rule?
          </h2>
          <p className="text-sm mb-3">
            The community consensus on whether BoA business cards count toward 2/3/4 is less certain than with other bank rules. Based on crowdsourced data, business card applications likely do count toward the 2/3/4 limits.
          </p>
          <p className="text-sm mb-3">
            Unlike Chase Ink cards (which are clearly exempt from 5/24), BoA business cards do not provide a reliable &ldquo;free slot&rdquo; workaround. If you plan to apply for BoA business cards, count them toward your 2/3/4 total to be safe.
          </p>
          <p className="text-sm">
            BoA business cards do not appear on your personal credit report, which means they do not count toward Chase 5/24 or other banks&apos; personal account velocity rules. The 2/3/4 restriction is specific to Bank of America&apos;s internal tracking.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="interaction">
            How Does the 2/3/4 Rule Interact with Other Bank Rules?
          </h2>
          <p className="text-sm mb-3">
            The BoA 2/3/4 rule operates independently from other banks&apos; restrictions, but your overall application activity can affect approvals across issuers.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
            <li>BoA personal cards count toward <Link href="/blog/chase-5-24-rule" className="text-brand-gold hover:text-amber-600">Chase 5/24</Link> (they appear on personal credit reports)</li>
            <li>BoA applications generate hard inquiries that affect <Link href="/blog/citi-8-65-rule" className="text-brand-gold hover:text-amber-600">Citi&apos;s 6/6 rule</Link></li>
            <li>BoA business cards do not count toward Chase 5/24</li>
            <li>The BoA 7/12 informal rule considers total new accounts from all banks</li>
          </ul>
          <p className="text-sm">
            For a complete overview of how all bank rules interact, see the <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">Complete Bank Rules Guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What does the Bank of America 2/3/4 rule mean?</h3>
              <p className="text-sm">
                The 2/3/4 rule means Bank of America limits cardholders to 2 new BoA cards per 30 days, 3 new BoA cards per 12 months, and 4 new BoA cards per 24 months. All three limits apply simultaneously, so you must be under all three thresholds to be approved for a new card.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does the 2/3/4 rule count cards from other banks?</h3>
              <p className="text-sm">
                No. The 2/3/4 rule counts only Bank of America credit cards. Cards from Chase, Amex, Citi, Capital One, and other issuers do not count toward these limits. However, BoA may separately consider your overall credit profile and total new accounts when making approval decisions.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Does Preferred Rewards status help with BoA card approvals?</h3>
              <p className="text-sm">
                Preferred Rewards status does not exempt you from the 2/3/4 rule, but it may improve your overall approval odds. BoA values existing banking relationships. Preferred Rewards also boosts card rewards by 25&ndash;75% depending on your tier, making BoA cards more valuable.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">Do Bank of America business cards count toward 2/3/4?</h3>
              <p className="text-sm">
                Based on crowdsourced community data, BoA business card applications likely do count toward the 2/3/4 limits. The data is less definitive than with other bank rules. To be safe, include business card applications in your 2/3/4 count when planning your application strategy.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">What is the BoA 3/12 and 7/12 rule?</h3>
              <p className="text-sm">
                The 3/12 rule is the middle component of the 2/3/4 system &mdash; a maximum of 3 new BoA cards per 12 months. The 7/12 rule is a separate informal guideline: BoA may deny applications if you have 7 or more total new accounts across all banks in the past 12 months. The 7/12 rule is less firmly established than 2/3/4 but has been observed in community data points.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center my-6">
            <Link href="/" className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
              Track Your BoA Applications Free &rarr;
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-2">
            This tool is for informational purposes only and does not constitute financial advice. Credit card approval decisions are made solely by the issuing bank. We cannot guarantee approval or bonus eligibility.
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Some links on this page are affiliate links. We may receive compensation if you apply and are approved, at no additional cost to you. This does not affect our recommendations.
          </p>
          <p className="text-xs text-gray-500">
            Reviewed by an experienced credit card strategist and verified against crowdsourced community data.
          </p>
        </section>
      </>
    ),
  },
];
