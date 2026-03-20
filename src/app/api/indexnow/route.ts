import { NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY;
const HOST = 'https://524tracker.com';

const ALL_URLS = [
  '',
  '/rules-guide',
  '/top-cards',
  '/card-value-calculator',
  '/best-cards-by-category',
  '/faq',
  '/blog',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
  '/blog/chase-5-24-rule-explained',
  '/blog/amex-lifetime-bonus-rule-explained',
  '/blog/citi-8-65-rule-explained',
  '/blog/bank-of-america-2-3-4-rule-explained',
  '/blog/how-to-check-5-24-status',
  '/blog/chase-5-24-rule',
  '/blog/amex-once-per-lifetime-rule',
  '/blog/citi-8-65-rule',
  '/blog/best-chase-cards-under-5-24',
  '/blog/cards-that-dont-count-toward-5-24',
  '/blog/credit-card-application-order-strategy',
  '/blog/when-does-5-24-reset',
  '/blog/best-cards-after-5-24',
  '/blog/credit-card-application-strategy',
  '/blog/how-to-calculate-chase-5-24',
  '/blog/bank-of-america-2-3-4-rule',
  '/blog/amex-lifetime-bonus-rule',
  '/blog/bank-of-america-credit-card-rules',
  '/blog/credit-card-velocity-rules-explained',
  '/blog/amex-popup-jail-explained',
  '/blog/is-chase-sapphire-reserve-worth-it-2026',
  '/blog/is-amex-platinum-worth-it-2026',
  '/blog/amex-1-5-rule-2-90-rule-explained',
  '/blog/citi-application-rules-advanced',
  '/blog/capital-one-application-rules',
  '/blog/best-credit-cards-under-5-24-2026',
  '/blog/credit-card-downgrade-guide-2026',
  '/blog/which-credit-bureau-does-chase-pull',
  '/blog/barclays-us-bank-wells-fargo-application-rules',
  '/blog/amex-gold-worth-it-2026',
  '/blog/credit-card-hard-inquiry-impact',
  '/blog/optimal-credit-card-application-timing-2026',
  '/blog/bank-of-america-7-12-rule-preferred-rewards',
  '/card-tracker',
  '/spend-tracker',
  '/application-flowchart',
  '/velocity-checker',
  '/annual-fee-calculator',
  '/application-timing',
  '/amex-popup-estimator',
  '/downgrade-guide',
  '/credit-pull-database',
  '/inquiry-tracker',
];

export async function POST() {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_API_KEY not configured' },
      { status: 500 }
    );
  }

  const urlList = ALL_URLS.map((path) => `${HOST}${path}`);

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: '524tracker.com',
      key: INDEXNOW_KEY,
      keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return NextResponse.json({
    status: response.status,
    submitted: urlList.length,
  });
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY ? 'configured' : 'missing',
    urls: ALL_URLS.length,
  });
}
