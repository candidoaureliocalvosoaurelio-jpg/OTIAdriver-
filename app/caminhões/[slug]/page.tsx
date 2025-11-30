// app/caminhoes-eletricos/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { electricTrucks, getElectricTruckBySlug } from "@/data/electricTrucks";

type Props = {
  params: { slug: string };
};

// Gera as rotas estáticas com base nos slugs dos caminhões elétricos
export function generateStaticParams() {
  return electricTrucks.map((truck) => ({
    slug: truck.slug,
  }));
}

// SEO dinâmico por slug (caminhões elétricos)
export function generateMetadata({ params }: Props): Metadata {
  const truck = getElectricTruckBySlug(params.slug);

  if (!truck) {
    return {
      title: "Caminhão elétrico não encontrado — OTIAdriver",
      description: "A página solicitada não foi encontrada.",
    };
  }

  return {
    title: `${truck.name} — Caminhão Elétrico — OTIAdriver`,
    description: `Ficha técnica do caminhão elétrico ${truck.name}.`,
  };
}

// Página do caminhão elétrico
export default function ElectricTruckPage({ params }: Props) {
  const truck = getElectricTruckBySlug(params.slug);

  if (!truck) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título e Navegação */}
      <div className="mb-8">
        <Link
          href="/caminhoes-eletricos"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          ← Voltar para caminhões elétricos
        </Link>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {truck.name}
        </h1>
      </div>

      {/* Grid: (futuramente imagem) | Ficha técnica */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Coluna da esquerda: placeholder para imagem ou gráfico */}
        <div className="relative w-full bg-white rounded-2xl shadow-lg flex items-center justify-center p-6">
          <p className="text-center text-gray-700 text-sm">
            Área reservada para imagem, diagrama ou ilustração do caminhão
            elétrico <span className="font-semibold">{truck.name}</span>.
          </p>
        </div>

        {/* Ficha técnica */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Ficha Técnica</h2>

          {truck.specs && Object.keys(truck.specs).length > 0 ? (
            <ul className="space-y-2 text-gray-200">
              {Object.entries(truck.specs).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">Especificações em breve.</p>
          )}
        </section>
      </div>
    </main>
  );
}
