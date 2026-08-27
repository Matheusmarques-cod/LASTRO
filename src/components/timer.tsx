import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLastro } from "@/lib/store";
import { formatTimer, todayISO } from "@/lib/time";
import { Pause, Play, RotateCcw } from "lucide-react";

function beep() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 528;
    gain.gain.value = 0.04;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);
    osc.stop(ctx.currentTime + 0.72);
  } catch {
    /* ignore */
  }
}

export function SprintTimer() {
  const timer = useLastro((s) => s.timer);
  const oneThing = useLastro((s) => s.oneThing[todayISO()]?.text ?? "");
  const start = useLastro((s) => s.startTimer);
  const pause = useLastro((s) => s.pauseTimer);
  const tick = useLastro((s) => s.tickTimer);
  const complete = useLastro((s) => s.completeSprint);
  const skip = useLastro((s) => s.skipTimer);
  const setMode = useLastro((s) => s.setTimerMode);
  const setLabel = useLastro((s) => s.setTimerLabel);
  const completing = useRef(false);

  useEffect(() => {
    if (!timer.running) return;
    const id = window.setInterval(() => {
      const done = tick(Date.now());
      if (done && !completing.current) {
        completing.current = true;
        beep();
        complete();
        completing.current = false;
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [timer.running, tick, complete]);

  const remaining = timer.running
    ? Math.max(0, Math.round(((timer.endsAt ?? Date.now()) - Date.now()) / 1000))
    : timer.remainingSec;
  const total = timer.mode * 60;
  const pct = Math.min(100, ((total - remaining) / total) * 100);

  return (
    <section className="rounded-3xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Sprint
        </p>
        <div className="flex rounded-full bg-raised p-1">
          {([25, 50] as const).map((m) => (
            <button
              key={m}
              type="button"
              disabled={timer.running}
              onClick={() => setMode(m)}
              className={`h-8 rounded-full px-3 text-xs font-medium transition-colors ${
                timer.mode === m
                  ? "bg-accent text-accent-fg"
                  : "text-muted hover:text-fg"
              }`}
            >
              {m} min
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 font-display text-6xl font-medium tracking-tight tabular text-fg">
        {formatTimer(remaining)}
      </p>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-raised">
        <div
          className="h-full bg-accent transition-[width] duration-200"
          style={{ width: `${pct}%` }}
        />
      </div>

      <input
        className="mt-4 h-11 w-full rounded-xl border border-transparent bg-transparent px-0 text-sm text-fg placeholder:text-subtle focus-visible:outline-none"
        placeholder={oneThing || "O que você está fazendo neste bloco"}
        value={timer.label}
        onChange={(e) => setLabel(e.target.value)}
        disabled={timer.running}
      />

      <div className="mt-2 flex gap-2">
        {timer.running ? (
          <Button variant="secondary" className="flex-1" onClick={pause}>
            <Pause /> Pausar
          </Button>
        ) : (
          <Button className="flex-1" onClick={start}>
            <Play /> {remaining < total && remaining > 0 ? "Retomar" : "Começar"}
          </Button>
        )}
        <Button variant="ghost" size="icon" onClick={skip} aria-label="Zerar">
          <RotateCcw />
        </Button>
      </div>
    </section>
  );
}
