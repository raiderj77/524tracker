import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: '524Tracker terms of service — usage terms, disclaimers, and affiliate disclosures.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://524tracker.com/terms' },
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Terms of Service</h1>
      <p className="text-xs text-text-secondary mb-8">Effective Date: March 1, 2026</p>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Acceptance of Terms</h2>
          <p>By accessing and using 524Tracker (524tracker.com), you agree to these Terms of Service. If you do not agree, do not use the site.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Service Description</h2>
          <p>524Tracker provides a free, browser-based tool that helps users track credit card applications and understand bank-specific application rules. The tool stores all data locally in your browser using localStorage. No account is required.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Not Financial Advice</h2>
          <p>524Tracker is an informational tool only. Nothing on this site constitutes financial advice, credit counseling, or a recommendation to apply for or avoid any credit card. We do not guarantee that any bank rule documented on this site is current or accurate. Bank rules change frequently and without notice. Always verify rules directly with the card issuer before making application decisions.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">No Guarantee of Approval</h2>
          <p>Meeting a bank&apos;s stated application rules does not guarantee approval. Credit card approval decisions involve many factors including credit score, income, existing debt, account history, and other criteria that are beyond the scope of this tool.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Affiliate Disclosure</h2>
          <p>524Tracker may earn a commission when you apply for and are approved for a credit card through affiliate links on this site. This compensation does not influence our editorial content, tool calculations, or rule documentation. Affiliate relationships do not affect how we present bank rules or recommend cards.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Data and Privacy</h2>
          <p>All credit card application data you enter into the tracker is stored exclusively in your browser&apos;s localStorage. We do not collect, store, or transmit this data. See our <a href="/privacy" className="text-brand-gold hover:text-amber-600">Privacy Policy</a> for complete details on data handling.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Accuracy of Information</h2>
          <p>We make reasonable efforts to keep bank rules and card information up to date. However, we cannot guarantee the accuracy, completeness, or timeliness of any information on this site. Bank policies can change at any time without notice. Use this tool as a reference, not as the sole basis for financial decisions.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Limitation of Liability</h2>
          <p>524Tracker is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of this site, including but not limited to credit card application denials, credit score impacts, lost data, or financial losses.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Intellectual Property</h2>
          <p>All content, design, and code on 524Tracker is the property of 524Tracker. You may not copy, modify, or distribute our content without permission. Bank names, card names, and logos are trademarks of their respective owners.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Contact</h2>
          <p>For questions about these terms: <a href="mailto:legal@524tracker.com" className="text-brand-gold hover:text-amber-600">legal@524tracker.com</a></p>
        </section>
      </div>
    </article>
  );
}
