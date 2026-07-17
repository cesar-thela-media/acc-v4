// Mock/demo data uses dates relative to "now" instead of fixed literals so
// upcoming events, application timestamps, etc. never silently age into the
// past as real time passes.

export function daysFromNow(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}

export function daysAgo(days: number): Date {
  return daysFromNow(-days);
}

// The monthly case consultation always runs "the first Thursday of the
// month" (per the client's literal FAQ wording) — this finds the next such
// date that's still in the future, rolling to next month if this month's
// first Thursday has already passed. weekday: 0=Sun..6=Sat.
export function nextFirstWeekdayOfMonth(weekday: number, monthsAhead = 0): Date {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth() + monthsAhead, 1);
  while (d.getDay() !== weekday) d.setDate(d.getDate() + 1);
  if (monthsAhead === 0 && d <= now) {
    return nextFirstWeekdayOfMonth(weekday, 1);
  }
  return d;
}

// "Thursday, May 1, 2026"
export function formatLongDate(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

// "May 1, 2026"
export function formatShortDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// "Apr 20, 2026"
export function formatAbbrevDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// "2026-04-20" — for sortable keys
export function formatIsoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// "Thu, Aug 6"
export function formatShortWeekdayDate(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}
