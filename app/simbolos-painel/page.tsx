// app/simbolos-painel/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";

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
    title: file
      .replace(/\.(png|jpg|jpeg|webp|svg)$/i, "")
      .replace(/-/g, " ")
      .trim(),
  }));
}

export default function SimbolosPainelPage() {
  const icons = getSymbols();

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Símbolos do Painel
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Indicadores de segurança, sistemas e alertas do veículo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {icons.map((icon) => (
            <div
              key={icon.file}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              {/* QUADRO DO SÍMBOLO */}
              <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-md border border-gray-200 w-20 h-20">
                <Image
                  src={icon.path}
                  alt={icon.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* TEXTO */}
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  {icon.title}
                </h2>
                <p className="text-sm text-gray-600">
                  (adicione uma descrição técnica deste símbolo, se quiser)
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
