import { NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY;
const HOST = 'https://524tracker.com';

const ALL_URLS = [
  '',
  '/rules-guide',
  '/chase-524',
  '/card-value-calculator',
  '/faq',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
  '/card-tracker',
  '/spend-tracker',
  '/application-flowchart',
  '/velocity-checker',
  '/annual-fee-calculator',
  '/application-timing',
  '/amex-popup-estimator',
  '/downgrade-guide',
  '/credit-pull-database',
  '/credit-pull-database/analysis',
  '/methodology',
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
