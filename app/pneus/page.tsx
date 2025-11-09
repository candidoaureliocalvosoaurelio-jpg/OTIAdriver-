import Image from "next/image";
import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">

      {/* GRID DOS PNEUS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4 mt-10">
        {tireCategories.map((t) => (
          <div key={t.slug} className="text-center">

            {/* IMAGEM GRANDE PADRÃO */}
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl bg-white border shadow-sm max-w-[420px]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mt-3">{t.title}</h2>
            <p className="text-sm text-slate-600">{t.subtitle}</p>

            {/* BOTÃO PRETO */}
            <Link
              href={`/pneus/${t.slug}`}
              className="mt-4 inline-flex items-center justify-center px-6 py-3
                         rounded-lg font-bold bg-black text-white
                         hover:bg-slate-900 active:bg-black/80
                         shadow-sm"
            >
              Ver Pneus
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

