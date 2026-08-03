import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

const config = read('next.config.ts');
const layout = read('src/app/layout.tsx');
const sitemap = read('src/app/sitemap.ts');
const header = read('src/components/Header.tsx');
const footer = read('src/components/Footer.tsx');
const notice = read('src/components/PracticeNotice.tsx');
const answerBlock = read('src/components/AnswerBlock.tsx');
const tracker = read('src/components/TrackerTool.tsx');
const trackerMath = read('src/lib/tracker.ts');
const dateMath = read('src/lib/dateMath.ts');
const metadataHelper = read('src/lib/siteMetadata.ts');
const spend = read('src/components/SpendTrackerTool.tsx');
const cardValue = read('src/app/card-value-calculator/page.tsx');
const editorialPolicy = read('src/app/editorial-policy/page.tsx');
const rulesGuide = read('src/app/rules-guide/page.tsx');
const privacy = read('src/app/privacy/page.tsx');
const indexNow = read('src/app/api/indexnow/route.ts');
const submissionRoute = read('src/app/api/submit-data-point/route.ts');
const printButton = read('src/components/PrintResultsButton.tsx');
const styles = read('src/app/globals.css');
const indexNowWorkflow = read('.github/workflows/indexnow.yml');

const retiredRoutes = [
  ['/blog/:path*', '/rules-guide'],
  ['/top-cards', '/card-value-calculator'],
  ['/best-cards-by-category', '/card-value-calculator'],
  ['/card-tracker', '/'],
  ['/application-flowchart', '/card-value-calculator'],
  ['/velocity-checker', '/rules-guide'],
  ['/annual-fee-calculator', '/card-value-calculator'],
  ['/application-timing', '/rules-guide'],
  ['/amex-popup-estimator', '/rules-guide'],
  ['/downgrade-guide', '/card-value-calculator'],
  ['/credit-pull-database', '/methodology'],
  ['/inquiry-tracker', '/rules-guide'],
  ['/points-value-calculator', '/card-value-calculator'],
];

for (const [source, destination] of retiredRoutes) {
  assert.ok(
    config.includes(`source: '${source}'`) && config.includes(`destination: '${destination}'`),
    `Missing redirect for unsupported route ${source}`
  );
}

assert.doesNotMatch(
  sitemap,
  /\/blog|top-cards|best-cards-by-category|card-tracker|application-flowchart|velocity-checker|annual-fee-calculator|application-timing|amex-popup-estimator|downgrade-guide|credit-pull-database|inquiry-tracker|points-value-calculator/
);
assert.doesNotMatch(header + footer, /\/blog|top-cards|best-cards-by-category|card-tracker|velocity-checker|inquiry-tracker/);
assert.doesNotMatch(footer, /fibertools|mindchecktools|flipmycase|creatorrevenuecalculator|contractextract|medicalbillreader/i);

assert.match(notice, /community-observed/i);
assert.match(notice, /not.*published|does not publish/is);
assert.match(notice, /not.*eligibility|cannot determine eligibility/is);
assert.match(layout, /<PracticeNotice \/>/);
assert.match(answerBlock, /`\$\{lastUpdated\}T00:00:00`/);
assert.doesNotMatch(answerBlock, /new Date\(lastUpdated\)/);
assert.doesNotMatch(layout, /SearchAction|new Date\(\).*dateModified/);
assert.equal((layout.match(/'@type': 'WebApplication'/g) ?? []).length, 0);
assert.match(metadataHelper, /images:\s*\[image\]/);
assert.match(metadataHelper, /twitter:/);
assert.match(layout, /NEXT_PUBLIC_CONSENT_PLATFORM_ENABLED === 'true'/);
assert.match(layout, /NEXT_PUBLIC_ADSENSE_ACCOUNT_READY === 'true'/);
assert.match(layout, /NEXT_PUBLIC_ADSENSE_ENABLED === 'true'/);
assert.match(layout, /NEXT_PUBLIC_ANALYTICS_ENABLED === 'true'/);
assert.match(layout, /data-cookieconsent="marketing"/);
assert.match(layout, /data-cookieconsent="statistics"/);
assert.doesNotMatch(layout, /microsoft-clarity|clarity\.ms/);
assert.match(config, /process\.env\.NODE_ENV === 'production'/);
assert.match(config, /upgrade-insecure-requests/);
assert.match(config, /allowedDevOrigins: \['127\.0\.0\.1'\]/);

assert.match(tracker, /Unofficial 5\/24 Reference Count/);
assert.match(tracker, /isAuthorizedUser/);
assert.match(tracker, /reportsToPersonalCredit/);
assert.match(tracker, /Appears on my personal credit report/);
assert.match(tracker, /get524ReferenceDate/);
assert.match(tracker, /useState<CardApplication\[]>\(loadApplications\)/);
assert.match(tracker, /useSyncExternalStore/);
assert.doesNotMatch(tracker, /setApplications\(loadApplications\(\)\)/);
assert.match(tracker, /role="combobox"/);
assert.match(tracker, /aria-activedescendant/);
assert.match(tracker, /event\.key === 'ArrowDown'/);
assert.doesNotMatch(tracker, /opacity-0 group-hover:opacity-100/);
assert.doesNotMatch(tracker, /\{count\}\/24|You can open|Chase will likely deny|Eligible for Bonus|Ineligible/);
assert.doesNotMatch(tracker, /HardInquiryTracker|Hard Inquiry Tracker|Upcoming Annual Fees|Amex Bonus Tracker/);
assert.match(tracker, /cannot determine eligibility/);
assert.match(tracker, /flex min-h-\[44px\] flex-wrap items-center gap-x-4 gap-y-2/);
assert.match(tracker, /flex flex-wrap items-center gap-2/);

