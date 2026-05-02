import type { Metadata } from 'next';
import Link from 'next/link';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';
import AnswerBlock from '@/components/AnswerBlock';

export const metadata: Metadata = {
  title: 'Chase 5/24 Rule Explained (2026) — What Counts, What Doesn\'t',
  description:
    'Complete guide to the Chase 5/24 rule. Which cards count, which don\'t, when cards fall off, how authorized user accounts affect your count, and which Chase cards are exempt.',
  keywords:
    'chase 5/24 rule, what counts toward 5/24, chase 5/24 explained, business cards 5/24, authorized user 5/24, when does 5/24 reset, chase 5/24 2026, which chase cards subject to 5/24',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/chase-524' },
  openGraph: {
    title: 'Chase 5/24 Rule Explained (2026) — What Counts, What Doesn\'t',
    description:
      'Complete guide to Chase 5/24: which cards count, authorized user accounts, business cards, when cards fall off, and which Chase cards are exempt.',
    url: 'https://524tracker.com/chase-524',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the Chase 5/24 rule?',
    answer:
      'The Chase 5/24 rule is an internal policy that automatically declines most Chase credit card applications when you have opened 5 or more new personal credit card accounts across any issuer within the past 24 months. It is not publicly documented by Chase but is consistently confirmed by data points from the credit card community. The rule counts personal credit cards from all banks — not just Chase — and the 24-month window is rolling, recalculated from the current date. Being at exactly 5 accounts opened in 24 months means you are over the limit; you must be at 4 or fewer to be approved. The rule applies to virtually every Chase consumer credit card, including the Sapphire Preferred, Sapphire Reserve, Freedom Unlimited, Freedom Flex, and Ink Business cards.',
  },
  {
    question: 'Which Chase cards are subject to 5/24?',
    answer:
      'Nearly every Chase consumer and business credit card is subject to the 5/24 rule. Consumer cards subject to 5/24 include the Chase Sapphire Preferred, Chase Sapphire Reserve, Chase Freedom Unlimited, Chase Freedom Flex, Chase Freedom Rise, and all co-branded consumer cards (United, Southwest, Marriott Bonvoy, British Airways, IHG, Hyatt, and Amazon). Business cards subject to 5/24 include the entire Ink Business lineup (Ink Business Cash, Preferred, Unlimited, and Premier). The primary exception is the Amazon Prime Rewards Visa — community data suggests it sometimes bypasses 5/24 enforcement. Chase Private Client and co-branded in-branch card products may also have variable enforcement. In practice, assume all Chase applications are subject to 5/24 unless you have confirmed data points to the contrary.',
  },
  {
    question: 'Do business cards from Chase count toward 5/24?',
    answer:
      'No — Chase Ink business cards do not count toward your 5/24 total because business credit cards from most major issuers are not reported on your personal credit report. This includes Chase Ink cards, American Express business cards, Citi business cards, and Bank of America business cards. However, this is also why applying for Chase Ink cards is a core strategy for churners: you can accumulate Chase Ultimate Rewards points via business cards without consuming 5/24 slots. The important nuance is that while Chase business cards do not add to your 5/24 count, you still must be under 5/24 to be approved for a Chase business card. The rule restricts approval regardless of whether the target card is personal or business.',
  },
  {
    question: 'How do I count cards toward 5/24?',
    answer:
      'Count every personal credit card from any bank that was opened in the last 24 months and appears on your personal credit report. This includes: personal cards from Chase, Amex, Citi, Bank of America, Capital One, Discover, and all other issuers; authorized user accounts added to someone else\'s card that appear on your personal credit report; and business cards from Capital One and Discover, which report to personal credit bureaus unlike most business cards. Do not count: most business credit cards (Chase Ink, Amex Business, Citi Business, BofA Business — these report only to business bureaus); charge cards like the Amex Platinum, Gold, or Green; credit limit increases on existing accounts; or product changes from one card to another. Authorized user accounts are the most frequently misunderstood: they count toward 5/24 initially, but many applicants have successfully called Chase reconsideration to have AU accounts excluded. Pull your personal credit report from AnnualCreditReport.com and count all new accounts opened in the last 24 months to get your current status.',
  },
  {
    question: 'When does a card "fall off" the 5/24 count?',
    answer:
      'A card falls off your 5/24 count exactly 24 months after the account was opened, as reported on your credit report. The calculation is based on the month the account was opened, not the day. If a card was opened in May 2024, it ages off in June 2026 — the first day of the 25th calendar month after opening. Chase uses the account-opened date on your credit report, which may differ slightly from when you received the card. Closing a card does not remove it from your 5/24 count; the account-opened date remains on your credit report for 10 years. Similarly, being removed as an authorized user removes the account from your report but does not change your current count for already-scored applications. Monitor your 5/24 count monthly as you approach the drop-off threshold — you only need to wait until one card ages past 24 months to move from 5/24 to 4/24.',
  },
];

