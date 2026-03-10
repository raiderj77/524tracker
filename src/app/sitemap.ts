import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-09');

  return [
    { url: 'https://524tracker.com', lastModified },
    { url: 'https://524tracker.com/rules-guide', lastModified },
    { url: 'https://524tracker.com/top-cards', lastModified },
    { url: 'https://524tracker.com/faq', lastModified },
    { url: 'https://524tracker.com/about', lastModified },
    { url: 'https://524tracker.com/privacy', lastModified },
    { url: 'https://524tracker.com/terms', lastModified },
    { url: 'https://524tracker.com/contact', lastModified },
  ];
}
