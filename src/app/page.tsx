import Link from 'next/link';
import TrackerTool from '@/components/TrackerTool';
import AuthorAttribution from '@/components/AuthorAttribution';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Unofficial Chase 5/24 Date Tracker',
  description:
    'Count user-entered account dates in a rolling 24-month reference window. Browser-local, unofficial, and never an approval or eligibility decision.',
  path: '/',
});

const faqs = [
  {
    question: 'Is Chase 5/24 an official published rule?',
    answer:
      'No public Chase application or cardmember page reviewed by 524Tracker on August 2, 2026 defines a policy called 5/24. The phrase describes a community-observed application pattern and should not be treated as a guaranteed threshold.',
  },
  {
    question: 'Does this tracker tell me whether Chase will approve me?',
    answer:
      'No. It only counts dates you enter. Chase makes the decision after reviewing an application, and even a preapproval is not a final approval guarantee.',
  },
  {
    question: 'Does using 524Tracker affect my credit score?',
    answer:
      'No. The tracker does not access a credit report or submit a credit application. A real card application may create a hard inquiry, while requesting your own credit report does not hurt your score.',
  },
  {
    question: 'Where are my tracker entries stored?',
    answer:
      'Tracker entries are stored in localStorage in this browser. They are not intentionally sent to 524Tracker servers, although ordinary hosting logs still process request information such as IP address, browser details, and requested URLs.',
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://524tracker.com/#tracker',
        name: '524Tracker — Unofficial 5/24 Date Tracker',
        url: 'https://524tracker.com',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        isAccessibleForFree: true,
        description:
          'A browser-based organizer that counts user-entered account dates in a 24-month reference window. It does not determine credit eligibility or approval odds.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        dateModified: '2026-08-02',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-brand-navy py-14 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Private date organizer
          </p>
          <h1 className="mb-5 font-display text-3xl font-bold leading-tight sm:text-5xl">
            Count your rolling 24-month card history
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-200">
            Enter account dates to compare your history with the unofficial, community-observed
            Chase “5/24” practice. The result is a reference count, not an eligibility decision.
          </p>
          <a
            href="#tracker"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-gold px-7 py-3 font-bold text-brand-navy hover:bg-amber-400"
          >
            Open the tracker
          </a>
          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <li>No account</li>
            <li>Browser-local entries</li>
            <li>No credit-report access</li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
          <h2 className="mb-2 font-display text-lg font-bold">What this result means</h2>
          <p className="text-sm leading-relaxed">
            The count answers one narrow question: how many qualifying account dates you entered
            fall inside a calendar-based 24-month reference window. It does not know your credit
            file, income, issuer relationship, current offer terms, or Chase&apos;s internal decision
            criteria. Confirm account dates on your credit reports and current terms with the issuer.
          </p>
        </section>

        <TrackerTool />

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">What the tool does</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-primary">
              <li>Stores the entries you add in this browser.</li>
              <li>Uses an account-open date when supplied, otherwise the application date.</li>
              <li>Lets you mark authorized-user and business-reporting details explicitly.</li>
              <li>Shows a calendar-based 24-month reference date and allows local CSV export.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">What it cannot do</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-primary">
              <li>Check your credit report, score, income, or issuer account.</li>
              <li>Confirm how an issuer will classify a specific account.</li>
              <li>Predict approval, welcome-offer eligibility, or credit-score impact.</li>
              <li>Replace the issuer&apos;s current application terms or professional advice.</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-4 font-display text-2xl font-bold text-brand-navy">
            Primary sources to check before applying
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.chase.com/personal/credit-cards/education/basics/what-does-pre-approved-mean-for-a-credit-card"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-gold"
            >
              <strong className="block text-brand-navy">Chase: what preapproval means</strong>
              <span className="mt-1 block text-sm text-text-secondary">
                Chase explains that preapproval is not a guarantee of final approval.
              </span>
            </a>
            <a
              href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-inquiry-en-1317/"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-gold"
            >
              <strong className="block text-brand-navy">CFPB: hard and soft inquiries</strong>
              <span className="mt-1 block text-sm text-text-secondary">
                Official guidance on credit inquiries and requests for your own reports.
              </span>
            </a>
            <a
              href="https://consumer.ftc.gov/consumer-alerts/2023/10/you-now-have-permanent-access-free-weekly-credit-reports"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-gold"
            >
              <strong className="block text-brand-navy">FTC: free weekly credit reports</strong>
              <span className="mt-1 block text-sm text-text-secondary">
                The FTC points consumers to the authorized AnnualCreditReport.com service.
              </span>
            </a>
            <Link
              href="/editorial-policy"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-gold"
            >
              <strong className="block text-brand-navy">524Tracker evidence policy</strong>
              <span className="mt-1 block text-sm text-text-secondary">
                How official terms, regulator guidance, and community observations are labeled.
              </span>
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 font-display text-2xl font-bold text-brand-navy">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-brand-navy">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-primary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </div>
    </>
  );
}
