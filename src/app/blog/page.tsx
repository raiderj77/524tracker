import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllMarkdownPosts } from '@/lib/blog-markdown';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Credit Card Strategy Blog | 524Tracker',
  description:
    'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
  keywords: [
    'credit card blog',
    'churning blog',
    'chase 5/24 guide',
    'amex lifetime rule',
    'credit card strategy',
  ],
  robots: { index: true, follow: true, googleBot: { 'max-snippet': -1 } },
  alternates: { canonical: 'https://524tracker.com/blog' },
  openGraph: {
    title: '524Tracker Blog — Credit Card Strategy & Bank Rules',
    description:
      'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
    url: 'https://524tracker.com/blog',
    type: 'website',
  },
};

type ListingPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: number;
};

export default function BlogIndexPage() {
  const markdownPosts = getAllMarkdownPosts();
  const jsxPosts = getAllPosts();

  const markdownSlugs = new Set(markdownPosts.map((p) => p.slug));

  const allPosts: ListingPost[] = [
    ...markdownPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description || p.excerpt,
      date: p.date,
    })),
    ...jsxPosts
      .filter((p) => !markdownSlugs.has(p.slug))
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        date: p.datePublished,
        readTime: p.readTimeMinutes,
      })),
  ].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: '524Tracker Blog — Credit Card Strategy & Bank Rules',
        description:
          'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
        url: 'https://524tracker.com/blog',
        numberOfItems: allPosts.length,
        hasPart: allPosts.map((p) => ({
          '@type': 'BlogPosting',
          name: p.title,
          url: `https://524tracker.com/blog/${p.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
          Blog
        </h1>
        <p className="text-sm text-text-secondary mb-10">
          Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank
          application rules.
        </p>

        {allPosts.length === 0 ? (
          <p className="text-text-secondary">No posts published yet.</p>
        ) : (
          <div className="space-y-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-brand-gold transition-colors group"
              >
                <div className="flex items-center gap-3 text-xs text-text-secondary mb-1">
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {post.readTime && (
                    <>
                      <span>&middot;</span>
                      <span>{post.readTime} min read</span>
                    </>
                  )}
                </div>
                <h2 className="font-display font-bold text-xl text-brand-navy group-hover:text-brand-gold transition-colors mb-2">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-sm text-text-primary leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                )}
                <span className="inline-block mt-3 text-sm text-brand-gold font-medium">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
