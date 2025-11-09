// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { TruckGrid } from "@/components/TruckGrid";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-2 py-10">

      {/* ========================== */}
      {/* SEÇÃO DE CAMINHÕES */}
      {/* ========================== */}
      <TruckGrid />

      {/* ========================== */}
      {/* SEÇÃO DO PROPÓSITO */}
      {/* ========================== */}
      <section className="mt-6 w-full bg-blue-50 border-t border-blue-100 pt-6 pb-2">
        <div className="px-4">

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Nosso Propósito 🎯
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700">

            {/* MISSÃO */}
            <div className="rounded-xl bg-white border p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">🚀 Missão</h3>
              <p>
                Proporcionar conhecimento inteligente e acessível para motoristas em todo o mundo,
                unindo tecnologia, educação e inovação para elevar a segurança, a eficiência
                e o prestígio da profissão.
              </p>
            </div>

            {/* VISÃO */}
            <div className="rounded-xl bg-white border p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">🌍 Visão</h3>
              <p>
                Ser a plataforma de IA número 1 do mundo na capacitação de motoristas,
                reconhecida por transformar o transporte em uma experiência inteligente,
                segura e sustentável.
              </p>
            </div>

            {/* VALORES */}
            <div className="rounded-xl bg-white border p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">💎 Valores</h3>
              <p>
                Evolução constante, segurança nas estradas, educação acessível
                e compromisso com ética e progresso global.
              </p>
            </div>

          </div>

          <div className="text-center mt-6 mb-2">
            <Link
              href="/proposito"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-300 text-blue-800 hover:bg-blue-100"
            >
              Ver Propósito →
            </Link>
          </div>

        </div>
      </section>
      <style>{`#site-hero { display:none !important; }`}</style>
    </main>
  );
}
