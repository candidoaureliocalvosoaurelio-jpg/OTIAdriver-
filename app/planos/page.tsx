"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useState } from "react";
import styles from "./Planos.module.css";
import { irParaMercadoPago } from "./actions";

// ================= LISTAS DE RECURSOS =================
const basic = [
  "Acesso a conteúdos essenciais",
  "Páginas de Caminhões, Treinamentos e Pneus",
  "Fichas técnicas básicas",
  "Suporte básico",
];

const pro = [
  "Acesso TOTAL à plataforma",
  "Fichas técnicas completas",
  "Treinamentos avançados e manuais",
  "Checklists e guias práticos",
  "Suporte técnico com IA",
];

const premium = [
  "Tudo do PRO",
  "Acesso prioritário a lançamentos",
  "Treinamento IA personalizado",
  "Consultoria técnica direta",
  "Suporte prioritário",
];

// ================= COMPARAÇÃO RÁPIDA =================
const compare = [
  { label: "Página de Caminhões e Pneus", basic: true, pro: true, premium: true },
  { label: "Treinamentos Essenciais", basic: true, pro: true, premium: true },
  { label: "Conteúdos Avançados (Manuais)", basic: false, pro: true, premium: true },
  { label: "Suporte com IA", basic: false, pro: true, premium: true },
  { label: "Prioridade e benefícios extras", basic: false, pro: false, premium: true },
];

function Check({ ok }: { ok: boolean }) {
  return (
    <span aria-label={ok ? "Incluído" : "Não incluído"} className={ok ? styles.ok : styles.no}>
      {ok ? "✓" : "—"}
    </span>
  );
}

