import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: '524Tracker privacy policy — how we handle your data, including localStorage usage, AdSense cookies, and affiliate link tracking.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://524tracker.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose-sm">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-xs text-text-secondary mb-8">Last Updated: March 11, 2026</p>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Data Controller</h2>
          <p>524Tracker (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website at 524tracker.com. For privacy inquiries, contact us at <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600">privacy@524tracker.com</a>.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Data We Collect</h2>
          <h3 className="font-bold text-base text-brand-navy mb-2">Tracker Data (localStorage)</h3>
          <p className="mb-3">
            <strong>We do not collect, store, or transmit your credit card application data.</strong> All tracker data (card names, dates, statuses) is stored locally in your browser using localStorage and is never sent to our servers. This data exists only on your device and can be deleted at any time by clearing your browser data.
          </p>
          <h3 className="font-bold text-base text-brand-navy mb-2">Advertising Cookies (Third Party)</h3>
          <p className="mb-3">
            We use Google AdSense to display advertisements. Google may use cookies and similar technologies to serve ads based on your prior visits to this or other websites. Google&apos;s use of advertising cookies is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">Google&apos;s Privacy Policy</a>. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">Google Ads Settings</a>.
          </p>
          <h3 className="font-bold text-base text-brand-navy mb-2">Affiliate Link Tracking (Third Party)</h3>
          <p>
            When you click an affiliate link on our site, the destination website (e.g., Chase, American Express, Capital One) may use cookies to track that you arrived via our referral. This tracking is governed by each issuer&apos;s privacy policy, not ours. We do not receive any personal information about you through affiliate links.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Lawful Basis for Processing</h2>
          <p>For advertising cookies, our lawful basis is legitimate interest for users in jurisdictions where opt-out consent applies, and explicit consent for users in the EU/EEA/UK where opt-in consent is required under GDPR.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Data Retention</h2>
          <p>localStorage data persists in your browser until you clear it — you can delete it at any time through your browser settings. We do not set any first-party cookies. Google AdSense cookies are retained for up to 13 months per Google&apos;s policies. Affiliate network cookies typically expire within 7–90 days depending on the issuer program. Vercel server logs (containing IP addresses) are retained for up to 30 days.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Third Parties</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdSense — advertising</li>
            <li>Vercel — website hosting</li>
            <li>Credit card affiliate networks (CJ Affiliate, direct issuer programs) — referral tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">International Data Transfers</h2>
          <p>Third-party services (Google, Vercel) may process data in the United States and other countries. These transfers are protected by Standard Contractual Clauses and other appropriate safeguards.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Your Rights (GDPR)</h2>
          <p className="mb-2">If you are in the EU/EEA/UK, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, rectify, or erase your personal data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your supervisory authority</li>
          </ul>
          <p className="mt-2">Since we do not store your tracker data on our servers, there is no personal data for us to access, rectify, or delete. Your tracker data is entirely under your control in your browser.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">California Privacy Rights (CCPA/CPRA)</h2>
          <p className="mb-2">If you are a California resident, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Know what personal information is collected and how it is used</li>
            <li>Delete your personal information</li>
            <li>Correct inaccurate personal information</li>
            <li>Opt out of the sale or sharing of your personal information</li>
            <li>Limit the use and disclosure of sensitive personal information</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>
          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Do Not Sell or Share My Personal Information</h3>
          <p>We do not sell your personal information. Google AdSense may share data for advertising purposes. To opt out of personalized advertising, visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">Google Ads Settings</a>.</p>
          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Global Privacy Control (GPC)</h3>
          <p>We honor Global Privacy Control (GPC) signals. When we detect a GPC signal from your browser, we treat it as a valid opt-out request for the sale or sharing of your personal information under the CCPA/CPRA.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Sensitive Personal Information</h2>
          <p>We do not collect, process, or infer sensitive personal information as defined under the CCPA/CPRA, including but not limited to: Social Security numbers, precise geolocation, racial or ethnic origin, religious beliefs, mental or physical health information, biometric or genetic data, sexual orientation, or citizenship and immigration status. Our tool processes only credit card names and application dates that you voluntarily enter, and this data never leaves your browser.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Children&apos;s Privacy</h2>
          <p>Our service is not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Financial Information Disclaimer</h2>
          <p>524Tracker provides informational tools and content about credit card application rules. Nothing on this site constitutes financial, legal, or credit advice. Card recommendations may include affiliate links from which we earn a commission if you apply and are approved. Always review the issuer&apos;s terms before applying for any credit card.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated effective date.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Contact</h2>
          <p>For privacy-related inquiries: <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600">privacy@524tracker.com</a></p>
        </section>
      </div>
    </article>
  );
}
