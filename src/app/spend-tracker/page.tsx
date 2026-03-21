import type { Metadata } from 'next';
import Link from 'next/link';
import SpendTrackerTool from '@/components/SpendTrackerTool';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AnswerBlock from '@/components/AnswerBlock';

export const metadata: Metadata = {
  title: 'Welcome Bonus Spend Tracker | 524Tracker',
  description:
    'Track credit card welcome bonus minimum spend requirements free. See progress, days remaining, and daily spend needed.',
  keywords:
    'welcome bonus spend tracker, minimum spend tracker, credit card spend tracker, welcome bonus deadline, minimum spend calculator, bonus spend progress',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/spend-tracker' },
  openGraph: {
    title: 'Welcome Bonus Spend Tracker — Track Minimum Spend Free',
    description:
      'Free tool to track credit card welcome bonus minimum spend requirements. See progress, days remaining, and daily spend needed across all your cards.',
    url: 'https://524tracker.com/spend-tracker',
    type: 'website',
  },
};

const spendTrackerFaqs = [
  {
    question: 'Is my spending data private?',
    answer:
      'Yes. All data you enter into the spend tracker is stored exclusively in your browser using localStorage. Your spending information never leaves your device and is never sent to any server. No account is required, and no cookies are used to track your financial data.',
  },
  {
    question: 'What happens if I miss the minimum spend deadline?',
    answer:
      'If you do not meet the minimum spend requirement within the specified timeframe, you will forfeit the welcome bonus for that card. Most banks will not offer an extension, and you typically cannot re-earn the same welcome bonus by meeting the spend after the deadline has passed. Some issuers may allow you to apply again after a waiting period, but the original bonus opportunity is lost.',
  },
  {
    question: 'Can I track multiple cards at once?',
    answer:
      'Yes. The spend tracker is designed to handle multiple cards simultaneously. You can add as many cards as you need, each with its own minimum spend amount, deadline, and progress tracking. This makes it easy to manage overlapping bonus periods without losing track of any individual requirement.',
  },
  {
    question: 'Does closing a card affect the welcome bonus?',
    answer:
      'Generally, you should not close a card before the welcome bonus posts to your account. Most banks require you to keep the card open until the bonus points or cash back are credited, which may take one to two billing cycles after meeting the spend requirement. Closing early may result in forfeiting the bonus entirely.',
  },
];

export default function SpendTrackerPage() {
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
                name: 'Welcome Bonus Spend Tracker',
                description:
                  'Track credit card welcome bonus minimum spend requirements. See progress bars, days remaining, and daily spend needed across all your active cards.',
                url: 'https://524tracker.com/spend-tracker',
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
                    name: 'Spend Tracker',
                    item: 'https://524tracker.com/spend-tracker',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: spendTrackerFaqs.map((faq) => ({
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
          <span>Spend Tracker</span>
        </nav>

        <AnswerBlock
          what="A free tool to track minimum spend progress across all your credit cards with deadlines, daily targets, and progress bars."
          who="Cardholders juggling multiple welcome bonus spend requirements who need to see exactly where they stand."
          bottomLine="Add your cards and log spending to stay on track for every welcome bonus — always verify bonus terms directly with the issuer."
          lastUpdated="2026-03-20"
        />

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Welcome Bonus Spend Tracker
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Track minimum spend requirements across all your credit cards simultaneously.
            See progress bars, days remaining, and daily spend needed to hit every bonus deadline.
            No account required — all data stays in your browser.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 16, 2026</p>
        </header>

        <SpendTrackerTool />

        {/* Static SSR content for crawlers */}
        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How the Welcome Bonus Spend Tracker Works
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The welcome bonus spend tracker helps you stay on top of credit card minimum spend requirements. When you open a new credit card with a welcome bonus, the issuing bank typically requires you to spend a specific dollar amount within a set timeframe — usually 90 days from account opening. Missing that deadline means losing the bonus entirely, which can be worth hundreds or even thousands of dollars in rewards.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This tool lets you add each card you are working on, enter the minimum spend amount and your deadline, then log your spending as you go. It calculates your remaining balance, shows how many days you have left, and tells you how much you need to spend per day to stay on track. You can track multiple cards at the same time, making it easy to manage overlapping bonus windows.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              All of your data is stored in your browser&apos;s localStorage. Nothing is ever sent to a server, and no account or login is required. Your spending information stays completely private on your device. If you clear your browser data, you can use the export feature to back up your tracking data and import it later.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Understanding Welcome Bonus Requirements
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Most credit card welcome bonuses require you to meet a minimum spend threshold within a specific window after account opening. The most common timeframe is 90 days (approximately 3 months), though some cards allow 6 months or as little as 60 days. Minimum spend amounts vary widely — entry-level cards may require $500 to $1,000, while premium travel cards often require $4,000 to $6,000 or more.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The spending window typically starts from the date your account is approved, not when you receive the physical card. This means you may lose several days of your bonus window waiting for the card to arrive. Some issuers provide an instant card number you can use for online purchases immediately, which can help you start spending right away.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              If you miss the minimum spend deadline, the bonus is forfeited. Most banks will not extend the deadline or offer a second chance. Depending on the issuer&apos;s rules, you may need to wait 24 to 48 months before you can apply for the same card and earn the bonus again. This makes tracking your progress critical — a missed deadline by even one day means the full bonus is lost.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Tips for Meeting Minimum Spend Requirements
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Meeting minimum spend requirements does not have to mean overspending. Here are practical strategies to reach your target using money you would spend anyway:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-text-primary mb-4">
              <li>
                <strong>Time large purchases around new cards.</strong> If you know you have a big expense coming up — insurance premiums, furniture, electronics, or travel bookings — plan your card application so the purchase falls within the bonus window.
              </li>
              <li>
                <strong>Shift recurring bills to the new card.</strong> Move subscriptions, utilities, phone bills, internet, and insurance payments to your new card. These regular expenses add up quickly and are money you are already spending each month.
              </li>
              <li>
                <strong>Prepay expenses you know you will have.</strong> Some service providers allow you to prepay several months of bills at once. If your cell phone carrier or insurance company accepts prepayment, this can put a significant dent in your minimum spend.
              </li>
              <li>
                <strong>Buy gift cards for stores you regularly shop at.</strong> Purchasing gift cards for grocery stores, gas stations, or restaurants you already frequent counts toward minimum spend. Only buy gift cards for places where you are certain to use them to avoid wasting money.
              </li>
              <li>
                <strong>Use the card for everyday purchases.</strong> Groceries, gas, dining out, and routine shopping all count. Making the new card your default payment method for the bonus period ensures every eligible dollar is captured toward your minimum spend goal.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Spend Tracking
            </h2>
            <div className="space-y-6">
              {spendTrackerFaqs.map((faq) => (
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
