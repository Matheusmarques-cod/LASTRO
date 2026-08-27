import { useMemo, useState } from "react";
import { CheckRow, Field } from "@/components/field";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { RULES } from "@/lib/rules";
import {
  bodyScore,
  bodyToday,
  useLastro,
  weekPromises,
  weekSprintMinutes,
  type SistemaTab,
} from "@/lib/store";
import {
  addDays,
  formatDayShort,
  todayISO,
  weekdayName,
  weekStartISO,
} from "@/lib/time";
import { cn } from "@/lib/utils";

const TABS: { id: SistemaTab; label: string }[] = [
  { id: "cobranca", label: "Cobrança" },
  { id: "codigo", label: "Código" },
  { id: "cerebro", label: "Cérebro" },
  { id: "manual", label: "Manual" },
];

export function Sistema() {
  const tab = useLastro((s) => s.sistemaTab);
  const setTab = useLastro((s) => s.setSistemaTab);

  return (
    <div className="flex flex-col gap-4 pb-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Sistema
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          Trilhos externos.
        </h1>
      </header>

      <div className="flex gap-1 overflow-x-auto rounded-full bg-surface p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "h-10 flex-1 rounded-full px-3 text-sm font-medium whitespace-nowrap transition-colors",
              tab === t.id
                ? "bg-accent text-accent-fg"
                : "text-muted hover:text-fg",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "cobranca" && <Cobranca />}
      {tab === "codigo" && <Codigo />}
      {tab === "cerebro" && <Cerebro />}
      {tab === "manual" && <Manual />}
    </div>
  );
}

