export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

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

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500 shadow">
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

      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Escolha o Plano Certo para Você
      </h1>
      <p className="mt-3 text-center text-base md:text-xl text-slate-600">
        Encontre a solução perfeita da <span className="font-semibold text-blue-700">OTIAdriver</span> para suas
        necessidades, seja para uso pessoal ou profissional exigente.
      </p>


      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* BÁSICO */}
        <article className="flex min-h-[520px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="bg-gradient-to-b from-slate-100 to-slate-200 px-6 py-7">
            <h3 className="text-3xl font-extrabold text-slate-800">Básico</h3>
            <p className="mt-2 text-4xl font-black text-slate-900">
              R$ 29,90 <span className="text-base font-semibold text-slate-600">/ mês</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Ideal para uso pessoal.</p>
          </div>

          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">{basic.map((t) => <Check key={t}>{t}</Check>)}</ul>

            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-800 px-4 py-3 text-base font-extrabold text-white shadow-lg hover:opacity-90 active:scale-[.98] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>


        {/* PRO (RECOMENDADO) */}
        <article className="relative flex min-h-[560px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-2 ring-emerald-400 md:scale-[1.04]">
          
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-black tracking-wide text-white shadow">
            RECOMENDADO
          </div>

          <div className="bg-teal-500 px-6 py-7 text-white">
            <h3 className="text-3xl font-extrabold">PRO</h3>
            <p className="mt-2 text-4xl font-black">
              R$ 49,90 <span className="text-base font-semibold opacity-90">/ mês</span>
            </p>
            <p className="mt-2 text-sm leading-6 opacity-95">Ideal para Profissionais Exigentes.</p>
          </div>

          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">{pro.map((t) => <Check key={t}>{t}</Check>)}</ul>

            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-base font-extrabold text-white shadow-lg hover:bg-emerald-700 active:scale-[.98] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>


        {/* PREMIUM */}
        <article className="flex min-h-[520px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="bg-gradient-to-b from-blue-900 to-blue-800 px-6 py-7 text-white">
            <h3 className="text-3xl font-extrabold">Premium</h3>
            <p className="mt-2 text-4xl font-black">
              R$ 99,90 <span className="text-base font-semibold opacity-90">/ mês</span>
            </p>
            <p className="mt-2 text-sm leading-6 opacity-95">Ideal para Uso Profissional Ilimitado.</p>
          </div>

          <div className="flex grow flex-col px-6 py-6">
            <ul className="space-y-4">{premium.map((t) => <Check key={t}>{t}</Check>)}</ul>

            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-900 px-4 py-3 text-base font-extrabold text-white shadow-lg hover:bg-blue-800 active:scale-[.98] transition"
            >
              Assinar Agora
            </a>
          </div>
        </article>

      </section>
    </main>
  );
}
