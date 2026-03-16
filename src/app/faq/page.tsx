import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Credit Card Churning FAQ — 20 Questions Answered',
  description:
    'Answers to the 20 most common credit card churning questions: Chase 5/24, authorized users, business cards, application order, and more.',
  keywords:
    'credit card churning faq, chase 5/24 questions, does authorized user count 5/24, is churning legal, credit card application questions',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/faq' },
  openGraph: {
    title: 'Credit Card Churning FAQ — 20 Questions Answered',
    description: '20 most common credit card churning questions answered clearly and concisely.',
    url: 'https://524tracker.com/faq',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Does being an authorized user count toward Chase 5/24?',
    a: 'Yes, authorized user accounts generally count toward your Chase 5/24 total because they appear on your credit report as new accounts. However, some people have successfully had authorized user cards excluded by calling Chase\'s reconsideration line at 1-888-270-2127 and explaining they were added as an authorized user rather than the primary cardholder.',
  },
  {
    q: 'How do I check my Chase 5/24 status without applying?',
    a: 'Pull your free credit report from annualcreditreport.com and count every new account opened in the past 24 months. Include personal credit cards, store cards, and authorized user accounts from all banks. You can also use our free 5/24 tracker tool which calculates your count automatically based on the applications you enter.',
  },
  {
    q: 'Do business credit cards count toward 5/24?',
    a: 'Most business credit cards do NOT count toward Chase 5/24, including Chase Ink cards, Amex Business cards, and Citi Business cards. The major exception is Capital One — their business cards DO appear on personal credit reports and count toward 5/24. This makes business cards an excellent strategy for earning bonuses while staying under 5/24.',
  },
  {
    q: 'What is credit card churning?',
    a: 'Credit card churning is the practice of applying for credit cards primarily to earn their welcome bonuses, then repeating the process with new cards. A welcome bonus typically requires spending a specific amount (e.g., $4,000) within a time period (e.g., 3 months) to earn a large one-time point or cashback reward. Experienced churners can earn thousands of dollars in travel rewards per year.',
  },
  {
    q: 'Is credit card churning legal?',
    a: 'Yes, credit card churning is completely legal. Banks design welcome bonuses to attract new customers, and there is no law against applying for multiple credit cards. However, banks may close your accounts or restrict future applications if they determine you are not using cards as a genuine customer. Always pay your balance in full to avoid interest charges.',
  },
  {
    q: 'What happens if I apply for too many credit cards?',
    a: 'Applying for many cards in a short period can temporarily lower your credit score by 5-10 points per hard inquiry, trigger bank-specific velocity rules (like Chase 5/24 or Citi 8/65), and potentially lead to denials. However, your credit score typically recovers within 3-6 months, and responsible use of multiple cards can actually improve your score long-term by increasing your total available credit.',
  },
  {
    q: 'How long does a hard inquiry affect my credit score?',
    a: 'A hard inquiry stays on your credit report for 2 years but only impacts your credit score for approximately 12 months. The impact is typically 5-10 points per inquiry and diminishes over time. Multiple inquiries for the same type of credit within a 14-45 day window may be combined into a single inquiry for scoring purposes (this applies primarily to mortgages and auto loans, not credit cards).',
  },
  {
    q: 'What is the best order to apply for credit cards?',
    a: 'Start with Chase cards while under 5/24, since Chase counts cards from all banks. Mix in business cards between personal applications since most don\'t count toward 5/24. After maximizing Chase, move to Amex (remember the lifetime bonus rule), then Citi, Bank of America, and others. Save Discover, US Bank, and Barclays for last since they have simpler restrictions.',
  },
  {
    q: 'Can I have multiple Chase Sapphire cards?',
    a: 'No, Chase enforces a "one Sapphire" rule — you cannot hold more than one Sapphire card (Preferred or Reserve) at a time, and you cannot receive a Sapphire welcome bonus if you\'ve received one within the past 48 months. You must close or product change your existing Sapphire card and wait 48 months from your last Sapphire bonus before applying again.',
  },
  {
    q: 'What is a welcome bonus and how do I qualify?',
    a: 'A welcome bonus (or sign-up bonus) is a one-time reward offered by credit card issuers to attract new customers. To qualify, you typically need to spend a specified minimum amount within a set timeframe after account opening. For example, "earn 60,000 points after spending $4,000 in the first 3 months." The spending requirement starts from the date your account opens, not when you receive the card.',
  },
  {
    q: 'Does closing a credit card hurt my credit score?',
    a: 'Closing a credit card can impact your credit score in two ways: it reduces your total available credit (increasing your utilization ratio) and eventually removes the account from your credit history. However, closed accounts in good standing remain on your credit report for up to 10 years. The impact is usually small (5-20 points) and temporary if you have other cards with available credit.',
  },
  {
    q: 'What is the Amex once-per-lifetime bonus rule?',
    a: 'American Express restricts each card\'s welcome bonus to once per lifetime. If you\'ve ever received the sign-up bonus for a specific Amex card, you cannot earn it again — even if you closed the card years ago. The terms state: "Welcome offer not available to applicants who have or have had this Card." This makes it critical to prioritize your highest-value Amex applications first.',
  },
  {
    q: 'How does the Citi 8/65 rule work?',
    a: 'The Citi 8/65 rule has two components: you can only be approved for 1 Citi card per 8 days, and no more than 2 Citi cards per 65 days. Space your Citi applications at least 8 days apart to comply. Additionally, Citi has a 24-month bonus restriction — you cannot earn the welcome bonus on a card if you received a bonus on it (or its predecessor) within the past 24 months.',
  },
  {
    q: 'What is the Bank of America 2/3/4 rule?',
    a: 'Bank of America limits you to 2 new BoA cards in 30 days, 3 new BoA cards in 12 months, and 4 new BoA cards in 24 months. These limits apply only to Bank of America cards. Having Preferred Rewards status ($20,000+ in BoA/Merrill accounts) can improve your approval odds and may allow some flexibility with these limits.',
  },
  {
    q: 'Should I keep or close credit cards after getting the bonus?',
    a: 'For no-annual-fee cards, keep them open to maintain your credit history and available credit. For cards with annual fees, evaluate whether the ongoing benefits justify the cost. Many cardholders keep premium cards for one year and then either downgrade to a no-fee version or close the card. If you plan to churn the card later, closing may be necessary to requalify.',
  },
  {
    q: 'How many credit cards is too many?',
    a: 'There is no universal maximum. The average American has 4 credit cards. Experienced churners may have 15-30+ open accounts. What matters is your ability to manage the accounts responsibly — paying all bills on time, monitoring for fraud, and tracking annual fees. Having many cards can actually help your credit score by increasing total available credit and reducing utilization ratio.',
  },
  {
    q: 'What credit score do I need for premium credit cards?',
    a: 'Premium credit cards like the Chase Sapphire Reserve, Amex Platinum, and Capital One Venture X generally require a credit score of 720 or higher (FICO). Scores of 740+ give you the best approval odds. However, credit score is just one factor — banks also consider income, existing relationship, total debt, and recent application history.',
  },
  {
    q: 'Can I apply for the same card twice?',
    a: 'Yes, but with restrictions. Chase requires 48 months between Sapphire bonuses. Amex has a lifetime rule (once per lifetime per card). Citi requires 24 months since your last bonus on the same card. Bank of America, Capital One, and others have varying policies. Always check the specific card\'s terms for bonus eligibility before reapplying.',
  },
  {
    q: 'What is a product change and does it count toward 5/24?',
    a: 'A product change (or PC) is upgrading or downgrading your existing credit card to a different card within the same bank — for example, changing a Chase Sapphire Preferred to a Freedom Flex. Product changes do NOT count toward 5/24 because they don\'t open a new account. They also typically don\'t come with a welcome bonus.',
  },
  {
    q: 'How do I maximize credit card rewards without churning?',
    a: 'Focus on 2-3 complementary cards that cover your biggest spending categories. A typical setup: a dining/grocery card (like Amex Gold), a travel card (like Chase Sapphire Preferred), and a flat-rate cashback card (like Citi Double Cash) for everything else. Pay in full every month, use the card\'s built-in benefits (purchase protection, travel insurance), and transfer points to travel partners for maximum value.',
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://524tracker.com/faq' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs text-text-secondary mb-2">Last updated: March 16, 2026</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-6">
          Credit Card Churning FAQ
        </h1>
        <p className="text-base text-text-primary mb-8 leading-relaxed">
          Answers to the 20 most common questions about credit card application rules,
          churning strategies, and bank-specific restrictions. Each answer is based on
          community data points and official bank terms as of March 2026.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <section key={i} className="border-b border-gray-100 pb-6 last:border-0">
              <h2 className="font-display font-bold text-lg text-brand-navy mb-3">
                {faq.q}
              </h2>
              <p className="text-sm text-text-primary leading-relaxed">{faq.a}</p>
            </section>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/#tracker"
            className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            Track Your Applications Free &rarr;
          </Link>
        </div>

        <p className="text-xs text-text-secondary mt-8 italic">
          This tool tracks application dates and bank rules. It cannot guarantee approval or predict your credit score impact.
        </p>
      </article>
    </>
  );
}
