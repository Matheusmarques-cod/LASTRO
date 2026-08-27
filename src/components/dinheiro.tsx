import { useState } from "react";
import { CheckRow, Field, Meter } from "@/components/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ritualDue, splitAmounts, useLastro } from "@/lib/store";
import { daysUntil, nextPaydayISO, todayISO } from "@/lib/time";
import { moneyBRL } from "@/lib/utils";

export function Dinheiro() {
  const state = useLastro();
  const m = state.money;
  const split = splitAmounts(m);
  const payday = nextPaydayISO(m.paydayDay);
  const due = ritualDue(state);
  const days = daysUntil(payday);
  const [impulse, setImpulse] = useState("");
  const [amount, setAmount] = useState("");
  const [reserveAdd, setReserveAdd] = useState("");
  const waiting = state.impulses.filter((i) => i.status === "waiting");
  const today = todayISO();

  const totalPct =
    m.billsPercent + m.emergencyPercent + m.investPercent + m.funPercent;

  return (
    <div className="stagger-in flex flex-col gap-4 pb-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Piloto automático
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          Você não decide no calor.
        </h1>
        <p className="mt-2 text-sm text-muted">
          {days === 0
            ? "Pagamento é hoje. Executa o ritual."
            : `Próximo pagamento em ${days} dia${days === 1 ? "" : "s"} · dia ${m.paydayDay}`}
        </p>
      </header>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Split do salário
        </p>
        <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-raised">
          <span
            className="bg-accent"
            style={{ width: `${m.billsPercent}%` }}
          />
          <span
            className="bg-sage"
            style={{ width: `${m.emergencyPercent}%` }}
          />
          <span
            className="bg-fg/40"
            style={{ width: `${m.investPercent}%` }}
          />
          <span
            className="bg-rust/80"
            style={{ width: `${m.funPercent}%` }}
          />
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Legend color="bg-accent" label="Contas" value={split.bills} pct={m.billsPercent} />
          <Legend color="bg-sage" label="Reserva" value={split.emergency} pct={m.emergencyPercent} />
          <Legend color="bg-fg/40" label="Investir" value={split.invest} pct={m.investPercent} />
          <Legend color="bg-rust/80" label="Livre" value={split.fun} pct={m.funPercent} />
        </ul>
        {totalPct !== 100 ? (
          <p className="mt-3 text-xs text-rust">
            Os percentuais somam {totalPct}%. Ajuste para 100.
          </p>
        ) : null}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Field label="Renda mensal">
            <Input
              type="number"
              inputMode="numeric"
              value={m.monthlyIncome || ""}
              onChange={(e) =>
                state.setMoney({ monthlyIncome: Number(e.target.value) || 0 })
              }
            />
          </Field>
          <Field label="Dia">
            <Input
              type="number"
              inputMode="numeric"
              min={1}
              max={28}
              value={m.paydayDay}
              onChange={(e) =>
                state.setMoney({
                  paydayDay: Math.min(28, Math.max(1, Number(e.target.value) || 1)),
                })
              }
            />
          </Field>
        </div>
      </section>

      <section
        className={`rounded-3xl border p-5 ${
          due ? "border-accent/40 bg-surface" : "border-border bg-surface"
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Ritual do pagamento
        </p>
        <p className="mt-1 text-sm text-muted">
          {due
            ? "Ainda não executado neste mês. Sem negociar com você mesmo."
            : "Feito neste mês. Pode esquecer até o próximo."}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <CheckRow
            checked={m.ritual.bills}
            onToggle={() => state.setRitual("bills", !m.ritual.bills)}
            label={`Pagar contas · ${moneyBRL(split.bills)}`}
          />
          <CheckRow
            checked={m.ritual.emergency}
            onToggle={() => state.setRitual("emergency", !m.ritual.emergency)}
            label={`Mover reserva · ${moneyBRL(split.emergency)}`}
          />
          <CheckRow
            checked={m.ritual.invest}
            onToggle={() => state.setRitual("invest", !m.ritual.invest)}
            label={`Investir · ${moneyBRL(split.invest)}`}
          />
          <CheckRow
            checked={m.ritual.fun}
            onToggle={() => state.setRitual("fun", !m.ritual.fun)}
            label={`Livre, e só isso · ${moneyBRL(split.fun)}`}
          />
        </div>
        {due ? (
          <Button className="mt-4 w-full" onClick={state.completeRitual}>
            Marcar ritual completo
          </Button>
        ) : null}
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Reserva de emergência
        </p>
        <div className="mt-3">
          <Meter
            value={m.emergencyNow}
            max={m.emergencyTarget || 1}
            label={`${moneyBRL(m.emergencyNow)} de ${moneyBRL(m.emergencyTarget)}`}
          />
        </div>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            state.addEmergency(Number(reserveAdd) || 0);
            setReserveAdd("");
          }}
        >
          <Input
            type="number"
            inputMode="numeric"
            value={reserveAdd}
            onChange={(e) => setReserveAdd(e.target.value)}
            placeholder="Somar à reserva"
          />
          <Button type="submit" variant="secondary">
            Somar
          </Button>
        </form>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Impulso · 48 horas
        </p>
        <p className="mt-1 text-sm text-muted">
          TDAH gasta para regular emoção. Escreve. Espera. Depois decide.
        </p>
        <form
          className="mt-3 flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            state.addImpulse(impulse, Number(amount) || 0);
            setImpulse("");
            setAmount("");
          }}
        >
          <Input
            value={impulse}
            onChange={(e) => setImpulse(e.target.value)}
            placeholder="O que você quer comprar"
          />
          <div className="flex gap-2">
            <Input
              type="number"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="R$"
            />
            <Button type="submit" variant="secondary" disabled={!impulse.trim()}>
              Esperar 48h
            </Button>
          </div>
        </form>
        <ul className="mt-4 flex flex-col gap-2">
          {waiting.map((i) => {
            const ready = today >= i.waitUntil;
            return (
              <li
                key={i.id}
                className="rounded-2xl border border-border bg-raised px-3.5 py-3"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-fg">{i.item}</p>
                  <p className="tabular text-sm text-muted">{moneyBRL(i.amount)}</p>
                </div>
                {ready ? (
                  <div className="mt-2 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => state.resolveImpulse(i.id, "dropped")}
                    >
                      Larguei
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => state.resolveImpulse(i.id, "bought")}
                    >
                      Comprei mesmo
                    </Button>
                  </div>
                ) : (
                  <p className="mt-1 text-xs text-subtle">
                    Decide a partir de {i.waitUntil}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function Legend({
  color,
  label,
  value,
  pct,
}: {
  color: string;
  label: string;
  value: number;
  pct: number;
}) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1 size-2.5 rounded-full ${color}`} />
      <span>
        <span className="block text-muted">
          {label} · {pct}%
        </span>
        <span className="tabular text-fg">{moneyBRL(value)}</span>
      </span>
    </li>
  );
}
