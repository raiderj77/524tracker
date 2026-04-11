import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllMarkdownPosts } from '@/lib/blog-markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-15');
  const newToolsModified = new Date('2026-03-19');

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
    { url: 'https://524tracker.com/card-tracker', lastModified },
    { url: 'https://524tracker.com/spend-tracker', lastModified },
    { url: 'https://524tracker.com/application-flowchart', lastModified },
    { url: 'https://524tracker.com/blog', lastModified },
    { url: 'https://524tracker.com/velocity-checker', lastModified: newToolsModified },
    { url: 'https://524tracker.com/annual-fee-calculator', lastModified: newToolsModified },
    { url: 'https://524tracker.com/application-timing', lastModified: newToolsModified },
    { url: 'https://524tracker.com/amex-popup-estimator', lastModified: newToolsModified },
    { url: 'https://524tracker.com/downgrade-guide', lastModified: newToolsModified },
    { url: 'https://524tracker.com/credit-pull-database', lastModified: newToolsModified },
    { url: 'https://524tracker.com/inquiry-tracker', lastModified: newToolsModified },
  ];

  const jsxPosts = getAllPosts();
  const markdownPosts = getAllMarkdownPosts();
  const markdownSlugs = new Set(markdownPosts.map((p) => p.slug));

  const blogPages: MetadataRoute.Sitemap = [
    ...markdownPosts.map((post) => ({
      url: `https://524tracker.com/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : lastModified,
    })),
    ...jsxPosts
      .filter((post) => !markdownSlugs.has(post.slug))
      .map((post) => ({
        url: `https://524tracker.com/blog/${post.slug}`,
        lastModified: new Date(post.dateModified),
      })),
  ];

  return [...staticPages, ...blogPages];
}
