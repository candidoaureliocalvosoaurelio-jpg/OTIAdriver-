// app/caminhoes/iveco-s-way-540-6x4/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function IvecoSWay5406x4Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Linha Pesada Premium
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Iveco S-Way 540 6x4
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                conforto europeu, alta eficiência e conectividade de fábrica.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>Iveco S-Way 540 6x4</strong> é o extrapesado rodoviário
              da nova geração Iveco, combinando cabine de última geração,{" "}
              <strong>motor FPT Cursor 13 de 540 cv</strong>, transmissão
              automatizada Hi-Tronix e pacotes de segurança avançada. Ideal para
              operações de longa distância que exigem baixo consumo, alto
              desempenho em rampas e máxima disponibilidade da frota.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">540 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor FPT Cursor 13
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">até 2.450 Nm</p>
                <p className="text-[11px] text-slate-600">
                  Força em baixa rotação
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Conectividade
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Serviços digitais
                </p>
                <p className="text-[11px] text-slate-600">
                  Monitoramento da frota em tempo real
                </p>
              </div>
            </div>

            {/* Botões (COMPLETO conforme solicitado) */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver ficha técnica resumida
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition"
              >
                Abrir materiais em PDF
              </Link>

              {/* Link para a página da caixa (TraXon) */}
              <Link
                href="/caminhoes/caixa-iveco/s-way"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 transition"
              >
                Ver caixa ZF TraXon (S-Way)
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/iveco-s-way-540-6x4.jpg"
                  alt="Iveco S-Way 540 6x4 – caminhão rodoviário extrapesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Iveco S-Way 540 6x4 — aplicação rodoviária
              pesada.
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
              Plataforma Iveco S-Way – foco em aerodinâmica e conforto
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>S-Way</strong> foi desenvolvido com ênfase em
              aerodinâmica, ergonomia e tecnologia embarcada. O desenho da
              cabine reduz o arrasto de ar e contribui diretamente para a{" "}
              <strong>economia de combustível</strong>, ao mesmo tempo em que
              oferece ambiente amplo e silencioso para o motorista.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A arquitetura atende à{" "}
              <strong>legislação de emissões Proconve P8 / Euro 6</strong> por
              meio de sistema SCR e gerenciamento eletrônico de alta precisão,
              garantindo durabilidade, intervalos de manutenção otimizados e
              menor impacto ambiental.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Aplicações-chave
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Longa distância nacional</li>
                <li>• Corredores logísticos com alto fluxo</li>
                <li>• Carga geral e frigorificada</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Redução de consumo de diesel</li>
                <li>• Menor TCO e alta disponibilidade</li>
                <li>• Cabine moderna que ajuda a reter motoristas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Motor Cursor 13 540 cv */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor FPT Cursor 13 540 cv: força e elasticidade em baixa rotação
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor <strong>FPT Cursor 13</strong> é referência em robustez
                e capacidade de torque, atendendo a operações rodoviárias
                severas com composições de alto PBTC.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Cilindrada:</strong> 12,9 litros, 6 cilindros em linha
                </li>
                <li>
                  <strong>Potência máxima:</strong> 540 cv (faixa rodoviária)
                </li>
                <li>
                  <strong>Torque:</strong> até 2.450 Nm em baixa rotação
                </li>
                <li>
                  <strong>Emissões:</strong> Proconve P8 / Euro 6 com sistema
                  SCR
                </li>
                <li>
                  <strong>Foco:</strong> alta durabilidade, elasticidade e baixo
                  consumo em regime de cruzeiro
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Eficiência e TCO competitivo
              </p>
              <p className="mb-2">
                A calibração do Cursor 13 no S-Way 540 6x4 prioriza torque
                disponível em baixas rotações, permitindo manter velocidades de
                cruzeiro com menor uso de acelerador e menos trocas de marcha.
              </p>
              <p>
                O resultado é <strong>redução de consumo</strong>, menor
                desgaste de componentes e um <strong>TCO</strong> mais
                competitivo ao longo da vida útil do veículo.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Trem de força e conectividade */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão Hi-Tronix, tração 6x4 e serviços conectados Iveco
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Hi-Tronix
              </p>
              <p className="text-sm text-slate-700">
                Transmissão automatizada de 12 velocidades, com trocas rápidas e
                suaves, modos de condução específicos e recursos para otimizar o
                consumo em rota.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Tração 6x4
              </p>
              <p className="text-sm text-slate-700">
                Conjunto de eixos traseiros tracionados ideal para implementos
                pesados e composições de alto PBTC, com foco em tração e
                estabilidade.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Serviços conectados
              </p>
              <p className="text-sm text-slate-700">
                Plataforma de conectividade que permite monitorar consumo,
                estilo de condução, localização e manutenção, apoiando decisões
                de gestão da frota em tempo real.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Freios auxiliares
              </p>
              <p className="text-sm text-slate-700">
                Freio motor e freio auxiliar integrados ao trem de força,
                aumentando a segurança em descidas longas e reduzindo o desgaste
                dos freios de serviço.
              </p>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Adequação a diferentes composições
              </p>
              <p className="text-sm text-slate-800">
                Configuração 6x4 vocacionada a carretas de 3 eixos, bitrens e
                outros conjuntos extrapesados que operam em rodovias com trechos
                de serra e aclives frequentes.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Cabine, ergonomia e segurança */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabine S-Way: ergonomia, espaço interno e foco no motorista
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Ambiente de longa distância
              </p>
              <p>
                Cabine com ampla área interna, cama confortável, múltiplos
                porta-objetos e isolamento acústico aprimorado, ideal para quem
                passa vários dias na estrada.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Ergonomia e comandos
              </p>
              <p>
                Painel envolvente, comandos ao alcance das mãos e volante com
                múltiplas regulagens, favorecendo postura correta e redução de
                fadiga ao longo da jornada.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Tecnologia a bordo
              </p>
              <p>
                Painel digital, multimídia com conectividade a smartphones e
                recursos de conectividade que integram veículo, motorista e
                base operacional.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Sistemas de segurança (ADAS)
              </p>
              <ul className="space-y-1.5">
                <li>• Controle eletrônico de estabilidade (ESP)</li>
                <li>• Assistente de partida em rampa (HSA)</li>
                <li>• Sistemas de alerta e apoio à frenagem de emergência*</li>
              </ul>
              <p className="text-[11px] text-slate-500 mt-2">
                *Itens podem variar conforme versão e pacote.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Clima e conforto
              </p>
              <p>
                Ar-condicionado, climatização eficiente, cortinas, iluminação
                interna em LED e tomadas / USB posicionadas para facilitar o dia
                a dia do motorista.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Ficha técnica resumida */}
        <section id="ficha-tecnica" className="scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Iveco S-Way 540 6x4
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Linha Iveco S-Way – extrapesado rodoviário de nova geração,
                    focado em aerodinâmica, conectividade e conforto.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    FPT Cursor 13 – 6 cilindros em linha, cerca de 12,9 L de
                    cilindrada, com sistema de emissões SCR (Proconve P8 / Euro
                    6).
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Potência em torno de 540 cv e torque até aproximadamente
                    2.450 Nm, privilegiando força em baixas rotações.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Câmbio automatizado Hi-Tronix de 12 velocidades, com modos
                    de condução específicos e foco em economia de combustível.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração / eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Configuração 6x4 com dois eixos traseiros tracionados,
                    adequada a implementos pesados e composições de alto PBTC.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabine
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cabine S-Way de nova geração, com foco em ergonomia, conforto
                    de pernoite, amplo espaço interno e soluções de
                    armazenamento.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Segurança
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Sistemas de estabilidade, assistência em rampa, freios
                    auxiliares e recursos avançados de apoio ao motorista,
                    conforme versão e pacote.
                  </td>
                </tr>

                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância e operações rodoviárias de alto volume, com
                    prioridade para economia de combustível, conforto do
                    motorista e confiabilidade em composições extrapesadas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (somente 2 links) */}
        <section id="materiais-pdf" className="mt-10 scroll-mt-24">
          <div className="grid gap-6 md:grid-cols-2">
            {/* PDF – Ficha técnica oficial Iveco S-Way 540 6x4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – Iveco S-Way 540 6x4 (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Dados completos de motor, transmissão, eixos, capacidades,
                dimensões e configurações do{" "}
                <strong>Iveco S-Way 540 6x4</strong>.
              </p>

              <a
                href="/fichas-tecnicas/iveco-s-way-540-6x4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* PDF – Símbolos e Luzes do Painel Iveco S-Way */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Símbolos do painel – Iveco S-Way (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia completo de símbolos, luzes de advertência e alertas do
                painel do <strong>Iveco S-Way</strong>, com orientações práticas
                para agir corretamente durante a operação.
              </p>

              <a
                href="/fichas-tecnicas/simbolos-iveco-sway.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de símbolos (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINAL – Destaque Máximo TraXon (continua) */}
        <section className="mt-14 rounded-3xl bg-slate-900 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer se aprofundar na transmissão ZF TraXon do Iveco S-Way?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-300">
              Acesse a página completa com especificações, funções inteligentes,
              operação, integração com freio motor e boas práticas.
            </p>

            <div className="mt-6">
              <Link
                href="/caminhoes/caixa-iveco/s-way"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-sky-600 to-blue-700
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-sky-600/30
                           hover:from-sky-700 hover:to-blue-800
                           hover:shadow-xl hover:shadow-sky-700/40
                           focus:outline-none focus:ring-4 focus:ring-sky-300
                           transition-all duration-200"
              >
                Acessar página completa TraXon
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
