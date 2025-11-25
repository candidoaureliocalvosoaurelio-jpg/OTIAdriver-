// app/simbolos-painel/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";

// Lê os arquivos da pasta /public/simbolos,
// ignorando o que não for imagem (.png, .jpg, .jpeg, .webp, .svg)
function getSymbols() {
  const dir = path.join(process.cwd(), "public", "simbolos");
  const allFiles = fs.readdirSync(dir);

  const imageFiles = allFiles.filter((file) => {
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

        {/* grid 2 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {icons.map((icon) => (
            <div
              key={icon.file}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              {/* QUADRO DO SÍMBOLO – AGORA BEM MAIOR */}
              <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-md border border-gray-200 flex items-center justify-center">
                <Image
                  src={icon.path}
                  alt={icon.title}
                  fill
                  className="object-contain p-2"
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
