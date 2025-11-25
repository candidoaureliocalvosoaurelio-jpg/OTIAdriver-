// app/simbolos-painel/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { symbolData } from "./symbolData";

// Lê os arquivos da pasta /public/simbolos,
// ignorando o que não for arquivo de imagem.
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
    baseName: file
      .replace(/\.(png|jpg|jpeg|webp|svg)$/i, "")
      .trim(),
  }));
}

export default function SimbolosPainelPage() {
  const icons = getSymbols();

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
                  Emergência/Falha Grave. Risco imediato à segurança ou danos ao
                  veículo.
                </td>
                <td className="py-4 px-4">
                  Parada Imediata em local seguro e desligamento do motor.
                  Necessidade de reparo urgente.
                </td>
              </tr>

              {/* Amarelo / Laranja */}
              <tr className="border-b">
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  Amarelo/Laranja <span className="text-lg">🟡</span>
                </td>
                <td className="py-4 px-4">
                  Advertência/Falha Moderada. Indica um problema que requer
                  atenção, mas que não impede a continuação da viagem, embora a
                  falha deva ser corrigida na primeira oportunidade.
                </td>
                <td className="py-4 px-4">
                  Verificar a situação. Pode-se continuar a dirigir com cautela
                  até um local seguro ou oficina.
                </td>
              </tr>

              {/* Verde / Azul / Branco */}
              <tr>
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  Verde/Azul/Branco{" "}
                  <span className="text-lg">🟢 🔵 ⚪</span>
                </td>
                <td className="py-4 px-4">
                  Informativo/Funcionalidade Ativa. Indica que um sistema está
                  ligado (faróis, setas, etc.) ou ativo.
                </td>
                <td className="py-4 px-4">
                  Não requer ação de emergência, apenas confirmação do
                  acionamento ou estado do sistema.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ====================== SÍMBOLOS DO PAINEL ====================== */}
        <header className="mb-10" id="topo-simbolos">
          <h2 className="text-xl font-semibold text-gray-900">
            Símbolos do Painel
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Indicadores de segurança, sistemas e alertas do veículo.
          </p>
        </header>

        {/* GRID RESPONSIVO (1 coluna no mobile, 2 no desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {icons.map((icon) => {
            const meta = symbolData.find((s) => s.file === icon.file);
            const label = meta?.title ?? icon.baseName;
            const id = meta?.id ?? icon.baseName;

            return (
              <Link
                key={icon.file}
                href={`/simbolos-painel/${id}`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition"
              >
                {/* QUADRO DO SÍMBOLO */}
                <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-md border border-gray-200 w-20 h-20">
                  <Image
                    src={icon.path}
                    alt={label}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* TEXTO */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {label}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Toque para ver o significado técnico.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
