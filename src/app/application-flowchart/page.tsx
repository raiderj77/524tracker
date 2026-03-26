import type { Metadata } from 'next';
import Link from 'next/link';
import ApplicationFlowchart from '@/components/ApplicationFlowchart';
import AnswerBlock from '@/components/AnswerBlock';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Card Application Flowchart | 524Tracker',
  description:
    'Interactive flowchart to find the best credit card for your situation. Based on your 5/24 status, rewards preference, and existing cards. Free, no account required.',
  keywords:
    'credit card flowchart, what card should I get, credit card decision tool, churning flowchart, best credit card for me, card application order',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/application-flowchart' },
  openGraph: {
    title: 'Credit Card Application Flowchart — What Card Should I Get Next?',
    description:
      'Interactive flowchart to find the best credit card for your situation. Based on your 5/24 status, rewards preference, and existing cards.',
    url: 'https://524tracker.com/application-flowchart',
    type: 'website',
  },
};

const flowchartFaqs = [
  {
    question: 'What is the Chase 5/24 rule?',
    answer:
      'The Chase 5/24 rule means Chase will automatically deny most credit card applications if you have opened 5 or more personal credit card accounts from any bank within the past 24 months. This includes cards from all issuers, not just Chase. Business cards from most banks do not count toward the 5/24 total.',
  },
  {
    question: 'Does Amex care about 5/24?',
    answer:
      'No. American Express does not enforce the 5/24 rule and does not limit approvals based on how many cards you have opened recently. However, Amex has its own restrictions — most notably the once-per-lifetime bonus rule, which means you can only earn a welcome bonus on each card product once. Amex also enforces a limit of 5 credit cards at one time.',
  },
  {
    question: 'How often should I apply for new cards?',
    answer:
      'A common guideline is to space applications at least 90 days apart. This gives you time to meet minimum spend requirements on each new card before opening the next one. Applying too frequently can also result in multiple hard inquiries, which may temporarily lower your credit score. Some issuers like Citi enforce specific velocity limits such as the 8/65 rule (1 application per 8 days, 2 per 65 days).',
  },
  {
    question: 'What if I\'m over 5/24 right now?',
    answer:
      'If you are currently over 5/24, focus on cards from issuers that do not enforce the rule — such as Amex, Barclays, and Capital One. Your 5/24 count drops as older accounts age past the 24-month mark. Use our tracker to see exactly when each card will fall off your count, and plan your Chase applications for after you drop below 5/24.',
  },
];

export default function ApplicationFlowchartPage() {
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
                name: 'Credit Card Application Flowchart',
                description:
                  'Interactive decision flowchart that recommends the best credit card based on your 5/24 status, rewards preference, and existing cards.',
                url: 'https://524tracker.com/application-flowchart',
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
                datePublished: '2026-03-15',
                dateModified: '2026-03-15',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Application Flowchart',
                    item: 'https://524tracker.com/application-flowchart',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: flowchartFaqs.map((faq) => ({
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Application Flowchart</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Application Flowchart
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Answer a few questions to find out what credit card you should apply for next.
            Based on your 5/24 status, rewards preferences, and existing cards.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 16, 2026</p>
        </header>

        <AnswerBlock
          what="An interactive flowchart that recommends which credit card to apply for next based on your 5/24 status, rewards goals, and existing card portfolio."
          who="Credit card enthusiasts who want a data-driven recommendation for their next application instead of guessing."
          bottomLine="Answer the questions to get a personalized recommendation — always verify current rules and offers directly with the issuer before applying."
          lastUpdated="2026-03-16"
        />

        <ApplicationFlowchart />

        {/* Static SSR content for crawlers */}
        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Credit Card Application Flowchart
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The credit card application flowchart guides you through a series of questions to determine which card you should apply for next. It considers your current 5/24 status (how many new cards you have opened in the past 24 months), your rewards preferences (travel points, cash back, or hotel and airline loyalty programs), and which cards you already hold. Based on your answers, the tool recommends a specific card or category to target.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The 5/24 rule is the single most important factor in deciding application order. Chase enforces this rule strictly: if you have opened 5 or more personal credit accounts from any bank in the last 24 months, Chase will deny your application for most of their cards. Because Chase offers some of the most valuable welcome bonuses in the industry, most strategies prioritize Chase cards first while you are still under 5/24.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Application order matters because some issuers have strict velocity rules while others do not. By applying strategically — starting with the most restrictive issuers and moving to more lenient ones — you can maximize the total number of welcome bonuses you earn over time. This flowchart encodes those strategies into a simple question-and-answer format so you do not need to memorize every rule yourself.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Why Application Order Matters
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The Chase-first strategy is widely recommended because Chase is the only major issuer that counts all new accounts from every bank against your application eligibility. If you open several Amex or Citi cards first, those accounts count toward your 5/24 total and may lock you out of Chase entirely. By applying for Chase cards while your count is low, you preserve access to their most valuable products like the Sapphire Preferred, Sapphire Reserve, and Ink Business cards.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              After securing your Chase cards, the Amex once-per-lifetime rule becomes the next consideration. Amex allows you to earn a welcome bonus on each card product only once, so you want to time your Amex applications for when the bonus offers are at their highest historical values. Citi&apos;s 8/65 rule (no more than 1 application per 8 days and 2 per 65 days) means you also need to space out Citi applications carefully to avoid automatic denials.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Timing your applications correctly across multiple issuers can mean the difference between earning a handful of welcome bonuses and earning dozens over several years. The flowchart helps you navigate these overlapping rules without needing to track each issuer&apos;s policies manually.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Understanding the Major Issuer Rules
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Each major credit card issuer enforces its own set of application rules and velocity limits. Here is a brief overview of the rules the flowchart considers when making its recommendations:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-text-primary mb-4">
              <li>
                <strong>Chase 5/24:</strong> Denies most applications if you have opened 5 or more personal accounts across all banks in the past 24 months. The most restrictive rule in the industry.
              </li>
              <li>
                <strong>Amex once-per-lifetime:</strong> Welcome bonus limited to once per card product per lifetime. Amex does not enforce 5/24 but limits you to 5 credit cards total.
              </li>
              <li>
                <strong>Citi 8/65:</strong> Maximum 1 application per 8 days and 2 applications per 65 days. Citi also has a 24-month bonus restriction on many cards.
              </li>
              <li>
                <strong>Bank of America 2/3/4:</strong> Maximum 2 new cards per 30 days, 3 per 12 months, and 4 per 24 months.
              </li>
              <li>
                <strong>Capital One:</strong> Generally limits cardholders to 2 consumer credit cards at one time.
              </li>
            </ul>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              For detailed explanations of each rule, including what counts and what does not, visit our comprehensive <Link href="/rules-guide" className="text-brand-gold hover:text-amber-600">credit card application rules guide</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Application Order
            </h2>
            <div className="space-y-6">
              {flowchartFaqs.map((faq) => (
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

          <FinancialDisclaimer />
        </article>
      </div>
    </>
  );
}
