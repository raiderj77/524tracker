import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import {
  anyAffiliateConfigured,
  getAffiliateUrl,
  getCardLink,
  getServiceLink,
  offerCardsCompare,
  offerCardsOver524,
  offerCardsUnder524,
} from '../src/lib/affiliateUrls.ts';
import { captureConfig } from '../src/components/SlotReminderCapture.tsx';

const ENV_KEYS = [
  'NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED',
  'NEXT_PUBLIC_AFFILIATE_DISCOVER_IT_CASH_BACK',
  'NEXT_PUBLIC_CAPTURE_ENDPOINT',
  'NEXT_PUBLIC_CAPTURE_KEY',
  'NEXT_PUBLIC_AFFILIATE_WALLETHUB',
];

afterEach(() => {
  for (const key of ENV_KEYS) delete process.env[key];
});

test('falls back to the issuer page with no commission when unconfigured', () => {
  const link = getCardLink('chase-sapphire-preferred');
  assert.equal(link.isAffiliate, false);
  assert.match(link.url, /^https:\/\/creditcards\.chase\.com\//);
  assert.equal(anyAffiliateConfigured(), false);
});

test('a configured affiliate URL wins and is flagged as affiliate', () => {
  process.env.NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED =
    'https://www.cj.com/example-link?a=1';
  const link = getCardLink('chase-sapphire-preferred');
  assert.equal(link.url, 'https://www.cj.com/example-link?a=1');
  assert.equal(link.isAffiliate, true);
  assert.equal(anyAffiliateConfigured(), true);
});

test('non-https or malformed overrides are ignored', () => {
  process.env.NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED = 'http://insecure.example/x';
  assert.equal(getCardLink('chase-sapphire-preferred').isAffiliate, false);
  process.env.NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED = 'not a url';
  const link = getCardLink('chase-sapphire-preferred');
  assert.equal(link.isAffiliate, false);
  assert.match(link.url, /^https:\/\//);
});

test('unknown slugs fall back to the internal comparison tool', () => {
  const link = getCardLink('no-such-card');
  assert.equal(link.url, '/card-value-calculator');
  assert.equal(link.isAffiliate, false);
});

test('getAffiliateUrl stays consistent with getCardLink', () => {
  assert.equal(
    getAffiliateUrl('capital-one-venture-x'),
    getCardLink('capital-one-venture-x').url
  );
});

test('every offer-list slug resolves to an external issuer page', () => {
  for (const list of [offerCardsUnder524, offerCardsOver524, offerCardsCompare]) {
    for (const card of list) {
      const link = getCardLink(card.slug);
      assert.match(link.url, /^https:\/\//, `${card.slug} should resolve to an issuer URL`);
    }
  }
});

test('over-threshold list contains no Chase cards', () => {
  for (const card of offerCardsOver524) {
    assert.notEqual(card.bank, 'Chase');
  }
});

test('capture config is accepted only in the fleet-table shape', () => {
  assert.equal(captureConfig(), null);
  process.env.NEXT_PUBLIC_CAPTURE_ENDPOINT =
    'https://fkcwnxamhxtpgbdpvvjl.supabase.co/rest/v1/fleet_subscribers';
  assert.equal(captureConfig(), null);
  process.env.NEXT_PUBLIC_CAPTURE_KEY = 'sb_publishable_test';
  assert.deepEqual(captureConfig(), {
    endpoint:
      'https://fkcwnxamhxtpgbdpvvjl.supabase.co/rest/v1/fleet_subscribers',
    key: 'sb_publishable_test',
  });
  process.env.NEXT_PUBLIC_CAPTURE_ENDPOINT = 'https://example.com/form';
  assert.equal(captureConfig(), null);
});

test('wallethub service link is inert when unset or blank', () => {
  assert.equal(getServiceLink('wallethub'), null);
  process.env.NEXT_PUBLIC_AFFILIATE_WALLETHUB = '   ';
  assert.equal(getServiceLink('wallethub'), null);
});

test('wallethub service link accepts a valid https tracking URL', () => {
  process.env.NEXT_PUBLIC_AFFILIATE_WALLETHUB =
    '  https://www.tkqlhce.com/click-101918556-16959162  ';
  assert.deepEqual(getServiceLink('wallethub'), {
    slug: 'wallethub',
    url: 'https://www.tkqlhce.com/click-101918556-16959162',
    isAffiliate: true,
  });
});

test('wallethub service link rejects http and garbage values', () => {
  process.env.NEXT_PUBLIC_AFFILIATE_WALLETHUB =
    'http://www.tkqlhce.com/click-101918556-16959162';
  assert.equal(getServiceLink('wallethub'), null);
  for (const bad of [
    'not a url',
    'javascript:alert(1)',
    'https://',
    'https://has space.example/x',
    '/relative/path',
  ]) {
    process.env.NEXT_PUBLIC_AFFILIATE_WALLETHUB = bad;
    assert.equal(getServiceLink('wallethub'), null, `should reject ${bad}`);
  }
});

test('configuring wallethub leaves card links and card affiliate status unchanged', () => {
  const before = getCardLink('chase-sapphire-preferred');
  process.env.NEXT_PUBLIC_AFFILIATE_WALLETHUB =
    'https://www.tkqlhce.com/click-101918556-16959162';
  assert.deepEqual(getCardLink('chase-sapphire-preferred'), before);
  assert.equal(anyAffiliateConfigured(), false);
});
