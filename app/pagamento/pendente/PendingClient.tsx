"use client";

import { useEffect, useMemo, useState } from "react";

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

  // ✅ pega payment_id da URL (Mercado Pago / retorno)
  const paymentId = useMemo(() => {
    if (typeof window === "undefined") return "";
    const sp = new URLSearchParams(window.location.search);
    return (
      sp.get("payment_id") ||
      sp.get("paymentId") ||
      sp.get("id") ||
      sp.get("data.id") ||
      ""
    );
  }, []);

  useEffect(() => {
    let alive = true;
    let timer: any;
    let localTries = 0;

    async function tick() {
      if (!alive) return;

      localTries += 1;
      setTries(localTries);
      setState("checking");

      try {
        // ✅ tenta sincronizar pelo payment_id (quando existir)
        const body = paymentId ? JSON.stringify({ payment_id: paymentId }) : "{}";

        await fetch("/api/me/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          cache: "no-store",
        });

        const r = await fetch("/api/me", { cache: "no-store" });
        const me = (r.ok ? await r.json() : null) as MeResp | null;

        if (hasAccess(me)) {
          setState("done");
          window.location.href = nextUrl;
          return;
        }
      } catch {
        // ignora e tenta de novo
      }

      setState("waiting");

      // ✅ até 24 tentativas (2 min)
      if (alive && localTries < 24) timer = setTimeout(tick, 5000);
    }

    tick();

    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
    };
  }, [nextUrl, paymentId]);

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
        {paymentId ? ` • payment_id: ${paymentId}` : ""}
      </p>
    </div>
  );
}
