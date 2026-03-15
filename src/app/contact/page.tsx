import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the 524Tracker team — report outdated rules, suggest features, or ask questions about credit card application tracking.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://524tracker.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'Contact Us — 524Tracker',
                description: 'Contact the 524Tracker team — report outdated rules, suggest features, or ask questions about credit card application tracking.',
                url: 'https://524tracker.com/contact',
              },
              {
                '@type': 'ContactPage',
                name: 'Contact 524Tracker',
                url: 'https://524tracker.com/contact',
                mainEntity: {
                  '@type': 'Organization',
                  name: '524Tracker',
                  email: 'contact@524tracker.com',
                  url: 'https://524tracker.com',
                },
              },
            ],
          }),
        }}
      />
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-6">Contact Us</h1>

      <div className="space-y-6 text-sm text-text-primary leading-relaxed">
        <p>
          Have a question, spotted an outdated rule, or want to suggest a feature?
          We&apos;d love to hear from you. The 524Tracker team reads every message and aims to respond within one to two business days. Whether you need help using the tracker, want to report a bank rule change, or have a partnership inquiry, you&apos;re in the right place.
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">General Inquiries</h2>
            <p className="mb-1">
              <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                contact@524tracker.com
              </a>
            </p>
            <p className="text-text-secondary text-xs">
              Questions about how the tracker works, feature requests, partnership proposals, or anything else. We typically respond within 24 to 48 hours.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">Rule Corrections</h2>
            <p className="mb-1">
              <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                contact@524tracker.com
              </a>
            </p>
            <p className="text-text-secondary text-xs">
              Spotted an outdated rule or have a data point that contradicts our documentation?
              Email us with the bank, rule, and your source. We verify and update within 48 hours.
              Community data points are the backbone of accurate rule tracking, and every report helps thousands of users make better application decisions.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">Privacy Inquiries</h2>
            <p className="mb-1">
              <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                privacy@524tracker.com
              </a>
            </p>
            <p className="text-text-secondary text-xs">
              Questions about your data, GDPR requests, CCPA opt-out, or any privacy-related concerns. We respond to all privacy inquiries within 45 days as required by law, though we aim for much faster.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">Legal</h2>
            <p className="mb-1">
              <a href="mailto:legal@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                legal@524tracker.com
              </a>
            </p>
            <p className="text-text-secondary text-xs">
              For terms of service questions, DMCA notices, or other legal matters.
            </p>
          </div>
        </div>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What We Can Help With</h2>
          <p className="mb-3">
            524Tracker is a free credit card application tracking tool that monitors your eligibility across every major bank rule. Here are the most common reasons people reach out to us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tracker questions:</strong> How to add or remove card applications, how the 5/24 countdown works, how to export or import your data, and how drop-off dates are calculated.</li>
            <li><strong>Rule clarifications:</strong> Understanding the nuances of Chase 5/24, Amex once-per-lifetime, Citi 8/65, Bank of America 2/3/4, or Capital One velocity limits. While we cannot provide personalized financial advice, we can explain how each rule works.</li>
            <li><strong>Data corrections:</strong> If a bank rule has changed and our documentation is outdated, we want to know. Include the bank name, the specific rule, what you experienced, and when it happened.</li>
            <li><strong>Feature requests:</strong> We are always looking to improve the tracker. Past community suggestions have led to features like the card value calculator, category-based recommendations, and data export functionality.</li>
            <li><strong>Bug reports:</strong> If the tracker is not calculating correctly, displaying the wrong dates, or behaving unexpectedly, let us know your browser, device, and what happened.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Explore Our Tools</h2>
          <p className="mb-3">
            Before reaching out, you may find the answer you need in one of our tools or guides:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/" className="text-brand-gold hover:text-amber-600 font-medium">5/24 Tracker</Link> — Log your card applications and see your eligibility across all major bank rules in real time.</li>
            <li><Link href="/rules-guide" className="text-brand-gold hover:text-amber-600 font-medium">Bank Rules Guide</Link> — Detailed documentation of every tracked bank rule with last-verified dates.</li>
            <li><Link href="/card-value-calculator" className="text-brand-gold hover:text-amber-600 font-medium">Card Value Calculator</Link> — Determine whether a credit card is worth keeping by comparing the annual fee against benefits you actually use.</li>
            <li><Link href="/best-cards-by-category" className="text-brand-gold hover:text-amber-600 font-medium">Best Cards by Category</Link> — Find the top cards for gas, groceries, dining, travel, and more.</li>
            <li><Link href="/faq" className="text-brand-gold hover:text-amber-600 font-medium">FAQ</Link> — Answers to the 20 most common questions about credit card application rules and the tracker tool.</li>
          </ul>
        </section>

        <div className="bg-brand-light border border-gray-200 rounded-xl p-4 text-xs text-text-secondary">
          <strong>Note about rule updates:</strong> Bank rules change frequently.
          If you&apos;ve encountered a rule that differs from what we document,
          please email us with as much detail as possible — the bank, rule name,
          your experience, and the date. Community data points are how we keep
          this tool accurate for everyone.
        </div>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Frequently Asked Questions About Contacting Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-brand-navy mb-1">How long does it take to get a response?</h3>
              <p>We aim to respond to all general inquiries within one to two business days. Rule correction reports are prioritized and typically verified within 48 hours. Privacy and legal requests are handled within the timeframes required by applicable law.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-brand-navy mb-1">Can you help me decide which credit card to apply for?</h3>
              <p>524Tracker is for informational purposes only and we cannot provide personalized financial advice. However, our tools can help you understand which banks you are eligible to apply with based on your application history, and our category guides highlight the top cards for different spending patterns.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-brand-navy mb-1">I lost my tracker data. Can you recover it?</h3>
              <p>Because all tracker data is stored locally in your browser&apos;s localStorage, we do not have access to it and cannot recover lost data. We recommend using the export feature regularly to back up your application history. If you saved a backup file previously, you can use the import feature to restore it.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-brand-navy mb-1">Do you accept advertising or sponsored content?</h3>
              <p>524Tracker displays ads through Google AdSense and earns commissions through credit card affiliate links. Advertising and affiliate relationships never influence our rule documentation, tracker calculations, or editorial recommendations. For advertising inquiries, email <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600">contact@524tracker.com</a>.</p>
            </div>
          </div>
        </section>
      </div>
    </article>
    </>
  );
}
