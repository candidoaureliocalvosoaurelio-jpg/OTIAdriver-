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
    case "laranja":
      return {
        label: c === "laranja" ? "Laranja" : "Amarelo",
        tone: "warning" as const,
      };
    case "verde":
    case "azul":
    case "branco":
      return { label: c.charAt(0).toUpperCase() + c.slice(1), tone: "info" as const };
    default:
      return { label: "Indicador", tone: "info" as const };
  }
}

export function generateStaticParams() {
  const slugs = symbolData.map((s) => ({ id: safeSlug(s.slug) }));
  const ids = symbolData.map((s) => ({ id: String(s.id) }));
  return [...slugs, ...ids];
}

export async function generateMetadata(
  { params }: SymbolPageProps
): Promise<Metadata> {
  const raw = String(params.id ?? "").trim();

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
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {label}
    </span>
  );
}

export default function SymbolPage({ params }: SymbolPageProps) {
  const rawParam = String(params.id ?? "").trim();

  if (/^\d+$/.test(rawParam)) {
    const numericId = Number(rawParam);
    const byId = symbolData.find((s) => s.id === numericId);
    if (byId?.slug) redirect(`/simbolos-painel/${safeSlug(byId.slug)}`);
  }

  const safeParam = safeSlug(rawParam);
  const symbol = symbolData.find((s) => safeSlug(s.slug) === safeParam);

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
  const icon = icons.find((i) => safeSlug(i.baseName) === safeSlug(symbol.slug));
  const imageSrc = icon ? icon.path : `/simbolos/${symbol.slug}.png`;

  const sev = severityBadge(symbol.severity);
  const col = colorBadge(symbol.color);

  const acao =
    symbol.action ??
    "Recomenda-se reduzir a carga de esforço, observar o comportamento do veículo e, se a luz persistir, buscar diagnóstico em oficina.";

  const categoria = symbol.category ?? "Sistema";

  const causas = symbol.causes ?? [];
  const riscos = symbol.risks ?? [];

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

          <div className="flex flex-wrap items-center gap-2">
            <Badge label={categoria} tone="info" />
            <Badge label={sev.label} tone={sev.tone} />
            <Badge label={col.label} tone={col.tone} />
          </div>
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

          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {symbol.title}
            </h1>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {symbol.description?.trim() || "Descrição não disponível."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Ação recomendada
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{acao}</p>
          </div>

          {causas.length > 0 ? (
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
          ) : null}

          {riscos.length > 0 ? (
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
          ) : null}
        </div>
      </section>
    </main>
  );
}
