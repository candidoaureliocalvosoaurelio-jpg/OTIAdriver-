// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { trucks } from "../data/trucks";

export const metadata = {
  title: "OTIAdriver | Conhecimento Inteligente para Motoristas",
  description:
    "A OTIAdriver é a plataforma inteligente que conecta tecnologia, aprendizado e inovação para motoristas do futuro.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Cabeçalho principal */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          <span className="text-blue-700">OTIA</span>
          <span className="text-green-600">driver</span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Conhecimento Inteligente para Motoristas
        </p>
      </section>

      {/* Grade de caminhões */}
      <section className="py-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Caminhões em Destaque 🚛
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trucks.map((t) => (
            <Link key={t.slug} href={`/caminhoes/${t.slug}`} className="group">
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
                    priority={false}
                  />
                </div>
                <div className="p-4 text-center font-medium text-gray-800">
                  {t.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-4 text-center mt-10 rounded-xl">
        <p className="text-sm">
          Termos e Condições • Política de Privacidade <br />
          © 2025 <span className="font-bold">OTIAdriver</span> | Conhecimento
          Inteligente para Motoristas
        </p>
      </footer>
    </main>
  );
}
