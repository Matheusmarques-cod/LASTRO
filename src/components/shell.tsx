import { useEffect } from "react";
import {
  Compass,
  HeartPulse,
  Layers,
  Sun,
  Wallet,
} from "lucide-react";
import { Corpo } from "@/components/corpo";
import { Dinheiro } from "@/components/dinheiro";
import { Hoje } from "@/components/hoje";
import { Norte } from "@/components/norte";
import { Onboarding } from "@/components/onboarding";
import { Sistema } from "@/components/sistema";
import { useLastro, type ViewId } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV: { id: ViewId; label: string; icon: typeof Sun }[] = [
  { id: "hoje", label: "Hoje", icon: Sun },
  { id: "norte", label: "Norte", icon: Compass },
  { id: "dinheiro", label: "Dinheiro", icon: Wallet },
  { id: "corpo", label: "Corpo", icon: HeartPulse },
  { id: "sistema", label: "Sistema", icon: Layers },
];

export function AppShell() {
  const onboarded = useLastro((s) => s.onboarded);
  const view = useLastro((s) => s.view);
  const setView = useLastro((s) => s.setView);

  useEffect(() => {
    void Promise.resolve(useLastro.persist.rehydrate());
  }, []);

  if (!onboarded) return <Onboarding />;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col lg:max-w-3xl">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/80 bg-bg/90 px-5 py-3 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setView("hoje")}
            className="font-display text-lg font-medium tracking-tight"
          >
            LASTRO
          </button>
          <span className="text-xs uppercase tracking-[0.16em] text-subtle">
            {NAV.find((n) => n.id === view)?.label}
          </span>
        </header>

        <main className="px-5 pt-5 pb-32">
          {view === "hoje" && <Hoje />}
          {view === "norte" && <Norte />}
          {view === "dinheiro" && <Dinheiro />}
          {view === "corpo" && <Corpo />}
          {view === "sistema" && <Sistema />}
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-lg grid-cols-5 lg:max-w-3xl">
            {NAV.map((item) => {
              const active = view === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={cn(
                    "flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium",
                    active ? "text-fg" : "text-subtle hover:text-muted",
                  )}
                >
                  <Icon
                    className="size-5"
                    strokeWidth={active ? 2.2 : 1.7}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
