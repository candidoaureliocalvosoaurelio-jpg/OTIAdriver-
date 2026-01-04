// app/checkout/pro/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import s from "../Checkout.module.css";

type SessionResp = {
  authenticated: boolean;
  cpf: string;
  plan: string;
};

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function getLangFromLocation() {
  if (typeof window === "undefined") return "pt";
  const p = new URLSearchParams(window.location.search);
  return p.get("lang") || "pt";
}

function buildEntrarUrl(nextPath: string) {
  const lang = getLangFromLocation();
  const nextWithLang = nextPath.includes("lang=")
    ? nextPath
    : `${nextPath}${nextPath.includes("?") ? "&" : "?"}lang=${lang}`;

  // marca origem (ajuda a evitar regressões / debugging)
  const nextWithFrom = nextWithLang.includes("from=")
    ? nextWithLang
    : `${nextWithLang}${nextWithLang.includes("?") ? "&" : "?"}from=checkout`;

  return `/entrar?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
    nextWithFrom
  )}&reason=auth`;
}

export default function CheckoutPro() {
  const [loading, setLoading] = useState(false);

  const lang = useMemo(() => getLangFromLocation(), []);
  const nextAfterLogin = useMemo(() => `/checkout/pro?lang=${lang}`, [lang]);

  async function pagar() {
    try {
      setLoading(true);

      // 1) Sessão (cookies)
      const sessRes = await fetch("/api/auth/session", {
        method: "GET",
        cache: "no-store",
        credentials: "include",
        headers: { "Cache-Control": "no-store" },
      });

      if (!sessRes.ok) {
        window.location.href = buildEntrarUrl(nextAfterLogin);
        return;
      }

      const sess = (await sessRes.json().catch(() => null)) as SessionResp | null;

      const cpf = onlyDigits(sess?.cpf || "");

      if (!sess?.authenticated || cpf.length !== 11) {
        window.location.href = buildEntrarUrl(nextAfterLogin);
        return;
      }

      // 2) Cria preferência no MP
      const res = await fetch("/api/pagamentos/criar-preferencia", {
        method: "POST",
        cache: "no-store",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify({ cpf, plano: "pro" }),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok) throw new Error(data?.error || "Falha ao iniciar pagamento.");

      const redirectUrl = data?.init_point || data?.sandbox_init_point;
      if (!redirectUrl) throw new Error("Resposta inválida: init_point não encontrado.");

      // 3) Vai para o Mercado Pago (troca sem manter histórico)
      window.location.replace(redirectUrl);
    } catch (e: any) {
      alert(e?.message ?? "Erro ao iniciar pagamento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={s.wrap}>
      {/* TOPO DE MARCA */}
      <section className="text-center pt-8 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          <span className="text-blue-600">OTIA</span>
          <span className="text-emerald-400">driver</span>
        </h1>
        <p className="mt-2 text-base md:text-xl text-slate-700">
          Conhecimento Inteligente para Motoristas
        </p>
      </section>

      {/* LINHA SUPERIOR */}
      <div className="text-xs text-slate-500 mb-3 flex items-center justify-between">
        <Link href={`/planos?lang=${lang}`} className="hover:underline">
          ← Voltar aos planos
        </Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        {/* CARD */}
        <section className={s.card}>
          <span className={s.badge}>Profissional</span>

          <h1>Pro</h1>
          <div className={s.price}>
            R$ 49,90 <small>/ mês</small>
          </div>
          <p className={s.subtitle}>
            Ideal para motoristas profissionais e uso intenso.
          </p>

          <ul className={s.list}>
            <li>
              <span className={s.check}>✓</span> Conteúdo avançado e atualizado
            </li>
            <li>
              <span className={s.check}>✓</span> Acesso ampliado a materiais
            </li>
            <li>
              <span className={s.check}>✓</span> Suporte priorizado
            </li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong>{" "}
            Você pode cancelar a qualquer momento antes da próxima cobrança.
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="underline">
              Política de Privacidade
            </Link>
            .
          </div>
        </section>

        {/* ASIDE */}
        <aside className={s.aside}>
          <div className={s.selected}>
            Plano selecionado
            <br />
            <strong>Pro</strong>
            <br />
            R$ 49,90 / mês
          </div>

          <button
            onClick={pagar}
            className={s.btn}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Abrindo Mercado Pago..." : "Pagar com Mercado Pago"}
          </button>

          <ul className={s.bullets}>
            <li>Pagamento 100% seguro via Mercado Pago</li>
            <li>Renovação automática a cada 30 dias</li>
            <li>Cancelamento livre antes da próxima cobrança</li>
            <li>Suporte ao assinante</li>
          </ul>

          <div className={s.help}>
            Dúvidas? Fale com a gente:{" "}
            <a href="mailto:otiadriver@gmail.com">otiadriver@gmail.com</a>
          </div>

          <div className="text-xs text-slate-500 mt-3">
            <Link href={`/planos?lang=${lang}`} className="underline">
              Voltar aos planos
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
