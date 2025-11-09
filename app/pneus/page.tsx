import Link from "next/link";
import Image from "next/image";
import { tireCategories } from "../../data/tires";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F2454] text-center mb-10">
        Pneus por Aplicação
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {tireCategories.map((tire) => (
          <div key={tire.slug} className="text-center">
            <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src={tire.image}
                alt={tire.title}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-bold text-xl mt-4">{tire.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{tire.subtitle}</p>

            <Link
              href={`/pneus/${tire.slug}`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Ver Pneus
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
