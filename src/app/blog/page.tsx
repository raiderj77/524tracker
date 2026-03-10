import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Credit Card Rules & Strategy',
  description:
    'Expert guides on credit card application rules, churning strategies, Chase 5/24, Amex lifetime bonuses, and more. Updated for 2026.',
  keywords:
    'credit card blog, churning blog, chase 5/24 guide, credit card strategy',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/blog' },
  openGraph: {
    title: 'Blog — Credit Card Rules & Strategy | 524Tracker',
    description:
      'Expert guides on credit card application rules, churning strategies, and bank-specific restrictions.',
    url: 'https://524tracker.com/blog',
    type: 'website',
  },
};

const posts = [
  {
    slug: 'chase-5-24-rule-explained',
    title: 'Chase 5/24 Rule: Complete Guide (2026)',
    description:
      "Chase 5/24 rejects applications if you've opened 5+ cards in 24 months. Learn what counts, what doesn't, and how to check your status free.",
    date: '2026-03-09',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
          Blog
        </h1>
        <p className="text-sm text-text-secondary mb-10">
          In-depth guides on credit card application rules, bank-specific restrictions, and strategies for maximizing welcome bonuses.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-brand-gold transition-colors group"
            >
              <p className="text-xs text-text-secondary mb-1">
                {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="font-display font-bold text-xl text-brand-navy group-hover:text-brand-gold transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-text-primary leading-relaxed">
                {post.description}
              </p>
              <span className="inline-block mt-3 text-sm text-brand-gold font-medium">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
