import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About 524Tracker',
  description: 'About 524Tracker — our mission to give credit card enthusiasts free, neutral application tracking tools. Editorial policy and contact information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://524tracker.com/about' },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-6">About 524Tracker</h1>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Our Mission</h2>
          <p>Giving credit card enthusiasts the tools they deserve — free, neutral, and always up to date. Before 524Tracker, the only way to track your 5/24 count and bank rules was a spreadsheet or mental math. We built the tool we wished existed: a single dashboard that shows your eligibility across every major bank, automatically.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Who Built This</h2>
          <p>524Tracker was built by an experienced web developer passionate about personal finance optimization. Our team combines software engineering expertise with deep knowledge of credit card application strategies and bank-specific rules.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Editorial Policy</h2>
          <p className="mb-3">All bank rules documented on 524Tracker are verified against multiple sources:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Official card issuer terms and conditions</li>
            <li>Community data points from r/churning and r/CreditCards</li>
            <li>Authoritative finance publications including Doctor of Credit</li>
            <li>Direct testing and community verification</li>
          </ul>
          <p className="mt-3">We review all rules quarterly and update immediately when community data points indicate a change. Every rule page displays a &ldquo;Last verified&rdquo; date so you know how current the information is.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Affiliate Relationships</h2>
          <p>524Tracker earns revenue through credit card affiliate links and advertising. These relationships never influence how we document bank rules, calculate your 5/24 count, or present eligibility information. The tracker tool functions identically regardless of affiliate relationships.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Privacy by Design</h2>
          <p>We deliberately chose localStorage over server storage because your credit card application history is your business — not ours. Your tracker data never leaves your browser. There is no account to create, no data to breach, and no information to sell. See our <Link href="/privacy" className="text-brand-gold hover:text-amber-600">Privacy Policy</Link> for details.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Contact</h2>
          <p>General inquiries: <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600">contact@524tracker.com</a></p>
          <p>Rule corrections: <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600">contact@524tracker.com</a></p>
          <p>Privacy inquiries: <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600">privacy@524tracker.com</a></p>
        </section>
      </div>
    </article>
  );
}
