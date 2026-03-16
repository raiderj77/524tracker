import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPost } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    robots: { index: true, follow: true, 'max-snippet': -1 },
    alternates: { canonical: `https://524tracker.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://524tracker.com/blog/${post.slug}`,
      type: 'article',
    },
    authors: [{ name: 'Built by an experienced web developer' }],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: post.title,
                description: post.description,
                datePublished: post.datePublished,
                dateModified: post.dateModified,
                author: {
                  '@type': 'Person',
                  name: 'Built by an experienced web developer',
                },
                publisher: {
                  '@type': 'Organization',
                  name: '524Tracker',
                },
                url: `https://524tracker.com/blog/${post.slug}`,
              },
              ...(post.faqSchema.length > 0
                ? [
                    {
                      '@type': 'FAQPage',
                      mainEntity: post.faqSchema.map((faq) => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text: faq.answer,
                        },
                      })),
                    },
                  ]
                : []),
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
                  { '@type': 'ListItem', position: 3, name: post.title, item: `https://524tracker.com/blog/${post.slug}` },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/blog" className="text-brand-gold hover:text-amber-600">Blog</Link>
          <span className="mx-1">/</span>
          <span>{post.title}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            {post.title}
          </h1>
          <p className="text-xs text-text-secondary">
            Last updated: {post.lastUpdated}{' '}
            &middot; By an experienced web developer &middot; {post.readTimeMinutes} min read
          </p>
        </header>

        <div className="prose-sm text-text-primary leading-relaxed space-y-6">
          {post.content()}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-brand-light border border-gray-200 rounded-2xl p-6 text-center">
          <p className="font-display font-bold text-lg text-brand-navy mb-2">
            Track your 5/24 status and all bank rules free
          </p>
          <p className="text-sm text-text-secondary mb-4">
            No account required. All data stays in your browser.
          </p>
          <Link
            href={post.ctaHref}
            className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            {post.ctaText} &rarr;
          </Link>
        </div>

        {/* Related links */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-3">Related</h2>
          <ul className="space-y-2 text-sm">
            {post.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-gold hover:text-amber-600">
                  {link.label} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-text-secondary mt-8 italic">
          Rules verified as of March 2026. Bank policies change without notice. Always verify with the card issuer before applying.
        </p>
      </article>
    </>
  );
}
