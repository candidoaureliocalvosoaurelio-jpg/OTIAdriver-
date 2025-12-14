// app/caminhoes/scania-super/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function ScaniaSuperPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver, igual FH/Scania */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Linha Pesada Premium
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Scania Super
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                nova referência em eficiência e tecnologia.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O Scania Super de 13 litros foi projetado para entregar até{" "}
              <strong>8% de economia de combustível</strong>, alto torque em
              baixa rotação e um trem de força totalmente integrado. Ideal para
              frotas que buscam o menor Custo Total de Operação (TCO) com máxima
              confiabilidade.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">420–560 hp</p>
                <p className="text-[11px] text-slate-600">
                  Motor Scania Super 13L
                </p>
              </div>

              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">
                  2.300–2.800 Nm
                </p>
                <p className="text-[11px] text-slate-600">
                  Alto torque em baixa rotação
                </p>
              </div>

              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Economia
                </p>
                <p className="text-lg font-bold text-slate-900">até +8%</p>
                <p className="text-[11px] text-slate-600">
                  Redução de consumo de diesel
                </p>
              </div>
            </div>

            {/* Botão único – ver ficha técnica */}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/scania-super.jpg"
                  alt="Scania Super – caminhão rodoviário pesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Scania Super — aplicação rodoviária pesada.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Plataforma Scania Super 13L
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O Scania Super representa a geração mais avançada de motores diesel
              da marca. Com a nova família de 13 litros, o conjunto foi projetado
              para maximizar a eficiência energética, reduzir emissões e suportar
              operações rodoviárias de alta exigência.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A arquitetura atende à norma <strong>Proconve P8 / Euro 6</strong>,
              com foco em robustez, alta durabilidade e compatibilidade com
              combustíveis alternativos como <strong>HVO (diesel renovável)</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Aplicações-chave
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Longa distância nacional e internacional</li>
                <li>• Operações regionais de alta densidade</li>
                <li>• Cargas pesadas e alto CMT</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Redução de consumo de diesel</li>
                <li>• Menor TCO (Custo Total de Operação)</li>
                <li>• Alta disponibilidade mecânica</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motor */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor Scania Super 13L: eficiência e torque em baixa rotação
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor Scania Super foi desenvolvido para entregar alta eficiência
                térmica, torque consistente e emissões reduzidas, mantendo robustez
                para uso contínuo em operações pesadas.
              </p>

              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Faixa de potência:</strong> 420 hp a 560 hp
                </li>
                <li>
                  <strong>Faixa de torque:</strong> 2.300 a 2.800 Nm
                </li>
                <li>
                  <strong>Economia de combustível:</strong> até 8% (vs. geração anterior)
                </li>
                <li>
                  <strong>Emissões:</strong> Proconve P8 / Euro 6
                </li>
                <li>
                  <strong>Pós-tratamento:</strong> Twin SCR para redução eficiente de NOx
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5 text-sm">
              <p className="font-semibold mb-2">Foco: eficiência no mundo real</p>
              <p className="mb-2">
                O conceito Super prioriza torque em baixa rotação e integração
                do trem de força para reduzir consumo, preservar componentes e
                estabilizar desempenho em rotas com variação de relevo.
              </p>
              <p>
                Resultado: menor TCO e maior previsibilidade operacional em frota.
              </p>
            </div>
          </div>
        </section>

        {/* Trem de força e conectividade */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força inteligente e conectividade Scania
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Opticruise
              </p>
              <p className="text-sm text-slate-700">
                Transmissão automatizada com trocas precisas, redução de consumo
                e maior conforto de condução em longos turnos.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Active Prediction (CCAP)
              </p>
              <p className="text-sm text-slate-700">
                Usa dados de topografia/GPS para antecipar aclives e declives,
                ajustando velocidade e marchas para eficiência.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Serviços conectados
              </p>
              <p className="text-sm text-slate-700">
                Telemática para monitorar consumo, estilo de condução,
                disponibilidade e manutenção, apoiando decisões de frota.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Freio auxiliar – Retardador R3500
              </p>
              <p className="text-sm text-slate-700">
                Reduz desgaste dos freios de serviço e aumenta segurança em
                descidas longas com carga total.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl border border-amber-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Modularidade de eixos
              </p>
              <p className="text-sm text-slate-800">
                Configurações <strong>4x2, 6x2, 6x4 e 8x4</strong> para transporte
                rodoviário e aplicações de alto CMT, com foco em estabilidade e durabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Cabines e segurança */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines S, R e XT — segurança e conforto para o motorista
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Cabine S
              </p>
              <p>
                Piso plano, grande espaço interno e foco em conforto para longas
                viagens e pernoites frequentes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Cabine R
              </p>
              <p>
                Equilíbrio entre conforto, visibilidade e facilidade de acesso,
                muito utilizada em operações rodoviárias e regionais.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Linha XT
              </p>
              <p>
                Variantes vocacionais com proteções e ângulo de ataque maior,
                preparadas para ambientes mais severos.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-amber-50 rounded-2xl border border-amber-100 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Sistemas de segurança (ADAS)
              </p>
              <ul className="space-y-1.5">
                <li>• Controle de cruzeiro adaptativo (ACC)</li>
                <li>• Frenagem de emergência avançada (AEB)</li>
                <li>• Alerta de saída de faixa (LDW)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Ergonomia premium
              </p>
              <p>
                Posto de condução com comandos e painel projetados para reduzir
                fadiga, com ótima visibilidade e ajustes finos de posição.
              </p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida (sem id duplicado) */}
        <section id="ficha-tecnica-resumo">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Scania Super
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Scania Super 13L – 6 cilindros em linha, projetado para maior
                    eficiência térmica e emissões reduzidas.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Faixa típica de 420 hp a 560 hp (conforme versão e aplicação).
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Aproximadamente 2.300–2.800 Nm, com pico em rotações mais baixas.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opticruise automatizada, com modos otimizados e integração com CCAP.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Emissões
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Proconve P8 / Euro 6, com Twin SCR e foco em redução de NOx.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    4x2, 6x2, 6x4 e 8x4 (conforme aplicação rodoviária, regional ou alto CMT).
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabines
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    S (piso plano), R (rodoviária) e variantes XT vocacionais reforçadas.
                  </td>
                </tr>

                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância e operações de alta exigência, priorizando redução de consumo e TCO.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Texto de encerramento (igual padrão do Super XT) */}
        <section className="mt-8 space-y-6">
          <p className="text-sm text-slate-700 max-w-xl">
            Este resumo do <strong>Scania Super</strong> foi estruturado para apoiar
            motoristas, frotistas e instrutores técnicos na seleção correta de
            configuração e trem de força, de acordo com a exigência de carga,
            perfil de rota e metas de consumo da operação.
          </p>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
        <section id="ficha-tecnica" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {/* PDF – Ficha técnica */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – Scania R 500 / R 560 A6x4NZ Super (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Dados técnicos completos do{" "}
                <strong>Scania R 500 / R 560 A6x4NZ Super</strong>, incluindo motor,
                transmissão, eixos, capacidades, dimensões e recomendações de aplicação.
              </p>

              <a
                href="/fichas-tecnicas/scania-r500-r560-a6x4nz-super.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* PDF – Símbolos */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Símbolos do painel – Scania (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia oficial com os principais símbolos do painel Scania, níveis de
                alerta e ações recomendadas ao motorista.
              </p>

              <a
                href="/fichas-tecnicas/simbolo-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de símbolos (PDF)
              </a>
            </div>

            {/* PDF – Interruptores */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Interruptores e comandos – Scania (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Material explicativo dos principais interruptores e comandos da cabine
                Scania para uso correto dos sistemas do veículo.
              </p>

              <a
                href="/fichas-tecnicas/interruptor-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de interruptores (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
