import type { Metadata } from 'next';
import Link from 'next/link';
import AnnualFeeCalcClient from '@/components/AnnualFeeCalcClient';
import AnswerBlock from '@/components/AnswerBlock';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Card Annual Fee Calculator — Is It Worth It? | 524Tracker',
  description:
    'Calculate whether your credit card annual fee is worth keeping. Compare credits, rewards value, and costs to find your card\'s true net value instantly.',
  keywords:
    'annual fee calculator, credit card worth it, card value calculator, annual fee worth it, credit card net value, keep or cancel card, credit card rewards value',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/annual-fee-calculator' },
  openGraph: {
    title: 'Credit Card Annual Fee Calculator — Is It Worth It?',
    description:
      'Calculate whether your credit card annual fee is worth keeping. Compare credits, rewards value, and costs to find your card\'s true net value.',
    url: 'https://524tracker.com/annual-fee-calculator',
    type: 'website',
  },
};

const annualFeeFaqs = [
  {
    question: 'How do I know if a credit card annual fee is worth it?',
    answer:
      'Add up all credits you actually use, calculate rewards value from your spending, and subtract the annual fee. If the total is positive, the card pays for itself. Don\'t count credits you wouldn\'t naturally use without forcing spend just to break even.',
  },
  {
    question: 'Should I count all card credits toward the value?',
    answer:
      'Only count credits you would use regardless of having the card. A $300 travel credit is worth $300 if you travel anyway, but worth less if you\'d force spend just to use it. Be honest about your actual usage patterns to get an accurate calculation.',
  },
  {
    question: 'How much are credit card points worth?',
    answer:
      'Point values vary by program and redemption. Chase Ultimate Rewards average 1.5-2 cents each via transfer partners. Amex Membership Rewards average 1.2-1.8 cents. Capital One miles average 1.5-1.7 cents. Cash back is always 1 cent per point.',
  },
  {
    question: 'When should I downgrade instead of canceling a card?',
    answer:
      'Downgrade when the annual fee exceeds the value you get but you want to keep your credit history and points. Most banks let you switch to a no-fee version. Wait at least 12 months after opening before requesting a product change to avoid clawbacks.',
  },
];

export default function AnnualFeeCalculatorPage() {
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
                name: 'Credit Card Annual Fee Calculator',
                description:
                  'Calculate whether your credit card annual fee is worth keeping by comparing credits, rewards value, and costs to determine the card\'s true net value.',
                url: 'https://524tracker.com/annual-fee-calculator',
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
                    name: 'Annual Fee Calculator',
                    item: 'https://524tracker.com/annual-fee-calculator',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: annualFeeFaqs.map((faq) => ({
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
          <span>Annual Fee Calculator</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Annual Fee Calculator &mdash; Is It Worth It?
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Enter your card details, credits you actually use, and monthly spending to instantly calculate
            whether your annual fee pays for itself. Works with Chase Sapphire Reserve, Amex Platinum, Venture X,
            and any other premium credit card.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <AnswerBlock
          what="A calculator that compares your credit card annual fee against the credits, perks, and rewards you actually use to determine if the card is worth keeping."
          who="Cardholders approaching their annual fee renewal date who need to decide whether to keep, downgrade, or cancel a premium credit card."
          bottomLine="Enter your real usage to get an honest net-value number — do not count credits you would not naturally use."
          lastUpdated="2026-03-19"
        />

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Calculate If Your Annual Fee Is Worth It
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The formula for determining whether a credit card annual fee is worth paying comes down to a simple
              equation: credits you use plus rewards you earn minus the annual fee equals your net value. If the
              result is positive, the card is paying you more than it costs. If it is negative, you may want to
              consider downgrading to a no-fee alternative or canceling the card entirely.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Many premium cards carry annual fees of $95 to $695 or more, but they also come with statement credits,
              travel perks, and elevated earning rates that can easily offset the cost for the right cardholder.
              The key is being honest about which benefits you actually use. A $200 airline fee credit is worth $200
              only if you would have spent that money on airline incidentals regardless of having the card.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The annual fee calculator below automates this math for popular premium cards. Select your card, toggle
              on the credits you actually use, enter your monthly spending across categories, and the tool will show
              you the exact dollar value you are getting from the card each year compared to what you are paying.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Which Card Credits Should You Count?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              One of the biggest mistakes people make when evaluating annual fees is counting every credit at full
              face value. A credit is only worth its full amount if you would spend that money naturally without the
              card. For example, if you regularly fly and always check a bag, a $300 travel credit is genuinely
              worth $300. But if you rarely travel and would only book a trip to &quot;use up&quot; the credit, its
              real value to you is much less.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The Amex Platinum is a good case study. Its $695 annual fee comes with over $1,400 in potential
              statement credits including Uber, Saks Fifth Avenue, airline fees, digital entertainment, Walmart+,
              and CLEAR. But most cardholders do not use every single credit. When evaluating your card, only toggle
              on the credits you genuinely use in the calculator below, and you will get a much more accurate picture
              of whether the card is worth keeping.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Value Credit Card Points
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Not all points are created equal. The value of a credit card point depends on the rewards program and
              how you redeem. Cash back is the simplest: one point always equals one cent. But transferable point
              programs like Chase Ultimate Rewards, Amex Membership Rewards, and Capital One Miles can be worth
              significantly more when transferred to airline or hotel partners and redeemed for premium travel.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Chase Ultimate Rewards points are generally valued at 1.5 to 2.0 cents each when transferred to
              partners like Hyatt or United. Amex Membership Rewards average 1.2 to 1.8 cents with transfers to
              partners like ANA or Delta. Capital One Miles typically land around 1.5 to 1.7 cents through transfers.
              The calculator defaults to conservative valuations for each program but lets you adjust the cents per
              point based on how you actually redeem.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Popular Cards With High Annual Fees
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The <strong>Chase Sapphire Reserve</strong> ($550/year) is popular among frequent travelers for its
              $300 travel credit, 3x earning on dining and travel, Priority Pass lounge access, and strong transfer
              partners. After the travel credit, the effective fee drops to $250, which many cardholders offset
              through rewards earning alone.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The <strong>Amex Platinum</strong> ($695/year) offers the most credits of any premium card but
              requires active management to use them all. Cardholders who travel frequently, use Uber, shop at
              Saks, and stream entertainment can extract well over $1,000 in annual value. The <strong>Capital One
              Venture X</strong> ($395/year) is gaining ground as a simpler premium card with a $300 travel portal
              credit and 10,000 bonus miles annually, giving it an effective fee near $100.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Mid-tier cards like the <strong>Amex Gold</strong> ($250/year) and <strong>Citi Strata Premier</strong>
              ($95/year) offer strong earning rates in everyday categories like dining and groceries without the
              complexity of managing multiple credits. These cards often provide the best value for people who spend
              heavily on food and want a straightforward rewards structure.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Annual Fee Calculator
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Select a card from the dropdown or choose &quot;Custom Card&quot; to enter your own details. For
              pre-populated cards, toggle each credit on or off based on whether you actually use it. Enter your
              typical monthly spending in each category, and the calculator will show your total annual rewards
              value minus the annual fee. Adjust the cents-per-point value if you redeem differently than the
              default. A positive net value means the card is worth keeping.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <AnnualFeeCalcClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Annual Fee Value
            </h2>
            <div className="space-y-6">
              {annualFeeFaqs.map((faq) => (
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
            Want to check your application eligibility?{' '}
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
