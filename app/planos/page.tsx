
export default function PlanosPage() {
    return (
        <main className="container-planos">

            {/* Título e Introdução Persuasiva */}
            <header className="introducao-planos">
                <h1>Escolha o Seu Nível de Inteligência e Performance.</h1>
                <p>O avanço da tecnologia automotiva exige ferramentas à altura. Na OTIADriver, criamos três níveis de serviço para garantir que você tenha exatamente o que precisa – seja você um entusiasta buscando dados essenciais ou um <b>profissional exigente</b> que depende da IA para decisões críticas.</p>
                <p><b>Recomendamos o plano PRO</b> para a maioria dos usuários, pois ele oferece a combinação perfeita de <b>Fichas Técnicas COMPLETAS</b> e suporte ilimitado da nossa IA, garantindo excelência e eficiência no seu dia a dia.</p>
            </header>

            {/* Seção de Cards de Planos (A estilização de colunas virá do seu CSS/Tailwind/etc.) */}
            <section className="planos-grid">

                {/* Card 1: BÁSICO (R$ 29,90) */}
                <div className="card plano-basico">
                    <h2>Básico</h2>
                    <p className="ideal-para">Ideal para Uso Pessoal</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">29,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ Fichas Técnicas Essenciais</li>
                        <li>✔️ Acesso à Galeria</li>
                        <li>✔️ Suporte Básico por Chat</li>
                        <li>❌ Análise de Imagem (IA)</li>
                        <li>❌ Acesso a Dados Históricos</li>
                    </ul>
                    <a href="#link-checkout-basico" className="btn btn-basico">ASSINAR AGORA (R$ 29,90)</a>
                </div>

                {/* Card 2: PRO (R$ 49,90) - DESTAQUE! */}
                <div className="card plano-pro destaque">
                    <span className="selo-recomendado">RECOMENDADO</span>
                    <h2>PRO</h2>
                    <p className="ideal-para">Ideal para Profissionais Exigentes</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">49,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ <b>Fichas Técnicas COMPLETAS</b></li>
                        <li>✔️ Suporte Técnico IA Ilimitado</li>
                        <li>✔️ Análise de Imagem (5/mês)</li>
                        <li>✔️ Checklists de Viagem</li>
                        <li>❌ Acesso a Dados Históricos</li>
                    </ul>
                    <a href="#link-checkout-pro" className="btn btn-pro">ASSINAR AGORA (RECOMENDADO)</a>
                </div>

                {/* Card 3: PREMIUM (R$ 99,90) */}
                <div className="card plano-premium">
                    <h2>Premium</h2>
                    <p className="ideal-para">Ideal para Uso Profissional Ilimitado</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">99,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ Todos os Recursos PRO</li>
                        <li>✔️ Análise de Imagem <b>ILIMITADA</b></li>
                        <li>✔️ Treinamento Personalizado IA</li>
                        <li>✔️ <b>Acesso a Dados Históricos</b></li>
                        <li>✔️ Suporte Prioritário</li>
                    </ul>
                    <a href="#link-checkout-premium" className="btn btn-premium">ASSINAR AGORA (R$ 99,90)</a>
                </div>

            </section>

            {/* Seção de Perguntas Frequentes (FAQ) */}
            <section className="faq-secao">
// app/planos/page.tsx

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        Escolha o Plano Certo para Você
      </h1>
      <p className="mt-3 text-center text-slate-600">
        Encontre a solução perfeita da <span className="font-semibold">OTIAdriver</span> para suas necessidades,
        seja para uso pessoal ou profissional exigente.
      </p>

      {/* Grade de planos */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* === BÁSICO === */}
        <article className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-gradient-to-b from-slate-100 to-white">
          {/* Cabeçalho do card */}
          <div className="p-6">
            <h3 className="text-2xl font-extrabold text-slate-800">Básico</h3>
            <div className="mt-2 text-3xl font-extrabold text-slate-900">
              R$ 29,90 <span className="text-base font-semibold text-slate-500">/ mês</span>
            </div>
            <p className="mt-1 text-slate-600">Ideal para uso pessoal.</p>

            <ul className="mt-6 space-y-3 text-slate-800">
              <Feature>Fichas Técnicas Essenciais</Feature>
              <Feature>Acesso à Galeria</Feature>
              <Feature>Suporte Básico por Chat</Feature>
            </ul>
          </div>

          {/* Botão */}
          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-slate-900 text-white hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </article>

        {/* === PRO (RECOMENDADO) === */}
        <article className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-teal-400 bg-gradient-to-b from-teal-400 to-teal-500 text-white">
          {/* Selo */}
          <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 text-teal-700 px-3 py-1 text-xs font-extrabold shadow">
            RECOMENDADO
          </span>

          <div className="p-6">
            <h3 className="text-2xl font-extrabold">PRO</h3>
            <div className="mt-2 text-3xl font-extrabold">
              R$ 49,90 <span className="text-base font-semibold opacity-90">/ mês</span>
            </div>
            <p className="mt-1 opacity-90">Ideal para Profissionais Exigentes.</p>

            <ul className="mt-6 space-y-3">
              <Feature invert>Fichas Técnicas COMPLETAS</Feature>
              <Feature invert>Suporte Técnico IA ilimitado</Feature>
              <Feature invert>Análise de Imagem (5/mês)</Feature>
              <Feature invert>Checklists de Viagem</Feature>
            </ul>
          </div>

          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-white text-teal-700 hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </article>

        {/* === PREMIUM === */}
        <article className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-gradient-to-b from-slate-800 to-indigo-900 text-white">
          <div className="p-6">
            <h3 className="text-2xl font-extrabold">Premium</h3>
            <div className="mt-2 text-3xl font-extrabold">
              R$ 99,90 <span className="text-base font-semibold opacity-90">/ mês</span>
            </div>
            <p className="mt-1 opacity-90">Ideal para Uso Profissional Ilimitado.</p>

            <ul className="mt-6 space-y-3">
              <Feature invert>Todos os Recursos PRO</Feature>
              <Feature invert>Análise de Imagem ILIMITADA</Feature>
              <Feature invert>Treinamento IA Personalizado</Feature>
              <Feature invert>Acesso a Dados Históricos</Feature>
              <Feature invert>Suporte Prioritário</Feature>
            </ul>
          </div>

          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-white text-slate-900 hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </article>

      </section>
    </main>
  );
}

/* ---------- Componentes auxiliares ---------- */
function Feature({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      {/* Check redondo */}
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" className={invert ? "opacity-100" : "text-violet-600"} />
        <path
          d="M7 12l3 3 7-7"
          className={invert ? "text-white" : "text-white"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className={invert ? "text-white/95" : "text-slate-800"}>{children}</span>
    </li>
  );
            }
