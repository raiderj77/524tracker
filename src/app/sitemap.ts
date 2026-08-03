import type { MetadataRoute } from 'next';

const reviewed = new Date('2026-08-02');

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/rules-guide',
    '/chase-524',
    '/card-value-calculator',
    '/faq',
    '/about',
    '/accessibility',
    '/privacy',
    '/terms',
    '/contact',
    '/spend-tracker',
    '/methodology',
    '/editorial-policy',
  ];

  return paths.map((path) => ({
    url: `https://524tracker.com${path}`,
    lastModified: reviewed,
    changeFrequency: path === '' || path === '/rules-guide' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path === '/rules-guide' || path === '/chase-524' ? 0.8 : 0.6,
  }));
}
