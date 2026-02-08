export const metadata = { title: "Política de Privacidade — OTIAdriver" };

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Política de Privacidade
        </h1>

        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
          {/* 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Compromisso com a Privacidade
            </h2>
            <p>
              A <strong>OTIAdriver</strong> respeita sua privacidade e está comprometida
              em proteger seus dados pessoais. Esta Política explica como coletamos,
              usamos, armazenamos e compartilhamos informações ao acessar nosso site
              e plataforma.
            </p>
            <p>
              Realizamos o tratamento de dados pessoais em conformidade com a{" "}
              <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Quem somos
            </h2>
            <p>
              A OTIAdriver é uma plataforma digital de conteúdo educacional e informativo
              voltada para motoristas, profissionais do transporte, operadores e interessados.
            </p>
            <p>
              Site oficial: <strong>otiadriver.com.br</strong>
            </p>
          </section>

          {/* 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Quais dados coletamos
            </h2>
            <p>Podemos coletar os seguintes dados, dependendo do uso:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dados de cadastro:</strong> nome (quando informado) e e-mail (quando informado).
              </li>
              <li>
                <strong>Dados de autenticação:</strong> CPF e telefone (quando aplicável) para login e verificação.
              </li>
              <li>
                <strong>Dados de pagamento:</strong> informações sobre status de compra/assinatura (ex.: aprovado, pendente, cancelado).
              </li>
              <li>
                <strong>Dados técnicos:</strong> IP, navegador, dispositivo, sistema operacional e logs de acesso.
              </li>
              <li>
                <strong>Cookies e identificadores:</strong> para sessão, segurança, preferências e publicidade.
              </li>
            </ul>

            <p className="text-sm text-slate-600">
              Importante: a OTIAdriver não armazena dados completos de cartão de crédito.
            </p>
          </section>

          {/* 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Para que usamos seus dados
            </h2>
            <p>Utilizamos seus dados para finalidades legítimas, como:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>permitir login e autenticação do usuário;</li>
              <li>controlar acesso a conteúdos e áreas restritas;</li>
              <li>processar pagamentos e assinaturas (via parceiros);</li>
              <li>prevenir fraudes, abusos e acessos indevidos;</li>
              <li>melhorar a experiência do usuário;</li>
              <li>cumprir obrigações legais e regulatórias;</li>
              <li>exibir anúncios (Google AdSense), quando habilitado.</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Base legal (LGPD)
            </h2>
            <p>
              O tratamento de dados pessoais pode ocorrer com base em:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>execução de contrato</strong> (para fornecer acesso ao serviço);
              </li>
              <li>
                <strong>cumprimento de obrigação legal</strong>;
              </li>
              <li>
                <strong>legítimo interesse</strong> (segurança, prevenção a fraudes, melhoria do serviço);
              </li>
              <li>
                <strong>consentimento</strong> (quando necessário, como em alguns tipos de cookies).
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Pagamentos e parceiros
            </h2>
            <p>
              Pagamentos e assinaturas podem ser processados por provedores externos, como{" "}
              <strong>Mercado Pago</strong>.
            </p>
            <p>
              Esses provedores podem coletar dados necessários para concluir a transação.
              Recomendamos que você consulte também as políticas do provedor utilizado.
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Cookies e tecnologias semelhantes
            </h2>
            <p>
              Utilizamos cookies para funcionamento do site, autenticação, segurança,
              preferências e análise de desempenho.
            </p>
            <p>
              Para detalhes completos, consulte também nossa{" "}
              <a href="/cookies" className="text-emerald-700 hover:underline font-semibold">
                Política de Cookies
              </a>
              .
            </p>
          </section>

          {/* 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              8. Publicidade (Google AdSense)
            </h2>
            <p>
              A OTIAdriver pode exibir anúncios por meio do <strong>Google AdSense</strong>.
              O Google pode utilizar cookies e identificadores para:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>exibir anúncios personalizados ou não personalizados;</li>
              <li>limitar a repetição de anúncios;</li>
              <li>medir desempenho e relatórios.</li>
            </ul>

            <p>
              Você pode controlar preferências de anúncios e cookies nas configurações do
              seu navegador e também na sua Conta Google.
            </p>
          </section>

          {/* 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              9. Compartilhamento de dados
            </h2>
            <p>
              A OTIAdriver <strong>não vende</strong> dados pessoais. O compartilhamento
              pode ocorrer apenas quando necessário, por exemplo:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>para processar pagamentos e assinaturas;</li>
              <li>para autenticação, segurança e prevenção a fraudes;</li>
              <li>para serviços de hospedagem e infraestrutura;</li>
              <li>por obrigação legal, ordem judicial ou requisição oficial.</li>
            </ul>
          </section>

          {/* 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              10. Armazenamento e segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger dados contra
              acessos não autorizados, perda, vazamento, alteração ou destruição.
            </p>
            <p>
              Mesmo assim, nenhum sistema é 100% imune. Caso identifiquemos incidentes
              relevantes, tomaremos medidas razoáveis para reduzir impactos.
            </p>
          </section>

          {/* 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              11. Tempo de retenção
            </h2>
            <p>
              Mantemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades
              descritas nesta Política, incluindo:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>manter sua conta ativa;</li>
              <li>cumprir obrigações legais;</li>
              <li>resolver disputas e prevenir fraudes.</li>
            </ul>
          </section>

          {/* 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              12. Seus direitos (LGPD)
            </h2>
            <p>
              Você pode solicitar, nos termos da LGPD:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>confirmação do tratamento;</li>
              <li>acesso aos dados;</li>
              <li>correção de dados incompletos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação (quando aplicável);</li>
              <li>revogação de consentimento (quando aplicável);</li>
              <li>informações sobre compartilhamento;</li>
              <li>portabilidade, quando cabível.</li>
            </ul>
          </section>

          {/* 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              13. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade a qualquer momento.
              A versão vigente sempre estará disponível nesta página.
            </p>
          </section>

          {/* 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              14. Contato
            </h2>
            <p>
              Para solicitações relacionadas à privacidade, entre em contato:
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

            <p className="text-sm text-slate-600">
              Consulte também:{" "}
              <a href="/termos" className="text-emerald-700 hover:underline font-semibold">
                Termos e Condições
              </a>{" "}
              e{" "}
              <a href="/cookies" className="text-emerald-700 hover:underline font-semibold">
                Política de Cookies
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
