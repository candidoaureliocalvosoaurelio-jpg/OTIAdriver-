import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inspeção e Manutenção | OTIAdriver",
  description:
    "Programa de manutenção, verificações diárias e intervalos recomendados por aplicação. Guia premium OTIAdriver.",
};

export default function InspecaoManutencaoPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 text-sm text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Início
        </Link>
        <span>›</span>
        <span className="text-slate-700">Inspeção e Manutenção</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Inspeção e Manutenção de Caminhões
        </h1>
        <p className="mt-3 md:text-lg text-white/90 max-w-3xl">
          Um programa de manutenção bem estruturado é essencial para garantir
          confiabilidade, segurança e rentabilidade da frota. Aqui você encontra
          o programa otimizado, checklist diário para motoristas e quadros de
          referência por tipo de operação.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/planos"
            className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20 transition"
          >
            Assine OTIAdriver Premium
          </Link>
        </div>
      </section>

      {/* PROGRAMA DE MANUTENÇÃO OTIMIZADO */}
      <section className="mt-10 space-y-8">
        <header>
          <h2 className="text-2xl font-bold">
            Programa de Manutenção Otimizado para Caminhões
          </h2>
          <p className="mt-2 text-slate-700">
            Um programa de manutenção bem desenhado combina estratégias
            preventivas, planos de serviço flexíveis e telemetria para maximizar
            o tempo de atividade (uptime) e reduzir o custo por quilômetro.
          </p>
        </header>

        {/* I – Manutenção preventiva */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            I. Manutenção Preventiva: a base da eficiência
          </h3>
          <p className="mt-3 text-slate-700">
            A manutenção preventiva tem o objetivo de antecipar falhas e manter
            o caminhão em condições ideais de operação. Em praticamente todos
            os cenários, ela é muito mais econômica do que intervenções
            corretivas de emergência, que envolvem reboque, parada inesperada e
            risco de perda de carga.
          </p>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div>
              <h4 className="font-semibold text-slate-800">
                Troca de fluidos e filtros
              </h4>
              <p className="mt-2 text-slate-700 text-sm">
                Realizar a substituição de óleo do motor, fluidos e todos os
                filtros (ar, combustível, óleo, hidráulicos, entre outros)
                conforme:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Intervalos recomendados pelo fabricante;</li>
                <li>
                  Ou com base em análise de fluidos (quando disponível), que
                  permite estender ou encurtar intervalos com segurança.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">
                Lubrificação e ajustes
              </h4>
              <p className="mt-2 text-slate-700 text-sm">
                Garantir a lubrificação adequada de:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Chassis, eixos cardan e rolamentos;</li>
                <li>
                  Ajustes de folga de válvulas, freios e embreagem conforme
                  plano de manutenção;
                </li>
                <li>Atualização de software de módulos, quando aplicável.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div>
              <h4 className="font-semibold text-slate-800">
                Inspeções detalhadas
              </h4>
              <p className="mt-2 text-slate-700 text-sm">
                Inspeções periódicas em componentes críticos:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Sistema de freios (pastilhas, lonas, tambores, tubulações);</li>
                <li>Suspensão, molas, bolsas de ar e amortecedores;</li>
                <li>Sistema de direção, barras, terminais e folgas;</li>
                <li>
                  Eixos, estrutura, quadro do chassi e carroceria implementada.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">
                Monitoramento remoto (telemetria)
              </h4>
              <p className="mt-2 text-slate-700 text-sm">
                Uso de dispositivos que enviam dados em tempo real do veículo:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Horas de motor e regime de rotação;</li>
                <li>Consumo de combustível e comportamento de condução;</li>
                <li>Códigos de falha registrados nos módulos eletrônicos;</li>
                <li>
                  Permite agendar serviços pela condição real de uso, e não
                  apenas pelo hodômetro.
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* II – Pontos críticos */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            II. O que cuidar: pontos críticos de inspeção
          </h3>
          <p className="mt-3 text-slate-700">
            O foco na inspeção regular dos componentes abaixo é vital para a
            longevidade e segurança do caminhão.
          </p>

          <div className="mt-5 grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-800">
                Filtros de ar e combustível
              </h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  Filtro de ar sujo compromete a eficiência da queima e aumenta
                  o consumo de combustível.
                </li>
                <li>
                  Filtro de combustível protege injetores de alta precisão contra
                  contaminantes – a troca regular protege o motor.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">Sistema elétrico</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  Verificar estado da bateria, nível de eletrólito (quando
                  aplicável) e voltagem de carga.
                </li>
                <li>
                  Inspecionar conectores, cabos e chicotes para evitar
                  curto-circuitos e falhas de comunicação entre módulos.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">Pneus</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  Calibragem correta é crucial para segurança, desgaste
                  uniforme e economia de combustível.
                </li>
                <li>
                  Monitorar desgaste (TWI – Tread Wear Indicator) e realizar
                  rodízio, alinhamento e balanceamento conforme necessidade.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="font-semibold text-slate-800">Peças genuínas</h4>
            <p className="mt-2 text-slate-700 text-sm">
              Sempre utilizar peças genuínas ou homologadas pelo fabricante
              para garantir:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>Compatibilidade e desempenho conforme projeto original;</li>
              <li>Durabilidade e menor risco de falhas prematuras;</li>
              <li>Manutenção da garantia de fábrica do veículo.</li>
            </ul>
          </div>
        </article>

        {/* III – Manutenção inteligente / IV – Planos / V – Benefícios */}
        <article className="rounded-3xl bg-white p-6 shadow space-y-8">
          <section>
            <h3 className="text-xl font-semibold">
              III. Manutenção inteligente (proativa)
            </h3>
            <p className="mt-3 text-slate-700">
              A manutenção inteligente transforma dados em ações. Através de
              diagnósticos remotos, é possível atuar antes da falha acontecer.
            </p>

            <div className="mt-4 grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800">
                  Diagnóstico remoto
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  O sistema de telemetria da montadora ou oficina monitora
                  continuamente a saúde do caminhão, detectando:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Aumento de temperatura do motor e componentes;</li>
                  <li>Baixa pressão de óleo ou de ar;</li>
                  <li>Códigos de erro e eventos críticos registrados.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  Agendamento proativo
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  Ao identificar uma necessidade de serviço iminente, o sistema
                  ou o centro de atendimento:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Notifica o gestor da frota;</li>
                  <li>
                    Sugere o melhor momento para parada, evitando quebrar
                    durante a rota;
                  </li>
                  <li>
                    Otimiza o planejamento logístico e uso de veículos reserva.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  Redução do tempo parado
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  Em vez de parar quando ocorre a falha, o serviço é agendado
                  antes, garantindo:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Paradas curtas, planejadas e com peças na mão;</li>
                  <li>Maior disponibilidade do caminhão (uptime);</li>
                  <li>Mais segurança e previsibilidade operacional.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold">
              IV. Planos de serviço personalizados (contratos)
            </h3>
            <p className="mt-3 text-slate-700">
              Os contratos de serviço oferecem previsibilidade de custos e
              conveniência. Abaixo um modelo de estrutura por nível de cobertura.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-800">
                      Plano
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-800">
                      Cobertura típica
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-800">
                      Foco principal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      Básico (Preventivo)
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Troca de óleo e filtros, lubrificação, inspeções de
                      segurança e checagens de rotina.
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Manter a garantia e a confiabilidade mínima do veículo.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      Intermediário (Completo)
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Inclui o Básico, peças de desgaste (freios, embreagem,
                      correias, filtros adicionais) e revisões ampliadas.
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Previsibilidade total dos custos de manutenção programada.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      Total (Preventiva + Corretiva)
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Cobertura completa de peças, serviço e mão de obra, exceto
                      pneus e danos por mau uso ou acidentes.
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      Custo por quilômetro (CPK) praticamente fixo e máxima
                      tranquilidade operacional.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-slate-700 text-sm">
              <span className="font-semibold">Flexibilidade:</span> os planos
              podem ser adaptados ao tipo de operação (rodoviária, urbana, fora
              de estrada) e ao perfil de uso, incluindo faturamento por km
              rodado ou por horas de motor. O conteúdo desta tabela pode ser
              facilmente exportado para suas planilhas (Excel, Google Sheets)
              para controle de custos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">
              V. Benefícios da manutenção profissional
            </h3>
            <div className="mt-4 grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-800">
                  Redução de custos operacionais
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  A manutenção preventiva é sempre mais barata que:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Reboque de emergência;</li>
                  <li>
                    Peças danificadas em efeito cascata por falta de serviço;
                  </li>
                  <li>Multas e perdas de contrato por atrasos na entrega.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-800">
                  Mais tempo de estrada (uptime)
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  Serviços otimizados e agendados reduzem as paradas não
                  planejadas, mantendo:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Fluxo de entregas contínuo;</li>
                  <li>Melhor aproveitamento de janelas de carga/descarga;</li>
                  <li>Maior satisfação do cliente final.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-800">
                  Especialização e garantia
                </h4>
                <p className="mt-2 text-sm text-slate-700">
                  Técnicos certificados, ferramentas específicas e calibradas
                  garantem:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Serviço correto na primeira intervenção;</li>
                  <li>Preservação da integridade do veículo;</li>
                  <li>
                    Manutenção da garantia de fábrica e maior valor de revenda.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </section>

      {/* CHECKLIST PRÉ-VIAGEM DO MOTORISTA */}
      <section className="mt-12 rounded-3xl bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">
          Checklist de Inspeção Diária do Caminhão (Pré-Viagem)
        </h2>
        <p className="mt-2 text-slate-700">
          Este checklist é o complemento prático do programa de manutenção. Ele
          deve ser preenchido pelo motorista antes de iniciar a jornada, ajudando
          a identificar problemas básicos e registrar a condição do veículo.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Dica: você pode replicar este modelo em uma planilha (Excel ou Google
          Sheets) e arquivar os registros por veículo, data e motorista.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-3 text-left font-semibold text-slate-800">
                  Categoria
                </th>
                <th className="px-3 py-3 text-left font-semibold text-slate-800">
                  Item de inspeção
                </th>
                <th className="px-3 py-3 text-center font-semibold text-slate-800">
                  OK
                </th>
                <th className="px-3 py-3 text-center font-semibold text-slate-800">
                  Serviço necessário
                </th>
                <th className="px-3 py-3 text-left font-semibold text-slate-800">
                  Observações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* PNEUS E RODAS */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Pneus e Rodas
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Calibragem e profundidade dos sulcos
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Pneus OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Pneus exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Checar por cortes, bolhas ou objetos presos na banda de rodagem.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Pneus e Rodas
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Porcas de roda
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Porcas OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Porcas exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar se estão apertadas (sinais de pó de ferrugem ou folga).
                </td>
              </tr>

              {/* FREIOS */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Freios
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Pressão do sistema de ar
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Pressão OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Pressão exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Atingir pressão máxima antes de iniciar a viagem.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Freios
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Teste de freio de serviço
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Freio de serviço OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Freio de serviço exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Testar em baixa velocidade (desviar se puxa para um lado ou
                  há ruídos anormais).
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Freios
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Teste de freio de estacionamento
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Freio de estacionamento OK"
                  />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Freio de estacionamento exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar se segura o veículo adequadamente em aclive leve.
                </td>
              </tr>

              {/* LUZES E SINALIZAÇÃO */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Luzes e Sinalização
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Faróis (alto/baixo)
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Faróis OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Faróis exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Confirmar funcionamento e regulagem adequada.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Luzes e Sinalização
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Luzes de freio e lanternas traseiras
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Luzes traseiras OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Luzes traseiras exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Incluir luzes de marcação laterais e superiores.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Luzes e Sinalização
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Setas e pisca-alerta
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Setas OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Setas exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Conferir todos os lados e o alerta geral.
                </td>
              </tr>

              {/* MOTOR E FLUIDOS */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Motor e Fluidos
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Nível de óleo do motor
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Óleo do motor OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Óleo do motor exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar na vareta, se aplicável, sempre com o veículo
                  nivelado.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Motor e Fluidos
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Nível do líquido de arrefecimento
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Arrefecimento OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Arrefecimento exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Checar visualmente o reservatório e sinais de vazamento.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Motor e Fluidos
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Nível do combustível
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Combustível OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Combustível exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Planejar o abastecimento antes de rotas longas ou remotas.
                </td>
              </tr>

              {/* CABINE E DOCUMENTAÇÃO */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Cabine e Documentação
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Limpadores e lavadores de para-brisa
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Limpadores OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Limpadores exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar palhetas, reservatório de água e jatos de limpeza.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Cabine e Documentação
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Espelhos e vidros
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Espelhos OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Espelhos exigem serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Devem estar limpos, sem trincas e corretamente ajustados.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Cabine e Documentação
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Documentação (CNH, CRLV, carga)
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Documentação OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Documentação exige atenção"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Conferir validade e conformidade com a legislação e a nota
                  fiscal da carga.
                </td>
              </tr>

              {/* SISTEMA ELÉTRICO */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Sistema Elétrico
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Bateria e conexões
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Bateria OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Bateria exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar corrosão nos terminais e cabos soltos ou danificados.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Sistema Elétrico
                </td>
                <td className="px-3 py-2 align-top text-slate-700">Buzina</td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Buzina OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Buzina exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Confirmar funcionamento adequado para situações de emergência.
                </td>
              </tr>

              {/* SEGURANÇA E EMERGÊNCIA */}
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Segurança e Emergência
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Extintor de incêndio
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Extintor OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Extintor exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Deve estar acessível, lacrado e dentro da validade.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Segurança e Emergência
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Triângulo de segurança
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Triângulo OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input
                    type="checkbox"
                    aria-label="Triângulo exige serviço"
                  />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Conferir se está completo e em local de fácil acesso.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* COMO DETERMINAR O PROGRAMA (BLOCO ORIGINAL MANTIDO) */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">
            Como determinar o Programa de Manutenção
          </h2>
          <p className="mt-3 text-slate-700">
            O plano adequado deve ser definido considerando o tipo específico de
            operação, a aplicação (urbano, rodoviário, fora de estrada),
            especificações de óleos e graxas e o perfil de uso do veículo. Em
            geral, os serviços se organizam em:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <b>Primeiro Serviço:</b> checagens e conferências gerais
              pós-entrega.
            </li>
            <li>
              <b>Intermediária:</b> checagens, troca de filtros e conferências
              gerais.
            </li>
            <li>
              <b>Serviço X (básico):</b> troca de óleo + inspeções visuais; pode
              incluir atividades adicionais.
            </li>
            <li>
              <b>Serviço Y:</b> combina o básico com atividades adicionais (ex.:
              óleos de transmissão e eixo traseiro conforme cronograma).
            </li>
            <li>
              <b>Inspeção Legal:</b> segurança e manutenção conforme requisitos
              legais.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">Verificações diárias/semanais</h3>
          <p className="mt-3 text-slate-700">
            Devem ser feitas pelo motorista e registradas na lista de
            verificação. Itens encontrados serão examinados na visita à
            concessionária/oficina.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li>
              Níveis: óleo do motor, fluido de arrefecimento, fluido de
              freio/embreagem, Arla 32.
            </li>
            <li>Vazamentos, mangueiras, conexões e ruídos anormais.</li>
            <li>Iluminação, limpadores, buzina e equipamentos de segurança.</li>
            <li>Documentação do veículo e validade de itens obrigatórios.</li>
          </ul>

          <h4 className="mt-6 font-semibold">Retratamento da cabine</h4>
          <p className="mt-2 text-slate-700">
            Entre o 9º e o 15º mês após a entrega, realizar retratamento
            anticorrosão (quando aplicável).
          </p>
        </div>
      </section>

      {/* GRUPOS DE OPERAÇÃO */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Grupos de Operação (perfil de uso)</h2>
        <p className="mt-2 text-slate-700">
          Selecione o grupo que melhor representa a sua operação para consultar
          os intervalos.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Grupo I */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div
              className="relative w-full bg-gray-50"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/manutencao/grupo-rodoviario-I.png"
                alt="Grupo I"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo I</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações severas (aclives, rotas sinuosas, uso urbano com PTO
                ativo), alto fator de carga e consumo menor que 1,99 km/l.
              </p>
            </div>
          </div>

          {/* Grupo II */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div
              className="relative w-full bg-gray-50"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/manutencao/grupo-rodoviario-II.png"
                alt="Grupo II"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo II</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações rodoviárias padrão e boas condições de rodagem,
                consumo entre 2 e 2,99 km/l.
              </p>
            </div>
          </div>

          {/* Grupo III */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div
              className="relative w-full bg-gray-50"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/manutencao/grupo-rodoviario-III.png"
                alt="Grupo III"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo III</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações leves e rotas planas, consumo acima de 3 km/l, longas
                distâncias em boas condições.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBSERVAÇÕES ESSENCIAIS */}
      <section className="mt-10 rounded-3xl bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">Observações Importantes</h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>
            Valores de intervalos expressos em quilômetros; considerar o que
            ocorrer primeiro: tempo ou quilometragem.
          </li>
          <li>Combustível com enxofre abaixo de 50 ppm e Biodiesel até 10%.</li>
          <li>
            Veículos saem com óleo sintético no eixo traseiro; se usar óleo
            mineral, reduzir o período conforme o manual.
          </li>
          <li>
            Operações específicas ou severas exigem plano ajustado pelo
            fabricante.
          </li>
          <li>
            Trocar o óleo do motor conforme quilometragem indicada ou a cada 500
            horas de uso.
          </li>
          <li>Planos incorretos podem acarretar perda de garantia.</li>
        </ul>
      </section>

      {/* QUADROS DE REFERÊNCIA */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Quadros de Intervalos</h2>
        <p className="mt-2 text-slate-700">
          Utilize os quadros abaixo como referência visual para rodoviário e
          fora de estrada.
        </p>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <figure className="rounded-3xl bg-white p-3 shadow">
            <div
              className="relative w-full bg-gray-50 rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/manutencao/quadro-rodoviario-1.png"
                alt="Programa Rodoviário – Intervalos e Atividades"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Programa Rodoviário: Intermediária, X, Y, atividades adicionais
              (Eixo, Gearbox, DPF).
            </figcaption>
          </figure>

          <figure className="rounded-3xl bg-white p-3 shadow">
            <div
              className="relative w-full bg-gray-50 rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/manutencao/quadro-offroad-1.png"
                alt="Programa Off-Road – Intervalos e Atividades"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Programa Fora de Estrada: Revisões X e Y, atividades adicionais.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 mb-4 rounded-3xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white p-8 shadow-xl">
        <h3 className="text-2xl font-bold">Precisa de um plano sob medida?</h3>
        <p className="mt-2 text-white/90">
          Entre em contato e ajustamos o programa conforme sua operação, frota e
          contratos de manutenção.
        </p>
        <div className="mt-4">
          <Link
            href="/contato"
            className="inline-block rounded-xl bg-white/10 px-5 py-2 hover:bg-white/20 transition"
          >
            Falar com Especialista
          </Link>
        </div>
      </section>
    </main>
  );
}
