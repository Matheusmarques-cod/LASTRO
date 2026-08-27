import { useState } from "react";
import { CheckRow, Meter } from "@/components/field";
import { SprintTimer } from "@/components/timer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  bodyScore,
  bodyToday,
  ritualDue,
  streakCount,
  useLastro,
  weekPromises,
  weekSprintMinutes,
} from "@/lib/store";
import { formatDayLong, nextPaydayISO, todayISO } from "@/lib/time";
import { moneyBRL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hoje() {
  const state = useLastro();
  const date = todayISO();
  const thing = state.oneThing[date] ?? { text: "", done: false };
  const body = bodyToday(state, date);
  const promises = weekPromises(state);
  const streak = streakCount(state);
  const hour = new Date().getHours();
  const payday = nextPaydayISO(state.money.paydayDay);
  const [capture, setCapture] = useState("");
  const [draftThing, setDraftThing] = useState(thing.text);

  const commitThing = () => {
    const t = draftThing.trim();
    if (!t) return;
    state.setOneThing(t);
  };

  return (
    <div className="stagger-in flex flex-col gap-4 pb-8 lg:grid lg:grid-cols-2 lg:items-start">
      <header className="pt-1 lg:col-span-2">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {formatDayLong()}
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          {greeting(hour, state.name)}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {streak > 0
            ? `${streak} dia${streak === 1 ? "" : "s"} nos trilhos`
            : "Hoje começa o lastro. Uma coisa. Corpo. Sprint."}
        </p>
      </header>

      {hour < 10 && !thing.done ? (
        <p className="rounded-2xl border border-border bg-raised px-4 py-3 text-sm text-fg lg:col-span-2">
          Primeira hora: a uma coisa. Rede social fica para depois.
        </p>
      ) : null}

      {ritualDue(state) ? (
        <button
          type="button"
          onClick={() => state.setView("dinheiro")}
          className="flex items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-left lg:col-span-2"
        >
          <span>
            <span className="block text-sm font-medium text-fg">
              Ritual do pagamento pendente
            </span>
            <span className="text-xs text-muted">
              Próximo dia {state.money.paydayDay} · {payday}
            </span>
          </span>
          <ArrowRight className="size-4 text-accent" />
        </button>
      ) : null}

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Hoje, uma coisa
        </p>
        {thing.text ? (
          <div className="mt-3">
            <CheckRow
              checked={thing.done}
              onToggle={state.toggleOneThing}
              label={thing.text}
              hint={
                thing.done
                  ? "Feito. O resto é bônus."
                  : "Isso é o dia. O resto espera."
              }
            />
            <button
              type="button"
              className="mt-2 text-xs text-subtle hover:text-muted"
              onClick={() => {
                setDraftThing(thing.text);
                state.setOneThing("");
              }}
            >
              Trocar a coisa
            </button>
          </div>
        ) : (
          <form
            className="mt-3 flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              commitThing();
            }}
          >
            <Input
              autoFocus
              value={draftThing}
              onChange={(e) => setDraftThing(e.target.value)}
              placeholder="A única coisa que, se feita, o dia valeu"
            />
            <Button type="submit" disabled={!draftThing.trim()}>
              Travar esta coisa
            </Button>
          </form>
        )}
      </section>

      <SprintTimer />

      <section className="rounded-3xl border border-border bg-surface p-5">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Corpo
          </p>
          <span className="text-xs tabular text-muted">
            {bodyScore(body)}/3
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <CheckRow
            checked={body.sleep}
            onToggle={() => state.toggleBody("sleep")}
            label="Dormiu no horário"
            hint={`Alvo ${state.sleepTarget}`}
          />
          <CheckRow
            checked={body.walk}
            onToggle={() => state.toggleBody("walk")}
            label="Caminhou ou treinou"
          />
          <CheckRow
            checked={body.protein}
            onToggle={() => state.toggleBody("protein")}
            label="Proteína de manhã"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Norte
        </p>
        <p className="mt-2 font-display text-xl font-medium tracking-tight text-fg">
          {state.goal.title}
        </p>
        <div className="mt-3">
          <Meter
            value={state.goal.metricNow}
            max={state.goal.metricTarget || 1}
            label={`${moneyBRL(state.goal.metricNow)} de ${moneyBRL(state.goal.metricTarget)}`}
          />
        </div>
        <p className="mt-3 text-xs text-muted">
          {weekSprintMinutes(state)} min de sprint nesta semana · skill{" "}
          {state.goal.skill}
        </p>
      </section>

      {promises.length > 0 ? (
        <section className="rounded-3xl border border-border bg-surface p-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Promessas da semana
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {promises.map((p) => (
              <CheckRow
                key={p.id}
                checked={p.done}
                onToggle={() => state.togglePromise(p.id)}
                label={p.text}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Captura
        </p>
        <p className="mt-1 text-sm text-muted">
          Saiu da cabeça. Não vira projeto novo.
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            state.addCapture(capture);
            setCapture("");
          }}
        >
          <Input
            value={capture}
            onChange={(e) => setCapture(e.target.value)}
            placeholder="Estacionar uma ideia"
          />
          <Button type="submit" variant="secondary" disabled={!capture.trim()}>
            Guardar
          </Button>
        </form>
      </section>
    </div>
  );
}

function greeting(hour: number, name: string) {
  const n = name.trim() || "você";
  if (hour < 12) return `Bom dia, ${n}.`;
  if (hour < 18) return `Boa tarde, ${n}.`;
  return `Boa noite, ${n}.`;
}
