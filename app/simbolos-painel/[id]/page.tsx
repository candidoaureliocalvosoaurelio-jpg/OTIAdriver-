// app/simbolos-painel/[id]/page.tsx
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { symbolData } from "../symbolData";

type SymbolPageProps = {
  params: { id: string };
};

function getSymbols() {
  const dir = path.join(process.cwd(), "public", "simbolos");
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const imageFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => {
      const lower = file.toLowerCase();
      return (
        lower.endsWith(".png") ||
        lower.endsWith(".jpg") ||
        lower.endsWith(".jpeg") ||
        lower.endsWith(".webp") ||
        lower.endsWith(".svg")
      );
    });

  return imageFiles.map((file) => ({
    file,
    path: "/simbolos/" + file,
    baseName: file.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "").trim(),
  }));
}

function toSafeSlug(input: string) {
  const raw = String(input ?? "");
  const noAccents = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const dashed = noAccents.toLowerCase().trim().replace(/\s+/g, "-");
  const safe = dashed.replace(/[^a-z0-9_-]/g, "");
  return safe || "desconhecido";
}

// ✅ Pré-renderiza as rotas por slug
export function generateStaticParams() {
  return symbolData.map((s) => ({ id: toSafeSlug(s.slug) }));
}

// ✅ SEO por símbolo (Next.js Metadata)
export async function generateMetadata(
  { params }: SymbolPageProps
): Promise<Metadata> {
  const rawId = String(params.id ?? "");

  // Se veio número, tenta resolver para slug (para SEO correto)
  let slug = rawId;
  if (/^\d+$/.test(rawId)) {
    const numericId = Number(rawId);
    const byId = symbolData.find((s) => s.id === numericId);
    if (byId?.slug) slug = byId.slug;
  }

  const safeId = toSafeSlug(slug);
  const symbol = symbolData.find((s) => toSafeSlug(s.slug) === safeId);

  const title = symbol
    ? `${symbol.title} — Símbolos do Painel | OTIAdriver`
    : `Símbolo do Painel — OTIAdriver`;

  const description = symbol?.description?.trim()
    ? symbol.description.trim().slice(0, 160)
    : "Significado do símbolo do painel, causas comuns, riscos e ação recomendada para o motorista.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

function Badge({
  label,
  tone,
}: {
  label: string;
  tone: "danger" | "warning" | "info" | "success";
}) {
  const styles =
    tone === "danger"
      ? "bg-red-50 text-red-800 border-red-200"
      : tone === "warning"
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : tone === "success"
      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
      : "bg-sky-50 text-sky-800 border-sky-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}

export default function SymbolPage({ params }: SymbolPageProps) {
  const rawId = String(params.id ?? "");

  // ✅ Compatibilidade: URL antiga numérica -> URL nova slug
  if (/^\d+$/.test(rawId)) {
    const numericId = Number(rawId);
    const symbolById = symbolData.find((s) => s.id === numericId);
    if (symbolById?.slug) {
      redirect(`/simbolos-painel/${toSafeSlug(symbolById.slug)}`);
    }
  }

  const safeId = toSafeSlug(rawId);
  const symbol = symbolData.find((s) => toSafeSlug(s.slug) === safeId);

  if (!symbol) {
    return (
      <main className="w-full bg-white">
        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-4">Símbolo não encontrado</h1>
          <Link
            href="/simbolos-painel"
            className="text-sky-700 hover:underline font-semibold"
          >
            ← Voltar para a lista de símbolos
          </Link>
        </section>
      </main>
    );
  }

  const icons = getSymbols();
  const icon = icons.find((i) => toSafeSlug(i.baseName) === toSafeSlug(symbol.slug));
  const imageSrc = icon ? icon.path : `/simbolos/${symbol.slug}.png`;

  // ✅ Campos opcionais (se não existirem ainda no symbolData, usamos fallback)
  const severity =
    (symbol as any).severity as ("danger" | "warning" | "info" | "success") | undefined;

  const acao =
    (symbol as any).action ??
    "Recomenda-se reduzir a carga de esforço, observar o comportamento do veículo e, se a luz persistir, buscar diagnóstico em oficina.";

  const causas: string[] =
    (symbol as any).causes ??
    [
      "Sensor/atuador com leitura fora do padrão",
      "Conexão elétrica/oxidação em chicote",
      "Falha intermitente do sistema associado",
    ];

  const riscos: string[] =
    (symbol as any).risks ??
    [
      "Funcionamento limitado do sistema",
      "Aumento de desgaste de componentes",
      "Possível agravamento se ignorado por longos períodos",
    ];

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/simbolos-painel"
            className="text-sm text-sky-700 hover:underline font-semibold"
          >
            ← Voltar para Símbolos do Painel
          </Link>

          {severity ? (
            <Badge
              label={
                severity === "danger"
                  ? "Crítico"
                  : severity === "warning"
                  ? "Atenção"
                  : severity === "success"
                  ? "Sistema OK"
                  : "Informativo"
              }
              tone={severity}
            />
          ) : null}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 w-28 h-28">
            <Image
              src={imageSrc}
              alt={symbol.title}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {symbol.title}
            </h1>

            <p className="text-gray-700 leading-relaxed">
              {symbol.description && symbol.description.trim().length > 0
                ? symbol.description
                : "Adicione aqui a descrição técnica completa: quando acende, causas mais comuns, riscos envolvidos e ação recomendada ao motorista."}
            </p>
          </div>
        </div>

        {/* ✅ Cards técnicos (próximo nível) */}
        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Ação recomendada
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{acao}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-3">
              Causas comuns
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              {causas.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-3">
              Riscos ao ignorar
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              {riscos.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
