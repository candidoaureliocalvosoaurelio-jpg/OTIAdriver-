// app/pneus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-[#eef7ff] to-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Título da página */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F2454]">
            Pneus
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Escolha a categoria certa para seu veículo. A calibragem adequada e
            o tipo correto por eixo fazem toda a diferença em segurança,
            consumo e durabilidade.
          </p>
        </div>

        {/* GRID de categorias */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tireCategories.map((t) => (
            <Link key={t.slug} href={`/pneus/${t.slug}`} className="group">
              <article className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.01] border">
                <div
                  className="relative w-full bg-gray-50"
                  style={{ aspectRatio: "3 / 2" }}
                >
                  <Image
                    src={t.image}
                    alt={`${t.title} - ${t.subtitle}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {t.title} <span className="text-sm text-gray-500">• {t.subtitle}</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{t.blurb}</p>

                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-300 text-blue-800 group-hover:bg-blue-50">
                      Ver Pneus →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
