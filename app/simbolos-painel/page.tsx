// app/simbolos-painel/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { symbolData } from "./symbolData";

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

function normalizeText(input: string) {
  const raw = String(input ?? "");
  return raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function SimbolosPainelPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const icons = getSymbols();
  const q = normalizeText(searchParams?.q ?? "");

  const filtered = q
    ? icons.filter((icon) => {
        const meta = symbolData.find((s) => s.slug === icon.baseName);
        const label = meta?.title ?? icon.baseName;
        return normalizeText(label).includes(q) || normalizeText(icon.baseName).includes(q);
      })
    : icons;

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
          Classificação por Cor das Luzes de Aviso
        </h1>

        {/* Busca */}
        <form className="mb-8" method="GET" action="/simbolos-painel">
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Buscar símbolo
          </label>
          <div className="flex gap-2">
            <input
              name="q"
              defaultValue={searchParams?.q ?? ""}
              placeholder="Ex.: ABS, ESC, Controle de tração..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              Buscar
            </button>
          </div>
          {q ? (
            <p className="mt-2 text-xs text-slate-600">
              Mostrando resultados para: <span className="font-semibold">{searchParams?.q}</span>{" "}
              — <Link className="text-sky-700 hover:underline" href="/simbolos-painel">limpar</Link>
            </p>
          ) : null}
        </form>

        {/* Lista */}
        <header className="mb-6" id="topo-simbolos">
          <h2 className="text-xl font-semibold text-gray-900">Símbolos do Painel</h2>
          <p className="mt-2 text-sm text-gray-600">
            Indicadores de segurança, sistemas e alertas do veículo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filtered.map((icon) => {
            const meta = symbolData.find((s) => s.slug === icon.baseName);
            const label = meta?.title ?? icon.baseName;

            // ✅ sempre link por slug (padrão novo e seguro)
            const slug = meta?.slug ?? icon.baseName;

            return (
              <Link
                key={icon.file}
                href={`/simbolos-painel/${slug}`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition"
              >
                <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-md border border-gray-200 w-20 h-20">
                  <Image
                    src={icon.path}
                    alt={label}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900">{label}</h3>
                  <p className="text-xs text-gray-500">
                    Toque para ver o significado técnico.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {q && filtered.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            Nenhum símbolo encontrado para <span className="font-semibold">{searchParams?.q}</span>.
          </div>
        ) : null}

        {/* PDF final (seu bloco) */}
        <section className="mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Material completo – Luzes de aviso e símbolos (PDF)
              </h2>

              <p className="text-sm md:text-base text-slate-700 mb-6">
                Consulte o material completo com a explicação detalhada das luzes de aviso,
                símbolos de painel e recomendações de ação para cada situação.
              </p>

              <a
                href="/fichas-tecnicas/luzes-aviso-simbolos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir PDF luzes de aviso e símbolos
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
