import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: '524Tracker terms of service - usage terms, disclaimers, and affiliate disclosures.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms of Service — 524Tracker',
            description: '524Tracker terms of service — usage terms, disclaimers, and affiliate disclosures.',
            url: 'https://524tracker.com/terms',
          }),
        }}
      />
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Terms of Service</h1>
      <p className="text-xs text-text-secondary mb-8">Effective March 1, 2026 | Last updated August 2, 2026</p>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Acceptance of These Terms Works</h2>
          <p>By accessing and using 524Tracker (524tracker.com), you agree to these Terms of Service. If you do not agree, do not use the site.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Service 524Tracker Provides</h2>
          <p>524Tracker provides free browser-based organizers and calculators. Its 5/24 output compares dates with an unofficial community-observed practice; it is not an issuer policy, eligibility check, underwriting model, or approval prediction. No account is required.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Why This Is Not Financial Advice</h2>
          <p>524Tracker is an informational tool only. Nothing on this site constitutes financial advice, credit counseling, or a recommendation to apply for or avoid any credit card. We do not guarantee that any bank rule documented on this site is current or accurate. Bank rules change frequently and without notice. Always verify rules directly with the card issuer before making application decisions.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Why Approval Is Not Guaranteed</h2>
          <p>No date count or community pattern guarantees approval. Credit-card decisions can involve credit history, income, debt, issuer relationships, product terms, and other criteria outside this site.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Our Affiliate Relationships Work</h2>
          <p>Maintained pages currently do not present compensated credit-card application buttons. If a compensated link is added later, it will be labeled before the link and disclosed in the editorial policy. Direct links to issuer or government sources are not described as affiliate links.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Your Data and Privacy Are Handled</h2>
          <p>Tool entries are stored in your browser&apos;s localStorage and are not intentionally transmitted to 524Tracker servers. Ordinary hosting logs still process request information, and outputs you choose to print, export, copy, or share are handled by your browser or selected destination. See our <a href="/privacy" className="text-brand-gold hover:text-amber-600">Privacy Policy</a> for details.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How We Handle Information Accuracy</h2>
          <p>We distinguish official terms, government guidance, community observations, and user-input calculations. Information can still be incomplete or stale. Review the exact offer and issuer terms and use this site only as a secondary reference.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Our Liability Limitations Cover</h2>
          <p>524Tracker is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of this site, including but not limited to credit card application denials, credit score impacts, lost data, or financial losses.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Intellectual Property Rights Apply</h2>
          <p>All content, design, and code on 524Tracker is the property of 524Tracker. You may not copy, modify, or distribute our content without permission. Bank names, card names, and logos are trademarks of their respective owners.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How and When We Update These Terms</h2>
          <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How to Contact Us About These Terms</h2>
          <p>For questions about these terms: <a href="mailto:legal@524tracker.com" className="text-brand-gold hover:text-amber-600">legal@524tracker.com</a></p>
        </section>
      </div>
    </article>
    </>
  );
}
