// app/simbolos-painel/[id]/page.tsx
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { symbolData, normalizeSlug } from "../symbolData";

type SymbolPageProps = {
  params: { id: string };
};

// Lê os arquivos para descobrir o caminho da imagem (pasta /public/simbolos)
function getSymbols() {
  const dir = path.join(process.cwd(), "public", "simbolos");

  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }

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

/**
 * Segurança:
 * - Limita para [a-z0-9-]
 * - Evita valores inesperados no href
 */
function safeSlug(input: string) {
  const norm = normalizeSlug(input);
  const cleaned = norm.replace(/[^a-z0-9-]/g, "");
  return cleaned.length > 0 ? cleaned : "simbolo";
}

function severityBadge(sev?: "info" | "warning" | "danger") {
  switch (sev) {
    case "danger":
      return { label: "Crítico", tone: "danger" as const };
    case "warning":
      return { label: "Atenção", tone: "warning" as const };
    default:
      return { label: "Informativo", tone: "info" as const };
  }
}

function colorBadge(color?: string) {
  const c = (color || "").toLowerCase();
  switch (c) {
    case "vermelho":
      return { label: "Vermelho", tone: "danger" as const };
    case "amarelo":
      return { label: "Amarelo", tone: "warning" as const };
    case "laranja":
      return { label: "Laranja", tone: "warning" as const };
    case "verde":
      return { label: "Verde", tone: "info" as const };
    case "azul":
      return { label: "Azul", tone: "info" as const };
    case "branco":
      return { label: "Branco", tone: "info" as const };
    default:
      return { label: "Indicador", tone: "info" as const };
  }
}

// ✅ Pré-renderiza as rotas por slug + compat (id numérico)
export function generateStaticParams() {
  const slugs = symbolData.map((s) => ({ id: safeSlug(s.slug) }));
  const ids = symbolData.map((s) => ({ id: String(s.id) }));
  return [...slugs, ...ids];
}

