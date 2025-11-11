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

            {/* IMAGEM */}
            <div
              className="relative mx-auto overflow-hidden rounded-2xl bg-white border shadow-sm"
              style={{ aspectRatio: "3 / 2" }}  // <-- fixa o tamanho
            >
              <Image
                src={p.file}
                alt={p.name}
                fill                               // <-- ativa fill
                className="object-contain p-4"     // <-- remove w/h automático
              />
            </div>

            <h2 className="text-xl font-bold mt-3">{p.name}</h2>

            {/* BOTÃO PRETO */}
            <Link href={`/pneus/${p.slug}`} className="group mt-4 inline-block">
              <span
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold shadow-sm select-none
                           bg-black !bg-black text-white !text-white hover:bg-black/90 active:translate-y-px transition"
                style={{ backgroundColor: "#000" }}
              >
                Ver Pneus
              </span>
            </Link>

          </div>
        ))}

      </div>
    </main>
  );
}
