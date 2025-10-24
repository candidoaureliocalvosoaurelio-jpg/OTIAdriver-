// app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getTruckBySlug } from "../../../data/trucks";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function TruckPage({ params }: Props) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-blue-700 hover:underline">← Voltar</Link>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
        {truck.name}
      </h1>

      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
          <Image src={truck.file} alt={truck.name} fill className="object-contain p-4" sizes="100vw" />
        </div>
      </div>

      {/* Exemplo de conteúdo técnico (preencha quando tiver os dados) */}
      {truck.specs && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Especificações</h2>
          <ul className="space-y-2">
            {Object.entries(truck.specs).map(([k, v]) => (
              <li key={k} className="flex justify-between border-b py-2">
                <span className="text-gray-600">{k}</span>
                <span className="font-medium">{v}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
      }
