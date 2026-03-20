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
    'max-snippet': -1,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />
        <Script
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="lazyOnload"
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
