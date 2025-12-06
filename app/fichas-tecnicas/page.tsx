// app/fichas-tecnicas/page.tsx

type FichaTecnica = {
  id: string;
  marca: "Volvo" | "Scania";
  modelo: string;
  descricao?: string;
  arquivo: string;        // caminho do PDF em /public/fichas-tecnicas
  rotaCaminhao?: string;  // rota da página de informações do caminhão
};

const fichas: FichaTecnica[] = [
  // VOLVO
  {
    id: "volvo-fh-6x4t",
    marca: "Volvo",
    modelo: "Volvo FH 6x4T",
    descricao: "Cavalo mecânico 6x4 para longa distância.",
    arquivo: "/fichas-tecnicas/volvo-fh-6x4t.pdf",
    rotaCaminhao: "/caminhoes/volvo-fh-6x4t",
  },
  {
    id: "volvo-fmx-max-6x4r",
    marca: "Volvo",
    modelo: "Volvo FMX MAX 6x4R",
    descricao: "Chassi vocacional para construção e mineração.",
    arquivo: "/fichas-tecnicas/volvo-fmx-max-6x4r.pdf",
    rotaCaminhao: "/caminhoes/volvo-fmx-max-6x4r",
  },
  {
    id: "volvo-vm-6x2r",
    marca: "Volvo",
    modelo: "Volvo VM 6x2R",
    descricao: "Aplicações rodoviárias de carga geral.",
    arquivo: "/fichas-tecnicas/volvo-vm-6x2r.pdf",
    rotaCaminhao: "/caminhoes/volvo-vm-6x2r",
  },
  {
    id: "volvo-vmx-max-6x4r",
    marca: "Volvo",
    modelo: "Volvo VMX MAX 6x4R",
    descricao: "Aplicações severas com suspensão reforçada.",
    arquivo: "/fichas-tecnicas/volvo-vmx-max-6x4r.pdf",
    rotaCaminhao: "/caminhoes/volvo-vmx-max-6x4r",
  },

  // SCANIA
  {
    id: "scania-r500-r560-a6x4nz-super",
    marca: "Scania",
    modelo: "Scania R 500 / R 560 A6x4NZ SUPER",
    descricao: "Linha Scania Super para operações rodoviárias 6x4.",
    arquivo: "/fichas-tecnicas/scania-r500-r560-a6x4nz-super.pdf",
    rotaCaminhao: "/caminhoes/scania-r500-r560-a6x4nz-super",
  },
  {
    id: "scania-g560-b8x4hz-xt-super",
    marca: "Scania",
    modelo: "Scania G 560 B8x4HZ XT SUPER",
    descricao: "Caminhão vocacional 8x4 da linha XT para mineração.",
    arquivo: "/fichas-tecnicas/scania-g560-b8x4hz-xt-super.pdf",
    rotaCaminhao: "/caminhoes/scania-g560-b8x4hz-xt-super",
  },
  {
    id: "scania-p320-b8x2na",
    marca: "Scania",
    modelo: "Scania P 320 B8x2NA",
    descricao: "Semipesado 8x2 ideal para distribuição e carga geral.",
    arquivo: "/fichas-tecnicas/scania-p320-b8x2na.pdf",
    rotaCaminhao: "/caminhoes/scania-p320-b8x2na",
  },
];

export default function FichasTecnicasPage() {
  const agrupadoPorMarca = fichas.reduce((acc, ficha) => {
    acc[ficha.marca] = acc[ficha.marca] || [];
    acc[ficha.marca].push(ficha);
    return acc;
  }, {} as Record<string, FichaTecnica[]>);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Fichas Técnicas – Caminhões
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Todos os arquivos abaixo são fichas técnicas oficiais em PDF,
        mantidas exatamente no formato original das montadoras.
      </p>

      <div className="space-y-10">
        {Object.entries(agrupadoPorMarca).map(([marca, lista]) => (
          <section key={marca}>
            <h2 className="text-2xl font-semibold mb-4">{marca}</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {lista.map((ficha) => (
                <div
                  key={ficha.id}
                  className="border rounded-lg p-4 flex flex-col gap-2 bg-white shadow-sm"
                >
                  <h3 className="font-semibold text-lg">{ficha.modelo}</h3>

                  {ficha.descricao && (
                    <p className="text-sm text-gray-700">
                      {ficha.descricao}
                    </p>
                  )}

                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={ficha.arquivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold underline hover:no-underline text-blue-600"
                    >
                      Abrir ficha técnica (PDF)
                    </a>

                    {ficha.rotaCaminhao && (
                      <a
                        href={ficha.rotaCaminhao}
                        className="text-sm text-gray-700 underline hover:no-underline"
                      >
                        Ver página do caminhão
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
