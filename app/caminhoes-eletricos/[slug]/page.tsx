// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { electricTrucks } from "@/data/electricTrucks";

type Props = {
  params: {
    slug: string;
  };
};

export default function ElectricTruckPage({ params }: Props) {
  // procura o caminhão elétrico pelo slug
  const truck = electricTrucks.find((t) => t.slug === params.slug);

  if (!truck) return notFound();

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

      {/* Especificações */}
      {truck.specs && (
        <div className="mt-8 bg-white shadow rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">
              Ficha Técnica ⚡
            </h2>
          </div>
          <dl className="divide-y divide-gray-100">
            {Object.entries(truck.specs).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between px-6 py-3 text-gray-700"
              >
                <dt className="font-medium">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </main>
  );
      }
