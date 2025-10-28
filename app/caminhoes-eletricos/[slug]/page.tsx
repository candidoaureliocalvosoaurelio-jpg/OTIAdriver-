// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Importa de forma resiliente (funciona se export for electricTrucks, trucks ou default)
import * as EL from "@/data/electricTrucks";

type Truck = {
  slug: string;
  name: string;
  file: string;
  description?: string;
  specs?: Record<string, string>;
};

export const metadata: Metadata = {
  title: "Caminhões Elétricos | OTIAdriver",
  description: "Detalhes técnicos e imagens dos caminhões elétricos em destaque",
};

export default function ElectricTruckPage({ params }: { params: { slug: string } }) {
  // ✅ garante compatibilidade independente de exportação
  const trucks: Truck[] = (EL.electricTrucks || EL.trucks || EL.default || []) as Truck[];
  const truck = trucks.find((t) => t.slug === params.slug);

  if (!truck) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/caminhoes-eletricos" className="text-sm text-blue-700 hover:underline">
        ← Voltar para galeria
      </Link>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        {truck.name}
      </h1>

      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {truck.description && (
          <p className="p-4 text-gray-700 text-center">{truck.description}</p>
        )}

        {truck.specs && (
          <div className="p-6 border-t border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Ficha Técnica ⚡</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {Object.entries(truck.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
