"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function safeGetOrCreateDeviceId() {
  const key = "otia_device_id";
  let id = window.localStorage.getItem(key);
  if (!id) {
    id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    window.localStorage.setItem(key, id);
  }
  return id;
}

export default function EntrarClient() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [deviceId, setDeviceId] = useState<string>("");
  const [nextUrl, setNextUrl] = useState("/planos");
  const [msg, setMsg] = useState<string | null>(null);

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"request" | "verify">("request");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);

    const url = new URL(window.location.href);
    setNextUrl(url.searchParams.get("next") || "/planos");

    const reason = url.searchParams.get("reason");
    if (reason === "device") {
      setMsg(
        "Sua conta foi acessada em outro dispositivo. Confirme novamente pelo WhatsApp."
      );
    } else if (reason === "auth") {
      setMsg("Faça login para continuar.");
    }

    setDeviceId(safeGetOrCreateDeviceId());
  }, []);

  async function requestOtp() {
    setMsg(null);

    const cpfDigits = onlyDigits(cpf);
    const phoneDigits = onlyDigits(phone);

    if (cpfDigits.length !== 11) return setMsg("CPF inválido. Digite 11 números.");
    if (phoneDigits.length < 10 || phoneDigits.length > 13)
      return setMsg("Celular inválido. Digite com DDD.");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-device-id": deviceId || "dev",
        },
        body: JSON.stringify({ cpf: cpfDigits, phone: phoneDigits }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) return setMsg(data?.error || "Erro ao enviar código.");

      setStep("verify");
      setMsg("Código enviado. Verifique seu SMS.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setMsg(null);

    const cpfDigits = onlyDigits(cpf);
    const phoneDigits = onlyDigits(phone);
    const codeDigits = onlyDigits(code);

    if (codeDigits.length !== 6) return setMsg("Digite o código de 6 dígitos.");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-device-id": deviceId || "dev",
        },
        body: JSON.stringify({
          cpf: cpfDigits,
          phone: phoneDigits,
          code: codeDigits,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) return setMsg(data?.error || "Código inválido.");

      // Opção A: backend decide /app (ativo) ou /planos (inativo)
      const redirectTo = data?.redirectTo || nextUrl || "/planos";
      router.replace(redirectTo);
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold">Entrar na OTIAdriver</h1>

        {msg && <p className="text-sm text-blue-700">{msg}</p>}

        <input
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="w-full border p-2 rounded"
          inputMode="numeric"
        />

        <input
          placeholder="Celular com DDD"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
          inputMode="tel"
        />

        {step === "verify" && (
          <input
            placeholder="Código (6 dígitos)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-2 rounded"
            inputMode="numeric"
          />
        )}

        {step === "request" ? (
          <button
            onClick={requestOtp}
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>
        ) : (
          <button
            onClick={verifyOtp}
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            {loading ? "Validando..." : "Confirmar"}
          </button>
        )}
      </div>
    </main>
  );
}
