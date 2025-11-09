import Link from "next/link";
import { tireCategories } from "@/data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4">
        {tireCategories.map((t) => (
          <div key={t.slug} className="text-center">
            <img src={t.image} className="mx-auto w-full mb-4" />
            <h2 className="text-xl font-bold">{t.title}</h2>
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

