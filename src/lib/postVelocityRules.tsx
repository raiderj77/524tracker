import Link from 'next/link';
import type { BlogPost } from './posts';

export const postVelocityRules: BlogPost = {
  slug: 'credit-card-velocity-rules-explained',
  title: "Credit Card Velocity Rules: Complete Guide to Every Issuer's Application Limits",
  description:
    "Every credit card velocity rule explained — Chase 5/24, 2/30, Amex 1/5, 2/90, Citi 1/8, 2/65, BofA 2/3/4, Capital One, Barclays, US Bank, Wells Fargo, Discover. Check all rules instantly.",
  keywords:
    'credit card velocity rules, churning rules by bank, credit card application limits, bank application rules, velocity rules churning',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 12,
  ctaText: 'Check All Velocity Rules Instantly',
  ctaHref: '/velocity-checker',
  faqSchema: [
    {
      question: 'Do business card applications count toward velocity rules?',
      answer:
        'It depends on the issuer. Chase business cards do not count toward 5/24 for most products, but the 2/30 rule applies to both personal and business apps. Amex business credit cards count toward the 2/90 rule. Citi business cards are subject to 1/8 and 2/65. Always check issuer-specific rules before applying.',
    },
    {
      question: 'How can I check my current velocity status with each bank?',
      answer:
        'Pull your credit reports from all three bureaus and list every new account opened in the last 24 months with the exact open date. Then compare your counts against each issuer&apos;s velocity windows. Our Velocity Checker tool automates this &mdash; enter your recent applications and it calculates your status across all issuers instantly.',
    },
    {
      question: 'Do denied credit card applications count toward velocity rules?',
      answer:
        'For most issuers, denied applications do not count toward velocity rules because the rules track opened accounts, not applications submitted. However, Chase&apos;s 2/30 rule is an exception &mdash; it counts applications submitted, not approvals. A denial still uses one of your two application slots in a 30-day window.',
    },
  ],
  relatedLinks: [
    { href: '/velocity-checker', label: 'Velocity Checker Tool' },
    { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
    { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
    { href: '/blog/credit-card-application-order-strategy', label: 'Application Order Strategy' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        Velocity rules are the application limits each credit card issuer enforces to control how
        quickly you can open new accounts. Chase has 5/24 and 2/30. Amex has 1/5 and 2/90. Citi
        has 1/8 and 2/65. Bank of America has 2/3/4. Capital One, Barclays, US Bank, Wells Fargo,
        and Discover each have their own restrictions. Violating any of these rules results in an
        automatic denial &mdash; regardless of your credit score. This guide covers every major
        issuer&apos;s velocity rules in one place.
      </p>

      {/* What Are Velocity Rules */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-are-velocity-rules">
          What Are Credit Card Velocity Rules?
        </h2>
        <p className="text-sm mb-3">
          Velocity rules are internal policies that banks use to limit how many credit card
          applications or approvals you can have within a specific time window. Unlike credit score
          requirements, velocity rules are hard limits &mdash; if you exceed them, your application
          is automatically denied regardless of income, credit history, or relationship with the bank.
        </p>
        <p className="text-sm mb-3">
          These rules exist because banks want to prevent rapid account accumulation, which they
          associate with higher default risk and bonus abuse. Each issuer sets its own rules
          independently, and the rules do not interact with each other. Being at your limit with
          Chase does not affect your eligibility at Amex, and vice versa.
        </p>
        <p className="text-sm mb-3">
          Understanding velocity rules is essential for anyone who applies for more than one or two
          credit cards per year. A single mistimed application can waste a hard inquiry and lock
          you out of a card for months.{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Use our Velocity Checker to see where you stand across all issuers &rarr;
          </Link>
        </p>
      </section>

      {/* Chase */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="chase-velocity-rules">
          Chase Velocity Rules: 5/24 and 2/30
        </h2>
        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 5/24 Rule
        </h3>
        <p className="text-sm mb-3">
          Chase will automatically deny most personal credit card applications if you have opened
          5 or more new credit card accounts &mdash; with any bank &mdash; in the past 24 months.
          This is the most well-known velocity rule in the credit card space.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Window:</strong> 24 months from account open date</li>
          <li><strong>Threshold:</strong> 5 or more new accounts triggers denial</li>
          <li><strong>What counts:</strong> Personal credit cards from any bank, authorized user accounts (sometimes)</li>
          <li><strong>What doesn&apos;t count:</strong> Most business cards, charge accounts, store cards (varies), credit limit increases</li>
          <li><strong>Applies to:</strong> Most Chase personal cards; some business cards (e.g., Ink) are exempt</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Date math example:</strong> If you opened cards on January 15, March 3, June 20,
          August 8, and November 1 of 2024, your 5/24 count is 5 until January 2026 when the
          January 2024 card ages off. You become eligible for Chase again in February 2026.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 2/30 Rule
        </h3>
        <p className="text-sm mb-3">
          Chase limits you to 2 credit card applications (not approvals) within any rolling 30-day
          period. This applies to both personal and business card applications. If you submit a
          third application within 30 days of the first, it will be automatically denied.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Window:</strong> 30 rolling days</li>
          <li><strong>Threshold:</strong> 2 applications maximum</li>
          <li><strong>Key difference:</strong> Counts applications submitted, not approvals &mdash; denied apps count</li>
          <li><strong>Applies to:</strong> Both personal and business Chase applications</li>
        </ul>
      </section>

      {/* Amex */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="amex-velocity-rules">
          Amex Velocity Rules: 1/5 and 2/90
        </h2>
        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 1/5 Rule
        </h3>
        <p className="text-sm mb-3">
          American Express limits you to 1 credit card approval every 5 calendar days. If you are
          approved for an Amex credit card, you must wait at least 5 full days before applying for
          another Amex credit card. Charge cards (Platinum, Gold, Green) are exempt from this rule.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Window:</strong> 5 calendar days from last Amex credit card approval</li>
          <li><strong>Threshold:</strong> 1 credit card per 5 days</li>
          <li><strong>Exempt:</strong> Charge cards (Platinum, Gold, Green, Business Gold, Business Platinum)</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 2/90 Rule
        </h3>
        <p className="text-sm mb-3">
          Amex limits you to 2 credit card approvals within any 90-day rolling window. This applies
          to both personal and business credit cards. Charge cards are again exempt from this rule,
          meaning you could theoretically open 2 credit cards and multiple charge cards in the same
          90-day period.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Window:</strong> 90 rolling days</li>
          <li><strong>Threshold:</strong> 2 credit card approvals maximum</li>
          <li><strong>What counts:</strong> Personal and business Amex credit cards</li>
          <li><strong>Exempt:</strong> All Amex charge cards</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Date math example:</strong> You are approved for the Amex Blue Cash Preferred on
          January 10 and the Amex Hilton Surpass on January 20. Your next Amex credit card
          application must wait until April 10 (90 days from the first approval). However, you
          could apply for the Amex Gold charge card at any time during that window.
        </p>
      </section>

      {/* Citi */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="citi-velocity-rules">
          Citi Velocity Rules: 1/8 and 2/65
        </h2>
        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 1/8 Rule
        </h3>
        <p className="text-sm mb-3">
          Citi limits you to 1 credit card application every 8 calendar days. If you apply for any
          Citi credit card, you must wait at least 8 days before submitting another Citi application.
          This applies to both personal and business cards.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 2/65 Rule
        </h3>
        <p className="text-sm mb-3">
          Citi limits you to 2 credit card applications within any 65-day rolling window. This
          works in conjunction with the 1/8 rule. To maximize Citi applications, apply for card 1
          on day 0, card 2 on day 9 or later, then wait until day 65 from card 1 before applying
          for card 3.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>1/8 window:</strong> 8 calendar days between applications</li>
          <li><strong>2/65 window:</strong> 65 rolling days, maximum 2 applications</li>
          <li><strong>Applies to:</strong> Both personal and business Citi cards</li>
          <li><strong>Additional rule:</strong> 24-month bonus restriction on the same card family</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Date math example:</strong> Apply for the Citi Strata Premier on March 1. Earliest
          second application: March 9 (8 days later). Earliest third application: May 5 (65 days
          from March 1). If you applied on March 1 and March 9, your next Citi app must wait until
          at least May 5.
        </p>
      </section>

      {/* BofA */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="bofa-velocity-rules">
          Bank of America Velocity Rules: 2/3/4 and 7/12
        </h2>
        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 2/3/4 Rule
        </h3>
        <p className="text-sm mb-3">
          Bank of America enforces a tiered velocity limit: a maximum of 2 new BofA cards per 30
          days, 3 per 12 months, and 4 per 24 months. Unlike Chase 5/24, this rule only counts
          Bank of America cards &mdash; cards from other issuers do not factor in.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>2 per 30 days:</strong> Maximum 2 new BofA cards in a rolling 30-day window</li>
          <li><strong>3 per 12 months:</strong> Maximum 3 new BofA cards in a rolling 12-month window</li>
          <li><strong>4 per 24 months:</strong> Maximum 4 new BofA cards in a rolling 24-month window</li>
        </ul>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          The 7/12 Rule
        </h3>
        <p className="text-sm mb-3">
          Some data points suggest Bank of America may deny applications if you have opened 7 or
          more total credit cards (from any issuer) in the past 12 months. This is less formally
          confirmed than the 2/3/4 rule but has been reported by multiple applicants. If you are
          an aggressive applicant, keep this threshold in mind.
        </p>
      </section>

      {/* Capital One */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="capital-one-velocity-rules">
          Capital One Velocity Rules
        </h2>
        <p className="text-sm mb-3">
          Capital One does not publish formal velocity rules like other issuers, but community data
          reveals consistent patterns. Capital One generally limits consumers to 2 open Capital One
          credit cards at any given time. This is not a velocity rule in the traditional sense &mdash;
          it is a total card limit rather than an application-rate limit.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>2-card limit:</strong> Most consumers are limited to 2 open Capital One consumer credit cards</li>
          <li><strong>Business cards:</strong> Capital One Spark business cards may not count toward the 2-card consumer limit</li>
          <li><strong>No formal velocity window:</strong> No confirmed X/Y time-based rule</li>
          <li><strong>Inquiry sensitivity:</strong> Capital One is known to be sensitive to recent hard inquiries; 6+ inquiries in 6 months may trigger denial</li>
        </ul>
        <p className="text-sm mb-3">
          To apply for a new Capital One card when you already hold 2, you typically need to close
          or product-change an existing card first. Capital One does allow product changes between
          many of its card products.
        </p>
      </section>

      {/* Barclays */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="barclays-velocity-rules">
          Barclays Velocity Rules
        </h2>
        <p className="text-sm mb-3">
          Barclays does not have a widely documented formal velocity rule like Chase 5/24 or Citi
          1/8, but the issuer is known for being conservative with applicants who have many recent
          new accounts. Community data suggests the following patterns:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>6/24 sensitivity:</strong> Applicants with 6 or more new cards in 24 months report higher denial rates</li>
          <li><strong>Inquiry sensitivity:</strong> Barclays is sensitive to recent hard inquiries, especially in the last 6 months</li>
          <li><strong>Existing relationship bonus:</strong> Having a Barclays banking or existing card relationship improves approval odds</li>
          <li><strong>1/6 unofficial rule:</strong> Some reports suggest limiting Barclays applications to 1 every 6 months for best results</li>
        </ul>
        <p className="text-sm mb-3">
          Barclays issues several popular co-branded cards including the JetBlue, AAdvantage
          Aviator, and Wyndham cards. If you are targeting a Barclays card, apply when your recent
          account openings are relatively low.
        </p>
      </section>

      {/* US Bank */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="us-bank-velocity-rules">
          US Bank Velocity Rules
        </h2>
        <p className="text-sm mb-3">
          US Bank is one of the most conservative major issuers when it comes to new account
          velocity. The bank does not publish formal rules, but community data consistently shows
          strict patterns:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>0/6 preference:</strong> US Bank strongly prefers applicants with 0 new credit card accounts in the past 6 months</li>
          <li><strong>1/12 tolerance:</strong> Having 1 or more new accounts in 12 months can trigger denial for premium cards like the Altitude Reserve</li>
          <li><strong>Existing relationship:</strong> Having a US Bank checking account significantly improves approval odds</li>
          <li><strong>Business cards:</strong> US Bank business cards may require an existing banking relationship</li>
        </ul>
        <p className="text-sm mb-3">
          US Bank issues the Altitude Reserve (one of the few cards with mobile wallet bonus
          multipliers), the Altitude Go, and several co-branded hotel cards. If you want a US Bank
          card, plan it as one of your first applications in a cycle &mdash; not after a string of
          other approvals.
        </p>
      </section>

      {/* Wells Fargo */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="wells-fargo-velocity-rules">
          Wells Fargo Velocity Rules
        </h2>
        <p className="text-sm mb-3">
          Wells Fargo has become more welcoming to new applicants in recent years but still
          enforces some velocity-related restrictions:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Cell phone rule:</strong> Wells Fargo requires a unique cell phone number not previously used on another Wells Fargo account (for new customers)</li>
          <li><strong>No confirmed X/Y rule:</strong> No widely confirmed time-based velocity rule like 5/24 or 2/90</li>
          <li><strong>Moderate inquiry sensitivity:</strong> Wells Fargo is moderately sensitive to recent inquiries but less strict than US Bank</li>
          <li><strong>Bonus restriction:</strong> 48-month waiting period between welcome bonuses on the same card product</li>
        </ul>
        <p className="text-sm mb-3">
          Wells Fargo issues the Autograph Journey (2x-5x points across travel, dining, and transit
          categories), the Autograph (3x on multiple categories), and the Active Cash (2% flat cash
          back). These cards are generally accessible to applicants with moderate recent application
          activity.
        </p>
      </section>

      {/* Discover */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="discover-velocity-rules">
          Discover Velocity Rules
        </h2>
        <p className="text-sm mb-3">
          Discover is the simplest issuer from a velocity perspective. The key limitation is that
          Discover generally limits consumers to one Discover credit card at a time. Beyond that,
          Discover does not enforce a time-based velocity rule like other issuers.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>1-card limit:</strong> Typically limited to 1 Discover card at a time (Discover it! or Discover it! Chrome)</li>
          <li><strong>12-month bonus rule:</strong> Must wait 12 months between welcome bonuses on Discover cards</li>
          <li><strong>No time-based velocity rule:</strong> No confirmed X/Y application-rate restriction</li>
          <li><strong>Moderate approval standards:</strong> Discover is generally more lenient than most issuers for applicants with shorter credit histories</li>
        </ul>
      </section>

      {/* Summary Table */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="velocity-rules-summary">
          Complete Velocity Rules Summary
        </h2>
        <p className="text-sm mb-3">
          Here is every major issuer&apos;s velocity rule in one table.{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Use our Velocity Checker to calculate your status across all of them instantly &rarr;
          </Link>
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Issuer</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Primary Rule</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Secondary Rule</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Chase</td>
                <td className="px-4 py-2">5/24 (accounts)</td>
                <td className="px-4 py-2">2/30 (apps)</td>
                <td className="px-4 py-2">5/24 counts all banks; 2/30 is Chase-only</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Amex</td>
                <td className="px-4 py-2">1/5 (credit cards)</td>
                <td className="px-4 py-2">2/90 (credit cards)</td>
                <td className="px-4 py-2">Charge cards exempt from both rules</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Citi</td>
                <td className="px-4 py-2">1/8 (apps)</td>
                <td className="px-4 py-2">2/65 (apps)</td>
                <td className="px-4 py-2">Also 24-month same-family bonus rule</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Bank of America</td>
                <td className="px-4 py-2">2/3/4 (BofA cards)</td>
                <td className="px-4 py-2">7/12 (all banks)</td>
                <td className="px-4 py-2">2/3/4 counts only BofA; 7/12 all banks</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Capital One</td>
                <td className="px-4 py-2">2-card limit</td>
                <td className="px-4 py-2">&mdash;</td>
                <td className="px-4 py-2">Total open card limit, not time-based</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Barclays</td>
                <td className="px-4 py-2">6/24 sensitivity</td>
                <td className="px-4 py-2">~1/6 unofficial</td>
                <td className="px-4 py-2">Conservative; existing relationship helps</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">US Bank</td>
                <td className="px-4 py-2">0/6 preference</td>
                <td className="px-4 py-2">1/12 tolerance</td>
                <td className="px-4 py-2">Most conservative; banking relationship helps</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-2 font-semibold">Wells Fargo</td>
                <td className="px-4 py-2">No confirmed rule</td>
                <td className="px-4 py-2">48-month bonus</td>
                <td className="px-4 py-2">Moderate inquiry sensitivity</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Discover</td>
                <td className="px-4 py-2">1-card limit</td>
                <td className="px-4 py-2">12-month bonus</td>
                <td className="px-4 py-2">Generally lenient approvals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How Rules Interact */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-rules-interact">
          How Velocity Rules Interact Across Issuers
        </h2>
        <p className="text-sm mb-3">
          The most important thing to understand is that each issuer&apos;s velocity rules operate
          independently &mdash; with one major exception. Chase 5/24 and Bank of America&apos;s
          7/12 rule count cards from all issuers, while every other velocity rule only counts
          applications or approvals within that specific bank.
        </p>
        <p className="text-sm mb-3">
          This means you can strategically apply across issuers in parallel without triggering
          most velocity limits. For example, you could apply for a Citi card on Monday, an Amex
          card on Tuesday, and a Capital One card on Wednesday without any of those applications
          conflicting with each other&apos;s velocity rules. The only impact is on your Chase 5/24
          and BofA 7/12 counts, which track all new accounts regardless of issuer.
        </p>
        <p className="text-sm mb-3">
          A common strategy is to &ldquo;front-load&rdquo; applications with velocity-sensitive
          issuers first. Apply for US Bank and Barclays cards early in your application cycle when
          your recent account count is low, then move to more lenient issuers like Amex and Capital
          One afterward.{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Check your eligibility across all issuers with our free Velocity Checker &rarr;
          </Link>
        </p>
        <p className="text-sm mb-3">
          Remember that hard inquiries also play a role. Even if you are technically within a
          bank&apos;s velocity rules, a high number of recent hard inquiries can lead to manual
          denial. Barclays, US Bank, and Capital One are particularly inquiry-sensitive. Space your
          applications across different bureaus when possible, since some issuers pull from specific
          bureaus depending on your state.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Do business card applications count toward velocity rules?
        </h3>
        <p className="text-sm mb-4">
          It depends on the issuer. Chase business cards do not count toward 5/24 for most
          products, but the 2/30 rule applies to both personal and business apps. Amex business
          credit cards count toward the 2/90 rule. Citi business cards are subject to 1/8 and
          2/65. Always check issuer-specific rules before applying.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          How can I check my current velocity status with each bank?
        </h3>
        <p className="text-sm mb-4">
          Pull your credit reports from all three bureaus and list every new account opened in
          the last 24 months with the exact open date. Then compare your counts against each
          issuer&apos;s velocity windows. Our{' '}
          <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Velocity Checker
          </Link>{' '}
          tool automates this &mdash; enter your recent applications and it calculates your status
          across all issuers instantly.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Do denied credit card applications count toward velocity rules?
        </h3>
        <p className="text-sm mb-4">
          For most issuers, denied applications do not count toward velocity rules because the
          rules track opened accounts, not applications submitted. However, Chase&apos;s 2/30 rule
          is an exception &mdash; it counts applications submitted, not approvals. A denial still
          uses one of your two application slots in a 30-day window.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice.
          Credit card approval decisions are made solely by the issuing bank. We cannot guarantee
          approval or bonus eligibility. Velocity rules may change at any time &mdash; always
          verify current rules directly with the card issuer before applying. Last verified:
          March 20, 2026.
        </p>
      </div>
    </>
  ),
};
