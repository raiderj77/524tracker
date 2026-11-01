/**
 * Card outbound-link configuration for 524Tracker.
 *
 * Two layers:
 *  1. Issuer public application/info pages (below). These are the default
 *     destinations and carry no tracking and no commission.
 *  2. Affiliate network URLs, supplied per card through environment
 *     variables named NEXT_PUBLIC_AFFILIATE_<SLUG>, where <SLUG> is the
 *     card slug uppercased with dashes replaced by underscores
 *     (for example NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED).
 *
 * Activation is configuration, not a code change: after an affiliate
 * program approves the site, paste the network-provided link for each
 * card into the matching environment variable and redeploy. Any card
 * without a configured affiliate URL keeps linking to the issuer page.
 * Only paste URLs issued by the affiliate network for that card; never
 * hand-build or shorten a network URL.
 */

const issuerUrls: Record<string, string> = {
  // Chase
  'chase-sapphire-preferred': 'https://creditcards.chase.com/travel-credit-cards/sapphire/preferred',
  'chase-sapphire-reserve': 'https://creditcards.chase.com/travel-credit-cards/sapphire/reserve',
  'chase-ink-business-preferred': 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
  'ink-business-preferred': 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
  'chase-freedom-flex': 'https://creditcards.chase.com/cash-back-credit-cards/freedom/flex',
  'chase-freedom-unlimited': 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
  'chase-united-explorer': 'https://creditcards.chase.com/travel-credit-cards/united/explorer',
  'chase-world-of-hyatt': 'https://creditcards.chase.com/travel-credit-cards/world-of-hyatt',

  // Amex
  'amex-platinum': 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
  'amex-gold': 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
  'amex-green': 'https://www.americanexpress.com/us/credit-cards/card/green/',
  'amex-blue-cash-preferred': 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/',
  'amex-business-platinum': 'https://www.americanexpress.com/us/credit-cards/business/business-charge-cards/american-express-business-platinum-card-amex/',
  'amex-business-gold': 'https://www.americanexpress.com/us/credit-cards/business/business-charge-cards/american-express-business-gold-card-amex/',
  'amex-hilton-aspire': 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/',
  'amex-marriott-brilliant': 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/',

  // Capital One
  'capital-one-venture-x': 'https://www.capitalone.com/credit-cards/venture-x/',
  'capital-one-venture': 'https://www.capitalone.com/credit-cards/venture/',
  'capital-one-savorone': 'https://www.capitalone.com/credit-cards/savorone-dining-rewards/',
  'capital-one-savor': 'https://www.capitalone.com/credit-cards/savor-dining-rewards/',

  // Citi
  'citi-strata-premier': 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card',
  'citi-premier': 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card',
  'citi-double-cash': 'https://www.citi.com/credit-cards/citi-double-cash-credit-card',
  'citi-custom-cash': 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card',
  'costco-anywhere-visa': 'https://www.citi.com/credit-cards/citi-costco-anywhere-visa-credit-card',

  // Discover
  'discover-it-cash-back': 'https://www.discover.com/credit-cards/cash-back/',

  // US Bank
  'us-bank-altitude-connect': 'https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html',

  // Fallbacks
  'compare': '/card-value-calculator',
};

/**
 * Affiliate URL overrides from the environment. Next.js only inlines
 * statically referenced NEXT_PUBLIC_* variables, so each supported slug
 * is listed explicitly. Values are read on every call so tests and
 * server rendering see the current environment.
 */
function affiliateOverrides(): Record<string, string | undefined> {
  return {
    'chase-sapphire-preferred': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_PREFERRED,
    'chase-sapphire-reserve': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_SAPPHIRE_RESERVE,
    'chase-ink-business-preferred': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_INK_BUSINESS_PREFERRED,
    'chase-freedom-flex': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_FREEDOM_FLEX,
    'chase-freedom-unlimited': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_FREEDOM_UNLIMITED,
    'chase-united-explorer': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_UNITED_EXPLORER,
    'chase-world-of-hyatt': process.env.NEXT_PUBLIC_AFFILIATE_CHASE_WORLD_OF_HYATT,
    'amex-platinum': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_PLATINUM,
    'amex-gold': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_GOLD,
    'amex-blue-cash-preferred': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_BLUE_CASH_PREFERRED,
    'amex-business-platinum': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_BUSINESS_PLATINUM,
    'amex-hilton-aspire': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_HILTON_ASPIRE,
    'amex-marriott-brilliant': process.env.NEXT_PUBLIC_AFFILIATE_AMEX_MARRIOTT_BRILLIANT,
    'capital-one-venture-x': process.env.NEXT_PUBLIC_AFFILIATE_CAPITAL_ONE_VENTURE_X,
    'capital-one-venture': process.env.NEXT_PUBLIC_AFFILIATE_CAPITAL_ONE_VENTURE,
    'capital-one-savorone': process.env.NEXT_PUBLIC_AFFILIATE_CAPITAL_ONE_SAVORONE,
    'citi-strata-premier': process.env.NEXT_PUBLIC_AFFILIATE_CITI_STRATA_PREMIER,
    'citi-double-cash': process.env.NEXT_PUBLIC_AFFILIATE_CITI_DOUBLE_CASH,
    'citi-custom-cash': process.env.NEXT_PUBLIC_AFFILIATE_CITI_CUSTOM_CASH,
    'discover-it-cash-back': process.env.NEXT_PUBLIC_AFFILIATE_DISCOVER_IT_CASH_BACK,
  };
}

