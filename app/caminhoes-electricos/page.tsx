// app/caminhoes-eletricos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "../../data/electricTrucks";

export const metadata = {
  title: "Caminhões Elétricos | OTIAdriver",
  description:
    "Galeria dos caminhões elétricos com imagens e fichas técnicas detalhadas.",
};

export default function ElectricTrucksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Título + intro */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Caminhões Elétricos ⚡
        </h1>
        <p className="mt-2 text-gray-600">
          Explore os modelos elétricos e acesse a ficha técnica completa.
        </p>
      </header>

      {/* Grade de cards */}
      <section>
        {electricTrucks.length === 0 ? (
          <div className="rounded-xl border p-6 text-gray-600">
            Nenhum caminhão elétrico cadastrado ainda. Adicione itens em{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">data/electricTrucks.ts</code>.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricTrucks.map((t) => (
              <Link
                key={t.slug}
                href={`/caminhoes-eletricos/${t.slug}`}
                className="group"
              >
                <article className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.01]">
                  <div
                    className="relative w-full bg-gray-50"
                    style={{ aspectRatio: "3 / 2" }}
                  >
                    <Image
                      src={t.file}
                      alt={t.name}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    {t.brand && (
                      <div className="text-sm text-gray-500 mt-0.5">{t.brand}</div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
