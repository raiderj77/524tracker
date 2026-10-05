export function parseLocalDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  date.setHours(0, 0, 0, 0);
  return date;
}

export function startOfLocalDay(value: Date = new Date()): Date {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function shiftCalendarMonths(value: Date, months: number): Date {
  const date = startOfLocalDay(value);
  const day = date.getDate();

  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return date;
}

/** Count local calendar dates, independent of daylight-saving day length. */
export function calendarDaysBetween(start: Date, end: Date): number {
  const ordinal = (value: Date): number => {
    const date = new Date(0);
    date.setUTCFullYear(value.getFullYear(), value.getMonth(), value.getDate());
    date.setUTCHours(0, 0, 0, 0);
    return date.getTime() / 86400000;
  };
  return ordinal(end) - ordinal(start);
}
