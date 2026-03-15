import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-15');

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://524tracker.com', lastModified },
    { url: 'https://524tracker.com/rules-guide', lastModified },
    { url: 'https://524tracker.com/top-cards', lastModified },
    { url: 'https://524tracker.com/card-value-calculator', lastModified },
    { url: 'https://524tracker.com/best-cards-by-category', lastModified },
    { url: 'https://524tracker.com/faq', lastModified },
    { url: 'https://524tracker.com/about', lastModified },
    { url: 'https://524tracker.com/privacy', lastModified },
    { url: 'https://524tracker.com/terms', lastModified },
    { url: 'https://524tracker.com/contact', lastModified },
    { url: 'https://524tracker.com/blog', lastModified },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `https://524tracker.com/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
  }));

  return [...staticPages, ...blogPages];
}
