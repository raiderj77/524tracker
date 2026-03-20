import type { Metadata } from 'next';
import Link from 'next/link';
import AmexPopupClient from '@/components/AmexPopupClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Amex Popup Jail Risk Estimator | 524Tracker',
  description:
    'Estimate your risk of getting the Amex popup before applying for an American Express card. Check if you may lose the welcome bonus due to popup jail.',
  keywords:
    'amex popup jail, amex popup, american express popup, amex welcome bonus popup, amex popup jail escape',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/amex-popup-estimator' },
  openGraph: {
    title: 'Amex Popup Jail Risk Estimator',
    description:
      'Estimate your risk of getting the Amex popup before applying for an American Express card. Free tool — no account required.',
    url: 'https://524tracker.com/amex-popup-estimator',
    type: 'website',
  },
};

const popupFaqs = [
  {
    question: 'What is Amex popup jail?',
    answer:
      'When you apply for an Amex card, a popup may appear saying you won\'t receive the welcome bonus even if approved. This is called popup jail. Amex targets applicants they consider bonus abusers — people who open cards for bonuses and then stop using them.',
  },
  {
    question: 'How do I escape Amex popup jail?',
    answer:
      'Increase spending on existing Amex cards to $500+ per month for 6-12 months. Don\'t close any Amex cards. Avoid opening new Amex cards during this period. Some people report success after 6 months of consistent high spend on their existing cards.',
  },
  {
    question: 'Can I still get approved if I see the Amex popup?',
    answer:
      'Yes, you can continue the application and may be approved for the card. However you will NOT receive the welcome bonus. Most churners recommend declining and trying again after improving your profile rather than wasting a card slot without the bonus.',
  },
];

export default function AmexPopupEstimatorPage() {
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
                name: 'Amex Popup Jail Risk Estimator',
                description:
                  'Estimate your risk of seeing the American Express popup that prevents you from receiving a welcome bonus. Analyzes spending patterns, card history, and application behavior.',
                url: 'https://524tracker.com/amex-popup-estimator',
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
                    name: 'Amex Popup Estimator',
                    item: 'https://524tracker.com/amex-popup-estimator',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: popupFaqs.map((faq) => ({
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
          <span>Amex Popup Estimator</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Amex Popup Jail Risk Estimator
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            The Amex popup can block your welcome bonus before you even finish applying. This free tool
            estimates your risk level based on spending habits, card history, and application patterns so you
            can decide whether to apply now or wait.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              What Is the Amex Popup?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The Amex popup is a message that appears during the American Express credit card application
              process warning you that you will not be eligible for the welcome bonus if you proceed. The
              popup typically states that &quot;based on your history with American Express welcome
              offers,&quot; you are ineligible for the introductory bonus on the card you are applying for.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              This popup appears after you enter your personal information but before you submit the full
              application. If you see it, you can choose to continue with the application and potentially be
              approved for the card without the bonus, or you can back out and try again later. The popup is
              not a denial &mdash; it only affects your welcome bonus eligibility.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              American Express introduced the popup around 2018 as a way to combat what they consider bonus
              abuse. It has since become one of the most discussed topics in the credit card rewards
              community, often referred to as &quot;popup jail&quot; because applicants can feel trapped with
              no clear way to escape the restriction.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Why Amex Targets Certain Applicants
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              American Express uses internal algorithms to identify applicants who they believe are primarily
              interested in welcome bonuses rather than long-term card usage. Several behavioral patterns are
              known to increase your chances of triggering the popup.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              <strong>Low spending on existing Amex cards</strong> is the most commonly reported factor.
              If you have Amex cards sitting in a drawer unused, or if you only put minimal charges on them,
              Amex may view you as someone who opens cards for the bonus and then stops using them. Similarly,
              <strong> opening and closing Amex cards quickly</strong> &mdash; especially within the first
              year &mdash; signals to Amex that you are not a profitable long-term customer.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Another red flag is <strong>returning purchases after meeting minimum spend
              requirements</strong>. If you hit a spending threshold to earn a bonus and then return those
              items, Amex may flag your account for manufactured spending behavior. Applying for multiple
              Amex cards in a short timeframe can also increase your risk, as it suggests you are primarily
              chasing welcome bonuses rather than genuinely needing the card products.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Escape Popup Jail
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              The most effective strategy for escaping Amex popup jail is to demonstrate genuine, sustained
              spending on your existing American Express cards. Community data points suggest spending $500 or
              more per month on each of your Amex cards for at least 6 to 12 months can significantly improve
              your chances of clearing the popup restriction.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              During this rehabilitation period, avoid closing any Amex cards and do not apply for new ones.
              Put recurring bills, everyday purchases, and other organic spending on your Amex cards to show
              Amex that you are an engaged and profitable customer. Some cardholders also report success by
              using Amex Offers and shopping through the Amex portal to demonstrate active engagement with the
              ecosystem.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              There is no guaranteed timeline for escaping popup jail. Some people clear it after 6 months of
              heavy spend, while others report waiting 12 months or longer. The key is consistency &mdash; Amex
              appears to evaluate your overall relationship with them rather than any single metric.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Popup Risk Estimator
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Enter your current Amex card information and spending habits into the form below. The tool
              analyzes factors that are commonly associated with the popup &mdash; including card opening and
              closing patterns, average monthly spend, time since your last application, and whether you have
              engaged in behaviors known to trigger the popup. After you submit, you will receive a risk
              score with a detailed breakdown of each contributing factor and personalized recommendations for
              reducing your risk.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <AmexPopupClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About the Amex Popup
            </h2>
            <div className="space-y-6">
              {popupFaqs.map((faq) => (
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
