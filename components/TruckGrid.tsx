import Image from "next/image";
import Link from "next/link";
import { trucks } from "../data/trucks";

export default function TruckGrid() {
  return (
    <section className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((t) => (
          <Link key={t.slug} href={`/caminhoes/${t.slug}`} className="group">
            <div className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.01]">
              <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
                <Image src={t.file} alt={t.name} fill className="object-contain p-3" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4 text-center font-medium text-gray-800">{t.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
