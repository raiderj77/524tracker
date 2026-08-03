/**
 * Strict content lint for the maintained 524Tracker surfaces.
 * Retired routes are redirected and intentionally excluded until their source
 * files can be removed in a separately reviewed cleanup.
 */

import { readFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const maintainedFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/accessibility/page.tsx',
  'src/app/card-value-calculator/layout.tsx',
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
  'src/components/AuthorAttribution.tsx',
  'src/components/FinancialDisclaimer.tsx',
  'src/components/Footer.tsx',
  'src/components/PracticeNotice.tsx',
  'src/components/SpendTrackerTool.tsx',
  'src/components/TrackerTool.tsx',
];

let failures = 0;
function fail(path, line, message) {
  console.error(`  FAIL ${relative(root, path)}:${line} - ${message}`);
  failures += 1;
}

const forbidden = [
  [/\bwill (?:be )?den(?:y|ied)\b/i, 'Predicts a denial'],
  [/\bautomatically (?:declin|deni)/i, 'Claims an automatic issuer decision'],
  [/\bnext safe date\b/i, 'Labels a date as safe'],
  [/\bfully eligible\b|\beligible to apply\b|\byou (?:are|'re) eligible\b/i, 'Claims eligibility'],
  [/\bineligible for\b/i, 'Claims ineligibility'],
  [/\byou can (?:open|apply|get approved)\b/i, 'Directs or predicts an application outcome'],
  [/\bbest card\b/i, 'Makes an unsupported recommendation claim'],
  [/\bexact(?:ly)? (?:which|when).*issuer/i, 'Claims issuer certainty'],
  [/\bnever (?:leaves|sent|transmitted)\b/i, 'Makes an absolute data-handling promise'],
  [/\bcompletely private\b/i, 'Makes an absolute privacy promise'],
];

for (const rel of maintainedFiles) {
  const path = resolve(root, rel);
  const lines = readFileSync(path, 'utf8').split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    for (const [pattern, message] of forbidden) {
      if (pattern.test(line)) fail(path, index + 1, message);
    }

    if (/financial\s+advice/i.test(line)) {
      const context = `${lines[index - 1] ?? ''} ${line}`;
      if (!/\bnot\b|does not|cannot|isn['’]t|no personalized/i.test(context)) {
        fail(path, index + 1, 'Financial-advice wording is not clearly negated');
      }
    }
  }
}

const about = readFileSync(resolve(root, 'src/app/about/page.tsx'), 'utf8');
if (!/Jason Ramirez/.test(about)) fail(resolve(root, 'src/app/about/page.tsx'), 1, 'Public publisher identity is missing');
if (!/CADC-II[\s\S]*unrelated to credit-card underwriting or[\s\S]*financial advice/.test(about)) {
  fail(resolve(root, 'src/app/about/page.tsx'), 1, 'Public CADC-II credential is not clearly scoped as unrelated to finance');
}
if (/Salinas|homeless|storage shed|recovering addict|Social Security number:\s*\d/i.test(about)) {
  fail(resolve(root, 'src/app/about/page.tsx'), 1, 'Unnecessary sensitive personal detail remains on the trust page');
}

if (failures > 0) {
  console.error(`\n${failures} maintained-content issue(s) found.`);
  process.exit(1);
}

console.log('Content lint passed: maintained financial claims are scoped and publisher credentials are transparent.');
