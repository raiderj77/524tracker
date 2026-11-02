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
5. Email capture (DONE 2026-11-01, supersedes the Beehiiv plan): the
   slot-opening reminder form POSTs to `public.fleet_subscribers`
   (Supabase, PermitPulse project, insert-only). Set
   `NEXT_PUBLIC_CAPTURE_ENDPOINT` and `NEXT_PUBLIC_CAPTURE_KEY` in the
   Vercel project and redeploy to switch it on. Note: Credit Karma
   (Awin) terms allow website placement only - never put its links in
   capture emails.

## Compliance notes baked into the build

- Module copy states no APRs, bonuses, or card terms; links are labeled
  "View current offer" and land on the issuer/network page for live terms.
- Short affiliate disclosure renders inside every offer module; the full
  disclosure is at `/affiliate-disclosure` and in the footer.
- Affiliate links carry `rel="nofollow sponsored noopener noreferrer"`;
  plain issuer links carry `noopener noreferrer`.
- Site copy avoids approval/eligibility predictions per the repo content
  lint (no "best card," no eligibility claims, no guaranteed outcomes).


## CPA tier (added 2026-11-01)

Why this tier exists: the premium card offers above sit behind
per-advertiser manual reviews that weigh traffic and content history,
which is a real risk at ~700 clicks/28 days and $0 revenue. The networks
below pay per lead or signup (CPL/CPA) instead of per approved card, and
several approve at the network level. All figures are third-party-reported
(checked 2026-11-01) — verify at application, same rule as the ladder.

**Binding constraint, applied before payouts: Jason cannot do phone
calls. A network whose approval hard-requires a phone call is OUT,
regardless of rates.**

**Correction to the original candidate list: ShareASale no longer
exists as a signup.** Awin (its owner since 2017) closed the standalone
ShareASale platform on 2025-10-06 and folded every merchant and
publisher into Awin. "ShareASale" below means Awin.

| Network | Approval call | Finance fit for a 5/24 audience | Min payout / terms | Verdict |
|---|---|---|---|---|
| Awin (ex-ShareASale) | NOT REQUIRED | Strong — Credit Karma (US) runs on Awin; credit-score and loan programs | $20 min settable ($50 default), paid 1st & 15th | **Apply first** |
| ClickDealer | NOT REQUIRED | Credit cards, loans, insurance lead gen ($20–250/lead reported) | $500 standard / $100 SmartLink, monthly Net-15 | Apply second |
| MyLead | NOT REQUIRED | Loans, credit cards, crypto CPL (EU-leaning catalog) | ~€100 bank / $150 PayPal (official guide), on request | Optional third |
| MaxBounty | **REQUIRED** (human interview) | Strong but unreachable | $100, weekly after first cycle | **OUT — call** |
| Perform[cb] | **REQUIRED** (automated PIN call, per its own guide) | Finance/lead gen, premium | $50, ~Net-30 per T&Cs | **OUT — call + selective** |
| Aragon Advertising | UNCLEAR | Pay-per-call insurance/finance/legal — poor structural fit | $100, monthly Net-15 to weekly | Hold — see notes |
| Leadnomics | UNCLEAR | Insurance / mortgage-refi lead gen; weak 5/24 fit | $50, Net-7 (Affpaying) | Skip for now |

### MaxBounty — CALL REQUIRED → OUT
- Call: mandatory 5–10 minute phone interview with an affiliate manager
  is the documented approval path in every current (2026) review, and
  MaxBounty's own forum reply states "a phone interview is the only way
  to be accepted to the network." No written-only route exists.
- Offers (moot, for the record): 3,000+ campaigns; finance is a core
  vertical — credit-score/monitoring trials and loan lead gen, payouts
  reported from ~$1 (zip submit) to $200+ (finance/insurance leads).
- Payer: legitimate since 2004, Blue Book #1; $100 minimum, first cycle
  monthly Net-15, then weekly via Payoneer/Tipalti/PayPal/ACH/wire.
- Jason would supply: application + government photo ID + the call.
  The call ends it.

### Aragon Advertising — CALL UNCLEAR → hold
- Call: no source documents a mandatory phone interview. Their own
  join page (checked Oct 2026) describes human review — "a real
  affiliate manager reads it personally" — and their FAQ says replies
  come via Slack or Telegram. What would settle it: one pre-application
  email to publishers@aragon-advertising.com asking whether approval
  requires a phone call. Until answered, treat as UNCLEAR, not safe.
- Fit problem regardless: Aragon is a pay-per-call specialist — the
  conversion is the *visitor* placing a call — and its application asks
  for your existing monthly commissions with other networks. It is
  built for proven, volume publishers, not a 700-click content site.
- Payer: established since 2012; Affpaying payout rating 4.38/5 with
  mostly on-time reports and one detailed 2024 nonpayment complaint
  about call crediting. $100 minimum; Tipalti setup required after
  acceptance (commissions forfeit if not activated within 6 months,
  per their Jan 2026 terms).

