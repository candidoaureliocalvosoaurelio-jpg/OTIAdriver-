// app/pneus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { pneus } from "@/data/pneus";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4 mt-8">
        {pneus.map((p) => (
          <div key={p.slug} className="text-center">
            {/* IMAGEM (3:2, responsiva) */}
            <div
              className="relative mx-auto overflow-hidden rounded-2xl bg-white border shadow-sm w-full"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4"
                priority={p.slug === "direcional-liso"}
              />
            </div>

            <h2 className="text-xl font-bold mt-3">{p.title}</h2>

            {/* BOTÃO PRETO GARANTIDO */}
            <Link href={`/pneus/${p.slug}`} className="mt-4 inline-block">
              <span
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold shadow-sm select-none bg-black text-white hover:bg-black/90 active:translate-y-px transition"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                Ver Pneus
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* NOVA SEÇÃO – Manual de Cuidados Operacionais */}
      <div className="max-w-6xl mx-auto px-4 mt-[120px] mb-[100px] text-center">
        <div className="bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white rounded-2xl shadow-md py-10 px-8">
          <h2 className="text-2xl font-extrabold mb-3">
            Manual de Cuidados Operacionais
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Aprenda a manter seus pneus em perfeito estado, aumentar a durabilidade e dirigir com máxima segurança.
          </p>
          <Link href="/pneus/cuidados">
            <span className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-bold shadow-sm bg-black text-white hover:bg-black/90 active:translate-y-px transition">
              Acessar Manual
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
