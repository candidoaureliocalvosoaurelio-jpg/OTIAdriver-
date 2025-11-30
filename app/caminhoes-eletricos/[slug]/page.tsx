// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { electricTrucks } from "@/data/electricTrucks";
import { electricTruckSpecs } from "@/data/electricTruckSpecs";

type Props = {
  params: {
    slug: string;
  };
};

// Geração estática das rotas com base nos slugs em `electricTrucks`
export function generateStaticParams() {
  return electricTrucks.map((truck) => ({
    slug: truck.slug,
  }));
}

// SEO dinâmico por slug
export function generateMetadata({ params }: Props): Metadata {
  const truck = electricTrucks.find((t) => t.slug === params.slug);

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

// Página do caminhão elétrico
export default function ElectricTruckPage({ params }: Props) {
  // procura o caminhão elétrico pelo slug
  const truck = electricTrucks.find((t) => t.slug === params.slug);

  if (!truck) return notFound();

  // Ficha técnica detalhada: se existir no mapa, usa; senão, usa specs básicas do próprio truck
  const specs: Record<string, string> =
    electricTruckSpecs[truck.slug] ?? (truck.specs ?? {});

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Voltar */}
      <Link
        href="/caminhoes-eletricos"
        className="text-sm text-blue-700 hover:underline"
      >
        ← Voltar à lista
      </Link>

      {/* Nome do caminhão */}
      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        {truck.name}
      </h1>

      {/* Imagem */}
      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        <div
          className="relative w-full bg-gray-50"
          style={{ aspectRatio: "3 / 2" }}
        >
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Descrição */}
      {truck.description && (
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          {truck.description}
        </p>
      )}

      {/* Ficha Técnica */}
      {specs && Object.keys(specs).length > 0 && (
        <div className="mt-8 bg-white shadow rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">
              Ficha Técnica ⚡
            </h2>
          </div>
          <dl className="divide-y divide-gray-100">
            {Object.entries(specs).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between gap-4 px-6 py-3 text-gray-700"
              >
                <dt className="font-medium">{key}</dt>
                <dd className="text-right flex-1">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </main>
  );
}
