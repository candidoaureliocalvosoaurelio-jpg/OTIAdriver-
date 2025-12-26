"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

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

  // Se começar com 55, mostra +55 (DD) 9xxxx-xxxx (ou 8 dígitos)
  if (d.startsWith("55")) {
    const ddd = d.slice(2, 4);
    const rest = d.slice(4);
    const p1 = rest.slice(0, rest.length >= 9 ? 5 : 4);
    const p2 = rest.slice(rest.length >= 9 ? 5 : 4);
    return `+55 (${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
  }

  // Caso normal BR: (DD) 9xxxx-xxxx ou (DD) xxxx-xxxx
  const ddd = d.slice(0, 2);
  const rest = d.slice(2);
  const p1 = rest.slice(0, rest.length >= 9 ? 5 : 4);
  const p2 = rest.slice(rest.length >= 9 ? 5 : 4);
  if (!ddd) return d;
  return `(${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
}

export default function EntrarClient() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"request" | "verify">("request");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const phoneDigits = useMemo(() => onlyDigits(phone), [phone]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function requestOtp() {
    setMsg(null);

    if (onlyDigits(cpf).length !== 11) return setMsg("CPF inválido. Digite 11 números.");
    if (phoneDigits.length < 10 || phoneDigits.length > 13) return setMsg("Celular inválido. Digite com DDD.");

    setLoading(true);
    try {
      const r = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf: onlyDigits(cpf), phone: phoneDigits }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) return setMsg(data?.error || "Não foi possível enviar o código agora.");

      setStep("verify");
      setCooldown(30);
      setMsg("Código enviado por SMS.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setMsg(null);

    if (onlyDigits(code).length !== 6) return setMsg("Digite o código de 6 dígitos.");

    setLoading(true);
    try {
      const r = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cpf: onlyDigits(cpf),
          phone: phoneDigits,
          code: onlyDigits(code),
        }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) return setMsg(data?.error || "Código inválido. Tente novamente.");

      router.replace(data?.redirectTo || "/planos");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <h1 className="text-xl font-bold">Entrar</h1>

        {msg && <div className="text-sm text-blue-700">{msg}</div>}

        <input
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
          placeholder="CPF"
          className="w-full border p-2 rounded"
          inputMode="numeric"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
          placeholder="Celular"
          className="w-full border p-2 rounded"
          inputMode="tel"
          disabled={step === "verify"}
        />

        {step === "verify" && (
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código SMS"
            className="w-full border p-2 rounded"
            inputMode="numeric"
            autoComplete="one-time-code"
          />
        )}

        {step === "request" ? (
          <button
            onClick={requestOtp}
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>
        ) : (
          <>
            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-60"
            >
              {loading ? "Validando..." : "Confirmar"}
            </button>

            <button
              onClick={requestOtp}
              disabled={loading || cooldown > 0}
              className="w-full border p-2 rounded disabled:opacity-60"
            >
              {cooldown > 0 ? `Reenviar em ${cooldown}s` : "Reenviar código"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
