export interface CardInfo {
  name: string;
  bank: string;
  isBusiness: boolean;
}

export const popularCards: CardInfo[] = [
  // Chase
  { name: 'Chase Sapphire Preferred', bank: 'Chase', isBusiness: false },
  { name: 'Chase Sapphire Reserve', bank: 'Chase', isBusiness: false },
  { name: 'Chase Freedom Flex', bank: 'Chase', isBusiness: false },
  { name: 'Chase Freedom Unlimited', bank: 'Chase', isBusiness: false },
  { name: 'Chase Freedom Rise', bank: 'Chase', isBusiness: false },
  { name: 'Chase Ink Business Preferred', bank: 'Chase', isBusiness: true },
  { name: 'Chase Ink Business Cash', bank: 'Chase', isBusiness: true },
  { name: 'Chase Ink Business Unlimited', bank: 'Chase', isBusiness: true },
  { name: 'Chase Southwest Rapid Rewards Plus', bank: 'Chase', isBusiness: false },
  { name: 'Chase Southwest Performance Business', bank: 'Chase', isBusiness: true },
  { name: 'Chase United Explorer', bank: 'Chase', isBusiness: false },
  { name: 'Chase United Quest', bank: 'Chase', isBusiness: false },
  { name: 'Chase British Airways', bank: 'Chase', isBusiness: false },
  { name: 'Chase Marriott Bonvoy Boundless', bank: 'Chase', isBusiness: false },
  { name: 'Chase World of Hyatt', bank: 'Chase', isBusiness: false },
  { name: 'Chase Amazon Prime Rewards', bank: 'Chase', isBusiness: false },
  { name: 'Chase IHG One Rewards Premier', bank: 'Chase', isBusiness: false },

  // American Express
  { name: 'Amex Platinum', bank: 'American Express', isBusiness: false },
  { name: 'Amex Gold', bank: 'American Express', isBusiness: false },
  { name: 'Amex Green', bank: 'American Express', isBusiness: false },
  { name: 'Amex Blue Cash Preferred', bank: 'American Express', isBusiness: false },
  { name: 'Amex Blue Cash Everyday', bank: 'American Express', isBusiness: false },
  { name: 'Amex Delta SkyMiles Gold', bank: 'American Express', isBusiness: false },
  { name: 'Amex Delta SkyMiles Platinum', bank: 'American Express', isBusiness: false },
  { name: 'Amex Delta SkyMiles Reserve', bank: 'American Express', isBusiness: false },
  { name: 'Amex Hilton Honors', bank: 'American Express', isBusiness: false },
  { name: 'Amex Hilton Surpass', bank: 'American Express', isBusiness: false },
  { name: 'Amex Hilton Aspire', bank: 'American Express', isBusiness: false },
  { name: 'Amex Marriott Bonvoy Brilliant', bank: 'American Express', isBusiness: false },
  { name: 'Amex Business Platinum', bank: 'American Express', isBusiness: true },
  { name: 'Amex Business Gold', bank: 'American Express', isBusiness: true },
  { name: 'Amex Blue Business Plus', bank: 'American Express', isBusiness: true },
  { name: 'Amex Amazon Business Prime', bank: 'American Express', isBusiness: true },

  // Citi
  { name: 'Citi Premier', bank: 'Citi', isBusiness: false },
  { name: 'Citi Double Cash', bank: 'Citi', isBusiness: false },
  { name: 'Citi Custom Cash', bank: 'Citi', isBusiness: false },
  { name: 'Citi Strata Premier', bank: 'Citi', isBusiness: false },
  { name: 'Citi AA Platinum Select', bank: 'Citi', isBusiness: false },
  { name: 'Citi Prestige', bank: 'Citi', isBusiness: false },

  // Bank of America
  { name: 'BoA Premium Rewards', bank: 'Bank of America', isBusiness: false },
  { name: 'BoA Premium Rewards Elite', bank: 'Bank of America', isBusiness: false },
  { name: 'BoA Customized Cash Rewards', bank: 'Bank of America', isBusiness: false },
  { name: 'BoA Travel Rewards', bank: 'Bank of America', isBusiness: false },
  { name: 'BoA Alaska Airlines', bank: 'Bank of America', isBusiness: false },
  { name: 'BoA United Airlines', bank: 'Bank of America', isBusiness: false },

  // Capital One
  { name: 'Capital One Venture X', bank: 'Capital One', isBusiness: false },
  { name: 'Capital One Venture', bank: 'Capital One', isBusiness: false },
  { name: 'Capital One SavorOne', bank: 'Capital One', isBusiness: false },
  { name: 'Capital One Quicksilver', bank: 'Capital One', isBusiness: false },
  { name: 'Capital One Spark Cash Plus', bank: 'Capital One', isBusiness: true },

  // Discover
  { name: 'Discover it Cash Back', bank: 'Discover', isBusiness: false },
  { name: 'Discover it Miles', bank: 'Discover', isBusiness: false },

  // US Bank
  { name: 'US Bank Altitude Reserve', bank: 'US Bank', isBusiness: false },
  { name: 'US Bank Altitude Go', bank: 'US Bank', isBusiness: false },
  { name: 'US Bank Cash+', bank: 'US Bank', isBusiness: false },

  // Barclays
  { name: 'Barclays AAdvantage Aviator Red', bank: 'Barclays', isBusiness: false },
  { name: 'Barclays Wyndham Rewards Earner Plus', bank: 'Barclays', isBusiness: false },
];

export function searchCards(query: string): CardInfo[] {
  const lower = query.toLowerCase();
  return popularCards.filter(
    (card) =>
      card.name.toLowerCase().includes(lower) ||
      card.bank.toLowerCase().includes(lower)
  );
}
