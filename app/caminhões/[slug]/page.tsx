import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trucks, getTruckBySlug } from "@/data/trucks";

type Props = { params: { slug: string } };

// SEO dinâmico por slug
export function generateMetadata({ params }: Props): Metadata {
  const truck = trucks.find((t) => t.slug === params.slug);
  if (!truck) {
    return {
      title: "Caminhão não encontrado — OTIAdriver",
      description: "A página solicitada não foi encontrada.",
    };
  }
  return {
    title: `${truck.name} — OTIAdriver`,
    description: `Ficha técnica e imagem do ${truck.name}.`,
  };
}

// Página do caminhão
export default function TruckPage({ params }: Props) {
  const truck = trucks.find((t) => t.slug === params.slug);

  if (!truck) return notFound();

  // ⬇️ IMPORTANTE: todo JSX precisa estar dentro de um return (...)
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título e Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Voltar para Galeria
        </Link>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {truck.name}
        </h1>
      </div>

      {/* Grid: Imagem | Ficha técnica */}
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

        {/* Ficha técnica */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Ficha Técnica</h2>
          {truck.specs ? (
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