// ✅ SEO por símbolo
export async function generateMetadata(
  { params }: SymbolPageProps
): Promise<Metadata> {
  const raw = String(params.id ?? "").trim();

  // Se vier número, converte para slug correto (SEO)
  let lookup = raw;
  if (/^\d+$/.test(raw)) {
    const numericId = Number(raw);
    const byId = symbolData.find((s) => s.id === numericId);
    if (byId?.slug) lookup = byId.slug;
  }

  const safe = safeSlug(lookup);
  const symbol = symbolData.find((s) => safeSlug(s.slug) === safe);

  const title = symbol
    ? `${symbol.title} — Símbolos do Painel | OTIAdriver`
    : "Símbolo do Painel — OTIAdriver";

  const description = symbol?.description?.trim()
    ? symbol.description.trim().slice(0, 160)
    : "Significado do símbolo do painel, causas comuns, riscos e ação recomendada para o motorista.";

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

function Badge({
  label,
  tone,
}: {
  label: string;
  tone: "danger" | "warning" | "info";
}) {
  const styles =
    tone === "danger"
      ? "bg-red-50 text-red-800 border-red-200"
      : tone === "warning"
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : "bg-sky-50 text-sky-800 border-sky-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-bold text-slate-900 mb-2">{title}</h2>
      <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function SymbolPage({ params }: SymbolPageProps) {
  const rawParam = String(params.id ?? "").trim();

  // ✅ Compat: URL antiga numérica -> URL nova slug
  if (/^\d+$/.test(rawParam)) {
    const numericId = Number(rawParam);
    const byId = symbolData.find((s) => s.id === numericId);
    if (byId?.slug) {
      redirect(`/simbolos-painel/${safeSlug(byId.slug)}`);
    }
  }

  // 🔎 Busca por slug (padrão)
  const safeParam = safeSlug(rawParam);
  const symbolIndex = symbolData.findIndex((s) => safeSlug(s.slug) === safeParam);
  const symbol = symbolIndex >= 0 ? symbolData[symbolIndex] : undefined;

  if (!symbol) {
    return (
      <main className="w-full bg-white">
        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-4">Símbolo não encontrado</h1>
          <Link href="/simbolos-painel" className="text-sky-700 hover:underline font-semibold">
            ← Voltar para a lista de símbolos
          </Link>
        </section>
      </main>
    );
  }

  // Imagem
  const icons = getSymbols();
  const icon = icons.find((i) => safeSlug(i.baseName) === safeSlug(symbol.slug));
  const imageSrc = icon ? icon.path : `/simbolos/${symbol.slug}.png`;

  // Badges
  const sev = severityBadge(symbol.severity);
  const col = colorBadge(symbol.color);
  const categoria = symbol.category ?? "Sistema";

  // Conteúdo estruturado com fallback seguro
  const quandoAcende =
    symbol.when ??
    "Quando esta luz aparece, o veículo está informando uma condição do sistema. Observe o painel e o comportamento do caminhão.";

  const acao =
    symbol.action ??
    "Reduza o esforço do veículo, monitore as mensagens do painel e, se a luz persistir, procure diagnóstico em oficina.";

  const causas =
    symbol.causes ?? [
      "Condição operacional do veículo (temperatura, carga, aderência)",
      "Sensor/atuador com leitura fora do padrão",
      "Conexões elétricas/chicote com mau contato",
    ];

  const riscos =
    symbol.risks ?? [
      "Funcionamento limitado do sistema associado",
      "Aumento de desgaste de componentes se ignorado",
      "Possível agravamento do problema ao longo do tempo",
    ];

  // Navegação anterior / próximo
  const prev = symbolIndex > 0 ? symbolData[symbolIndex - 1] : undefined;
  const next = symbolIndex < symbolData.length - 1 ? symbolData[symbolIndex + 1] : undefined;

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/simbolos-painel" className="text-sm text-sky-700 hover:underline font-semibold">
              ← Voltar para Símbolos do Painel
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <Badge label={categoria} tone="info" />
              <Badge label={sev.label} tone={sev.tone} />
              <Badge label={col.label} tone={col.tone} />
            </div>
          </div>

          {/* Breadcrumb */}
          <p className="text-xs text-slate-500">
            <Link href="/" className="hover:underline">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/simbolos-painel" className="hover:underline">Símbolos do Painel</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{symbol.slug}</span>
          </p>
        </div>

        {/* Header */}
        <div className="mt-6 flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-200 w-28 h-28">
            <Image src={imageSrc} alt={symbol.title} width={96} height={96} className="object-contain" />
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              {symbol.title}
            </h1>

            <p className="text-sm text-slate-600">
              ID: <span className="font-semibold">{symbol.id}</span> • Slug:{" "}
              <span className="font-mono">{symbol.slug}</span>
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">
              {symbol.description?.trim() ? symbol.description.trim() : "Descrição técnica não informada."}
            </p>
          </div>
        </div>

        {/* Cards técnicos */}
        <div className="mt-8 grid gap-4">
          <Card title="Quando acende">
            <p>{quandoAcende}</p>
          </Card>

          <Card title="Ação recomendada">
            <p>{acao}</p>
          </Card>

          <Card title="Causas comuns">
            <ul className="list-disc pl-5 space-y-1">
              {causas.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </Card>

          <Card title="Riscos ao ignorar">
            <ul className="list-disc pl-5 space-y-1">
              {riscos.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Navegação */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {prev ? (
            <Link
              href={`/simbolos-painel/${safeSlug(prev.slug)}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:shadow-sm transition"
            >
              ← Anterior: <span className="text-slate-700">{prev.slug}</span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/simbolos-painel/${safeSlug(next.slug)}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:shadow-sm transition text-right"
            >
              Próximo: <span className="text-slate-700">{next.slug}</span> →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </main>
  );
}
