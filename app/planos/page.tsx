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
