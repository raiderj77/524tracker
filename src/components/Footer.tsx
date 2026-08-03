import Link from 'next/link';

const toolLinks = [
  { href: '/', label: '5/24 Date Tracker' },
  { href: '/spend-tracker', label: 'Spend Tracker' },
  { href: '/card-value-calculator', label: 'Card Value Calculator' },
];

const trustLinks = [
  { href: '/chase-524', label: 'Unofficial 5/24 Guide' },
  { href: '/rules-guide', label: 'Evidence Guide' },
  { href: '/editorial-policy', label: 'Editorial & Sourcing Policy' },
  { href: '/methodology', label: 'Data Methodology' },
  { href: '/about', label: 'About the Publisher' },
  { href: '/contact', label: 'Corrections & Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/accessibility', label: 'Accessibility' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-navy text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="mb-4 font-display text-lg font-bold text-white">Private tools</h2>
          <ul className="space-y-2">
            {toolLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-300 hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-bold text-white">Trust & transparency</h2>
          <ul className="space-y-2">
            {trustLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-300 hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-bold text-white">Financial-information notice</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            524Tracker is an independent date organizer. It is not affiliated with Chase or any
            card issuer, and it does not provide financial advice, credit counseling, eligibility
            decisions, or approval guarantees.
          </p>
          <p className="mt-4 text-sm text-gray-300">
            Published and maintained by{' '}
            <Link href="/about" className="underline underline-offset-2 hover:text-brand-gold">
              Jason Ramirez
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-brand-slate px-4 py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getUTCFullYear()} 524Tracker. Issuer names are trademarks of their owners.
      </div>
    </footer>
  );
}
