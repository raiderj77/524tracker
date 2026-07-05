import type { Metadata } from 'next';
import Link from 'next/link';
import PointsValueCalculatorClient from '@/components/PointsValueCalculatorClient';
import AnswerBlock from '@/components/AnswerBlock';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';

export const metadata: Metadata = {
  title: 'Points & Miles Award Value Calculator | 524Tracker',
  description:
    'Calculate the true value of your points and miles redemptions. Compare your specific award against program benchmarks and find out if you are making a good use of your currency.',
  keywords:
    'points calculator, miles calculator, redemption value, credit card rewards, award valuation',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/points-value-calculator' },
  openGraph: {
    title: 'Points & Miles Award Value Calculator | 524Tracker',
    description:
      'Calculate the true value of your points and miles redemptions. Compare your specific award against program benchmarks.',
    url: 'https://524tracker.com/points-value-calculator',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if my points redemption is a good value?',
    answer:
      'Compare the cents-per-point value of your specific redemption against the program\'s typical range. This calculator does that automatically. If your redemption is at or above the high end of the typical range, you are getting premium value. Below the low end means you could likely do better elsewhere or by paying cash.',
  },
  {
    question: 'What is cents-per-point and why does it matter?',
    answer:
      'Cents-per-point divides the cash value of an award by the number of points required. It shows you how much each point is "worth" in a specific redemption. For example, if a flight costs 50,000 points and the same flight costs $800 in cash, that redemption is worth 1.6 cents per point ($800 divided by 50,000 points). The higher the cents-per-point, the better the value.',
  },
  {
    question: 'Why do programs have a range instead of a single value?',
    answer:
      'Different redemptions within the same program offer different values. A business-class flight on a premium airline might deliver 5+ cents per point, while booking a budget hotel offers 0.7 cents. The range reflects real-world variance in how points are redeemed. Our ranges are based on typical redemptions reported by The Points Guy, NerdWallet, FrequentMiler, and other major points analysts.',
  },
  {
    question: 'Should I always aim for the highest cents-per-point possible?',
    answer:
      'Not necessarily. A redemption that offers 1.8 cents per point is mathematically better than one offering 1.2 cents, but if you enjoy the award at 1.2 cents and it would take months longer to earn enough for the 1.8 cent option, the 1.2 cent redemption may be the right choice for your situation. Value is personal, but at least you will know what you are getting.',
  },
  {
    question: 'How often are these valuations updated?',
    answer:
      'The valuations in this calculator reflect benchmarks from July 2026. Points and miles programs frequently adjust award charts and partner relationships, which can shift valuations significantly. For example, World of Hyatt devalued in May 2026, and American AAdvantage dropped from an estimated 1.6 cents to 1.4 cents by July. We recommend rechecking major redemptions every few months or after program announcements.',
  },
  {
    question: 'What if my redemption value falls outside the typical range?',
    answer:
      'This is common and not necessarily a red flag. Niche or premium awards can deliver far higher value. For instance, transferring Amex points to Qatar or booking a luxury Hyatt property might yield 5-20+ cents per point, well above the baseline. Conversely, some redemptions, such as statement credits with Amex, might only deliver 0.6 cents. Context matters. Use this calculator as a starting point, not a final judgment.',
  },
  {
    question: 'Can I use this to compare different programs?',
    answer:
      'Yes, but carefully. You can look up the same award in two programs and compare the cents-per-point values. However, also consider account economics: a program with lower baseline value might offer better earning rates or annual bonuses that offset lower redemption rates. Use this calculator to understand individual redemptions and supplement that with broader program analysis.',
  },
  {
    question: 'What do the source notes mean?',
    answer:
      'Each program shows a source note listing the analysts and publications that informed the valuation. For example, "TPG July 2026: 1.4 cents" means The Points Guy published that valuation in July 2026. We cite The Points Guy, NerdWallet, FrequentMiler, Award Travel Finder, Gondola, and WalletHub to ensure our benchmarks reflect expert consensus.',
  },
];

