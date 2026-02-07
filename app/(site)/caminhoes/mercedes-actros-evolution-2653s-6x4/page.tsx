// app/caminhoes/mercedes-actros-evolution-2653s-6x4/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function MercedesActrosEvolution2653S6x4Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão tipográfico FH/Scania */}
      <section className="w-full border-b border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              Linha Rodoviária Pesada
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-slate-900">
              Mercedes-Benz Actros Evolution 2653 S 6x4
              <span className="block text-sky-500 text-xl md:text-2xl mt-1">
                o mais completo e seguro da categoria
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>Actros Evolution</strong> representa um novo patamar de{" "}
              confiabilidade, disponibilidade, eficiência e conforto na linha
              pesada Mercedes-Benz. Na configuração{" "}
              <strong>2653 S 6x4</strong>, combina alta potência, capacidade de
              tração elevada e o pacote de segurança mais completo da
              categoria, atendendo operações de alto PBTC/CMT em rodotrens e
              bitrens.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">530 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor OM 471 Evolution
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">2.600 Nm</p>
                <p className="text-[11px] text-slate-600">
                  Alto desempenho em rotas mistas
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  CMT / Tração
                </p>
                <p className="text-lg font-bold text-slate-900">até 120 t</p>
                <p className="text-[11px] text-slate-600">
                  6x4 com redução nos cubos (opcional)
                </p>
              </div>
            </div>

            {/* Botão – ver ficha técnica */}
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
                  src="/images/trucks/mercedes-actros-evolution-2653s-6x4.jpg"
                  alt="Mercedes-Benz Actros Evolution 2653 S 6x4 – caminhão rodoviário pesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Mercedes-Benz Actros Evolution 2653 S 6x4 —
              cavalo-mecânico extrapesado para rodotrens e bitrens.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Visão geral do modelo */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Foco no modelo 2653 S 6x4: alta tração e performance
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>Actros Evolution 2653 S 6x4</strong> é a configuração de
              tração máxima e alta potência da família Actros Evolution, voltada
              ao transporte de cargas pesadas em{" "}
              <strong>rodotrens, bitrens e composições extrapesadas</strong> em
              rotas predominantemente rodoviárias ou mistas (asfalto/terra).
            </p>
            <p className="text-sm md:text-base text-slate-700">
              Com <strong>530 cv</strong> e <strong>2.600 Nm</strong> de torque,
              o conjunto foi dimensionado para entregar{" "}
              <strong>alto desempenho, economia de combustível</strong> e{" "}
              <strong>conforto ao motorista</strong>, mantendo a marca registrada
              da Mercedes-Benz em segurança ativa e tecnologias de assistência
              à condução.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Aplicações-alvo
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Rodotrens e bitrens de alto PBTC</li>
                <li>• Transporte extrapesado longo curso</li>
                <li>• Rotas mistas (asfalto/terra)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Benefícios principais
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Pacote de segurança mais completo da categoria</li>
                <li>• Alta disponibilidade e confiabilidade</li>
                <li>• Conforto e ergonomia em nível premium</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trem de força */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força Mercedes-Benz: robustez, desempenho e eficiência
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O trem de força do <strong>Actros Evolution</strong> é
                integralmente desenvolvido pela Mercedes-Benz, garantindo
                compatibilidade total entre motor, transmissão e eixos, com{" "}
                <strong>foco em desempenho, economia e durabilidade</strong>.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Motorização:</strong> gama de potências com 449, 476,
                  495 e 530 cv, dimensionadas para diferentes aplicações, todas
                  com foco em eficiência e longa vida útil.
                </li>
                <li>
                  <strong>Câmbio automatizado inteligente:</strong> trocas de
                  marchas rápidas e precisas, melhorando desempenho, consumo e
                  conforto na condução.
                </li>
                <li>
                  <strong>Eixos traseiros sem redução nos cubos:</strong>{" "}
                  opção ideal para aplicações rodoviárias de alto desempenho,
                  com menor perda mecânica.
                </li>
                <li>
                  <strong>Eixos com redução nos cubos (opcionais):</strong>{" "}
                  agregam força e resistência em operações extrapesadas,
                  permitindo CMT de até <strong>120 toneladas</strong> na
                  configuração 2653 S 6x4 metálico.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5 text-sm">
              <p className="font-semibold mb-2">
                Foco em CMT e eficiência de combustível
              </p>
              <p className="mb-2">
                A combinação de motorização potente, câmbio automatizado
                inteligente e eixos configuráveis permite que o Actros
                Evolution trabalhe com <strong>altas composições de peso</strong>{" "}
                mantendo consumo competitivo e disponibilidade elevada.
              </p>
              <p>
                Resultado: <strong>mais carga útil por viagem</strong>,{" "}
                <strong>menor custo por tonelada transportada</strong> e{" "}
                <strong>maior retorno para a frota</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Segurança e ADAS */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Segurança completa: o mais seguro da categoria
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Assistente Ativo de Frenagem (ABA 5)
              </p>
              <p>
                Sistema de frenagem autônoma capaz de reconhecer veículos,
                objetos e, em avanço importante, também{" "}
                <strong>pedestres</strong>, reduzindo drasticamente o risco de
                colisões e protegendo vidas.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                MirrorCam
              </p>
              <p>
                Retrovisores substituídos por câmeras, com{" "}
                <strong>campo de visão ampliado</strong>, auxílio em manobras,
                melhor visão noturna e ganho aerodinâmico, contribuindo para
                economia de combustível.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Sistemas ADAS
              </p>
              <p>
                Inclui Assistente Ativo de Proximidade, Piloto Automático
                Adaptativo com limitador de velocidade, Assistente de Fadiga e
                Assistente de Ponto Cego, apoiando o motorista em todo o trajeto.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-800 mb-1 uppercase">
                Outros recursos de segurança
              </p>
              <ul className="space-y-1.5">
                <li>• Farol alto inteligente</li>
                <li>• Retarder integrado</li>
                <li>• Airbag para o motorista</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Resultado para a operação
              </p>
              <p>
                Redução de acidentes, menor risco operacional, proteção à vida e
                ao patrimônio, alinhado às exigências modernas de segurança em
                transporte de cargas pesadas.
              </p>
            </div>
          </div>
        </section>

        {/* Cabine e conforto */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines, conforto e tecnologia interna
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Cabinas e estilo
              </p>
              <p className="mb-3">
                Disponível em cabinas como <strong>Space</strong> e{" "}
                <strong>Top Space</strong>, o Actros Evolution foi projetado
                para atender diferentes necessidades de altura interna e
                conforto em rotas longas.
              </p>
              <p>
                O estilo externo é sofisticado, com grade dianteira pintada na
                cor do caminhão e <strong>faróis em LED</strong>, que oferecem
                maior luminosidade e durabilidade, além de favorecer a
                aerodinâmica.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Conforto e tecnologia interna
              </p>
              <p className="mb-2">
                A cabine oferece amplo espaço interno, excelente ergonomia,
                acabamento de alto padrão, climatização eficiente, diversos
                compartimentos para bagagem e uma{" "}
                <strong>cama grande, sem recortes</strong>, ideal para
                pernoites.
              </p>
              <p>
                O motorista pode contar com painel tradicional analógico ou
                painel digital moderno, além das telas internas do{" "}
                <strong>MirrorCam</strong>, que ampliam a visibilidade e
                agregam segurança à condução.
              </p>
            </div>
          </div>
        </section>

        {/* Suspensão e Pacote Robustez */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Suspensão e Pacote Robustez para rotas severas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Tipos de suspensão traseira
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Suspensão pneumática (a ar):</strong> indicada para
                  cargas frágeis e sensíveis, garantindo maior conforto ao
                  condutor e praticidade em operações de engate/desengate.
                </li>
                <li>
                  <strong>Suspensão metálica (molas):</strong> ideal para
                  estradas de terra ou pavimentos em mau estado, como no{" "}
                  <strong>2653 S 6x4 metálico</strong>, privilegiando
                  resistência e baixa demanda de manutenção.
                </li>
                <li>
                  <strong>6x4 pneumático:</strong> com possibilidade de eixo
                  traseiro de tração desconectável e elevável, economizando
                  combustível, pneus e pedágio quando rodando vazio.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="text-xs font-semibold text-sky-300 mb-1 uppercase">
                Pacote Robustez
              </p>
              <p className="mb-2">
                Para rotas mistas com trechos de terra, o{" "}
                <strong>Pacote Robustez</strong> aproxima o Actros Evolution das
                soluções fora de estrada da linha Arocs, reforçando a parte
                frontal e reduzindo quebras em uso severo.
              </p>
              <ul className="space-y-1.5">
                <li>• Montagem frontal inspirada no Arocs</li>
                <li>• Maior ângulo de entrada</li>
                <li>• Menos danos em valas, lombadas e obstáculos</li>
                <li>• Opcionais: escape vertical, proteção de lanternas, etc.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Actros Evolution 2653 S 6x4
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Modelo
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Mercedes-Benz Actros Evolution 2653 S 6x4 – cavalo-mecânico
                    extrapesado rodoviário.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    530 cv, voltados a operações de alto PBTC/CMT.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Aproximadamente 2.600 Nm, proporcionando alta força em
                    rampas e retomadas com carga total.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Câmbio automatizado inteligente, com trocas rápidas e
                    precisas para melhor desempenho e conforto.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração / eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Configuração <strong>6x4</strong>, com dois eixos traseiros
                    motrizes; opção de eixos com ou sem redução nos cubos,
                    conforme aplicação.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    CMT
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Até <strong>80 t</strong> em versões rodoviárias e até{" "}
                    <strong>120 t</strong> com redução nos cubos, em aplicações
                    extrapesadas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Suspensão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções pneumática (para cargas sensíveis) e metálica (para
                    uso severo em estradas de terra e pavimentos irregulares).
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Transporte de cargas pesadas em longa distância, rodotrens e
                    bitrens, com prioridade em segurança, eficiência de
                    combustível e conforto do motorista.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

       {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver / Mercedes-Benz) */}
<section id="ficha-tecnica" className="mt-10">
  <div className="grid gap-6 md:grid-cols-2">

    {/* Card 1 – Ficha técnica oficial */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Ficha técnica oficial – Actros Evolution 2653 S 6x4 (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Acesse a ficha técnica oficial do{" "}
        <strong>Mercedes-Benz Actros Evolution 2653 S 6x4</strong> com dados
        completos de motor, transmissão, eixos, capacidades, dimensões e
        pacotes de segurança para dimensionamento preciso da frota.
      </p>

      <a
        href="/fichas-tecnicas/mercedes-actros-evolution-2653s-6x4.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg
                   bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white
                   hover:bg-sky-700 transition"
      >
        Abrir ficha técnica (PDF)
      </a>
    </div>

    {/* Card 2 – Luzes de advertência */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Luzes de Advertência e Indicadoras – Mercedes-Benz (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Guia oficial de luzes de advertência e indicadoras do painel dos
        caminhões Mercedes-Benz. Material essencial para identificar alertas,
        compreender significados e agir corretamente durante a operação.
      </p>

      <a
        href="/fichas-tecnicas/luzes-advertencia-indicadora-mercedes.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg
                   bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white
                   hover:bg-sky-700 transition"
      >
        Abrir guia de luzes (PDF)
      </a>
    </div>

  </div>
</section>

{/* CTA FINAL – Página exclusiva da transmissão Mercedes G340 */}
<section className="mt-14 rounded-3xl bg-[#0f172a] p-8 md:p-10 shadow-xl">
  <div className="flex flex-col items-center text-center">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
      Acesse o guia técnico completo da transmissão Mercedes G340
    </h3>

    <p className="mt-2 max-w-2xl text-slate-200">
      Página exclusiva com funcionamento detalhado da caixa G340 (12 marchas),
      modos de operação, recomendações de uso, integração com freio motor
      e boas práticas para máxima durabilidade e eficiência.
    </p>

    <div className="mt-6">
      <Link
        href="/caminhoes/mercedes/g340"
        className="inline-flex items-center justify-center rounded-2xl
                   bg-gradient-to-r from-sky-600 to-sky-800
                   px-12 py-4 text-base font-extrabold text-white
                   shadow-lg shadow-sky-900/30
                   hover:from-sky-500 hover:to-sky-700
                   hover:shadow-xl transition-all duration-200"
      >
        Acessar página completa – Caixa Mercedes G340
      </Link>
     </div>
  </div>
</section>
</section>
    </main>
  );
}
