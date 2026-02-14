"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useMemo, useState } from "react";
import styles from "./Planos.module.css";

// ================= LISTA DE RECURSOS (PREMIUM) =================
const premium = [
  "Acesso total à plataforma",
  "Acesso prioritário a lançamentos",
  "Treinamento IA personalizado",
  "Consultoria técnica direta",
  "Suporte prioritário",
];

function PlanosContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const reason = searchParams.get("reason");
  const lang = useMemo(() => searchParams.get("lang") || "pt", [searchParams]);

  const [loading, setLoading] = useState(false);

  const goPremiumCheckout = useCallback(() => {
    if (loading) return;
    setLoading(true);
    router.push(`/checkout/premium?lang=${encodeURIComponent(lang)}`);
  }, [loading, router, lang]);

  return (
    <>
      {/* MENSAGEM DE ALERTA (por reason) */}
      {reason === "upgrade" && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-center animate-pulse">
          <p className="font-bold text-lg">🔒 Conteúdo Exclusivo</p>
          <p className="text-sm">
            Para liberar este conteúdo, assine o <b>Premium</b> agora.
          </p>
        </div>
      )}

      {reason === "paywall" && (
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-center">
          <p className="font-bold text-lg">
            Sua assinatura expirou ou não foi encontrada
          </p>
          <p className="text-sm">
            Renove seu acesso abaixo para continuar utilizando a plataforma.
          </p>
        </div>
      )}

      {/* HERO / HEADLINE */}
      <header className={styles.hero}>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          Desbloqueie o melhor da OTIAdriver
        </h1>

        <p className="mt-3 text-center text-base md:text-xl text-slate-600">
          Evolua com conteúdo profissional para motoristas: tecnologia, segurança,
          eficiência e ferramentas práticas.
        </p>

        <div className={styles.heroCtas}>
          <button
            type="button"
            onClick={goPremiumCheckout}
            className={styles.heroPrimaryCta}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Abrindo checkout..." : "Assinar PREMIUM"}
          </button>
        </div>

        <div className={styles.trustRow} aria-label="Informações de confiança">
          <span className={styles.trustPill}>Login por SMS</span>
          <span className={styles.trustPill}>Pagamento seguro</span>
          <span className={styles.trustPill}>Acesso imediato</span>
        </div>
      </header>

      {/* CARD PREMIUM (ÚNICO) */}
      <section className={styles.planosGrid} aria-label="Plano disponível">
        <article className={`${styles.card} ${styles.planoPremium}`}>
          {/* ✅ SELO */}
          <div className={styles.premiumBadge}>ACESSO TOTAL</div>

          <h2 className="text-2xl md:text-3xl font-extrabold m-0">
            Premium
          </h2>

          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>99,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm m-0">
            Prioridade total e conteúdos exclusivos.
          </p>

          <ul className={styles.recursos}>
            {premium.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={goPremiumCheckout}
            className={`${styles.btn} ${styles["btn-premium"]}`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Abrindo checkout..." : "Assinar Premium"}
          </button>

          <div className="mt-3 text-xs text-slate-700 text-center">
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline hover:text-slate-900">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="underline hover:text-slate-900">
              Política de Privacidade
            </Link>
            .
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section className={styles.block} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.blockTitle}>
          Dúvidas rápidas
        </h2>

        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como funciona o acesso?</summary>
            <p>
              Você entra com CPF e telefone, recebe um código por SMS e pronto.
              Após o pagamento, seu acesso Premium é liberado automaticamente.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>O que eu ganho com o Premium?</summary>
            <p>
              Acesso total à plataforma, prioridade em lançamentos, recursos
              avançados e suporte prioritário — tudo para acelerar seu
              desempenho e reduzir erros na operação.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Posso cancelar quando quiser?</summary>
            <p>
              Sim. Você pode cancelar antes da próxima cobrança e manter acesso
              até o fim do período vigente.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export default function PlanosPage() {
  return (
    <main className={`${styles.rootVars} mx-auto max-w-7xl px-4 py-10`}>
      <Suspense
        fallback={
          <div className="text-center p-10 text-slate-600">
            Carregando planos...
          </div>
        }
      >
        <PlanosContent />
      </Suspense>
    </main>
  );
}
