export interface BankRule {
  bank: string;
  ruleName: string;
  ruleCode: string;
  description: string;
  windowDays: number;
  maxApplications: number;
  countAllBanks: boolean;
  isLifetime: boolean;
  notes: string;
  sourceUrl: string;
}

export const bankRules: BankRule[] = [
  // Chase
  {
    bank: 'Chase',
    ruleName: 'Chase 5/24 Rule',
    ruleCode: '5/24',
    description:
      'Chase will deny most credit card applications if you have opened 5 or more new credit accounts (from ANY bank) in the past 24 months.',
    windowDays: 730,
    maxApplications: 5,
    countAllBanks: true,
    isLifetime: false,
    notes:
      'Business cards from most banks do NOT count toward 5/24. Exceptions: Capital One business cards and some store cards DO count. Authorized user cards count but can sometimes be removed by calling Chase reconsideration.',
    sourceUrl: 'https://www.chase.com/personal/credit-cards',
  },

  // American Express
  {
    bank: 'American Express',
    ruleName: 'Amex 2/90 Rule',
    ruleCode: '2/90',
    description:
      'American Express limits approvals to a maximum of 2 personal credit cards within any rolling 90-day window.',
    windowDays: 90,
    maxApplications: 2,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This applies to personal credit cards only. Charge cards (Platinum, Gold, Green) do not count toward this limit.',
    sourceUrl: 'https://www.americanexpress.com/us/credit-cards/',
  },
  {
    bank: 'American Express',
    ruleName: 'Amex 1/5 Business Rule',
    ruleCode: '1/5',
    description:
      'American Express generally limits business card approvals to 1 every 5 days.',
    windowDays: 5,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is a soft limit and may vary. Wait at least 5 days between Amex business card applications.',
    sourceUrl: 'https://www.americanexpress.com/us/credit-cards/business/',
  },
  {
    bank: 'American Express',
    ruleName: 'Amex Lifetime Bonus Rule',
    ruleCode: 'Lifetime',
    description:
      'Each American Express card welcome bonus is available only once per lifetime per person. If you have ever received the bonus for a specific card, you cannot earn it again.',
    windowDays: 0,
    maxApplications: 0,
    countAllBanks: false,
    isLifetime: true,
    notes:
      'The lifetime language appears in the application terms. Some data points suggest the restriction resets after 7+ years, but this is not officially confirmed by Amex.',
    sourceUrl: 'https://www.americanexpress.com/us/credit-cards/',
  },
  {
    bank: 'American Express',
    ruleName: 'Amex 4 Credit Card Maximum',
    ruleCode: '4 Card Max',
    description:
      'American Express enforces a maximum of 4 personal credit cards held at any one time. Charge cards do not count toward this limit.',
    windowDays: 0,
    maxApplications: 4,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'You must close an existing Amex personal credit card before being approved for a new one if you already hold 4. Charge cards (Platinum, Gold, Green) are unlimited.',
    sourceUrl: 'https://www.americanexpress.com/us/credit-cards/',
  },
  {
    bank: 'American Express',
    ruleName: 'Amex 5 Business Credit Card Maximum',
    ruleCode: '5 Biz Max',
    description:
      'American Express enforces a maximum of 5 business credit cards held at any one time.',
    windowDays: 0,
    maxApplications: 5,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'Business charge cards do not count toward this limit.',
    sourceUrl: 'https://www.americanexpress.com/us/credit-cards/business/',
  },

  // Citi
  {
    bank: 'Citi',
    ruleName: 'Citi 1/8 Rule',
    ruleCode: '1/8',
    description:
      'Citi will deny a credit card application if you have been approved for a Citi card within the past 8 days.',
    windowDays: 8,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is the first part of the 8/65 rule. Wait at least 8 days between Citi applications.',
    sourceUrl: 'https://www.citi.com/credit-cards',
  },
  {
    bank: 'Citi',
    ruleName: 'Citi 2/65 Rule',
    ruleCode: '2/65',
    description:
      'Citi will deny a credit card application if you have been approved for 2 or more Citi cards within the past 65 days.',
    windowDays: 65,
    maxApplications: 2,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is the second part of the 8/65 rule. Combined with the 1/8 rule, space Citi applications at least 8 days apart and no more than 2 per 65 days.',
    sourceUrl: 'https://www.citi.com/credit-cards',
  },
  {
    bank: 'Citi',
    ruleName: 'Citi 24-Month Bonus Rule',
    ruleCode: '24 Month Bonus',
    description:
      'Citi welcome bonuses are not available if you currently hold the same card or have received a bonus on it (or a predecessor card) within the past 24 months.',
    windowDays: 730,
    maxApplications: 0,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'Predecessor cards count — for example, if you had the Citi Premier, you may be ineligible for its successor. Close the card and wait 24 months from the bonus posting date.',
    sourceUrl: 'https://www.citi.com/credit-cards',
  },

  // Bank of America
  {
    bank: 'Bank of America',
    ruleName: 'BoA 2/30 Rule',
    ruleCode: '2/30',
    description:
      'Bank of America limits approvals to 2 new BoA credit cards within any 30-day period.',
    windowDays: 30,
    maxApplications: 2,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is the first part of the 2/3/4 rule. Applies to Bank of America cards only.',
    sourceUrl: 'https://www.bankofamerica.com/credit-cards/',
  },
  {
    bank: 'Bank of America',
    ruleName: 'BoA 3/12 Rule',
    ruleCode: '3/12',
    description:
      'Bank of America limits approvals to 3 new BoA credit cards within any 12-month period.',
    windowDays: 365,
    maxApplications: 3,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is the second part of the 2/3/4 rule. Applies to Bank of America cards only.',
    sourceUrl: 'https://www.bankofamerica.com/credit-cards/',
  },
  {
    bank: 'Bank of America',
    ruleName: 'BoA 4/24 Rule',
    ruleCode: '4/24',
    description:
      'Bank of America limits approvals to 4 new BoA credit cards within any 24-month period.',
    windowDays: 730,
    maxApplications: 4,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is the third part of the 2/3/4 rule. Preferred Rewards customers (≥$20K balance) may have better approval odds.',
    sourceUrl: 'https://www.bankofamerica.com/credit-cards/',
  },

  // Capital One
  {
    bank: 'Capital One',
    ruleName: 'Capital One 1/6 Month Rule',
    ruleCode: '1/6 Months',
    description:
      'Capital One generally limits approvals to 1 new Capital One card per 6 months.',
    windowDays: 180,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'This is a soft guideline and not an absolute rule. Some applicants report success sooner.',
    sourceUrl: 'https://www.capitalone.com/credit-cards/',
  },
  {
    bank: 'Capital One',
    ruleName: 'Capital One 2 Card Maximum',
    ruleCode: '2 Card Max',
    description:
      'Capital One enforces a maximum of 2 personal credit cards held at any one time.',
    windowDays: 0,
    maxApplications: 2,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'You must close an existing Capital One personal card before being approved for a new one if you already hold 2. Business cards are separate.',
    sourceUrl: 'https://www.capitalone.com/credit-cards/',
  },

  // Discover
  {
    bank: 'Discover',
    ruleName: 'Discover 1 Card at a Time',
    ruleCode: '1 Card',
    description:
      'Discover only allows you to hold 1 Discover credit card at a time. You must close your existing Discover card before opening a different one.',
    windowDays: 0,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'You can product change between Discover cards, or close one and apply for a different one.',
    sourceUrl: 'https://www.discover.com/credit-cards/',
  },

  // US Bank
  {
    bank: 'US Bank',
    ruleName: 'US Bank 1/6 Month Rule',
    ruleCode: '1/6 Months',
    description:
      'US Bank generally limits approvals to approximately 1 new US Bank card per 6 months.',
    windowDays: 180,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'US Bank is known for being conservative with approvals. Having an existing banking relationship helps.',
    sourceUrl: 'https://www.usbank.com/credit-cards.html',
  },

  // Barclays
  {
    bank: 'Barclays',
    ruleName: 'Barclays 6 Month Rule',
    ruleCode: '1/6 Months',
    description:
      'Barclays generally limits approvals to 1 new Barclays card per 6 months.',
    windowDays: 180,
    maxApplications: 1,
    countAllBanks: false,
    isLifetime: false,
    notes:
      'Barclays also considers your total number of recent inquiries and new accounts across all banks.',
    sourceUrl: 'https://cards.barclaycardus.com/',
  },
];

export function getRulesForBank(bank: string): BankRule[] {
  return bankRules.filter((rule) => rule.bank === bank);
}

export function getAllBanks(): string[] {
  return [...new Set(bankRules.map((rule) => rule.bank))];
}
