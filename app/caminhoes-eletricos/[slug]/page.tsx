// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Importa de forma resiliente (seja export default, electricTrucks ou trucks)
import * as EL from "@/data/electricTrucks";

type Truck = {
  slug: string;
  name: string;
  file: string;                 // caminho dentro de /public
  description?: string;
  // Pode ser objeto { Motor: "..." } ou array [{label,value}]
  specs?: Record<string, string> | Array<{ label: string; value: string }>;
};

// Resolve a lista de caminhões elétricos, independente do tipo de export
const LIST: Truck[] =
  ((EL as any).electricTrucks as Truck[]) ??
  ((EL as any).trucks as Truck[]) ??
  ((EL as any).default as Truck[]) ??
  [];

// Utils
function normalizeSlug(s: string) {
  return decodeURIComponent((s || "").trim().toLowerCase());
}
function getTruckBySlug(slug: string): Truck | undefined {
  const s = normalizeSlug(slug);
  return LIST.find((t) => normalizeSlug(t.slug) === s);
}

// Rotas estáticas
export async function generateStaticParams() {
  return LIST.map((t) => ({ slug: t.slug }));
}

// SEO dinâmico
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const truck = getTruckBySlug(params.slug);
  if (!truck) {
    return {
      title: "Caminhão elétrico não encontrado — OTIAdriver",
      description: "A página solicitada não foi encontrada."
    };
  }
  return {
    title: `${truck.name} | Ficha Técnica | OTIAdriver`,
    description: truck.description || `Especificações e detalhes do ${truck.name}.`
  };
}

// Página
export default function TruckPage({ params }: { params: { slug: string } }) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return notFound();

  // Normaliza specs (aceita array ou objeto)
  const specsList: Array<{ label: string; value: string }> = Array.isArray(truck.specs)
    ? (truck.specs as Array<{ label: string; value: string }>)
    : truck.specs
    ? Object.entries(truck.specs as Record<string, string>).map(([label, value]) => ({
        label,
        value,
      }))
    : [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título e Navegação */}
      <div className="mb-8">
        <Link href="/caminhoes-eletricos" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Voltar para Caminhões Elétricos
        </Link>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {truck.name}
        </h1>
      </div>

      {/* Layout: Imagem | Ficha técnica */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Imagem */}
        <div
          className="relative w-full bg-white rounded-2xl shadow-lg"
          style={{ aspectRatio: "4 / 3" }}
        >
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Informações */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Ficha Técnica e Suporte</h2>
          {truck.description ? (
            <p className="text-gray-300 mb-6">{truck.description}</p>
          ) : (
            <p className="text-gray-300 mb-6">Descrição em breve.</p>
          )}

          <div className="bg-zinc-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-white mb-3 border-b border-zinc-700 pb-2">
              Especificações Principais
            </h3>
            {specsList.length > 0 ? (
              <ul className="space-y-2 text-gray-200">
                {specsList.map(({ label, value }) => (
                  <li key={label} className="flex justify-between border-b border-zinc-700/50 pb-1">
                    <span className="font-medium text-white">{label}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">Especificações em breve.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
                                  }
