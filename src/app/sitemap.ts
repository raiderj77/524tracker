import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllMarkdownPosts } from '@/lib/blog-markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-15');
  const newToolsModified = new Date('2026-03-19');

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://524tracker.com', lastModified, priority: 1.0, changeFrequency: 'weekly' },
    // Rules Guide is the AEO/topic-cluster pillar page — bump to top priority.
    { url: 'https://524tracker.com/rules-guide', lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: 'https://524tracker.com/chase-524', lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
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
    { url: 'https://524tracker.com/credit-pull-database', lastModified: new Date() },
    { url: 'https://524tracker.com/credit-pull-database/analysis', lastModified: new Date() },
    { url: 'https://524tracker.com/methodology', lastModified: new Date() },
    { url: 'https://524tracker.com/submit-data-point', lastModified: new Date() },
    { url: 'https://524tracker.com/inquiry-tracker', lastModified: newToolsModified },
  ];

  const jsxPosts = getAllPosts();
  const markdownPosts = getAllMarkdownPosts();
  const markdownSlugs = new Set(markdownPosts.map((p) => p.slug));

  // Posts that have been rewritten more recently than their original publish
  // date — bump lastModified so search engines re-crawl them. Keyed by slug.
  const rewrittenSlugLastModified: Record<string, Date> = {
    'how-the-chase-524-rule-works-in-2026': new Date(),
    'what-is-the-amex-lifetime-bonus-rule': new Date(),
    'how-to-track-your-credit-card-application-history': new Date(),
    'citi-8-65-rule-explained-for-credit-card-churners': new Date(),
    'bank-of-america-2-3-4-rule-explained': new Date(),
    'what-is-credit-card-churning-and-is-it-worth-it': new Date(),
    'how-hard-inquiries-affect-your-credit-score': new Date(),
    'when-to-cancel-a-credit-card-to-avoid-annual-fee': new Date(),
    'best-credit-cards-for-travel-rewards-beginners': new Date(),
    'best-no-annual-fee-travel-credit-cards-in-2026': new Date(),
    'best-credit-cards-for-cash-back-in-2026': new Date(),
    'best-credit-cards-for-hotel-rewards-in-2026': new Date(),
    // Phase 6 — Worth-It JSX posts (rewritten with question H2s + ROI capsules)
    'is-chase-sapphire-reserve-worth-it-2026': new Date(),
    'is-amex-platinum-worth-it-2026': new Date(),
    'amex-gold-worth-it-2026': new Date(),
  };

  const blogPages: MetadataRoute.Sitemap = [
    ...markdownPosts.map((post) => ({
      url: `https://524tracker.com/blog/${post.slug}`,
      lastModified:
        rewrittenSlugLastModified[post.slug] ??
        (post.date ? new Date(post.date) : lastModified),
    })),
    ...jsxPosts
      .filter((post) => !markdownSlugs.has(post.slug))
      .map((post) => ({
        url: `https://524tracker.com/blog/${post.slug}`,
        lastModified:
          rewrittenSlugLastModified[post.slug] ??
          new Date(post.dateModified),
      })),
  ];

  return [...staticPages, ...blogPages];
}
