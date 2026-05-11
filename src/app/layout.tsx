import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';
import { Syne, DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 524Tracker',
    default: 'Chase 5/24 Tracker & Credit Card Rules | 524Tracker',
  },
  description:
    'Track Chase 5/24 status, Amex lifetime bonuses, Citi 8/65, and 8 more bank rules free. Know exactly which credit cards you can apply for today.',
  keywords:
    'chase 5/24 tracker, chase 5/24 calculator, amex lifetime rule, credit card application tracker, citi 8/65, churning rules',
  verification: {
    google: '-WV6T4gtpPzXxsIxh0JvtjPqnmWrbqvjX61RUy6qrSw',
    other: {
      'msvalidate.01': 'C4C9B6256BDEDED169E4DE01CA953390',
      'google-adsense-account': 'ca-pub-7171402107622932',
    },
  },
  metadataBase: new URL('https://524tracker.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Chase 5/24 Tracker & Credit Card Rules | 524Tracker',
    description:
      'Track Chase 5/24 status, Amex lifetime bonuses, Citi 8/65, and 8 more bank rules free. Know exactly which credit cards you can apply for today.',
    url: 'https://524tracker.com',
    siteName: '524Tracker',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://524tracker.com',
  },
};

// Build-time stamp consumed by JSON-LD `dateModified`. Updated on every
// deploy automatically so AI Overviews / SERP rich results know the page
// graph is fresh without any manual bump.
const SITE_DATE_MODIFIED = new Date().toISOString().slice(0, 10);

const siteGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://524tracker.com/#org',
      name: '524 Tracker',
      url: 'https://524tracker.com',
      logo: 'https://524tracker.com/logo.png',
      description:
        'Free credit card rule tracker for Chase 5/24, Amex lifetime bonuses, Citi 8/65, and 10+ bank application rules.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://524tracker.com/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://524tracker.com/#website',
      url: 'https://524tracker.com',
      name: '524 Tracker',
      publisher: { '@id': 'https://524tracker.com/#org' },
      inLanguage: 'en-US',
      dateModified: SITE_DATE_MODIFIED,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://524tracker.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://524tracker.com/#webapp',
      name: '524 Tracker',
      url: 'https://524tracker.com',
      description:
        'Free, browser-based tracker for Chase 5/24, Amex lifetime bonus eligibility, Citi 8/65, Bank of America 2/3/4, Capital One velocity, and 10+ other credit-card application rules. All data stays in localStorage.',
      applicationCategory: 'FinanceApplication',
      applicationSubCategory: 'Credit card application rule tracker',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and HTML5 localStorage',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Chase 5/24 status calculator with rolling-window drop-offs',
        'Amex lifetime bonus eligibility check',
        'Amex 2/90 velocity tracker',
        'Citi 8/65 application spacing',
        'Bank of America 2/3/4 limit tracker',
        'Capital One 2-card limit',
        'Hard inquiry tracker per credit bureau',
        'Annual fee due-date alerts',
        'CSV export of full application history',
      ],
      publisher: { '@id': 'https://524tracker.com/#org' },
      dateModified: SITE_DATE_MODIFIED,
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const gpcHeader = headersList.get('sec-gpc') === '1';

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* CMP: Funding Choices auto-loads via AdSense for T1 sites */}
        {/* Google Consent Mode v2 — sets denied defaults before any tracking scripts load */}
        {!gpcHeader && (
          <Script
            id="consent-mode-defaults"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'personalization_storage': 'denied',
    'wait_for_update': 500
  });
`,
            }}
          />
        )}
        {/* GPC enforcement handled by middleware setting consent denied via gpcHeader */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphJsonLd) }}
        />
        <Script
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-308FHNWPPQ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-308FHNWPPQ');`,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vsqobt7va0");`,
          }}
        />
      </head>
      <body className="antialiased font-body">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
