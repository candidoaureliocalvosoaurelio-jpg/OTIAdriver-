// app/planos/page.tsx
export const metadata = {
  title: "Planos | OTIAdriver",
  description: "Conheça os planos da plataforma OTIAdriver",
};

export default function PlanosPage() {
  return (
    <main data-page="planos" className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        Planos OTIAdriver
      </h1>

      <p className="text-center text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        Encontre a solução perfeita da OTIAdriver para suas necessidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BÁSICO */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h2 className="text-xl font-bold mb-2">Básico</h2>
          <p className="text-2xl font-extrabold text-blue-800">
            R$ 29,90{" "}
            <span className="text-base font-medium text-gray-600">/ mês</span>
          </p>
          <p className="text-sm text-gray-700 mb-6">Ideal para uso pessoal.</p>

          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Fichas Técnicas Essenciais</li>
            <li>✅ Acesso à Galeria</li>
            <li>✅ Suporte Básico por Chat</li>
          </ul>

          <a
            href="https://mpago.la/131Yx5T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl px-5 py-3 font-bold text-white bg-blue-800 hover:bg-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Assinar Agora
          </a>
        </div>

        {/* PRO — DESTAQUE + RECOMENDADO */}
        <div className="relative bg-white rounded-2xl p-6 border shadow-lg ring-2 ring-emerald-400/70">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
            RECOMENDADO
          </span>

          <h2 className="text-xl font-bold mb-2">PRO</h2>
          <p className="text-2xl font-extrabold text-blue-800">
            R$ 49,90{" "}
            <span className="text-base font-medium text-gray-600">/ mês</span>
          </p>
          <p className="text-sm text-gray-700 mb-6">
            Ideal para Profissionais Exigentes.
          </p>

          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Fichas Técnicas COMPLETAS</li>
            <li>✅ Suporte Técnico IA Ilimitado</li>
            <li>✅ Análise de Imagem (5/mês)</li>
            <li>✅ Checklists de Viagem</li>
          </ul>

          <a
            href="https://mpago.la/1KhUK3d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl px-5 py-3 font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Assinar Agora
          </a>
        </div>

        {/* PREMIUM */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h2 className="text-xl font-bold mb-2">Premium</h2>
          <p className="text-2xl font-extrabold text-blue-800">
            R$ 99,90{" "}
            <span className="text-base font-medium text-gray-600">/ mês</span>
          </p>
          <p className="text-sm text-gray-700 mb-6">
            Ideal para Uso Profissional Ilimitado.
          </p>

          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Todos os Recursos PRO</li>
            <li>✅ Análise de Imagem ILIMITADA</li>
            <li>✅ Treinamento IA Personalizado</li>
            <li>✅ Acesso a Dados Históricos</li>
            <li>✅ Suporte Prioritário</li>
          </ul>

          <a
            href="https://mpago.la/1Xu1tTU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl px-5 py-3 font-bold text-white bg-blue-900 hover:bg-blue-950 transition focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          >
            Assinar Agora
          </a>
        </div>
      </div>

      {/* Reset mínimo contra CSS antigo que escondia links/alterava ícones */}
      <style>{`
        main[data-page="planos"] a { opacity: 1 !important; filter: none !important; }
        main[data-page="planos"] li::before { content: none !important; }
      `}</style>
    </main>
  );
}
