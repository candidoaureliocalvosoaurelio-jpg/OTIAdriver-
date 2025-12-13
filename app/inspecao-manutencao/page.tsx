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
          o programa otimizado, checklist diário para motoristas e um modelo de
          grupos de manutenção (lógica geral) usado por fabricantes.
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
                <li>
                  Sistema de freios (pastilhas, lonas, tambores, tubulações);
                </li>
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
              rodado ou por horas de motor.
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

        {/* (tabela mantida exatamente como estava no seu código) */}
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
                  <input type="checkbox" aria-label="Pneus exigem serviço" />
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
                  <input type="checkbox" aria-label="Porcas exigem serviço" />
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
                  <input type="checkbox" aria-label="Pressão exige serviço" />
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
                  Testar em baixa velocidade (desviar se puxa para um lado ou há
                  ruídos anormais).
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
                  <input type="checkbox" aria-label="Freio de estacionamento OK" />
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
                  <input type="checkbox" aria-label="Faróis exigem serviço" />
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
                  <input type="checkbox" aria-label="Luzes traseiras exigem serviço" />
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
                  <input type="checkbox" aria-label="Setas exigem serviço" />
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
                  <input type="checkbox" aria-label="Óleo do motor exige serviço" />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar na vareta, se aplicável, sempre com o veículo nivelado.
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
                  <input type="checkbox" aria-label="Arrefecimento exige serviço" />
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
                  <input type="checkbox" aria-label="Combustível exige serviço" />
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
                  <input type="checkbox" aria-label="Limpadores exigem serviço" />
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
                  <input type="checkbox" aria-label="Espelhos exigem serviço" />
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
                  <input type="checkbox" aria-label="Documentação exige atenção" />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Conferir validade e conformidade com a legislação e a nota fiscal
                  da carga.
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
                  <input type="checkbox" aria-label="Bateria exige serviço" />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Verificar corrosão nos terminais e cabos soltos ou danificados.
                </td>
              </tr>

              <tr>
                <td className="px-3 py-2 align-top font-semibold text-slate-800">
                  Sistema Elétrico
                </td>
                <td className="px-3 py-2 align-top text-slate-700">
                  Buzina
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Buzina OK" />
                </td>
                <td className="px-3 py-2 text-center align-top">
                  <input type="checkbox" aria-label="Buzina exige serviço" />
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
                  <input type="checkbox" aria-label="Extintor exige serviço" />
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
                  <input type="checkbox" aria-label="Triângulo exige serviço" />
                </td>
                <td className="px-3 py-2 align-top text-slate-500 text-xs">
                  Conferir se está completo e em local de fácil acesso.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* NOVO BLOCO – GRUPOS DE MANUTENÇÃO (LÓGICA GERAL) */}
      <section className="mt-12 space-y-6">
        <header className="rounded-3xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">
            Grupos de Manutenção de Caminhões (lógica geral dos fabricantes)
          </h2>
          <p className="mt-2 text-slate-700">
            Os planos são geralmente divididos em estágios que se repetem em
            ciclos de quilometragem ou tempo. A lógica abaixo é uma referência
            prática e amplamente utilizada para organizar paradas, reduzir
            indisponibilidade e padronizar custos.
          </p>
        </header>

        {/* 1) Básica */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            1. Manutenção preventiva básica (inspeção e fluidos)
          </h3>
          <p className="mt-2 text-slate-700">
            Foca nos serviços mais frequentes, essenciais para a segurança e o
            monitoramento contínuo do veículo.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Grupo típico
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Nome comum (exemplo)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Frequência (referência)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Foco do serviço
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">
                    Grupo A (rápida/simples)
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Inspeção, check-up de segurança
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    15.000 a 30.000 km
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Verificação de níveis e itens de segurança (luzes, pneus,
                    fluidos, articulações, aperto de rodas). Serviço rápido.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">
                    Grupo B (intermediária)
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Troca de óleo e filtros básicos
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    45.000 a 90.000 km
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Troca de óleo do motor e filtros básicos. Inspeção mais
                    detalhada do trem de força e freios.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Observação: a quilometragem real varia conforme aplicação, severidade,
            combustível, lubrificantes homologados e telemetria.
          </p>
        </article>

        {/* 2) Completa */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            2. Manutenção preventiva completa (trem de força)
          </h3>
          <p className="mt-2 text-slate-700">
            Grupos mais abrangentes, envolvendo fluidos de transmissão/eixos e
            inspeção profunda de sistemas vitais.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Grupo típico
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Nome comum (exemplo)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Frequência (referência)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    Foco do serviço
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">
                    Grupo C (completa/grande)
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Manutenção de trem de força
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    120.000 a 180.000 km
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Troca de óleo da transmissão e dos eixos. Substituição de
                    filtros mais complexos. Inspeção de suspensão e embreagem
                    (se manual).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">
                    Grupo D (especializada/max)
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Componentes de longa vida
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    240.000 a 360.000 km
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    Troca de fluido/filtros do sistema hidráulico/direção.
                    Ajustes finos (válvulas/injetores), inspeção de turbocompressor
                    e pós-tratamento (SCR/EGR).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* 3) Corretiva/Preditiva */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            3. Manutenção corretiva e preditiva (adicional)
          </h3>
          <p className="mt-2 text-slate-700">
            Este grupo não é baseado apenas em quilometragem. Ele depende de
            tempo de uso, condição de operação, severidade e dados coletados do
            veículo.
          </p>

          <div className="mt-4 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-slate-50 p-4">
              <h4 className="font-semibold text-slate-800">
                Manutenção vocacional
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Em aplicações severas (off-road, poeira, cargas pesadas), pode
                haver ciclos mais curtos com foco em filtros de ar e inspeções
                de eixos/suspensão devido ao estresse operacional.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <h4 className="font-semibold text-slate-800">
                Serviços de conectividade
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                A telemática permite manutenção preditiva: o caminhão envia dados
                sobre desgaste e condição, indicando o melhor momento de troca,
                independente do ciclo fixo do hodômetro.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <h4 className="font-semibold text-slate-800">
                Revisões de garantia
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Serviços obrigatórios em quilometragens específicas (geralmente
                no início da vida útil) para manter a garantia e o histórico de
                manutenção conforme o fabricante.
              </p>
            </div>
          </div>
        </article>

        {/* Modularidade */}
        <article className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">
            Por que a modularidade é a chave
          </h3>
          <p className="mt-2 text-slate-700">
            Fabricantes utilizam manutenção modular para agrupar serviços e
            melhorar a eficiência operacional.
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-slate-50 p-4">
              <h4 className="font-semibold text-slate-800">
                Reduzir tempo de parada
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Em vez de parar o caminhão várias vezes, o transportador agenda
                uma parada maior (Grupo C/D) para cobrir os serviços do ciclo e
                paradas rápidas (Grupo A) entre elas.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <h4 className="font-semibold text-slate-800">Otimizar o TCO</h4>
              <p className="mt-2 text-sm text-slate-700">
                Ao prever custos via planos de serviço, o gestor melhora
                previsibilidade financeira, padroniza peças/mão de obra e reduz
                risco de intervenções emergenciais.
              </p>
            </div>
          </div>

          <div className="mt-5 text-sm text-slate-700">
            Se você quiser, eu posso montar um exemplo prático de calendário de
            manutenção (A/B/C/D) para um caminhão rodoviário e outro vocacional,
            alinhado a horas de motor e severidade.
          </div>
        </article>
      </section>
    </main>
  );
}
