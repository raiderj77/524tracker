import { bankRules, type BankRule } from './bankRules';

export interface CardApplication {
  id: string;
  cardName: string;
  bank: string;
  applicationDate: string; // ISO date string
  status: 'approved' | 'denied' | 'pending';
  isBusinessCard: boolean;
  isAuthorizedUser?: boolean;
  amexBonusReceived?: boolean;
  annualFee?: number;
  cardOpenDate?: string; // ISO date string, defaults to applicationDate
}

export interface RuleViolation {
  rule: BankRule;
  count: number;
  max: number;
  resetDate: Date | null;
  message: string;
}

export interface BankEligibility {
  bank: string;
  rules: {
    rule: BankRule;
    violated: boolean;
    count: number;
    resetDate: Date | null;
    message: string;
  }[];
  eligible: boolean;
}

// Whether a card counts toward Chase 5/24
function countsToward524(app: CardApplication, countAuthorizedUsers: boolean): boolean {
  if (app.status !== 'approved') return false;
  if (app.isBusinessCard) return false;
  if (!countAuthorizedUsers && app.isAuthorizedUser) return false;
  return true;
}

export function get524Count(
  applications: CardApplication[],
  countAuthorizedUsers: boolean = true
): number {
  const now = new Date();
  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - 730);

  return applications.filter((app) => {
    if (!countsToward524(app, countAuthorizedUsers)) return false;
    const appDate = new Date(app.applicationDate);
    return appDate >= windowStart && appDate <= now;
  }).length;
}

export function get524DropoffDate(
  applications: CardApplication[],
  countAuthorizedUsers: boolean = true
): Date | null {
  const now = new Date();
  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - 730);

  const qualifying = applications
    .filter((app) => {
      if (!countsToward524(app, countAuthorizedUsers)) return false;
      const appDate = new Date(app.applicationDate);
      return appDate >= windowStart && appDate <= now;
    })
    .sort(
      (a, b) =>
        new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime()
    );

  if (qualifying.length === 0) return null;

  const oldest = new Date(qualifying[0].applicationDate);
  const dropoff = new Date(oldest);
  dropoff.setDate(dropoff.getDate() + 730);

  if (dropoff <= now) return null;
  return dropoff;
}

export function get524CountOnDate(
  applications: CardApplication[],
  targetDate: Date,
  countAuthorizedUsers: boolean = true
): number {
  const windowStart = new Date(targetDate);
  windowStart.setDate(windowStart.getDate() - 730);

  return applications.filter((app) => {
    if (!countsToward524(app, countAuthorizedUsers)) return false;
    const appDate = new Date(app.applicationDate);
    return appDate >= windowStart && appDate <= targetDate;
  }).length;
}

export function get524Dropoffs(
  applications: CardApplication[],
  countAuthorizedUsers: boolean = true
): { cardName: string; dropoffDate: Date; countAfter: number }[] {
  const now = new Date();
  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - 730);

  const qualifying = applications
    .filter((app) => {
      if (!countsToward524(app, countAuthorizedUsers)) return false;
      const appDate = new Date(app.applicationDate);
      return appDate >= windowStart && appDate <= now;
    })
    .sort(
      (a, b) =>
        new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime()
    );

  const dropoffs: { cardName: string; dropoffDate: Date; countAfter: number }[] = [];
  for (let i = 0; i < qualifying.length; i++) {
    const dropoffDate = new Date(qualifying[i].applicationDate);
    dropoffDate.setDate(dropoffDate.getDate() + 730);
    if (dropoffDate > now) {
      const countAfter = get524CountOnDate(applications, dropoffDate, countAuthorizedUsers);
      dropoffs.push({
        cardName: qualifying[i].cardName,
        dropoffDate,
        countAfter,
      });
    }
  }

  return dropoffs.slice(0, 5);
}

