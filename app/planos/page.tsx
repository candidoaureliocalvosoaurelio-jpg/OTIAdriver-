// app/planos/page.tsx
import styles from "./Planos.module.css";

export const metadata = {
  title: "Planos | OTIAdriver",
  description: "Conheça os planos da plataforma OTIAdriver",
};

const basic = ["Fichas Técnicas Essenciais", "Acesso à Galeria", "Suporte Básico por Chat"];
const pro = [
  "Fichas Técnicas COMPLETAS",
  "Suporte Técnico IA Ilimitado",
  "Análise de Imagem (5/mês)",
  "Checklists de Viagem",
];
const premium = [
  "Todos os Recursos PRO",
  "Análise de Imagem ILIMITADA",
  "Treinamento IA Personalizado",
  "Acesso a Dados Históricos",
  "Suporte Prioritário",
];

function Price({ value, period = "/ mês" }: { value: string; period?: string }) {
  return (
    <div className={styles.preco} aria-label={`Preço ${value} por mês`}>
      <span className={styles.cifra}>R$ </span>
      <span className={styles.valor}>{value}</span>
      <span className={styles.periodo}> {period}</span>
    </div>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Título e subtítulo iguais ao mock */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        Escolha o Plano Certo para Você
      </h1>
      <p className="mt-3 text-center text-base md:text-lg text-slate-600">
        Encontre a solução perfeita da <span className="font-semibold text-blue-700">OTIAdriver</span> para suas
        necessidades, seja para uso pessoal ou profissional exigente.
      </p>

      {/* GRID DOS CARDS */}
      <section className={styles.planosGrid}>
        {/* BÁSICO */}
        <article className={`${styles.card} ${styles.planoBasico}`} role="region" aria-label="Plano Básico">
          <h2 className="m-0 text-2xl font-extrabold">Básico</h2>
          <Price value="29,90" />
          <p className="mt-1 mb-5 text-sm text-slate-600">Ideal para uso pessoal.</p>

          <ul className={styles.recursos}>
            {basic.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>

          <a
            href="https://mpago.la/131Yx5T"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles["btn-basico"]}`}
          >
            Assinar Agora
          </a>
        </article>

        {/* PRO — RECOMENDADO (fundo turquesa e selo central) */}
        <article className={`${styles.card} ${styles.planoPro}`} role="region" aria-label="Plano PRO">
          <div className={styles.seloRecomendado}>RECOMENDADO</div>

          <h2 className="m-0 text-2xl font-extrabold">PRO</h2>
          <Price value="49,90" />
          <p className="mt-1 mb-5 text-sm text-slate-700">Ideal para Profissionais Exigentes.</p>

          <ul className={styles.recursos}>
            {pro.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>

          <a
            href="https://mpago.la/1KhUK3d"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles["btn-pro"]}`}
          >
            Assinar Agora
          </a>
        </article>

        {/* PREMIUM — azul escuro */}
        <article className={`${styles.card} ${styles.planoPremium}`} role="region" aria-label="Plano Premium">
          <h2 className="m-0 text-2xl font-extrabold">Premium</h2>
          <Price value="99,90" />
          <p className="mt-1 mb-5 text-sm">Ideal para Uso Profissional Ilimitado.</p>

          <ul className={styles.recursos}>
            {premium.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>

          <a
            href="https://mpago.la/1Xu1tTU"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles["btn-premium"]}`}
          >
            Assinar Agora
          </a>
        </article>
      </section>
    </main>
  );
}
