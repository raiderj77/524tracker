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
  { q: "How does a general 5/24 count work?", a: "Start with a list of recently opened personal credit-card accounts across issuers and the opening dates shown in your records. Compare those dates with a rolling 24-month reference window, including relevant accounts that have since closed. Do not count each statement, replacement card, or credit inquiry as another opening. Community reports describe five or more openings as a meaningful threshold for some Chase applications, but that is not a published underwriting formula. An uncertain authorized-user entry or business-account reporting detail should remain a documented uncertainty rather than being quietly omitted." },
  { q: "Why are business cards discussed differently from personal cards?", a: "The discussion often concerns what appears on a personal credit report, rather than whether the account exists. Business-card reporting practices can vary by issuer and product, and a business application can involve a personal credit inquiry without the resulting account appearing as a personal tradeline. The issuer may also hold its own records of that relationship. Keep reporting status, account ownership, and application history separate. A blanket claim that business cards never matter would erase these distinctions. Verify current product terms and inspect your own reports instead of copying another cardholder\u2019s assumption." },
  { q: "What is the difference between a hard inquiry and an account opening?", a: "A hard inquiry records a lender\u2019s access to a credit report in connection with a credit request. An account opening records a new credit relationship. They may occur around the same time, but they are not a one-to-one ledger: an application may produce an inquiry without a new account, and the reported dates can differ. Count account entries for an account-based reference, and keep inquiries in a separate history. If a report shows an unfamiliar inquiry or account, investigate the specific entry rather than adding it to both lists automatically." },
  { q: "Why can published issuer terms differ from community rules?", a: "Published terms describe the particular product, offer, or agreement, while community shorthand summarizes outcomes people say they experienced. Those reports may omit income, existing accounts, the exact offer, or other facts that influenced a decision. People also report experiences from different periods and channels. A pattern can be a useful question to research without being an enforceable promise. Read the current terms presented by the issuer and distinguish welcome-offer restrictions from account approval. A community summary does not replace either set of conditions, even when its numerical label is familiar." },
  { q: "How long should I keep my own card records?", a: "A rolling count needs the opening history relevant to its window, but other questions may reach further back. Prior welcome offers, product changes, closure dates, and disputed transactions can require older documents. There is no single retention period this site can establish for every household or agreement. Keep an organized history while it serves a purpose, retain the offer materials needed to understand outstanding conditions, and store sensitive documents securely. Record when you last reconciled the tracker. Deleting browser storage should not be the only event that determines whether useful supporting records survive." },
  { q: "What can these tools determine from my entries?", a: "They can perform the stated arithmetic, arrange dates, and show reference counts from information you supply. They cannot authenticate the entries, retrieve your complete credit history, confirm qualifying purchases, decide a welcome-offer dispute, or assess an application as an issuer would. A precise display can still rest on an estimated date or incomplete list. When a result changes after a correction, that demonstrates the dependence on inputs rather than a change in issuer policy. Use the output as an organized question for further verification, not a decision about your personal credit options." },
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
