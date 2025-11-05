// app/planos/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Planos | OTIAdriver",
  description: "Conheça os planos da plataforma OTIAdriver",
};

// Itens
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

function Check({
  children,
  bulletClass = "bg-emerald-600",
}: {
  children: React.ReactNode;
  bulletClass?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${bulletClass} shadow`}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-slate-800">{children}</span>
    </li>
  );
}

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Título igual ao mock */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
        Escolha o Plano Certo para Você
      </h1>
      <p className="mt-3 text-center text-base md:text-xl text-slate-600">
        Encontre a solução perfeita da <span className="font-semibold text-blue-700">OTIAdriver</span> para suas
        necessidades, seja para uso pessoal ou profissional exigente.
      </p>

      {/* Cards — alturas niveladas e conteúdo centralizado no topo colorido */}
      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
        {/* BÁSICO (topo cinza) */}
        <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          {/* Topo */}
          <div className="bg-gradient-to-b from-slate-200 to-slate-100 px-6 py-7 text-center">
            <h3 className="text-3xl font-extrabold text-slate-800">Básico</h3>
            <p className="mt-2 text-4xl font-black text-slate-900">
              R$ 29,90 <span className="text-base font-semibold text-slate-600">/ mês</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">Ideal para uso pessoal.</p>
          </div>

          {/* Corpo */}
          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">
              {basic.map((t) => (
                <Check key={t} bulletClass="bg-emerald-600">{t}</Check>
              ))}
            </ul>

            {/* Botão */}
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#12345B] px-4 py-3 text-base font-extrabold text-white shadow-lg hover:opacity-95 active:translate-y-[1px] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>

        {/* PRO (teal) com selo RECOMENDADO e destaque de borda) */}
        <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-2 ring-emerald-300 md:scale-[1.02]">
          {/* Selo */}
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-black tracking-wide text-white shadow">
            RECOMENDADO
          </div>

          {/* Topo */}
          <div className="px-6 py-7 text-center text-white" style={{ background: "linear-gradient(180deg,#12C6B3 0%,#10B3A3 100%)" }}>
            <h3 className="text-3xl font-extrabold">PRO</h3>
            <p className="mt-2 text-4xl font-black">
              R$ 49,90 <span className="text-base font-semibold opacity-95">/ mês</span>
            </p>
            <p className="mt-2 text-sm/6 opacity-95">Ideal para Profissionais Exigentes.</p>
          </div>

          {/* Corpo */}
          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">
              {pro.map((t) => (
                <Check key={t} bulletClass="bg-teal-500">{t}</Check>
              ))}
            </ul>

            {/* Botão */}
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-base font-extrabold text-white shadow-lg hover:bg-emerald-700 active:translate-y-[1px] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>

        {/* PREMIUM (azul escuro) */}
        <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          {/* Topo */}
          <div className="px-6 py-7 text-center text-white" style={{ background: "linear-gradient(180deg,#123D83 0%,#0F2F68 100%)" }}>
            <h3 className="text-3xl font-extrabold">Premium</h3>
            <p className="mt-2 text-4xl font-black">
              R$ 99,90 <span className="text-base font-semibold opacity-95">/ mês</span>
            </p>
            <p className="mt-2 text-sm/6 opacity-95">Ideal para Uso Profissional Ilimitado.</p>
          </div>

          {/* Corpo */}
          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">
              {premium.map((t) => (
                <Check key={t} bulletClass="bg-blue-700">{t}</Check>
              ))}
            </ul>

            {/* Botão */}
            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#0F2F68] px-4 py-3 text-base font-extrabold text-white shadow-lg hover:opacity-95 active:translate-y-[1px] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
