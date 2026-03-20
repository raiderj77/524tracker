import type { Metadata } from 'next';
import Link from 'next/link';
import ApplicationTimingClient from '@/components/ApplicationTimingClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Card Application Timing Calculator | 524Tracker',
  description:
    'Calculate the optimal timing and order for credit card applications. Factor in Chase 5/24, Citi 8/65, Amex 2/90, and all issuer velocity rules to maximize approvals.',
  keywords:
    'application timing, when to apply for credit cards, card application order, optimal sequence, credit card strategy, application spacing',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/application-timing' },
  openGraph: {
    title: 'Credit Card Application Timing Calculator',
    description:
      'Calculate the optimal timing and order for credit card applications across all major issuers. Free tool with instant results.',
    url: 'https://524tracker.com/application-timing',
    type: 'website',
  },
};

const timingFaqs = [
  {
    question: 'What order should I apply for credit cards?',
    answer:
      'Apply for Chase cards first since they have the most restrictive 5/24 rule counting all banks. Then Citi and Barclays which are inquiry-sensitive. Save Amex for later since their lifetime bonus rule means timing is less critical for velocity.',
  },
  {
    question: 'How long should I wait between credit card applications?',
    answer:
      'Wait at least 31 days between Chase applications (2/30 rule), 8 days between Citi applications (1/8 rule), and 91 days between Amex credit card applications (2/90 rule). Spacing applications 3 months apart is generally safe for all issuers.',
  },
  {
    question: 'Do business cards affect my application timing?',
    answer:
      'Most business cards don\'t count toward Chase 5/24 so they\'re great for earning bonuses between personal applications. However they DO count toward issuer-specific velocity rules like Chase 2/30 and Amex 2/90. Capital One and Discover business cards count toward 5/24.',
  },
];

export default function ApplicationTimingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                name: 'Credit Card Application Timing Calculator',
                description:
                  'Calculate the optimal timing and order for credit card applications based on issuer velocity rules including Chase 5/24, Amex 2/90, Citi 8/65, and more.',
                url: 'https://524tracker.com/application-timing',
                applicationCategory: 'FinanceApplication',
                operatingSystem: 'All',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                },
                author: {
                  '@type': 'Organization',
                  name: '524Tracker',
                },
                datePublished: '2026-03-19',
                dateModified: '2026-03-19',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Application Timing',
                    item: 'https://524tracker.com/application-timing',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: timingFaqs.map((faq) => ({
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Application Timing</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Application Timing Calculator
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Enter your application history and the cards you want, then get an optimized timeline
            showing when to apply for each card. The calculator accounts for Chase 5/24, Amex 2/90,
            Citi 8/65, BofA 2/3/4, and every other major issuer&apos;s velocity rules.
            No account required &mdash; all data stays in your browser.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Why Application Timing Matters
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Credit card issuers enforce overlapping velocity rules that limit how often you can apply
              for and be approved for new cards. Applying at the wrong time or in the wrong order can
              result in automatic denials, wasted hard inquiries, and missed welcome bonus opportunities.
              A strategic approach to timing can mean the difference between earning thousands of dollars
              in welcome bonuses and hitting a wall of rejections.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The challenge is that each bank tracks different things over different timeframes. Chase counts
              all your personal cards from every bank over 24 months. Citi counts only Citi applications over
              8 and 65 day windows. Amex limits credit card approvals to two every 90 days. When you are
              juggling applications across multiple issuers, these rules interact in ways that are difficult
              to track manually. Applying for the wrong card first can lock you out of more valuable
              opportunities for months or even years.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              The Optimal Application Sequence
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The general strategy is to prioritize issuers from most restrictive to least restrictive.
              Chase should almost always come first because their 5/24 rule counts cards from every bank,
              making each personal card slot extremely valuable. Once you are over 5/24, you are locked out
              of most Chase cards entirely, so it is critical to get your Chase cards before accumulating
              too many cards elsewhere.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              After Chase, prioritize Barclays and US Bank, which are inquiry-sensitive and may deny
              applicants with too many recent hard pulls. Then move to Citi, which has strict
              application-spacing rules but does not count cards from other issuers. Bank of America and
              Wells Fargo come next with their own issuer-specific limits. Save Capital One and Amex for
              later &mdash; Capital One has a simple one-per-six-months rule, and Amex&apos;s
              once-per-lifetime bonus policy means timing is less critical for total eligibility.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Business cards from most issuers are excellent fillers between personal card applications
              because they generally do not count toward Chase 5/24. However, be aware that Capital One
              and Discover business cards do report to personal credit bureaus and will count toward your
              5/24 total. Business cards always count toward issuer-specific velocity rules like Chase 2/30
              and Amex 2/90.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Key Spacing Rules Between Applications
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Each issuer enforces minimum wait times between applications. Chase requires at least 31 days
              between applications (the 2/30 rule), and you cannot exceed five personal cards from all banks
              in 24 months (5/24). Citi enforces an 8-day minimum between applications (1/8) and a maximum
              of two applications per 65 days (2/65). These are hard-coded system rules with no
              reconsideration path.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Amex limits credit card approvals to one every 5 days (1/5) and two every 90 days (2/90),
              though charge cards are exempt from the 2/90 rule. Bank of America enforces the 2/3/4
              framework: maximum 2 BofA cards per 30 days, 3 per 12 months, and 4 per 24 months. Capital
              One limits you to one approval every 6 months, while US Bank requires a 60-day gap between
              applications and is sensitive to overall inquiry counts.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              As a general guideline, spacing applications at least 3 months apart is a safe strategy that
              avoids triggering velocity rules at most issuers. However, the timing calculator below can
              identify shorter windows where you may be eligible to apply sooner based on your specific
              application history.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Timing Calculator
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Start by entering your credit card application history from the past 24 months. If you have
              already entered cards in the Velocity Checker, your data will be loaded automatically. Next,
              add the cards you want to apply for to your wishlist &mdash; up to five cards at a time. Select
              the issuer and indicate whether each card is personal or business. When you click
              &quot;Calculate Optimal Timing,&quot; the tool will sequence your wishlist cards in priority
              order and calculate the earliest safe application date for each one based on your history and
              all applicable velocity rules.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <ApplicationTimingClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Application Timing
            </h2>
            <div className="space-y-6">
              {timingFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-base text-text-primary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-8 bg-brand-light border border-gray-200 rounded-xl p-5">
          <p className="text-sm">
            Need to check your current velocity status?{' '}
            <Link href="/velocity-checker" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use the Velocity Checker &rarr;
            </Link>
          </p>
        </div>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
