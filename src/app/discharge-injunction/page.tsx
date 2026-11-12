import Link from 'next/link';
import AnswerBlock from '@/components/AnswerBlock';
import AuthorAttribution from '@/components/AuthorAttribution';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Discharge Injunction: When a Creditor Keeps Collecting After Bankruptcy',
  description:
    'The discharge injunction under 11 U.S.C. 524 permanently bars creditors from collecting a discharged debt from you personally. What counts as a violation, what does not, and the steps to enforce it.',
  path: '/discharge-injunction',
  type: 'article',
});

const faqs = [
  {
    question: 'What is a discharge injunction?',
    answer:
      'It is the permanent injunction created by 11 U.S.C. 524(a)(2) when a bankruptcy discharge is entered. It bars any act to collect, recover, or offset a discharged debt as your personal liability, and unlike the automatic stay it has no expiration date.',
  },
  {
    question: 'Is a creditor violating the injunction by calling me about a discharged debt?',
    answer:
      'If the debt was discharged and the call is an attempt to collect it from you personally, that is the conduct section 524(a)(2) bars. A single call can still be a genuine mistake, for example after a debt changes hands, so document it and give written notice before assuming the worst.',
  },
  {
    question: 'Can I sue a creditor for violating the discharge injunction?',
    answer:
      'Enforcement usually happens in the bankruptcy court that issued your discharge, through a motion for contempt under section 524 and Bankruptcy Rule 9020, rather than through a new lawsuit somewhere else. If the case is closed, it can generally be reopened for this purpose under section 350(b) and Rule 5010.',
  },
  {
    question: 'What can a court do about a discharge injunction violation?',
    answer:
      'Under the standard the Supreme Court set in Taggart v. Lorenzen in 2019, civil contempt is available where there is no fair ground of doubt that the discharge order barred the creditor\u2019s conduct. Courts can order the conduct stopped and can award actual damages and attorney\u2019s fees as sanctions, but no outcome is automatic.',
  },
  {
    question: 'Does the discharge injunction stop a foreclosure or repossession?',
    answer:
      'Not by itself. The injunction bars collecting the debt from you personally, but a valid lien generally survives a discharge, so a secured creditor can usually still enforce its lien against the property. It cannot chase you personally for a shortfall on the discharged debt.',
  },
  {
    question: 'What if the debt was not actually discharged?',
    answer:
      'Some debts are excepted from discharge by 11 U.S.C. 523(a), such as most domestic support obligations and certain taxes, and a debt you reaffirmed under section 524(c) stays enforceable. Check your discharge order and your schedules, and have a bankruptcy attorney confirm the answer if it is not clear.',
  },
  {
    question: 'How long does the discharge injunction last?',
    answer:
      'It is permanent. It takes effect when the discharge is entered and never expires, which is the main way it differs from the automatic stay that protected you while your case was open.',
  },
];

const situationRows = [
  {
    situation: 'Calls, letters, emails, or texts demanding payment on a discharged balance',
    barred: 'Barred',
    move: 'Send written notice with a copy of the discharge order, and keep proof of mailing.',
  },
  {
    situation: 'A lawsuit filed, or continued, to collect a discharged debt',
    barred: 'Barred',
    move: 'Do not ignore it. Tell the court where the suit is pending, your bankruptcy court, and an attorney, promptly.',
  },
  {
    situation: 'Wage garnishment or a bank levy aimed at a discharged debt',
    barred: 'Barred',
    move: 'Act the same day. Keep the levy or garnishment papers; this is the fact pattern courts treat most seriously.',
  },
  {
    situation: 'A creditor offsets a discharged debt against a refund, deposit, or other money it owes you',
    barred: 'Barred',
    move: 'Section 524(a)(2) names offset expressly. Document the amounts and the dates.',
  },
  {
    situation: 'Foreclosure or repossession under a valid lien after discharge',
    barred: 'Not barred by itself',
    move: 'The lien generally survives. The creditor still cannot bill you personally for a deficiency on the discharged debt.',
  },
  {
    situation: 'Collection aimed at your co-signer instead of you',
    barred: 'Not barred',
    move: 'Section 524(e) leaves the liability of other parties untouched by your discharge.',
  },
  {
    situation: 'Collection of a debt you reaffirmed during the case',
    barred: 'Not barred',
    move: 'A reaffirmation agreement that met section 524(c) kept that debt enforceable.',
  },
  {
    situation: 'Collection of a section 523(a) debt, such as child support or certain taxes',
    barred: 'Not barred',
    move: 'Those debts were excepted from the discharge itself, so the injunction does not cover them.',
  },
];

