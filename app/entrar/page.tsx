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

/**
 * ✅ Sempre converte para E.164
 */
function toE164(phoneRaw: string) {
  const d = onlyDigits(phoneRaw);
  if (!d) return "";
  if (d.startsWith("55")) return `+${d}`;
  if (d.length === 10 || d.length === 11) return `+55${d}`;
  return d.length >= 8 ? `+55${d}` : "";
}

/**
 * 🔒 Proteção anti Open Redirect
 * Só permite caminhos internos.
 */
function safeInternalNext(nextRaw: string | null | undefined) {
  const v = (nextRaw || "").trim();

  if (!v.startsWith("/")) return "/catalogo";
  if (v.startsWith("//")) return "/catalogo";
  if (v.includes("\\") || v.includes("://")) return "/catalogo";

  return v;
}

function readNextFromUrlAndPersist() {
  if (typeof window === "undefined") return "/catalogo";

  const params = new URLSearchParams(window.location.search);
  const nextRaw = params.get("next");
  const next = safeInternalNext(nextRaw);

  try {
    sessionStorage.setItem("otia_next", next);
  } catch {}

  return next;
}

function getPersistedNext() {
  if (typeof window === "undefined") return "/catalogo";

  try {
    const saved = sessionStorage.getItem("otia_next");
    return safeInternalNext(saved);
  } catch {
    return "/catalogo";
  }
}

// ================= COMPONENTE =================
export default function EntrarPage() {
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

  useEffect(() => {
    setMounted(true);
    readNextFromUrlAndPersist();
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function requestOtp() {
    setMsg(null);

    if (cpfDigits.length !== 11) {
      setMsg("CPF inválido.");
      return;
    }

    if (!phoneE164) {
      setMsg("Celular inválido.");
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

      const data = await r.json().catch(() => ({} as any));
      if (!r.ok) {
        setMsg(data?.error || "Erro ao enviar código.");
        return;
      }

      setStep("verify");
      setCooldown(30);
      setMsg("Código enviado.");
    } catch {
      setMsg("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setMsg(null);

    if (onlyDigits(code).length !== 6) {
      setMsg("Código inválido.");
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

      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        setMsg(data?.error || "Código inválido.");
        return;
      }

      const next = getPersistedNext();

      await fetch("/api/me/sync", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      }).catch(() => null);

      // ✅ redirect seguro
      window.location.assign(next);
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
        <h1 className="text-xl font-bold">Entrar</h1>

        {msg && (
          <div className="text-sm p-3 rounded bg-blue-50 text-blue-700 border border-blue-100">
            {msg}
          </div>
        )}

        <input
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
          placeholder="CPF"
          className="w-full border p-2 rounded"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
          placeholder="Celular"
          className="w-full border p-2 rounded"
        />

        {step === "verify" && (
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código"
            className="w-full border p-2 rounded"
            autoFocus
          />
        )}

        {step === "request" ? (
          <button
            onClick={requestOtp}
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            Enviar código
          </button>
        ) : (
          <button
            onClick={verifyOtp}
            className="w-full bg-green-600 text-white p-3 rounded"
          >
            Confirmar
          </button>
        )}
      </div>
    </main>
  );
}