### Awin (ShareASale's successor) — CALL NOT REQUIRED → apply first
- Call: none. Online application, network review in ~1–3 business
  days, then per-advertiser approvals (same two-layer shape as CJ).
- Low-traffic: no published traffic minimum. Awin requires a live site
  with real content, an accurate list of promotional properties and
  methods, tax/payment details, and a refundable $5 verification
  deposit (returned with the first payout).
- Finance fit — the best in this tier: **Credit Karma (US) runs its
  program on Awin** (30-day cookie; pays per converted member, rate
  visible inside the network) — free credit scores/monitoring is the
  exact adjacent product for a 5/24-tracking audience. Credit-score
  (Experian) and card/loan programs also list on Awin; the Experian
  profile surfaced in research is the UK program, so confirm US
  availability after joining.
- Payer: major global network (Axel Springer), pays the 1st and 15th;
  threshold defaults to $50 and can be lowered to $20 in settings —
  do that at signup.
- Jason supplies: identity/contact details, site + promotion-method
  description, tax/payment info, $5 deposit card.

### ClickDealer — CALL NOT REQUIRED → apply second
- Call: none for most applicants (2026 approval roundups); manual
  review in 1–3 business days, follow-ups in writing via the AM.
- Low-traffic: no published minimum, but reviewers weigh traffic
  sources and premium offers need separate approval — expect the
  standard catalog first.
- Finance fit: credit cards, loans, insurance lead gen; reported
  payouts $20–250 per lead. 14,000+ campaigns, DMS-owned since 2023,
  Blue Book Top 5, decade-plus on-time payment record.
- The real barrier is cash-out, not approval: **$500 minimum payout**
  on a standard account (monthly Net-15). A SmartLink-only account
  lowers it to $100. At 524Tracker's volume, earnings could sit below
  threshold for a long time — go in with eyes open.
- Jason supplies: application with honest traffic-source description,
  identity/tax/payout setup (PayPal, Payoneer, wire).

### MyLead — CALL NOT REQUIRED → optional third
- Call: none. Open self-serve signup (email + phone number for
  verification; no account review). Individual finance programs can
  still require advertiser approval.
- Finance fit: loans, credit cards, crypto; reported CPL $1–30, CPA
  $1–60+. Catalog (13,000+ programs) leans EU; US finance depth is
  thinner than Awin/ClickDealer.
- Payer: operating since 2014, Trustpilot ~3.9–4.6. Ignore the old
  "$20 minimum" figure — MyLead's current official withdrawal guide
  (Aug 2025) sets €100 for bank/Skrill/Revolut, $150 PayPal, $200
  crypto; on-request payouts, up to 14 business days standard.
  Account-closure-with-balance complaints exist, as with most
  open-signup networks — keep balances small and withdraw promptly.
- Jason supplies: registration details + payout method. Five minutes.

### Perform[cb] — CALL REQUIRED (automated) → OUT
- Call: Perform[cb]'s own published application guide makes step 2 an
  automated phone-verification call that delivers a PIN (it says the
  PIN is left on voicemail if unanswered). No human interview is
  reported anywhere — but a phone call sits in the approval path, and
  under the no-calls rule that is disqualifying. The guide may be
  legacy Clickbooth copy; nothing current contradicts it.
- Second strike: strict 5–10 business-day compliance review aimed at
  established media buyers — a poor bet at 700 clicks/28 days.
- Payer (for the record): legitimate premium network; $50 threshold,
  ~Net-30 by wire per its partner T&Cs.

### Leadnomics — CALL UNCLEAR → skip for now
- Call: undocumented either way. Their own site stresses partner
  selectivity ("we only work with those who have a reputation that
  matches our own") and the current business reads agency-first;
  the publisher network (50+ in-house offers, Affpaying) exists but
  documents no self-serve approval path. An application would settle
  the call question; the fit doesn't justify asking.
- Fit: insurance and mortgage/student-loan-refi lead gen, EPCs up to
  $5 reported — no credit-card or credit-score offers documented.
- Payer: $50 minimum, Net-7, check/wire/ACH per Affpaying; weekly
  payouts above $100/week.

## Settled: is CJ's network signup itself traffic-gated?

No — the gate Jason is worried about is not at CJ's front door. CJ's
publisher signup is a profile review: CJ's Publisher Service Agreement
sets no traffic minimum (multiple current references list CJ's traffic
minimum as "None"), and reviewers describe network approval as
straightforward for a legitimate live site with real content. The
selective layer is the second one: after joining, Jason applies to
each advertiser separately, and each advertiser approves, auto-approves,
or manually reviews publishers against its own criteria — which is
where premium finance brands weigh traffic and content history. So a
CJ account is obtainable today at 524Tracker's size; the per-offer
applications (Capital One, Amex) are the part that may say "not yet,"
and those can be re-applied to as traffic and revenue grow.
