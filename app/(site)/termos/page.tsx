export const metadata = { title: "Termos e Condições — OTIAdriver" };

export default function Termos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Termos e Condições
        </h1>

        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Aceitação dos Termos
            </h2>
            <p>
              Bem-vindo à <strong>OTIAdriver</strong>. Ao acessar, navegar, utilizar
              ou criar uma conta em nosso site e plataforma, você declara que leu,
              compreendeu e concorda com estes Termos e Condições.
            </p>
            <p>
              Caso você não concorde com qualquer parte destes termos, recomendamos
              que não utilize nossos serviços.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Sobre a OTIAdriver
            </h2>
            <p>
              A OTIAdriver é uma plataforma digital de conteúdo educacional e informativo,
              voltada para profissionais do transporte (motoristas, operadores, frotistas
              e interessados), com materiais sobre tecnologia veicular, condução,
              interpretação de painéis e temas relacionados.
            </p>
            <p>
              O site oficial é: <strong>otiadriver.com.br</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Elegibilidade e Responsabilidade do Usuário
            </h2>
            <p>
              Para utilizar a plataforma, o usuário declara que possui capacidade legal
              para aceitar estes termos e que fornecerá informações verdadeiras,
              atualizadas e completas quando solicitado.
            </p>
            <p>
              O usuário é responsável por manter seus dados de acesso em segurança,
              bem como por qualquer atividade realizada em sua conta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Conteúdo e Finalidade Educacional
            </h2>
            <p>
              Todo o conteúdo disponibilizado na OTIAdriver tem caráter{" "}
              <strong>educacional e informativo</strong>. A plataforma não substitui:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>treinamentos oficiais de montadoras;</li>
              <li>manuais técnicos autorizados;</li>
              <li>normas internas de empresas transportadoras;</li>
              <li>orientações de segurança obrigatórias.</li>
            </ul>

            <p>
              O usuário compreende que deve sempre seguir as recomendações oficiais do
              fabricante do veículo e as leis de trânsito vigentes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Cadastro, Acesso e Sessão
            </h2>
            <p>
              Para acessar determinadas áreas, pode ser necessário realizar cadastro,
              validação de identidade e autenticação por meios como CPF, telefone ou SMS.
            </p>
            <p>
              Podemos, a nosso critério, suspender ou bloquear acessos quando houver
              indícios de uso indevido, fraude, violação de regras ou risco à segurança.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Planos, Pagamentos e Assinaturas
            </h2>
            <p>
              A OTIAdriver pode oferecer planos pagos (assinaturas) para acesso a conteúdos
              exclusivos. Os pagamentos podem ser processados por parceiros como{" "}
              <strong>Mercado Pago</strong> ou outros provedores de pagamento.
            </p>

            <p>
              Ao contratar um plano, o usuário concorda com as condições do pagamento,
              valores, periodicidade e regras exibidas no momento da compra.
            </p>

            <p className="text-slate-600 text-sm">
              Observação: o processamento de pagamento é realizado por plataformas externas,
              e a OTIAdriver não armazena dados completos de cartão.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Cancelamento e Reembolso
            </h2>
            <p>
              O usuário poderá solicitar cancelamento conforme as regras informadas no
              momento da contratação do plano e de acordo com as políticas do provedor
              de pagamento utilizado.
            </p>
            <p>
              Em caso de divergência, cobranças indevidas ou problemas técnicos,
              recomendamos entrar em contato imediatamente para análise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              8. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo presente na OTIAdriver (textos, design, imagens, vídeos,
              logotipo, marcas, estrutura e materiais) é protegido por direitos autorais
              e pertence à OTIAdriver ou a seus licenciadores.
            </p>

            <p>
              É proibido copiar, reproduzir, redistribuir, vender, modificar ou explorar
              qualquer conteúdo sem autorização expressa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              9. Condutas Proibidas
            </h2>
            <p>O usuário concorda que não irá:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>tentar invadir, explorar falhas ou burlar sistemas de segurança;</li>
              <li>compartilhar conta com terceiros de forma indevida;</li>
              <li>publicar ou distribuir conteúdo ilegal, ofensivo ou fraudulento;</li>
              <li>usar o site para fins maliciosos, automações abusivas ou scraping.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              10. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para serviços externos (ex.: Mercado Pago,
              YouTube, Instagram, WhatsApp). Não nos responsabilizamos por políticas,
              conteúdo ou práticas de sites de terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              11. Publicidade
            </h2>
            <p>
              A OTIAdriver pode exibir anúncios por meio de redes de publicidade, incluindo
              o Google AdSense. Os anúncios podem ser exibidos com base em cookies,
              preferências e dados técnicos do navegador, conforme a Política de Privacidade
              e Política de Cookies.
            </p>

            <p className="text-sm text-slate-600">
              Consulte também:{" "}
              <a href="/privacidade" className="text-emerald-700 hover:underline">
                Política de Privacidade
              </a>{" "}
              e{" "}
              <a href="/cookies" className="text-emerald-700 hover:underline">
                Política de Cookies
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              12. Limitação de Responsabilidade
            </h2>
            <p>
              A OTIAdriver não se responsabiliza por danos decorrentes do uso indevido do
              conteúdo, interrupções de serviço, falhas técnicas, indisponibilidade,
              erros de terceiros ou decisões tomadas com base em informações do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              13. Alterações destes Termos
            </h2>
            <p>
              Podemos atualizar estes Termos a qualquer momento. A versão vigente sempre
              estará disponível nesta página. O uso contínuo do site após alterações
              representa aceitação das novas condições.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              14. Contato
            </h2>
            <p>
              Para dúvidas, suporte ou solicitações relacionadas a estes Termos, entre
              em contato:
            </p>

            <p className="text-slate-500 text-sm">
              E-mail:{" "}
              <a
                href="mailto:otiadriver@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                otiadriver@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
