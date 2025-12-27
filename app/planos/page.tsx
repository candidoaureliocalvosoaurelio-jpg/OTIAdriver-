// app/planos/page.tsx
import Link from "next/link";
import styles from "./Planos.module.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Planos | OTIAdriver",
  description: "Conheça os planos da plataforma OTIAdriver",
};

// Listas de recursos (ajustadas para evitar repetição e aumentar clareza)
const basic = [
  "Acesso a conteúdos essenciais",
  "Fichas técnicas básicas",
  "Ferramentas públicas (quando disponíveis)",
  "Suporte básico",
];

const pro = [
  "Fichas técnicas completas",
  "Treinamentos e conteúdos avançados (assinatura)",
  "Checklists e guias práticos",
  "Suporte técnico com IA",
  "Recursos premium liberados por login SMS",
];

const premium = [
  "Tudo do PRO",
  "Acesso prioritário a lançamentos",
  "Treinamento IA personalizado",
  "Mais profundidade técnica e recursos avançados",
  "Suporte prioritário",
];

// Comparação rápida (para conversão)
const compare = [
  { label: "Demonstrações e catálogo público", basic: true, pro: true, premium: true },
  { label: "Conteúdos completos (assinatura)", basic: false, pro: true, premium: true },
  { label: "Treinamentos e materiais premium", basic: false, pro: true, premium: true },
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

export default function PlanosPage() {
  return (
    <main className={`${styles.rootVars} mx-auto max-w-7xl px-4 py-10`}>
      {/* HERO / HEADLINE */}
      <header className={styles.hero}>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          Desbloqueie o melhor da OTIAdriver
        </h1>

        <p className="mt-3 text-center text-base md:text-xl text-slate-600">
          Evolua com conteúdo profissional para motoristas: tecnologia, segurança, eficiência e ferramentas práticas.
        </p>

        <div className={styles.heroCtas}>
          <Link href="/checkout/pro" className={styles.heroPrimaryCta}>
            Assinar PRO (Recomendado)
          </Link>
          <Link href="/treinamentos?lang=pt" className={styles.heroSecondaryCta}>
            Ver demonstrações
          </Link>
        </div>

        <div className={styles.trustRow} aria-label="Informações de confiança">
          <span className={styles.trustPill}>Login por SMS</span>
          <span className={styles.trustPill}>Pagamento seguro</span>
          <span className={styles.trustPill}>Sem complicação</span>
        </div>
      </header>

      {/* COMPARAÇÃO (Grátis vs PRO vs Premium) */}
      <section className={styles.block} aria-labelledby="compare-title">
        <h2 id="compare-title" className={styles.blockTitle}>
          Compare e escolha com clareza
        </h2>
        <p className={styles.blockDesc}>
          A diferença não é só preço — é acesso ao conteúdo completo e às ferramentas que fazem a diferença no dia a dia.
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
                  <td><Check ok={row.basic} /></td>
                  <td><Check ok={row.pro} /></td>
                  <td><Check ok={row.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CARDS DE PLANOS (seu layout atual) */}
      <section className={styles.planosGrid} aria-label="Planos disponíveis">
        {/* === BÁSICO === */}
        <article className={`${styles.card} ${styles.planoBasico}`} style={{ height: 520 }}>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Básico</h2>
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>29,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>
          <p className="text-sm text-slate-600 m-0">Para começar e explorar o essencial.</p>
          <ul className={styles.recursos}>
            {basic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/checkout/basico" className={`${styles.btn} ${styles["btn-basico"]}`}>
            Assinar Básico
          </Link>
        </article>

        {/* === PRO (RECOMENDADO) === */}
        <article className={`${styles.card} ${styles.planoPro}`} style={{ height: 520 }}>
          <div className={styles.seloRecomendado}>RECOMENDADO</div>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">PRO</h2>
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>49,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>
          <p className="text-sm text-slate-700 m-0">O melhor custo-benefício para evoluir na prática.</p>
          <ul className={styles.recursos}>
            {pro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/checkout/pro" className={`${styles.btn} ${styles["btn-pro"]}`}>
            Assinar PRO
          </Link>
        </article>

        {/* === PREMIUM === */}
        <article className={`${styles.card} ${styles.planoPremium}`} style={{ height: 520 }}>
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Premium</h2>
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>99,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>
          <p className="text-sm m-0">Para quem quer máximo acesso e prioridade.</p>
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

      {/* FAQ (remove dúvidas e aumenta conversão) */}
      <section className={styles.block} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.blockTitle}>
          Dúvidas rápidas
        </h2>

        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como funciona o acesso?</summary>
            <p>
              Você entra com CPF e telefone, recebe um código por SMS e pronto. Ao acessar conteúdos de assinatura,
              sem plano ativo você é direcionado para Planos (paywall).
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>O que vale mais a pena?</summary>
            <p>
              Para a maioria dos motoristas, o PRO costuma ser o melhor custo-benefício: libera os conteúdos completos
              e ferramentas avançadas sem pagar o valor do Premium.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Pagamento é seguro?</summary>
            <p>
              Sim. O fluxo é pensado para segurança e praticidade, com autenticação por SMS e checkout dedicado.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Posso mudar de plano depois?</summary>
            <p>
              Sim. Você pode evoluir de plano conforme sua necessidade e uso da plataforma.
            </p>
          </details>
        </div>

        <div className={styles.bottomCta}>
          <Link href="/checkout/pro" className={styles.bottomPrimaryCta}>
            Assinar PRO agora
          </Link>
          <Link href="/checkout/basico" className={styles.bottomSecondaryCta}>
            Começar pelo Básico
          </Link>
        </div>
      </section>
    </main>
  );
}
