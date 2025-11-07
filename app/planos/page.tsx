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

// Listas de recursos
const basic = [
  "Fichas Técnicas Essenciais",
  "Acesso à Galeria",
  "Suporte Básico por Chat",
];

const pro = [
  "Fichas Técnicas COMPLETAS",
  "Suporte Técnico IA",
  "Análise de Imagem",
  "Checklists de Viagem",
];

const premium = [
  "Todos os Recursos PRO",
  "Análise de Imagem",
  "Treinamento IA Personalizado",
  "Acesso a Dados Históricos",
  "Suporte Prioritário",
];

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Título e subtítulo (modelo desejado) */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
        Escolha o Plano Certo para Você
      </h1>
      <p className="mt-3 text-center text-base md:text-xl text-slate-600">
        Encontre a solução perfeita da{" "}
        <span className="font-semibold text-blue-700">OTIAdriver</span> para
        suas necessidades, seja para uso pessoal ou profissional exigente.
      </p>

      {/* GRID DE CARDS */}
      <section className={styles.planosGrid}>
        {/* === BÁSICO === */}
        <article
          className={`${styles.card} ${styles.planoBasico}`}
          style={{ height: 520 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Básico</h2>

          {/* Preço */}
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>29,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm text-slate-600 m-0">Ideal para uso pessoal.</p>

          {/* Lista de recursos */}
          <ul className={styles.recursos}>
            {basic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Botão → checkout com query */}
          <Link
            href="/checkout?plan=basico"
            className={`${styles.btn} ${styles["btn-basico"]}`}
            aria-label="Assinar plano Básico"
          >
            Assinar Agora
          </Link>
        </article>

        {/* === PRO (RECOMENDADO) === */}
        <article
          className={`${styles.card} ${styles.planoPro}`}
          style={{ height: 520 }}
        >
          <div className={styles.seloRecomendado}>RECOMENDADO</div>

          <h2 className="text-2xl md:text-3xl font-extrabold m-0">PRO</h2>

          {/* Preço */}
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>49,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm text-slate-700 m-0">
            Ideal para Profissionais Exigentes.
          </p>

          <ul className={styles.recursos}>
            {pro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/checkout?plan=pro"
            className={`${styles.btn} ${styles["btn-pro"]}`}
            aria-label="Assinar plano PRO"
          >
            Assinar Agora
          </Link>
        </article>

        {/* === PREMIUM === */}
        <article
          className={`${styles.card} ${styles.planoPremium}`}
          style={{ height: 520 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold m-0">Premium</h2>

          {/* Preço */}
          <div className={styles.preco}>
            <span className={styles.cifra}>R$&nbsp;</span>
            <span className={styles.valor}>99,90</span>
            <span className={styles.periodo}>&nbsp;/ mês</span>
          </div>

          <p className="text-sm m-0">Ideal para Uso Profissional Ilimitado.</p>

          <ul className={styles.recursos}>
            {premium.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/checkout?plan=premium"
            className={`${styles.btn} ${styles["btn-premium"]}`}
            aria-label="Assinar plano Premium"
          >
            Assinar Agora
          </Link>
        </article>
      </section>
    </main>
  );
}
