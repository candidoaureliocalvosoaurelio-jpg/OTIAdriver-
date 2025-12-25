"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function getOrCreateDeviceId() {
  const key = "otia_device_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function EntrarClient() {
  const router = useRouter();
  const sp = useSearchParams();

  const nextUrl = sp.get("next") || "/planos";
  const reason = sp.get("reason");

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"request" | "verify">("request");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const deviceId = useMemo(() => getOrCreateDeviceId(), []);

  useEffect(() => {
    if (reason === "device") {
      setMsg("Sua conta foi acessada em outro dispositivo. Para continuar, confirme novamente pelo WhatsApp.");
    } else if (reason === "auth") {
      setMsg("Faça login para continuar.");
    }
  }, [reason]);

  async function requestOtp() {
    setMsg(null);

    const cpfDigits = onlyDigits(cpf);
    const phoneDigits = onlyDigits(phone);

    if (cpfDigits.length !== 11) {
      setMsg("CPF inválido. Digite 11 números.");
      return;
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 13) {
      setMsg("Celular inválido. Digite com DDD (somente números).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-device-id": deviceId },
        body: JSON.stringify({ cpf: cpfDigits, phone: phoneDigits }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg(data?.error || "Não foi possível enviar o código. Tente novamente.");
        return;
      }

      setStep("verify");
      setMsg("Código enviado. Verifique seu WhatsApp (modo dev: o código aparece no terminal).");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setMsg(null);

    const cpfDigits = onlyDigits(cpf);
    const phoneDigits = onlyDigits(phone);
    const codeDigits = onlyDigits(code);

    if (codeDigits.length < 4) {
      setMsg("Digite o código recebido.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-device-id": deviceId },
        body: JSON.stringify({ cpf: cpfDigits, phone: phoneDigits, code: codeDigits }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg(data?.error || "Código inválido. Tente novamente.");
        return;
      }

      router.replace(nextUrl);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full bg-slate-50">
      <section className="max-w-xl mx-auto px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">Entrar na OTIAdriver</h1>
          <p className="mt-2 text-slate-600">
            Acesse com <span className="font-semibold">CPF</span> e confirme com um código enviado no{" "}
            <span className="font-semibold">WhatsApp</span>.
          </p>

          {msg && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-900 text-sm">
              {msg}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800">CPF</label>
              <input
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Somente números"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                inputMode="numeric"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800">Celular (com DDD)</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex.: 11999999999"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                inputMode="tel"
              />
            </div>

            {step === "verify" && (
              <div>
                <label className="block text-sm font-semibold text-slate-800">Código</label>
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Digite o código"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                  inputMode="numeric"
                />
              </div>
            )}

            {step === "request" ? (
              <button
                onClick={requestOtp}
                disabled={loading}
                className="w-full rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar código no WhatsApp"}
              </button>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={verifyOtp}
                  disabled={loading}
                  className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 disabled:opacity-60"
                >
                  {loading ? "Validando..." : "Confirmar e entrar"}
                </button>

                <button
                  onClick={() => {
                    setStep("request");
                    setCode("");
                    setMsg(null);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-semibold py-2.5"
                >
                  Voltar e reenviar
                </button>
              </div>
            )}

            <p className="text-xs text-slate-500">
              Segurança: 1 dispositivo por conta. Se entrar em outro aparelho, este será desconectado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
