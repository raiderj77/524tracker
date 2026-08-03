import Link from 'next/link';
import SpendTrackerTool from '@/components/SpendTrackerTool';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import AuthorAttribution from '@/components/AuthorAttribution';
import AnswerBlock from '@/components/AnswerBlock';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Welcome-Offer Spend Worksheet',
  description:
    'Organize a user-entered spending target, current progress, and the exact deadline shown in your credit-card offer terms.',
  path: '/spend-tracker',
});

const spendTrackerFaqs = [
  {
    question: 'Does the worksheet know my offer terms?',
    answer:
      'No. It does not retrieve or verify an offer. Enter the exact spending target and deadline shown in your current offer materials, then confirm progress with the issuer.',
  },
  {
    question: 'Does meeting the entered amount guarantee a bonus?',
    answer:
      'No. Eligibility, qualifying purchases, returns, posting dates, account status, and other terms are controlled by the issuer. The worksheet only subtracts numbers and compares dates.',
  },
  {
    question: 'Where are entries kept?',
    answer:
      'During ordinary use, the tool saves entries in this browser’s local storage. Printing, copying, browser synchronization, extensions, backups, exports, and shared-device access can expose or move that information.',
  },
  {
    question: 'Should I spend more to reach a target?',
    answer:
      'The tool does not recommend spending, borrowing, or carrying a balance. Consider only purchases already in your budget and remember that interest or fees can outweigh a reward.',
  },
];

export default function SpendTrackerPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Welcome-Offer Spend Worksheet',
        description:
          'Compares user-entered spending progress with a user-entered target and deadline.',
        url: 'https://524tracker.com/spend-tracker',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        dateModified: '2026-08-02',
      },
      {
        '@type': 'FAQPage',
        mainEntity: spendTrackerFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-text-secondary" aria-label="Breadcrumb">
          <Link href="/" className="font-semibold text-brand-gold underline underline-offset-2">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>Spend worksheet</span>
        </nav>

        <header className="mb-8">
          <h1 className="mb-3 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
            Welcome-offer spend worksheet
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-text-primary">
            Enter the target and exact deadline from your own offer terms. The tool shows only the
            resulting arithmetic; it does not verify qualifying purchases, eligibility, or award
            status.
          </p>
          <p className="mt-3 text-xs text-text-secondary">Reviewed: August 2, 2026</p>
        </header>

        <AnswerBlock
          what="A browser worksheet that subtracts user-entered spending from a user-entered target and compares the result with a user-entered deadline."
          who="Cardholders organizing an offer they have already received and whose current terms they can verify."
          bottomLine="Use the issuer’s exact deadline and confirm qualifying spend with the issuer; this worksheet cannot determine whether a reward will be awarded."
          lastUpdated="2026-08-02"
        />

        <SpendTrackerTool />

        <section className="mt-16 space-y-10">
          <div>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">
              How the worksheet calculates progress
            </h2>
            <p className="text-sm leading-relaxed text-text-primary">
              Remaining amount equals the target you enter minus the progress you enter, never less
              than zero. Days remaining are based on the exact deadline you enter. The daily pace is
              remaining amount divided by remaining calendar days. Those calculations do not identify
              which transactions qualify or when a pending transaction posts.
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <h2 className="mb-3 font-display text-2xl font-bold">Verify the controlling terms</h2>
            <p className="text-sm leading-relaxed">
              Use the offer disclosure and secure issuer account as the controlling sources. Check
              the required amount, deadline, eligible-purchase definition, return treatment, annual
              fee, interest rate, and account-status conditions. Do not enter account numbers,
              credentials, or transaction details here.
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-display text-2xl font-bold text-brand-navy">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {spendTrackerFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-primary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </article>
    </>
  );
}
