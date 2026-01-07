"use client";

import { useEffect, useState } from "react";

type Props = {
  nextUrl: string;
};

type MeResp = {
  authenticated: boolean;
  plan?: string;
};

function hasAccess(me: MeResp | null) {
  if (!me?.authenticated) return false;
  const plan = String(me.plan || "none").toLowerCase();
  return plan !== "none" && plan !== "inactive";
}

export default function PendingClient({ nextUrl }: Props) {
  const [tries, setTries] = useState(0);
  const [state, setState] = useState<"checking" | "waiting" | "done">("checking");

  useEffect(() => {
    let alive = true;
    let timer: any;

    async function tick() {
      if (!alive) return;

      setTries((t) => t + 1);
      setState("checking");

      try {
        await fetch("/api/me/sync", { cache: "no-store" });

        const r = await fetch("/api/me", { cache: "no-store" });
        const me = (r.ok ? await r.json() : null) as MeResp | null;

        if (hasAccess(me)) {
          setState("done");
          window.location.href = nextUrl;
          return;
        }
      } catch {}

      setState("waiting");

      if (alive && tries < 24) timer = setTimeout(tick, 5000);
    }

    tick();

    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextUrl]);

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">
        Verificando confirmação do PIX…
      </p>
      <p className="mt-1 text-xs text-slate-600">
        Assim que confirmar, você será redirecionado automaticamente.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Tentativas: {tries} • Status: {state}
      </p>
    </div>
  );
}