export function checkBankRule(
  applications: CardApplication[],
  rule: BankRule,
  checkDate?: Date
): { violated: boolean; count: number; resetDate: Date | null; message: string } {
  const now = checkDate || new Date();

  if (rule.isLifetime) {
    return {
      violated: false,
      count: 0,
      resetDate: null,
      message: 'Lifetime rules are tracked per-card in the Amex Bonus Tracker.',
    };
  }

  if (rule.windowDays === 0) {
    return {
      violated: false,
      count: 0,
      resetDate: null,
      message: `${rule.ruleName} — check your current card count with ${rule.bank}.`,
    };
  }

  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - rule.windowDays);

  const matching = applications.filter((app) => {
    if (app.status !== 'approved') return false;
    if (!rule.countAllBanks && app.bank !== rule.bank) return false;
    if (rule.countAllBanks && app.isBusinessCard) return false;
    const appDate = new Date(app.applicationDate);
    return appDate >= windowStart && appDate <= now;
  });

  const count = matching.length;
  const violated = count >= rule.maxApplications;

  let resetDate: Date | null = null;
  if (violated && matching.length > 0) {
    const sorted = [...matching].sort(
      (a, b) =>
        new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime()
    );
    const oldest = new Date(sorted[0].applicationDate);
    resetDate = new Date(oldest);
    resetDate.setDate(resetDate.getDate() + rule.windowDays);
  }

  const message = violated
    ? `${rule.ruleName}: ${count}/${rule.maxApplications} — limit reached. ${resetDate ? `Eligible again after ${resetDate.toLocaleDateString()}.` : ''}`
    : `${rule.ruleName}: ${count}/${rule.maxApplications} — eligible.`;

  return { violated, count, resetDate, message };
}

export function getAllViolations(applications: CardApplication[]): RuleViolation[] {
  const violations: RuleViolation[] = [];

  for (const rule of bankRules) {
    if (rule.isLifetime || rule.windowDays === 0) continue;
    const result = checkBankRule(applications, rule);
    if (result.violated) {
      violations.push({
        rule,
        count: result.count,
        max: rule.maxApplications,
        resetDate: result.resetDate,
        message: result.message,
      });
    }
  }

  return violations;
}

export function getEligibleBanks(applications: CardApplication[]): BankEligibility[] {
  const banks = [...new Set(bankRules.map((r) => r.bank))];
  const eligibilities: BankEligibility[] = [];

  for (const bank of banks) {
    const rules = bankRules
      .filter((r) => r.bank === bank && !r.isLifetime && r.windowDays > 0)
      .map((rule) => {
        const result = checkBankRule(applications, rule);
        return {
          rule,
          violated: result.violated,
          count: result.count,
          resetDate: result.resetDate,
          message: result.message,
        };
      });

    const eligible = rules.every((r) => !r.violated);
    eligibilities.push({ bank, rules, eligible });
  }

  return eligibilities;
}

export function sortByDate(applications: CardApplication[]): CardApplication[] {
  return [...applications].sort(
    (a, b) =>
      new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime()
  );
}

export function getApplicationsInWindow(
  applications: CardApplication[],
  windowDays: number,
  fromDate?: Date,
  bankFilter?: string,
  countAllBanks?: boolean
): CardApplication[] {
  const now = fromDate || new Date();
  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - windowDays);

  return applications.filter((app) => {
    if (app.status !== 'approved') return false;
    if (!countAllBanks && bankFilter && app.bank !== bankFilter) return false;
    const appDate = new Date(app.applicationDate);
    return appDate >= windowStart && appDate <= now;
  });
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function exportToCSV(applications: CardApplication[]): string {
  const headers = [
    'Card Name',
    'Bank',
    'Application Date',
    'Status',
    'Business Card',
    'Amex Bonus Received',
    'Annual Fee',
    'Card Open Date',
  ];
  const rows = sortByDate(applications).map((app) => [
    `"${app.cardName}"`,
    `"${app.bank}"`,
    app.applicationDate,
    app.status,
    app.isBusinessCard ? 'Yes' : 'No',
    app.amexBonusReceived ? 'Yes' : 'No',
    app.annualFee != null ? `$${app.annualFee}` : '',
    app.cardOpenDate || '',
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
}

export function getAnnualFeeDueDate(app: CardApplication): Date | null {
  if (app.annualFee == null || app.annualFee <= 0) return null;
  const openDate = app.cardOpenDate || app.applicationDate;
  const due = new Date(openDate + 'T00:00:00');
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  // Advance to the next anniversary that's in the future
  while (due <= now) {
    due.setFullYear(due.getFullYear() + 1);
  }
  return due;
}
