/**
 * Deployment-readiness checks for 524tracker.com.
 * These checks validate repository state only; they do not claim that an
 * advertising account, consent platform, mailbox, DNS record, or deployment
 * is active in production.
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;

const read = (path) => readFileSync(resolve(root, path), 'utf8');
const pass = (message) => console.log(`  PASS ${message}`);
const fail = (message) => {
  console.error(`  FAIL ${message}`);
  failures += 1;
};
const check = (label, condition) => (condition ? pass(label) : fail(label));

console.log('524Tracker deployment-readiness checks\n');

const ads = read('public/ads.txt');
check(
  'ads.txt has the authorized Google seller record',
  /^google\.com,\s*pub-7171402107622932,\s*DIRECT,\s*f08c47fec0942fa0$/m.test(ads)
);
check('ads.txt identifies the inventory owner', /^OWNERDOMAIN=524tracker\.com$/m.test(ads));
check('ads.txt does not make a false manager claim', !/MANAGERDOMAIN/i.test(ads));

const robots = read('public/robots.txt');
for (const crawler of ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot']) {
  check(`robots.txt addresses ${crawler}`, robots.includes(`User-agent: ${crawler}`));
}
check('robots.txt references the canonical sitemap', robots.includes('Sitemap: https://524tracker.com/sitemap.xml'));
check('robots.txt blocks API crawling', /User-agent:\s*\*[\s\S]*Disallow:\s*\/api\//i.test(robots));

const llms = read('public/llms.txt');
const llmsFull = read('public/llms-full.txt');
check('llms.txt explains the unofficial scope', /unofficial|community-observed/i.test(llms));
check('llms.txt disclaims eligibility and approval output', /does not determine eligibility|cannot determine eligibility/i.test(llms));
check('llms.txt excludes retired recommendation surfaces', !/top-cards|best-cards-by-category|credit-pull-database/i.test(llms));
check('llms.txt does not advertise the retired inquiry tracker', !/inquiry-tracker/i.test(llms));
check('llms-full.txt documents scope and evidence hierarchy', /## Scope[\s\S]*## Evidence hierarchy/.test(llmsFull));

for (const page of ['about', 'accessibility', 'contact', 'editorial-policy', 'faq', 'methodology', 'privacy', 'terms']) {
  check(`/${page} trust page exists`, existsSync(resolve(root, `src/app/${page}/page.tsx`)));
}

const footer = read('src/components/Footer.tsx');
check('footer has no reciprocal portfolio link ring', !/fibertools|mindchecktools|flipmycase|creatorrevenuecalculator|contractextract|medicalbillreader/i.test(footer));
check('footer has no external sitewide links', !/href=["'`]https?:\/\//i.test(footer));
check('footer publishes the responsible person', /Jason Ramirez/.test(footer));

const config = read('next.config.ts');
for (const header of [
  'Strict-Transport-Security',
  'X-Content-Type-Options',
  'X-Frame-Options',
  'Referrer-Policy',
  'Permissions-Policy',
  'Content-Security-Policy',
]) {
  check(`${header} is configured`, config.includes(header));
}
for (const route of [
  '/blog/:path*',
  '/top-cards',
  '/best-cards-by-category',
  '/card-tracker',
  '/application-flowchart',
  '/velocity-checker',
  '/annual-fee-calculator',
  '/application-timing',
  '/amex-popup-estimator',
  '/downgrade-guide',
  '/credit-pull-database',
  '/inquiry-tracker',
  '/points-value-calculator',
]) {
  check(`${route} is redirected away from unsupported content`, config.includes(`source: '${route}'`));
}

const layout = read('src/app/layout.tsx');
check('consent platform is opt-in', /NEXT_PUBLIC_CONSENT_PLATFORM_ENABLED === 'true'/.test(layout));
check('analytics requires consent platform', /consentPlatformEnabled && process\.env\.NEXT_PUBLIC_ANALYTICS_ENABLED/.test(layout));
check('AdSense requires account readiness', /NEXT_PUBLIC_ADSENSE_ACCOUNT_READY === 'true'/.test(layout));
check('AdSense requires a separate serving flag', /NEXT_PUBLIC_ADSENSE_ENABLED === 'true'/.test(layout));

const indexNow = read('src/app/api/indexnow/route.ts');
check('public IndexNow route is retired', /status:\s*410/.test(indexNow));
check('retired IndexNow route makes no outbound request', !/fetch\s*\(/.test(indexNow));

const indexNowWorkflow = read('.github/workflows/indexnow.yml');
check('IndexNow automation is manual-only', /workflow_dispatch:/.test(indexNowWorkflow) && !/^\s*push:/m.test(indexNowWorkflow));
check('IndexNow automation is disabled without a configured secret', /secrets\.INDEXNOW_KEY/.test(indexNowWorkflow));

const adsenseGate = read('docs/ADSENSE_ACTIVATION_GATE.md');
check('AdSense nonce-CSP architecture gate is documented', /strict nonce CSP/i.test(adsenseGate) && /remain disabled/i.test(adsenseGate));

if (failures > 0) {
  console.error(`\n${failures} deployment-readiness check(s) failed.`);
  process.exit(1);
}

console.log('\nAll repository deployment-readiness checks passed.');