export default function Chase524Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Chase 5/24 Rule Explained (2026) — What Counts, What Doesn\'t',
                description:
                  'Complete guide to the Chase 5/24 rule: which cards count toward your total, how authorized user accounts and business cards are handled, which Chase cards are subject to the rule, and exactly when cards fall off the 24-month window.',
                url: 'https://524tracker.com/chase-524',
                datePublished: '2026-05-01',
                dateModified: new Date().toISOString().substring(0, 10),
                author: {
                  '@type': 'Person',
                  name: 'Experienced Web Developer',
                  url: 'https://524tracker.com/about',
                },
                publisher: {
                  '@type': 'Organization',
                  name: '524Tracker',
                  url: 'https://524tracker.com',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Rules Guide', item: 'https://524tracker.com/rules-guide' },
                  { '@type': 'ListItem', position: 3, name: 'Chase 5/24 Rule', item: 'https://524tracker.com/chase-524' },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">Rules Guide</Link>
          <span className="mx-1">/</span>
          <span>Chase 5/24 Rule</span>
        </nav>

        <AnswerBlock
          what="A deep-dive guide to the Chase 5/24 rule — what counts, what doesn't, how to check your status, and when cards fall off your 24-month window."
          who="Anyone planning to apply for a Chase credit card who needs to know whether they are under or over the 5/24 threshold."
          bottomLine="Chase 5/24 is the single most important application rule in credit card churning. Know your count before you apply."
          lastUpdated="2026-05-01"
        />

        <p className="text-xs text-text-secondary mb-2">Last updated: May 1, 2026</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-6">
          Chase 5/24 Rule Explained (2026) &mdash; What Counts, What Doesn&apos;t
        </h1>

        <p className="text-base text-text-primary mb-8 bg-brand-light border border-gray-200 rounded-xl p-5 leading-relaxed">
          The Chase 5/24 rule is the most consequential credit card application restriction in the United States. If you have opened five or more new personal credit card accounts across any bank in the last 24 months, Chase will automatically decline your application for virtually every card in its portfolio — including the Sapphire Preferred, Sapphire Reserve, Freedom Unlimited, Freedom Flex, and all Ink Business cards. This guide explains exactly what counts, what doesn&apos;t, how authorized user cards and business cards affect your total, which Chase cards are subject to the rule, and precisely when a card ages off your count.
        </p>

        <div className="text-center mb-10">
          <Link
            href="/#tracker"
            className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            Track Your 5/24 Status Free &rarr;
          </Link>
        </div>

        {/* Section 1 */}
        <section className="mb-12" id="what-is-chase-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            What is the Chase 5/24 rule?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> Chase declines most credit card applications when you have opened 5 or more new personal credit accounts at any bank in the last 24 months. The window is rolling, the count resets card-by-card as accounts age past 24 months, and closing a card does not remove it from your count.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Chase&apos;s 5/24 rule is an internal underwriting policy — not publicly disclosed in application terms — that has been verified by thousands of community data points documented at{' '}
            <a
              href="https://www.doctorofcredit.com/knowledge-things-you-need-to-know-before-you-apply-for-a-credit-card/#Chase_524"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              Doctor of Credit&apos;s Chase application guide
            </a>
            . The rule counts new personal credit accounts — cards where you are the primary cardholder — from every issuer, not just Chase. Most business cards are excluded because they do not appear on your personal credit report. Being at exactly 5/24 means you are over the limit; you need 4 or fewer new accounts in 24 months to be approved.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The 24-month window is rolling from today&apos;s date, not from a calendar year. If you opened a card on June 3, 2024, it ages off your count on June 3, 2026. Chase pulls your credit report to determine the account-opened dates and counts every qualifying account. The rule has been in effect since at least 2015 and has not relaxed significantly since then, according to data points tracked by{' '}
            <a
              href="https://frequentmiler.com/chase-5-24-rule/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              Frequent Miler&apos;s 5/24 guide
            </a>
            .
          </p>
          <div className="bg-brand-light border border-gray-200 rounded-lg p-4 text-xs text-text-secondary">
            Rules verified as of May 2026. Bank policies change without notice. Always verify with Chase before applying.
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12" id="which-chase-cards-subject-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            Which Chase cards are subject to 5/24?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> Virtually every Chase personal and business card enforces 5/24 — Sapphire Preferred, Sapphire Reserve, Freedom Unlimited, Freedom Flex, all Ink Business cards, and all major co-brands (United, Southwest, Marriott, Hyatt, IHG, British Airways). The Amazon Prime Rewards Visa may be an exception.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The full list of Chase cards confirmed subject to 5/24 includes every Sapphire card, every Freedom variant (Freedom Unlimited, Freedom Flex, Freedom Rise, old Freedom), all four Ink Business cards (Cash, Preferred, Unlimited, Premier), and all co-branded consumer cards. Co-brands include the United Explorer, United Club Infinite, Southwest Rapid Rewards Priority, Southwest Rapid Rewards Plus, Southwest Performance Business, Marriott Bonvoy Boundless, Marriott Bonvoy Bold, World of Hyatt, IHG One Rewards Premier, British Airways Visa, and Amazon Prime Rewards Visa. Chase Slate and Slate Edge are also subject to 5/24.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The Amazon Prime Rewards Visa is occasionally cited as an exception with inconsistent 5/24 enforcement, but community data points are mixed and it should not be relied on. Chase Private Client and branch-exclusive products may also see softer enforcement. For planning purposes, as noted by{' '}
            <a
              href="https://thepointsguy.com/guide/chase-524-rule/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              The Points Guy&apos;s 5/24 guide
            </a>
            , treat all Chase cards as subject to 5/24 unless you have a specific confirmed exception.
          </p>
          <div className="bg-brand-light border border-gray-200 rounded-lg p-4 text-xs text-text-secondary">
            Card lineup verified as of May 2026. Chase may add or remove cards from 5/24 enforcement at any time.
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12" id="business-cards-chase-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            Do business cards from Chase count toward 5/24?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> No — Chase Ink business cards do not add to your 5/24 count because business cards from most major issuers are not reported to personal credit bureaus. However, you still need to be under 5/24 to be approved for a Chase business card in the first place.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Business credit cards from Chase, American Express, Citi, and Bank of America are typically reported only to commercial credit bureaus (Dun &amp; Bradstreet, Equifax Business, Experian Business) — not to the personal bureaus (Equifax, Experian, TransUnion) that Chase checks for 5/24. This makes the Chase Ink Business lineup a core strategy for earning Chase Ultimate Rewards points without consuming 5/24 slots. The r/churning community&apos;s wiki confirms this strategy at{' '}
            <a
              href="https://www.reddit.com/r/churning/wiki/index/#wiki_chase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              reddit.com/r/churning&apos;s Chase wiki
            </a>
            .
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The important exception is Capital One and Discover business cards, which report to personal credit bureaus and therefore count toward 5/24. If you have opened a Capital One Spark Business or Discover business card, those accounts appear on your personal credit report and add to your 5/24 count just like a consumer card would. Always verify how a specific business card reports before factoring it into your application strategy.
          </p>
          <div className="bg-brand-light border border-gray-200 rounded-lg p-4 text-xs text-text-secondary">
            Reporting behavior verified as of May 2026. Business card reporting policies can change without notice.
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12" id="how-to-count-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            How do I count cards toward 5/24?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> Count every personal credit card opened in the last 24 months that appears on your personal credit report — including authorized user accounts and Capital One or Discover business cards. Do not count most business cards, charge cards, credit limit increases, or product changes.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            To determine your 5/24 count: pull your personal credit report from{' '}
            <a
              href="https://www.annualcreditreport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              AnnualCreditReport.com
            </a>{' '}
            (free, no hard inquiry) and count every credit card account with an opened date in the last 24 months. Include personal cards from every issuer. Include authorized user (AU) accounts — these appear on your personal report and count toward 5/24 by default, though Chase reconsideration representatives have been known to exclude AU accounts if asked directly.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Do not count: business cards from Chase, Amex, Citi, or BofA (these report only to business bureaus); Amex charge cards (Platinum, Gold, Green — technically not credit cards); credit limit increases on existing accounts; product changes or upgrades between Chase cards; and debit cards or prepaid cards of any kind. The{' '}
            <a
              href="https://www.nerdwallet.com/article/credit-cards/chase-5-24-rule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              NerdWallet 5/24 overview
            </a>{' '}
            has a useful summary of counts vs. non-counts for everyday cardholders who may be less familiar with the full nuance.
          </p>
          <div className="bg-brand-light border border-gray-200 rounded-lg p-4 text-xs text-text-secondary">
            Rules verified as of May 2026. The treatment of authorized user accounts remains variable — individual reconsideration outcomes differ.
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12" id="when-card-falls-off-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            When does a card &ldquo;fall off&rdquo; the 5/24 count?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> A card falls off your 5/24 count on the first day of the 25th calendar month after the month it was opened. An account opened in May 2024 drops off in June 2026 — not May 2026. Closing the card has no effect on the fall-off date.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Chase counts accounts opened within the past 24 full calendar months, using the account-opened date on your personal credit report. The key nuance is that Chase appears to use the month of opening, not the exact day. A card opened on May 31, 2024 is treated as a &ldquo;May 2024&rdquo; account and falls off at the start of June 2026 — the beginning of the 25th month. This means cardholders who opened cards in the final days of a given month can fall off the count slightly earlier than a strict day-counting approach would suggest.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Closing a card does not speed up the fall-off. Closed accounts remain on your personal credit report for up to 10 years and continue to count toward 5/24 until the account-opened date is at least 24 months in the past. If you are at 5/24 and waiting for a card to drop, monitor your status using the free tracker here or pull your credit report monthly around the expected drop-off date to confirm your new count before applying.
          </p>
          <div className="bg-brand-light border border-gray-200 rounded-lg p-4 text-xs text-text-secondary">
            Fall-off methodology verified against community data points as of May 2026. Always confirm your count via credit report before applying.
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12" id="how-to-check-524-status">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            How do I check my own 5/24 status?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> Pull your free annual credit report at AnnualCreditReport.com and count every credit card account opened in the last 24 months. Or use the free 5/24 tracker on this site to log your cards and see your count calculated automatically — no credit pull required.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The most accurate way to check your 5/24 status is to review your actual credit report. Go to AnnualCreditReport.com — the official government-mandated free credit report site — and request reports from Equifax, Experian, and TransUnion. Review each open and closed account in the &ldquo;credit card&rdquo; or &ldquo;revolving&rdquo; section, note every account-opened date within the last 24 months, and count them. Include authorized user accounts. Exclude business cards from major issuers.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Alternatively, use the{' '}
            <Link href="/#tracker" className="text-brand-gold hover:text-amber-600 underline">
              free 5/24 tracker on this site
            </Link>{' '}
            to log your card opening dates and instantly calculate your current 5/24 count, your exact drop-off dates, and when you will next drop below the threshold. All data is stored in your browser&apos;s localStorage — nothing is transmitted to any server.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12" id="strategies-524">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
            What strategies help with 5/24?
          </h2>
          <p className="text-base text-text-primary bg-brand-light/60 border-l-4 border-brand-gold rounded-r-lg p-4 mb-5 leading-relaxed">
            <strong>Quick answer:</strong> Prioritize Chase cards while under 5/24, fill in with Chase Ink business cards (which don&apos;t add to your count), apply for non-Chase cards only after exhausting Chase options, and time your applications so the most recent cards age off before your next Chase application.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            The core principle of managing 5/24 is Chase-first sequencing. Because Chase&apos;s rule is the most restrictive in the industry, and because Amex, Citi, and Capital One do not have equivalent cross-issuer restrictions, the optimal order is to apply for Chase cards first before building up non-Chase approvals. Once you reach 4/24, consider applying for two Chase cards in the same day to count as a single inquiry batch before moving on to other issuers.
          </p>
          <p className="text-base text-text-primary mb-4 leading-relaxed">
            Use Chase Ink business cards as a bridge strategy. Each Ink approval earns Chase Ultimate Rewards without adding to your 5/24 count, allowing you to accumulate points even while waiting for personal cards to age off. If you are at 5/24 and want to time your re-entry, calculate exactly when your oldest qualifying card drops off using the month-based rule described above. The{' '}
            <a
              href="https://www.reddit.com/r/churning/wiki/index/#wiki_chase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-600 underline"
            >
              r/churning Chase strategy wiki
            </a>{' '}
            maintains community consensus on current enforcement patterns and any newly observed exceptions.
          </p>
        </section>

        {/* Related Tools */}
        <section className="mb-12 p-6 bg-brand-light rounded-2xl border border-gray-200">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-4">Related Tools &amp; Guides</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li>
              <Link href="/#tracker" className="text-brand-gold hover:text-amber-600 underline">
                5/24 Status Tracker
              </Link>{' '}
              — Log your cards and calculate your current count.
            </li>
            <li>
              <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 underline">
                Velocity Rule Checker
              </Link>{' '}
              — Check all issuer rules: Amex, Citi, BofA, Capital One.
            </li>
            <li>
              <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600 underline">
                Full Rules Guide
              </Link>{' '}
              — Amex lifetime, Citi 8/65, BofA 2/3/4, and more.
            </li>
            <li>
              <Link href="/application-timing" className="text-brand-gold hover:text-amber-600 underline">
                Application Timing Tool
              </Link>{' '}
              — Space your applications to maximize approvals.
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
            Frequently Asked Questions About Chase 5/24
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                  {faq.question}
                </h3>
                <p className="text-base text-text-primary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </article>
    </>
  );
}
