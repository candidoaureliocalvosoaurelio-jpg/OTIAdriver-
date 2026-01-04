"use client";

import { useEffect, useMemo, useState } from "react";

// ================= UTILIDADES =================
function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function formatCpf(v: string) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

function formatPhoneBR(v: string) {
  const d = onlyDigits(v).slice(0, 13);

  if (d.startsWith("55")) {
    const ddd = d.slice(2, 4);
    const rest = d.slice(4);
    const p1 = rest.slice(0, rest.length >= 9 ? 5 : 4);
    const p2 = rest.slice(rest.length >= 9 ? 5 : 4);
    return `+55 (${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
  }

  const ddd = d.slice(0, 2);
  const rest = d.slice(2);
  const p1 = rest.slice(0, rest.length >= 9 ? 5 : 4);
  const p2 = rest.slice(rest.length >= 9 ? 5 : 4);
  if (!ddd) return d;
  return `(${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
}

function toE164(phoneRaw: string) {
  const d = onlyDigits(phoneRaw);
  if (!d) return "";
  if (d.startsWith("55")) return `+${d}`;
  if (d.length === 10 || d.length === 11) return `+55${d}`;
  return d.length >= 8 ? `+55${d}` : "";
}

function getNextFromLocation() {
  if (typeof window === "undefined") {
    return { next: "/planos?lang=pt", lang: "pt" };
  }

  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") || "pt";

  const nextRaw = params.get("next");
  const safeNext =
    nextRaw && nextRaw.startsWith("/") ? nextRaw : `/planos?lang=${lang}`;

  const next = safeNext.includes("lang=")
    ? safeNext
    : `${safeNext}${safeNext.includes("?") ? "&" : "?"}lang=${lang}`;

  return { next, lang };
}

// ================= COMPONENTE =================
export default function EntrarClient() {
  const [mounted, setMounted] = useState(false);
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"request" | "verify">("request");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const cpfDigits = useMemo(() => onlyDigits(cpf), [cpf]);
  const phoneE164 = useMemo(() => toE164(phone), [phone]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function requestOtp() {
    setMsg(null);

    if (cpfDigits.length !== 11) {
      setMsg("CPF inválido. Digite 11 números.");
      return;
    }
    if (!phoneE164) {
      setMsg("Celular inválido. Digite com DDD.");
      return;
    }

    setLoading(true);
    try {
      const r = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({ cpf: cpfDigits, phone: phoneE164 }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setMsg(data?.error || "Não foi possível enviar o código.");
        return;
      }

      setStep("verify");
      setCooldown(30);
      setMsg("Código enviado por SMS!");
    } catch {
      setMsg("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setMsg(null);

    if (onlyDigits(code).length !== 6) {
      setMsg("Digite o código de 6 dígitos.");
      return;
    }
    if (!phoneE164) {
      setMsg("Celular inválido. Digite com DDD.");
      return;
    }

    setLoading(true);
    try {
      const r = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({
          cpf: cpfDigits,
          phone: phoneE164,
          code: onlyDigits(code),
        }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setMsg(data?.error || "Código inválido.");
        return;
      }

      setMsg("Sucesso! Liberando acesso...");

      const { next } = getNextFromLocation();

      await fetch("/api/me/sync", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      }).catch(() => null);

      // 🔥 MARCA DEFINITIVA DE CHECKOUT
      const nextWithCheckout = next.includes("?")
        ? `${next}&from=checkout&fc=1`
        : `${next}?from=checkout&fc=1`;

      // 🔥 replace evita loop e interceptação
      window.location.replace(nextWithCheckout);
    } catch {
      setMsg("Erro ao validar código.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <h1 className="text-xl font-bold text-slate-900">Entrar</h1>

        {msg && (
          <div className="text-sm p-3 rounded-lg border bg-blue-50 text-blue-700 border-blue-100">
            {msg}
          </div>
        )}

        <div className="space-y-3">
          <input
            value={cpf}
            onChange={(e) => setCpf(formatCpf(e.target.value))}
            placeholder="CPF"
            className="w-full border border-slate-300 p-2 rounded"
            inputMode="numeric"
            disabled={loading || step === "verify"}
          />

          <input
            value={phone}
            onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
            placeholder="Celular com DDD"
            className="w-full border border-slate-300 p-2 rounded"
            inputMode="tel"
            disabled={loading || step === "verify"}
          />

          {step === "verify" && (
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código SMS"
              className="w-full border border-blue-400 p-2 rounded"
              inputMode="numeric"
              autoFocus
              disabled={loading}
            />
          )}
        </div>

        {step === "request" ? (
          <button
            onClick={requestOtp}
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>
        ) : (
          <>
            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-green-600 text-white p-3 rounded-lg font-bold"
            >
              {loading ? "Validando..." : "Confirmar e Entrar"}
            </button>

            <button
              onClick={requestOtp}
              disabled={loading || cooldown > 0}
              className="w-full text-slate-500 text-sm"
            >
              {cooldown > 0
                ? `Reenviar código em ${cooldown}s`
                : "Não recebeu? Reenviar código"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
