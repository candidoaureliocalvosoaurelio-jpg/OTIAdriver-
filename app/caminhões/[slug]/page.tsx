// app/caminhoes-eletricos/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "@/data/electricTrucks";

type PageProps = {
  params: { slug: string };
};

// Gera as rotas estáticas com base nos slugs do array electricTrucks
export function generateStaticParams() {
  return electricTrucks.map((truck) => ({
    slug: truck.slug,
  }));
}

export default function TruckDetailPage({ params }: PageProps) {
  const { slug } = params;

  const truck = electricTrucks.find((t) => t.slug === slug);

  if (!truck) {
    // Se não achar o caminhão, retorna 404
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <Link
          href="/caminhoes-eletricos"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Voltar para a galeria de caminhões elétricos
        </Link>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Imagem do caminhão */}
        <div className="w-full bg-gray-50 rounded-2xl shadow p-4">
          <div
            className="relative w-full"
            style={{ aspectRatio: "3 / 2" }}
          >
            <Image
              src={truck.file}
              alt={truck.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Dados principais */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {truck.name}
          </h1>

          {truck.description && (
            <p className="text-gray-700 mb-4">{truck.description}</p>
          )}

          {/* Exemplo: se você tiver mais campos no electricTrucks, pode exibir aqui */}
          {truck.range && (
            <p className="text-sm text-gray-600">
              Autonomia estimada: <strong>{truck.range}</strong>
            </p>
          )}
          {truck.battery && (
            <p className="text-sm text-gray-600">
              Capacidade da bateria: <strong>{truck.battery}</strong>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
