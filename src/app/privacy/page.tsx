import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: '524Tracker privacy policy — how we handle your data, including localStorage usage, AdSense cookies, and affiliate link tracking.',
  keywords: 'privacy policy, 524tracker privacy, data handling, localStorage, cookie policy',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/privacy' },
  openGraph: {
    title: 'Privacy Policy — 524Tracker',
    description: '524Tracker privacy policy — how we handle your data, including localStorage usage and cookies.',
    url: 'https://524tracker.com/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy — 524Tracker',
            description: '524Tracker privacy policy — how we handle your data, including localStorage usage, AdSense cookies, and affiliate link tracking.',
            url: 'https://524tracker.com/privacy',
          }),
        }}
      />
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose-sm">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-xs text-text-secondary mb-8">Effective Date: January 1, 2026 | Last updated: March 16, 2026</p>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Who Is the Data Controller?</h2>
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
          <h3 className="font-bold text-base text-brand-navy mb-2">Cookiebot Consent Management</h3>
          <p>
            We use Cookiebot, a certified consent management platform (CMP), to manage cookie consent and track your preferences across the EU/EEA/UK. Cookiebot helps us comply with GDPR and other privacy regulations by obtaining your consent before placing certain cookies. Cookiebot&apos;s privacy practices are governed by <a href="https://www.cookiebot.com/en/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">Cookiebot&apos;s Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Lawful Basis for Processing</h2>
          <p>For advertising cookies, our lawful basis is legitimate interest for users in jurisdictions where opt-out consent applies, and explicit consent for users in the EU/EEA/UK where opt-in consent is required under GDPR.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How Long We Retain Data</h2>
          <p>localStorage data persists in your browser until you clear it — you can delete it at any time through your browser settings. We do not set any first-party cookies. Google AdSense cookies are retained for up to 13 months per Google&apos;s policies. Affiliate network cookies typically expire within 7–90 days depending on the issuer program. Vercel server logs (containing IP addresses) are retained for up to 30 days.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Third Parties Receive Data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdSense — advertising</li>
            <li>Vercel — website hosting</li>
            <li>Credit card affiliate networks (CJ Affiliate, direct issuer programs) — referral tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How International Data Transfers Work</h2>
          <p>Third-party services (Google, Vercel) may process data in the United States and other countries. These transfers are protected by Standard Contractual Clauses and other appropriate safeguards.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">What Are Your Rights Under GDPR?</h2>
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

        <section id="california-privacy" aria-labelledby="california-heading">
          <h2 id="california-heading" className="font-display font-bold text-xl text-brand-navy mb-3">California Privacy Rights (CCPA/CPRA)</h2>

          <p className="mb-3">
            If you are a California resident, the California Consumer Privacy Act (CCPA) as amended
            by the California Privacy Rights Act (CPRA) grants you specific rights regarding your
            personal information. These rights are effective as of January 1, 2026.
          </p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Information We Collect</h3>
          <p className="mb-2">In the past 12 months we have collected the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>Identifiers:</strong> IP address, browser type, device identifiers via analytics and advertising.</li>
            <li><strong>Internet or network activity:</strong> Pages visited, tracker tool usage (rule lookups, card inputs), time on site.</li>
            <li><strong>Financial information (user-entered):</strong> Credit card application data, hard inquiry dates, and card values entered into our tracking tools. This data is stored locally in your browser only and is never transmitted to our servers.</li>
            <li><strong>Inferred data:</strong> Interests inferred from browsing behavior via advertising and affiliate partners.</li>
          </ul>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Sensitive Personal Information</h3>
          <p className="mb-3">
            As of January 1, 2026, California law defines financial account data as sensitive personal
            information. <strong>524 Tracker stores all credit card application tracking data
            locally in your browser (localStorage) only.</strong> This data is never transmitted to
            our servers, never stored in any database we control, never sold, and never shared.
            You have complete control over this data and may clear it at any time by clearing your
            browser&apos;s local storage.
          </p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Data Minimization</h3>
          <p className="mb-3">
            We collect only the minimum personal information necessary to operate this service.
            All credit card tracking inputs remain on your device. We do not collect personal
            financial information beyond what you voluntarily enter into browser-local tools.
          </p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">How We Use Your Information</h3>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>To display advertising through Google AdSense</li>
            <li>To serve relevant credit card recommendations through affiliate partners</li>
            <li>To analyze aggregate site traffic and improve tool accuracy via analytics</li>
            <li>To maintain site security and prevent fraud</li>
          </ul>
          <p className="mb-3">
            We do not sell your personal information. Sharing data with advertising partners
            may constitute &ldquo;sharing&rdquo; under CPRA — you may opt out using the methods below.
            Financial tracking data entered into our tools never reaches advertising systems.
          </p>
          <p className="mb-3">
            <strong>Disclaimer:</strong> 524 Tracker is an informational tool only. Credit card
            application rules displayed on this site are based on publicly available information
            and may not reflect current issuer policies. This tool does not constitute financial
            advice. Always verify current rules directly with the card issuer before applying.
          </p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Your Rights as a California Resident</h3>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>Right to Know:</strong> Request disclosure of personal information collected in the past 12 months.</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information we hold. Note: tool tracking data is stored only in your browser and can be deleted by clearing local storage.</li>
            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of sharing personal information for advertising. We honor Global Privacy Control (GPC) signals automatically.</li>
            <li><strong>Right to Limit Use of Sensitive Information:</strong> Direct us to limit use of sensitive financial information to necessary service functions.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights.</li>
          </ul>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Do Not Sell or Share My Personal Information</h3>
          <p className="mb-3">
            To opt out of sharing for advertising purposes, use a{' '}
            <a href="https://globalprivacycontrol.org/" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">Global Privacy Control (GPC)</a>-enabled
            browser, or contact us via the <a href="/contact" className="text-brand-gold hover:text-amber-600">Contact page</a>.
          </p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">How to Submit a Request</h3>
          <p className="mb-3">Contact us via the <a href="/contact" className="text-brand-gold hover:text-amber-600">Contact page</a>. We will respond within 45 days. Identity verification may be required.</p>

          <h3 className="font-bold text-base text-brand-navy mt-4 mb-2">Data Retention</h3>
          <p>Analytics data is retained for 26 months. Server logs are retained for 90 days. Credit card tracking data is stored only in your browser&apos;s local storage and is never retained by us.</p>
        </section>

        <section id="state-privacy" aria-labelledby="state-heading">
          <h2 id="state-heading" className="font-display font-bold text-xl text-brand-navy mb-3">Additional U.S. State Privacy Rights</h2>
          <p className="mb-3">
            Residents of the following states have privacy rights similar to California&apos;s CCPA/CPRA.
            To exercise your rights, contact us via the <a href="/contact" className="text-brand-gold hover:text-amber-600">Contact page</a>.
            We will respond within the timeframe required by your state&apos;s law.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 pr-4 font-bold">State</th>
                  <th className="text-left py-2 pr-4 font-bold">Law</th>
                  <th className="text-left py-2 pr-4 font-bold">Effective</th>
                  <th className="text-left py-2 font-bold">Key Rights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="py-2 pr-4">Colorado</td><td className="py-2 pr-4">CPA</td><td className="py-2 pr-4">Jul 2023</td><td className="py-2">Access, delete, correct, opt-out, portability</td></tr>
                <tr><td className="py-2 pr-4">Connecticut</td><td className="py-2 pr-4">CTDPA</td><td className="py-2 pr-4">Jul 2023</td><td className="py-2">Access, delete, correct, opt-out, portability</td></tr>
                <tr><td className="py-2 pr-4">Virginia</td><td className="py-2 pr-4">VCDPA</td><td className="py-2 pr-4">Jan 2023</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Texas</td><td className="py-2 pr-4">TDPSA</td><td className="py-2 pr-4">Jul 2024</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Florida</td><td className="py-2 pr-4">FDBR</td><td className="py-2 pr-4">Jul 2024</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Montana</td><td className="py-2 pr-4">MTCPA</td><td className="py-2 pr-4">Oct 2024</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Oregon</td><td className="py-2 pr-4">OCPA</td><td className="py-2 pr-4">Jul 2024</td><td className="py-2">Access, delete, correct, opt-out, portability</td></tr>
                <tr><td className="py-2 pr-4">Tennessee</td><td className="py-2 pr-4">TIPA</td><td className="py-2 pr-4">Jul 2025</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Minnesota</td><td className="py-2 pr-4">MNDPA</td><td className="py-2 pr-4">Jul 2025</td><td className="py-2">Access, delete, correct, opt-out, portability</td></tr>
                <tr><td className="py-2 pr-4">Maryland</td><td className="py-2 pr-4">MODPA</td><td className="py-2 pr-4">Oct 2025</td><td className="py-2">Access, delete, correct, opt-out; bans sale of sensitive data</td></tr>
                <tr><td className="py-2 pr-4">Indiana</td><td className="py-2 pr-4">IDCPA</td><td className="py-2 pr-4">Jan 2026</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Kentucky</td><td className="py-2 pr-4">KYCPA</td><td className="py-2 pr-4">Jan 2026</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
                <tr><td className="py-2 pr-4">Rhode Island</td><td className="py-2 pr-4">RIDPA</td><td className="py-2 pr-4">Jan 2026</td><td className="py-2">Access, delete, correct, opt-out</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            We honor Global Privacy Control (GPC) signals from all states that require it.
            We do not sell personal information to third parties. We do not engage in targeted
            advertising using sensitive personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How We Handle Children&apos;s Privacy</h2>
          <p>Our service is not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Our Financial Information Disclaimer</h2>
          <p>524Tracker provides informational tools and content about credit card application rules. Nothing on this site constitutes financial, legal, or credit advice. Card recommendations may include affiliate links from which we earn a commission if you apply and are approved. Always review the issuer&apos;s terms before applying for any credit card.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated effective date.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">How to Contact Us About Privacy</h2>
          <p>For privacy-related inquiries: <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600">privacy@524tracker.com</a></p>
        </section>
      </div>
    </article>
    </>
  );
}
