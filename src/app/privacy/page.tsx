import Link from 'next/link';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'How 524Tracker handles browser-local tracker data, analytics consent, server logs, affiliate links, and privacy requests.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-xs text-text-secondary mb-8">Effective January 1, 2026 | Last reviewed August 2, 2026</p>

      <div className="space-y-8 text-sm text-text-primary leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">The short version</h2>
          <p>
            Credit-card details you enter into the tracking tools are processed and stored in your
            browser. 524Tracker does not intentionally transmit those entries to its servers. The
            website still uses ordinary hosting and security services,
            which can process technical information such as an IP address and browser details.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Tracker data</h2>
          <p>
            Card names, application dates, spending entries, inquiry dates, and similar tool inputs
            are saved in browser localStorage on your device. No account is required. You can remove
            this data by using a tool&apos;s reset control or clearing site data in your browser. Clearing
            browser data, changing devices, or using private browsing may permanently remove it.
          </p>
          <p className="mt-3">
            When you choose print, CSV export, copy, or share, your browser or selected destination
            handles that output. Review it before sending because it can contain financial-account
            names, dates, and reference counts.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Cookies and analytics</h2>
          <p className="mb-3">
            Google Analytics (measurement ID G-308FHNWPPQ) is configured as an optional analytics
            provider. The repository defaults the consent platform and analytics to disabled.
            Deployment settings can enable them only together; when enabled, the consent platform
            controls whether the analytics script loads for a visitor.
          </p>
          <p>
            Consent Mode defaults advertising and analytics storage to denied. A Global Privacy
            Control signal also keeps non-essential storage denied. If analytics is enabled later,
            it will require the consent platform and will not be configured to receive tracker entries.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Advertising status</h2>
          <p>
            Google AdSense is configured as a possible advertising provider, but repository defaults
            keep the script disabled. Code requires an enabled consent platform, an explicit account-
            readiness flag, and a separate ad-serving flag before the script can load. The ads.txt
            file authorizes the listed seller; it does not by itself mean that ads are approved or
            active. We will update this policy before enabling advertising.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Hosting and server logs</h2>
          <p>
            Vercel hosts the site and may process request information such as IP address, user agent,
            requested URL, timestamps, and security events in infrastructure logs. We do not promise
            a fixed deletion date for provider logs because actual retention depends on the service
            plan, security needs, backups, and legal obligations. See Vercel&apos;s privacy documentation
            for its current practices.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">External and sponsored links</h2>
          <p>
            Maintained pages do not currently contain compensated credit-card application buttons.
            The site does link to issuers, regulators, and other external sources. A destination can
            receive ordinary referral and request data after you
            choose to follow a link. Its own privacy policy governs any information you provide there.
            524Tracker does not append your browser-local tracker entries to outbound links.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Retention and security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tracker data remains in your browser until you remove it or the browser removes it.</li>
            <li>Optional consent, analytics, and advertising integrations are disabled by repository defaults and require explicit deployment flags.</li>
            <li>Vercel retains hosting and security data under its settings, contracts, and policies.</li>
          </ul>
          <p className="mt-3">
            The site uses HTTPS and security headers. No website or third-party service can guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Your choices and rights</h2>
          <p>
            You can enable Global Privacy Control, clear browser data, or use browser privacy controls.
            If optional services are enabled later, a consent control will be provided. Depending on where you live,
            you may also have rights to access, correct, delete, or restrict personal information that
            we control. Browser-local tracker data is controlled by you and is not available for us to
            retrieve. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3">Contact and updates</h2>
          <p>
            For a privacy request, email{' '}
            <a href="mailto:privacy@524tracker.com" className="text-brand-gold hover:text-amber-600">
              privacy@524tracker.com
            </a>
            . We may update this policy when services or practices change. See the{' '}
            <Link href="/terms" className="text-brand-gold hover:text-amber-600">Terms of Service</Link>{' '}
            for financial-information limitations.
          </p>
        </section>
      </div>
    </article>
  );
}
