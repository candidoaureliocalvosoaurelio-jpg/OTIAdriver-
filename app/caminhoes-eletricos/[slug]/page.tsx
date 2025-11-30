// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  electricTrucks,
  getElectricTruckBySlug,
} from "@/data/electricTrucks";

type Props = {
  params: {
    slug: string;
  };
};

// Gera todas as rotas estáticas com base nos slugs definidos em data/electricTrucks.ts
export function generateStaticParams() {
  return electricTrucks.map((truck) => ({
    slug: truck.slug,
  }));
}

// SEO dinâmico por modelo
export function generateMetadata({ params }: Props): Metadata {
  const truck = getElectricTruckBySlug(params.slug);

  if (!truck) {
    return {
      title: "Caminhão elétrico não encontrado — OTIAdriver",
      description: "A página solicitada não foi encontrada.",
    };
  }

  return {
    title: `${truck.name} — Caminhão Elétrico | OTIAdriver`,
    description: `Ficha técnica e informações completas do caminhão elétrico ${truck.name}.`,
  };
}

// Página técnica do caminhão elétrico
export default function ElectricTruckPage({ params }: Props) {
  const truck = getElectricTruckBySlug(params.slug);

  if (!truck) {
    return notFound();
  }

  const specs = truck.specs ?? {};

  // Campos que queremos destacar em cards coloridos
  const destaqueKeys = ["Potência", "Autonomia", "Bateria", "Torque"];
  const destaques = destaqueKeys
    .filter((key) => specs[key])
    .map((key) => ({ key, value: specs[key] as string }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Navegação superior */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/caminhoes-eletricos"
          className="text-sm text-blue-700 hover:text-blue-900 hover:underline"
        >
          ← Voltar para caminhões elétricos
        </Link>

        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
          Ficha Técnica Oficial OTIAdriver ⚡
        </span>
      </div>

      {/* Título e descrição */}
      <header className="mt-6 border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {truck.name}
        </h1>
        {truck.description && (
          <p className="mt-3 max-w-3xl text-base md:text-lg text-slate-600">
            {truck.description}
          </p>
        )}
      </header>

      {/* Bloco principal: imagem + destaques */}
      <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* Imagem e visual do modelo */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200">
            <div
              className="relative w-full bg-slate-50"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={truck.file}
                alt={truck.name}
                fill
                className="object-contain p-6 md:p-8"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <p className="text-sm text-slate-500">
            Representação ilustrativa do modelo. Consulte a montadora para
            especificações comerciais finais e atualizações.
          </p>
        </div>

        {/* Destaques técnicos principais */}
        <aside className="space-y-4">
          <div className="rounded-3xl bg-sky-50/80 border border-sky-100 shadow-sm p-5 md:p-6">
            <h2 className="text-base font-semibold text-sky-900 tracking-tight">
              Principais destaques técnicos
            </h2>
            <p className="mt-2 text-sm text-sky-800/80">
              Resumo dos parâmetros mais relevantes para análise operacional e
              de desempenho.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destaques.length > 0 ? (
                destaques.map((item) => (
                  <div
                    key={item.key}
                    className="rounded-2xl bg-white/80 border border-sky-100 px-3 py-3"
                  >
                    <div className="text-[11px] uppercase tracking-wide font-semibold text-sky-700">
                      {item.key}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {item.value}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-sky-900">
                  Especificações resumidas em preparação para este modelo.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50/70 border border-emerald-100 p-4 text-xs text-emerald-900">
            <p className="font-semibold mb-1">Recomendação OTIAdriver</p>
            <p>
              Use esta ficha em conjunto com os módulos de treinamento
              específicos (NR 10, carregamento eficiente, telemetria e TCO) para
              qualificar motoristas e gestores de frota na operação de veículos
              elétricos pesados.
            </p>
          </div>
        </aside>
      </section>

      {/* Ficha técnica completa */}
      {specs && Object.keys(specs).length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Detalhamento técnico completo
            </h2>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900 text-slate-50">
              Documento técnico · OTIAdriver
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <dl className="divide-y divide-slate-100">
              {Object.entries(specs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-4 md:px-6 py-3 md:py-3.5 ${
                    index % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                  }`}
                >
                  <dt className="md:w-1/3 text-xs font-semibold tracking-wide text-slate-600 uppercase">
                    {key}
                  </dt>
                  <dd className="md:flex-1 text-sm text-slate-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </main>
  );
}
