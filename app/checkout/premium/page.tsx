// app/checkout/premium/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import s from "../Checkout.module.css";

type SessionResp = {
  authenticated: boolean;
  cpf: string;
  plan: string;
};

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

export default function CheckoutPremium() {
  const [loading, setLoading] = useState(false);

  async function pagar() {
    try {
      setLoading(true);

      // 1) Sessão (FORÇA cookies + sem cache)
      const sessRes = await fetch("/api/auth/session", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Cache-Control": "no-store" },
      });

      const sess = (await sessRes.json().catch(() => ({}))) as SessionResp;
      const cpf = onlyDigits(sess?.cpf || "");

      if (!sessRes.ok) {
        throw new Error("Falha ao ler sessão (/api/auth/session).");
      }

      if (!sess?.authenticated || cpf.length !== 11) {
        window.location.href = `/entrar?next=/checkout/premium&reason=auth`;
        return;
      }

      // 2) Cria preferência (FORÇA cookies + sem cache)
      const res = await fetch("/api/pagamentos/criar-preferencia", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify({ cpf, plano: "premium" }),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok) {
        throw new Error(data?.error || "Falha ao criar preferência no Mercado Pago.");
      }

      const redirectUrl = data?.init_point || data?.sandbox_init_point;
      if (!redirectUrl) {
        throw new Error("Resposta inválida: init_point/sandbox_init_point não encontrado.");
      }

      // 3) Redireciona para o Mercado Pago
      window.location.assign(redirectUrl);
    } catch (e: any) {
      alert(e?.message ?? "Erro ao iniciar pagamento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={s.wrap}>
      <section className="text-center pt-8 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          <span className="text-blue-600">OTIA</span>
          <span className="text-emerald-400">driver</span>
        </h1>
        <p className="mt-2 text-base md:text-xl text-slate-700">
          Conhecimento Inteligente para Motoristas
        </p>
      </section>

      <div className="text-xs text-slate-500 mb-3 flex items-center justify-between">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        <section className={`${s.card} ${s.premiumCard}`}>
          <span className={s.badge}>MAIS VENDIDO</span>
          <h1>Premium</h1>
          <div className={s.price}>
            R$ 99,90 <small>/ mês</small>
          </div>
          <p className={s.subtitle}>Melhor custo-benefício para Profissionais.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Fichas Técnicas COMPLETAS</li>
            <li><span className={s.check}>✓</span> Suporte Técnico com IA</li>
            <li><span className={s.check}>✓</span> Análise de Imagem</li>
            <li><span className={s.check}>✓</span> Checklists PRO</li>
            <li><span className={s.check}>✓</span> Assistente Inteligente de Performance</li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong>{" "}
            Você pode cancelar a qualquer momento antes da próxima cobrança.
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline">Termos de Uso</Link>{" "}
            e{" "}
            <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </div>
        </section>

        <aside className={`${s.aside} ${s.premiumAside}`}>
          <div className={`${s.selected} ${s.selectedTopBox}`}>
            Plano selecionado<br />
            <strong>Premium</strong><br />
            R$ 99,90 / mês
          </div>

          <button
            onClick={pagar}
            className={`${s.btn} ${s.premiumBtn}`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Abrindo Mercado Pago..." : "Pagar com Mercado Pago"}
          </button>
        </aside>
      </div>
    </main>
  );
}
