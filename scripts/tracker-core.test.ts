import test from 'node:test';
import assert from 'node:assert/strict';
import {
  type CardApplication,
  exportToCSV,
  get524CountOnDate,
  get524DropoffDate,
  get524Dropoffs,
  parseStoredApplications,
} from '../src/lib/tracker.ts';
import { parseLocalDate } from '../src/lib/dateMath.ts';

function application(overrides: Partial<CardApplication> = {}): CardApplication {
  return {
    id: 'card-1',
    cardName: 'Test Card',
    bank: 'Chase',
    applicationDate: '2025-08-02',
    cardOpenDate: '2025-08-02',
    status: 'approved',
    isBusinessCard: false,
    isAuthorizedUser: false,
    reportsToPersonalCredit: true,
    ...overrides,
  };
}

function ymd(date: Date): string {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}

test('5/24 classification includes only approved accounts that report as configured', () => {
  const target = parseLocalDate('2026-08-02')!;
  const applications = [
    application({ id: 'personal' }),
    application({ id: 'denied', status: 'denied' }),
    application({ id: 'pending', status: 'pending' }),
    application({ id: 'business-hidden', isBusinessCard: true, reportsToPersonalCredit: false }),
    application({ id: 'business-reported', isBusinessCard: true, reportsToPersonalCredit: true }),
    application({ id: 'authorized-user', isAuthorizedUser: true }),
  ];

  assert.equal(get524CountOnDate(applications, target, true), 3);
  assert.equal(get524CountOnDate(applications, target, false), 2);
});

test('the exact 24-month boundary is outside the reference window', () => {
  const target = parseLocalDate('2026-08-02')!;
  const applications = [
    application({ id: 'boundary', cardOpenDate: '2024-08-02' }),
    application({ id: 'inside', cardOpenDate: '2024-08-03' }),
    application({ id: 'future', cardOpenDate: '2026-08-03' }),
  ];

  assert.equal(get524CountOnDate(applications, target), 1);
});

test('dropoff dates and countAfter use calendar boundaries', () => {
  const asOf = parseLocalDate('2026-01-01')!;
  const applications = [
    application({ id: 'first', cardName: 'First', cardOpenDate: '2025-01-15' }),
    application({ id: 'second', cardName: 'Second', cardOpenDate: '2025-03-15' }),
  ];

  assert.equal(get524DropoffDate(applications, true, asOf)?.getTime(), parseLocalDate('2027-01-15')!.getTime());
  assert.deepEqual(
    get524Dropoffs(applications, true, asOf).map((entry) => ({
      cardName: entry.cardName,
      date: ymd(entry.dropoffDate),
      countAfter: entry.countAfter,
    })),
    [
      { cardName: 'First', date: '2027-01-15', countAfter: 1 },
      { cardName: 'Second', date: '2027-03-15', countAfter: 0 },
    ]
  );
});

test('stored data parser rejects corrupt or invalid entries and normalizes an older valid record', () => {
  assert.deepEqual(parseStoredApplications('{not json'), []);
  assert.deepEqual(parseStoredApplications(JSON.stringify({ id: 'not-an-array' })), []);

  const parsed = parseStoredApplications(
    JSON.stringify([
      {
        id: 'legacy-1',
        cardName: ' Legacy Card ',
        bank: 'Other',
        applicationDate: '2025-05-01',
        status: 'approved',
        isBusinessCard: false,
      },
      {
        id: 'bad-date',
        cardName: 'Bad Date',
        bank: 'Other',
        applicationDate: '2025-02-30',
        status: 'approved',
        isBusinessCard: false,
      },
    ])
  );

  assert.equal(parsed.length, 1);
  assert.equal(parsed[0].cardName, 'Legacy Card');
  assert.equal(parsed[0].isAuthorizedUser, false);
});

test('CSV export escapes quotes and neutralizes spreadsheet formulas', () => {
  const csv = exportToCSV([
    application({
      cardName: '=HYPERLINK("https://example.invalid","Quoted")',
      bank: 'Other',
    }),
  ]);

  assert.match(csv, /"'=HYPERLINK\(""https:\/\/example\.invalid"",""Quoted""\)"/);
  assert.doesNotMatch(csv.split('\n')[1], /^=/);
});
