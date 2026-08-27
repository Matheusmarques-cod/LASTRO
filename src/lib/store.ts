import { create } from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "./utils";
import {
  addDays,
  addMonthsISO,
  monthKey,
  todayISO,
  weekStartISO,
} from "./time";

export type ViewId = "hoje" | "norte" | "dinheiro" | "corpo" | "sistema";
export type SistemaTab = "cobranca" | "codigo" | "cerebro" | "manual";
export type SprintMode = 25 | 50;
export type ImpulseStatus = "waiting" | "bought" | "dropped";
export type CaptureBucket = "inbox" | "depois" | "nunca";

export type Goal = {
  title: string;
  why: string;
  metricLabel: string;
  metricNow: number;
  metricTarget: number;
  deadline: string;
  skill: string;
};

export type Money = {
  monthlyIncome: number;
  paydayDay: number;
  billsPercent: number;
  emergencyPercent: number;
  investPercent: number;
  funPercent: number;
  emergencyNow: number;
  emergencyTarget: number;
  lastRitualMonth: string | null;
  ritual: {
    bills: boolean;
    emergency: boolean;
    invest: boolean;
    fun: boolean;
  };
};

export type Impulse = {
  id: string;
  item: string;
  amount: number;
  createdAt: string;
  waitUntil: string;
  status: ImpulseStatus;
};

export type BodyDay = {
  date: string;
  sleep: boolean;
  walk: boolean;
  protein: boolean;
};

export type PromiseItem = {
  id: string;
  weekStart: string;
  text: string;
  done: boolean;
};

export type CaptureItem = {
  id: string;
  text: string;
  createdAt: string;
  bucket: CaptureBucket;
};

export type SprintLog = {
  id: string;
  date: string;
  minutes: number;
  label: string;
  at: number;
};

export type Review = {
  weekStart: string;
  promised: string;
  delivered: string;
  learned: string;
  next: string;
  done: boolean;
};

export type TimerState = {
  mode: SprintMode;
  running: boolean;
  endsAt: number | null;
  remainingSec: number;
  label: string;
};

export type LastroState = {
  onboarded: boolean;
  name: string;
  view: ViewId;
  sistemaTab: SistemaTab;
  sleepTarget: string;
  accountabilityName: string;
  reviewWeekday: number;
  goal: Goal;
  money: Money;
  impulses: Impulse[];
  body: Record<string, BodyDay>;
  oneThing: Record<string, { text: string; done: boolean }>;
  promises: PromiseItem[];
  captures: CaptureItem[];
  sprints: SprintLog[];
  reviews: Record<string, Review>;
  ruleBreaks: { date: string; ruleId: string }[];
  skillMinutes: { date: string; minutes: number }[];
  timer: TimerState;
  setView: (v: ViewId) => void;
  setSistemaTab: (t: SistemaTab) => void;
  completeOnboarding: (payload: OnboardPayload) => void;
  loadReadySystem: () => void;
  resetAll: () => void;
  setGoal: (patch: Partial<Goal>) => void;
  setMoney: (patch: Partial<Money>) => void;
  setRitual: (key: keyof Money["ritual"], value: boolean) => void;
  completeRitual: () => void;
  setName: (name: string) => void;
  setAccountability: (name: string, weekday: number) => void;
  setSleepTarget: (t: string) => void;
  setOneThing: (text: string) => void;
  toggleOneThing: () => void;
  toggleBody: (field: "sleep" | "walk" | "protein") => void;
  addPromise: (text: string) => void;
  togglePromise: (id: string) => void;
  removePromise: (id: string) => void;
  addCapture: (text: string) => void;
  moveCapture: (id: string, bucket: CaptureBucket) => void;
  removeCapture: (id: string) => void;
  addImpulse: (item: string, amount: number) => void;
  resolveImpulse: (id: string, status: "bought" | "dropped") => void;
  addEmergency: (amount: number) => void;
  setTimerMode: (mode: SprintMode) => void;
  setTimerLabel: (label: string) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  tickTimer: (now: number) => boolean;
  completeSprint: () => void;
  skipTimer: () => void;
  logSkillMinutes: (minutes: number) => void;
  breakRule: (ruleId: string) => void;
  unbreakRule: (ruleId: string) => void;
  saveReview: (patch: Partial<Omit<Review, "weekStart">>) => void;
};

