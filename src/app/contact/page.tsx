import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the 524Tracker team — report outdated rules, suggest features, or ask questions about credit card application tracking.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://524tracker.com/contact' },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-6">Contact Us</h1>

      <div className="space-y-6 text-sm text-text-primary leading-relaxed">
        <p>
          Have a question, spotted an outdated rule, or want to suggest a feature?
          We&apos;d love to hear from you.
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">General Inquiries</h2>
            <p>
              <a href="mailto:contact@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                contact@524tracker.com
              </a>
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
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">Privacy Inquiries</h2>
            <p>
              <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                privacy@524tracker.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg text-brand-navy mb-1">Legal</h2>
            <p>
              <a href="mailto:legal@524tracker.com" className="text-brand-gold hover:text-amber-600 font-medium">
                legal@524tracker.com
              </a>
            </p>
          </div>
        </div>

        <div className="bg-brand-light border border-gray-200 rounded-xl p-4 text-xs text-text-secondary">
          <strong>Note about rule updates:</strong> Bank rules change frequently.
          If you&apos;ve encountered a rule that differs from what we document,
          please email us with as much detail as possible — the bank, rule name,
          your experience, and the date. Community data points are how we keep
          this tool accurate for everyone.
        </div>
      </div>
    </article>
  );
}
