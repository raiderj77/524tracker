export type Bureau = 'Experian' | 'Equifax' | 'TransUnion';

export interface PullEntry {
  issuer: string;
  card: string;
  bureaus: Bureau[];
  notes: string;
}

export const PULL_DATA: PullEntry[] = [
  { issuer: 'Chase', card: 'Sapphire Preferred', bureaus: ['Experian'], notes: 'Most states; some states TU' },
  { issuer: 'Chase', card: 'Sapphire Reserve', bureaus: ['Experian'], notes: 'Most states; some states TU' },
  { issuer: 'Chase', card: 'Freedom Flex', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Chase', card: 'Freedom Unlimited', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Chase', card: 'Ink Preferred', bureaus: ['Experian'], notes: 'Business cards; most states' },
  { issuer: 'Chase', card: 'Ink Cash', bureaus: ['Experian'], notes: 'Business cards; most states' },
  { issuer: 'Amex', card: 'Platinum', bureaus: ['Experian'], notes: 'Soft pull for existing customers, hard for new' },
  { issuer: 'Amex', card: 'Gold', bureaus: ['Experian'], notes: 'Soft pull for existing customers' },
  { issuer: 'Amex', card: 'Blue Cash Preferred', bureaus: ['Experian'], notes: '' },
  { issuer: 'Amex', card: 'Delta SkyMiles Gold', bureaus: ['Experian'], notes: '' },
  { issuer: 'Citi', card: 'Strata Premier', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state' },
  { issuer: 'Citi', card: 'Custom Cash', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state' },
  { issuer: 'Citi', card: 'Double Cash', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state' },
  { issuer: 'BofA', card: 'Customized Cash', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state' },
  { issuer: 'BofA', card: 'Premium Rewards', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state' },
  { issuer: 'BofA', card: 'Travel Rewards', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state' },
  { issuer: 'Capital One', card: 'Venture X', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus; cannot avoid with freeze' },
  { issuer: 'Capital One', card: 'Venture', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus' },
  { issuer: 'Capital One', card: 'SavorOne', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus' },
  { issuer: 'Barclays', card: 'AAdvantage Aviator Red', bureaus: ['TransUnion'], notes: 'Primarily TU' },
  { issuer: 'Barclays', card: 'JetBlue Plus', bureaus: ['TransUnion'], notes: 'Primarily TU' },
  { issuer: 'US Bank', card: 'Altitude Reserve', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'US Bank', card: 'Cash+', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Wells Fargo', card: 'Autograph', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Wells Fargo', card: 'Autograph Journey', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Wells Fargo', card: 'Active Cash', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Discover', card: 'it Cash Back', bureaus: ['Experian'], notes: 'Most states' },
  { issuer: 'Navy Federal', card: 'More Rewards', bureaus: ['TransUnion'], notes: 'Credit union' },
  { issuer: 'PenFed', card: 'Pathfinder', bureaus: ['Equifax'], notes: 'Credit union' },
];

export const ISSUERS = ['All', 'Chase', 'Amex', 'Citi', 'BofA', 'Capital One', 'Barclays', 'US Bank', 'Wells Fargo', 'Discover', 'Navy Federal', 'PenFed'] as const;
export const BUREAUS: ('All' | Bureau)[] = ['All', 'Experian', 'Equifax', 'TransUnion'];
