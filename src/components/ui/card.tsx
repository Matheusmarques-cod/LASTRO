import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border bg-surface p-5",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-lg font-medium tracking-tight text-fg text-balance",
        className,
      )}
      {...props}
    />
  );
}

export function CardHint({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted text-pretty", className)} {...props} />
  );
}
