import type { Metadata } from 'next';
import Link from 'next/link';
import VelocityCheckerClient from '@/components/VelocityCheckerClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Card Velocity Rule Checker — All Issuers | 524Tracker',
  description:
    'Check credit card velocity rules across Chase 5/24, Amex 2/90, Citi 8/65, BofA 2/3/4, Capital One, Barclays, US Bank, Wells Fargo, and Discover. Free tool.',
  keywords:
    'velocity rules, credit card application limits, chase 5/24, amex 2/90, citi 8/65, bank of america 2/3/4, capital one card limit, barclays 6/24, us bank, wells fargo, discover, application velocity checker',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/velocity-checker' },
  openGraph: {
    title: 'Credit Card Velocity Rule Checker — All Issuers',
    description:
      'Check credit card velocity rules across Chase, Amex, Citi, BofA, Capital One, Barclays, US Bank, Wells Fargo, and Discover. Free instant results.',
    url: 'https://524tracker.com/velocity-checker',
    type: 'website',
  },
};

const velocityFaqs = [
  {
    question: 'What are credit card velocity rules?',
    answer:
      'Banks limit how often you can apply for and be approved for new credit cards. Chase 5/24 counts all new personal cards from any issuer in the last 24 months and denies applications if you have five or more. Citi 8/65 limits you to one application every 8 days and two every 65 days. Each bank enforces unique rules tracking different timeframes and card types.',
  },
  {
    question: 'Do business cards count toward velocity rules?',
    answer:
      'Most business cards do not count toward Chase 5/24 because they are not reported on your personal credit report. However, Capital One and Discover business cards do report to personal credit bureaus, so they count toward 5/24 and other rules that track total new accounts. Business cards always count toward issuer-specific rules like Amex 2/90.',
  },
  {
    question: 'How do authorized user cards affect velocity rules?',
    answer:
      'Authorized user cards appear on your personal credit report and count toward Chase 5/24 and other rules that track total new accounts across all issuers. If you are denied by Chase due to authorized user cards, you may be able to call the reconsideration line and ask them to exclude those accounts from your 5/24 count.',
  },
  {
    question: 'What happens if I violate a velocity rule?',
    answer:
      'Your application will likely be automatically denied by the bank\'s system. Some issuers like Chase will deny your online application but allow you to call the reconsideration line to plead your case. Others like Citi enforce hard-coded limits in their system with no reconsideration path available, meaning you must wait until the rule resets.',
  },
];

