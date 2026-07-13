import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

function sourceFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return ['.ts', '.tsx'].includes(extname(path)) ? [path] : [];
  });
}

const config = read('next.config.ts');
const layout = read('src/app/layout.tsx');
const sitemap = read('src/app/sitemap.ts');
const header = read('src/components/Header.tsx');
const llms = read('public/llms.txt');
const privacy = read('src/app/privacy/page.tsx');
const markdownLoader = read('src/lib/blog-markdown.ts');

assert.match(config, /source: '\/blog\/:path\*'.*destination: '\/rules-guide'.*permanent: true/);
assert.match(config, /source: '\/top-cards'.*destination: '\/card-value-calculator'/);
assert.match(config, /source: '\/best-cards-by-category'.*destination: '\/card-value-calculator'/);
assert.doesNotMatch(sitemap, /\/blog|top-cards|best-cards-by-category/);
assert.doesNotMatch(header, /\/blog|top-cards|best-cards-by-category/);
assert.doesNotMatch(llms, /524tracker\.com\/blog|top-cards|best-cards-by-category/);
assert.match(markdownLoader, /return \[\];/);
assert.match(markdownLoader, /return null;/);

assert.match(layout, /NEXT_PUBLIC_CONSENT_PLATFORM_ENABLED === 'true'/);
assert.match(layout, /consentPlatformEnabled && process\.env\.NEXT_PUBLIC_ADSENSE_ENABLED/);
assert.match(layout, /consentPlatformEnabled && process\.env\.NEXT_PUBLIC_ANALYTICS_ENABLED/);
assert.match(layout, /consentPlatformEnabled &&/);
assert.match(layout, /analyticsEnabled &&/);
assert.match(layout, /adsenseEnabled &&/);
assert.match(layout, /data-cookieconsent="marketing"/);
assert.match(layout, /data-cookieconsent="statistics"/);
assert.match(layout, /consent\.cookiebot\.com\/uc\.js/);
assert.doesNotMatch(layout, /microsoft-clarity|clarity\.ms/);
assert.doesNotMatch(layout, /SearchAction|new Date\(\).*dateModified/);
assert.match(privacy, /has not been approved to show AdSense ads/);
assert.match(privacy, /advertising script is currently\s+disabled/);
assert.match(privacy, /Cookiebot is also disabled/);

const ignored = [
  join('src', 'app', 'blog'),
  join('src', 'app', 'top-cards'),
  join('src', 'app', 'best-cards-by-category'),
  join('src', 'lib', 'posts.tsx'),
  join('src', 'lib', 'post'),
  join('src', 'lib', 'newPosts'),
];

for (const file of sourceFiles(join(root, 'src'))) {
  const rel = relative(root, file);
  if (ignored.some((prefix) => rel.startsWith(prefix))) continue;
  assert.doesNotMatch(
    readFileSync(file, 'utf8'),
    /(?:href|url):?\s*=*\s*[{'"]*\/blog(?:\/|['"])/,
    `Legacy blog link in ${rel}`
  );
}

console.log('Quality gate passed: quarantined content is undiscoverable and tracking is consent-controlled.');