export default function DischargeInjunctionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Discharge Injunction: When a Creditor Keeps Collecting After Bankruptcy',
        description:
          'What the discharge injunction under 11 U.S.C. 524 bars, what counts as a violation, what does not, and the steps to enforce it.',
        datePublished: '2026-11-12',
        dateModified: '2026-11-12',
        author: { '@type': 'Person', name: 'Jason Ramirez', url: 'https://524tracker.com/about' },
        publisher: { '@id': 'https://524tracker.com/#org' },
        mainEntityOfPage: 'https://524tracker.com/discharge-injunction',
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
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mb-2 text-xs text-text-secondary">Published November 12, 2026</p>
      <h1 className="mb-5 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        Discharge Injunction: When a Creditor Keeps Collecting After Bankruptcy
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-text-primary">
        When a bankruptcy discharge is entered, 11 U.S.C. 524 turns that discharge into a permanent
        injunction: no creditor may take any act to collect a discharged debt from you personally.
        Calls, bills, lawsuits, garnishments, and setoffs aimed at a discharged balance are exactly
        what the statute bars. If a creditor is still collecting after your discharge, the problem
        is usually not whether the protection exists. It is confirming the debt was discharged,
        building a paper record, and knowing which step comes next.
      </p>

      <AnswerBlock
        what="A permanent federal injunction under 11 U.S.C. 524(a)(2). The moment a discharge is entered, any act to collect, recover, or offset a discharged debt as your personal liability is barred, and any judgment on that debt is void under 524(a)(1)."
        who="Anyone whose bankruptcy case ended in a discharge and who is still getting collection calls, bills, lawsuits, or garnishments on a debt the case covered."
        bottomLine="Confirm the debt was discharged, put the creditor on written notice with a copy of the discharge order, and save everything. If collection continues after notice, enforcement runs through the bankruptcy court that issued your discharge, usually as a motion for contempt."
        lastUpdated="2026-11-12"
      />

      <div className="mb-10 text-center">
        <a
          href="#what-to-do"
          className="inline-flex min-h-11 items-center rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy"
        >
          Skip to the step-by-step response
        </a>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What the discharge injunction is, and what it is not</h2>
          <p className="text-sm leading-relaxed text-text-primary">
            Section 524(a) of the Bankruptcy Code does two things at the moment a discharge is
            entered. First, under 524(a)(1), it voids any judgment, whenever obtained, to the extent
            that judgment determined your personal liability on a discharged debt. Second, under
            524(a)(2), the discharge operates as an injunction against starting or continuing an
            action, using court process, or doing any act to collect, recover, or offset a discharged
            debt as your personal liability. The bankruptcy court clerk sends the discharge order to
            the creditors listed in the case, and that order itself warns that continued collection
            can be treated as contempt of court.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            It is not a few other things people often assume. It is not the automatic stay: the stay
            under section 362 is the temporary shield that runs while a case is open, and the
            discharge injunction is the permanent one that replaces it for discharged debts. It does
            not erase liens, because a discharge removes personal liability, not a secured
            creditor&rsquo;s rights in the collateral itself. It does not protect your co-signer,
            because section 524(e) says a discharge does not affect the liability of any other
            entity. And it does not make repayment illegal on your side: section 524(f) expressly
            leaves you free to repay a discharged debt voluntarily if you choose to.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">How this page was checked</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-primary">
            <li>
              <strong>Statute first:</strong> every statement about what section 524 does was checked
              against the text of 11 U.S.C. 524 itself, published by the Legal Information Institute
              at Cornell Law School and linked in the sources below.
            </li>
            <li>
              <strong>Contempt standard:</strong> the test for sanctions is stated the way the
              Supreme Court stated it in Taggart v. Lorenzen, 587 U.S. 554 (2019): civil contempt
              fits where there is no fair ground of doubt that the order barred the conduct.
            </li>
            <li>
              <strong>Procedure:</strong> reopening a closed case is described under 11 U.S.C. 350(b)
              and Bankruptcy Rule 5010, and contempt procedure under Rule 9020.
            </li>
            <li>
              <strong>No borrowed numbers:</strong> this page claims no statistics about how often
              violations happen and no outcomes from anyone&rsquo;s real case. The one worked example
              below is labeled hypothetical, because it is.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What counts as a violation</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">
            A violation is any act to collect a discharged debt as your personal liability, done
            after the discharge. The common forms are easy to recognize:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-primary">
            <li>Phone calls, letters, emails, or texts demanding payment on a discharged balance.</li>
            <li>Filing a new lawsuit on a discharged debt, or refusing to dismiss one already pending.</li>
            <li>Starting or continuing a wage garnishment, bank levy, or other court process on the debt.</li>
            <li>Keeping money the creditor owes you, such as a refund or deposit, and applying it to a discharged balance. Section 524(a)(2) names offset as one of the barred acts.</li>
            <li>Demanding a deficiency balance after repossessing or foreclosing on collateral for a discharged loan.</li>
            <li>Threatening any of the above to pressure you into paying a discharged debt.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            One related problem sits in a grayer area. A discharged account should not keep reporting
            a live balance you supposedly owe, and inaccurate reporting after discharge is commonly
            challenged as an accuracy problem under the Fair Credit Reporting Act. Whether bad
            reporting by itself also violates section 524 is a question courts have answered
            differently, so treat the credit-report route and the injunction route as two separate
            tools, and dispute the report either way.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Situation by situation: is it barred?</h2>
          <div role="region" aria-label="Discharge injunction situations table" tabIndex={0} className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="py-2 pr-4 font-semibold text-brand-navy">Situation</th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-brand-navy">Barred by the injunction?</th>
                  <th scope="col" className="py-2 font-semibold text-brand-navy">First move</th>
                </tr>
              </thead>
              <tbody>
                {situationRows.map((row) => (
                  <tr key={row.situation} className="border-b border-gray-200 align-top">
                    <td className="py-2 pr-4 font-medium">{row.situation}</td>
                    <td className="py-2 pr-4">{row.barred}</td>
                    <td className="py-2">{row.move}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.law.cornell.edu/uscode/text/11/524"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy"
            >
              Read the statute text yourself
            </a>
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Not every post-discharge contact is a violation</h2>
          <p className="text-sm leading-relaxed text-text-primary">
            The honest objection to pages like this one is that some post-discharge contact is a
            mistake, and some is not collection at all. Both are true. Debts get sold, servicers
            change, and records go stale, so a first call may come from a collector who never got the
            discharge notice. Secured creditors can send certain statements and can enforce their
            liens. Creditors can collect debts that were excepted from discharge or reaffirmed. That
            is also why the legal test is framed the way Taggart framed it: contempt sanctions fit
            where there is no fair ground of doubt that the conduct was barred, which is a standard
            that separates a clerical error fixed on notice from a creditor who keeps going after
            being told. Your written notice is what moves a situation from the first category toward
            the second.
          </p>
        </section>

        <section id="what-to-do" className="scroll-mt-24">
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">What to do if a creditor keeps collecting</h2>
          <ol className="list-decimal space-y-3 pl-6 text-sm leading-relaxed text-text-primary">
            <li>
              <strong>Confirm the debt was actually discharged.</strong> Find your discharge order
              and check that the debt was listed in your schedules and is not a section 523(a) debt
              or a reaffirmed one. Also confirm the case ended in a discharge, not a dismissal: a
              dismissed case gives you no injunction at all.
            </li>
            <li>
              <strong>Save everything from this point on.</strong> Keep every letter and bill, and
              log each call with the date, time, number, and what was said. Contempt cases are won
              and lost on records, and your log is the record.
            </li>
            <li>
              <strong>Put the creditor on written notice.</strong> Send a short letter by a method
              that proves delivery, such as certified mail with return receipt requested. Name the
              debt, state that it was discharged, give the case number and discharge date, enclose a
              copy of the discharge order, and demand that all collection stop. Keep the receipt.
            </li>
            <li>
              <strong>Fix the credit-report version separately.</strong> Pull your reports and check
              how the account is reported. If it shows a balance owed on a discharged account,
              dispute it with each bureau reporting it, with the discharge order attached.
            </li>
            <li>
              <strong>If it continues, go back to the bankruptcy court.</strong> Violations are
              enforced in the case that produced the discharge. If the case is closed, a motion to
              reopen under section 350(b) and Rule 5010 comes first; then a motion for contempt under
              section 524 and Rule 9020 asks the court to order the conduct stopped and to sanction
              it. Courts can award actual damages and attorney&rsquo;s fees as contempt sanctions.
            </li>
            <li>
              <strong>Do not pay to make it stop, and do not ignore a lawsuit.</strong> Paying a
              discharged debt is voluntary under section 524(f), never required. And if a creditor
              sues on a discharged debt, an unanswered suit can still produce a default judgment you
              then have to unwind, so treat court papers as urgent.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">A worked example, start to finish</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">
            This example is hypothetical and simplified; it shows the sequence, not a promise about
            any real case. Suppose a Chapter 7 discharge is entered on March 3, 2026, covering a
            credit card balance of $4,200, and the card issuer was listed in the schedules and mailed
            the discharge order by the court clerk.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">
            On April 9, a collection agency calls about that balance. The debtor logs the call, then
            on April 11 sends a certified letter naming the debt, the case number, and the discharge
            date, with a copy of the discharge order enclosed. The signed receipt comes back on April
            16. That paper trail matters: from April 16 on, there is little fair ground for doubt
            that the agency knew collection was barred.
          </p>
          <p className="text-sm leading-relaxed text-text-primary">
            If the calls stop, the episode is over and cost a postage fee. If a second and third call
            land in May anyway, the debtor&rsquo;s log, the letter, and the receipt are the exhibits
            for a motion to reopen the closed case and a motion for contempt. If instead the only
            problem had been a credit report still showing the $4,200 as owed, the same discharge
            order attached to a bureau dispute is the tool, and no court motion is needed for that
            part.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">When you need a bankruptcy attorney</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-primary">
            Some situations are realistic to handle with a letter. Others are lawyer work from the
            first day:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-primary">
            <li>You have been served with a lawsuit on a discharged debt, or a garnishment or levy has already taken money.</li>
            <li>Collection continues after your written notice and discharge copy were received.</li>
            <li>The creditor claims the debt was not discharged, for example by calling it a fraud debt or a section 523(a) debt, and the answer is not obvious from your papers.</li>
            <li>You want the court to award damages or fees, or your closed case needs to be reopened to get there.</li>
            <li>The collector is also contacting family members, your employer, or other third parties about the debt.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            If you had an attorney in the bankruptcy case, that office is the natural first call,
            because it already has your file. One practical reason these matters get attention:
            contempt sanctions can include the attorney&rsquo;s fees, so a clear violation is a case
            a bankruptcy attorney can evaluate on its merits rather than on your ability to pay up
            front. That is a reason to ask, not a guarantee of any fee arrangement.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Choosing your route</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">One contact, likely a mistake</h3>
              <p className="text-sm leading-relaxed text-text-primary">
                Best for: a single call or letter from a collector who may never have received the
                discharge notice. Not for: conduct that has already repeated. Send the written notice
                with the discharge order and keep the proof; most honest errors end here.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">Repeated contact after notice</h3>
              <p className="text-sm leading-relaxed text-text-primary">
                Best for: calls, bills, or threats that continue after your letter was received. Not
                for: a first contact. This is the contempt route in the bankruptcy court, and it is
                where an attorney earns their place.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">The contact stopped, but the credit report is wrong</h3>
              <p className="text-sm leading-relaxed text-text-primary">
                Best for: a discharged account still reporting a balance or a past-due status. Not
                for: active collection. Dispute with the bureaus under the Fair Credit Reporting Act
                and attach the discharge order.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">You are not sure the debt was discharged</h3>
              <p className="text-sm leading-relaxed text-text-primary">
                Best for: unscheduled debts, debts a creditor says fall under section 523(a), or
                anything you signed a reaffirmation agreement for. Not for: guessing. Read the
                discharge order and schedules first; if the answer is still unclear, an attorney
                consult is the step, before any letter that asserts a violation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold text-brand-navy">Sources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.law.cornell.edu/uscode/text/11/524"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                11 U.S.C. 524, Effect of discharge (Legal Information Institute)
              </a>
            </li>
            <li>
              <a
                href="https://www.wieb.uscourts.gov/frequently-asked-questions"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                U.S. Bankruptcy Court, Eastern District of Wisconsin: what a bankruptcy discharge is
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            Taggart v. Lorenzen, 587 U.S. 554 (2019), is the Supreme Court decision behind the
            contempt standard described on this page. Local bankruptcy court rules and your own
            judge&rsquo;s procedures can add steps, such as a required warning letter before a
            contempt motion, so check the rules for the district where your case was filed.
          </p>
        </section>

        <section>
          <h2 className="mb-5 font-display text-2xl font-bold text-brand-navy">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section key={faq.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-text-primary">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-2 font-display text-xl font-bold text-brand-navy">Rebuilding after the discharge</h2>
        <p className="mb-4 text-sm leading-relaxed text-text-primary">
          The injunction protects the fresh start; what you build on it is a separate project. Many
          readers of this site arrived the same way: a discharge behind them, then the slow work of
          new accounts and new history. When you do open new cards, the dates matter, because recent
          openings are what the Chase 5/24 count measures. The free tracker on this site counts your
          openings inside a rolling 24-month window, in your browser, with no account and no
          credit-report access.
        </p>
        <div className="text-center">
          <Link href="/#tracker" className="inline-flex min-h-11 items-center rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy">
            Open the free date tracker
          </Link>
        </div>
      </div>

      <AuthorAttribution />
      <p className="mt-10 mb-4 max-w-3xl mx-auto px-4 text-xs leading-relaxed text-text-secondary">
        This page is general information about a federal statute, not legal advice, and it does not
        create an attorney-client relationship. Jason Ramirez is not an attorney. Bankruptcy
        procedure varies by court and district, and the right step for a specific debt depends on
        facts a website cannot see. For advice about your own situation, consult a licensed
        bankruptcy attorney in your state.
      </p>
    </article>
  );
}
