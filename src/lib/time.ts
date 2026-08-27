export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayISO() {
  return toISODate(new Date());
}

export function parseISODate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function addDays(iso: string, days: number) {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

/** Monday of the week containing `iso` (ISO week). */
export function weekStartISO(iso = todayISO()) {
  const d = parseISODate(iso);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return toISODate(d);
}

export function formatDayLong(iso = todayISO()) {
  const d = parseISODate(iso);
  return d.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatDayShort(iso: string) {
  const d = parseISODate(iso);
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" });
}

export function monthKey(iso = todayISO()) {
  return iso.slice(0, 7);
}

export function daysUntil(iso: string) {
  const a = parseISODate(todayISO()).getTime();
  const b = parseISODate(iso).getTime();
  return Math.round((b - a) / 86400000);
}

export function nextPaydayISO(dayOfMonth: number) {
  const now = new Date();
  const day = clampDay(dayOfMonth);
  let candidate = new Date(now.getFullYear(), now.getMonth(), day);
  if (toISODate(candidate) < todayISO()) {
    candidate = new Date(now.getFullYear(), now.getMonth() + 1, day);
  }
  return toISODate(candidate);
}

function clampDay(n: number) {
  return Math.min(28, Math.max(1, Math.round(n) || 1));
}

export function formatTimer(totalSec: number) {
  const s = Math.max(0, Math.floor(totalSec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${pad(m)}:${pad(r)}`;
}

export function weekdayName(n: number) {
  return ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"][n] ?? "domingo";
}

export function addMonthsISO(iso: string, months: number) {
  const d = parseISODate(iso);
  d.setMonth(d.getMonth() + months);
  return toISODate(d);
}
