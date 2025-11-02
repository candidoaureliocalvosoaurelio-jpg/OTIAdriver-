// app/planos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO e Premium. Assine com segurança pelo Mercado Pago.",
};

// ✔️ item com check
function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-[15px] leading-6">{children}</span>
    </li>
  );
}

// botão padrão
function BuyButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold text-white bg-[#0b5bd3] hover:bg-[#094bb0] transition md:w-auto md:px-6"
    >
      {children}
    </a>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* título e subtítulo */}
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Planos <span className="text-[#1F6FEB]">OTIA</span>
          <span className="text-[#40E0D0]">driver</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-600">
          Encontre a solução perfeita da OTIAdriver para suas necessidades.
        </p>
      </header>

      {/* grid de cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Básico */}
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <h3 className="text-xl md:text-2xl font-extrabold">Básico</h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-extrabold">
              R$ 29,90
            </span>
            <span className="text-slate-500">/ mês</span>
          </div>

          <p className="mt-2 text-slate-600">Ideal para uso pessoal.</p>

          <ul className="mt-5 space-y-3 text-slate-800">
            <Check>Fichas Técnicas Essenciais</Check>
            <Check>Acesso à Galeria</Check>
            <Check>Suporte Básico por Chat</Check>
          </ul>

          <div className="mt-6">
            <BuyButton href="https://mpago.la/131Yx5T">Assinar Agora</BuyButton>
          </div>
        </div>

        {/* PRO — destaque */}
        <div className="relative rounded-2xl border border-emerald-300 bg-white p-6 shadow-lg ring-2 ring-emerald-400/60 hover:shadow-emerald-200 transition">
          {/* badge RECOMENDADO */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
            Recomendado
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold">PRO</h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-extrabold">
              R$ 49,90
            </span>
            <span className="text-slate-500">/ mês</span>
          </div>

          <p className="mt-2 text-slate-600">Ideal para Profissionais Exigentes.</p>

          <ul className="mt-5 space-y-3 text-slate-800">
            <Check>Fichas Técnicas COMPLETAS</Check>
            <Check>Suporte Técnico IA Ilimitado</Check>
            <Check>Análise de Imagem (5/mês)</Check>
            <Check>Checklists de Viagem</Check>
          </ul>

          <div className="mt-6">
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition md:w-auto md:px-6 shadow-md"
            >
              Assinar Agora
            </a>
          </div>
        </div>

        {/* Premium */}
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <h3 className="text-xl md:text-2xl font-extrabold">Premium</h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-extrabold">
              R$ 99,90
            </span>
            <span className="text-slate-500">/ mês</span>
          </div>

          <p className="mt-2 text-slate-600">Ideal para Uso Profissional Ilimitado.</p>

          <ul className="mt-5 space-y-3 text-slate-800">
            <Check>Todos os Recursos PRO</Check>
            <Check>Análise de Imagem ILIMITADA</Check>
            <Check>Treinamento IA Personalizado</Check>
            <Check>Acesso a Dados Históricos</Check>
            <Check>Suporte Prioritário</Check>
          </ul>

          <div className="mt-6">
            <BuyButton href="https://mpago.la/1Xu1tTU">Assinar Agora</BuyButton>
          </div>
        </div>
      </section>
    </main>
  );
}
