import Link from 'next/link';

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/rules-guide', label: 'Rules Guide' },
  { href: '/top-cards', label: 'Top Cards' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const sisterSites = [
  { href: 'https://fibertools.app', label: 'FiberTools' },
  { href: 'https://mindchecktools.com', label: 'MindCheck Tools' },
  { href: 'https://flipmycase.com', label: 'FlipMyCase' },
  { href: 'https://creatorrevenuecalculator.com', label: 'Creator Revenue Calculator' },
  { href: 'https://contractextract.com', label: 'ContractExtract' },
  { href: 'https://medicalbillreader.com', label: 'Medical Bill Reader' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site links */}
          <div>
            <h2 className="text-white font-display font-bold text-lg mb-4">524Tracker</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {siteLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Sister sites */}
          <div>
            <h2 className="text-white font-display font-bold text-lg mb-4">More Empire Tools</h2>
            <ul className="space-y-2">
              {sisterSites.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-white font-display font-bold text-lg mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Credit card application tracking is for informational purposes only. Always
              verify rules directly with card issuers before applying. This site may earn a
              commission when you apply for and are approved for a credit card through our
              links.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Built by an experienced web developer
            </p>
          </div>
        </div>

        <div className="border-t border-brand-slate mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} 524Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
