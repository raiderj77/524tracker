import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import {
  anyAffiliateConfigured,
  getAffiliateUrl,
  getCardLink,
  offerCardsCompare,
  offerCardsOver524,
  offerCardsUnder524,
} from '../src/lib/affiliateUrls.ts';
import { beehiivFormUrl } from '../src/components/SlotReminderCapture.tsx';

const ENV_KEYS = [
  'NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED',
  'NEXT_PUBLIC_AFFILIATE_DISCOVER_IT_CASH_BACK',
  'NEXT_PUBLIC_BEEHIIV_FORM_URL',
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

test('beehiiv form URL is accepted only in the subscribe-forms shape', () => {
  assert.equal(beehiivFormUrl(), null);
  process.env.NEXT_PUBLIC_BEEHIIV_FORM_URL =
    'https://subscribe-forms.beehiiv.com/v3/forms/93dec953-d143-4aec-bd65-eb8e9570c42e';
  assert.equal(
    beehiivFormUrl(),
    'https://subscribe-forms.beehiiv.com/v3/forms/93dec953-d143-4aec-bd65-eb8e9570c42e'
  );
  process.env.NEXT_PUBLIC_BEEHIIV_FORM_URL = 'https://example.com/form';
  assert.equal(beehiivFormUrl(), null);
});
