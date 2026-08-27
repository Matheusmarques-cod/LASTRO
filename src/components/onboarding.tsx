import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Field } from "@/components/field";
import { readySystem, useLastro, type OnboardPayload } from "@/lib/store";
import { addMonthsISO, todayISO } from "@/lib/time";

const WEEKDAYS = [
  { v: 0, l: "Dom" },
  { v: 1, l: "Seg" },
  { v: 2, l: "Ter" },
  { v: 3, l: "Qua" },
  { v: 4, l: "Qui" },
  { v: 5, l: "Sex" },
  { v: 6, l: "Sáb" },
];

export function Onboarding() {
  const complete = useLastro((s) => s.completeOnboarding);
  const loadReady = useLastro((s) => s.loadReadySystem);
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<OnboardPayload>(() => ({
    name: "",
    goal: {
      title: "",
      why: "",
      metricLabel: "Renda extra mensal",
      metricNow: 0,
      metricTarget: 4000,
      deadline: addMonthsISO(todayISO(), 3),
      skill: "",
    },
    money: {
      monthlyIncome: 5000,
      paydayDay: 5,
      billsPercent: 50,
      emergencyPercent: 20,
      investPercent: 20,
      funPercent: 10,
      emergencyTarget: 15000,
    },
    sleepTarget: "23:00",
    accountabilityName: "",
    reviewWeekday: 0,
    promises: ["", "", ""],
  }));

  if (step === 0) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-between px-5 py-10 lg:max-w-xl lg:justify-center lg:gap-16">
        <div className="stagger-in flex flex-col gap-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Sistema operacional
          </p>
          <div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-fg sm:text-6xl">
              LASTRO
            </h1>
            <p className="mt-3 text-lg text-muted">Difícil de descarrilar.</p>
          </div>
          <p className="max-w-md text-pretty text-fg/90">
            TDAH forte não se vence com disciplina. Se vence com trilhos: um
            norte, dinheiro no automático, sprints curtos, corpo estável e
            alguém cobrando.
          </p>
          <p className="max-w-md text-pretty text-muted">
            Você não vai tentar ser uma pessoa organizada. Você vai se tornar
            uma pessoa difícil de descarrilar.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-3">
          <Button size="lg" onClick={() => setStep(1)}>
            Instalar o sistema
          </Button>
          <Button size="lg" variant="secondary" onClick={loadReady}>
            Usar o sistema pronto
          </Button>
          <p className="text-center text-xs text-subtle">
            O sistema pronto já vem com norte, split financeiro, promessas e
            regras. Você edita depois.
          </p>
        </div>
      </main>
    );
  }

  const total = 5;
  const next = () => setStep((s) => Math.min(total, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-8 lg:max-w-xl">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Passo {step} de {total}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full ${i < step ? "bg-accent" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <section className="stagger-in flex flex-1 flex-col gap-6">
          <h1 className="font-display text-3xl font-medium tracking-tight">
            Como te chamamos?
          </h1>
          <Field label="Nome" hint="Pode ser só o primeiro nome.">
            <Input
              autoFocus
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="Seu nome"
            />
          </Field>
        </section>
      )}

      {step === 2 && (
        <section className="stagger-in flex flex-1 flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight">
              Um norte. Só um.
            </h1>
            <p className="mt-2 text-sm text-muted">
              Três meses. Uma métrica. O resto vai para Depois.
            </p>
          </div>
          <Field label="Objetivo do trimestre">
            <Input
              value={draft.goal.title}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  goal: { ...draft.goal, title: e.target.value },
                })
              }
              placeholder="Ex.: fechar R$ 4 mil extra com vendas"
            />
          </Field>
          <Field label="Por quê isso importa">
            <Textarea
              value={draft.goal.why}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  goal: { ...draft.goal, why: e.target.value },
                })
              }
              placeholder="A frase que te puxa de volta quando o cérebro quiser outro projeto."
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Métrica">
              <Input
                value={draft.goal.metricLabel}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    goal: { ...draft.goal, metricLabel: e.target.value },
                  })
                }
              />
            </Field>
            <Field label="Alvo (R$)">
              <Input
                type="number"
                inputMode="numeric"
                value={draft.goal.metricTarget || ""}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    goal: {
                      ...draft.goal,
                      metricTarget: Number(e.target.value) || 0,
                    },
                  })
                }
              />
            </Field>
          </div>
          <Field label="A skill cara deste trimestre">
            <Input
              value={draft.goal.skill}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  goal: { ...draft.goal, skill: e.target.value },
                })
              }
              placeholder="Vendas, escrita, ofício, negociação…"
            />
          </Field>
        </section>
      )}

      {step === 3 && (
        <section className="stagger-in flex flex-1 flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight">
              Dinheiro no automático.
            </h1>
            <p className="mt-2 text-sm text-muted">
              Você decide uma vez. O dia do pagamento só executa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Renda mensal">
              <Input
                type="number"
                inputMode="numeric"
                value={draft.money.monthlyIncome || ""}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    money: {
                      ...draft.money,
                      monthlyIncome: Number(e.target.value) || 0,
                    },
                  })
                }
              />
            </Field>
            <Field label="Dia do pagamento">
              <Input
                type="number"
                inputMode="numeric"
                min={1}
                max={28}
                value={draft.money.paydayDay}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    money: {
                      ...draft.money,
                      paydayDay: Math.min(
                        28,
                        Math.max(1, Number(e.target.value) || 1),
                      ),
                    },
                  })
                }
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                ["billsPercent", "Contas %"],
                ["emergencyPercent", "Reserva %"],
                ["investPercent", "Investir %"],
                ["funPercent", "Livre %"],
              ] as const
            ).map(([key, label]) => (
              <Field key={key} label={label}>
                <Input
                  type="number"
                  inputMode="numeric"
                  value={draft.money[key]}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      money: {
                        ...draft.money,
                        [key]: Number(e.target.value) || 0,
                      },
                    })
                  }
                />
              </Field>
            ))}
          </div>
          <Field
            label="Meta da reserva de emergência"
            hint="Três a seis meses de contas. Número redondo basta."
          >
            <Input
              type="number"
              inputMode="numeric"
              value={draft.money.emergencyTarget || ""}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  money: {
                    ...draft.money,
                    emergencyTarget: Number(e.target.value) || 0,
                  },
                })
              }
            />
          </Field>
        </section>
      )}

      {step === 4 && (
        <section className="stagger-in flex flex-1 flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight">
              Corpo e cobrança.
            </h1>
            <p className="mt-2 text-sm text-muted">
              Sem sono o sistema cai. Sem alguém cobrando, você se engana.
            </p>
          </div>
          <Field label="Horário de dormir">
            <Input
              type="time"
              value={draft.sleepTarget}
              onChange={(e) =>
                setDraft({ ...draft, sleepTarget: e.target.value })
              }
            />
          </Field>
          <Field label="Quem te cobra toda semana">
            <Input
              value={draft.accountabilityName}
              onChange={(e) =>
                setDraft({ ...draft, accountabilityName: e.target.value })
              }
              placeholder="Nome do mentor, sócio, terapeuta, amigo"
            />
          </Field>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Dia da revisão
            </p>
            <div className="grid grid-cols-7 gap-1.5">
              {WEEKDAYS.map((d) => (
                <button
                  key={d.v}
                  type="button"
                  onClick={() => setDraft({ ...draft, reviewWeekday: d.v })}
                  className={`h-11 rounded-xl text-xs font-medium transition-colors ${
                    draft.reviewWeekday === d.v
                      ? "bg-accent text-accent-fg"
                      : "bg-raised text-muted hover:text-fg"
                  }`}
                >
                  {d.l}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="stagger-in flex flex-1 flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight">
              Três promessas desta semana.
            </h1>
            <p className="mt-2 text-sm text-muted">
              Pequenas. Cumpríveis. Nada de “vou acordar 5h e estudar 4 horas”.
            </p>
          </div>
          {draft.promises.map((p, i) => (
            <Field key={i} label={`Promessa ${i + 1}`}>
              <Input
                value={p}
                onChange={(e) => {
                  const nextP = [...draft.promises];
                  nextP[i] = e.target.value;
                  setDraft({ ...draft, promises: nextP });
                }}
                placeholder={
                  i === 0
                    ? "Ex.: cinco sprints da skill"
                    : i === 1
                      ? "Ex.: ritual do pagamento"
                      : "Ex.: cinco dias de corpo"
                }
              />
            </Field>
          ))}
        </section>
      )}

      <div className="mt-8 flex gap-3">
        <Button variant="secondary" onClick={back} className="flex-1">
          Voltar
        </Button>
        {step < total ? (
          <Button onClick={next} className="flex-1">
            Continuar
          </Button>
        ) : (
          <Button
            onClick={() => complete({ ...draft, ...readyFill(draft) })}
            className="flex-1"
          >
            Ligar o sistema
          </Button>
        )}
      </div>
    </main>
  );
}

function readyFill(draft: OnboardPayload): OnboardPayload {
  const seed = readySystem();
  return {
    ...draft,
    name: draft.name.trim() || seed.name,
    goal: {
      ...draft.goal,
      title: draft.goal.title.trim() || seed.goal.title,
      why: draft.goal.why.trim() || seed.goal.why,
      skill: draft.goal.skill.trim() || seed.goal.skill,
    },
    accountabilityName:
      draft.accountabilityName.trim() || seed.accountabilityName,
    promises: draft.promises.map((p, i) => p.trim() || seed.promises[i] || ""),
  };
}
