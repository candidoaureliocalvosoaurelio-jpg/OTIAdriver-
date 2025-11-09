import Image from "next/image";
import Link from "next/link";
import { getTireBySlug } from "../../../data/tires";

type Props = {
  params: { slug: "direcional" | "tracao" | "implemento" };
};

export default function TirePage({ params }: Props) {
  const tire = getTireBySlug(params.slug);

  if (!tire) return <div>Categoria não encontrada</div>;

  return (
    <main className="min-h-screen w-full px-4 py-10 max-w-4xl mx-auto">
      <Link href="/pneus" className="text-sm text-blue-700 hover:underline">
        ← voltar
      </Link>

      <div className="flex flex-col items-center mt-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F2454] text-center">
          {tire.title}
        </h1>

        <p className="text-gray-600 text-center mt-2">{tire.subtitle}</p>

        <div className="relative w-full mt-8" style={{ aspectRatio: "3 / 2" }}>
          <Image src={tire.image} alt={tire.title} fill className="object-contain" />
        </div>

        <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
          {tire.blurb}
        </p>
      </div>
    </main>
  );
}

