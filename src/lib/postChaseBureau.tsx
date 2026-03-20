import Link from 'next/link';
import type { BlogPost } from './posts';

export const postChaseBureau: BlogPost = {
  slug: 'which-credit-bureau-does-chase-pull',
  title: "Which Credit Bureau Does Chase Pull? (And How to Use This Strategically)",
  description:
    "Chase primarily pulls Experian in most states but may pull TransUnion in some. Learn your state's bureau, how to use strategic freezes, and which bureaus other major banks pull.",
  keywords:
    'which credit bureau does chase pull, chase credit bureau, chase hard pull, chase experian, strategic bureau freeze',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  lastUpdated: 'March 20, 2026',
  readTimeMinutes: 8,
  ctaText: 'Look Up Any Bank&apos;s Bureau Pull',
  ctaHref: '/credit-pull-database',
  faqSchema: [
    {
      question: 'Can Chase pull a different bureau than expected?',
      answer:
        'Yes. While Chase has a primary bureau for each state, they can and occasionally do pull a different bureau. This is more common for business card applications, existing customer applications, or when the primary bureau is experiencing technical issues. Data points are based on trends, not guarantees.',
    },
    {
      question: 'Does freezing a credit bureau hurt my credit score?',
      answer:
        'No. Freezing your credit report at any bureau has zero impact on your credit score. A freeze only prevents new creditors from accessing your report. Your existing accounts continue to report normally, and your score is calculated the same way whether your file is frozen or not.',
    },
    {
      question: 'Can I freeze all 3 credit bureaus and still get approved for a card?',
      answer:
        'Generally no. If all three bureaus are frozen, most issuers cannot pull your credit and will deny or pend your application. You need at least one bureau unfrozen for the issuer you are applying with. Some issuers, like Capital One, require all three unfrozen.',
    },
  ],
  relatedLinks: [
    { href: '/credit-pull-database', label: 'Credit Pull Database' },
    { href: '/inquiry-tracker', label: 'Hard Inquiry Tracker' },
    { href: '/velocity-checker', label: 'Velocity Checker' },
    { href: '/blog/credit-card-velocity-rules-explained', label: 'Credit Card Velocity Rules Explained' },
  ],
  content: () => (
    <>
      {/* Answer capsule */}
      <p className="text-base bg-brand-light border border-gray-200 rounded-xl p-5">
        Chase primarily pulls <strong>Experian</strong> for credit card applications in most U.S. states.
        In some states, Chase pulls <strong>TransUnion</strong> instead, and in a few states, data points
        show pulls from either bureau. Knowing which bureau Chase pulls in your state lets you use
        strategic bureau freezes to limit hard inquiries from other issuers &mdash; keeping one bureau
        clean for Chase while concentrating other applications on different bureaus.
      </p>

      {/* Chase's Primary Bureau */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="chase-primary-bureau">
          Chase&apos;s Primary Bureau: Experian
        </h2>
        <p className="text-sm mb-3">
          In the majority of U.S. states, Chase pulls your Experian credit report when you apply for a
          personal credit card. This has been the consistent pattern across thousands of data points
          reported by applicants over the past several years.
        </p>
        <p className="text-sm mb-3">
          Experian is Chase&apos;s primary bureau for both personal and business card applications in most
          markets. However, business card applications occasionally result in pulls from multiple bureaus,
          especially for applicants without a long Chase relationship.
        </p>
        <p className="text-sm mb-3">
          The Experian pull is important to know because it lets you plan your other applications around
          keeping your Experian report as clean as possible. If you know Chase will look at Experian, you
          want to minimize the number of recent hard inquiries on that specific report before applying
          for a Chase card.
        </p>
        <p className="text-sm mb-3">
          Look up the latest data points for your specific state in our{' '}
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600 font-semibold">
            Credit Pull Database
          </Link>.
        </p>
      </section>

      {/* State-by-State Variations */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="state-variations">
          State-by-State Variations
        </h2>
        <p className="text-sm mb-3">
          While Experian dominates Chase&apos;s pull patterns, several states consistently report
          TransUnion pulls instead. The following breakdown is based on community-reported data points
          as of early 2026:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Bureau Pulled</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">States</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 font-semibold">Experian (primary)</td>
                <td className="px-4 py-2">AL, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 font-semibold">TransUnion (primary)</td>
                <td className="px-4 py-2">AK, KY</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 font-semibold">Mixed (EX or TU)</td>
                <td className="px-4 py-2">Some data points from scattered states show occasional TU pulls even in typically EX states</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          <strong>Important caveat:</strong> This data is based on community reports and is not official
          information from Chase. Bureau pulls can change at any time, and individual applications may be
          handled differently based on factors like existing Chase relationship, application type (personal
          vs. business), or internal risk assessment.
        </p>
        <p className="text-sm mb-3">
          The most reliable way to confirm which bureau Chase will pull for you is to check recent data
          points from other applicants in your state. Our{' '}
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600 font-semibold">
            Credit Pull Database
          </Link>{' '}
          aggregates this information by state and issuer.
        </p>
      </section>

      {/* How to Check Your State */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="check-your-state">
          How to Check Which Bureau Chase Will Pull for You
        </h2>
        <p className="text-sm mb-3">
          There are several methods to determine which bureau Chase is most likely to pull in your state:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Check our Credit Pull Database:</strong> The fastest option. Look up Chase in our <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600 font-semibold">Credit Pull Database</Link> and filter by your state to see reported pulls.</li>
          <li><strong>Review your own credit reports:</strong> If you have previously applied for a Chase card, check all three of your credit reports for Chase inquiries. Whichever bureau shows the inquiry is the one Chase pulled. You can check your reports free at AnnualCreditReport.com.</li>
          <li><strong>Monitor alerts:</strong> If you use credit monitoring services (like Credit Karma for TransUnion and Equifax, or Experian&apos;s free service), you will receive a hard inquiry alert shortly after applying. The alert tells you which bureau was pulled.</li>
          <li><strong>Check community data:</strong> Forums, Reddit communities (like r/churning), and credit card data point threads regularly compile pull reports by state and issuer.</li>
        </ul>
        <p className="text-sm mb-3">
          Once you know your state&apos;s primary bureau for Chase, you can begin using this information
          strategically.
        </p>
      </section>

      {/* Strategic Bureau Freezes */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="strategic-freezes">
          Strategic Bureau Freezes Explained
        </h2>
        <p className="text-sm mb-3">
          A strategic bureau freeze is one of the most powerful tools available to credit card applicants
          who are managing multiple applications across different issuers. The concept is simple: freeze
          the bureaus you want to protect from inquiries, and leave unfrozen only the bureau that your
          target issuer will pull.
        </p>
        <p className="text-sm mb-3">
          <strong>Here is how it works with Chase:</strong>
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Step 1:</strong> Confirm that Chase pulls Experian in your state.</li>
          <li><strong>Step 2:</strong> When applying for cards from other issuers that pull TransUnion or Equifax, freeze your Experian report first. This forces those issuers to pull only from the unfrozen bureau(s), keeping your Experian report clean for Chase.</li>
          <li><strong>Step 3:</strong> Before your Chase application, unfreeze Experian and optionally freeze the other bureaus to keep them clean for other future applications.</li>
          <li><strong>Step 4:</strong> Apply for Chase with a clean Experian report showing minimal recent inquiries.</li>
        </ul>
        <p className="text-sm mb-3">
          <strong>Why does this matter?</strong> While hard inquiries have a relatively small impact on
          credit scores (typically 3&ndash;5 points each), they can affect approval decisions in two ways.
          First, automated systems may flag applications with many recent inquiries. Second, if your
          application goes to manual review, the analyst will see and consider your inquiry count on the
          bureau they pulled.
        </p>
        <p className="text-sm mb-3">
          By concentrating inquiries from non-Chase issuers onto bureaus that Chase does not pull, you
          present a cleaner picture to Chase when it matters most.
        </p>
        <p className="text-sm mb-3">
          <strong>Freezing is free.</strong> Since 2018, all three major credit bureaus are required by
          federal law to offer free credit freezes and unfreezes. You can freeze and unfreeze online in
          minutes at each bureau&apos;s website:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Experian:</strong> experian.com/freeze</li>
          <li><strong>Equifax:</strong> equifax.com/personal/credit-report-services/credit-freeze</li>
          <li><strong>TransUnion:</strong> transunion.com/credit-freeze</li>
        </ul>
      </section>

      {/* Other Major Issuers */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="other-issuers">
          Which Bureaus Do Other Major Issuers Pull?
        </h2>
        <p className="text-sm mb-3">
          To use strategic freezes effectively, you need to know the primary bureau for each issuer you
          plan to apply with. Here is a general overview (note that these vary by state &mdash; check our{' '}
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600 font-semibold">
            Credit Pull Database
          </Link>{' '}
          for your specific state):
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Issuer</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Primary Bureau(s)</th>
                <th className="px-4 py-2 text-left font-display font-bold text-brand-navy">Can You Freeze Others?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Chase</td>
                <td className="px-4 py-2">Experian (most states)</td>
                <td className="px-4 py-2">Yes &mdash; freeze EQ and TU</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">American Express</td>
                <td className="px-4 py-2">Experian (most states)</td>
                <td className="px-4 py-2">Yes &mdash; freeze EQ and TU</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Citi</td>
                <td className="px-4 py-2">Experian or Equifax (varies)</td>
                <td className="px-4 py-2">Yes &mdash; freeze the unused bureau(s)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Bank of America</td>
                <td className="px-4 py-2">TransUnion or Experian (varies)</td>
                <td className="px-4 py-2">Yes &mdash; freeze the unused bureau(s)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Capital One</td>
                <td className="px-4 py-2 font-semibold text-red-600">All 3 bureaus</td>
                <td className="px-4 py-2 font-semibold text-red-600">No &mdash; all must be unfrozen</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Barclays</td>
                <td className="px-4 py-2">TransUnion (most states)</td>
                <td className="px-4 py-2">Yes &mdash; freeze EX and EQ</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">US Bank</td>
                <td className="px-4 py-2">TransUnion or Experian (varies)</td>
                <td className="px-4 py-2">Yes &mdash; freeze the unused bureau(s)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Wells Fargo</td>
                <td className="px-4 py-2">Experian (most states)</td>
                <td className="px-4 py-2">Yes &mdash; freeze EQ and TU</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mb-3">
          Notice that both Chase and Amex typically pull Experian. This means if you are applying for both
          issuers, you cannot isolate inquiries to separate bureaus. In this case, prioritize the
          application order &mdash; apply for the issuer with stricter inquiry sensitivity first (usually
          Chase), then apply for the other shortly after.
        </p>
      </section>

      {/* When Bureau Strategy Matters */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="when-it-matters">
          When Bureau Strategy Matters Most
        </h2>
        <p className="text-sm mb-3">
          Strategic bureau management is most valuable in specific situations. For casual applicants
          opening one or two cards per year, the effort may not be necessary. But for active applicants,
          it can make the difference between approval and denial.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
          <li><strong>Multiple applications in a short window:</strong> If you plan to apply for cards from 3 or more issuers within a few months, bureau strategy prevents inquiry stacking on any single report.</li>
          <li><strong>Borderline credit profiles:</strong> If your credit score is in the 680&ndash;720 range, every inquiry matters more. Keeping your target bureau clean can be the difference between an auto-approval and a denial.</li>
          <li><strong>Chase applications after other issuers:</strong> If you have already applied for several non-Chase cards, freezing Experian during those applications protects your Chase eligibility.</li>
          <li><strong>Post-5/24 return to Chase:</strong> When you drop below 5/24 after a period of non-Chase applications, your Experian report may show numerous recent inquiries from other issuers. If you froze Experian during those applications, it will be clean when Chase pulls it.</li>
        </ul>
        <p className="text-sm mb-3">
          Track all your hard inquiries across all three bureaus using our{' '}
          <Link href="/inquiry-tracker" className="text-brand-gold hover:text-amber-600 font-semibold">
            Hard Inquiry Tracker
          </Link>{' '}
          to see where you stand before your next application.
        </p>
        <p className="text-sm mb-3">
          <strong>One important note:</strong> Bureau strategy only manages inquiries. It does not affect
          your 5/24 count, which is based on new accounts (not inquiries) and is calculated from data
          across all bureaus. Even if your Experian report shows zero recent inquiries, if your account
          count across all bureaus shows 5+ new cards in 24 months, Chase will still deny you under the
          5/24 rule.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl text-brand-navy mb-3" id="faq">
          Frequently Asked Questions
        </h2>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Can Chase pull a different bureau than expected?
        </h3>
        <p className="text-sm mb-4">
          Yes. While Chase has a primary bureau for each state, they can and occasionally do pull a
          different bureau. This is more common for business card applications, existing customer
          applications, or when the primary bureau is experiencing technical issues. Data points are based
          on trends, not guarantees.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Does freezing a credit bureau hurt my credit score?
        </h3>
        <p className="text-sm mb-4">
          No. Freezing your credit report at any bureau has zero impact on your credit score. A freeze
          only prevents new creditors from accessing your report. Your existing accounts continue to report
          normally, and your score is calculated the same way whether your file is frozen or not.
        </p>

        <h3 className="font-display font-bold text-base text-brand-navy mb-2">
          Can I freeze all 3 credit bureaus and still get approved for a card?
        </h3>
        <p className="text-sm mb-4">
          Generally no. If all three bureaus are frozen, most issuers cannot pull your credit and will deny
          or pend your application. You need at least one bureau unfrozen for the issuer you are applying
          with. Some issuers, like Capital One, require all three unfrozen.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="text-xs text-amber-900 italic">
          This tool is for informational purposes only and does not constitute financial advice. Credit
          bureau pull patterns are based on community-reported data and may change at any time. We cannot
          guarantee which bureau any issuer will pull for your specific application. Always verify current
          information before making application decisions. Last verified: March 2026.
        </p>
      </div>
    </>
  ),
};
