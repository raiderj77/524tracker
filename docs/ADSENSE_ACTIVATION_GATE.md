# AdSense activation gate

Status: **blocked by architecture and external account verification**. AdSense, analytics, and the consent platform must remain disabled by repository defaults.

## Why the current CSP is not an activation-ready claim

The site currently preserves static rendering and CDN-cacheable pages by setting a fixed Content Security Policy in `next.config.ts`. That policy is adequate for the fail-closed site state, where third-party scripts are not loaded, but it must not be treated as proof that future AdSense serving will work.

Google's current AdSense guidance says that publishers who use CSP should use a strict nonce CSP because advertising domains change. Google warns that an unsupported or stale policy can disrupt ad serving:

- https://support.google.com/adsense/answer/16283098?hl=en

Next.js 16 documents a request-specific nonce through `proxy.ts`. The nonce pattern forces dynamic rendering for affected pages, disables static optimization and ordinary CDN caching, increases server work, and is incompatible with Partial Prerendering:

- https://nextjs.org/docs/app/guides/content-security-policy

Adding that architecture only to appear "ready" would create a material performance, cost, and deployment change before the AdSense and consent accounts are independently verified. It is therefore intentionally not enabled in this remediation.

## Required owner and implementation decision before activation

1. Verify the AdSense account and site are approved to serve, and verify the consent-platform account/configuration.
2. Choose a hosting-supported dynamic nonce architecture and accept the loss of static optimization, or obtain a reviewed alternative that Google explicitly supports for AdSense.
3. Generate a cryptographically unpredictable nonce for every HTML request in `src/proxy.ts`, set it on both request and response CSP headers, and read/pass it to every first- and third-party `Script` component.
4. Keep production `script-src` aligned with Google's strict CSP guidance. Do not copy a static nonce into source or an environment variable.
5. Start with `Content-Security-Policy-Report-Only`, inspect violations on every maintained route and consent state, then enforce only after the report is clean.
6. Test consent denied, consent granted, Global Privacy Control, analytics-only, ads-only, and combined states. Confirm no script loads before the applicable consent.
7. Re-run desktop/mobile accessibility, metadata, schema, performance, and no-overflow checks after dynamic rendering is introduced.
8. Enable account-readiness and serving flags only after the owner approves the verified production evidence.

Until every step is complete, `NEXT_PUBLIC_CONSENT_PLATFORM_ENABLED`, `NEXT_PUBLIC_ANALYTICS_ENABLED`, `NEXT_PUBLIC_ADSENSE_ACCOUNT_READY`, and `NEXT_PUBLIC_ADSENSE_ENABLED` remain `false` in `.env.example`. The publisher ID and `ads.txt` ownership record do not prove account approval or active serving.
