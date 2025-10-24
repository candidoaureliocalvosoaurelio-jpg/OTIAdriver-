// app/caminhoes-eletricos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { electricTrucks, getElectricTruckBySlug } from "../../../data/electricTrucks";

type Props = { params: { slug: string } };

// Gera rotas estáticas para cada modelo elétrico
export function generateStaticParams() {
  return electricTrucks.map((t) => ({ slug: t.slug }));
}

// SEO por modelo
export function generateMetadata({ params }: Props) {
  const t = getElectricTruckBySlug(params.slug);
  if (!t) return {};
  return {
    title: `${t.name} | OTIAdriver`,
    description: `Ficha técnica, imagem e PDFs do ${t.name}.`,
    openGraph: {
      title: `${t.name} | OTIAdriver`,
      description: `Ficha técnica, imagem e PDFs do ${t.name}.`,
      images: t.file ? [{ url: t.file }] : [],
    },
  };
}

export default function ElectricTruckPage({ params }: Props) {
  const truck = getElectricTruckBySlug(params.slug);
  if (!truck) return notFound();

  const s = truck.specs || {};
  const rows: Array<[string, string | number | undefined]> = [
    ["Autonomia (km)", s.autonomia_km],
    ["Bateria (kWh)", s.bateria_kwh],
    ["Potência (kW)", s.potencia_kw],
    ["Torque (Nm)", s.torque_nm],
    ["PBTC (t)", s.pbt_t],
    ["Configuração", s.configuracao],
    ["Recarga", s.recarga],
    ["Aplicação", s.aplicacao],
    ["País", s.pais],
    ["Observações", s.observacoes],
  ].filter(([, v]) => v !== undefined && v !== "");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Voltar */}
      <Link href="/caminhoes-eletricos" className="text-sm text-blue-700 hover:underline">
        ← Voltar para Caminhões Elétricos
      </Link>

      {/* Título */}
      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
        {truck.name}
      </h1>
      {truck.brand && <p className="text-gray-600">{truck.brand}</p>}

      {/* Card principal */}
      <div className="mt-6 rounded-2xl overflow-hidden shadow bg-white">
        {/* Imagem grande */}
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

        {/* Ficha Técnica */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Ficha Técnica ⚡</h2>

          {rows.length === 0 ? (
            <div className="rounded-lg border p-4 text-gray-600">
              Sem especificações cadastradas ainda. Atualize em{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">data/electricTrucks.ts</code>.
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

        {/* Downloads (PDF) */}
        {truck.pdfs && truck.pdfs.length > 0 && (
          <div className="p-6 pt-0">
            <h2 className="text-xl font-bold mb-4">Downloads (PDF) 📄</h2>
            <ul className="space-y-3">
              {truck.pdfs.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50"
                  >
                    <span>🔗</span>
                    <span className="font-medium">{doc.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
           }
