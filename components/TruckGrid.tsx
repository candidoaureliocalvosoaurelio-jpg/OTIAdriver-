import Image from "next/image";
import Link from "next/link";
import { trucks } from "../data/trucks";

export function TruckGrid() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trucks.map((t) => (
          <Link
            key={t.slug}
            href={`/caminhoes/${t.slug}`}
            className="group block rounded-2xl overflow-hidden shadow bg-white transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Contêiner com proporção fixa e posição relativa */}
            <div className="relative w-full bg-gray-50" style={{ paddingTop: "66.66%" }}>
              <Image
                src={t.file}
                alt={t.name}
                fill
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Nome do caminhão */}
            <div className="p-4 text-center font-semibold text-gray-800 group-hover:text-blue-700">
              {t.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
