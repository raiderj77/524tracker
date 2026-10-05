import test from 'node:test';
import assert from 'node:assert/strict';
import { calendarDaysBetween, parseLocalDate, shiftCalendarMonths, startOfLocalDay } from '../src/lib/dateMath.ts';

function ymd(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

test('parseLocalDate rejects invalid and rollover dates', () => {
  assert.equal(parseLocalDate('2026-02-29'), null);
  assert.equal(parseLocalDate('02/28/2026'), null);
  assert.equal(ymd(parseLocalDate('2024-02-29')!), '2024-02-29');
});

test('calendar-month shifting clamps end-of-month dates', () => {
  assert.equal(ymd(shiftCalendarMonths(parseLocalDate('2025-01-31')!, 1)), '2025-02-28');
  assert.equal(ymd(shiftCalendarMonths(parseLocalDate('2024-01-31')!, 1)), '2024-02-29');
});

test('24-month reference dates use calendar months, not a fixed day count', () => {
  assert.equal(ymd(shiftCalendarMonths(parseLocalDate('2024-02-29')!, 24)), '2026-02-28');
  assert.equal(ymd(shiftCalendarMonths(parseLocalDate('2024-08-02')!, 24)), '2026-08-02');
});

test('startOfLocalDay removes time without changing the local date', () => {
  const result = startOfLocalDay(new Date(2026, 7, 2, 23, 45, 12));
  assert.equal(ymd(result), '2026-08-02');
  assert.equal(result.getHours(), 0);
  assert.equal(result.getMinutes(), 0);
});

test('calendar-day distances ignore DST, time of day and direction', () => {
  const originalTZ = process.env.TZ;
  try {
    for (const zone of ['UTC', 'America/Los_Angeles', 'Australia/Lord_Howe']) {
      process.env.TZ = zone;
      for (const [start, end, expected] of [
        [new Date(2026, 9, 4, 23), new Date(2026, 10, 4, 1), 31],
        [new Date(2026, 2, 7, 23), new Date(2026, 2, 9, 1), 2],
        [new Date(2026, 3, 4), new Date(2026, 3, 6), 2],
        [new Date(2026, 9, 4, 1), new Date(2026, 9, 4, 23), 0],
      ] as const) {
        assert.equal(calendarDaysBetween(start, end), expected, zone);
        assert.equal(calendarDaysBetween(end, start), expected === 0 ? 0 : -expected, zone);
      }
    }
    const ancient = new Date(0);
    ancient.setFullYear(99, 11, 31);
    const next = new Date(ancient);
    next.setDate(next.getDate() + 1);
    assert.equal(calendarDaysBetween(ancient, next), 1);
  } finally {
    if (originalTZ === undefined) delete process.env.TZ;
    else process.env.TZ = originalTZ;
  }
});
