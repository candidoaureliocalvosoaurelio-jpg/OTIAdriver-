// app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trucks } from "../../../data/trucks";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return trucks.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props) {
  const t = getTruckBySlug(params.slug);
  if (!t) return {};
  return {
    title: `${t.name} | OTIAdriver`,
    description: `Imagem e ficha técnica do ${t.name}.`,
    openGraph: {
      title: `${t.name} | OTIAdriver`,
      description: `Imagem e ficha técnica do ${t.name}.`,
      images: t.file ? [{ url: t.file }] : [],
    },
  };
}

export default function TruckPage({ params }: Props) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return notFound();

  const s = truck.specs || {};
  const rows = [
    ["Motor", s.motor],
    ["Potência", s.potencia],
    ["Torque", s.torque],
    ["Transmissão", s.transmissao],
    ["PBTC (t)", s.pbt_t],
    ["Configuração", s.configuracao],
    ["Consumo", s.consumo],
    ["Observações", s.observacoes],
  ].filter(([, v]) => v !== undefined && v !== "");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/caminhoes" className="text-sm text-blue-700 hover:underline">
        ← Voltar para Caminhões
      </Link>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
        {truck.name}
      </h1>

      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        {/* Foto grande */}
        <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>

        {/* Ficha técnica */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Ficha Técnica</h2>

          {rows.length === 0 ? (
            <div className="rounded-lg border p-4 text-gray-600">
              Sem especificações cadastradas ainda. Atualize em{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">data/trucks.ts</code>.
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {rows.map(([k, v]) => (
                    <tr key={k}>
                      <th className="w-56 bg-gray-50 px-4 py-3 text-left font-medium text-gray-700">
                        {k}
                      </th>
                      <td className="px-4 py-3">{String(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
