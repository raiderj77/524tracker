import type { Metadata } from 'next';
import Link from 'next/link';
import InquiryTrackerClient from '@/components/InquiryTrackerClient';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Hard Inquiry Tracker — Monitor Credit Inquiries by Bureau | 524Tracker',
  description:
    'Track hard inquiries per credit bureau and see how your inquiry count affects approval odds at inquiry-sensitive banks like Citi, US Bank, and Barclays. Free tool.',
  keywords:
    'hard inquiry tracker, credit inquiry count, experian inquiries, equifax inquiries, transunion inquiries, inquiry sensitive banks',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/inquiry-tracker' },
  openGraph: {
    title: 'Hard Inquiry Tracker — Monitor Credit Inquiries by Bureau',
    description:
      'Track hard inquiries per credit bureau and check your standing with inquiry-sensitive issuers. Free instant results, no account required.',
    url: 'https://524tracker.com/inquiry-tracker',
    type: 'website',
  },
};

const inquiryFaqs = [
  {
    question: 'How many hard inquiries is too many?',
    answer:
      'It depends on the bank. Citi becomes sensitive at 6 or more inquiries in 6 months on the bureau they pull. US Bank is sensitive at 5 or more new accounts in 12 months. Chase is generally lenient on inquiries but strict on new accounts via 5/24. Each issuer weighs inquiry counts differently, so tracking per-bureau totals helps you plan strategically.',
  },
  {
    question: 'How long do hard inquiries affect my credit score?',
    answer:
      'Hard inquiries stay on your report for 2 years but only impact your FICO score for 12 months. Each inquiry typically reduces your score by 2 to 5 points. The impact diminishes over time and multiple inquiries for the same loan type within 14 to 45 days may count as one. After 12 months, inquiries are effectively invisible to scoring models.',
  },
  {
    question: 'Can I get a hard inquiry removed from my credit report?',
    answer:
      'You can dispute unauthorized inquiries with the credit bureau. For legitimate inquiries you cannot remove them early. Some people have success calling the creditor and asking for a goodwill removal but this is not guaranteed and the inquiry still falls off after 2 years. Focus on spacing applications strategically rather than trying to remove inquiries after the fact.',
  },
];

export default function InquiryTrackerPage() {
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
                name: 'Hard Inquiry Tracker',
                description:
                  'Track hard credit inquiries per bureau and evaluate your standing with inquiry-sensitive banks like Citi, US Bank, Barclays, and Wells Fargo.',
                url: 'https://524tracker.com/inquiry-tracker',
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
                    name: 'Inquiry Tracker',
                    item: 'https://524tracker.com/inquiry-tracker',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: inquiryFaqs.map((faq) => ({
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
          <span>Inquiry Tracker</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Hard Inquiry Tracker &mdash; Monitor Your Credit Inquiry Count Per Bureau
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl">
            Log your hard inquiries by credit bureau and instantly see how your inquiry count
            affects approval odds at inquiry-sensitive banks. Tracks Experian, Equifax, and
            TransUnion separately &mdash; all data stays in your browser.
          </p>
          <p className="text-xs text-text-secondary mt-2">Last updated: March 19, 2026</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Why Track Hard Inquiries?
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Every time you apply for a credit card, the issuer pulls your credit report from one
              or more bureaus, creating a hard inquiry. Each hard inquiry can lower your credit score
              by 2 to 5 points and remains on your report for two years. While a single inquiry has
              minimal impact, multiple inquiries in a short period signal risk to lenders and can
              lead to automatic denials, especially at inquiry-sensitive banks.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Tracking your inquiries per bureau is critical because banks pull from specific bureaus
              depending on your state and the issuer. Citi most commonly pulls Experian, while
              Chase typically pulls Experian or Equifax. If you know which bureau each bank checks,
              you can strategically spread applications across bureaus to keep any single
              bureau&apos;s inquiry count low and improve your approval odds.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Beyond credit scores, certain banks have internal rules that flag applicants with too
              many recent inquiries. These rules are separate from your FICO score and can result in
              denials even if your score is excellent. By monitoring your per-bureau inquiry count
              over rolling 6-month, 12-month, and 24-month windows, you can time applications to
              avoid triggering these hidden thresholds.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Issuer Inquiry Sensitivity
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Not all banks weigh hard inquiries equally. Citi is one of the most inquiry-sensitive
              issuers: data points suggest that 6 or more inquiries on the pulled bureau within
              6 months frequently leads to automatic denials, regardless of credit score. US Bank is
              similarly conservative, becoming sensitive at 5 or more new accounts in 12 months, and
              they factor in total inquiry volume as a negative signal.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Barclays evaluates your overall credit-seeking behavior and may deny applicants with
              6 or more new accounts in 24 months. Wells Fargo applies a soft 5/24-style guideline
              and generally prefers applicants with fewer recent inquiries. On the other hand,
              Chase is relatively lenient on inquiry counts &mdash; their 5/24 rule focuses on new
              accounts rather than inquiries. American Express is generally inquiry-friendly,
              especially for existing cardholders, though a very high inquiry count can still
              trigger a manual review.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Understanding where each issuer falls on the sensitivity spectrum lets you prioritize
              applications at inquiry-sensitive banks first, when your counts are lowest, and save
              inquiry-friendly banks for later. The tracker below shows your real-time standing with
              each of these issuers based on the inquiries you have logged.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              How to Use the Inquiry Tracker
            </h2>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Enter each hard inquiry from your credit reports using the form below. You can find
              your inquiries by pulling your free annual credit reports from annualcreditreport.com
              or by checking each bureau&apos;s website directly. For each inquiry, log the date,
              the creditor or issuer that pulled your report, which bureau was pulled, and the
              result of the application.
            </p>
            <p className="text-base text-text-primary mb-4 leading-relaxed">
              Once you have entered your inquiries, the dashboard will automatically calculate your
              per-bureau totals across 6-month, 12-month, and 24-month windows. The issuer
              sensitivity panel will show your standing with each inquiry-sensitive bank so you can
              see at a glance whether it is safe to apply or if you should wait for inquiries to
              age off.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <InquiryTrackerClient />
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
              Frequently Asked Questions About Hard Inquiries
            </h2>
            <div className="space-y-6">
              {inquiryFaqs.map((faq) => (
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
            Need to check velocity rules too?{' '}
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
