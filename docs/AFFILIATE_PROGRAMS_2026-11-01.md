# Affiliate Programs — Refreshed Ladder (2026-11-01)

Refresh of the 2026-10-24 monetization plan against current sources.
All commission and cookie figures below are **as reported by third-party
affiliate-program roundups checked 2026-11-01** — networks do not publish
most rates openly, and the binding numbers are the ones shown inside the
network at application time. Treat every figure as "verify at application,"
not as a promise.

## Ladder

| # | Program / route | Cards unlocked | Commission (reported) | Cookie | Approval bar | Who applies |
|---|---|---|---|---|---|---|
| 1 | **CJ Affiliate** (network account) | Gateway to Capital One, Amex, Citi, CreditCards.com, Bankrate offers | n/a (network) | n/a | Publisher application; finance content; tax/payout details required for payment setup | **Jason** (identity, W-9, bank) |
| 2 | Capital One via CJ | Venture X, Venture, SavorOne, Spark | $100–150 / approved card | 30 days | Manual advertiser review — checks original finance content and FTC disclosure placement | Jason, inside CJ after #1 |
| 3 | American Express via CJ | Platinum, Gold, Blue Cash Preferred, business cards | Up to $200 / approved card | 7 days | Hard — established finance content expected | Jason, inside CJ after #1 |
| 4 | Citi via CJ | Strata Premier, Double Cash, Custom Cash | $40–100 / approved card | 30 days | Advertiser review per offer | Jason, inside CJ after #1 |
| 5 | CreditCards.com / Bankrate via CJ | Marketplace offers (incl. some Chase cards) | $35–120 / approved card | 30–45 days | Partnership review | Jason, inside CJ after #1 |
| 6 | **FlexOffers** (network account) | Discover, Citi alternates, Credit Karma, 500+ finance offers | per offer | 10–45 days per offer | Network signup easier; per-offer approvals still apply. $100 minimum payout, net-30/60 | **Jason** (identity, tax, payout) |
| 7 | Discover via CJ or FlexOffers | Discover it Cash Back, Miles | ~$25–40+ / approved account (reports range $8–100 by product/campaign) | 10–30 days | Moderate advertiser review | Jason, inside either network |
| 8 | Credit Karma via CJ or FlexOffers | n/a (signup offer) | ~$2 / new signup (CPL) | 30 days | Easiest in the set | Jason, inside either network |
| 9 | Chase direct / CardRatings / Rakuten Advertising | Sapphire, Freedom, Ink, co-brands | $50–150 / approved card (reported) | 7–30 days | Hard / partner-only — not realistic at current traffic; revisit after network revenue exists | Jason, later |
| 10 | Rakuten Advertising (network account) | Chase and Amex offers per roundups | $50–150 / approved card (reported) | 30 days | Network + advertiser review | Jason (optional second network) |

Changes from the 2026-10-24 ladder: Capital One's reported CJ range rose
($50–100 → $100–150); Amex's CJ cookie is confirmed short (7 days);
CreditCards.com and Bankrate offers *inside CJ* were added as a more
reachable route to marketplace cards than a direct CardRatings partnership;
Rakuten Advertising was added as a second network carrying Chase/Amex.
Nothing in the Oct ladder was found shut down; the structure (CJ/FlexOffers
first, issuer-direct partnerships later) still holds.

## Order of operations for the owner

1. Apply to **CJ Affiliate** as publisher (site: 524tracker.com). Complete
   the tax and payout setup — commissions cannot be paid without it.
2. Inside CJ, apply per-offer in this order: Capital One → Citi →
   CreditCards.com → Amex → Discover (if listed) → Credit Karma.
3. Apply to **FlexOffers**; inside it, apply for Discover and Credit Karma
   if the CJ route stalls.
4. For each approved offer, copy the network-issued link into the matching
   `NEXT_PUBLIC_AFFILIATE_<SLUG>` variable in the Vercel project and
   redeploy (see `AFFILIATE_LINKS.md` for the key list). No code change.
5. Create a **Beehiiv** publication for 524Tracker plus a subscribe form,
   then set `NEXT_PUBLIC_BEEHIIV_FORM_URL` to the form URL
   (`https://subscribe-forms.beehiiv.com/v3/forms/<id>`) and redeploy to
   switch on the slot-opening reminder capture in the tracker results.

## Compliance notes baked into the build

- Module copy states no APRs, bonuses, or card terms; links are labeled
  "View current offer" and land on the issuer/network page for live terms.
- Short affiliate disclosure renders inside every offer module; the full
  disclosure is at `/affiliate-disclosure` and in the footer.
- Affiliate links carry `rel="nofollow sponsored noopener noreferrer"`;
  plain issuer links carry `noopener noreferrer`.
- Site copy avoids approval/eligibility predictions per the repo content
  lint (no "best card," no eligibility claims, no guaranteed outcomes).
