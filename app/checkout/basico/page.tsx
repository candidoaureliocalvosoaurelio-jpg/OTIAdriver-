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

export default function CheckoutBasico() {
  const [loading, setLoading] = useState(false);

  async function pagar() {
    try {
      setLoading(true);

      const sessRes = await fetch("/api/auth/session", { cache: "no-store" });
      const sess = (await sessRes.json().catch(() => ({}))) as SessionResp;

      const cpf = onlyDigits(sess?.cpf || "");

      if (!sess?.authenticated || cpf.length !== 11) {
        window.location.href = `/entrar?next=/checkout/basico&reason=auth`;
        return;
      }

      const res = await fetch("/api/pagamentos/criar-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf, plano: "basico" }),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok) throw new Error(data?.error || "Falha ao iniciar pagamento.");

      const redirectUrl = data?.init_point || data?.sandbox_init_point;
      if (!redirectUrl) throw new Error("Resposta inválida: init_point não encontrado.");

      window.location.href = redirectUrl;
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
        <section className={s.card}>
          <span className={s.badge}>Essencial</span>
          <h1>Básico</h1>
          <div className={s.price}>
            R$ 29,90 <small>/ mês</small>
          </div>
          <p className={s.subtitle}>Ideal para uso pessoal.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Fichas Técnicas Essenciais</li>
            <li><span className={s.check}>✓</span> Acesso à Galeria</li>
            <li><span className={s.check}>✓</span> Suporte Básico por Chat</li>
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

        <aside className={`${s.aside} ${s.basicAside}`}>
          <div className={`${s.selected} ${s.selectedTopBox}`}>
            Plano selecionado<br />
            <strong>Básico</strong><br />
            R$ 29,90 / mês
          </div>

          <button
            onClick={pagar}
            className={`${s.btn} ${s.basicBtn}`}
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
            <Link href="/planos" className="underline">Voltar aos planos</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
