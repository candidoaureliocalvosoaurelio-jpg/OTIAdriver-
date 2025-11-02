export const metadata = {
  title: "Planos | OTIAdriver",
  description: "Conheça os planos da plataforma OTIAdriver",
};

export default function PlanosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">

      <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        Planos OTIAdriver
      </h1>

      <p className="text-center text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        Encontre a solução perfeita da OTIAdriver para suas necessidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* BÁSICO */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h2 className="text-xl font-bold mb-2">Básico</h2>
          <p className="text-2xl font-extrabold text-blue-800">R$ 29,90 <span className="text-base font-medium text-gray-600">/ mês</span></p>
          <p className="text-sm text-gray-700 mb-6">Ideal para uso pessoal.</p>

          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Fichas Técnicas Essenciais</li>
            <li>✅ Acesso à Galeria</li>
            <li>✅ Suporte Básico por Chat</li>
          </ul>

          <a href="https://mpago.la/131Yx5T" className="block text-center bg-blue-800 text-white font-bold py-3 rounded-lg hover:opacity-90">
            Assinar Agora
          </a>
        </div>

        {/* PRO */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h2 className="text-xl font-bold mb-2 relative">
            PRO
            <span className="absolute -top-5 right-0 bg-blue-800 text-white text-xs px-2 py-1 rounded-md">RECOMENDADO</span>
          </h2>
          <p className="text-2xl font-extrabold text-blue-800">R$ 49,90 <span className="text-base font-medium text-gray-600">/ mês</span></p>
          <p className="text-sm text-gray-700 mb-6">Ideal para Profissionais Exigentes.</p>
          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Fichas Técnicas COMPLETAS</li>
            <li>✅ Suporte Técnico IA Ilimitado</li>
            <li>✅ Análise de Imagem (5/mês)</li>
            <li>✅ Checklists de Viagem</li>
          </ul>
          <a href="https://mpago.la/1KhUK3d" className="block text-center bg-green-600 text-white font-bold py-3 rounded-lg hover:opacity-90">
            Assinar Agora
          </a>
        </div>

        {/* PREMIUM */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h2 className="text-xl font-bold mb-2">Premium</h2>
          <p className="text-2xl font-extrabold text-blue-800">R$ 99,90 <span className="text-base font-medium text-gray-600">/ mês</span></p>
          <p className="text-sm text-gray-700 mb-6">Ideal para Uso Profissional Ilimitado.</p>
          <ul className="space-y-3 mb-6 text-sm">
            <li>✅ Todos os Recursos PRO</li>
            <li>✅ Análise de Imagem ILIMITADA</li>
            <li>✅ Treinamento IA Personalizado</li>
            <li>✅ Acesso a Dados Históricos</li>
            <li>✅ Suporte Prioritário</li>
          </ul>
          <a href="https://mpago.la/1Xu1tTU" className="block text-center bg-blue-900 text-white font-bold py-3 rounded-lg hover:opacity-90">
            Assinar Agora
          </a>
        </div>

      </div>
    </main>
  );
}
