// app/pneus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">

      {/* GRID DOS PNEUS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4 mt-8">
        {tireCategories.map((t) => (
          <div key={t.slug} className="text-center">

            {/* IMAGEM – usando width/height (evita problemas do fill + altura) */}
            <div className="relative mx-auto overflow-hidden rounded-2xl bg-white border shadow-sm">
              <Image
                src={t.image}
                alt={t.title}
                width={900}           // 3:2 → 900x600 dá caixa grande e nítida
                height={600}
                className="object-contain p-4 w-full h-auto"
                priority={t.slug === "direcional"} // só pra carregar rápido a 1ª
              />
            </div>

            {/* TÍTULO + SUBTÍTULO */}
            <h2 className="text-xl font-bold mt-3">{t.title}</h2>
            <p className="text-sm text-slate-600">{t.subtitle}</p>

            {/* BOTÃO PRETO (texto sempre visível) */}
            <Link
              href={`/pneus/${t.slug}`}
              className="mt-4 inline-flex items-center justify-center px-6 py-3
                         rounded-lg font-bold bg-black text-white
                         hover:bg-slate-900 active:bg-black/80 shadow-sm"
            >
              Ver Pneus
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
