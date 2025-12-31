"use client"; // Alterado para Client Component para ler parâmetros da URL

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./Planos.module.css";

// Listas de recursos
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

// Comparação rápida
const compare = [
  { label: "Página de Caminhões e Pneus", basic: true, pro: true, premium: true },
  { label: "Treinamentos Essenciais", basic: true, pro: true, premium: true },
  { label: "Conteúdos Avançados (Manuais)", basic: false, pro: true, premium: true },
  { label: "Suporte com IA", basic: false, pro: true, premium: true },
  { label: "Prioridade e benefícios extras", basic: false, pro: false, premium: true },
];

function Check({ ok }: { ok: boolean }) {
  return (
    <span
      aria-label={ok ? "Incluído" : "Não incluído"}
      className={ok ? styles.ok : styles.no}
    >
      {ok ? "✓" : "—"}
    </span>
  );
}

export default function PlanosPage() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  return (
    <main className={`${styles.rootVars} mx-auto max-w-7xl px-4 py-10`}>
      
      {/* MENSAGEM DE ALERTA DO MIDDLEWARE */}
      {reason === "upgrade" && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-center animate-pulse">
          <p className="font-bold text-lg">🔒 Conteúdo Exclusivo</p>
          <p className="text-sm">Seu plano atual não permite acessar esta página. Escolha o <b>PRO</b> ou <b>Premium</b> para liberar agora!</p>
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
          Evolua com conteúdo profissional para motoristas: tecnologia, segurança,
          eficiência e ferramentas práticas.
        </p>

        <div className={styles.heroCtas}>
          <Link href="/checkout/pro" className={styles.heroPrimaryCta}>
            Assinar PRO (Recomendado)
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
          A diferença não é só preço — é acesso ao conteúdo completo e às ferramentas
          que fazem a diferença no dia a dia.
        </p>

        <div
          className={styles.compareWrap}
          role="region"
          aria-label="Tabela comparativa de recursos"
        >
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
          <Link href="/checkout/basico" className={`${styles.btn} ${styles["btn-basico"]}`}>
            Assinar Básico
          </Link>
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
          <p className="text-sm text-slate-700 m-0">
            Acesso completo e suporte com IA.
          </p>
          <ul className={styles.recursos}>
            {pro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/checkout/pro" className={`${styles.btn} ${styles["btn-pro"]}`}>
            Assinar PRO
          </Link>
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
          <Link href="/checkout/premium" className={`${styles.btn} ${styles["btn-premium"]}`}>
            Assinar Premium
          </Link>
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
              Você entra com CPF e telefone, recebe um código por SMS e pronto. Ao acessar
              conteúdos exclusivos, se o seu plano for o Básico, o sistema solicitará o upgrade para PRO.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>O que vale mais a pena?</summary>
            <p>
              O plano PRO libera 100% da plataforma, incluindo manuais e guias que não estão disponíveis no Básico.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
