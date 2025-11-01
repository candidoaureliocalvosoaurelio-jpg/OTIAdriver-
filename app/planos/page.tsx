export const metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO ou Premium. Assine com segurança pelo Mercado Pago.",
};

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      {/* check */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-sm">{children}</span>
    </li>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-black">
      {/* Título e subtítulo */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Escolha o Plano Certo para Você
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Encontre a solução perfeita da <span className="font-semibold">OTIAdriver</span> para
          suas necessidades, seja para uso pessoal ou profissional exigente.
        </p>
      </header>

      {/* Cards de planos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Básico */}
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-extrabold">Básico</h2>
            <div className="mt-2 text-3xl font-extrabold">
              <span className="align-top text-base mr-1">R$</span>29,90
              <span className="ml-1 text-base font-medium text-gray-500">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Ideal para uso pessoal.</p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <CheckItem>Fichas Técnicas Essenciais</CheckItem>
              <CheckItem>Acesso à Galeria</CheckItem>
              <CheckItem>Suporte Básico por Chat</CheckItem>
            </ul>
          </div>

          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold ring-1 ring-gray-300 hover:bg-gray-50 transition"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* PRO (Destaque) */}
        <div className="relative rounded-2xl bg-[#21B2A7] text-white shadow-lg overflow-hidden">
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 ring-1 ring-black/10">
            RECOMENDADO
          </span>
          <div className="p-6">
            <h2 className="text-2xl font-extrabold">PRO</h2>
            <div className="mt-2 text-3xl font-extrabold">
              <span className="align-top text-base mr-1">R$</span>49,90
              <span className="ml-1 text-base font-medium text-white/80">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-white/90">Ideal para Profissionais Exigentes.</p>

            <ul className="mt-6 space-y-3">
              <CheckItem>Fichas Técnicas COMPLETAS</CheckItem>
              <CheckItem>Suporte Técnico IA ilimitado</CheckItem>
              <CheckItem>Análise de Imagem (5/mês)</CheckItem>
              <CheckItem>Checklists de Viagem</CheckItem>
            </ul>
          </div>

          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-white text-gray-900 hover:bg-white/90 transition"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* Premium */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0C3B66] to-[#0A2F52] text-white shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-extrabold">Premium</h2>
            <div className="mt-2 text-3xl font-extrabold">
              <span className="align-top text-base mr-1">R$</span>99,90
              <span className="ml-1 text-base font-medium text-white/80">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-white/90">Ideal para Uso Profissional Ilimitado.</p>

            <ul className="mt-6 space-y-3">
              <CheckItem>Todos os Recursos PRO</CheckItem>
              <CheckItem>Análise de Imagem ILIMITADA</CheckItem>
              <CheckItem>Treinamento Personalizado IA</CheckItem>
              <CheckItem>Acesso a Dados Históricos</CheckItem>
              <CheckItem>Suporte Prioritário</CheckItem>
            </ul>
          </div>

          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-white text-gray-900 hover:bg-white/90 transition"
            >
              Assinar Agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
