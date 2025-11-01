// app/planos/page.tsx

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">

      <h1 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
        Conhecimento Inteligente para Motoristas
      </h1>

      <p className="mt-2 text-center text-slate-600">
        Escolha o Plano Certo para Você
      </p>

      <p className="mt-1 text-center text-slate-500">
        Encontre a solução perfeita da <span className="font-semibold">OTIAdriver</span> para suas necessidades,
        seja para uso pessoal ou profissional exigente.
      </p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* BASICO */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
          <div className="text-slate-900 font-bold">Básico</div>
          <div className="mt-1 text-3xl font-extrabold">R$29,90<span className="text-base font-semibold text-slate-500">/ mês</span></div>
          <p className="mt-1 text-slate-600">Ideal para uso pessoal.</p>

          <ul className="mt-6 space-y-2 text-slate-800">
            <li>✔ Fichas Técnicas Essenciais</li>
            <li>✔ Acesso à Galeria</li>
            <li>✔ Suporte Básico por Chat</li>
          </ul>

          <div className="mt-6">
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-slate-900 text-white hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* PRO */}
        <div className="relative rounded-2xl bg-white shadow-2xl ring-2 ring-teal-400 p-6">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-white shadow">
            RECOMENDADO
          </span>

          <div className="text-slate-900 font-bold">PRO</div>
          <div className="mt-1 text-3xl font-extrabold">R$49,90<span className="text-base font-semibold text-slate-500">/ mês</span></div>
          <p className="mt-1 text-slate-600">Ideal para Profissionais Exigentes.</p>

          <ul className="mt-6 space-y-2 text-slate-800">
            <li>✔ Fichas Técnicas COMPLETAS</li>
            <li>✔ Suporte Técnico IA Ilimitado</li>
            <li>✔ Análise de Imagem (5/mês)</li>
            <li>✔ Checklists de Viagem</li>
          </ul>

          <div className="mt-6">
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-teal-500 text-white hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
          <div className="text-slate-900 font-bold">Premium</div>
          <div className="mt-1 text-3xl font-extrabold">R$99,90<span className="text-base font-semibold text-slate-500">/ mês</span></div>
          <p className="mt-1 text-slate-600">Ideal para Uso Profissional Ilimitado.</p>

          <ul className="mt-6 space-y-2 text-slate-800">
            <li>✔ Todos os Recursos PRO</li>
            <li>✔ Análise de Imagem ILIMITADA</li>
            <li>✔ Treinamento IA Personalizado</li>
            <li>✔ Acesso Histórico de Dados</li>
            <li>✔ Suporte Prioritário</li>
          </ul>

          <div className="mt-6">
            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-slate-900 text-white hover:opacity-90"
            >
              Assinar Agora
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
