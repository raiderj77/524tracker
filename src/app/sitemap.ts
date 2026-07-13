import type { MetadataRoute } from 'next';

const reviewed = new Date('2026-07-12');

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/rules-guide',
    '/chase-524',
    '/card-value-calculator',
    '/faq',
    '/about',
    '/privacy',
    '/terms',
    '/contact',
    '/card-tracker',
    '/spend-tracker',
    '/application-flowchart',
    '/velocity-checker',
    '/annual-fee-calculator',
    '/application-timing',
    '/amex-popup-estimator',
    '/downgrade-guide',
    '/credit-pull-database',
    '/credit-pull-database/analysis',
    '/methodology',
    '/inquiry-tracker',
  ];

  return paths.map((path) => ({
    url: `https://524tracker.com${path}`,
    lastModified: reviewed,
    changeFrequency: path === '' || path === '/rules-guide' ? 'weekly' : 'monthly',
    priority: path === '' || path === '/rules-guide' ? 1 : 0.7,
  }));
}
