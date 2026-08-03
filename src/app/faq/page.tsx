import Link from 'next/link';
import AuthorAttribution from '@/components/AuthorAttribution';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Credit Card Tracker FAQ',
  description:
    'Clear answers about the unofficial Chase 5/24 practice, browser-local storage, credit reports, inquiries, and the limits of date-based estimates.',
  path: '/faq',
});

const faqs = [
  {
    q: 'Is 5/24 an official Chase policy?',
    a: '524Tracker found no public Chase application or cardmember page that defines a policy called 5/24 during its August 2, 2026 review. The phrase is community shorthand for an observed application pattern, not a published promise or guaranteed threshold.',
  },
  {
    q: 'Can this site tell me whether I am eligible for a card?',
    a: 'No. 524Tracker counts dates you enter and compares them with an unofficial reference window. It does not access your credit report, income, issuer history, product terms, or an issuer’s underwriting system.',
  },
  {
    q: 'Does checking my dates here create a credit inquiry?',
    a: 'No. The site does not contact a credit bureau or issuer. The CFPB explains that a real application can create a hard inquiry, while requesting your own credit reports does not hurt your credit score.',
  },
  {
    q: 'Where can I check account-opening dates?',
    a: 'The FTC identifies AnnualCreditReport.com as the authorized service for free credit reports. Review all three reports because the details shown can differ by bureau.',
  },
  {
    q: 'Should an authorized-user account be included?',
    a: 'It may appear on your personal report, but the site cannot know how Chase will treat that account. Use the tracker’s authorized-user control to compare both possible reference counts.',
  },
  {
    q: 'Should a business card be included?',
    a: 'Do not rely on a blanket assumption. Reporting varies by issuer and product. Mark whether the specific account appears on your personal credit report.',
  },
  {
    q: 'Is the 24-month reference date exact?',
    a: 'It is exact only for the calculator’s stated method: 24 calendar months after the account date you enter. It is not a claim about Chase’s internal timing or the date an application will be approved.',
  },
  {
    q: 'What happens to information I enter?',
    a: 'Tool entries are saved in localStorage in this browser. The site does not intentionally transmit those entries to its servers. Ordinary hosting systems still receive request data such as IP address, browser details, timestamps, and requested URLs.',
  },
  {
    q: 'Are there credit-card affiliate application links?',
    a: 'Maintained pages currently link directly to official or public informational sources and do not present compensated credit-card application buttons. Any future compensated link must be labeled before the link.',
  },
  {
    q: 'How do I report a correction?',
    a: 'Use the contact page and include the page URL, disputed statement, and a current primary source. 524Tracker does not promise a fixed response or publication time.',
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mb-2 text-xs text-text-secondary">Reviewed August 2, 2026</p>
      <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy sm:text-4xl">524Tracker FAQ</h1>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-text-primary">
        These answers focus on what the tools can verify, what only an issuer can decide, and how
        to check the primary information you control.
      </p>

      <div className="space-y-5">
        {faqs.map((faq) => (
          <section key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <h2 className="mb-3 font-display text-lg font-bold text-brand-navy">{faq.q}</h2>
            <p className="text-sm leading-relaxed text-text-primary">{faq.a}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/#tracker" className="inline-flex min-h-11 items-center rounded-lg bg-brand-gold px-5 py-2.5 font-semibold text-brand-navy">
          Open the tracker
        </Link>
        <Link href="/editorial-policy" className="inline-flex min-h-11 items-center rounded-lg border border-brand-navy px-5 py-2.5 font-semibold text-brand-navy">
          Read the evidence policy
        </Link>
      </div>
      <AuthorAttribution />
      <FinancialDisclaimer />
    </article>
  );
}
