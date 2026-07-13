import type { Metadata } from 'next';
import Script from 'next/script';
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
const SITE_DATE_MODIFIED = '2026-07-12';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const consentPlatformEnabled =
    process.env.NEXT_PUBLIC_CONSENT_PLATFORM_ENABLED === 'true';
  const analyticsEnabled =
    consentPlatformEnabled && process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true';
  const adsenseEnabled =
    consentPlatformEnabled && process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Consent defaults load before the CMP and all measurement tags. */}
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
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  if (navigator.globalPrivacyControl || document.cookie.indexOf('empire_gpc=1') !== -1) {
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'personalization_storage': 'denied'
    });
  }
`,
          }}
        />
        {consentPlatformEnabled && (
          <>
            <Script
              id="Cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
              data-blockingmode="auto"
              strategy="beforeInteractive"
            />
            <Script
              id="gpc-auto-decline"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.addEventListener('CookiebotOnLoad', function () {
                    try {
                      var gpcActive = !!navigator.globalPrivacyControl ||
                        document.cookie.indexOf('empire_gpc=1') !== -1;
                      if (gpcActive && window.Cookiebot) window.Cookiebot.decline();
                    } catch (e) {}
                  });
                `,
              }}
            />
            <link rel="preconnect" href="https://consent.cookiebot.com" crossOrigin="anonymous" />
          </>
        )}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphJsonLd) }}
        />
        {adsenseEnabled && (
          <Script
            id="adsense"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
            crossOrigin="anonymous"
            strategy="lazyOnload"
            data-cookieconsent="marketing"
          />
        )}
        {analyticsEnabled && (
          <>
            <Script
              id="ga4-loader"
              src="https://www.googletagmanager.com/gtag/js?id=G-308FHNWPPQ"
              strategy="afterInteractive"
              data-cookieconsent="statistics"
            />
            <Script
              id="ga4-config"
              strategy="afterInteractive"
              data-cookieconsent="statistics"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-308FHNWPPQ', { anonymize_ip: true });`,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased font-body">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
