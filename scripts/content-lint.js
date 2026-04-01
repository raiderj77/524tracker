/**
 * content-lint.js — Content compliance linter for 524tracker.com
 * Scans src/**\/*.{tsx,ts} for:
 *   - Personal name exposure (site owner)
 *   - Financial advice claims (YMYL-adjacent — must include disclaimers)
 * Exit code 1 on failure, 0 on pass.
 */

import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

let failures = 0;

function fail(file, line, msg) {
  const rel = relative(ROOT, file);
  console.error(`  ❌ ${rel}:${line} — ${msg}`);
  failures++;
}

function getFiles(dir, extensions) {
  const results = [];
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------

/**
 * Check for personal name exposure.
 * The site owner's name must never appear in public content or code.
 */
function checkPersonalName(file, lines) {
  const namePattern = /\bJason\s+Ramirez\b/i;
  for (let i = 0; i < lines.length; i++) {
    if (namePattern.test(lines[i])) {
      fail(file, i + 1, "Personal name detected — never expose site owner's name");
    }
  }
}

/**
 * Check for direct financial advice claims.
 * This is a YMYL-adjacent site — the tool/site must NOT claim to provide
 * financial advice. Disclaimer language ("not financial advice",
 * "cannot provide financial advice") is required and must NOT be flagged.
 * Checks the previous line for negation to handle split-line disclaimers.
 */
function checkFinancialAdviceClaims(file, lines) {
  const advicePattern = /financial\s+advice/i;
  const negationPattern = /\b(not|never|no|cannot|can't|don't|does\s+not|is\s+not|are\s+not)\b/i;

  for (let i = 0; i < lines.length; i++) {
    if (!advicePattern.test(lines[i])) continue;

    // Check for negation on the same line or the preceding line
    const lineNegated = negationPattern.test(lines[i]);
    const prevNegated = i > 0 && negationPattern.test(lines[i - 1]);

    if (!lineNegated && !prevNegated) {
      fail(
        file,
        i + 1,
        'Financial advice claim — must include disclaimer ("not financial advice")'
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("💳 524tracker content lint\n");

const srcFiles = getFiles(resolve(ROOT, "src"), [".tsx", ".ts"]);

console.log(`  Scanning ${srcFiles.length} source files...\n`);

for (const file of srcFiles) {
  const content = readFileSync(file, "utf-8");
  const lines = content.split("\n");

  checkPersonalName(file, lines);
  checkFinancialAdviceClaims(file, lines);
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log("\n" + "=".repeat(50));
if (failures > 0) {
  console.error(`\n💥 ${failures} content issue(s) found — fix before deploying.\n`);
  process.exit(1);
} else {
  console.log("\n🎉 All content checks passed.\n");
  process.exit(0);
}
