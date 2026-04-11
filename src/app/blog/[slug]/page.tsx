import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllMarkdownPosts, getMarkdownPost } from '@/lib/blog-markdown';
import { getAllPosts, getPost } from '@/lib/posts';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export function generateStaticParams() {
  const markdownSlugs = getAllMarkdownPosts().map((p) => ({ slug: p.slug }));
  const jsxSlugs = getAllPosts().map((p) => ({ slug: p.slug }));
  const seen = new Set(markdownSlugs.map((p) => p.slug));
  return [...markdownSlugs, ...jsxSlugs.filter((p) => !seen.has(p.slug))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const mdPost = await getMarkdownPost(slug);
  if (mdPost) {
    return {
      title: mdPost.title,
      description: mdPost.description || mdPost.excerpt || undefined,
      keywords: mdPost.keywords.length ? mdPost.keywords : undefined,
      robots: { index: true, follow: true, googleBot: { 'max-snippet': -1 } },
      alternates: { canonical: `https://524tracker.com/blog/${mdPost.slug}` },
      authors: [{ name: 'Built by an experienced web professional' }],
      openGraph: {
        type: 'article',
        title: mdPost.title,
        description: mdPost.description || mdPost.excerpt || undefined,
        publishedTime: mdPost.date,
        url: `https://524tracker.com/blog/${mdPost.slug}`,
      },
    };
  }

  const jsxPost = getPost(slug);
  if (jsxPost) {
    return {
      title: jsxPost.title,
      description: jsxPost.description,
      keywords: jsxPost.keywords,
      robots: { index: true, follow: true, 'max-snippet': -1 },
      alternates: { canonical: `https://524tracker.com/blog/${jsxPost.slug}` },
      openGraph: {
        title: jsxPost.title,
        description: jsxPost.description,
        url: `https://524tracker.com/blog/${jsxPost.slug}`,
        type: 'article',
      },
      authors: [{ name: 'Built by an experienced web professional' }],
    };
  }

  return {};
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdPost = await getMarkdownPost(slug);

  if (mdPost) {
    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: mdPost.title,
      description: mdPost.description || mdPost.excerpt || undefined,
      datePublished: mdPost.date,
      dateModified: mdPost.date,
      url: `https://524tracker.com/blog/${mdPost.slug}`,
      mainEntityOfPage: `https://524tracker.com/blog/${mdPost.slug}`,
      author: {
        '@type': 'Organization',
        name: '524Tracker',
        url: 'https://524tracker.com',
      },
      publisher: {
        '@type': 'Organization',
        name: '524Tracker',
        url: 'https://524tracker.com',
      },
      keywords: mdPost.keywords.join(', ') || undefined,
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: mdPost.title,
          item: `https://524tracker.com/blog/${mdPost.slug}`,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-text-secondary mb-6">
            <Link href="/" className="text-brand-gold hover:text-amber-600">
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link href="/blog" className="text-brand-gold hover:text-amber-600">
              Blog
            </Link>
            <span className="mx-1">/</span>
            <span>{mdPost.title}</span>
          </nav>

          <header className="mb-8">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
              {mdPost.title}
            </h1>
            <p className="text-xs text-text-secondary">
              {mdPost.date && (
                <>
                  <time dateTime={mdPost.date}>
                    {new Date(mdPost.date + 'T00:00:00').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {' · '}
                </>
              )}
              Built by an experienced web professional
            </p>
          </header>

          {/* Rendered markdown */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: mdPost.htmlContent }}
          />

          {/* CTA */}
          <div className="mt-10 bg-brand-light border border-gray-200 rounded-2xl p-6 text-center">
            <p className="font-display font-bold text-lg text-brand-navy mb-2">
              Track your 5/24 status and all bank rules free
            </p>
            <p className="text-sm text-text-secondary mb-4">
              No account required. All data stays in your browser.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
            >
              Check Your 5/24 Status Free &rarr;
            </Link>
          </div>

          <FinancialDisclaimer />
        </article>
      </>
    );
  }

  // Fall back to existing JSX-based posts
  const jsxPost = getPost(slug);
  if (!jsxPost) notFound();

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: jsxPost.title,
        description: jsxPost.description,
        datePublished: jsxPost.datePublished,
        dateModified: jsxPost.dateModified,
        url: `https://524tracker.com/blog/${jsxPost.slug}`,
        mainEntityOfPage: `https://524tracker.com/blog/${jsxPost.slug}`,
        author: {
          '@type': 'Organization',
          name: '524Tracker',
          url: 'https://524tracker.com',
        },
        publisher: {
          '@type': 'Organization',
          name: '524Tracker',
          url: 'https://524tracker.com',
        },
      },
      ...(jsxPost.faqSchema.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: jsxPost.faqSchema.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://524tracker.com/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: jsxPost.title,
            item: `https://524tracker.com/blog/${jsxPost.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="text-brand-gold hover:text-amber-600">
            Blog
          </Link>
          <span className="mx-1">/</span>
          <span>{jsxPost.title}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            {jsxPost.title}
          </h1>
          <p className="text-xs text-text-secondary">
            Last updated: {jsxPost.lastUpdated} &middot; Built by an experienced web professional
            &middot; {jsxPost.readTimeMinutes} min read
          </p>
        </header>

        <div className="prose-sm text-text-primary leading-relaxed space-y-6">
          {jsxPost.content()}
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
            href={jsxPost.ctaHref}
            className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            {jsxPost.ctaText} &rarr;
          </Link>
        </div>

        {/* Related links */}
        {jsxPost.relatedLinks.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-display font-bold text-lg text-brand-navy mb-3">Related</h2>
            <ul className="space-y-2 text-sm">
              {jsxPost.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-gold hover:text-amber-600">
                    {link.label} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <FinancialDisclaimer />
      </article>
    </>
  );
}
