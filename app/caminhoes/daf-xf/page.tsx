// app/caminhoes/daf-xf/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function DAFXFPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
              Longa Distância Premium
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              DAF XF
              <span className="block text-amber-300 text-xl md:text-2xl mt-1">
                Conforto máximo e eficiência para o transporte rodoviário
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>DAF XF</strong> foi desenvolvido para o transporte de
              longa distância com foco absoluto no motorista e no{" "}
              <strong>Custo Total de Propriedade (TCO)</strong>. Combina cabine
              extremamente confortável, motor PACCAR MX-13 eficiente e
              transmissão automatizada ZF TraXon para máxima produtividade nas
              estradas brasileiras.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Potência
                </p>
                <p className="text-lg font-bold">480–530 cv</p>
                <p className="text-[11px] text-slate-300">
                  Motor PACCAR MX-13 13L
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Foco
                </p>
                <p className="text-lg font-bold">Longa distância</p>
                <p className="text-[11px] text-slate-300">
                  Alto PBTC e rotas rodoviárias
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Conforto
                </p>
                <p className="text-lg font-bold">Super Space Cab</p>
                <p className="text-[11px] text-slate-300">
                  Maior espaço interno da categoria
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold border border-white/40 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica completa
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf_brasil_blue.jpg"
                  alt="DAF XF – caminhão rodoviário de longa distância"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF XF – configuração rodoviária para longa
              distância.
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
              DAF XF: conforto europeu para as estradas brasileiras
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>DAF XF</strong> é referência em{" "}
              <strong>conforto de cabine</strong>, espaço interno e ergonomia,
              oferecendo ao motorista uma jornada menos cansativa e mais segura.
              A cabine de teto alto, especialmente na versão{" "}
              <strong>Super Space Cab</strong>, se destaca pelo amplo volume,
              excelente arrumação e acabamento de nível premium.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              O conjunto mecânico, formado pelo motor{" "}
              <strong>PACCAR MX-13</strong> e pela transmissão automatizada{" "}
              <strong>ZF TraXon</strong>, foi dimensionado para garantir{" "}
              <strong>baixo consumo de combustível</strong>, alta
              disponibilidade mecânica e intervalos de manutenção alongados –
              pilares do baixo TCO para o frotista.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Foco operacional
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Longa distância nacional e internacional</li>
                <li>• Cargas gerais, granel, baú e sider</li>
                <li>• Composições de alto PBTC (bitrens, rodotrens)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Alto conforto e menor fadiga do motorista</li>
                <li>• Eficiência de combustível e baixo TCO</li>
                <li>• Disponibilidade mecânica e robustez de chassi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Cabines e conforto */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines Space Cab e Super Space Cab – conforto para viver na estrada
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Space Cab
              </p>
              <p>
                Cabine de teto alto com excelente espaço vertical e ampla área
                de armazenamento. Ideal para motoristas que passam vários dias
                fora, com boa mobilidade interna e organização.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Super Space Cab
              </p>
              <p>
                Uma das cabines mais espaçosas do mercado, com{" "}
                <strong>maior volume interno</strong>, altura livre generosa e
                área de descanso otimizada. Focada em conforto máximo para
                viagens de longa distância e pernoites frequentes.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Ergonomia e descanso
              </p>
              <p>
                Painel envolvente, bancos com múltiplos ajustes, cama de alta
                densidade, armários, refrigerador e soluções inteligentes de
                armazenamento, tudo pensado para reduzir a fadiga e melhorar a
                qualidade de vida do motorista.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Motorização PACCAR MX-13 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor PACCAR MX-13: potência, torque e eficiência
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor <strong>PACCAR MX-13</strong> de 13 litros foi projetado
                para combinar alto torque em baixas rotações com emissões
                reduzidas e consumo otimizado. Atende aos níveis de emissões
                modernos, com sistema de pós-tratamento eficiente.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Família de motores:</strong> PACCAR MX-13 13L
                </li>
                <li>
                  <strong>Potências típicas:</strong> 480 cv e 530 cv (conforme
                  versão e aplicação)
                </li>
                <li>
                  <strong>Torque:</strong> alto torque disponível em baixas
                  rotações para vencer aclives com carga total
                </li>
                <li>
                  <strong>Tecnologia:</strong> injeção common rail de última
                  geração e pós-tratamento compatível com padrões avançados de
                  emissões
                </li>
                <li>
                  <strong>Freio auxiliar:</strong> MX Engine Brake – freio
                  motor descompressor de alta potência, preservando os freios de
                  serviço em descidas longas
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Foco em economia e durabilidade
              </p>
              <p className="mb-2">
                O MX-13 foi desenvolvido para operar na faixa ideal de
                rendimento, reduzindo o consumo de diesel, garantindo intervalos
                de manutenção longos e entregando durabilidade alinhada às
                exigências de frotas de alta quilometragem.
              </p>
              <p>
                Resultado: <strong>mais km por litro</strong>,{" "}
                <strong>menos tempo parado</strong> e{" "}
                <strong>maior retorno por viagem</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Transmissão ZF TraXon e PCC */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão ZF TraXon e tecnologias de condução
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                ZF TraXon 12v
              </p>
              <p>
                Transmissão automatizada de última geração, com trocas rápidas e
                suaves, baixo ruído e alta eficiência de torque. Mantém o motor
                sempre na faixa ideal de rotação para economia e desempenho.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Modos de condução
              </p>
              <p>
                Modos como <strong>ECO</strong> permitem priorizar economia de
                combustível, enquanto configurações específicas podem favorecer
                desempenho em trechos mais exigentes, trazendo flexibilidade ao
                motorista e à operação.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Predictive Cruise Control (PCC)
              </p>
              <p>
                Piloto automático preditivo que utiliza{" "}
                <strong>dados de GPS e topografia</strong> para antecipar
                aclives e declives, ajustando velocidade e trocas de marcha para
                maximizar a economia de combustível ao longo da rota.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Configurações e TCO */}
        <section id="configuracoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações típicas e foco em baixo TCO
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-sky-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Aplicação principal
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Foco operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    4x2 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Semirreboques leves/médios em rotas mais planas e cargas de
                    menor PBTC.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Menor peso próprio, consumo reduzido e foco em baixo TCO.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x2 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância com maior capacidade legal de carga
                    (eixos adicionais).
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Otimização de carga útil por viagem, mantendo boa economia.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x4 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Altos PBTC, bitrens e rodotrens em rotas exigentes e com
                    aclives acentuados.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Máxima tração e durabilidade do trem de força em composições
                    pesadas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-slate-700">
            Em todas as configurações, o projeto do DAF XF busca reduzir{" "}
            <strong>paradas não programadas</strong>, ampliar os{" "}
            <strong>intervalos de serviço</strong> e entregar uma plataforma
            competitiva em <strong>TCO</strong> para frotas de alta
            quilometragem anual.
          </p>
        </section>

        {/* Bloco 6 – Segurança e ADAS */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Segurança ativa e passiva para motorista e carga
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="text-xs font-semibold text-amber-300 mb-1 uppercase">
                Sistemas ADAS (assistência ao motorista)
              </p>
              <ul className="space-y-1.5">
                <li>• Controle de Cruzeiro Adaptativo (ACC)</li>
                <li>• Frenagem de Emergência Avançada (AEBS)</li>
                <li>• Alerta de Saída de Faixa (LDWS)</li>
                <li>• Recursos que ajudam a reduzir acidentes e fadiga</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Estrutura e visibilidade
              </p>
              <ul className="space-y-1.5">
                <li>
                  • Cabine em aço de alta resistência, com padrões de segurança
                  europeus.
                </li>
                <li>
                  • Amplo para-brisa e retrovisores bem posicionados, garantindo
                  excelente visibilidade do entorno.
                </li>
                <li>
                  • Itens que contribuem para maior proteção do motorista e da
                  carga em diferentes cenários de operação.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – DAF XF
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cavalo-mecânico rodoviário focado em transporte de longa
                    distância, com cabines Space Cab e Super Space Cab.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PACCAR MX-13 13L, alto torque em baixa rotação, com
                    tecnologia de injeção e pós-tratamento para emissões
                    reduzidas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Potências típicas de 480 cv e 530 cv, com torque elevado
                    disponível em rotações baixas, favorecendo economia e
                    desempenho em aclives.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Caixa automatizada ZF TraXon 12 velocidades, integrada ao
                    motor para máxima eficiência de consumo.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Configurações 4x2, 6x2 e 6x4, conforme aplicação, PBTC e
                    tipo de composição (carretas simples, bitrens, rodotrens).
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabines
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Space Cab e Super Space Cab, com foco em ergonomia, área de
                    descanso e amplo espaço interno.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Segurança
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Sistemas ADAS como ACC, AEBS e LDWS (conforme versão),
                    cabine reforçada e boa visibilidade, contribuindo para
                    segurança ativa e passiva.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância com alta eficiência de combustível, conforto
                    máximo ao motorista e baixo Custo Total de Propriedade para
                    frotas de grande porte.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – CARTÃO COM BOTÃO PARA PDF */}
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial (PDF)
            </h2>
            <p className="text-sm text-slate-700 mb-4">
              Consulte os dados completos de dimensões, capacidades, motor,
              transmissão e desempenho do DAF XF.
            </p>
            <a
              href="/fichas-tecnicas/daf-xf.pdf" // ajuste o nome do arquivo conforme o PDF real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              Abrir ficha técnica DAF XF (PDF)
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
