// app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTruckBySlug } from "../../../data/trucks";
import type { ReactNode } from "react";

type SpecPair = { label: string; value: ReactNode };
type SpecsRecord = Record<string, SpecPair | string | number | null | undefined>;
type SpecsAny = SpecsRecord | SpecPair[];

type Props = { params: { slug: string } };

// Helpers para detectar formato dos specs
function isSpecPairArray(v: any): v is SpecPair[] {
  return Array.isArray(v) && v.every(i => i && typeof i === "object" && "label" in i && "value" in i);
}

function isSpecsRecord(v: any): v is SpecsRecord {
  return !!v && typeof v === "object" && !Array.isArray(v);
}

export default function TruckPage({ params }: Props) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return notFound();

  // Normaliza specs em uma lista segura para render
  const normalizedSpecs: SpecPair[] = (() => {
    const specs: SpecsAny = (truck as any).specs;
    if (!specs) return [];
    if (isSpecPairArray(specs)) return specs;

    if (isSpecsRecord(specs)) {
      return Object.entries(specs).map(([key, val]) => {
        // Caso já venha como {label, value}
        if (val && typeof val === "object" && "label" in (val as any) && "value" in (val as any)) {
          const p = val as SpecPair;
          return { label: p.label, value: p.value };
        }
        // Caso seja string/number/etc: usa a chave como label
        return { label: key, value: val as ReactNode };
      });
    }

    return [];
  })();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-blue-700 hover:underline">
        ← Voltar
      </Link>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
        {truck.name}
      </h1>

      {/* CARD PRINCIPAL */}
      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        {/* IMAGEM */}
        <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            priority
          />
        </div>

        {/* CONTEÚDO */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Especificações */}
          {normalizedSpecs.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Ficha técnica</h2>
              <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
                {normalizedSpecs.map((item, idx) => (
                  <li key={`${item.label}-${idx}`} className="flex items-start justify-between gap-4 px-4 py-3">
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <span className="text-gray-700 text-right">{item.value ?? "—"}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Extras (ex.: features, descrição) */}
          <section>
            {Array.isArray((truck as any).features) && (truck as any).features.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold mb-3">Destaques</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {(truck as any).features.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="text-gray-600">
                <p>Explore os detalhes técnicos e recursos deste modelo OTIAdriver.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
      }
