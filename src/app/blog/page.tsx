import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: '524Tracker Blog — Credit Card Strategy & Bank Rules',
  description:
    'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
  keywords:
    'credit card blog, churning blog, chase 5/24 guide, amex lifetime rule, credit card strategy',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/blog' },
  openGraph: {
    title: '524Tracker Blog — Credit Card Strategy & Bank Rules',
    description:
      'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
    url: 'https://524tracker.com/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: '524Tracker Blog — Credit Card Strategy & Bank Rules',
                description:
                  'Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.',
                url: 'https://524tracker.com/blog',
                publisher: {
                  '@type': 'Organization',
                  name: '524Tracker',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
          Blog
        </h1>
        <p className="text-sm text-text-secondary mb-10">
          Guides and explainers on Chase 5/24, Amex lifetime rules, Citi 8/65, and all major bank application rules.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-brand-gold transition-colors group"
            >
              <div className="flex items-center gap-3 text-xs text-text-secondary mb-1">
                <span>
                  {new Date(post.datePublished + 'T00:00:00').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>&middot;</span>
                <span>{post.readTimeMinutes} min read</span>
              </div>
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