export interface CardLink {
  slug: string;
  url: string;
  /** True when the destination is a configured affiliate network URL. */
  isAffiliate: boolean;
}

/**
 * Resolve the outbound link for a card slug. A configured affiliate URL
 * (absolute https) wins; otherwise the issuer page (no commission);
 * otherwise the internal comparison tool.
 */
export function getCardLink(slug: string): CardLink {
  const override = affiliateOverrides()[slug]?.trim();
  if (override && /^https:\/\/\S+$/.test(override)) {
    return { slug, url: override, isAffiliate: true };
  }
  const issuer = issuerUrls[slug];
  if (issuer) {
    return { slug, url: issuer, isAffiliate: false };
  }
  return { slug, url: '/card-value-calculator', isAffiliate: false };
}

/** True when at least one card has a configured affiliate URL. */
export function anyAffiliateConfigured(): boolean {
  return Object.values(affiliateOverrides()).some(
    (value) => typeof value === 'string' && /^https:\/\/\S+$/.test(value.trim())
  );
}

/**
 * Backwards-compatible helper returning just the URL. Prefer getCardLink
 * in new code so affiliate destinations get the required rel attributes
 * and disclosure treatment.
 */
export function getAffiliateUrl(slug: string): string {
  return getCardLink(slug).url;
}

export interface OfferCard {
  slug: string;
  name: string;
  bank: string;
  /** Generic product category only - never a term, rate, or bonus claim. */
  category: string;
}

/**
 * Cards shown in the offer modules. The labels describe only the broad
 * product category. Current offers, rates, fees, and bonuses live on the
 * issuer's page and are deliberately not restated here.
 */
export const offerCardsUnder524: OfferCard[] = [
  { slug: 'chase-sapphire-preferred', name: 'Chase Sapphire Preferred', bank: 'Chase', category: 'Travel rewards' },
  { slug: 'chase-freedom-flex', name: 'Chase Freedom Flex', bank: 'Chase', category: 'Cash back' },
  { slug: 'chase-ink-business-preferred', name: 'Chase Ink Business Preferred', bank: 'Chase', category: 'Business travel' },
  { slug: 'amex-gold', name: 'Amex Gold', bank: 'American Express', category: 'Dining and travel' },
  { slug: 'capital-one-venture-x', name: 'Capital One Venture X', bank: 'Capital One', category: 'Travel rewards' },
];

/** Non-Chase issuers, for readers at or over the 5/24 reference count. */
export const offerCardsOver524: OfferCard[] = [
  { slug: 'amex-gold', name: 'Amex Gold', bank: 'American Express', category: 'Dining and travel' },
  { slug: 'amex-blue-cash-preferred', name: 'Amex Blue Cash Preferred', bank: 'American Express', category: 'Cash back' },
  { slug: 'capital-one-venture-x', name: 'Capital One Venture X', bank: 'Capital One', category: 'Travel rewards' },
  { slug: 'citi-strata-premier', name: 'Citi Strata Premier', bank: 'Citi', category: 'Travel rewards' },
  { slug: 'discover-it-cash-back', name: 'Discover it Cash Back', bank: 'Discover', category: 'Cash back' },
];

/** General comparison list for the card value calculator. */
export const offerCardsCompare: OfferCard[] = [
  { slug: 'chase-sapphire-preferred', name: 'Chase Sapphire Preferred', bank: 'Chase', category: 'Travel rewards' },
  { slug: 'amex-platinum', name: 'Amex Platinum', bank: 'American Express', category: 'Premium travel' },
  { slug: 'capital-one-venture-x', name: 'Capital One Venture X', bank: 'Capital One', category: 'Travel rewards' },
  { slug: 'citi-double-cash', name: 'Citi Double Cash', bank: 'Citi', category: 'Cash back' },
  { slug: 'discover-it-cash-back', name: 'Discover it Cash Back', bank: 'Discover', category: 'Cash back' },
];

export default issuerUrls;
