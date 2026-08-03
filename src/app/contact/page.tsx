import Link from 'next/link';
import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Contact and Corrections',
  description: 'Contact 524Tracker about corrections, privacy, accessibility, or technical issues.',
  path: '/contact',
});

const routes = [
  {
    title: 'Corrections and source updates',
    email: 'contact@524tracker.com',
    detail: 'Include the page URL, the exact disputed statement, and a current primary source.',
  },
  {
    title: 'Privacy requests',
    email: 'privacy@524tracker.com',
    detail: 'Describe the request and your jurisdiction. Do not email card numbers, credit reports, or government identifiers.',
  },
  {
    title: 'Legal notices',
    email: 'legal@524tracker.com',
    detail: 'Use for formal legal or intellectual-property notices.',
  },
];

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-4 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        Contact & corrections
      </h1>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-text-primary">
        Report a factual error, broken calculation, accessibility barrier, privacy concern, or
        technical problem. These email links open your own mail application; this page does not
        collect form submissions.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {routes.map((route) => (
          <section key={route.email} className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-2 font-display text-lg font-bold text-brand-navy">{route.title}</h2>
            <p className="mb-4 text-sm leading-relaxed text-text-primary">{route.detail}</p>
            <a href={`mailto:${route.email}`} className="break-all font-semibold underline underline-offset-2">
              {route.email}
            </a>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
        <h2 className="mb-3 font-display text-xl font-bold">Before you send</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed">
          <li>Do not send full card numbers, account credentials, Social Security numbers, or credit reports.</li>
          <li>524Tracker cannot provide personalized financial advice or predict an application outcome.</li>
          <li>Email delivery and response timing are not guaranteed.</li>
          <li>Browser-local tracker data cannot be retrieved by 524Tracker.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-text-primary">
        See the <Link href="/editorial-policy" className="font-semibold underline">editorial policy</Link>{' '}
        for evidence and correction standards, or the{' '}
        <Link href="/privacy" className="font-semibold underline">privacy policy</Link> for data handling.
      </p>
    </article>
  );
}
