import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      {children}
      {hint ? <span className="text-xs text-subtle">{hint}</span> : null}
    </label>
  );
}

export function CheckRow({
  checked,
  onToggle,
  label,
  hint,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-[border-color,background-color] duration-150",
        checked
          ? "border-sage/40 bg-sage/10"
          : "border-border bg-raised hover:border-fg/20",
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-150",
          checked
            ? "border-sage bg-sage text-bg"
            : "border-border bg-surface text-transparent",
        )}
        aria-hidden
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6.2L4.6 9L10 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-fg">{label}</span>
        {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
      </span>
    </button>
  );
}

export function Meter({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label?: string;
}) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <div className="flex items-baseline justify-between gap-3 text-xs">
          <span className="text-muted">{label}</span>
          <span className="tabular text-fg">{pct}%</span>
        </div>
      ) : null}
      <div className="h-1.5 overflow-hidden rounded-full bg-raised">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