assert.match(trackerMath, /cardOpenDate \|\| app\.applicationDate/);
assert.match(trackerMath, /reportsToPersonalCredit !== true/);
assert.match(trackerMath, /shiftCalendarMonths\(now, -24\)/);
assert.match(trackerMath, /parseStoredApplications/);
assert.match(trackerMath, /escapeCSVCell/);
assert.doesNotMatch(trackerMath, /730|Eligible again|— eligible\./);
assert.match(dateMath, /parseLocalDate/);
assert.match(dateMath, /Math\.min\(day, lastDay\)/);

assert.match(spend, /Exact Offer Deadline/);
assert.match(spend, /useState<SpendCard\[]>\(loadCards\)/);
assert.match(spend, /useSyncExternalStore/);
assert.doesNotMatch(spend, /setCards\(loadCards\(\)\)/);
assert.match(spend, /id="st-deadline"[\s\S]*?required/);
assert.match(spend, /id="st-minspend"[\s\S]*?min="1"/);
assert.match(spend, /name="spend-status"/);
assert.doesNotMatch(spend, /role="radio"/);
assert.doesNotMatch(spend, /addDays\(|Defaults to 90|On Track|Bonus Value at Stake|Daily Spend Needed|never sent to our servers/);
assert.match(spend, /Even Daily Pace/);
assert.match(spend, /Printing,[\s\S]*browser sync/);
assert.doesNotMatch(spend, /new Date\(\)\.toISOString\(\)\.split/);
assert.match(cardValue, /useState\(''\)/);
assert.doesNotMatch(cardValue, /useState\('0\.01'\)/);
assert.match(cardValue, /Enter your realized value/);
assert.match(cardValue, /min-w-0 flex-1/);
assert.match(cardValue, /role="status"/);
assert.match(cardValue, /aria-live="polite"/);
assert.match(cardValue, /aria-atomic="true"/);
assert.match(editorialPolicy, /role="region"/);
assert.match(editorialPolicy, /aria-label="Evidence levels table"/);
assert.match(editorialPolicy, /tabIndex=\{0\}/);
assert.match(rulesGuide, /role="region"/);
assert.match(rulesGuide, /aria-label="Credit-card application evidence table"/);
assert.match(rulesGuide, /tabIndex=\{0\}/);
assert.match(styles, /\*:focus-visible\s*\{[\s\S]*?outline:/);

assert.match(privacy, /does not intentionally transmit/);
assert.match(privacy, /print, CSV export, copy, or share/);
assert.match(privacy, /NEXT_PUBLIC_ADSENSE_ACCOUNT_READY|account-\s*readiness flag/);
assert.match(privacy, /does not by itself mean that ads are approved or[\s\S]*active/);

assert.match(indexNow, /status:\s*410/);
assert.doesNotMatch(indexNow, /fetch\s*\(/);
assert.match(indexNowWorkflow, /workflow_dispatch:/);
assert.doesNotMatch(indexNowWorkflow, /\bpush:/);
assert.match(indexNowWorkflow, /secrets\.INDEXNOW_KEY/);
assert.match(submissionRoute, /status:\s*410/);
assert.doesNotMatch(submissionRoute, /req\.json|console\.log|JSON\.stringify/);

assert.ok(existsSync(join(root, 'public', 'logo.svg')), 'Organization logo must exist');
assert.ok(existsSync(join(root, 'public', 'llms-full.txt')), 'Full AI reference must exist');
assert.ok(existsSync(join(root, 'src', 'app', 'accessibility', 'page.tsx')), 'Accessibility statement must exist');
assert.match(printButton, /window\.print\(\)/);
assert.doesNotMatch(printButton, /fetch\(|sendBeacon|localStorage|sessionStorage/);
assert.match(styles, /body:has\(\[data-printable-results\]\) \*/);

const maintainedPublicSources = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/accessibility/page.tsx',
  'src/app/card-value-calculator/page.tsx',
  'src/app/chase-524/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/editorial-policy/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/methodology/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/rules-guide/page.tsx',
  'src/app/spend-tracker/page.tsx',
  'src/app/terms/page.tsx',
  'src/components/TrackerTool.tsx',
  'src/components/SpendTrackerTool.tsx',
];
const prohibitedClaims = /will deny|automatically denied|eligible to apply|next safe date|you can open|fully eligible|ineligible for|best card|exact approval/i;
for (const file of maintainedPublicSources) {
  assert.doesNotMatch(read(file), prohibitedClaims, `Unsupported YMYL claim in ${file}`);
}

console.log('Quality gate passed: maintained surfaces are scoped, private-by-design, and evidence-labeled.');