export default function VelocityCheckerPage() {
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
                name: 'Credit Card Velocity Rule Checker',
                description:
                  'Check your eligibility across all major credit card issuer velocity rules including Chase 5/24, Amex 2/90, Citi 8/65, BofA 2/3/4, Capital One, Barclays, US Bank, Wells Fargo, and Discover.',
                url: 'https://524tracker.com/velocity-checker',
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
                    name: 'Velocity Checker',
                    item: 'https://524tracker.com/velocity-checker',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: velocityFaqs.map((faq) => ({
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
          <span>Velocity Checker</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Velocity Rule Checker &mdash; All Issuers
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Enter your credit card application history below and instantly check your eligibility across every major
            issuer&apos;s velocity rules. Covers Chase 5/24, Amex 2/90, Citi 8/65, BofA 2/3/4, and more.
            No account required &mdash; all data stays in your browser.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              What Are Credit Card Velocity Rules?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Credit card velocity rules are limits that banks impose on how frequently you can apply for or be approved
              for new credit cards. These rules exist to prevent what banks consider excessive account opening, and they
              vary significantly between issuers. Some rules track applications from a single bank, while others count
              new accounts across all issuers on your credit report.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Understanding velocity rules is critical for anyone who applies for multiple credit cards to earn welcome
              bonuses. Violating a velocity rule usually results in an automatic denial, wasting a hard inquiry on your
              credit report with nothing to show for it. By tracking your application history and checking rules before
              you apply, you can time applications strategically and avoid unnecessary denials.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Each bank enforces different rules with different timeframes. Some count only their own cards, others count
              cards from all banks. Some track applications while others track approvals. The velocity checker tool below
              evaluates your complete application history against every known rule simultaneously so you can see exactly
              where you stand before submitting a new application.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Chase Velocity Rules (5/24, 2/30)
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Chase&apos;s 5/24 rule is the most well-known velocity rule in the credit card hobby. If you have opened
              five or more new personal credit cards from any bank in the last 24 months, Chase will automatically deny
              your application for most of their cards. This rule counts cards from every issuer, not just Chase, making
              it one of the most restrictive rules to manage.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Authorized user cards count toward your 5/24 total because they appear on your personal credit report.
              However, most business cards do not count because they are not reported to personal credit bureaus. The
              notable exceptions are Capital One and Discover business cards, which do report to personal bureaus and
              therefore count toward 5/24.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Chase also enforces a 2/30 rule: you cannot have more than two Chase applications within a rolling 30-day
              window. Even if you are under 5/24, submitting a third Chase application within 30 days will result in a
              denial. This rule applies specifically to Chase applications, not cards from other banks.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              American Express Velocity Rules (1/5, 2/90)
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              American Express limits credit card approvals to one every five days (the 1/5 rule) and two every 90 days
              (the 2/90 rule). These rules apply specifically to Amex credit cards. Charge cards such as the Platinum
              Card and Gold Card are exempt from the 2/90 rule, meaning you can be approved for a charge card even if
              you have recently opened two credit cards.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Amex also enforces a once-per-lifetime welcome bonus policy for most cards. If you have previously received
              a welcome bonus on a specific card product, you generally cannot earn it again, regardless of how long ago
              you held the card. This is separate from the velocity rules but important to consider when planning Amex
              applications.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Citi Velocity Rules (1/8, 2/65)
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Citi enforces two application-based velocity rules. The 1/8 rule limits you to one Citi credit card
              application every 8 days. The 2/65 rule limits you to two Citi credit card applications every 65 days.
              These are hard-coded system limits with no reconsideration path &mdash; if you violate them, your
              application will be automatically denied and calling the reconsideration line will not help.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Citi also has a 24-month bonus restriction on many of their cards. If you have opened or closed the same
              Citi card within the last 24 months, you will not be eligible for the welcome bonus even if you are
              approved. The velocity checker focuses on the 1/8 and 2/65 application limits, but keep the 24-month
              bonus restriction in mind when planning Citi applications.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Bank of America Velocity Rules (2/3/4, 7/12)
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Bank of America enforces the 2/3/4 rule: a maximum of 2 new BofA cards in any 30-day period, 3 in any 12-month
              period, and 4 in any 24-month period. These limits are specific to Bank of America cards and do not count
              cards from other issuers. Exceeding any of these thresholds will result in a denial.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Additionally, Bank of America considers your total new accounts across all banks. The unofficial 7/12 rule
              suggests that having 7 or more new cards from any issuer in the last 12 months will trigger denials for
              BofA applications. This cross-issuer rule makes BofA more restrictive than its own 2/3/4 limits might
              suggest, especially for active applicants.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Capital One, Barclays, US Bank, Wells Fargo, and Discover Rules
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              <strong>Capital One</strong> generally limits approvals to one new Capital One card every six months. They
              also limit most consumers to a maximum of two Capital One consumer cards at any time. Capital One business
              cards report to personal credit bureaus, which is unusual among major issuers.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              <strong>Barclays</strong> uses a soft 6/24 rule: if you have six or more new accounts from any bank in the
              last 24 months, your application is more likely to be denied, though approvals are still possible with a
              strong overall profile. <strong>US Bank</strong> is notably inquiry-sensitive and enforces a 1/60 rule
              (one US Bank card per 60 days) along with an informal 5/12 guideline where five or more new accounts in
              12 months may trigger a denial.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              <strong>Wells Fargo</strong> limits you to one new Wells Fargo card every six months and is generally more
              conservative with applicants who have many recent new accounts. Their soft 5/24 guideline mirrors
              Chase&apos;s rule but is not as strictly enforced. <strong>Discover</strong> typically limits approvals to
              one new Discover card every 12 months. Discover business cards report to personal credit bureaus, similar
              to Capital One.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Velocity Rule Checker
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Enter each credit card you have opened or applied for in the past 24 months using the form below. Select
              the issuer, enter the card name, set the application date, and indicate whether it was a personal or
              business card. If you were added as an authorized user rather than the primary applicant, check the
              authorized user box. Once you have entered all your cards, click the &quot;Check My Eligibility&quot;
              button to see your status across every issuer&apos;s velocity rules instantly.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <VelocityCheckerClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Velocity Rules
            </h2>
            <div className="space-y-6">
              {velocityFaqs.map((faq) => (
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
            Already tracking your cards?{' '}
            <Link href="/card-tracker" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use the Card Tracker &rarr;
            </Link>
          </p>
        </div>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
