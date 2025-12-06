// app/fichas-tecnicas/page.tsx

type FichaTecnica = {
  id: string;
  marca: "Volvo" | "Scania";
  modelo: string;         // nome técnico (ex: FH 6x4T, P320 B8x2NA)
  linha: string;          // nome que aparece nos cards (Volvo FH, Scania Super, etc.)
  arquivo: string;        // caminho do PDF em /public/fichas-tecnicas
  rotaCaminhao: string;   // rota da página de informações do caminhão
};

const fichas: FichaTecnica[] = [
  // VOLVO
  {
    id: "volvo-fh-6x4t",
    marca: "Volvo",
    linha: "Volvo FH",
    modelo: "Volvo FH 6x4T",
    arquivo: "/fichas-tecnicas/volvo-fh-6x4t.pdf",
    rotaCaminhao: "/caminhoes/volvo-fh",
  },
  {
    id: "volvo-fmx-max-6x4r",
    marca: "Volvo",
    linha: "Volvo FMX",
    modelo: "Volvo FMX MAX 6x4R",
    arquivo: "/fichas-tecnicas/volvo-fmx-max-6x4r.pdf",
    rotaCaminhao: "/caminhoes/volvo-fmx",
  },
  {
    id: "volvo-vm-6x2r",
    marca: "Volvo",
    linha: "Volvo VM / VMX",
    modelo: "Volvo VM 6x2R",
    arquivo: "/fichas-tecnicas/volvo-vm-6x2r.pdf",
    rotaCaminhao: "/caminhoes/volvo-vm-vmx",
  },
  {
    id: "volvo-vmx-max-6x4r",
    marca: "Volvo",
    linha: "Volvo VM / VMX",
    modelo: "Volvo VMX MAX 6x4R",
    arquivo: "/fichas-tecnicas/volvo-vmx-max-6x4r.pdf",
    rotaCaminhao: "/caminhoes/volvo-vm-vmx",
  },

  // SCANIA
  {
    id: "scania-r500-r560-a6x4nz-super",
    marca: "Scania",
    linha: "Scania Super",
    modelo: "Scania R 500 / R 560 A6x4NZ SUPER",
    arquivo: "/fichas-tecnicas/scania-r500-r560-a6x4nz-super.pdf",
    rotaCaminhao: "/caminhoes/scania-super",
  },
  {
    id: "scania-g560-b8x4hz-xt-super",
    marca: "Scania",
    linha: "Scania Super XT",
    modelo: "Scania G 560 B8x4HZ XT SUPER",
    arquivo: "/fichas-tecnicas/scania-g560-b8x4hz-xt-super.pdf",
    rotaCaminhao: "/caminhoes/scania-super-xt",
  },
  {
    id: "scania-p320-b8x2na",
    marca: "Scania",
    linha: "Scania P320 8x2",
    modelo: "Scania P 320 B8x2NA",
    arquivo: "/fichas-tecnicas/scania-p320-b8x2na.pdf",
    rotaCaminhao: "/caminhoes/scania-p320-8x2",
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
                  <p className="text-xs font-medium uppercase text-gray-500">
                    {ficha.linha}
                  </p>

                  <h3 className="font-semibold text-lg">{ficha.modelo}</h3>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={ficha.arquivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold underline hover:no-underline text-blue-600"
                    >
                      Abrir ficha técnica (PDF)
                    </a>

                    <a
                      href={ficha.rotaCaminhao}
                      className="text-sm text-gray-700 underline hover:no-underline"
                    >
                      Ver página do caminhão
                    </a>
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