export default function PointsValueCalculatorPage() {
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
                name: 'Points & Miles Award Value Calculator',
                description:
                  'Calculate the true value of your points and miles redemptions. Compare your specific award against program benchmarks.',
                url: 'https://524tracker.com/points-value-calculator',
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
                datePublished: '2026-07-01',
                dateModified: new Date().toISOString().substring(0, 10),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Points & Miles Award Value Calculator',
                    item: 'https://524tracker.com/points-value-calculator',
                  },
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <span>Points & Miles Award Value Calculator</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Points & Miles Award Value Calculator
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Enter how many points an award costs and what you would pay in cash for the same flight,
            hotel, or experience. This tool calculates the cents-per-point value of your specific
            redemption and compares it against that program&apos;s typical range.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: July 2026</p>
        </header>

        <AnswerBlock
          what="A calculator that converts your specific points or miles redemption into a cents-per-point value and compares it against that rewards program's typical benchmark range."
          who="Anyone holding credit card points, hotel points, or airline miles who wants to know whether a specific award redemption is a good use of their balance before booking."
          bottomLine="If your redemption's cents-per-point falls within or above the program's typical range, it's a solid use of points. Well below the range, you'd likely do better with a different redemption or by paying cash."
          lastUpdated="2026-07-01"
        />

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Understanding Points and Miles Value
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              One of the most persistent questions in credit card rewards is simple: are my points worth
              it? The answer is not always intuitive because points have no fixed value. A point is worth
              different amounts depending on what you redeem it for, which airline or hotel you choose,
              and when you book.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The concept of &quot;cents-per-point&quot; or &quot;cents-per-mile&quot; gives rewards a
              common currency. If you can quantify the cash value of an award and divide it by the number
              of points required, you get a per-point rate. That rate lets you compare redemptions
              apples-to-apples. A 50,000-point award that costs $1,000 in cash is worth 2 cents per point.
              A 25,000-point award costing $250 is also worth 1 cent per point. The first is the better
              value.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This calculator pulls together valuations for 12 major programs compiled by The Points Guy,
              NerdWallet, FrequentMiler, Award Travel Finder, Gondola, and WalletHub. Each program has a
              typical range, which reflects the consensus of how that program&apos;s points typically
              perform in real-world redemptions. When you plug in your specific redemption, the calculator
              shows you where your award falls relative to that benchmark.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              What Makes a Good Redemption?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              &quot;Good&quot; redemption value varies by program and personal circumstance, but a few
              principles apply broadly. Within or above the typical range is solid: if your redemption
              value matches or exceeds the typical cents-per-point range for that program, you are using
              your points efficiently. Most rewards programs see median redemptions hover in their
              published range.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Significantly above the range is excellent. Premium cabins, niche partners, and sweet-spot
              awards often deliver 50 to 100 percent more value than the baseline. A Bilt Rewards
              redemption via Qatar Airways, for instance, might yield 5+ cents per point, far above the
              1.8-2.2 cent typical range. Below the range may signal alternatives worth exploring &mdash;
              if your redemption falls 20 to 30 percent below the typical range, it is worth shopping
              around. Could you book a better award with the same points? Would paying cash and earning
              cash back on a credit card actually net more value?
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How Devaluations Change the Game
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              One critical caveat: valuations shift. Programs devalue constantly. In May 2026, World of
              Hyatt moved to a five-tier category system, increasing top-tier redemption costs by as much
              as 67 percent. That instantly made Hyatt points worth less cents-per-point on average.
              Similarly, by July 2026 analysts had revised AAdvantage valuation downward from an estimated
              1.6 cents to 1.4 cents.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This calculator reflects benchmark valuations as of July 2026. If you are reading this
              months or years later, check recent valuations from The Points Guy&apos;s monthly reports or
              other analyst sources before finalizing a major redemption. A specific sweet-spot award (like
              booking a long-haul business-class flight with premium transfer partners) can be worth 5-20+
              cents per point even after devaluations, so always look at the specific award before writing
              off a program.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Which Programs Offer the Best Value on Average?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Across our dataset, a few programs consistently deliver strong cents-per-point value. Bilt
              Rewards (1.8-2.2 cents) is the newest entrant but immediately competitive &mdash; premium
              transfer partners like Qatar, Aeroplan, and World of Hyatt deliver outsized value. Chase
              Ultimate Rewards (1.5-2.05 cents) is consistently strong, particularly through transfer
              partners, and sits in the mid-range for premium transferable currencies.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              American AAdvantage (1.3-1.4 cents) fares better through premium cabin transfers &mdash;
              Qatar, JAL, and Cathay can reach 5+ cents &mdash; but struggles on domestic economy. Hilton
              Honors (0.4-0.55 cents) shows the lowest valuation on this list; Hilton points are most
              valuable at luxury properties or when targeting specific chain stays, not leisure travel.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Use This Tool Alongside Other Analysis
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This calculator answers one question: is this specific redemption valuable compared to the
              program&apos;s baseline? It does not answer broader strategy questions like which credit card
              to get or whether to transfer to a partner versus book through the portal. For that, pair
              this tool with our{' '}
              <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600">
                Annual Fee Calculator
              </Link>{' '}
              to weigh whether a premium card&apos;s annual fee is justified by your expected spend and
              redemption value, analyst reports from The Points Guy and NerdWallet for monthly valuation
              updates, and award search tools like Google Flights or hotel brand sites to see what is
              actually available before committing your points.
            </p>
            <p className="text-sm text-text-secondary italic">
              Valuations and benchmarks are current as of July 2026. Points and miles programs change
              frequently. Always verify current award availability and valuation trends before making
              major redemptions.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <PointsValueCalculatorClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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
            Want to check whether a card&apos;s annual fee is worth it?{' '}
            <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use the Annual Fee Calculator &rarr;
            </Link>
          </p>
        </div>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </div>
    </>
  );
}
