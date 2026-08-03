import type { NextConfig } from 'next';

const upgradeInsecureRequests =
  process.env.NODE_ENV === 'production' ? '; upgrade-insecure-requests' : '';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      { source: '/blog', destination: '/rules-guide', permanent: true },
      { source: '/blog/:path*', destination: '/rules-guide', permanent: true },
      { source: '/top-cards', destination: '/card-value-calculator', permanent: true },
      { source: '/best-cards-by-category', destination: '/card-value-calculator', permanent: true },
      { source: '/submit-data-point', destination: '/methodology', permanent: true },
      { source: '/card-tracker', destination: '/', permanent: true },
      { source: '/application-flowchart', destination: '/card-value-calculator', permanent: true },
      { source: '/velocity-checker', destination: '/rules-guide', permanent: true },
      { source: '/annual-fee-calculator', destination: '/card-value-calculator', permanent: true },
      { source: '/application-timing', destination: '/rules-guide', permanent: true },
      { source: '/amex-popup-estimator', destination: '/rules-guide', permanent: true },
      { source: '/downgrade-guide', destination: '/card-value-calculator', permanent: true },
      { source: '/credit-pull-database', destination: '/methodology', permanent: true },
      { source: '/credit-pull-database/analysis', destination: '/methodology', permanent: true },
      { source: '/inquiry-tracker', destination: '/rules-guide', permanent: true },
      { source: '/points-value-calculator', destination: '/card-value-calculator', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://consent.cookiebot.com https://consentcdn.cookiebot.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://adservice.google.com https://fundingchoicesmessages.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://consentcdn.cookiebot.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://fundingchoicesmessages.google.com; connect-src 'self' https://consent.cookiebot.com https://consentcdn.cookiebot.com https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://adservice.google.com https://fundingchoicesmessages.google.com; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'self'${upgradeInsecureRequests}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
