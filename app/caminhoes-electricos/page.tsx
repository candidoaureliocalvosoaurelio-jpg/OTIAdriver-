// app/caminhoes-electricos/page.tsx
import Image from "next/image";
import Link from "next/link";

// ATENÇÃO ao nome da exportação no seu arquivo de dados.
// Se o seu arquivo for "data/eletricTrucks.ts" e exportar `eletricTrucks` (sem o 2º "c"),
// mantenha a linha abaixo. Se você exporta `electricTrucks`, troque o import e a
// constante `trucks` ali embaixo para usar `electricTrucks`.
import { electricTrucks } from "@/data/electricTrucks";

export const metadata = {
  title: "Caminhões Elétricos | OTIAdriver",
  description: "Galeria dos 13 caminhões elétricos — imagens, nomes e links para detalhes.",
};

export default function ElectricTrucksPage() {
  // Se seu export for `electricTrucks`, mude esta linha para: const trucks = electricTrucks;
  const trucks = eletricTrucks;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Cabeçalho + Voltar */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Caminhões Elétricos ⚡
        </h1>
        <Link
          href="/"
          className="text-sm text-blue-700 hover:underline"
        >
          ← Voltar para a Home
        </Link>
      </div>

      {/* Grade de cartões */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((t) => (
          <Link
            key={t.slug}
            href={`/caminhoes-eletricos/${t.slug}`}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.01]">
              <div
                className="relative w-full bg-gray-50"
                style={{ aspectRatio: "3 / 2" }}
              >
                <Image
                  src={t.file}
                  alt={t.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center font-medium text-gray-800">
                {t.name}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Observação opcional (caso alguma imagem falhe) */}
      {(!trucks || trucks.length === 0) && (
        <p className="mt-8 text-sm text-gray-500">
          Nenhum caminhão elétrico cadastrado ainda.
        </p>
      )}
    </main>
  );
}
