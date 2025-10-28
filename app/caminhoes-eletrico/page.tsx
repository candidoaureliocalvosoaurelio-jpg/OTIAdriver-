// app/caminhoes-eletricos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "@/data/electricTrucks";

export const metadata = {
  title: "Caminhões Elétricos ⚡ | OTIAdriver",
  description:
    "Galeria oficial dos caminhões elétricos — inovação, energia limpa e inteligência OTIAdriver.",
};

export default function ElectricTrucksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Caminhões Elétricos ⚡
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A nova era do transporte começa com energia limpa e inteligência{" "}
          <span className="font-semibold text-teal-600">OTIAdriver</span>.
        </p>
      </div>

      {/* Grid dos caminhões elétricos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {electricTrucks.map((truck) => (
          <Link
            key={truck.slug}
            href={`/caminhoes-eletricos/${truck.slug}`}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.02]">
              <div
                className="relative w-full bg-gray-50"
                style={{ aspectRatio: "3 / 2" }}
              >
                <Image
                  src={truck.file}
                  alt={truck.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg text-gray-800">
                  {truck.name}
                </h2>
                {truck.description && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {truck.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Rodapé informativo */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 Inovação sobre rodas — O futuro é elétrico com OTIAdriver ⚡</p>
      </div>
    </main>
  );
}
