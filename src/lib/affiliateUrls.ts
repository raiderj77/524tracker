/**
 * Central map of card slugs to their public application page URLs.
 * Replace these with real affiliate network URLs (CJ Affiliate, etc.) when available.
 */
const affiliateUrls: Record<string, string> = {
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

  // US Bank
  'us-bank-altitude-connect': 'https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html',

  // Fallbacks
  'compare': '/top-cards',
};

export function getAffiliateUrl(slug: string): string {
  return affiliateUrls[slug] || `/top-cards`;
}

export default affiliateUrls;