export type OnboardPayload = {
  name: string;
  goal: Goal;
  money: Pick<
    Money,
    | "monthlyIncome"
    | "paydayDay"
    | "billsPercent"
    | "emergencyPercent"
    | "investPercent"
    | "funPercent"
    | "emergencyTarget"
  >;
  sleepTarget: string;
  accountabilityName: string;
  reviewWeekday: number;
  promises: string[];
};

const emptyRitual = {
  bills: false,
  emergency: false,
  invest: false,
  fun: false,
};

const emptyGoal: Goal = {
  title: "",
  why: "",
  metricLabel: "Renda extra mensal",
  metricNow: 0,
  metricTarget: 4000,
  deadline: addMonthsISO(todayISO(), 3),
  skill: "",
};

const emptyMoney: Money = {
  monthlyIncome: 0,
  paydayDay: 5,
  billsPercent: 50,
  emergencyPercent: 20,
  investPercent: 20,
  funPercent: 10,
  emergencyNow: 0,
  emergencyTarget: 0,
  lastRitualMonth: null,
  ritual: { ...emptyRitual },
};

const emptyTimer: TimerState = {
  mode: 25,
  running: false,
  endsAt: null,
  remainingSec: 25 * 60,
  label: "",
};

function baseState() {
  return {
    onboarded: false,
    name: "",
    view: "hoje" as ViewId,
    sistemaTab: "cobranca" as SistemaTab,
    sleepTarget: "23:00",
    accountabilityName: "",
    reviewWeekday: 0,
    goal: { ...emptyGoal },
    money: { ...emptyMoney, ritual: { ...emptyRitual } },
    impulses: [] as Impulse[],
    body: {} as Record<string, BodyDay>,
    oneThing: {} as Record<string, { text: string; done: boolean }>,
    promises: [] as PromiseItem[],
    captures: [] as CaptureItem[],
    sprints: [] as SprintLog[],
    reviews: {} as Record<string, Review>,
    ruleBreaks: [] as { date: string; ruleId: string }[],
    skillMinutes: [] as { date: string; minutes: number }[],
    timer: { ...emptyTimer },
  };
}

