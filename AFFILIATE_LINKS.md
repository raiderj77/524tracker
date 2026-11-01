# Affiliate Links — 524Tracker

Updated 2026-11-01. This replaces the old `#apply-[card-slug]` placeholder
system, which no longer exists in the codebase.

## How card links work now

All outbound card links resolve through `src/lib/affiliateUrls.ts`:

- **Default:** each card links to the issuer's public application/info page.
  No tracking, no commission.
- **Affiliate mode:** after an affiliate program approves the site, paste the
  network-issued URL for a card into the environment variable
  `NEXT_PUBLIC_AFFILIATE_<SLUG>` (slug uppercased, dashes as underscores) and
  redeploy. That card's links switch to the affiliate URL everywhere, with
  `rel="nofollow sponsored noopener noreferrer"` and the on-page affiliate
  disclosure. Cards without a configured URL keep the issuer link.

Never hand-build, shorten, or guess a network URL — use only the exact link
the network issues for that card.

## Where offers appear

| Surface | Module |
|---|---|
| Tracker results (homepage), count under 5/24 | `CardOfferModule variant="slots-open"` |
| Tracker results, count at/over 5/24 | `CardOfferModule variant="over-threshold"` |
| `/rules-guide`, after the Chase 5/24 section | `CardOfferModule variant="over-threshold"` |
| `/card-value-calculator` | `CardOfferModule variant="compare"` |
| Email capture (Beehiiv, off until configured) | `SlotReminderCapture` in tracker results |

Disclosure: short-form note inside every module + full page at
`/affiliate-disclosure` (footer-linked). Card copy states no bonuses, rates,
or terms — the issuer page is the only source for current offers.

## Programs and activation steps

See `docs/AFFILIATE_PROGRAMS_2026-11-01.md` for the refreshed program ladder,
application requirements, and the owner's activation checklist (network
accounts, per-offer approvals, Beehiiv publication).
