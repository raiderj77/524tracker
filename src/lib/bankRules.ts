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

/**
 * Only the site's namesake reference pattern remains active. Other issuer
 * velocity formulas were removed because generic issuer landing pages did not
 * substantiate them and their treatment can vary by product and applicant.
 * The tracker uses calendar-month math for this pattern; windowDays is retained
 * only for compatibility with the generic result shape.
 */
export const bankRules: BankRule[] = [
  {
    bank: 'Chase',
    ruleName: 'Unofficial Chase 5/24 practice',
    ruleCode: '5/24 reference',
    description:
      'Community reports describe lower approval odds for some Chase cards when five or more recently opened personal revolving accounts appear within roughly 24 months.',
    windowDays: 0,
    maxApplications: 5,
    countAllBanks: true,
    isLifetime: false,
    notes:
      'This is not a published Chase policy or approval rule. Account reporting and issuer treatment vary. Review your credit reports and current offer terms.',
    sourceUrl: 'https://www.chase.com/personal/credit-cards/cardmember-agreement',
  },
];

export function getRulesForBank(bank: string): BankRule[] {
  return bankRules.filter((rule) => rule.bank === bank);
}

export function getAllBanks(): string[] {
  return [...new Set(bankRules.map((rule) => rule.bank))];
}
