// app/planos/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO e Premium. Assine com segurança pelo Mercado Pago.",
};

/** Ícone de check. Quando invert=true, o traço fica branco (para fundo escuro). */
function Check({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none"
        fill="none"
        stroke={invert ? "#FFFFFF" : "#10b981"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
      <span className={invert ? "text-white" : "text-slate-800"}>{children}</span>
    </li>
  );
}

export default function PlanosPage() {
  return (
    <main data-page="planos" className="mx-auto max-w-6xl px-4 py-10">
      {/* Título + subtítulo */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">
          Conhecimento Inteligente para Motoristas
        </h1>
        <p className="mt-3 text-slate-600">
          Encontre a solução perfeita da{" "}
          <span className="font-semibold text-slate-700">OTIAdriver</span> para
          suas necessidades, seja para uso pessoal ou profissional exigente.
        </p>
      </header>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* BÁSICO */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
          {/* topo cinza claro */}
          <div className="bg-gradient-to-b from-slate-100 to-slate-200 px-8 pt-8 pb-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b1220]">
              Básico
            </h3>
            <div className="mt-3">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#0b4aa6]">
                R$ 29,90
              </span>
              <span className="text-slate-600 font-semibold">/ mês</span>
            </div>
            <p className="mt-4 text-slate-600">Ideal para uso pessoal.</p>
          </div>

          {/* corpo branco */}
          <div className="px-8 py-6 space-y-4">
            <ul className="space-y-4">
              <Check>Fichas Técnicas Essenciais</Check>
              <Check>Acesso à Galeria</Check>
              <Check>Suporte Básico por Chat</Check>
            </ul>

            <div className="pt-4">
              <a
                href="https://mpago.la/131Yx5T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-[#0b4aa6] text-white hover:opacity-90 transition"
                aria-label="Assinar plano Básico"
              >
                Assinar Agora
              </a>
            </div>
          </div>
        </div>

        {/* PRO (recomendado) */}
        <div className="rounded-3xl overflow-hidden shadow-xl ring-2 ring-emerald-200 bg-white relative">
          {/* selo recomendado */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 shadow">
            RECOMENDADO
          </span>

          {/* topo teal */}
          <div className="bg-[#20c7c7] px-8 pt-8 pb-6 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold">PRO</h3>
            <div className="mt-3">
              <span className="block text-3xl md:text-4xl font-extrabold">
                R$ 49,90
              </span>
              <span className="opacity-90 font-semibold">/ mês</span>
            </div>
            <p className="mt-4 opacity-90">Ideal para Profissionais Exigentes.</p>
          </div>

          {/* corpo branco */}
          <div className="px-8 py-6 space-y-4">
            <ul className="space-y-4">
              <Check>Fichas Técnicas COMPLETAS</Check>
              <Check>Suporte Técnico IA ilimitado</Check>
              <Check>Análise de Imagem (5/mês)</Check>
              <Check>Checklists de Viagem</Check>
            </ul>

            <div className="pt-4">
              <a
                href="https://mpago.la/1KhUK3d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-emerald-500 text-white hover:opacity-90 transition"
                aria-label="Assinar plano PRO"
              >
                Assinar Agora
              </a>
            </div>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
          {/* topo azul escuro */}
          <div className="bg-[#0a3c78] px-8 pt-8 pb-6 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold">Premium</h3>
            <div className="mt-3">
              <span className="block text-3xl md:text-4xl font-extrabold">
                R$ 99,90
              </span>
              <span className="opacity-90 font-semibold">/ mês</span>
            </div>
            <p className="mt-4 opacity-90">Ideal para Uso Profissional Ilimitado.</p>
          </div>

          {/* corpo branco */}
          <div className="px-8 py-6 space-y-4">
            <ul className="space-y-4">
              <Check>Todos os Recursos PRO</Check>
              <Check>Análise de Imagem ILIMITADA</Check>
              <Check>Treinamento IA Personalizado</Check>
              <Check>Acesso a Dados Históricos</Check>
              <Check>Suporte Prioritário</Check>
            </ul>

            <div className="pt-4">
              <a
                href="https://mpago.la/1Xu1tTU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-[#0b4aa6] text-white hover:opacity-90 transition"
                aria-label="Assinar plano Premium"
              >
                Assinar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
                          }
