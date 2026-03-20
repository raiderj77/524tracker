import type { Metadata } from 'next';
import Link from 'next/link';
import DowngradeGuideClient from '@/components/DowngradeGuideClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Card Downgrade Guide — Product Change Options | 524Tracker',
  description:
    'Find the best product change and downgrade paths for your credit card by issuer. Compare benefits lost, gained, and annual fee savings for Chase, Amex, Capital One, and Citi.',
  keywords:
    'credit card downgrade, product change, card downgrade path, PC options, product change guide, downgrade chase sapphire, downgrade amex platinum',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/downgrade-guide' },
  openGraph: {
    title: 'Credit Card Downgrade Guide — Product Change Options',
    description:
      'Find the best product change and downgrade paths for your credit card. Compare benefits, fees, and timing requirements for Chase, Amex, Capital One, and Citi.',
    url: 'https://524tracker.com/downgrade-guide',
    type: 'website',
  },
};

const downgradeFaqs = [
  {
    question: 'Should I downgrade or cancel my credit card?',
    answer:
      'Downgrading preserves your credit history length and available credit which helps your score. Cancel only if you want to reapply for the same card\'s welcome bonus later. Most issuers require you to wait 12 months after opening before allowing a product change.',
  },
  {
    question: 'Do I lose my points when I downgrade a card?',
    answer:
      'No, points and miles transfer to your new card within the same bank. Chase Ultimate Rewards, Amex Membership Rewards, and Capital One Miles all carry over during a product change. However you may lose transfer partner access if the new card doesn\'t support transfers.',
  },
  {
    question: 'How long do I have to wait before downgrading?',
    answer:
      'Most banks require you to hold a card for at least 12 months before allowing a product change. Some banks like Amex may be more flexible. Call the number on the back of your card to request a product change — it\'s usually a quick phone call.',
  },
];

export default function DowngradeGuidePage() {
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
                name: 'Credit Card Downgrade Guide',
                description:
                  'Find the best product change and downgrade paths for your credit card by issuer. Compare benefits lost, gained, and annual fee savings.',
                url: 'https://524tracker.com/downgrade-guide',
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
                    name: 'Downgrade Guide',
                    item: 'https://524tracker.com/downgrade-guide',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: downgradeFaqs.map((faq) => ({
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
          <span>Downgrade Guide</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Credit Card Downgrade Guide &mdash; Product Change Options by Issuer
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Find the best downgrade path for your credit card. Compare annual fee savings, benefits lost and gained,
            and timing requirements across Chase, Amex, Capital One, and Citi. A product change preserves your credit
            history and keeps your points intact.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Why Downgrade Instead of Cancel?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              When an annual fee hits and you are no longer getting enough value from a premium credit card, your first
              instinct might be to cancel. But closing a card removes it from your active credit profile, which can
              shorten your average account age and reduce your total available credit. Both of these factors may
              negatively affect your credit score.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              A product change &mdash; commonly called a downgrade &mdash; lets you swap your current card for a
              no-annual-fee or lower-fee card within the same bank. Your account number, credit limit, and account
              history stay the same. Your points and miles transfer automatically to the new card. You keep your
              relationship with the bank, which may matter for future applications and retention offers.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The main reason to cancel instead of downgrade is if you want to reapply for the same card&apos;s welcome
              bonus in the future. Some issuers require you to not currently hold the card product before they will
              approve a new application with a welcome bonus. In that case, canceling and waiting the required period
              before reapplying may be the better strategy.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How Product Changes Work
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              A product change is a request to your card issuer to convert your existing account from one card product
              to another. The process does not involve a hard inquiry on your credit report because you are not applying
              for new credit. Your credit limit, account number, and account opening date remain the same in most cases.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Most product changes can be completed with a quick phone call to the number on the back of your card.
              Some issuers also allow product changes through secure message or online chat. When you call, simply tell
              the representative that you would like to do a product change and specify which card you want to change
              to. The switch typically takes effect within a few business days, and you will receive a new card in the
              mail with your updated product.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              If you have a prorated annual fee refund coming, most issuers will credit the unused portion back to your
              account after the product change is processed. However, timing varies by issuer, so it is best to request
              the change shortly after your annual fee posts rather than waiting several months into your card year.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Key Timing Rules for Product Changes
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Most banks require you to hold a card for at least 12 months before allowing a product change. This
              prevents applicants from signing up for a welcome bonus and immediately downgrading to avoid the annual
              fee. Chase, Capital One, and Citi all enforce this 12-month minimum. American Express may be more
              flexible in some cases, but 12 months is still the general guideline.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The best time to request a product change is within 30 days after your annual fee posts. During this
              window, you can get a full refund of the fee after downgrading. If you wait longer, you may only receive
              a prorated refund or no refund at all depending on the issuer. Set a calendar reminder for your annual
              fee date so you do not miss the optimal downgrade window.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Some product changes can only happen in specific directions. For example, you can downgrade a Chase
              Sapphire Reserve to a Freedom Flex, but you cannot product change a Freedom Flex to a Sapphire Reserve
              &mdash; that requires a new application. The tool below shows only valid downgrade paths that each issuer
              supports.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Downgrade Guide
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Select your current credit card from the dropdown below. The tool will show you every available product
              change option for that card, including the target card&apos;s annual fee, your annual savings, which
              benefits you will lose, which benefits you will gain, whether your points transfer, and any timing
              requirements. Use this information to decide which downgrade path makes the most sense for your spending
              habits and goals.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <DowngradeGuideClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Downgrading Credit Cards
            </h2>
            <div className="space-y-6">
              {downgradeFaqs.map((faq) => (
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
            Not sure if your annual fee is worth it?{' '}
            <Link href="/annual-fee-calculator" className="text-brand-gold hover:text-amber-600 font-semibold">
              Use the Annual Fee Calculator &rarr;
            </Link>
          </p>
        </div>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
