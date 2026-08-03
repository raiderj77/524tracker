import Link from 'next/link';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Accessibility Statement',
  description:
    '524Tracker accessibility practices, supported interactions, known limitations, and a way to report barriers.',
  path: '/accessibility',
});

export default function AccessibilityPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '524Tracker Accessibility Statement',
    url: 'https://524tracker.com/accessibility',
    dateModified: '2026-08-02',
    description:
      'Accessibility practices, supported interactions, known limitations, and feedback contact information for 524Tracker.',
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="mb-2 text-xs text-text-secondary">Last reviewed August 2, 2026</p>
      <h1 className="mb-5 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        Accessibility statement
      </h1>
      <p className="text-base leading-relaxed text-text-primary">
        524Tracker is intended to be usable with a keyboard, screen magnification, common screen
        readers, touch input, and browser text resizing. We target WCAG 2.2 Level AA as an ongoing
        engineering goal; this statement does not claim independent certification or perfect
        conformance in every browser and assistive-technology combination.
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-text-primary">
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Measures in place</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>A skip link and a labeled main-content region on every maintained page.</li>
            <li>Visible keyboard focus, semantic headings, form labels, and status announcements.</li>
            <li>Controls designed for keyboard operation and touch targets of at least 44 by 44 CSS pixels.</li>
            <li>Responsive layouts tested at 320 CSS pixels without requiring page-level horizontal scrolling.</li>
            <li>Text alternatives for meaningful graphics and reduced-motion support where animation is used.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Using the tools</h2>
          <p>
            The date tracker card-name field supports typing, arrow-key navigation, Enter to choose
            a suggestion, and Escape to close suggestions. Native radio buttons and checkboxes can
            be changed with standard keyboard commands. Saved entries remain in the current browser
            by default, so assistive technology running in another browser or device will not see them.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Known limitations</h2>
          <p>
            Browser date controls and print dialogs are supplied by the browser and operating system,
            so their accessibility can vary. Wide evidence tables use a labeled horizontal scroll
            area on small screens. Third-party consent or advertising interfaces, if enabled in the
            future, are controlled partly by their providers and must be tested before activation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Report a barrier</h2>
          <p>
            Email{' '}
            <a
              href="mailto:contact@524tracker.com?subject=Accessibility%20barrier"
              className="font-semibold underline underline-offset-2"
            >
              contact@524tracker.com
            </a>{' '}
            with the page URL, the task you were trying to complete, the browser or assistive
            technology used, and a description of the problem. Do not include card numbers, credit
            reports, credentials, or government identifiers. Mailbox delivery is an operational
            dependency and should be verified separately by the site owner.
          </p>
          <p className="mt-4">
            For other requests, use the{' '}
            <Link href="/contact" className="font-semibold underline underline-offset-2">
              contact and corrections page
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
