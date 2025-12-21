// app/caminhoes/vw-constellation-33480-6x4/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function VolkswagenConstellation33480Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – vocacional Off-Road, padrão FH/Scania/XT */}
      <section className="w-full border-b border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              Linha Vocacional Constellation – Off-Road
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-slate-900">
              Volkswagen Constellation 33.480 6x4
              <span className="block text-amber-500 text-xl md:text-2xl mt-1">
                robustez extrapesada com Pacote Off-Road de série
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>VW Constellation 33.480 6x4</strong> foi projetado para
              operações vocacionais severas, combinando o motor{" "}
              <strong>MAN D26 de 13 litros</strong>, transmissão automatizada{" "}
              <strong>V-Tronic de 12 marchas</strong> e o novo{" "}
              <strong>Pacote Off-Road de série</strong>, com foco em robustez,
              conforto e alta disponibilidade em qualquer terreno.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">480 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor MAN D26 13L Euro 6
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">2.400 Nm</p>
                <p className="text-[11px] text-slate-600">
                  entre 930 e 1.350 rpm
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  PBTC homologado
                </p>
                <p className="text-lg font-bold text-slate-900">74 t</p>
                <p className="text-[11px] text-slate-600">
                  Composições extrapesadas 6x4
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
                  src="/images/trucks/vw-constellation-33480-6x4.jpg"
                  alt="Volkswagen Constellation 33.480 6x4 – caminhão vocacional Off-Road"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Volkswagen Constellation 33.480 6x4 — aplicações
              extrapesadas em rotas mistas e fora de estrada.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* 1 – Eficiência e performance (motor MAN D26) */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Motor MAN D26 480 cv: força contínua em qualquer terreno
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O Constellation 33.480 6x4 utiliza o{" "}
              <strong>motor MAN D26 de 13 litros</strong>, com potência máxima
              de <strong>480 cv</strong> e torque de{" "}
              <strong>2.400 Nm entre 930 e 1.350 rpm</strong>. O conjunto atende
              às exigências <strong>Proconve P8 (Euro 6)</strong> com um sistema
              de emissões que combina <strong>EGR + SCR</strong>, garantindo
              alta performance com menor consumo de combustível.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              Com <strong>PBTC homologado de 74 toneladas</strong>, o 33.480 é
              vocacionado para composições extrapesadas em rotas mistas e
              trechos fora de estrada, entregando força em aclives prolongados
              e retomadas mesmo em pisos de baixa aderência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Características do motor
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• MAN D26 – 13 L, 6 cilindros em linha.</li>
                <li>• 480 cv com curva de torque plana.</li>
                <li>• Sistema EGR + SCR para emissões P8.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Benefícios para a operação
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Melhor aproveitamento de potência em rotas severas.</li>
                <li>• Menor consumo específico de combustível.</li>
                <li>• Capacidade para 74 t de PBTC homologado.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2 – Transmissão V-Tronic e funções Off-Road */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão automatizada V-Tronic com funções Rock-free e Off-Road
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Caixa ZF 12TX 2824 TO
              </p>
              <p>
                Transmissão automatizada <strong>V-Tronic de 12 marchas</strong>,
                dimensionada para aplicações extrapesadas, com relações
                adequadas para arrancadas com carga máxima.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Função Rock-free
              </p>
              <p>
                Auxilia a saída de <strong>atolamentos e buracos</strong> ao
                permitir pequenas oscilações do veículo, recuperando tração em
                terrenos de lama ou areia fofa.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Função Off-Road
              </p>
              <p>
                Ajusta a lógica de trocas para priorizar{" "}
                <strong>tração e estabilidade</strong>, mantendo o caminhão em
                marchas mais adequadas ao piso irregular.
              </p>
            </div>
          </div>
        </section>

        {/* 3 – Pacote Off-Road de série */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Pacote Off-Road de série: robustez, conforto e visibilidade
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <ul className="space-y-2">
                <li>
                  • <strong>Para-choque metálico</strong> dimensionado para
                  impactos em obras, minas e estradas de terra.
                </li>
                <li>
                  • <strong>Suspensão pneumática de cabine</strong>, reduzindo
                  vibrações e fadiga do motorista.
                </li>
                <li>
                  • <strong>Novo banco premium</strong> com revestimento
                  lavável, múltiplos ajustes e apoio lombar.
                </li>
                <li>
                  • <strong>Volante multifuncional</strong> com coluna de
                  direção ajustável em altura e profundidade.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="font-semibold mb-2 text-amber-300 uppercase text-xs">
                Visibilidade e segurança
              </p>
              <p className="mb-2">
                O novo pacote traz <strong>DRL integrado aos faróis</strong>,
                luzes de posição e <strong>lanternas traseiras em LED</strong>,
                aumentando a percepção do veículo em qualquer condição de
                luminosidade.
              </p>
              <p>
                Junto com ar-condicionado, rádio com bluetooth e todos os itens
                de conforto, o resultado é uma cabine mais moderna, segura e
                preparada para longas jornadas.
              </p>
            </div>
          </div>
        </section>

        {/* 4 – Segurança ativa e tecnologia Highline */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Segurança ativa de série e tecnologia Highline opcional
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">
                Itens de segurança ativa
              </p>
              <ul className="space-y-1.5">
                <li>
                  • <strong>Assistente de partida em rampa (HSA)</strong> —
                  facilita saídas em aclives com o veículo carregado.
                </li>
                <li>
                  • <strong>Controle de estabilidade (ESC)</strong> — atua em
                  curvas e desvios bruscos, ajudando a manter o caminhão
                  estabilizado.
                </li>
                <li>
                  • <strong>Controle de tração (ASR)</strong> — identifica perda
                  de aderência e gerencia torque e frenagem nas rodas motrizes.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-5">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Pacote Highline (opcional)
              </p>
              <ul className="space-y-1.5">
                <li>
                  • <strong>Painel de instrumentos 100% digital</strong> com
                  tela de 10", mais de 80 funcionalidades e alta visibilidade.
                </li>
                <li>
                  • <strong>Central multimídia de 7"</strong> com espelhamento
                  de smartphone e suporte a assistentes de voz.
                </li>
                <li>
                  • Interface integrada ao painel, permitindo visualizar dados
                  da operação com poucos toques.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5 – Aplicações típicas */}
        <section id="aplicacoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações ideais do VW Constellation 33.480 6x4
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Extrapesado rodoviário/Off-Road</h3>
              <p>
                Composições de até 74 t de PBTC em rotas mistas que combinam
                trechos pavimentados e estradas de terra.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Mineração e construção</h3>
              <p>
                Transporte de agregados, minério e apoio logístico em obras de
                infraestrutura com tráfego intenso em pisos irregulares.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Segmento florestal e agro</h3>
              <p>
                Operações com carga volumosa e pesada em áreas rurais, estradas
                de terra e acessos com baixa aderência.
              </p>
            </div>
          </div>
        </section>

        {/* 6 – Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – VW Constellation 33.480 6x4
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    MAN D26 – 13 L, 6 cilindros em linha, 480 cv e 2.400 Nm,
                    com sistema de emissões EGR + SCR atendendo ao Proconve P8
                    (Euro 6).
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Automatizada V-Tronic – ZF 12TX 2824 TO, 12 marchas, com
                    funções Rock-free e Off-Road para otimização de tração.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração / configuração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x4 com dois eixos traseiros motrizes, vocacionado para
                    aplicações extrapesadas em rotas mistas e Off-Road.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Pacote Off-Road
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Para-choque metálico, suspensão pneumática de cabine, banco
                    premium lavável com ajustes, volante multifuncional e DRL
                    com lanternas em LED.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Segurança ativa
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Assistente de partida em rampa (HSA), controle de
                    estabilidade (ESC) e controle de tração (ASR) como itens de
                    série.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tecnologia Highline
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Painel digital de 10" com mais de 80 funcionalidades e
                    central multimídia de 7" com espelhamento de smartphone
                    (opcionais, conforme pacote).
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    PBTC homologado
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Até 74.000 kg (74 t), conforme configuração e legislação
                    brasileira vigente.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
<section id="ficha-tecnica" className="mt-10">
  <div className="grid gap-6 md:grid-cols-2">

    {/* Card 1 – Ficha técnica oficial */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Ficha técnica oficial – Volkswagen Constellation 33.480 6x4 (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Acesse a ficha técnica oficial com os dados completos do{" "}
        <strong>Constellation 33.480 6x4</strong>: motor, transmissão,
        capacidades, dimensões, configurações e detalhes dos pacotes
        Off-Road e Highline.
      </p>

      <a
        href="/fichas-tecnicas/vw-constellation-33480-6x4.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir ficha técnica (PDF)
      </a>
    </div>

    {/* Card 2 – Luzes de aviso */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Luzes de Aviso – Volkswagen Caminhões (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Consulte o guia oficial de luzes de aviso e símbolos do painel dos
        caminhões Volkswagen. Material essencial para identificar alertas,
        compreender significados e agir corretamente durante a operação.
      </p>

      <a
        href="/fichas-tecnicas/luzes-aviso-vw.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir guia de luzes de aviso (PDF)
      </a>
    </div>
  {/* LINK – Página Caixa Volkswagen */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Página completa – Caixa Volkswagen (TRAXON)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Acesse a página técnica completa com explicação do funcionamento
                da transmissão V-Tronic, modos de operação, boas práticas e
                sinais de atenção.
              </p>

              <Link
                href="/caminhoes/volkswagen/caixa-volkswagen"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Acessar página da Caixa Volkswagen
              </Link>
            </div>
          </div>

          {/* CTA FINAL – Destaque máximo para Caixa Volkswagen */}
          <section className="mt-14 rounded-3xl bg-slate-900 p-8 md:p-10 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Quer se aprofundar na transmissão TRAXON ?
              </h3>

              <p className="mt-2 max-w-2xl text-slate-300">
                Acesse o conteúdo completo com funcionamento, modos de operação,
                boas práticas e pontos de atenção para reduzir consumo e
                aumentar a vida útil do conjunto.
              </p>

              <div className="mt-6">
                <Link
                  href="/caminhoes/volkswagen/caixa-volkswagen"
                  className="inline-flex items-center justify-center rounded-2xl
                             bg-gradient-to-r from-sky-600 to-blue-700
                             px-12 py-4 text-base font-extrabold text-white
                             shadow-lg shadow-sky-600/30
                             hover:from-sky-700 hover:to-blue-800
                             hover:shadow-xl hover:shadow-sky-700/40
                             focus:outline-none focus:ring-4 focus:ring-sky-300
                             transition-all duration-200"
                >
                  Acessar página completa Caixa Volkswagen
                </Link>
              </div>
            </div>
          </section>
        </section>

        {/* Navegação final */}
        <section className="flex flex-wrap gap-3">
          <Link
            href="/caminhoes"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition"
          >
            Ver todos os caminhões
          </Link>
        </section>
      </section>
    </main>
  );
}
