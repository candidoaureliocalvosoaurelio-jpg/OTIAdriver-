// app/caminhoes/mercedes-atego-2433p-6x2/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function MercedesAtego2433PPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver (igual FH / Scania) */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Caminhão Semipesado 6x2
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Mercedes-Benz Atego 2433 P 6x2
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                versatilidade e carga útil para rotas urbanas e rodoviárias
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>Atego 2433 P 6x2</strong> é um caminhão rígido semipesado
              com eixo auxiliar levantável, projetado para{" "}
              <strong>maximizar a carga útil</strong> em operações de
              distribuição regional e urbana. Combina PBT técnico de{" "}
              <strong>24,1 toneladas</strong> com motor OM 926 de{" "}
              <strong>321 cv e 1.250 Nm</strong>, entregando desempenho,
              economia e confiabilidade em aplicações de baú, sider e tanque.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  PBT técnico
                </p>
                <p className="text-lg font-bold text-slate-900">24,1 t</p>
                <p className="text-[11px] text-slate-600">
                  Semipesado rígido 6x2 com eixo auxiliar
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência / torque
                </p>
                <p className="text-lg font-bold text-slate-900">
                  321 cv / 1.250 Nm
                </p>
                <p className="text-[11px] text-slate-600">
                  Motor Mercedes-Benz OM 926, 6 cilindros
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Baú, sider, tanque
                </p>
                <p className="text-[11px] text-slate-600">
                  Distribuição regional e urbana de alto volume
                </p>
              </div>
            </div>

            {/* ÚNICO botão — ver ficha técnica */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver ficha técnica completa
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/mercedes-atego-2433p-6x2.jpg" // ajuste o nome se for diferente
                  alt="Mercedes-Benz Atego 2433 P 6x2 – caminhão semipesado 6x2"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Mercedes-Benz Atego 2433 P 6x2 — distribuição
              regional e urbana de alto volume.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Visão geral: semipesado versátil para distribuição de alto volume
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>Atego 2433 P 6x2</strong> foi desenhado para o
              transportador que precisa de <strong>versatilidade</strong> e{" "}
              <strong>flexibilidade</strong> nas operações, mantendo alta carga
              útil e agilidade em rotas mistas. A tração 6x2 com eixo auxiliar
              permite otimizar consumo e desgaste de pneus, adequando o veículo
              ao peso transportado em cada trecho.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A nova linha Atego cobre aplicações urbanas, rodoviárias e fora de
              estrada, com uma gama de versões que facilita encontrar a
              configuração ideal para cada operação, desde distribuição em
              centros urbanos até rotas regionais com alto volume de carga.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Segmento alvo
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Semipesado rígido 6x2 com eixo auxiliar</li>
                <li>• Rotas rodoviárias e urbanas de médio/alto percurso</li>
                <li>• Operações com necessidade de grande volume e PBT elevado</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Alta carga útil com PBT técnico de 24,1 t</li>
                <li>• Conjunto robusto para maior disponibilidade</li>
                <li>• Bom equilíbrio entre desempenho e economia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Motorização OM 926 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motorização OM 926: força, economia e segurança com Top Brake
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O Atego 2433 P utiliza o motor{" "}
                <strong>Mercedes-Benz OM 926</strong>, 6 cilindros em linha, que
                representa o topo de potência da família semipesada da marca.
                Foi projetado para suportar o esforço típico da configuração 6x2
                com alto PBT, mantendo boa eficiência de combustível.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Potência máxima:</strong> 321 cv
                </li>
                <li>
                  <strong>Torque máximo:</strong> 1.250 Nm
                </li>
                <li>
                  <strong>Gama da linha:</strong> motores de 185 cv a 321 cv,
                  cobrindo várias aplicações da família Atego
                </li>
                <li>
                  <strong>Confiabilidade:</strong> motores amplamente testados
                  na realidade do transporte brasileiro
                </li>
                <li>
                  <strong>Freio motor Top Brake:</strong> atua como um freio
                  motor reforçado, elevando o nível de segurança em descidas e
                  reduzindo o desgaste dos freios de serviço
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Benefícios na operação
              </p>
              <p className="mb-2">
                A combinação de alto torque com o Top Brake oferece melhor
                controle em rampas e descidas, reduzindo o uso do pedal de
                freio, aumentando a segurança e diminuindo custos de
                manutenção.
              </p>
              <p>
                O resultado é um caminhão preparado para manter velocidade média
                elevada, com economia e robustez em rotas carregadas.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Câmbios PowerShift 3 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Câmbios PowerShift 3: desempenho, conforto e economia
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="mb-3">
                A nova linha Atego incorpora câmbios automatizados
                <strong> Mercedes-Benz PowerShift 3</strong> de terceira
                geração, nas versões G140 e G211, superdimensionados para serviço
                pesado.
              </p>
              <ul className="space-y-2">
                <li>• Até 40% mais rápidos nas trocas que gerações anteriores</li>
                <li>• Estratégias de mudança que minimizam abusos de condução</li>
                <li>• Melhor aproveitamento do torque e da faixa verde</li>
                <li>• Contribuem diretamente para a redução de consumo</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-5">
              <p className="font-semibold text-sky-900 mb-2">
                Conforto para o motorista
              </p>
              <p className="mb-2">
                O comando do câmbio é feito por uma alavanca integrada à coluna
                de direção, de fácil acesso e ergonomia aprimorada, liberando
                espaço no assoalho da cabine.
              </p>
              <p>
                Em versões vocacionais especiais (como coleta de resíduos e
                bombeiro), há também opção de câmbio automático, reforçando o
                foco em conforto e produtividade.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Cabina e conforto a bordo */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabina com novo estilo: funcionalidade, conforto e identidade Actros
          </h2>
          <div className="grid md:grid-cols-4 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Cabina curta
              </p>
              <p>
                Versão mais compacta e leve, ideal para aplicações urbanas com
                foco em manobrabilidade e peso próprio reduzido.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Cabina estendida
              </p>
              <p>
                Oferece maior espaço para objetos e eventuais descansos rápidos,
                mantendo dimensões externas contidas.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Leito teto baixo
              </p>
              <p>
                Permite pernoite em rotas regionais, com altura externa adequada
                para garagens e docas com restrição de altura.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Leito teto alto
              </p>
              <p>
                Garante máximo conforto e liberdade de movimentação interna,
                indicado para pernoites frequentes.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Melhorias internas
              </p>
              <ul className="space-y-1.5">
                <li>• Volante multifuncional com comandos integrados</li>
                <li>• Novos bancos com foco em ergonomia e segurança</li>
                <li>• Layout interno alinhado à identidade visual do Actros</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Impacto na produtividade
              </p>
              <p>
                Conforto, boa ergonomia e comandos bem posicionados reduzem a
                fadiga do motorista e contribuem para condução mais segura e
                econômica, especialmente em jornadas intensas de distribuição.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Capacidade, flexibilidade e suporte */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Capacidade, flexibilidade e suporte à frota
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="mb-3">
                A família Atego cobre um amplo espectro do segmento semipesado,
                permitindo padronizar a frota com diferentes configurações de
                PBT e tração.
              </p>
              <ul className="space-y-1.5">
                <li>• PBT técnico da linha: de 14,3 t a 32,7 t (plataforma)</li>
                <li>• Versão cavalo mecânico com CMT de 45,1 t</li>
                <li>
                  • Configurações de tração: 4x2, 6x2, 8x2, 8x4 e cavalo
                  mecânico 4x2
                </li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-5">
              <p className="font-semibold text-sky-900 mb-2">
                Planos de manutenção e garantia estendida
              </p>
              <p className="mb-2">
                A Mercedes-Benz oferece planos de manutenção que incluem
                serviços preventivos e corretivos em toda a rede de
                concessionários, trazendo previsibilidade de custos e maior
                disponibilidade.
              </p>
              <p>
                A <strong>garantia estendida</strong> pode chegar a dois anos
                adicionais, aumentando a proteção do investimento e a
                tranquilidade do transportador.
              </p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Mercedes-Benz Atego 2433 P 6x2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Modelo
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Atego 2433 P 6x2 – caminhão rígido semipesado com eixo
                    auxiliar levantável.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Mercedes-Benz OM 926, 6 cilindros em linha, diesel,
                    projetado para alta durabilidade e eficiência.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Potência máxima de aproximadamente 321 cv e torque de{" "}
                    1.250 Nm, adequados à configuração 6x2 com alto PBT técnico.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x2 rígido com eixo auxiliar, focado em equilíbrio entre
                    capacidade de carga e eficiência de combustível.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    PBT técnico
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Aproximadamente 24,1 toneladas (plataforma), respeitando a
                    legislação vigente.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Entre-eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções típicas de 3.600, 4.800 e 5.400 mm (conforme versão e
                    aplicação).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Câmbio automatizado Mercedes-Benz PowerShift 3 (G140/G211),
                    3ª geração, com trocas de marcha rápidas e inteligentes.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Freios auxiliares
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Freio motor Top Brake, contribuindo para maior segurança em
                    descidas e menor desgaste dos freios de serviço.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabina
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções Curta, Estendida, Leito Teto Baixo e Leito Teto Alto,
                    com interior atualizado, volante multifuncional e novos
                    bancos.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicações típicas
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição regional e urbana de alto volume (baú, sider,
                    tanque), operações que exigem grande capacidade de carga e
                    boa agilidade em manobras.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bloco final – cartão branco com botão azul (PDF oficial) */}
        <section className="mt-10">
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – Mercedes-Benz Atego 2433 P 6x2 (PDF)
            </h2>

            <p className="text-sm text-slate-700">
              Recomenda-se consultar a ficha técnica oficial da Mercedes-Benz
              para obter dados completos de motor, transmissão, eixos,
              capacidades, dimensões e configurações específicas do Atego 2433
              P 6x2, apoiando o correto dimensionamento da frota.
            </p>

            <div className="mt-4">
              <a
                href="/fichas-tecnicas/mercedes-atego-2433p-6x2.pdf" // ajuste o caminho do PDF quando tiver o arquivo
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold">
                  PDF
                </span>
                Abrir ficha técnica (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
