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
