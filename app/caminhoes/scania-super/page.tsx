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
              baixa rotação e um trem de força totalmente integrado. Ideal
              para frotas que buscam o menor Custo Total de Operação (TCO)
              com máxima confiabilidade.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">420–560 hp</p>
                <p className="text-[11px] text-slate-600">
                  Motor Scania Super 13L
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">
                  2.300–2.800 Nm
                </p>
                <p className="text-[11px] text-slate-600">
                  Alto torque em baixa rotação
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Economia
                </p>
                <p className="text-lg font-bold text-slate-900">até +8%</p>
                <p className="text-[11px] text-slate-600">
                  Redução de consumo de diesel
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
        {/* Bloco 1 – Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Plataforma Scania Super 13L
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O Scania Super representa a geração mais avançada de motores
              diesel da marca. Com a nova família de 13 litros, o conjunto foi
              projetado para maximizar a eficiência energética, reduzir emissões
              e suportar operações rodoviárias de alta exigência.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A arquitetura atende à norma{" "}
              <strong>Proconve P8 / Euro 6</strong>, com foco em robustez,
              alta durabilidade e compatibilidade com combustíveis alternativos
              como <strong>HVO (diesel renovável)</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Aplicações-chave
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Longa distância nacional e internacional</li>
                <li>• Operações regionais de alta densidade</li>
                <li>• Cargas pesadas e alto CMT</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
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

        {/* Bloco 2 – Motor Super 13L */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor Scania Super 13L: eficiência e torque em baixa rotação
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor Scania Super é considerado o motor de combustão mais
                avançado da marca, com foco em eficiência térmica, alto torque
                e emissões reduzidas.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Faixa de potência:</strong> 420 hp a 560 hp
                </li>
                <li>
                  <strong>Faixa de torque:</strong> 2.300 a 2.800 Nm
                </li>
                <li>
                  <strong>Economia de combustível:</strong> até 8% de redução
                  em relação à geração anterior
                </li>
                <li>
                  <strong>Emissões:</strong> compatível com Proconve P8 / Euro 6
                </li>
                <li>
                  <strong>Sistema Twin SCR:</strong> pós-tratamento otimizado
                  para máxima eficiência na redução de NOx
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Foco em TCO e sustentabilidade
              </p>
              <p className="mb-2">
                O conjunto motor + transmissão + eixos foi desenvolvido como um
                sistema único, reduzindo o consumo de combustível, aumentando
                os intervalos de manutenção e preparando a plataforma para
                combustíveis renováveis.
              </p>
              <p>
                O objetivo é oferecer alta performance sem abrir mão de um TCO
                competitivo em frotas de grande porte.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Trem de força e conectividade */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força inteligente e conectividade Scania
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Opticruise
              </p>
              <p className="text-sm text-slate-700">
                Caixa de câmbio automatizada de última geração, com trocas de
                marcha rápidas e precisas, redução do consumo de combustível e
                maior conforto ao motorista.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Active Prediction (CCAP)
              </p>
              <p className="text-sm text-slate-700">
                Piloto automático inteligente que usa dados de GPS e mapas
                topográficos para antecipar aclives e declives, ajustando
                velocidade e marchas para máxima economia.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Serviços conectados
              </p>
              <p className="text-sm text-slate-700">
                Telemática avançada para monitorar consumo, estilo de condução,
                disponibilidade e manutenção preditiva, apoiando a gestão da
                frota em tempo real.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Freio auxiliar – Retardador R3500
              </p>
              <p className="text-sm text-slate-700">
                Freio auxiliar hidráulico potente, reduz o desgaste dos freios
                de serviço e aumenta a segurança em descidas e operações de
                serra, especialmente com carga total.
              </p>
            </div>
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Modularidade de eixos
              </p>
              <p className="text-sm text-slate-800">
                Configurações <strong>4x2, 6x2, 6x4 e 8x4</strong> atendendo
                desde transporte rodoviário leve até aplicações de alta CMT,
                com foco em tração, estabilidade e durabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Cabines e segurança */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines S, R e XT — segurança e conforto para o motorista
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Cabine S
              </p>
              <p>
                Piso plano, máximo conforto e espaço interno. Ideal para o
                motorista que vive na estrada, com ergonomia pensada para longas
                viagens.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Cabine R
              </p>
              <p>
                Equilíbrio entre conforto, facilidade de acesso e visibilidade.
                Muito utilizada em operações rodoviárias e regionais.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Linha XT
              </p>
              <p>
                Versões vocacionais com para-choques reforçados, maior ângulo
                de ataque e proteção adicional, preparadas para construção,
                obras e mineração.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Sistemas de segurança (ADAS)
              </p>
              <ul className="space-y-1.5">
                <li>• Controle de cruzeiro adaptativo (ACC)</li>
                <li>• Frenagem de emergência avançada (AEB)</li>
                <li>• Alerta de saída de faixa (LDW)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Ergonomia premium
              </p>
              <p>
                Painel, comandos, bancos e cama foram projetados para reduzir
                a fadiga, com excelente visibilidade, posição de condução
                ajustável e conforto para pernoites frequentes.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Ficha técnica resumida (cabeçalho azul-claro) */}
        <section id="ficha-tecnica">
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
                    Scania Super 13L – 6 cilindros em linha, projetado para
                    maior eficiência térmica e emissões reduzidas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Faixa típica de 420 hp a 560 hp (conforme versão e
                    aplicação).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Aproximadamente 2.300–2.800 Nm, com pico em rotações mais
                    baixas, favorecendo economia e desempenho em rampas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Caixa automatizada Scania Opticruise, com modos de condução
                    otimizados e integração com Active Prediction (CCAP).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Emissões
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Atende à norma Proconve P8 / Euro 6, com sistema Twin SCR e
                    foco em redução de NOx e particulados.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Eixos 4x2, 6x2, 6x4 e 8x4, conforme aplicação (rodoviária,
                    regional ou vocacional pesada).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabines
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    S (piso plano), R (rodoviária) e variantes XT vocacionais
                    reforçadas.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância, operações regionais de alta exigência e
                    aplicações com alto CMT, com prioridade absoluta para
                    redução de consumo e TCO.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bloco final – cartão branco com botão azul (PDF oficial) + links complementares */}
        <section className="mt-10">
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – Scania R 500 / R 560 A6x4NZ Super (PDF)
            </h2>

            <p className="text-sm text-slate-700">
              Acesse a ficha técnica oficial da Scania com dados completos de
              motor, transmissão, eixos, dimensões e capacidades para
              dimensionamento da frota.
            </p>

            <div className="mt-4">
              <a
                href="/fichas-tecnicas/scania-r500-r560-a6x4nz-super.pdf"
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

            {/* Links complementares (mesmo padrão dos outros Scania) */}
            <div className="border-t pt-4 mt-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">
                Materiais complementares do motorista:
              </p>

              <ul className="text-sm text-slate-700 space-y-1">
                <li>
                  •{" "}
                  <a
                    href="/fichas-tecnicas/simbolo-scania.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Símbolos do painel – Scania (PDF)
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="/fichas-tecnicas/interruptor-scania.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Interruptores e comandos – Scania (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
