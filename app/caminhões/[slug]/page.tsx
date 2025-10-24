// app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTruckBySlug } from "../../../data/trucks";

type Props = { params: { slug: string } };

export default function TruckPage({ params }: Props) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-blue-700 hover:underline">
        ← Voltar
      </Link>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
        {truck.name}
      </h1>

      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        {/* Imagem */}
        <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Ficha técnica */}
        {truck.specs && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Ficha Técnica</h2>
            <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
              {Object.entries(truck.specs).map(([k, v]) => (
                <li key={k} className="flex items-center justify-between px-4 py-3">
                  <span className="font-medium text-gray-800">{k}</span>
                  <span className="text-gray-700">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
