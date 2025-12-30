"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Auxiliares de formatação
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

function toE164FromDigits(digits: string) {
  const d = onlyDigits(digits);
  if (!d) return "";
  return d.startsWith("55") ? `+${d}` : `+55${d}`;
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

  const cpfDigits = useMemo(() => onlyDigits(cpf), [cpf]);
  const phoneDigits = useMemo(() => onlyDigits(phone), [phone]);
  const phoneE164 = useMemo(() => toE164FromDigits(phoneDigits), [phoneDigits]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function requestOtp() {
    setMsg(null);
    if (cpfDigits.length !== 11) return setMsg("CPF inválido. Digite 11 números.");
    if (phoneDigits.length < 10 || phoneDigits.length > 13) return setMsg("Celular inválido. Digite com DDD.");

    setLoading(true);
    try {
      const r = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf: cpfDigits, phone: phoneE164 }),
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
          cpf: cpfDigits,
          phone: phoneE164,
          code: onlyDigits(code),
        }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setLoading(false);
        return setMsg(data?.error || "Código inválido. Tente novamente.");
      }

      setMsg("Sucesso! Redirecionando...");
      
      // ✅ CORREÇÃO CHAVE: Força o redirecionamento via navegador
      // Isso garante que os cookies de autenticação sejam lidos corretamente pelo servidor
      const destino = data?.redirectTo || "/planos";
      window.location.href = destino;

    } catch (e) {
      setMsg("Erro ao validar código.");
      setLoading(false);
    }
    // Nota: O finally foi removido aqui para manter o estado de 'loading' 
    // visual enquanto a página é recarregada pelo window.location
  }

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <h1 className="text-xl font-bold">Entrar</h1>

        {msg && (
          <div className={`text-sm p-2 rounded ${msg.includes("Sucesso") ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}>
            {msg}
          </div>
        )}

        <input
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
          placeholder="CPF"
          className="w-full border p-2 rounded"
          inputMode="numeric"
          disabled={loading || step === "verify"}
        />

        <input
          value={phone}
          onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
          placeholder="Celular"
          className="w-full border p-2 rounded"
          inputMode="tel"
          disabled={loading || step === "verify"}
        />

        {step === "verify" && (
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código SMS"
            className="w-full border p-2 rounded border-blue-400"
            inputMode="numeric"
            autoComplete="one-time-code"
            disabled={loading}
            autoFocus
          />
        )}

        {step === "request" ? (
          <button
            onClick={requestOtp}
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-60 font-bold"
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-60 font-bold"
            >
              {loading ? "Validando..." : "Confirmar"}
            </button>

            <button
              onClick={requestOtp}
              disabled={loading || cooldown > 0}
              className="w-full border border-slate-300 p-2 rounded disabled:opacity-60 text-slate-600 text-sm"
            >
              {cooldown > 0 ? `Reenviar em ${cooldown}s` : "Reenviar código"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
