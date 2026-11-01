# Affiliate activation build (2026-11-01)

Implements the 2026-10-24 monetization plan on branch
`feature/affiliate-activation-2026-11-01`. Not merged or deployed — the repo
rule is plan approval before production changes, and affiliate accounts do
not exist yet, so every link currently resolves to the issuer's public page.

**Config (`src/lib/affiliateUrls.ts`):** per-card affiliate URLs now come
from `NEXT_PUBLIC_AFFILIATE_<SLUG>` environment variables; unset cards fall
back to issuer pages with no commission. Activation after program approval
is pasting network URLs into Vercel env and redeploying — no code change.
Added Discover it Cash Back to the map. New unit tests
(`scripts/affiliate-links.test.ts`, wired into `test:core`) cover fallback,
override, malformed-value rejection, and offer-list integrity.

**Placements:** new `CardOfferModule` (variants: slots-open, over-threshold,
compare) + short-form `AffiliateDisclosure`, placed in the tracker results
state (under and over the 5/24 reference count), in `/rules-guide` after the
Chase section, and on `/card-value-calculator`. Copy states no bonuses,
rates, or terms; links land on issuer/network pages for current offers.
`/top-cards` and `/best-cards-by-category` remain permanent redirects to the
calculator, so the calculator placement covers those surfaces.

**Disclosure:** new `/affiliate-disclosure` page (plain-language FTC
disclosure), footer trust link, and sitemap entry.

**Email capture:** `SlotReminderCapture` mirrors the Creator Revenue
Calculator Beehiiv pattern — renders the subscribe-form iframe only when
`NEXT_PUBLIC_BEEHIIV_FORM_URL` matches the subscribe-forms URL shape;
otherwise renders nothing. CSP `frame-src` now allows
`subscribe-forms.beehiiv.com` so activation works the day the owner creates
the publication and sets the variable.

**Docs:** `AFFILIATE_LINKS.md` rewritten for the config system;
`docs/AFFILIATE_PROGRAMS_2026-11-01.md` carries the refreshed program ladder
(rates labeled roundup-reported, verify at application) and the owner's
activation checklist.

Validation: `npm run test:core` 20/20, `test:quality`, `lint:predeploy`, and
`lint:content` all pass; scoped `eslint src scripts` clean; `next build`
succeeds with all placements confirmed in prerendered HTML. The repo-wide
`npm run lint` step still fails on the pre-existing untracked
`.opencode/plugins/entire.ts` (tooling file, unrelated to this change).

---

# Content-depth expansion

Counts use `wc -w` on the source files, with the supplied baselines. They include markup and schema as well as visible prose. CHANGES.md did not exist before this task.

| File | Before | After | Delta |
| --- | ---: | ---: | ---: |
| src/app/spend-tracker/page.tsx | 610 | 1373 | +763 |
| src/app/card-tracker/page.tsx | 606 | 1395 | +789 |
| src/app/faq/page.tsx | 636 | 1261 | +625 |
| src/app/rules-guide/page.tsx | 755 | 1604 | +849 |
| src/app/chase-524/page.tsx | 864 | 1621 | +757 |
| CHANGES.md | New | 287 | — |

**spend-tracker:** Added a hypothetical offer calculation, refund and posting pitfalls, output interpretation, and three FAQs shared with JSON-LD. No internal links added.

**card-tracker:** Added account-counting guidance, threshold interpretation, limitations, record reconciliation, and visible FAQs matching the existing schema. Added /velocity-checker and /inquiry-tracker; added contextual links to existing /chase-524, /rules-guide, and /application-timing destinations.

**faq:** Added six substantive answers covering reference counts, business reporting, inquiries, evidence quality, retention, and tool limitations. The existing array supplies both visible answers and JSON-LD; no internal links added.

**rules-guide:** Added five issuer sections with reported counting conventions, edge cases, and record checks, plus tracker workflow guidance. Added /card-tracker, /chase-524, /velocity-checker, and /application-flowchart.

**chase-524:** Added a detailed report-reconciliation walkthrough, borderline-count discussion, and three FAQs shared with JSON-LD. Added /card-tracker, /rules-guide, /credit-pull-database, and /application-timing.

Only the five requested pages and this log were changed. Metadata titles, canonicals, existing external links, tool logic, and configuration were preserved.

Validation: `npm run lint:content` and `git diff --check` passed. `npx tsc --noEmit` could not run: dependencies are absent and npm registry DNS lookup failed (ENOTFOUND). Final status and diff statistics confirm the requested working-tree scope.
