import Image from "next/image";
import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4">
        {tireCategories.map((t) => (
          <div key={t.slug} className="text-center">

            {/* BOX PADRÃO DE TAMANHO */}
            <div className="relative w-full h-[340px] bg-white">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-contain p-4"
                sizes="(max-width:768px) 100vw, 300px"
              />
            </div>

            <h2 className="text-xl font-bold mt-3">{t.title}</h2>
            <p className="text-sm text-slate-600">{t.subtitle}</p>

            <Link href={`/pneus/${t.slug}`}>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
                Ver Pneus
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
