import fs from "fs";
import path from "path";
import Image from "next/image";

// Função para listar arquivos dentro da pasta /public/simbolos
function getSymbols() {
  const dir = path.join(process.cwd(), "public", "simbolos");
  const files = fs.readdirSync(dir);

  // Retorna cada item com path e título automático
  return files.map((file) => ({
    file,
    path: "/simbolos/" + file,
    title: file.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " "),
  }));
}

export default function SimbolosPainelPage() {
  const icons = getSymbols();

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Símbolos do Painel
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Indicadores de segurança, sistemas e alertas do veículo.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {icons.map((icon) => (
            <div
              key={icon.file}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={icon.path}
                  alt={icon.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 capitalize">
                  {icon.title}
                </h2>
                <p className="text-sm text-gray-600">
                  (adicione uma descrição se quiser)
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
