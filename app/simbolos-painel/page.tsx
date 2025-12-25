// app/simbolos-painel/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { symbolData, normalizeSlug } from "./symbolData";

// Lê os arquivos da pasta /public/simbolos
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
    file, // ex: simbolo-20.png
    path: "/simbolos/" + file,
    baseName: file.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "").trim(), // ex: simbolo-20
  }));
}

/**
 * Segurança (CodeQL):
 * - Permite somente [a-z0-9-]
 * - Evita injeção em href via valores "armazenados"
 */
function safeSlug(input: string) {
  const norm = normalizeSlug(input);
  const cleaned = norm.replace(/[^a-z0-9-]/g, "");
  return cleaned.length > 0 ? cleaned : "simbolo";
}

function severityBadge(sev?: "info" | "warning" | "danger") {
  switch (sev) {
    case "danger":
      return { text: "Crítico", cls: "bg-red-50 text-red-700 border-red-200" };
    case "warning":
      return {
        text: "Atenção",
        cls: "bg-amber-50 text-amber-800 border-amber-200",
      };
    default:
      return { text: "Info", cls: "bg-sky-50 text-sky-800 border-sky-200" };
  }
}

function colorBadge(color?: string) {
  const c = (color || "").toLowerCase();
  switch (c) {
    case "vermelho":
      return { text: "Vermelho", cls: "bg-red-50 text-red-700 border-red-200" };
    case "amarelo":
      return {
        text: "Amarelo",
        cls: "bg-amber-50 text-amber-800 border-amber-200",
      };
    case "laranja":
      return {
        text: "Laranja",
        cls: "bg-orange-50 text-orange-800 border-orange-200",
      };
    case "verde":
      return {
        text: "Verde",
        cls: "bg-emerald-50 text-emerald-800 border-emerald-200",
      };
    case "azul":
      return { text: "Azul", cls: "bg-blue-50 text-blue-800 border-blue-200" };
    case "branco":
      return {
        text: "Branco",
        cls: "bg-slate-50 text-slate-800 border-slate-200",
      };
    default:
      return { text: "Indicador", cls: "bg-slate-50 text-slate-800 border-slate-200" };
  }
}

export default function SimbolosPainelPage() {
  const icons = getSymbols();

  // Mapa rápido slug -> meta
  const metaBySlug = new Map(symbolData.map((s) => [normalizeSlug(s.slug), s]));

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ====================== TABELA DE CORES ====================== */}
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
          Classificação por Cor das Luzes de Aviso
        </h1>

        <div className="overflow-hidden rounded-xl border bg-gray-50 shadow-sm mb-12">
          <table className="w-full text-left text-gray-800">
            <thead className="bg-white border-b">
              <tr>
                <th className="py-3 px-4 font-semibold">Cor</th>
                <th className="py-3 px-4 font-semibold">Significado</th>
                <th className="py-3 px-4 font-semibold">Ação Recomendada</th>
              </tr>
            </thead>
            <tbody>
              {/* Vermelho */}
              <tr className="border-b">
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  Vermelho <span className="text-lg">🔴</span>
                </td>
                <td className="py-4 px-4">
                  Emergência/Falha Grave. Risco imediato à segurança ou danos ao veículo.
                </td>
                <td className="py-4 px-4">
                  Parada imediata em local seguro e desligamento do motor. Necessidade de reparo urgente.
                </td>
              </tr>

              {/* Amarelo / Laranja */}
              <tr className="border-b">
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  Amarelo/Laranja <span className="text-lg">🟡</span>
                </td>
                <td className="py-4 px-4">
                  Advertência/Falha Moderada. Indica um problema que requer atenção, mas que não impede a continuação da viagem.
                </td>
                <td className="py-4 px-4">
                  Verificar a situação. Pode-se continuar a dirigir com cautela até um local seguro ou oficina.
                </td>
              </tr>

              {/* Verde / Azul / Branco */}
              <tr>
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  Verde/Azul/Branco <span className="text-lg">🟢 🔵 ⚪</span>
                </td>
                <td className="py-4 px-4">
                  Informativo/Funcionalidade Ativa. Indica que um sistema está ligado ou ativo.
                </td>
                <td className="py-4 px-4">
                  Não requer ação de emergência, apenas confirmação do acionamento.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ====================== LISTA DE SÍMBOLOS ====================== */}
        <header className="mb-10" id="topo-simbolos">
          <h2 className="text-xl font-semibold text-gray-900">Símbolos do Painel</h2>
          <p className="mt-2 text-sm text-gray-600">
            Indicadores de segurança, sistemas e alertas do veículo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {icons.map((icon) => {
            const base = normalizeSlug(icon.baseName);
            const meta = metaBySlug.get(base);

            const label = meta?.title ?? icon.baseName;
            const id = meta ? String(meta.id) : icon.baseName;

            // ✅ Segurança: não deixar qualquer string virar rota
            const safe = safeSlug(id);

            const sev = severityBadge(meta?.severity);
            const col = colorBadge(meta?.color);

            return (
              <Link
                key={icon.file}
                href={`/simbolos-painel/${safe}`}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition"
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

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900 truncate">
                      {label}
                    </h3>

                    {/* Badges (próximo nível) */}
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${sev.cls}`}
                    >
                      {sev.text}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${col.cls}`}
                    >
                      {col.text}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500">
                    Toque para ver o significado técnico e ação recomendada.
                  </p>

                  {meta?.action ? (
                    <p className="mt-2 text-xs text-gray-700 leading-relaxed line-clamp-2">
                      <span className="font-semibold">Ação:</span> {meta.action}
                    </p>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>

        {/* BLOCO FINAL – Material completo (PDF) | padrão OTIAdriver */}
        <section className="mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Material completo – Luzes de aviso e símbolos (PDF)
              </h2>

              <p className="text-sm md:text-base text-slate-700 mb-6">
                Consulte o material completo com a explicação detalhada das luzes de aviso,
                símbolos de painel e recomendações de ação para cada situação. Ideal para
                treinamentos, consultas rápidas e apoio ao motorista.
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
