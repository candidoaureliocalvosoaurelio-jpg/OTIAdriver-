// app/pneus/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tireCategories } from "@/data/tires";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  // pré-renderiza as 3 rotas
  return tireCategories.map((c) => ({ slug: c.slug }));
}

export default function TireCategoryPage({ params }: Props) {
  const category = tireCategories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-[#eef7ff] to-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <Link href="/pneus" className="text-sm text-blue-700 hover:underline">
          ← Voltar para Pneus
        </Link>

        <h1 className="text-2xl md:text-4xl font-extrabold text-[#0F2454] mt-4">
          {category.title}{" "}
          <span className="text-lg text-gray-500">• {category.subtitle}</span>
        </h1>

        <p className="mt-2 text-gray-700 max-w-2xl">{category.blurb}</p>

        <div className="rounded-2xl overflow-hidden shadow bg-white border mt-6">
          <div className="relative w-full bg-gray-50" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src={category.image}
              alt={`${category.title} - ${category.subtitle}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Modelos recomendados</h2>
          <p className="text-gray-600">
            Em breve: catálogo com medidas, índice de carga, pressão recomendada,
            aplicações (urbano/rodoviário/misto), recapagem e cuidados.
          </p>
        </section>
      </div>
    </main>
  );
}
