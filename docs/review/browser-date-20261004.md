# Browser-local date input repair

Primary responsibility: product/accessibility engineering, with application
security and release review. Scope: the maintained homepage date organizer.
Owner direction authorizes routine fixes, exact-diff self-review and PR release.
This is not independent review or financial-professional approval.

## Evidence and cause

On October 4 Pacific / October 5 UTC, the canonical page displayed October 4 as
the default application date while both native date inputs retained
`max="2026-09-18"`. The browser rejected saving the default date. A synthetic
entry was used; no real card or customer information was accessed.

The statically rendered maximum differs from the browser's current date. React
does not guarantee patching mismatched hydration attributes. The existing
hydration signal now supplies the local date only after hydration. The initial
render is deterministic, explicit edits remain controlled, and clearing the
required date remains invalid. No stored-record migration is needed.

Primary documentation checked October 5 UTC:
https://react.dev/reference/react-dom/client/hydrateRoot (attribute mismatch and
two-pass rendering). No financial rules or promises change.

## Verification and boundaries

The regression freezes the browser at October 4, 2030 Pacific, after a real
static build on an earlier date. Before the repair, the maximum assertion failed
with the build date. After repair, date entry, exact calendar boundary,
save/reload/edit and future-date rejection pass. Tests use synthetic entries in
an isolated browser. The local build/test namespace has no host credentials,
network or home; loopback is available for the local web server. A disposable
local-font substitute is used only inside that namespace. CI builds the actual
unchanged Google font configuration.

The release audit also identified vulnerable framework/image dependencies.
Update to official Next.js/eslint-config-next 16.3.8, sharp 0.35.4 and compatible
patched transitive packages; no audit suppression or forced major downgrade.
The build-only braces dependency uses the exact previously reviewed
MIT-licensed `@dieub/braces-depth-guard@3.0.3-pn.3` artifact (source commit
305a2e4bfe324bb53c336c1b03387ee1251c926f), as in MedicalBillReader PR68.
New tests pin the artifact integrity and exercise the actual micromatch
dependency, normal patterns, excessive nesting, ASTs and option bypasses.
This is a third-party derivative, not an official braces release; maintain its
pin until an official repair is reviewed. Full npm audit now reports zero
advisories, and CI enforces the audit without suppressions.
Primary release records checked October 5 UTC:
https://github.com/vercel/next.js/releases/tag/v16.3.8
https://github.com/lovell/sharp/releases/tag/v0.35.4
https://github.com/advisories/GHSA-2v37-7h3g-55p8

Privacy: browser-local entries, analytics/consent holds and all existing server
submission denials remain. No advertising, billing, external communications or
paid calls. Revenue and conversion impact are UNKNOWN. Release acceptance
requires exact-head checks and the canonical deployment; tests alone are not a
production result. Rollback is the prior Vercel deployment.

## Midnight follow-up

PR14 exact head 95033672303b412a01b78e0739da5ff3c00373ee passed CI
37265494383 and merged to 0fa59cbd82464596b6470156815583b5fb8d1076.
An automated review found that submitting an untouched default after midnight
could store the new day while displaying the previous day. The merge command
was mistakenly issued in the same command batch as the review read, before the
finding was evaluated. This was a review-process error, not approval of the
finding. A follow-up replaces both submit-time clock reads with the rendered
effective date and adds an actual browser midnight regression. Future review
reads and merges must remain separate decisions. Prior CI success does not
establish coverage of this previously missing case.
