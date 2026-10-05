# Calendar-day deadline repair

Approved existing business: 524tracker, `raiderj77/524tracker`, baseline
10e8d512161d1d2559ac97030e0e6b0220552348. Customer bottleneck: inaccurate
remaining-day and derived daily-pace displays across daylight saving time.
Primary responsibility: product/accessibility engineering with measurement and
privacy review. Inherits owner standing engineering/release authority, root
CLAUDE.md, docs/CLAUDE_FULL.md, Empire standards and Adler AGENTS standards.
No new project, spending, financial advice or external communication.

Actual canonical synthetic check on October 4 Pacific showed a November 4
deadline as 32 days away, rather than 31. The code divides elapsed milliseconds
between local midnights by 24 hours and rounds up. Fall-back adds an hour.
Use local year/month/day projected onto a uniform UTC calendar solely for date
subtraction; do not convert the user's date to a UTC calendar date. Apply the
same helper to the homepage reference-day display. A deadline on the current
date should say Today, not Date passed; issuer-specific cutoff time is UNKNOWN.

Source checked October 4 Pacific: MDN Date.UTC documentation,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC.
It describes UTC component construction and the special 0-99 year behavior;
the helper uses setUTCFullYear to preserve literal years.

Acceptance: synthetic browser regression before/after, calendar helper tests
across DST and reverse directions, existing core/privacy/content/lint/build
checks, exact-head PR checks and canonical deployment. Test in the existing
credential-free namespace, with disposable local font fixture only; CI builds
unchanged real fonts. No real financial records, account access, billing,
telemetry or consent changes. Only browser-local synthetic entries.

Review authority: exact-diff implementer self-review through PR, not independent
or qualified financial review. Article/keyword requirements are inapplicable.
Measured commercial outcome and conversion effect remain UNKNOWN. Preserve
existing free-tool, privacy and issuer-limitation promises. Roll back through
the prior Vercel deployment if release verification fails.

Verification: the new browser regression failed four expectations before repair
(day count, daily pace and two same-day labels). After repair, all 12 core tests
and four browser scenarios passed, including reload, edit and completion. Lint,
privacy/content checks, TypeScript and the isolated production build passed.
An initial local edit script stopped on Windows default text decoding before
component edits; UTF-8 corrected the tooling. The intervening staged-only build
still reproduced the old failure. No production mutation occurred.
React checklist self-review: pure shared arithmetic, direct import, no new hook,
network request, dependency or storage schema; existing accessible controls and
local-only persistence retained. Current remote main still matches the baseline.
