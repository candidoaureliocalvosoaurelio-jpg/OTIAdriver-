import Image from "next/image";

export default function SimbolosPainelPage() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* ---------------------------------------------------- */}
        {/* CLASSIFICAÇÃO POR COR DAS LUZES DE AVISO — NOVO */}
        {/* ---------------------------------------------------- */}
        <header className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
            Classificação por Cor das Luzes de Aviso
          </h1>

          <p className="text-gray-700 mb-6">
            As cores indicam a <strong>urgência</strong> e a <strong>gravidade</strong> do problema
            ou a <strong>função</strong> acionada:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border">

            {/* LINHA 1 - Vermelho */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <span className="text-gray-900 font-semibold">Vermelho</span>
                <span className="h-4 w-4 rounded-full bg-red-600 inline-block"></span>
              </div>
              <p className="text-gray-800">
                <strong>Emergência / Falha Grave.</strong> Risco imediato à segurança ou danos ao veículo.
              </p>
              <p className="text-gray-800">
                <strong>Parada Imediata</strong> em local seguro e desligamento do motor.
                Necessidade de reparo urgente.
              </p>
            </div>

            {/* LINHA 2 - Amarelo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <span className="text-gray-900 font-semibold">Amarelo / Laranja</span>
                <span className="h-4 w-4 rounded-full bg-yellow-500 inline-block"></span>
              </div>
              <p className="text-gray-800">
                <strong>Advertência / Falha Moderada.</strong> Indica um problema que requer
                atenção, mas que não impede a condução.
              </p>
              <p className="text-gray-800">
                Verificar a situação e dirigir com cautela até local seguro ou oficina.
              </p>
            </div>

            {/* LINHA 3 - Verde/Azul/Branco */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-900 font-semibold">Verde / Azul / Branco</span>
                <span className="h-4 w-4 rounded-full bg-green-500 inline-block"></span>
                <span className="h-4 w-4 rounded-full bg-blue-500 inline-block"></span>
                <span className="h-4 w-4 rounded-full bg-gray-300 inline-block"></span>
              </div>
              <p className="text-gray-800">
                <strong>Informativo / Funcionalidade Ativa.</strong> Indica que um sistema está ligado,
                como faróis, setas ou funções do veículo.
              </p>
              <p className="text-gray-800">
                Não requer ação de emergência. Apenas confirmação do funcionamento.
              </p>
            </div>
          </div>
        </header>

        {/* ---------------------------------------------------- */}
        {/* LISTA DE SÍMBOLOS EXISTENTE */}
        {/* ---------------------------------------------------- */}

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Símbolos do Painel
        </h2>

        <p className="text-gray-600 mb-8">
          Indicadores de segurança, sistemas e alertas do veículo.
        </p>

        {/* AQUI ENTRAM OS SEUS SÍMBOLOS EXISTENTES */}
        {/* O BLOCO DE SÍMBOLOS CONTINUA IGUAL — NÃO ALTEREI */}

      </section>
    </main>
  );
}