function Cobranca() {
  const state = useLastro();
  const week = weekStartISO();
  const review = state.reviews[week] ?? {
    weekStart: week,
    promised: "",
    delivered: "",
    learned: "",
    next: "",
    done: false,
  };
  const promises = weekPromises(state);
  const today = new Date().getDay();
  const isReviewDay = today === state.reviewWeekday;
  const [copied, setCopied] = useState(false);

  const letter = useMemo(() => buildLetter(state), [state]);

  return (
    <div className="stagger-in flex flex-col gap-4">
      {isReviewDay && !review.done ? (
        <p className="rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm">
          Hoje é dia de revisão com {state.accountabilityName || "sua pessoa"}.
          Não pule.
        </p>
      ) : null}

      <section className="rounded-3xl border border-border bg-surface p-5">
        <Field label="Quem cobra">
          <Input
            value={state.accountabilityName}
            onChange={(e) =>
              state.setAccountability(e.target.value, state.reviewWeekday)
            }
          />
        </Field>
        <p className="mt-3 text-sm text-muted">
          Revisão toda {weekdayName(state.reviewWeekday)}.
        </p>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {["D", "S", "T", "Q", "Q", "S", "S"].map((l, i) => (
            <button
              key={i}
              type="button"
              onClick={() =>
                state.setAccountability(state.accountabilityName, i)
              }
              className={cn(
                "h-11 rounded-xl text-xs font-medium",
                state.reviewWeekday === i
                  ? "bg-accent text-accent-fg"
                  : "bg-raised text-muted",
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Prometi / entreguei
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {promises.length === 0 ? (
            <p className="text-sm text-subtle">Nenhuma promessa nesta semana.</p>
          ) : (
            promises.map((p) => (
              <CheckRow
                key={p.id}
                checked={p.done}
                onToggle={() => state.togglePromise(p.id)}
                label={p.text}
              />
            ))
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Revisão da semana
        </p>
        <div className="mt-3 flex flex-col gap-3">
          <Field label="O que prometi">
            <Textarea
              value={review.promised}
              onChange={(e) => state.saveReview({ promised: e.target.value })}
            />
          </Field>
          <Field label="O que entreguei">
            <Textarea
              value={review.delivered}
              onChange={(e) => state.saveReview({ delivered: e.target.value })}
            />
          </Field>
          <Field label="O que aprendi">
            <Textarea
              value={review.learned}
              onChange={(e) => state.saveReview({ learned: e.target.value })}
            />
          </Field>
          <Field label="Próxima semana, três coisas no máximo">
            <Textarea
              value={review.next}
              onChange={(e) => state.saveReview({ next: e.target.value })}
            />
          </Field>
        </div>
        <Button
          className="mt-4 w-full"
          variant={review.done ? "secondary" : "primary"}
          onClick={() => state.saveReview({ done: !review.done })}
        >
          {review.done ? "Revisão marcada" : "Fechar revisão"}
        </Button>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Recado para {state.accountabilityName || "quem cobra"}
        </p>
        <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-raised p-4 font-sans text-sm text-fg">
          {letter}
        </pre>
        <Button
          className="mt-3 w-full"
          variant="secondary"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(letter);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            } catch {
              /* ignore */
            }
          }}
        >
          {copied ? "Copiado" : "Copiar recado"}
        </Button>
      </section>
    </div>
  );
}

function buildLetter(state: ReturnType<typeof useLastro.getState>) {
  const week = weekStartISO();
  const end = addDays(week, 6);
  const promises = weekPromises(state);
  const done = promises.filter((p) => p.done).length;
  const sprints = weekSprintMinutes(state);
  let bodyDays = 0;
  for (let i = 0; i < 7; i++) {
    const d = addDays(week, i);
    if (d > todayISO()) break;
    if (bodyScore(bodyToday(state, d)) >= 2) bodyDays += 1;
  }
  const review = state.reviews[week];
  const name = state.accountabilityName || "você";
  return `Oi, ${name}.

Semana ${formatDayShort(week)} a ${formatDayShort(end)}.

Norte: ${state.goal.title || "—"}
Métrica: ${state.goal.metricNow} / ${state.goal.metricTarget}

Promessas: ${done}/${promises.length || 0}
${promises.map((p) => `- [${p.done ? "x" : " "}] ${p.text}`).join("\n") || "- (nenhuma)"}

Sprints: ${sprints} min
Corpo (2/3 ou mais): ${bodyDays} dias
Skill (${state.goal.skill || "—"}): prática registrada

Entreguei: ${review?.delivered || "—"}
Aprendi: ${review?.learned || "—"}
Próxima semana: ${review?.next || "—"}

Sem teatro. Só o que aconteceu.`;
}

function Codigo() {
  const breaks = useLastro((s) => s.ruleBreaks);
  const breakRule = useLastro((s) => s.breakRule);
  const unbreak = useLastro((s) => s.unbreakRule);
  const today = todayISO();
  const dos = RULES.filter((r) => r.kind === "do");
  const avoid = RULES.filter((r) => r.kind === "avoid");

  return (
    <div className="stagger-in flex flex-col gap-4">
      <p className="text-sm text-muted">
        Constituição, não inspiração. Marcar “quebrei hoje” não é culpa — é
        dado.
      </p>
      <RuleList
        title="Fazer"
        rules={dos}
        today={today}
        breaks={breaks}
        onBreak={breakRule}
        onUnbreak={unbreak}
      />
      <RuleList
        title="Evitar"
        rules={avoid}
        today={today}
        breaks={breaks}
        onBreak={breakRule}
        onUnbreak={unbreak}
      />
    </div>
  );
}

function RuleList({
  title,
  rules,
  today,
  breaks,
  onBreak,
  onUnbreak,
}: {
  title: string;
  rules: typeof RULES;
  today: string;
  breaks: { date: string; ruleId: string }[];
  onBreak: (id: string) => void;
  onUnbreak: (id: string) => void;
}) {
  return (
    <section className="rounded-3xl border border-border bg-surface p-5">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {title}
      </p>
      <ol className="mt-3 flex flex-col gap-3">
        {rules.map((r, i) => {
          const broken = breaks.some(
            (b) => b.date === today && b.ruleId === r.id,
          );
          return (
            <li key={r.id} className="border-t border-border pt-3 first:border-0 first:pt-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-fg">
                    <span className="tabular text-subtle">{i + 1}.</span> {r.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{r.body}</p>
                </div>
                <button
                  type="button"
                  onClick={() => (broken ? onUnbreak(r.id) : onBreak(r.id))}
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
                    broken
                      ? "bg-rust/20 text-rust"
                      : "bg-raised text-subtle hover:text-fg",
                  )}
                >
                  {broken ? "Quebrei" : "Ok"}
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Cerebro() {
  const captures = useLastro((s) => s.captures);
  const add = useLastro((s) => s.addCapture);
  const move = useLastro((s) => s.moveCapture);
  const remove = useLastro((s) => s.removeCapture);
  const sprints = useLastro((s) => s.sprints);
  const [text, setText] = useState("");
  const inbox = captures.filter((c) => c.bucket === "inbox");
  const depois = captures.filter((c) => c.bucket === "depois");

  return (
    <div className="stagger-in flex flex-col gap-4">
      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Caixa de entrada
        </p>
        <p className="mt-1 text-sm text-muted">
          Se não está escrito, não existe. Esvazia a cabeça aqui.
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            add(text);
            setText("");
          }}
        >
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tudo que pulou"
          />
          <Button type="submit" variant="secondary">
            Capturar
          </Button>
        </form>
        <ul className="mt-4 flex flex-col gap-2">
          {inbox.map((c) => (
            <li
              key={c.id}
              className="rounded-2xl border border-border bg-raised px-3.5 py-3"
            >
              <p className="text-sm text-fg">{c.text}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button size="sm" variant="secondary" onClick={() => move(c.id, "depois")}>
                  Depois
                </Button>
                <Button size="sm" variant="ghost" onClick={() => move(c.id, "nunca")}>
                  Nunca
                </Button>
                <Button size="sm" variant="ghost" onClick={() => remove(c.id)}>
                  Apagar
                </Button>
              </div>
            </li>
          ))}
          {inbox.length === 0 ? (
            <li className="text-sm text-subtle">Caixa vazia. Raro e bom.</li>
          ) : null}
        </ul>
      </section>

      {depois.length > 0 ? (
        <section className="rounded-3xl border border-border bg-surface p-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Estacionadas
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
            {depois.map((c) => (
              <li key={c.id}>{c.text}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Sprints recentes
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {sprints.slice(0, 12).map((s) => (
            <li
              key={s.id}
              className="flex items-baseline justify-between gap-3 text-sm"
            >
              <span className="min-w-0 truncate text-fg">{s.label}</span>
              <span className="shrink-0 tabular text-muted">
                {s.minutes} min · {s.date.slice(8)}
              </span>
            </li>
          ))}
          {sprints.length === 0 ? (
            <li className="text-sm text-subtle">Nenhum sprint ainda.</li>
          ) : null}
        </ul>
      </section>
    </div>
  );
}

function Manual() {
  const reset = useLastro((s) => s.resetAll);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="stagger-in flex flex-col gap-4">
      <article className="rounded-3xl border border-border bg-surface p-5 text-sm text-muted">
        <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
          Do início ao fim
        </h2>
        <ol className="mt-4 flex flex-col gap-4">
          {MANUAL.map((item, i) => (
            <li key={item.t}>
              <p className="font-medium text-fg">
                {i + 1}. {item.t}
              </p>
              <p className="mt-1 text-pretty">{item.b}</p>
            </li>
          ))}
        </ol>
      </article>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="font-display text-xl font-medium text-fg">Zerar</p>
        <p className="mt-1 text-sm text-muted">
          Apaga o lastro deste aparelho e volta à instalação.
        </p>
        {confirm ? (
          <div className="mt-3 flex gap-2">
            <Button variant="rust" className="flex-1" onClick={reset}>
              Apagar tudo
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => setConfirm(false)}
            >
              Cancelar
            </Button>
          </div>
        ) : (
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => setConfirm(true)}
          >
            Resetar sistema
          </Button>
        )}
      </section>
    </div>
  );
}

const MANUAL = [
  {
    t: "Instalar",
    b: "Nome, um norte de 90 dias, split do salário, horário de sono, quem cobra, três promessas. Ou use o sistema pronto e edite.",
  },
  {
    t: "Toda manhã, Hoje",
    b: "Trava UMA coisa. Primeira hora sem rede. Começa um sprint nela. Marca sono, caminhada, proteína. Tudo que pular na cabeça vai para Captura — não vira projeto.",
  },
  {
    t: "Norte",
    b: "Um objetivo, uma métrica, uma skill cara. Máximo de três promessas por semana. Ideias novas vão para Depois até o trimestre acabar.",
  },
  {
    t: "Dinheiro",
    b: "No dia do pagamento executa o ritual: contas, reserva, investir, livre. Impulso de compra espera 48 horas. Sem decidir no calor.",
  },
  {
    t: "Corpo",
    b: "Três checks. Frequência vence perfeição. TDAH sem sono destrói o resto do sistema. Trate o diagnóstico de verdade.",
  },
  {
    t: "Cobrança",
    b: "No dia combinado, fecha a revisão e manda o recado para quem cobra. Prometi / entreguei. Sem teatro.",
  },
  {
    t: "Código",
    b: "Dez fazer, dez evitar. Se quebrar, marca. Dado, não drama. O sistema existe para quando a motivação sumir.",
  },
  {
    t: "Regra de ouro",
    b: "Não tente ser organizado. Fique difícil de descarrilar.",
  },
];
