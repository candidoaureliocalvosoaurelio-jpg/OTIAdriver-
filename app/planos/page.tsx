export const metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO e Premium. Assine com segurança pelo Mercado Pago.",
};

import type { ReactNode } from "react";

function Check({ children }: { children: ReactNode }) {
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

export default function PlanosPage() {
  return (
    <>
      {/* 🔧 Neutraliza CSS legado (checks gigantes / opacidade) sem styled-jsx */}
      <style>{`
        main[data-page="planos"] .no-before li::before { content: none !important; background: none !important; }
        main[data-page="planos"] .force-opaque, 
        main[data-page="planos"] .force-opaque * { opacity: 1 !important; filter: none !important; }
      `}</style>

      <main data-page="planos" className="mx-auto max-w-6xl px-4 py-12 text-black force-opaque">
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

              <ul className="no-before mt-6 space-y-3 text-gray-800">
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

              <ul className="no-before mt-6 space-y-3">
                <Check>Fichas Técnicas COMPLETAS</Check>
                <Check>Suporte Técnico IA ilimitado</Check>
                <Check>Análise de Imagem (5/mês)</Check>
                <Check>Checklists de Viagem</Check>
// app/planos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos | OTIAdriver",
  description:
    "Escolha o plano OTIAdriver ideal para você: Básico, PRO e Premium. Assine com segurança pelo Mercado Pago.",
};

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
      <span className="leading-6">{children}</span>
    </li>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título / subtítulo */}
      <h1 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
        Conhecimento Inteligente para Motoristas
      </h1>
      <p className="mt-2 text-center text-slate-600">
        Escolha o Plano Certo para Você
      </p>
      <p className="mt-1 text-center text-slate-500">
        Encontre a solução perfeita da <span className="font-semibold">OTIAdriver</span> para suas necessidades, seja para uso pessoal ou profissional exigente.
      </p>

      {/* Cards */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Básico */}
        <div
          className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6"
          style={{ opacity: 1 }}
        >
          <div className="text-slate-900 font-bold">Básico</div>
          <div className="mt-1 text-3xl font-extrabold">R$ 29,90
            <span className="text-base font-semibold text-slate-500"> / mês</span>
          </div>
          <p className="mt-1 text-slate-600">Ideal para uso pessoal.</p>

          <ul className="mt-6 space-y-3 text-slate-800">
            <Check>Fichas Técnicas Essenciais</Check>
            <Check>Acesso à Galeria</Check>
            <Check>Suporte Básico por Chat</Check>
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

        {/* PRO (recomendado) */}
        <div
          className="relative rounded-2xl bg-white shadow-2xl ring-2 ring-teal-400 p-6"
          style={{ opacity: 1 }}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-white shadow">
            RECOMENDADO
          </span>

          <div className="text-slate-900 font-bold">PRO</div>
          <div className="mt-1 text-3xl font-extrabold">R$ 49,90
            <span className="text-base font-semibold text-slate-500"> / mês</span>
          </div>
          <p className="mt-1 text-slate-600">Ideal para Profissionais Exigentes.</p>

          <ul className="mt-6 space-y-3 text-slate-800">
            <Check>Fichas Técnicas COMPLETAS</Check>
            <Check>Suporte Técnico IA ilimitado</Check>
            <Check>Análise de Imagem (5/mês)</Check>
            <Check>Checklists de Viagem</Check>
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

        {/* Premium */}
        <div
          className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6"
          style={{ opacity: 1 }}
        >
          <div className="text-slate-900 font-bold">Premium</div>
          <div className="mt-1 text-3xl font-extrabold">R$ 99,90
            <span className="text-base font-semibold text-slate-500"> / mês</span>
          </div>
          <p className="mt-1 text-slate-600">Ideal para Uso Profissional Ilimitado.</p>

          <ul className="mt-6 space-y-3 text-slate-800">
            <Check>Todos os Recursos PRO</Check>
            <Check>Análise de Imagem ILIMITADA</Check>
            <Check>Treinamento Personalizado IA</Check>
            <Check>Acesso a Dados Históricos</Check>
            <Check>Suporte Prioritário</Check>
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
