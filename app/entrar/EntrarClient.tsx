"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// --- Auxiliares de Formatação ---
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

// ✅ Extrai `next` e `lang` da URL do browser
function getNextFromLocation() {
  if (typeof window === "undefined") return { next: "/", lang: "pt" };

  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") || "pt";

  // se vier `next`, usa. Se não, volta para home preservando lang.
  const nextRaw = params.get("next");
  const next = nextRaw && nextRaw.startsWith("/") ? nextRaw : `/?lang=${lang}`;

  return { next, lang };
}

// --- Componente Principal ---
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  // --- Função: Solicitar SMS ---
  async function requestOtp() {
    setMsg(null);

    if (cpfDigits.length !== 11) {
      setMsg("CPF inválido. Digite 11 números.");
      return;
    }
    if (phoneDigits.length < 10) {
      setMsg("Celular inválido. Digite com DDD.");
      return;
    }

    setLoading(true);
    try {
      const r = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cpf: cpfDigits,
          phone: phoneE164,
        }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setMsg(data?.error || "Não foi possível enviar o código agora.");
        return;
      }

      setStep("verify");
      setCooldown(30);
      setMsg("Código enviado por SMS!");
    } catch (err) {
      setMsg("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  // --- Função: Validar Código e Entrar ---
  async function verifyOtp() {
    setMsg(null);

    if (onlyDigits(code).length !== 6) {
      setMsg("Digite o código de 6 dígitos.");
      return;
    }

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
        setMsg(data?.error || "Código inválido. Tente novamente.");
        setLoading(false);
        return;
      }

      setMsg("Sucesso! Liberando acesso...");

      // ✅ 1) Respeita `next` da URL
      const { next } = getNextFromLocation();

      // ✅ 2) Sincroniza plano (cookie otia_plan = active/inactive) antes de ir para a área protegida
      // (se não existir ou falhar, não quebra o fluxo; o middleware vai direcionar corretamente)
      await fetch("/api/me/sync", { method: "POST", cache: "no-store" }).catch(() => null);

      // ✅ 3) Redireciona (reload total para garantir cookies)
      window.location.href = next;
    } catch (e) {
      setMsg("Erro ao validar código.");
      setLoading(false);
    }
  }

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <h1 className="text-xl font-bold text-slate-900">Entrar</h1>

        {msg && (
          <div
            className={`text-sm p-3 rounded-lg border ${
              msg.includes("Sucesso") || msg.includes("Liberando")
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-blue-50 text-blue-700 border-blue-100"
            }`}
          >
            {msg}
          </div>
        )}

        <div className="space-y-3">
          <input
            value={cpf}
            onChange={(e) => setCpf(formatCpf(e.target.value))}
            placeholder="CPF"
            className="w-full border border-slate-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            inputMode="numeric"
            disabled={loading || step === "verify"}
          />

          <input
            value={phone}
            onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
            placeholder="Celular com DDD"
            className="w-full border border-slate-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            inputMode="tel"
            disabled={loading || step === "verify"}
          />

          {step === "verify" && (
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código SMS de 6 dígitos"
              className="w-full border border-blue-400 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none animate-pulse"
              inputMode="numeric"
              autoFocus
              disabled={loading}
            />
          )}
        </div>

        <div className="pt-2">
          {step === "request" ? (
            <button
              onClick={requestOtp}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-all"
            >
              {loading ? "Enviando SMS..." : "Enviar código"}
            </button>
          ) : (
            <div className="space-y-3">
              <button
                onClick={verifyOtp}
                disabled={loading}
                className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50 transition-all"
              >
                {loading ? "Validando..." : "Confirmar e Entrar"}
              </button>

              <button
                onClick={requestOtp}
                disabled={loading || cooldown > 0}
                className="w-full text-slate-500 text-sm hover:underline disabled:no-underline"
              >
                {cooldown > 0
                  ? `Reenviar código em ${cooldown}s`
                  : "Não recebeu? Reenviar código"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
