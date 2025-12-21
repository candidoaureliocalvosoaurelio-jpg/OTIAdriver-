// app/simbolos-painel/[id]/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { symbolData } from "../symbolData";

type SymbolPageProps = {
  params: { id: string };
};

// Lê os arquivos para descobrir o caminho da imagem
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

// Mesmo padrão usado na lista (evita inconsistência e rota insegura)
function toSafeSlug(input: string) {
  const raw = String(input ?? "");

  // 1) remove acentos
  const noAccents = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 2) padroniza para minúsculo e troca espaços por hífen
  const dashed = noAccents.toLowerCase().trim().replace(/\s+/g, "-");

  // 3) permite apenas a-z, 0-9, hífen e underscore
  const safe = dashed.replace(/[^a-z0-9_-]/g, "");

  return safe || "desconhecido";
}

// Gera páginas estáticas para todos os slugs (compatível com a lista)
export function generateStaticParams() {
  return symbolData.map((s) => ({ id: toSafeSlug(s.slug) }));
}

export default function SymbolPage({ params }: SymbolPageProps) {
  // sanitiza o parâmetro da rota por segurança/consistência
  const safeId = toSafeSlug(params.id);

  // agora buscamos por slug (não por número)
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

  // encontra a imagem pelo slug original (nome de arquivo geralmente bate com slug)
  const icon = icons.find((i) => toSafeSlug(i.baseName) === toSafeSlug(symbol.slug));

  // fallback: tenta png pelo slug original
  const imageSrc = icon ? icon.path : `/simbolos/${symbol.slug}.png`;

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/simbolos-painel"
          className="text-sm text-sky-700 hover:underline font-semibold"
        >
          ← Voltar para Símbolos do Painel
        </Link>

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
                : "Aqui você pode adicionar a descrição técnica completa deste símbolo: quando acende, causas mais comuns, riscos envolvidos e ação recomendada para o motorista."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
