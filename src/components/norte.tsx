import { useState } from "react";
import { CheckRow, Field, Meter } from "@/components/field";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import {
  useLastro,
  weekPromises,
  weekSkillMinutes,
  weekSprintMinutes,
} from "@/lib/store";
import { daysUntil, formatDayShort } from "@/lib/time";
import { moneyBRL } from "@/lib/utils";
import { X } from "lucide-react";

export function Norte() {
  const state = useLastro();
  const promises = weekPromises(state);
  const [p, setP] = useState("");
  const [depois, setDepois] = useState("");
  const [skillMin, setSkillMin] = useState("25");
  const left = daysUntil(state.goal.deadline);
  const depoisItems = state.captures.filter((c) => c.bucket === "depois");

  return (
    <div className="stagger-in flex flex-col gap-4 pb-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Norte do trimestre
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          Um jogo. Só um.
        </h1>
      </header>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <Field label="Objetivo">
          <Input
            value={state.goal.title}
            onChange={(e) => state.setGoal({ title: e.target.value })}
          />
        </Field>
        <div className="mt-4">
          <Field label="Por quê">
            <Textarea
              value={state.goal.why}
              onChange={(e) => state.setGoal({ why: e.target.value })}
            />
          </Field>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Field label="Agora (R$)">
            <Input
              type="number"
              inputMode="numeric"
              value={state.goal.metricNow || ""}
              onChange={(e) =>
                state.setGoal({ metricNow: Number(e.target.value) || 0 })
              }
            />
          </Field>
          <Field label="Alvo (R$)">
            <Input
              type="number"
              inputMode="numeric"
              value={state.goal.metricTarget || ""}
              onChange={(e) =>
                state.setGoal({ metricTarget: Number(e.target.value) || 0 })
              }
            />
          </Field>
        </div>
        <div className="mt-4">
          <Meter
            value={state.goal.metricNow}
            max={state.goal.metricTarget || 1}
            label={`${moneyBRL(state.goal.metricNow)} / ${moneyBRL(state.goal.metricTarget)}`}
          />
        </div>
        <p className="mt-3 text-sm text-muted">
          {left >= 0
            ? `${left} dias até ${formatDayShort(state.goal.deadline)}`
            : `Prazo passou em ${formatDayShort(state.goal.deadline)}`}
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          A skill cara
        </p>
        <Input
          className="mt-3"
          value={state.goal.skill}
          onChange={(e) => state.setGoal({ skill: e.target.value })}
        />
        <p className="mt-3 text-sm text-muted">
          {weekSkillMinutes(state)} min praticados esta semana ·{" "}
          {weekSprintMinutes(state)} min de sprint
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            state.logSkillMinutes(Number(skillMin) || 0);
          }}
        >
          <Input
            type="number"
            inputMode="numeric"
            value={skillMin}
            onChange={(e) => setSkillMin(e.target.value)}
            className="w-24"
            aria-label="Minutos"
          />
          <Button type="submit" variant="secondary" className="flex-1">
            Registrar prática
          </Button>
        </form>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Promessas da semana · máx. 3
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {promises.map((item) => (
            <div key={item.id} className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <CheckRow
                  checked={item.done}
                  onToggle={() => state.togglePromise(item.id)}
                  label={item.text}
                />
              </div>
              <button
                type="button"
                className="mt-2 size-11 text-subtle hover:text-fg"
                onClick={() => state.removePromise(item.id)}
                aria-label="Remover"
              >
                <X className="mx-auto size-4" />
              </button>
            </div>
          ))}
        </div>
        {promises.length < 3 ? (
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              state.addPromise(p);
              setP("");
            }}
          >
            <Input
              value={p}
              onChange={(e) => setP(e.target.value)}
              placeholder="Promessa pequena e cumprível"
            />
            <Button type="submit" variant="secondary">
              Somar
            </Button>
          </form>
        ) : (
          <p className="mt-3 text-xs text-subtle">
            Três já. Cumpre essas antes de inventar a quarta.
          </p>
        )}
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Depois
        </p>
        <p className="mt-1 text-sm text-muted">
          Ideias boas que não são este trimestre. Estacionadas, não mortas.
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!depois.trim()) return;
            state.addCapture(depois);
            const first = useLastro.getState().captures[0];
            if (first) state.moveCapture(first.id, "depois");
            setDepois("");
          }}
        >
          <Input
            value={depois}
            onChange={(e) => setDepois(e.target.value)}
            placeholder="Projeto tentador"
          />
          <Button type="submit" variant="secondary">
            Estacionar
          </Button>
        </form>
        <ul className="mt-3 flex flex-col gap-2">
          {depoisItems.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between gap-3 rounded-2xl bg-raised px-3.5 py-3 text-sm"
            >
              <span className="min-w-0 flex-1 text-fg">{c.text}</span>
              <button
                type="button"
                className="text-xs text-subtle hover:text-rust"
                onClick={() => state.moveCapture(c.id, "nunca")}
              >
                Arquivar
              </button>
            </li>
          ))}
          {depoisItems.length === 0 ? (
            <li className="text-sm text-subtle">Nada estacionado. Bom.</li>
          ) : null}
        </ul>
      </section>
    </div>
  );
}