// ================= CONTEÚDO (usa searchParams) =================
function PlanosContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const [loading, setLoading] = useState<"basico" | "pro" | "premium" | null>(null);

  async function handleAssinar(planoId: "basico" | "pro" | "premium") {
    try {
      setLoading(planoId);

      const result = await irParaMercadoPago(planoId);

      if (result?.init_point) {
        window.location.href = result.init_point;
        return;
      }

      if (result?.error === "not_authenticated") {
        // volta para /planos após login
        window.location.href = "/entrar?reason=auth&next=/planos";
        return;
      }

      alert("Falha ao gerar pagamento. Tente novamente.");
      setLoading(null);
    } catch (e) {
      console.error("[PLANOS] Erro ao iniciar pagamento:", e);
      alert("Erro inesperado ao gerar pagamento. Tente novamente.");
      setLoading(null);
    }
  }

  return (
    <>
      {/* MENSAGEM DE ALERTA (por reason) */}
      {reason === "upgrade" && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-center animate-pulse">
          <p className="font-bold text-lg">🔒 Conteúdo Exclusivo</p>
          <p className="text-sm">
            Seu plano atual não permite acessar esta página. Escolha o <b>PRO</b> ou <b>Premium</b>{" "}
            para liberar agora!
          </p>
        </div>
      )}

      {reason === "paywall" && (
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-center">
          <p className="font-bold text-lg">Sua assinatura expirou ou não foi encontrada</p>
          <p className="text-sm">Renove seu acesso abaixo para continuar utilizando as ferramentas.</p>
        </div>
      )}

      {/* HERO / HEADLINE */}
      <header className={styles.hero}>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          Desbloqueie o melhor da OTIAdriver
        </h1>

        <p className="mt-3 text-center text-base md:text-xl text-slate-600">
          Evolua com conteúdo profissional para motoristas: tecnologia, segurança, eficiência e
          ferramentas práticas.
        </p>

        <div className={styles.heroCtas}>
          {/* ✅ CTA do HERO agora usa o MESMO fluxo do Mercado Pago (não vai mais para /checkout/pro) */}
          <button
            type="button"
            onClick={() => handleAssinar("pro")}
            className={styles.heroPrimaryCta}
            disabled={loading !== null}
            aria-busy={loading === "pro"}
          >
            {loading === "pro" ? "Processando..." : "Assinar PRO (Recomendado)"}
          </button>

          {/* opcional: manter um link secundário para detalhes */}
          <Link href="#compare-title" className={styles.heroSecondaryCta ?? ""}>
            Ver comparação
          </Link>
        </div>

        <div className={styles.trustRow} aria-label="Informações de confiança">
          <span className={styles.trustPill}>Login por SMS</span>
          <span className={styles.trustPill}>Pagamento seguro</span>
          <span className={styles.trustPill}>Sem complicação</span>
        </div>
      </header>

      {/* COMPARAÇÃO */}
      <section className={styles.block} aria-labelledby="compare-title">
        <h2 id="compare-title" className={styles.blockTitle}>
          Compare e escolha com clareza
        </h2>
        <p className={styles.blockDesc}>
          A diferença não é só preço — é acesso ao conteúdo completo e às ferramentas que fazem a
          diferença no dia a dia.
        </p>

        <div className={styles.compareWrap} role="region" aria-label="Tabela comparativa de recursos">
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Recursos</th>
                <th>Básico</th>
                <th>PRO</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.label}>
                  <td className={styles.compareLabel}>{row.label}</td>
                  <td>
                    <Check ok={row.basic} />
                  </td>
                  <td>
                    <Check ok={row.pro} />
                  </td>
                  <td>
                    <Check ok={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CARDS DE PLANOS */}
      <section className={styles.planosGrid} aria-label="Planos disponíveis">
        {/* BÁSICO */}
        <article className={`${styles.card} ${styles.planoBasico}`} style={{ height: 520 }}>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Básico</h2>

          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>29,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm text-slate-600 m-0">Início de caminhões, treinamentos e pneus.</p>

          <ul className={styles.recursos}>
            {basic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Botão Mercado Pago */}
          <button
            type="button"
            onClick={() => handleAssinar("basico")}
            className={`${styles.btn} ${styles["btn-basico"] ?? ""}`}
            disabled={loading !== null}
            aria-busy={loading === "basico"}
          >
            {loading === "basico" ? "Processando..." : "Assinar Básico"}
          </button>
        </article>

        {/* PRO */}
        <article className={`${styles.card} ${styles.planoPro}`} style={{ height: 520 }}>
          <div className={styles.seloRecomendado}>RECOMENDADO</div>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">PRO</h2>

          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>49,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm text-slate-700 m-0">Acesso completo e suporte com IA.</p>

          <ul className={styles.recursos}>
            {pro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Botão Mercado Pago */}
          <button
            type="button"
            onClick={() => handleAssinar("pro")}
            className={`${styles.btn} ${styles["btn-pro"]}`}
            disabled={loading !== null}
            aria-busy={loading === "pro"}
          >
            {loading === "pro" ? "Processando..." : "Assinar PRO"}
          </button>
        </article>

        {/* PREMIUM */}
        <article className={`${styles.card} ${styles.planoPremium}`} style={{ height: 520 }}>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Premium</h2>

          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>99,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm m-0">Prioridade total e conteúdos exclusivos.</p>

          <ul className={styles.recursos}>
            {premium.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Botão Mercado Pago */}
          <button
            type="button"
            onClick={() => handleAssinar("premium")}
            className={`${styles.btn} ${styles["btn-premium"] ?? ""}`}
            disabled={loading !== null}
            aria-busy={loading === "premium"}
          >
            {loading === "premium" ? "Processando..." : "Assinar Premium"}
          </button>
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
              Você entra com CPF e telefone, recebe um código por SMS e pronto. Ao acessar conteúdos
              exclusivos, se o seu plano for o Básico, o sistema solicitará o upgrade para PRO.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Seja um profissional de elite.</summary>
            <p>
              Com o Plano PRO, você vai além do óbvio. Tenha acesso a guias de direção defensiva
              avançada e manuais de segurança que não estão disponíveis no plano Básico. É o
              conteúdo completo para quem coloca a vida e a carga em primeiro lugar e exige 100% de
              preparação para qualquer desafio na estrada.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

// ================= PÁGINA (com Suspense) =================
export default function PlanosPage() {
  return (
    <main className={`${styles.rootVars} mx-auto max-w-7xl px-4 py-10`}>
      <Suspense fallback={<div className="text-center p-10">Carregando planos...</div>}>
        <PlanosContent />
      </Suspense>
    </main>
  );
}
