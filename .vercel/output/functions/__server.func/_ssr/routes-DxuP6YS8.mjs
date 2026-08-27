import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Layers, d as ArrowRight, i as Sun, l as HeartPulse, n as Wallet, o as Play, s as Pause, t as X, u as Compass } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxuP6YS8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	return crypto.randomUUID();
}
function moneyBRL(value) {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
		maximumFractionDigits: 0
	}).format(Number.isFinite(value) ? value : 0);
}
function Field({ label, hint, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("flex flex-col gap-1.5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-subtle",
				children: hint
			}) : null
		]
	});
}
function CheckRow({ checked, onToggle, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: cn("flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-[border-color,background-color] duration-150", checked ? "border-sage/40 bg-sage/10" : "border-border bg-raised hover:border-fg/20"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-150", checked ? "border-sage bg-sage text-bg" : "border-border bg-surface text-transparent"),
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "12",
				height: "12",
				viewBox: "0 0 12 12",
				fill: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M2 6.2L4.6 9L10 3",
					stroke: "currentColor",
					strokeWidth: "1.8",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-medium text-fg",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs text-muted",
				children: hint
			}) : null]
		})]
	});
}
function Meter({ value, max, label }) {
	const pct = max <= 0 ? 0 : Math.min(100, Math.round(value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular text-fg",
				children: [pct, "%"]
			})]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 overflow-hidden rounded-full bg-raised",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
				style: { width: `${pct}%` }
			})
		})]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-xl border border-border bg-raised px-3.5 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent/40", "disabled:opacity-40", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-xl border border-border bg-raised px-3.5 py-3 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent/40", "disabled:opacity-40 resize-y", className),
		...props
	});
}
function pad(n) {
	return String(n).padStart(2, "0");
}
function toISODate(d) {
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function todayISO() {
	return toISODate(/* @__PURE__ */ new Date());
}
function parseISODate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function addDays(iso, days) {
	const d = parseISODate(iso);
	d.setDate(d.getDate() + days);
	return toISODate(d);
}
/** Monday of the week containing `iso` (ISO week). */
function weekStartISO(iso = todayISO()) {
	const d = parseISODate(iso);
	const day = d.getDay();
	const diff = day === 0 ? -6 : 1 - day;
	d.setDate(d.getDate() + diff);
	return toISODate(d);
}
function formatDayLong(iso = todayISO()) {
	return parseISODate(iso).toLocaleDateString("pt-BR", {
		weekday: "long",
		day: "numeric",
		month: "long"
	});
}
function formatDayShort(iso) {
	return parseISODate(iso).toLocaleDateString("pt-BR", {
		day: "numeric",
		month: "short"
	});
}
function monthKey(iso = todayISO()) {
	return iso.slice(0, 7);
}
function daysUntil(iso) {
	const a = parseISODate(todayISO()).getTime();
	const b = parseISODate(iso).getTime();
	return Math.round((b - a) / 864e5);
}
function nextPaydayISO(dayOfMonth) {
	const now = /* @__PURE__ */ new Date();
	const day = clampDay(dayOfMonth);
	let candidate = new Date(now.getFullYear(), now.getMonth(), day);
	if (toISODate(candidate) < todayISO()) candidate = new Date(now.getFullYear(), now.getMonth() + 1, day);
	return toISODate(candidate);
}
function clampDay(n) {
	return Math.min(28, Math.max(1, Math.round(n) || 1));
}
function formatTimer(totalSec) {
	const s = Math.max(0, Math.floor(totalSec));
	const m = Math.floor(s / 60);
	const r = s % 60;
	return `${pad(m)}:${pad(r)}`;
}
function weekdayName(n) {
	return [
		"domingo",
		"segunda",
		"terça",
		"quarta",
		"quinta",
		"sexta",
		"sábado"
	][n] ?? "domingo";
}
function addMonthsISO(iso, months) {
	const d = parseISODate(iso);
	d.setMonth(d.getMonth() + months);
	return toISODate(d);
}
var emptyRitual = {
	bills: false,
	emergency: false,
	invest: false,
	fun: false
};
var emptyGoal = {
	title: "",
	why: "",
	metricLabel: "Renda extra mensal",
	metricNow: 0,
	metricTarget: 4e3,
	deadline: addMonthsISO(todayISO(), 3),
	skill: ""
};
var emptyMoney = {
	monthlyIncome: 0,
	paydayDay: 5,
	billsPercent: 50,
	emergencyPercent: 20,
	investPercent: 20,
	funPercent: 10,
	emergencyNow: 0,
	emergencyTarget: 0,
	lastRitualMonth: null,
	ritual: { ...emptyRitual }
};
var emptyTimer = {
	mode: 25,
	running: false,
	endsAt: null,
	remainingSec: 1500,
	label: ""
};
function baseState() {
	return {
		onboarded: false,
		name: "",
		view: "hoje",
		sistemaTab: "cobranca",
		sleepTarget: "23:00",
		accountabilityName: "",
		reviewWeekday: 0,
		goal: { ...emptyGoal },
		money: {
			...emptyMoney,
			ritual: { ...emptyRitual }
		},
		impulses: [],
		body: {},
		oneThing: {},
		promises: [],
		captures: [],
		sprints: [],
		reviews: {},
		ruleBreaks: [],
		skillMinutes: [],
		timer: { ...emptyTimer }
	};
}
function readySystem() {
	return {
		name: "Você",
		goal: {
			title: "Aumentar renda com uma skill vendável",
			why: "TDAH rende em resultado visível. Dinheiro atrelado a entrega, não a horas sentado.",
			metricLabel: "Renda extra mensal",
			metricNow: 0,
			metricTarget: 4e3,
			deadline: addMonthsISO(todayISO(), 3),
			skill: "Vendas"
		},
		money: {
			monthlyIncome: 5e3,
			paydayDay: 5,
			billsPercent: 50,
			emergencyPercent: 20,
			investPercent: 20,
			funPercent: 10,
			emergencyTarget: 15e3
		},
		sleepTarget: "23:00",
		accountabilityName: "Mentor",
		reviewWeekday: 0,
		promises: [
			"Cinco sprints de prospecção esta semana",
			"Ritual do pagamento no dia 5, sem negociar comigo",
			"Corpo: pelo menos cinco dias com os três checks"
		]
	};
}
function applyOnboard(payload) {
	const week = weekStartISO();
	return {
		...baseState(),
		onboarded: true,
		name: payload.name.trim() || "Você",
		goal: payload.goal,
		money: {
			...emptyMoney,
			...payload.money,
			ritual: { ...emptyRitual }
		},
		sleepTarget: payload.sleepTarget,
		accountabilityName: payload.accountabilityName.trim() || "Alguém",
		reviewWeekday: payload.reviewWeekday,
		promises: payload.promises.filter((t) => t.trim()).slice(0, 3).map((text) => ({
			id: uid(),
			weekStart: week,
			text: text.trim(),
			done: false
		}))
	};
}
var useLastro = create()(persist((set, get) => ({
	...baseState(),
	setView: (view) => set({ view }),
	setSistemaTab: (sistemaTab) => set({ sistemaTab }),
	completeOnboarding: (payload) => set({ ...applyOnboard(payload) }),
	loadReadySystem: () => set({ ...applyOnboard(readySystem()) }),
	resetAll: () => set({ ...baseState() }),
	setGoal: (patch) => set({ goal: {
		...get().goal,
		...patch
	} }),
	setMoney: (patch) => set({ money: {
		...get().money,
		...patch
	} }),
	setRitual: (key, value) => set({ money: {
		...get().money,
		ritual: {
			...get().money.ritual,
			[key]: value
		}
	} }),
	completeRitual: () => set({ money: {
		...get().money,
		lastRitualMonth: monthKey(),
		ritual: {
			bills: true,
			emergency: true,
			invest: true,
			fun: true
		}
	} }),
	setName: (name) => set({ name }),
	setAccountability: (accountabilityName, reviewWeekday) => set({
		accountabilityName,
		reviewWeekday
	}),
	setSleepTarget: (sleepTarget) => set({ sleepTarget }),
	setOneThing: (text) => {
		const date = todayISO();
		const prev = get().oneThing[date];
		set({ oneThing: {
			...get().oneThing,
			[date]: {
				text,
				done: prev?.done ?? false
			}
		} });
	},
	toggleOneThing: () => {
		const date = todayISO();
		const prev = get().oneThing[date] ?? {
			text: "",
			done: false
		};
		if (!prev.text.trim()) return;
		set({ oneThing: {
			...get().oneThing,
			[date]: {
				...prev,
				done: !prev.done
			}
		} });
	},
	toggleBody: (field) => {
		const date = todayISO();
		const prev = get().body[date] ?? {
			date,
			sleep: false,
			walk: false,
			protein: false
		};
		set({ body: {
			...get().body,
			[date]: {
				...prev,
				[field]: !prev[field]
			}
		} });
	},
	addPromise: (text) => {
		const t = text.trim();
		if (!t) return;
		const week = weekStartISO();
		if (get().promises.filter((p) => p.weekStart === week).length >= 3) return;
		set({ promises: [...get().promises, {
			id: uid(),
			weekStart: week,
			text: t,
			done: false
		}] });
	},
	togglePromise: (id) => set({ promises: get().promises.map((p) => p.id === id ? {
		...p,
		done: !p.done
	} : p) }),
	removePromise: (id) => set({ promises: get().promises.filter((p) => p.id !== id) }),
	addCapture: (text) => {
		const t = text.trim();
		if (!t) return;
		set({ captures: [{
			id: uid(),
			text: t,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			bucket: "inbox"
		}, ...get().captures] });
	},
	moveCapture: (id, bucket) => set({ captures: get().captures.map((c) => c.id === id ? {
		...c,
		bucket
	} : c) }),
	removeCapture: (id) => set({ captures: get().captures.filter((c) => c.id !== id) }),
	addImpulse: (item, amount) => {
		const t = item.trim();
		if (!t) return;
		const createdAt = todayISO();
		set({ impulses: [{
			id: uid(),
			item: t,
			amount: Math.max(0, amount),
			createdAt,
			waitUntil: addDays(createdAt, 2),
			status: "waiting"
		}, ...get().impulses] });
	},
	resolveImpulse: (id, status) => set({ impulses: get().impulses.map((i) => i.id === id ? {
		...i,
		status
	} : i) }),
	addEmergency: (amount) => set({ money: {
		...get().money,
		emergencyNow: Math.max(0, get().money.emergencyNow + amount)
	} }),
	setTimerMode: (mode) => {
		const t = get().timer;
		if (t.running) return;
		set({ timer: {
			...t,
			mode,
			remainingSec: mode * 60,
			endsAt: null
		} });
	},
	setTimerLabel: (label) => set({ timer: {
		...get().timer,
		label
	} }),
	startTimer: () => {
		const t = get().timer;
		const remaining = t.remainingSec > 0 ? t.remainingSec : t.mode * 60;
		set({ timer: {
			...t,
			running: true,
			remainingSec: remaining,
			endsAt: Date.now() + remaining * 1e3,
			label: t.label.trim() || get().oneThing[todayISO()]?.text || "Sprint"
		} });
	},
	pauseTimer: () => {
		const t = get().timer;
		if (!t.running || !t.endsAt) return;
		const remaining = Math.max(0, Math.round((t.endsAt - Date.now()) / 1e3));
		set({ timer: {
			...t,
			running: false,
			remainingSec: remaining,
			endsAt: null
		} });
	},
	tickTimer: (now) => {
		const t = get().timer;
		if (!t.running || !t.endsAt) return false;
		const remaining = Math.max(0, Math.round((t.endsAt - now) / 1e3));
		if (remaining === t.remainingSec) return remaining === 0;
		set({ timer: {
			...t,
			remainingSec: remaining
		} });
		return remaining === 0;
	},
	completeSprint: () => {
		const t = get().timer;
		const minutes = t.mode;
		const label = t.label.trim() || get().oneThing[todayISO()]?.text || "Sprint";
		set({
			sprints: [{
				id: uid(),
				date: todayISO(),
				minutes,
				label,
				at: Date.now()
			}, ...get().sprints],
			timer: {
				mode: t.mode,
				running: false,
				endsAt: null,
				remainingSec: t.mode * 60,
				label: t.label
			}
		});
	},
	skipTimer: () => {
		const t = get().timer;
		set({ timer: {
			...t,
			running: false,
			endsAt: null,
			remainingSec: t.mode * 60
		} });
	},
	logSkillMinutes: (minutes) => {
		if (minutes <= 0) return;
		const date = todayISO();
		set({ skillMinutes: get().skillMinutes.find((s) => s.date === date) ? get().skillMinutes.map((s) => s.date === date ? {
			...s,
			minutes: s.minutes + minutes
		} : s) : [...get().skillMinutes, {
			date,
			minutes
		}] });
	},
	breakRule: (ruleId) => {
		const date = todayISO();
		if (get().ruleBreaks.some((b) => b.date === date && b.ruleId === ruleId)) return;
		set({ ruleBreaks: [...get().ruleBreaks, {
			date,
			ruleId
		}] });
	},
	unbreakRule: (ruleId) => {
		const date = todayISO();
		set({ ruleBreaks: get().ruleBreaks.filter((b) => !(b.date === date && b.ruleId === ruleId)) });
	},
	saveReview: (patch) => {
		const weekStart = weekStartISO();
		const prev = get().reviews[weekStart] ?? {
			weekStart,
			promised: "",
			delivered: "",
			learned: "",
			next: "",
			done: false
		};
		set({ reviews: {
			...get().reviews,
			[weekStart]: {
				...prev,
				...patch
			}
		} });
	}
}), {
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
		timer: s.timer
	})
}));
function bodyToday(state, date = todayISO()) {
	return state.body[date] ?? {
		date,
		sleep: false,
		walk: false,
		protein: false
	};
}
function bodyScore(day) {
	return Number(day.sleep) + Number(day.walk) + Number(day.protein);
}
function isOnRails(state, date) {
	const thing = state.oneThing[date];
	const body = bodyToday(state, date);
	return Boolean(thing?.done) && bodyScore(body) >= 2;
}
function streakCount(state) {
	let date = todayISO();
	if (!isOnRails(state, date)) date = addDays(date, -1);
	let n = 0;
	for (let i = 0; i < 400; i++) {
		if (!isOnRails(state, date)) break;
		n += 1;
		date = addDays(date, -1);
	}
	return n;
}
function weekPromises(state) {
	const week = weekStartISO();
	return state.promises.filter((p) => p.weekStart === week);
}
function weekSprintMinutes(state) {
	const week = weekStartISO();
	return state.sprints.filter((s) => s.date >= week).reduce((a, s) => a + s.minutes, 0);
}
function weekSkillMinutes(state) {
	const week = weekStartISO();
	return state.skillMinutes.filter((s) => s.date >= week).reduce((a, s) => a + s.minutes, 0);
}
function ritualDue(state) {
	return state.money.lastRitualMonth !== monthKey();
}
function splitAmounts(money) {
	const i = money.monthlyIncome || 0;
	return {
		bills: Math.round(i * money.billsPercent / 100),
		emergency: Math.round(i * money.emergencyPercent / 100),
		invest: Math.round(i * money.investPercent / 100),
		fun: Math.round(i * money.funPercent / 100)
	};
}
function Corpo() {
	const state = useLastro();
	const date = todayISO();
	const today = bodyToday(state, date);
	const days = Array.from({ length: 14 }, (_, i) => addDays(date, i - 13));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
					children: "Base biológica"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight",
					children: "Sem corpo, o resto é teatro."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Sono, caminhada, proteína. Três alavancas. Sem romance."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Hoje"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: today.sleep,
								onToggle: () => state.toggleBody("sleep"),
								label: "Dormiu no horário",
								hint: `Alvo ${state.sleepTarget}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: today.walk,
								onToggle: () => state.toggleBody("walk"),
								label: "Caminhou ou treinou",
								hint: "Vinte minutos feios valem mais que o treino perfeito pulado."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: today.protein,
								onToggle: () => state.toggleBody("protein"),
								label: "Proteína de manhã"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Horário de dormir",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "time",
								value: state.sleepTarget,
								onChange: (e) => state.setSleepTarget(e.target.value)
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Últimos 14 dias"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-7 gap-2",
						children: days.map((d) => {
							const score = bodyScore(bodyToday(state, d));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-9 items-center justify-center rounded-lg text-xs tabular", score === 3 && "bg-sage text-bg", score === 2 && "bg-sage/40 text-fg", score === 1 && "bg-raised text-muted", score === 0 && "bg-raised text-subtle", d === date && "ring-1 ring-accent"),
									title: `${d} · ${score}/3`,
									children: Number(d.slice(-2))
								})
							}, d);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-subtle",
						children: "Cheio = 3/3. O anel é hoje. Não precisa ser perfeito. Precisa ser frequente."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-medium tracking-tight",
					children: "A regra do corpo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted text-pretty",
					children: "TDAH sem sono vira gasto impulsivo, projeto novo e mentira para si. Trate avaliação médica e possível medicação como parte do sistema — não como falha de caráter."
				})]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,opacity,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-fg",
			secondary: "bg-raised text-fg border border-border hover:border-fg/25",
			ghost: "text-muted hover:text-fg hover:bg-raised",
			rust: "bg-rust text-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-lg px-3 text-sm",
			md: "h-11 rounded-xl px-4 text-sm",
			lg: "h-12 rounded-xl px-5 text-base",
			icon: "size-11 rounded-xl"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Dinheiro() {
	const state = useLastro();
	const m = state.money;
	const split = splitAmounts(m);
	const payday = nextPaydayISO(m.paydayDay);
	const due = ritualDue(state);
	const days = daysUntil(payday);
	const [impulse, setImpulse] = (0, import_react.useState)("");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [reserveAdd, setReserveAdd] = (0, import_react.useState)("");
	const waiting = state.impulses.filter((i) => i.status === "waiting");
	const today = todayISO();
	const totalPct = m.billsPercent + m.emergencyPercent + m.investPercent + m.funPercent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
					children: "Piloto automático"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight",
					children: "Você não decide no calor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: days === 0 ? "Pagamento é hoje. Executa o ritual." : `Próximo pagamento em ${days} dia${days === 1 ? "" : "s"} · dia ${m.paydayDay}`
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Split do salário"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex h-3 overflow-hidden rounded-full bg-raised",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-accent",
								style: { width: `${m.billsPercent}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-sage",
								style: { width: `${m.emergencyPercent}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-fg/40",
								style: { width: `${m.investPercent}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-rust/80",
								style: { width: `${m.funPercent}%` }
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								color: "bg-accent",
								label: "Contas",
								value: split.bills,
								pct: m.billsPercent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								color: "bg-sage",
								label: "Reserva",
								value: split.emergency,
								pct: m.emergencyPercent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								color: "bg-fg/40",
								label: "Investir",
								value: split.invest,
								pct: m.investPercent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								color: "bg-rust/80",
								label: "Livre",
								value: split.fun,
								pct: m.funPercent
							})
						]
					}),
					totalPct !== 100 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-rust",
						children: [
							"Os percentuais somam ",
							totalPct,
							"%. Ajuste para 100."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Renda mensal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: m.monthlyIncome || "",
								onChange: (e) => state.setMoney({ monthlyIncome: Number(e.target.value) || 0 })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Dia",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								min: 1,
								max: 28,
								value: m.paydayDay,
								onChange: (e) => state.setMoney({ paydayDay: Math.min(28, Math.max(1, Number(e.target.value) || 1)) })
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `rounded-3xl border p-5 ${due ? "border-accent/40 bg-surface" : "border-border bg-surface"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Ritual do pagamento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: due ? "Ainda não executado neste mês. Sem negociar com você mesmo." : "Feito neste mês. Pode esquecer até o próximo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: m.ritual.bills,
								onToggle: () => state.setRitual("bills", !m.ritual.bills),
								label: `Pagar contas · ${moneyBRL(split.bills)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: m.ritual.emergency,
								onToggle: () => state.setRitual("emergency", !m.ritual.emergency),
								label: `Mover reserva · ${moneyBRL(split.emergency)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: m.ritual.invest,
								onToggle: () => state.setRitual("invest", !m.ritual.invest),
								label: `Investir · ${moneyBRL(split.invest)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								checked: m.ritual.fun,
								onToggle: () => state.setRitual("fun", !m.ritual.fun),
								label: `Livre, e só isso · ${moneyBRL(split.fun)}`
							})
						]
					}),
					due ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full",
						onClick: state.completeRitual,
						children: "Marcar ritual completo"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Reserva de emergência"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
							value: m.emergencyNow,
							max: m.emergencyTarget || 1,
							label: `${moneyBRL(m.emergencyNow)} de ${moneyBRL(m.emergencyTarget)}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							state.addEmergency(Number(reserveAdd) || 0);
							setReserveAdd("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							inputMode: "numeric",
							value: reserveAdd,
							onChange: (e) => setReserveAdd(e.target.value),
							placeholder: "Somar à reserva"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Somar"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Impulso · 48 horas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "TDAH gasta para regular emoção. Escreve. Espera. Depois decide."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-col gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							state.addImpulse(impulse, Number(amount) || 0);
							setImpulse("");
							setAmount("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: impulse,
							onChange: (e) => setImpulse(e.target.value),
							placeholder: "O que você quer comprar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: amount,
								onChange: (e) => setAmount(e.target.value),
								placeholder: "R$"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "secondary",
								disabled: !impulse.trim(),
								children: "Esperar 48h"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col gap-2",
						children: waiting.map((i) => {
							const ready = today >= i.waitUntil;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border bg-raised px-3.5 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-fg",
										children: i.item
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "tabular text-sm text-muted",
										children: moneyBRL(i.amount)
									})]
								}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										onClick: () => state.resolveImpulse(i.id, "dropped"),
										children: "Larguei"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => state.resolveImpulse(i.id, "bought"),
										children: "Comprei mesmo"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-subtle",
									children: ["Decide a partir de ", i.waitUntil]
								})]
							}, i.id);
						})
					})
				]
			})
		]
	});
}
function Legend({ color, label, value, pct }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1 size-2.5 rounded-full ${color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block text-muted",
			children: [
				label,
				" · ",
				pct,
				"%"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular text-fg",
			children: moneyBRL(value)
		})] })]
	});
}
function beep() {
	try {
		const ctx = new AudioContext();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "sine";
		osc.frequency.value = 528;
		gain.gain.value = .04;
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start();
		gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .7);
		osc.stop(ctx.currentTime + .72);
	} catch {}
}
function SprintTimer() {
	const timer = useLastro((s) => s.timer);
	const oneThing = useLastro((s) => s.oneThing[todayISO()]?.text ?? "");
	const start = useLastro((s) => s.startTimer);
	const pause = useLastro((s) => s.pauseTimer);
	const tick = useLastro((s) => s.tickTimer);
	const complete = useLastro((s) => s.completeSprint);
	const skip = useLastro((s) => s.skipTimer);
	const setMode = useLastro((s) => s.setTimerMode);
	const setLabel = useLastro((s) => s.setTimerLabel);
	const completing = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!timer.running) return;
		const id = window.setInterval(() => {
			if (tick(Date.now()) && !completing.current) {
				completing.current = true;
				beep();
				complete();
				completing.current = false;
			}
		}, 250);
		return () => window.clearInterval(id);
	}, [
		timer.running,
		tick,
		complete
	]);
	const remaining = timer.running ? Math.max(0, Math.round(((timer.endsAt ?? Date.now()) - Date.now()) / 1e3)) : timer.remainingSec;
	const total = timer.mode * 60;
	const pct = Math.min(100, (total - remaining) / total * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Sprint"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-full bg-raised p-1",
					children: [25, 50].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: timer.running,
						onClick: () => setMode(m),
						className: `h-8 rounded-full px-3 text-xs font-medium transition-colors ${timer.mode === m ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"}`,
						children: [m, " min"]
					}, m))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-6xl font-medium tracking-tight tabular text-fg",
				children: formatTimer(remaining)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-1 overflow-hidden rounded-full bg-raised",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-200",
					style: { width: `${pct}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "mt-4 h-11 w-full rounded-xl border border-transparent bg-transparent px-0 text-sm text-fg placeholder:text-subtle focus-visible:outline-none",
				placeholder: oneThing || "O que você está fazendo neste bloco",
				value: timer.label,
				onChange: (e) => setLabel(e.target.value),
				disabled: timer.running
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex gap-2",
				children: [timer.running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: pause,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}), " Pausar"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "flex-1",
					onClick: start,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}),
						" ",
						remaining < total && remaining > 0 ? "Retomar" : "Começar"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: skip,
					"aria-label": "Zerar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {})
				})]
			})
		]
	});
}
function Hoje() {
	const state = useLastro();
	const date = todayISO();
	const thing = state.oneThing[date] ?? {
		text: "",
		done: false
	};
	const body = bodyToday(state, date);
	const promises = weekPromises(state);
	const streak = streakCount(state);
	const hour = (/* @__PURE__ */ new Date()).getHours();
	const payday = nextPaydayISO(state.money.paydayDay);
	const [capture, setCapture] = (0, import_react.useState)("");
	const [draftThing, setDraftThing] = (0, import_react.useState)(thing.text);
	const commitThing = () => {
		const t = draftThing.trim();
		if (!t) return;
		state.setOneThing(t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4 pb-8 lg:grid lg:grid-cols-2 lg:items-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pt-1 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: formatDayLong()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl font-medium tracking-tight",
						children: greeting(hour, state.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: streak > 0 ? `${streak} dia${streak === 1 ? "" : "s"} nos trilhos` : "Hoje começa o lastro. Uma coisa. Corpo. Sprint."
					})
				]
			}),
			hour < 10 && !thing.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl border border-border bg-raised px-4 py-3 text-sm text-fg lg:col-span-2",
				children: "Primeira hora: a uma coisa. Rede social fica para depois."
			}) : null,
			ritualDue(state) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => state.setView("dinheiro"),
				className: "flex items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-left lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm font-medium text-fg",
					children: "Ritual do pagamento pendente"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						"Próximo dia ",
						state.money.paydayDay,
						" · ",
						payday
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-accent" })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Hoje, uma coisa"
				}), thing.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						checked: thing.done,
						onToggle: state.toggleOneThing,
						label: thing.text,
						hint: thing.done ? "Feito. O resto é bônus." : "Isso é o dia. O resto espera."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 text-xs text-subtle hover:text-muted",
						onClick: () => {
							setDraftThing(thing.text);
							state.setOneThing("");
						},
						children: "Trocar a coisa"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 flex flex-col gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						commitThing();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: draftThing,
						onChange: (e) => setDraftThing(e.target.value),
						placeholder: "A única coisa que, se feita, o dia valeu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: !draftThing.trim(),
						children: "Travar esta coisa"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprintTimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Corpo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs tabular text-muted",
						children: [bodyScore(body), "/3"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							checked: body.sleep,
							onToggle: () => state.toggleBody("sleep"),
							label: "Dormiu no horário",
							hint: `Alvo ${state.sleepTarget}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							checked: body.walk,
							onToggle: () => state.toggleBody("walk"),
							label: "Caminhou ou treinou"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							checked: body.protein,
							onToggle: () => state.toggleBody("protein"),
							label: "Proteína de manhã"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Norte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl font-medium tracking-tight text-fg",
						children: state.goal.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
							value: state.goal.metricNow,
							max: state.goal.metricTarget || 1,
							label: `${moneyBRL(state.goal.metricNow)} de ${moneyBRL(state.goal.metricTarget)}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: [
							weekSprintMinutes(state),
							" min de sprint nesta semana · skill",
							" ",
							state.goal.skill
						]
					})
				]
			}),
			promises.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Promessas da semana"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						checked: p.done,
						onToggle: () => state.togglePromise(p.id),
						label: p.text
					}, p.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Captura"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Saiu da cabeça. Não vira projeto novo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							state.addCapture(capture);
							setCapture("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: capture,
							onChange: (e) => setCapture(e.target.value),
							placeholder: "Estacionar uma ideia"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							disabled: !capture.trim(),
							children: "Guardar"
						})]
					})
				]
			})
		]
	});
}
function greeting(hour, name) {
	const n = name.trim() || "você";
	if (hour < 12) return `Bom dia, ${n}.`;
	if (hour < 18) return `Boa tarde, ${n}.`;
	return `Boa noite, ${n}.`;
}
function Norte() {
	const state = useLastro();
	const promises = weekPromises(state);
	const [p, setP] = (0, import_react.useState)("");
	const [depois, setDepois] = (0, import_react.useState)("");
	const [skillMin, setSkillMin] = (0, import_react.useState)("25");
	const left = daysUntil(state.goal.deadline);
	const depoisItems = state.captures.filter((c) => c.bucket === "depois");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: "Norte do trimestre"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-3xl font-medium tracking-tight",
				children: "Um jogo. Só um."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Objetivo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.goal.title,
							onChange: (e) => state.setGoal({ title: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Por quê",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: state.goal.why,
								onChange: (e) => state.setGoal({ why: e.target.value })
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Agora (R$)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: state.goal.metricNow || "",
								onChange: (e) => state.setGoal({ metricNow: Number(e.target.value) || 0 })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alvo (R$)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: state.goal.metricTarget || "",
								onChange: (e) => state.setGoal({ metricTarget: Number(e.target.value) || 0 })
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
							value: state.goal.metricNow,
							max: state.goal.metricTarget || 1,
							label: `${moneyBRL(state.goal.metricNow)} / ${moneyBRL(state.goal.metricTarget)}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: left >= 0 ? `${left} dias até ${formatDayShort(state.goal.deadline)}` : `Prazo passou em ${formatDayShort(state.goal.deadline)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "A skill cara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-3",
						value: state.goal.skill,
						onChange: (e) => state.setGoal({ skill: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							weekSkillMinutes(state),
							" min praticados esta semana ·",
							" ",
							weekSprintMinutes(state),
							" min de sprint"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							state.logSkillMinutes(Number(skillMin) || 0);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							inputMode: "numeric",
							value: skillMin,
							onChange: (e) => setSkillMin(e.target.value),
							className: "w-24",
							"aria-label": "Minutos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							className: "flex-1",
							children: "Registrar prática"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Promessas da semana · máx. 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: promises.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
									checked: item.done,
									onToggle: () => state.togglePromise(item.id),
									label: item.text
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-2 size-11 text-subtle hover:text-fg",
								onClick: () => state.removePromise(item.id),
								"aria-label": "Remover",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
							})]
						}, item.id))
					}),
					promises.length < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							state.addPromise(p);
							setP("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: p,
							onChange: (e) => setP(e.target.value),
							placeholder: "Promessa pequena e cumprível"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Somar"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-subtle",
						children: "Três já. Cumpre essas antes de inventar a quarta."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Depois"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Ideias boas que não são este trimestre. Estacionadas, não mortas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (!depois.trim()) return;
							state.addCapture(depois);
							const first = useLastro.getState().captures[0];
							if (first) state.moveCapture(first.id, "depois");
							setDepois("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: depois,
							onChange: (e) => setDepois(e.target.value),
							placeholder: "Projeto tentador"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Estacionar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: [depoisItems.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 rounded-2xl bg-raised px-3.5 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 text-fg",
								children: c.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-xs text-subtle hover:text-rust",
								onClick: () => state.moveCapture(c.id, "nunca"),
								children: "Arquivar"
							})]
						}, c.id)), depoisItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-subtle",
							children: "Nada estacionado. Bom."
						}) : null]
					})
				]
			})
		]
	});
}
var WEEKDAYS = [
	{
		v: 0,
		l: "Dom"
	},
	{
		v: 1,
		l: "Seg"
	},
	{
		v: 2,
		l: "Ter"
	},
	{
		v: 3,
		l: "Qua"
	},
	{
		v: 4,
		l: "Qui"
	},
	{
		v: 5,
		l: "Sex"
	},
	{
		v: 6,
		l: "Sáb"
	}
];
function Onboarding() {
	const complete = useLastro((s) => s.completeOnboarding);
	const loadReady = useLastro((s) => s.loadReadySystem);
	const [step, setStep] = (0, import_react.useState)(0);
	const [draft, setDraft] = (0, import_react.useState)(() => ({
		name: "",
		goal: {
			title: "",
			why: "",
			metricLabel: "Renda extra mensal",
			metricNow: 0,
			metricTarget: 4e3,
			deadline: addMonthsISO(todayISO(), 3),
			skill: ""
		},
		money: {
			monthlyIncome: 5e3,
			paydayDay: 5,
			billsPercent: 50,
			emergencyPercent: 20,
			investPercent: 20,
			funPercent: 10,
			emergencyTarget: 15e3
		},
		sleepTarget: "23:00",
		accountabilityName: "",
		reviewWeekday: 0,
		promises: [
			"",
			"",
			""
		]
	}));
	if (step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-between px-5 py-10 lg:max-w-xl lg:justify-center lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stagger-in flex flex-col gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
					children: "Sistema operacional"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl font-medium tracking-tight text-fg sm:text-6xl",
					children: "LASTRO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg text-muted",
					children: "Difícil de descarrilar."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-pretty text-fg/90",
					children: "TDAH forte não se vence com disciplina. Se vence com trilhos: um norte, dinheiro no automático, sprints curtos, corpo estável e alguém cobrando."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-pretty text-muted",
					children: "Você não vai tentar ser uma pessoa organizada. Você vai se tornar uma pessoa difícil de descarrilar."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => setStep(1),
					children: "Instalar o sistema"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "secondary",
					onClick: loadReady,
					children: "Usar o sistema pronto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-subtle",
					children: "O sistema pronto já vem com norte, split financeiro, promessas e regras. Você edita depois."
				})
			]
		})]
	});
	const total = 5;
	const next = () => setStep((s) => Math.min(total, s + 1));
	const back = () => setStep((s) => Math.max(1, s - 1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-8 lg:max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
					children: [
						"Passo ",
						step,
						" de ",
						total
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 w-6 rounded-full ${i < step ? "bg-accent" : "bg-border"}` }, i))
				})]
			}),
			step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in flex flex-1 flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Como te chamamos?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nome",
					hint: "Pode ser só o primeiro nome.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: draft.name,
						onChange: (e) => setDraft({
							...draft,
							name: e.target.value
						}),
						placeholder: "Seu nome"
					})
				})]
			}),
			step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in flex flex-1 flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "Um norte. Só um."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Três meses. Uma métrica. O resto vai para Depois."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Objetivo do trimestre",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.goal.title,
							onChange: (e) => setDraft({
								...draft,
								goal: {
									...draft.goal,
									title: e.target.value
								}
							}),
							placeholder: "Ex.: fechar R$ 4 mil extra com vendas"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Por quê isso importa",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: draft.goal.why,
							onChange: (e) => setDraft({
								...draft,
								goal: {
									...draft.goal,
									why: e.target.value
								}
							}),
							placeholder: "A frase que te puxa de volta quando o cérebro quiser outro projeto."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Métrica",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.goal.metricLabel,
								onChange: (e) => setDraft({
									...draft,
									goal: {
										...draft.goal,
										metricLabel: e.target.value
									}
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alvo (R$)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: draft.goal.metricTarget || "",
								onChange: (e) => setDraft({
									...draft,
									goal: {
										...draft.goal,
										metricTarget: Number(e.target.value) || 0
									}
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "A skill cara deste trimestre",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.goal.skill,
							onChange: (e) => setDraft({
								...draft,
								goal: {
									...draft.goal,
									skill: e.target.value
								}
							}),
							placeholder: "Vendas, escrita, ofício, negociação…"
						})
					})
				]
			}),
			step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in flex flex-1 flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "Dinheiro no automático."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Você decide uma vez. O dia do pagamento só executa."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Renda mensal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: draft.money.monthlyIncome || "",
								onChange: (e) => setDraft({
									...draft,
									money: {
										...draft.money,
										monthlyIncome: Number(e.target.value) || 0
									}
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Dia do pagamento",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								min: 1,
								max: 28,
								value: draft.money.paydayDay,
								onChange: (e) => setDraft({
									...draft,
									money: {
										...draft.money,
										paydayDay: Math.min(28, Math.max(1, Number(e.target.value) || 1))
									}
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							["billsPercent", "Contas %"],
							["emergencyPercent", "Reserva %"],
							["investPercent", "Investir %"],
							["funPercent", "Livre %"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								inputMode: "numeric",
								value: draft.money[key],
								onChange: (e) => setDraft({
									...draft,
									money: {
										...draft.money,
										[key]: Number(e.target.value) || 0
									}
								})
							})
						}, key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Meta da reserva de emergência",
						hint: "Três a seis meses de contas. Número redondo basta.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							inputMode: "numeric",
							value: draft.money.emergencyTarget || "",
							onChange: (e) => setDraft({
								...draft,
								money: {
									...draft.money,
									emergencyTarget: Number(e.target.value) || 0
								}
							})
						})
					})
				]
			}),
			step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in flex flex-1 flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "Corpo e cobrança."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Sem sono o sistema cai. Sem alguém cobrando, você se engana."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Horário de dormir",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "time",
							value: draft.sleepTarget,
							onChange: (e) => setDraft({
								...draft,
								sleepTarget: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Quem te cobra toda semana",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.accountabilityName,
							onChange: (e) => setDraft({
								...draft,
								accountabilityName: e.target.value
							}),
							placeholder: "Nome do mentor, sócio, terapeuta, amigo"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Dia da revisão"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-7 gap-1.5",
						children: WEEKDAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								reviewWeekday: d.v
							}),
							className: `h-11 rounded-xl text-xs font-medium transition-colors ${draft.reviewWeekday === d.v ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg"}`,
							children: d.l
						}, d.v))
					})] })
				]
			}),
			step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in flex flex-1 flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Três promessas desta semana."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Pequenas. Cumpríveis. Nada de “vou acordar 5h e estudar 4 horas”."
				})] }), draft.promises.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: `Promessa ${i + 1}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: p,
						onChange: (e) => {
							const nextP = [...draft.promises];
							nextP[i] = e.target.value;
							setDraft({
								...draft,
								promises: nextP
							});
						},
						placeholder: i === 0 ? "Ex.: cinco sprints da skill" : i === 1 ? "Ex.: ritual do pagamento" : "Ex.: cinco dias de corpo"
					})
				}, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: back,
					className: "flex-1",
					children: "Voltar"
				}), step < total ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: next,
					className: "flex-1",
					children: "Continuar"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => complete({
						...draft,
						...readyFill(draft)
					}),
					className: "flex-1",
					children: "Ligar o sistema"
				})]
			})
		]
	});
}
function readyFill(draft) {
	const seed = readySystem();
	return {
		...draft,
		name: draft.name.trim() || seed.name,
		goal: {
			...draft.goal,
			title: draft.goal.title.trim() || seed.goal.title,
			why: draft.goal.why.trim() || seed.goal.why,
			skill: draft.goal.skill.trim() || seed.goal.skill
		},
		accountabilityName: draft.accountabilityName.trim() || seed.accountabilityName,
		promises: draft.promises.map((p, i) => p.trim() || seed.promises[i] || "")
	};
}
var RULES = [
	{
		id: "do-1",
		kind: "do",
		title: "Um objetivo por trimestre",
		body: "Tudo que não empurra o norte entra em Depois. Dez metas é zero meta."
	},
	{
		id: "do-2",
		kind: "do",
		title: "Dinheiro no piloto automático",
		body: "No dia do pagamento: contas, reserva, investimento. Sem decidir. Decisão é o inimigo."
	},
	{
		id: "do-3",
		kind: "do",
		title: "Trabalho em sprints",
		body: "25 ou 50 minutos. Começar feio. Terminar o suficiente. Perfeição é procrastinação."
	},
	{
		id: "do-4",
		kind: "do",
		title: "Ambiente, não força de vontade",
		body: "Celular longe. Distração bloqueada. Mesa limpa. Roupa de modo trabalho."
	},
	{
		id: "do-5",
		kind: "do",
		title: "Corpo como base",
		body: "Sono no horário. Caminhada. Proteína de manhã. TDAH sem sono vira caos financeiro."
	},
	{
		id: "do-6",
		kind: "do",
		title: "Carreira que pague o cérebro",
		body: "Resultado visível, prazo real, novidade. Dinheiro atrelado a entrega, não a horas sentado."
	},
	{
		id: "do-7",
		kind: "do",
		title: "Alguém cobrando",
		body: "Mentor, sócio, terapeuta, amigo. Toda semana: o que prometeu / o que entregou."
	},
	{
		id: "do-8",
		kind: "do",
		title: "Uma skill cara",
		body: "Vendas, escrita, ofício técnico, negociação. Uma skill boa paga o resto da vida."
	},
	{
		id: "do-9",
		kind: "do",
		title: "Tratar o TDAH de verdade",
		body: "Avaliação, possível medicação, terapia. Não romantizar o caos. Cérebro tratado rende mais."
	},
	{
		id: "do-10",
		kind: "do",
		title: "Tudo fora da cabeça",
		body: "Calendário, lista, alarme, captura. Se não está escrito, não existe."
	},
	{
		id: "av-1",
		kind: "avoid",
		title: "Confiar em motivação",
		body: "Motivação some. Rotina pequena e chata vence."
	},
	{
		id: "av-2",
		kind: "avoid",
		title: "Vários projetos incríveis",
		body: "Isso é fuga. Um projeto até gerar dinheiro. Só então o próximo."
	},
	{
		id: "av-3",
		kind: "avoid",
		title: "Trabalho sem prazo nem feedback",
		body: "E-mail infinito, planilha sem dono, reunião sem decisão. Empobrece."
	},
	{
		id: "av-4",
		kind: "avoid",
		title: "Consumo como recompensa",
		body: "TDAH gasta para regular emoção. Impulso espera 48 horas."
	},
	{
		id: "av-5",
		kind: "avoid",
		title: "Cursos infinitos sem aplicar",
		body: "Aprender sem vender ou entregar é hobby caro."
	},
	{
		id: "av-6",
		kind: "avoid",
		title: "Rede no começo do dia",
		body: "Primeira hora = a uma coisa. Scroll é veneno."
	},
	{
		id: "av-7",
		kind: "avoid",
		title: "Tudo ou nada",
		body: "Vinte minutos feios valem mais que o plano perfeito abandonado."
	},
	{
		id: "av-8",
		kind: "avoid",
		title: "Promessas gigantes",
		body: "Não promete quatro horas. Promete trinta minutos e cumpre."
	},
	{
		id: "av-9",
		kind: "avoid",
		title: "Ambientes caóticos",
		body: "Quem normaliza atraso e “depois a gente vê” te puxa para baixo."
	},
	{
		id: "av-10",
		kind: "avoid",
		title: "Atalhos milagrosos",
		body: "TDAH ama novidade. Golpe também. Sem day trade mágico, sem pirâmide."
	}
];
var TABS = [
	{
		id: "cobranca",
		label: "Cobrança"
	},
	{
		id: "codigo",
		label: "Código"
	},
	{
		id: "cerebro",
		label: "Cérebro"
	},
	{
		id: "manual",
		label: "Manual"
	}
];
function Sistema() {
	const tab = useLastro((s) => s.sistemaTab);
	const setTab = useLastro((s) => s.setSistemaTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: "Sistema"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-3xl font-medium tracking-tight",
				children: "Trilhos externos."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto rounded-full bg-surface p-1",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(t.id),
					className: cn("h-10 flex-1 rounded-full px-3 text-sm font-medium whitespace-nowrap transition-colors", tab === t.id ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
					children: t.label
				}, t.id))
			}),
			tab === "cobranca" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cobranca, {}),
			tab === "codigo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Codigo, {}),
			tab === "cerebro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cerebro, {}),
			tab === "manual" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manual, {})
		]
	});
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
		done: false
	};
	const promises = weekPromises(state);
	const isReviewDay = (/* @__PURE__ */ new Date()).getDay() === state.reviewWeekday;
	const [copied, setCopied] = (0, import_react.useState)(false);
	const letter = (0, import_react.useMemo)(() => buildLetter(state), [state]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4",
		children: [
			isReviewDay && !review.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm",
				children: [
					"Hoje é dia de revisão com ",
					state.accountabilityName || "sua pessoa",
					". Não pule."
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Quem cobra",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.accountabilityName,
							onChange: (e) => state.setAccountability(e.target.value, state.reviewWeekday)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Revisão toda ",
							weekdayName(state.reviewWeekday),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-7 gap-1.5",
						children: [
							"D",
							"S",
							"T",
							"Q",
							"Q",
							"S",
							"S"
						].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => state.setAccountability(state.accountabilityName, i),
							className: cn("h-11 rounded-xl text-xs font-medium", state.reviewWeekday === i ? "bg-accent text-accent-fg" : "bg-raised text-muted"),
							children: l
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Prometi / entreguei"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: promises.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-subtle",
						children: "Nenhuma promessa nesta semana."
					}) : promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						checked: p.done,
						onToggle: () => state.togglePromise(p.id),
						label: p.text
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Revisão da semana"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "O que prometi",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: review.promised,
									onChange: (e) => state.saveReview({ promised: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "O que entreguei",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: review.delivered,
									onChange: (e) => state.saveReview({ delivered: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "O que aprendi",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: review.learned,
									onChange: (e) => state.saveReview({ learned: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Próxima semana, três coisas no máximo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: review.next,
									onChange: (e) => state.saveReview({ next: e.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full",
						variant: review.done ? "secondary" : "primary",
						onClick: () => state.saveReview({ done: !review.done }),
						children: review.done ? "Revisão marcada" : "Fechar revisão"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: ["Recado para ", state.accountabilityName || "quem cobra"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 whitespace-pre-wrap rounded-2xl bg-raised p-4 font-sans text-sm text-fg",
						children: letter
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-full",
						variant: "secondary",
						onClick: async () => {
							try {
								await navigator.clipboard.writeText(letter);
								setCopied(true);
								window.setTimeout(() => setCopied(false), 1600);
							} catch {}
						},
						children: copied ? "Copiado" : "Copiar recado"
					})
				]
			})
		]
	});
}
function buildLetter(state) {
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
	return `Oi, ${state.accountabilityName || "você"}.

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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Constituição, não inspiração. Marcar “quebrei hoje” não é culpa — é dado."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleList, {
				title: "Fazer",
				rules: dos,
				today,
				breaks,
				onBreak: breakRule,
				onUnbreak: unbreak
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleList, {
				title: "Evitar",
				rules: avoid,
				today,
				breaks,
				onBreak: breakRule,
				onUnbreak: unbreak
			})
		]
	});
}
function RuleList({ title, rules, today, breaks, onBreak, onUnbreak }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-border bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-3 flex flex-col gap-3",
			children: rules.map((r, i) => {
				const broken = breaks.some((b) => b.date === today && b.ruleId === r.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-t border-border pt-3 first:border-0 first:pt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular text-subtle",
									children: [i + 1, "."]
								}),
								" ",
								r.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.body
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => broken ? onUnbreak(r.id) : onBreak(r.id),
							className: cn("shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium", broken ? "bg-rust/20 text-rust" : "bg-raised text-subtle hover:text-fg"),
							children: broken ? "Quebrei" : "Ok"
						})]
					})
				}, r.id);
			})
		})]
	});
}
function Cerebro() {
	const captures = useLastro((s) => s.captures);
	const add = useLastro((s) => s.addCapture);
	const move = useLastro((s) => s.moveCapture);
	const remove = useLastro((s) => s.removeCapture);
	const sprints = useLastro((s) => s.sprints);
	const [text, setText] = (0, import_react.useState)("");
	const inbox = captures.filter((c) => c.bucket === "inbox");
	const depois = captures.filter((c) => c.bucket === "depois");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: "Caixa de entrada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Se não está escrito, não existe. Esvazia a cabeça aqui."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							add(text);
							setText("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: text,
							onChange: (e) => setText(e.target.value),
							placeholder: "Tudo que pulou"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Capturar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 flex flex-col gap-2",
						children: [inbox.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-border bg-raised px-3.5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg",
								children: c.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										onClick: () => move(c.id, "depois"),
										children: "Depois"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => move(c.id, "nunca"),
										children: "Nunca"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => remove(c.id),
										children: "Apagar"
									})
								]
							})]
						}, c.id)), inbox.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-subtle",
							children: "Caixa vazia. Raro e bom."
						}) : null]
					})
				]
			}),
			depois.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Estacionadas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm text-muted",
					children: depois.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c.text }, c.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
					children: "Sprints recentes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 flex flex-col gap-2",
					children: [sprints.slice(0, 12).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate text-fg",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 tabular text-muted",
							children: [
								s.minutes,
								" min · ",
								s.date.slice(8)
							]
						})]
					}, s.id)), sprints.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-subtle",
						children: "Nenhum sprint ainda."
					}) : null]
				})]
			})
		]
	});
}
function Manual() {
	const reset = useLastro((s) => s.resetAll);
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-3xl border border-border bg-surface p-5 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight text-fg",
				children: "Do início ao fim"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 flex flex-col gap-4",
				children: MANUAL.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium text-fg",
					children: [
						i + 1,
						". ",
						item.t
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-pretty",
					children: item.b
				})] }, item.t))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-3xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-medium text-fg",
					children: "Zerar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Apaga o lastro deste aparelho e volta à instalação."
				}),
				confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "rust",
						className: "flex-1",
						onClick: reset,
						children: "Apagar tudo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "flex-1",
						onClick: () => setConfirm(false),
						children: "Cancelar"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "mt-3 w-full",
					onClick: () => setConfirm(true),
					children: "Resetar sistema"
				})
			]
		})]
	});
}
var MANUAL = [
	{
		t: "Instalar",
		b: "Nome, um norte de 90 dias, split do salário, horário de sono, quem cobra, três promessas. Ou use o sistema pronto e edite."
	},
	{
		t: "Toda manhã, Hoje",
		b: "Trava UMA coisa. Primeira hora sem rede. Começa um sprint nela. Marca sono, caminhada, proteína. Tudo que pular na cabeça vai para Captura — não vira projeto."
	},
	{
		t: "Norte",
		b: "Um objetivo, uma métrica, uma skill cara. Máximo de três promessas por semana. Ideias novas vão para Depois até o trimestre acabar."
	},
	{
		t: "Dinheiro",
		b: "No dia do pagamento executa o ritual: contas, reserva, investir, livre. Impulso de compra espera 48 horas. Sem decidir no calor."
	},
	{
		t: "Corpo",
		b: "Três checks. Frequência vence perfeição. TDAH sem sono destrói o resto do sistema. Trate o diagnóstico de verdade."
	},
	{
		t: "Cobrança",
		b: "No dia combinado, fecha a revisão e manda o recado para quem cobra. Prometi / entreguei. Sem teatro."
	},
	{
		t: "Código",
		b: "Dez fazer, dez evitar. Se quebrar, marca. Dado, não drama. O sistema existe para quando a motivação sumir."
	},
	{
		t: "Regra de ouro",
		b: "Não tente ser organizado. Fique difícil de descarrilar."
	}
];
var NAV = [
	{
		id: "hoje",
		label: "Hoje",
		icon: Sun
	},
	{
		id: "norte",
		label: "Norte",
		icon: Compass
	},
	{
		id: "dinheiro",
		label: "Dinheiro",
		icon: Wallet
	},
	{
		id: "corpo",
		label: "Corpo",
		icon: HeartPulse
	},
	{
		id: "sistema",
		label: "Sistema",
		icon: Layers
	}
];
function AppShell() {
	const onboarded = useLastro((s) => s.onboarded);
	const view = useLastro((s) => s.view);
	const setView = useLastro((s) => s.setView);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useLastro.persist.rehydrate());
	}, []);
	if (!onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col lg:max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex items-center justify-between border-b border-border/80 bg-bg/90 px-5 py-3 backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setView("hoje"),
						className: "font-display text-lg font-medium tracking-tight",
						children: "LASTRO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.16em] text-subtle",
						children: NAV.find((n) => n.id === view)?.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "px-5 pt-5 pb-32",
					children: [
						view === "hoje" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hoje, {}),
						view === "norte" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Norte, {}),
						view === "dinheiro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dinheiro, {}),
						view === "corpo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corpo, {}),
						view === "sistema" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sistema, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid w-full max-w-lg grid-cols-5 lg:max-w-3xl",
						children: NAV.map((item) => {
							const active = view === item.id;
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView(item.id),
								className: cn("flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium", active ? "text-fg" : "text-subtle hover:text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: active ? 2.2 : 1.7
								}), item.label]
							}, item.id);
						})
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