export function readySystem(): OnboardPayload {
  return {
    name: "Você",
    goal: {
      title: "Aumentar renda com uma skill vendável",
      why: "TDAH rende em resultado visível. Dinheiro atrelado a entrega, não a horas sentado.",
      metricLabel: "Renda extra mensal",
      metricNow: 0,
      metricTarget: 4000,
      deadline: addMonthsISO(todayISO(), 3),
      skill: "Vendas",
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
    accountabilityName: "Mentor",
    reviewWeekday: 0,
    promises: [
      "Cinco sprints de prospecção esta semana",
      "Ritual do pagamento no dia 5, sem negociar comigo",
      "Corpo: pelo menos cinco dias com os três checks",
    ],
  };
}

function applyOnboard(payload: OnboardPayload) {
  const week = weekStartISO();
  return {
    ...baseState(),
    onboarded: true,
    name: payload.name.trim() || "Você",
    goal: payload.goal,
    money: {
      ...emptyMoney,
      ...payload.money,
      ritual: { ...emptyRitual },
    },
    sleepTarget: payload.sleepTarget,
    accountabilityName: payload.accountabilityName.trim() || "Alguém",
    reviewWeekday: payload.reviewWeekday,
    promises: payload.promises
      .filter((t) => t.trim())
      .slice(0, 3)
      .map((text) => ({
        id: uid(),
        weekStart: week,
        text: text.trim(),
        done: false,
      })),
  };
}

export const useLastro = create<LastroState>()(
  persist(
    (set, get) => ({
      ...baseState(),

      setView: (view) => set({ view }),
      setSistemaTab: (sistemaTab) => set({ sistemaTab }),

      completeOnboarding: (payload) => set({ ...applyOnboard(payload) }),
      loadReadySystem: () => set({ ...applyOnboard(readySystem()) }),
      resetAll: () => set({ ...baseState() }),

      setGoal: (patch) => set({ goal: { ...get().goal, ...patch } }),
      setMoney: (patch) => set({ money: { ...get().money, ...patch } }),
      setRitual: (key, value) =>
        set({
          money: {
            ...get().money,
            ritual: { ...get().money.ritual, [key]: value },
          },
        }),
      completeRitual: () =>
        set({
          money: {
            ...get().money,
            lastRitualMonth: monthKey(),
            ritual: { bills: true, emergency: true, invest: true, fun: true },
          },
        }),
      setName: (name) => set({ name }),
      setAccountability: (accountabilityName, reviewWeekday) =>
        set({ accountabilityName, reviewWeekday }),
      setSleepTarget: (sleepTarget) => set({ sleepTarget }),

      setOneThing: (text) => {
        const date = todayISO();
        const prev = get().oneThing[date];
        set({
          oneThing: {
            ...get().oneThing,
            [date]: { text, done: prev?.done ?? false },
          },
        });
      },
      toggleOneThing: () => {
        const date = todayISO();
        const prev = get().oneThing[date] ?? { text: "", done: false };
        if (!prev.text.trim()) return;
        set({
          oneThing: {
            ...get().oneThing,
            [date]: { ...prev, done: !prev.done },
          },
        });
      },

      toggleBody: (field) => {
        const date = todayISO();
        const prev = get().body[date] ?? {
          date,
          sleep: false,
          walk: false,
          protein: false,
        };
        set({
          body: {
            ...get().body,
            [date]: { ...prev, [field]: !prev[field] },
          },
        });
      },

      addPromise: (text) => {
        const t = text.trim();
        if (!t) return;
        const week = weekStartISO();
        const current = get().promises.filter((p) => p.weekStart === week);
        if (current.length >= 3) return;
        set({
          promises: [
            ...get().promises,
            { id: uid(), weekStart: week, text: t, done: false },
          ],
        });
      },
      togglePromise: (id) =>
        set({
          promises: get().promises.map((p) =>
            p.id === id ? { ...p, done: !p.done } : p,
          ),
        }),
      removePromise: (id) =>
        set({ promises: get().promises.filter((p) => p.id !== id) }),

      addCapture: (text) => {
        const t = text.trim();
        if (!t) return;
        set({
          captures: [
            {
              id: uid(),
              text: t,
              createdAt: new Date().toISOString(),
              bucket: "inbox",
            },
            ...get().captures,
          ],
        });
      },
      moveCapture: (id, bucket) =>
        set({
          captures: get().captures.map((c) =>
            c.id === id ? { ...c, bucket } : c,
          ),
        }),
      removeCapture: (id) =>
        set({ captures: get().captures.filter((c) => c.id !== id) }),

      addImpulse: (item, amount) => {
        const t = item.trim();
        if (!t) return;
        const createdAt = todayISO();
        set({
          impulses: [
            {
              id: uid(),
              item: t,
              amount: Math.max(0, amount),
              createdAt,
              waitUntil: addDays(createdAt, 2),
              status: "waiting",
            },
            ...get().impulses,
          ],
        });
      },
      resolveImpulse: (id, status) =>
        set({
          impulses: get().impulses.map((i) =>
            i.id === id ? { ...i, status } : i,
          ),
        }),
      addEmergency: (amount) =>
        set({
          money: {
            ...get().money,
            emergencyNow: Math.max(0, get().money.emergencyNow + amount),
          },
        }),

      setTimerMode: (mode) => {
        const t = get().timer;
        if (t.running) return;
        set({
          timer: { ...t, mode, remainingSec: mode * 60, endsAt: null },
        });
      },
      setTimerLabel: (label) =>
        set({ timer: { ...get().timer, label } }),
      startTimer: () => {
        const t = get().timer;
        const remaining = t.remainingSec > 0 ? t.remainingSec : t.mode * 60;
        set({
          timer: {
            ...t,
            running: true,
            remainingSec: remaining,
            endsAt: Date.now() + remaining * 1000,
            label: t.label.trim() || get().oneThing[todayISO()]?.text || "Sprint",
          },
        });
      },
      pauseTimer: () => {
        const t = get().timer;
        if (!t.running || !t.endsAt) return;
        const remaining = Math.max(0, Math.round((t.endsAt - Date.now()) / 1000));
        set({
          timer: {
            ...t,
            running: false,
            remainingSec: remaining,
            endsAt: null,
          },
        });
      },
      tickTimer: (now) => {
        const t = get().timer;
        if (!t.running || !t.endsAt) return false;
        const remaining = Math.max(0, Math.round((t.endsAt - now) / 1000));
        if (remaining === t.remainingSec) return remaining === 0;
        set({ timer: { ...t, remainingSec: remaining } });
        return remaining === 0;
      },
      completeSprint: () => {
        const t = get().timer;
        const minutes = t.mode;
        const label = t.label.trim() || get().oneThing[todayISO()]?.text || "Sprint";
        set({
          sprints: [
            {
              id: uid(),
              date: todayISO(),
              minutes,
              label,
              at: Date.now(),
            },
            ...get().sprints,
          ],
          timer: {
            mode: t.mode,
            running: false,
            endsAt: null,
            remainingSec: t.mode * 60,
            label: t.label,
          },
        });
      },
      skipTimer: () => {
        const t = get().timer;
        set({
          timer: {
            ...t,
            running: false,
            endsAt: null,
            remainingSec: t.mode * 60,
          },
        });
      },

      logSkillMinutes: (minutes) => {
        if (minutes <= 0) return;
        const date = todayISO();
        const existing = get().skillMinutes.find((s) => s.date === date);
        set({
          skillMinutes: existing
            ? get().skillMinutes.map((s) =>
                s.date === date ? { ...s, minutes: s.minutes + minutes } : s,
              )
            : [...get().skillMinutes, { date, minutes }],
        });
      },

      breakRule: (ruleId) => {
        const date = todayISO();
        const exists = get().ruleBreaks.some(
          (b) => b.date === date && b.ruleId === ruleId,
        );
        if (exists) return;
        set({ ruleBreaks: [...get().ruleBreaks, { date, ruleId }] });
      },
      unbreakRule: (ruleId) => {
        const date = todayISO();
        set({
          ruleBreaks: get().ruleBreaks.filter(
            (b) => !(b.date === date && b.ruleId === ruleId),
          ),
        });
      },

      saveReview: (patch) => {
        const weekStart = weekStartISO();
        const prev = get().reviews[weekStart] ?? {
          weekStart,
          promised: "",
          delivered: "",
          learned: "",
          next: "",
          done: false,
        };
        set({
          reviews: {
            ...get().reviews,
            [weekStart]: { ...prev, ...patch },
          },
        });
      },
    }),
    {
      name: "lastro-os-v1",
      skipHydration: true,
      partialize: (s) => ({
        onboarded: s.onboarded,
        name: s.name,
        view: s.view,
        sistemaTab: s.sistemaTab,
        sleepTarget: s.sleepTarget,
        accountabilityName: s.accountabilityName,
        reviewWeekday: s.reviewWeekday,
        goal: s.goal,
        money: s.money,
        impulses: s.impulses,
        body: s.body,
        oneThing: s.oneThing,
        promises: s.promises,
        captures: s.captures,
        sprints: s.sprints,
        reviews: s.reviews,
        ruleBreaks: s.ruleBreaks,
        skillMinutes: s.skillMinutes,
        timer: s.timer,
      }),
    },
  ),
);

export function bodyToday(state: LastroState, date = todayISO()): BodyDay {
  return (
    state.body[date] ?? { date, sleep: false, walk: false, protein: false }
  );
}

export function bodyScore(day: BodyDay) {
  return Number(day.sleep) + Number(day.walk) + Number(day.protein);
}

export function isOnRails(
  state: LastroState,
  date: string,
) {
  const thing = state.oneThing[date];
  const body = bodyToday(state, date);
  return Boolean(thing?.done) && bodyScore(body) >= 2;
}

export function streakCount(state: LastroState) {
  let date = todayISO();
  if (!isOnRails(state, date)) {
    date = addDays(date, -1);
  }
  let n = 0;
  for (let i = 0; i < 400; i++) {
    if (!isOnRails(state, date)) break;
    n += 1;
    date = addDays(date, -1);
  }
  return n;
}

export function weekPromises(state: LastroState) {
  const week = weekStartISO();
  return state.promises.filter((p) => p.weekStart === week);
}

export function weekSprintMinutes(state: LastroState) {
  const week = weekStartISO();
  return state.sprints
    .filter((s) => s.date >= week)
    .reduce((a, s) => a + s.minutes, 0);
}

export function weekSkillMinutes(state: LastroState) {
  const week = weekStartISO();
  return state.skillMinutes
    .filter((s) => s.date >= week)
    .reduce((a, s) => a + s.minutes, 0);
}

export function ritualDue(state: LastroState) {
  return state.money.lastRitualMonth !== monthKey();
}

export function splitAmounts(money: Money) {
  const i = money.monthlyIncome || 0;
  return {
    bills: Math.round((i * money.billsPercent) / 100),
    emergency: Math.round((i * money.emergencyPercent) / 100),
    invest: Math.round((i * money.investPercent) / 100),
    fun: Math.round((i * money.funPercent) / 100),
  };
}
