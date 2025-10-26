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

      {/* Bloco de Propósito */}
      <section className="mt-16 bg-blue-50 border-t border-blue-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Nosso Propósito 🌍
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {/* Missão */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🚀 Missão</h3>
            <p>
              Proporcionar conhecimento inteligente e acessível para motoristas
              em todo o mundo, unindo tecnologia, educação e inovação para
              elevar a segurança, a eficiência e o prestígio da profissão.
            </p>
          </div>

          {/* Visão */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🌎 Visão</h3>
            <p>
              Ser a plataforma de IA número 1 do mundo na capacitação de
              motoristas, reconhecida por transformar o transporte em uma
              experiência inteligente, segura e sustentável.
            </p>
          </div>

          {/* Valores */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">💎 Valores</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Inovação constante e ética.</li>
              <li>Educação prática e acessível.</li>
              <li>Segurança e responsabilidade nas estradas.</li>
              <li>Sustentabilidade e eficiência global.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/proposito"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-500 text-blue-700 px-4 py-2 font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Ver Propósito →
          </Link>
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
