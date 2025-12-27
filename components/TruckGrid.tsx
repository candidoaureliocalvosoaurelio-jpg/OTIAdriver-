// components/TruckGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { trucks } from "@/data/trucks";

type Props = {
  lang?: string;
};

export function TruckGrid({ lang = "pt" }: Props) {
  return (
    <section className="pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trucks.map((t) => (
          <Link
            key={t.slug}
            href={`/app/caminhoes/${t.slug}?lang=${lang}`}
            className="group block rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src={t.file}
                alt={t.name}
                fill
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>

            <div className="p-3 text-center font-bold text-zinc-900 group-hover:text-blue-600">
              {t.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
