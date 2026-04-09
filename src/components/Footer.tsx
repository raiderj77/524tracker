import Link from 'next/link';

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/card-tracker', label: 'Card Tracker' },
  { href: '/velocity-checker', label: 'Velocity Checker' },
  { href: '/spend-tracker', label: 'Spend Tracker' },
  { href: '/annual-fee-calculator', label: 'Annual Fee Calculator' },
  { href: '/application-timing', label: 'Application Timing' },
  { href: '/amex-popup-estimator', label: 'Amex Popup Estimator' },
  { href: '/downgrade-guide', label: 'Downgrade Guide' },
  { href: '/credit-pull-database', label: 'Credit Pull Database' },
  { href: '/inquiry-tracker', label: 'Inquiry Tracker' },
  { href: '/application-flowchart', label: 'Flowchart' },
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
              Built by an experienced web professional
            </p>
          </div>
        </div>

        {/* DevelopVault promotional callout */}
        <div className="mt-10 rounded-xl border border-brand-gold/30 bg-white/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-display font-bold text-white text-base mb-1">Track Your Cards Like a Pro</p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
              Our free Google Sheets 5/24 Tracker keeps your Chase eligibility, bonus progress, and annual fees organized in one place.
            </p>
          </div>
          <a
            href="https://www.etsy.com/shop/DevelopVault"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm whitespace-nowrap min-h-[44px]"
          >
            Get It on Etsy &rarr;
          </a>
        </div>

        <div className="border-t border-brand-slate mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Your Friendly Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
