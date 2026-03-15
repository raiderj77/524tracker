import Link from 'next/link';
import type { BlogPost } from './posts';

export const postHowToCalculate524: BlogPost = {
  slug: 'how-to-calculate-chase-5-24',
  title: 'How to Calculate Your Chase 5/24 Status: A Step-by-Step Guide',
  description:
    'Learn exactly how to calculate your Chase 5/24 status step by step. Find out what counts, what doesn\'t, how to pull your credit report, and when cards fall off.',
  keywords:
    'how to calculate chase 5/24, chase 5/24 calculator, check 5/24 status, what counts toward 5/24, chase 5/24 count, how to check 5/24',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  readTimeMinutes: 8,
  ctaText: 'Calculate Your 5/24 Status Free',
  ctaHref: '/',
  faqSchema: [
    {
      question: 'Do authorized user cards count toward 5/24?',
      answer:
        'Authorized user accounts may appear on your credit report and initially count toward 5/24. However, many applicants have successfully called the Chase reconsideration line to have authorized user accounts excluded from their 5/24 count. Results vary and this is not guaranteed.',
    },
    {
      question: 'Do business credit cards count toward 5/24?',
      answer:
        'Most business cards do not count toward 5/24 because they do not appear on personal credit reports. This includes business cards from Chase, Amex, Citi, and Bank of America. However, Capital One and Discover business cards do report to personal bureaus and therefore do count toward 5/24.',
    },
    {
      question: "I'm at 5/24 — can I still get a Chase card?",
      answer:
        'No. Chase requires you to be under 5/24, meaning 4 or fewer new accounts in 24 months. At exactly 5/24 you are over the limit and your personal card application will be automatically denied. You must wait until at least one card ages past 24 months to drop below the threshold.',
    },
    {
      question: 'How do I check my 5/24 status without applying?',
      answer:
        'Pull your free credit report from AnnualCreditReport.com and count personal credit card accounts opened in the last 24 months. You can also use a free tracker tool like the one on 524tracker.com to log your cards and see your count automatically. Neither method triggers a hard inquiry.',
    },
  ],
  relatedLinks: [
    { href: '/blog/chase-5-24-rule-explained', label: 'Chase 5/24 Rule: Complete Guide' },
    { href: '/blog/best-chase-cards-under-5-24', label: 'Best Chase Cards Under 5/24' },
    { href: '/blog/best-cards-after-5-24', label: 'Best Cards After 5/24' },
    { href: '/rules-guide', label: 'Complete Bank Rules Guide' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        To calculate your Chase 5/24 status, pull your credit report and count every personal credit card
        account opened in the last 24 months across all banks. If that number is 5 or more, you are over
        5/24 and Chase will deny personal card applications. Business cards from most issuers do not count,
        but Capital One and Discover business cards do.
      </p>

      {/* What counts */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="what-counts-toward-5-24">
          What Counts Toward 5/24?
        </h2>
        <p className="text-sm mb-3">
          Chase counts every new personal credit card account that appears on your credit report and was opened
          within the past 24 months. This includes cards from every issuer — not just Chase. A Citi card, an
          Amex card, and a store credit card all count equally.
        </p>
        <p className="text-sm mb-3">
          <strong>What counts:</strong>
        </p>
        <ul className="text-sm list-disc pl-5 mb-3 space-y-1">
          <li>Personal credit cards from any bank opened in the last 24 months</li>
          <li>Store credit cards (Target, Amazon Store Card, etc.)</li>
          <li>Capital One business credit cards (they report to personal bureaus)</li>
          <li>Discover business credit cards (they report to personal bureaus)</li>
          <li>Authorized user accounts (may count — see FAQ below)</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>What does NOT count:</strong>
        </p>
        <ul className="text-sm list-disc pl-5 mb-3 space-y-1">
          <li>Business cards from Chase (Ink products)</li>
          <li>Business cards from Amex</li>
          <li>Business cards from Citi</li>
          <li>Business cards from Bank of America</li>
          <li>Personal loans, auto loans, or mortgages</li>
          <li>Charge cards that do not report as credit cards</li>
          <li>Cards opened more than 24 months ago</li>
        </ul>
        <p className="text-sm">
          For a full breakdown of all bank-specific rules, see our{' '}
          <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600 underline">
            complete bank rules guide
          </Link>.
        </p>
      </section>

      {/* Step by step */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="step-by-step-count">
          Step-by-Step: How to Count Your 5/24 Status
        </h2>
        <p className="text-sm mb-3">
          Follow these steps to determine your exact 5/24 count:
        </p>
        <ol className="text-sm list-decimal pl-5 mb-3 space-y-2">
          <li>
            <strong>Pull your credit report.</strong> Request a free report from AnnualCreditReport.com or
            use a service like Credit Karma. You need to see all open accounts with their opening dates.
          </li>
          <li>
            <strong>Identify cards opened in the last 24 months.</strong> Look at the &ldquo;Date Opened&rdquo;
            field for each account. Count backwards 24 months from today&apos;s date to find the cutoff.
          </li>
          <li>
            <strong>Filter to personal credit cards only.</strong> Exclude business cards (except Capital One
            and Discover business cards), personal loans, auto loans, and mortgages. Only count accounts
            listed as credit cards.
          </li>
          <li>
            <strong>Count the total.</strong> Add up all qualifying personal credit card accounts opened within
            the 24-month window.
          </li>
          <li>
            <strong>Compare to 5.</strong> If your count is 4 or fewer, you are under 5/24 and eligible
            for Chase personal cards. If your count is 5 or more, you are over 5/24.
          </li>
        </ol>
        <p className="text-sm">
          You can also use our{' '}
          <Link href="/" className="text-brand-gold hover:text-amber-600 underline">
            free 5/24 tracker tool
          </Link>{' '}
          to log your cards and calculate your count automatically.
        </p>
      </section>

      {/* How to check credit report */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="check-credit-report-free">
          How to Check Your Credit Report for Free
        </h2>
        <p className="text-sm mb-3">
          You have several free options for reviewing your credit report to determine your 5/24 count:
        </p>
        <p className="text-sm mb-3">
          <strong>AnnualCreditReport.com</strong> is the official federally authorized source for free credit
          reports. You can request reports from Equifax, Experian, and TransUnion. This gives you the most
          complete and accurate view of your accounts.
        </p>
        <p className="text-sm mb-3">
          <strong>Credit Karma</strong> provides free access to your TransUnion and Equifax reports with
          account opening dates visible. It updates regularly and is convenient for ongoing monitoring.
        </p>
        <p className="text-sm">
          <strong>Card issuer tools</strong> from Chase, Amex, and other banks often include a free credit
          score and partial credit report view. While these may not show every account, they can be a quick
          way to spot-check recent openings.
        </p>
      </section>

      {/* Cards that do NOT count */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="cards-that-do-not-count">
          Cards That Do NOT Count Toward 5/24
        </h2>
        <p className="text-sm mb-3">
          Certain types of accounts are excluded from the 5/24 calculation. Knowing these exceptions can help
          you plan more strategically.
        </p>
        <p className="text-sm mb-3">
          <strong>Business cards from most issuers.</strong> Chase Ink, Amex Business, Citi Business, and
          BofA Business cards do not report to personal credit bureaus and therefore do not add to your 5/24
          count. This is why many strategists recommend supplementing personal cards with business cards to
          earn more bonuses without increasing your 5/24 number.
        </p>
        <p className="text-sm mb-3">
          <strong>Authorized user accounts (sometimes).</strong> If you are listed as an authorized user on
          someone else&apos;s card, it may appear on your credit report and initially count toward 5/24.
          However, data points from the community suggest that Chase may exclude authorized user accounts
          during reconsideration if you call and explain. This is not guaranteed.
        </p>
        <p className="text-sm">
          <strong>Cards older than 24 months.</strong> Any card opened more than 24 months ago has already
          fallen off your 5/24 count. Only accounts within the rolling 24-month window matter.
        </p>
      </section>

      {/* At exactly 5/24 */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="at-exactly-5-24">
          What If You&apos;re at Exactly 5/24?
        </h2>
        <p className="text-sm mb-3">
          If your count is exactly 5, you are over the limit. Chase requires you to be <em>under</em> 5/24,
          which means 4 or fewer new accounts. At 5/24, your personal card application will be automatically
          denied.
        </p>
        <p className="text-sm">
          You need to wait until at least one of your 5 accounts ages past the 24-month mark. Once that
          happens, your count drops to 4/24 and you are eligible again. Use our{' '}
          <Link href="/" className="text-brand-gold hover:text-amber-600 underline">
            tracker tool
          </Link>{' '}
          to see exactly when your next card drops off.
        </p>
      </section>

      {/* How long until a card falls off */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="how-long-until-card-falls-off">
          How Long Until a Card Falls Off 5/24?
        </h2>
        <p className="text-sm mb-3">
          Each card drops off your 5/24 count 24 months after the month it was opened. Chase counts by
          calendar month, which means the exact drop-off can be up to 25 months from the actual opening date.
        </p>
        <p className="text-sm mb-3">
          <strong>Example:</strong> If you opened a card on March 15, 2024, it counts for the month of March
          2024. It drops off your 5/24 count at the start of April 2026 — 24 calendar months after the opening
          month. That is 25 months from the actual open date.
        </p>
        <p className="text-sm">
          This calendar-month counting method means you should plan conservatively. If a card opened mid-month,
          wait until the first of the month after the 24-month mark to be safe before applying for a new
          Chase card.
        </p>
      </section>

      {/* FAQ section */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Do authorized user cards count toward 5/24?
        </h3>
        <p className="text-sm mb-4">
          Authorized user accounts may appear on your credit report and initially count toward 5/24.
          However, many applicants have successfully called the Chase reconsideration line to have authorized
          user accounts excluded from their 5/24 count. Results vary and this is not guaranteed.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          Do business credit cards count toward 5/24?
        </h3>
        <p className="text-sm mb-4">
          Most business cards do not count toward 5/24 because they do not appear on personal credit reports.
          This includes business cards from Chase, Amex, Citi, and Bank of America. However, Capital One and
          Discover business cards do report to personal bureaus and therefore do count toward 5/24.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          I&apos;m at 5/24 — can I still get a Chase card?
        </h3>
        <p className="text-sm mb-4">
          No. Chase requires you to be under 5/24, meaning 4 or fewer new accounts in 24 months. At exactly
          5/24 you are over the limit and your personal card application will be automatically denied. You
          must wait until at least one card ages past 24 months to drop below the threshold.
        </p>

        <h3 className="font-display font-semibold text-base text-brand-navy mb-1">
          How do I check my 5/24 status without applying?
        </h3>
        <p className="text-sm mb-4">
          Pull your free credit report from AnnualCreditReport.com and count personal credit card accounts
          opened in the last 24 months. You can also use a free tracker tool like the one on 524tracker.com
          to log your cards and see your count automatically. Neither method triggers a hard inquiry.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          Credit card terms and approval rules change frequently. Always verify current rules directly with the
          card issuer before applying. This is not financial advice.
        </p>
      </div>
    </>
  ),
};
