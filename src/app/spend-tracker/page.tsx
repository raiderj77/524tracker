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
  { question: "How should I handle a refund after updating progress?", answer: "Reconcile the refund against the purchases included in your total. If a returned purchase no longer qualifies under the offer terms, reduce the entered progress rather than leaving the original amount in place. Ask the issuer how a later return affects an award already issued; the worksheet does not model reward reversals." },
  { question: "Is daily pace a spending recommendation?", answer: "No. It is a division result based on your entries and the calendar days remaining. It does not account for your budget, interest, processing delays, or future returns. A rising pace can help reveal a mismatch between the target and planned purchases, but it does not justify additional spending." },
  { question: "Should I use the statement balance as my progress total?", answer: "Not without reconciling it. A statement balance can include fees, interest, prior balances, and credits, and it may omit purchases that posted after the closing date. Use the offer definition of qualifying purchases and compare your records with the issuer\u2019s own progress information when available." },
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

        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Worked example: a hypothetical offer</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Imagine an entirely hypothetical offer requiring $3,000 in qualifying purchases by a specified deadline. These numbers illustrate arithmetic only; they do not describe an available card offer. After checking the offer materials, a cardholder enters $1,800 of qualifying posted purchases and a deadline that leaves 30 calendar days in the worksheet. The remaining amount is $3,000 minus $1,800, or $1,200. Dividing $1,200 by 30 gives an average pace of $40 per day.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Now suppose a $150 purchase included in that total is returned. Assuming the offer terms subtract that return, progress becomes $1,650 and the remaining amount becomes $1,350. With the same 30 days remaining, the arithmetic pace becomes $45 per day. The worksheet needs a corrected entry to reflect the return; it does not discover the refund from a bank account.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">If a separate $200 purchase is still pending, keep it separate while reconciling the total. A pending authorization is not confirmation that a qualifying purchase has posted within the required period. The example also assumes the deadline was copied correctly. Neither the spending target nor the time window should be reconstructed from a general description of a different offer.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Common tracking mistakes</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Returns and other credits can make a purchase total look stronger than the offer progress actually is. Track the net qualifying amount rather than adding every charge and forgetting later adjustments. Offer terms vary: check how refunds, disputed purchases, credits, and canceled orders affect the requirement. A reward appearing in an account does not answer every question about a subsequent return.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Pending and posted transactions serve different purposes in your records. A pending amount can change, disappear, or settle later. Likewise, the day an order is placed may differ from the day a merchant processes it. Keep an anticipated purchase out of confirmed progress until its treatment is established under the offer. A shipping delay near the deadline can therefore matter even when the order confirmation arrived earlier.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Do not assume the annual fee counts toward the purchase requirement unless the offer terms say so. Interest, balance transfers, cash advances, and other account activity also need separate review under the qualifying-purchase definition. Paying a card bill changes the balance owed; it does not create another qualifying purchase. Keep payment records separate from the purchase total to avoid counting the same activity twice.</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Reading the output without overreading it</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">The remaining amount answers a narrow question: how far is the progress entered below the target entered? A zero means those two numbers have met or crossed, with the display floored at zero. It is not confirmation that a bonus has been earned. A mistaken target, an excluded purchase, or an incorrect deadline can produce reassuring arithmetic from incorrect inputs.</p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">Daily pace spreads the remaining amount evenly across calendar days. Real household spending rarely follows that pattern, and posting does not follow a guaranteed daily schedule. Compare the figure with purchases already planned in your budget. The worksheet cannot evaluate affordability, determine purchase qualification, predict a reward posting date, or settle a disagreement with an issuer. Keep the original terms and a dated reconciliation alongside the arithmetic.</p>
        </section>

        <AuthorAttribution />
        <FinancialDisclaimer />
      </article>
    </>
  );
}
