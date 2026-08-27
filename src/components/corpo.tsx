import { CheckRow, Field } from "@/components/field";
import { Input } from "@/components/ui/input";
import { bodyScore, bodyToday, useLastro } from "@/lib/store";
import { addDays, todayISO } from "@/lib/time";
import { cn } from "@/lib/utils";

export function Corpo() {
  const state = useLastro();
  const date = todayISO();
  const today = bodyToday(state, date);
  const days = Array.from({ length: 14 }, (_, i) => addDays(date, i - 13));

  return (
    <div className="stagger-in flex flex-col gap-4 pb-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Base biológica
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          Sem corpo, o resto é teatro.
        </h1>
        <p className="mt-2 text-sm text-muted">
          Sono, caminhada, proteína. Três alavancas. Sem romance.
        </p>
      </header>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Hoje
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <CheckRow
            checked={today.sleep}
            onToggle={() => state.toggleBody("sleep")}
            label="Dormiu no horário"
            hint={`Alvo ${state.sleepTarget}`}
          />
          <CheckRow
            checked={today.walk}
            onToggle={() => state.toggleBody("walk")}
            label="Caminhou ou treinou"
            hint="Vinte minutos feios valem mais que o treino perfeito pulado."
          />
          <CheckRow
            checked={today.protein}
            onToggle={() => state.toggleBody("protein")}
            label="Proteína de manhã"
          />
        </div>
        <div className="mt-4">
          <Field label="Horário de dormir">
            <Input
              type="time"
              value={state.sleepTarget}
              onChange={(e) => state.setSleepTarget(e.target.value)}
            />
          </Field>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Últimos 14 dias
        </p>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {days.map((d) => {
            const b = bodyToday(state, d);
            const score = bodyScore(b);
            const isToday = d === date;
            return (
              <div key={d} className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-lg text-xs tabular",
                    score === 3 && "bg-sage text-bg",
                    score === 2 && "bg-sage/40 text-fg",
                    score === 1 && "bg-raised text-muted",
                    score === 0 && "bg-raised text-subtle",
                    isToday && "ring-1 ring-accent",
                  )}
                  title={`${d} · ${score}/3`}
                >
                  {Number(d.slice(-2))}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-subtle">
          Cheio = 3/3. O anel é hoje. Não precisa ser perfeito. Precisa ser
          frequente.
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="font-display text-xl font-medium tracking-tight">
          A regra do corpo
        </p>
        <p className="mt-2 text-sm text-muted text-pretty">
          TDAH sem sono vira gasto impulsivo, projeto novo e mentira para si.
          Trate avaliação médica e possível medicação como parte do sistema —
          não como falha de caráter.
        </p>
      </section>
    </div>
  );
}
