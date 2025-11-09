import Image from "next/image";
import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">
      {/* GRID DE PNEUS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4 mt-10">
        {tireCategories.map((t) => (
          <div
            key={t.slug}
            className="text-center flex flex-col items-center"
          >
            {/* CAIXA PADRÃO PARA IMAGEM */}
            <div className="relative w-full max-w-[400px] bg-white rounded-2xl shadow border">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* TÍTULO E SUBTÍTULO */}
            <h2 className="text-xl font-bold mt-4">{t.title}</h2>
            <p className="text-sm text-slate-600">{t.subtitle}</p>

            {/* BOTÃO PRETO VISÍVEL */}
            <Link
              href={`/pneus/${t.slug}`}
              className="mt-4 inline-block px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-slate-900 transition"
            >
              Ver Pneus
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
