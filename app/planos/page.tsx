// app/planos/page.tsx
export const metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO e Premium. Assine com segurança pelo Mercado Pago.",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-[15px] leading-6">{children}</span>
    </li>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-black">
      {/* Título e subtítulo */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Escolha o Plano Certo para Você
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          Encontre a solução perfeita da <span className="font-semibold">OTIAdriver</span> para suas necessidades,
          seja para uso pessoal ou profissional exigente.
        </p>
      </header>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Básico */}
        <div className="rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 ring-1 ring-gray-200 shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-[22px] font-extrabold text-gray-800">Básico</h2>
            <div className="mt-1 text-3xl font-extrabold text-gray-900">
              <span className="align-top text-base mr-1">R$</span>29,90
              <span className="ml-1 text-base font-medium text-gray-500">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Ideal para uso pessoal.</p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <Check>Fichas Técnicas Essenciais</Check>
              <Check>Acesso à Galeria</Check>
              <Check>Suporte Básico por Chat</Check>
            </ul>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-[#0E3A5D] text-white hover:opacity-90 transition"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* PRO – Destaque turquesa */}
        <div className="relative rounded-2xl bg-[#21B2A7] text-white shadow-md overflow-hidden">
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-900 shadow-sm">
            RECOMENDADO
          </span>
          <div className="p-6">
            <h2 className="text-[22px] font-extrabold">PRO</h2>
            <div className="mt-1 text-3xl font-extrabold">
              <span className="align-top text-base mr-1">R$</span>49,90
              <span className="ml-1 text-base font-medium text-white/80">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-white/90">Ideal para Profissionais Exigentes.</p>

            <ul className="mt-6 space-y-3">
              <Check>Fichas Técnicas COMPLETAS</Check>
              <Check>Suporte Técnico IA ilimitado</Check>
              <Check>Análise de Imagem (5/mês)</Check>
              <Check>Checklists de Viagem</Check>
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

        {/* Premium – Azul escuro */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0C3B66] to-[#0A2F52] text-white shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-[22px] font-extrabold">Premium</h2>
            <div className="mt-1 text-3xl font-extrabold">
              <span className="align-top text-base mr-1">R$</span>99,90
              <span className="ml-1 text-base font-medium text-white/80">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-white/90">Ideal para Uso Profissional Ilimitado.</p>

            <ul className="mt-6 space-y-3">
              <Check>Todos os Recursos PRO</Check>
              <Check>Análise de Imagem ILIMITADA</Check>
              <Check>Treinamento Personalizado IA</Check>
              <Check>Acesso a Dados Históricos</Check>
              <Check>Suporte Prioritário</Check>
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
