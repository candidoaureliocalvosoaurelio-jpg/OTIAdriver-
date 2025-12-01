// app/caminhoes/volvo-fh-2025/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Volvo FH 2025 | OTIAdriver",
  description:
    "Ficha premium do Volvo FH 2025: motores D13 e D16, tecnologias I-Shift, I-See, VDS, VEB+ e cabine Globetrotter XL.",
};

export default function VolvoFh2025Page() {
  return (
    <main className="min-h-screen w-full bg-[#F5FAFF] pb-20">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#1F6FEB] via-[#2AA4F4] to-[#40E0D0] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Texto hero */}
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-wide uppercase text-white/80 mb-2">
              Caminhões a Diesel · Ficha Premium
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Volvo FH 2025: o padrão global em transporte de longa distância
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl">
              Tecnologia sueca, máximo conforto para o motorista e eficiência
              extrema para a sua operação de transporte rodoviário pesado.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#motores">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black text-white text-sm md:text-base font-semibold shadow-sm hover:bg-black/90 active:translate-y-[1px] transition">
                  Ver motores D13 e D16
                </span>
              </Link>
              <Link href="#cabine">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-white text-sm md:text-base font-semibold hover:bg-white/10 active:translate-y-[1px] transition">
                  Cabine Globetrotter XL
                </span>
              </Link>
            </div>
          </div>

          {/* Imagem hero */}
          <div className="flex-1 w-full max-w-md mx-auto">
            <div
              className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src="/images/trucks/volvo.jpg"
                alt="Volvo FH rodando em rodovia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 mt-10 space-y-16">
        {/* POR QUE O FH É REFERÊNCIA */}
        <section aria-labelledby="porque-fh">
          <div className="text-center mb-8">
            <h2
              id="porque-fh"
              className="text-2xl md:text-3xl font-extrabold text-slate-900"
            >
              Por que o Volvo FH é a referência do transporte rodoviário
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Uma plataforma completa de produtividade, conforto e segurança
              para longas distâncias e cargas pesadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Inovação e versatilidade
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Cabine projetada especificamente para longas distâncias, com
                  ergonomia de automóvel premium.
                </li>
                <li>
                  • Plataforma preparada para diferentes energias: Diesel hoje,
                  Gás e Elétrico no futuro.
                </li>
                <li>
                  • Arquitetura modular com múltiplas configurações de eixos
                  para cada tipo de aplicação.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Potência com eficiência
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Família de motores D13 e D16 com alto torque em baixas
                  rotações.
                </li>
                <li>
                  • Versões I-Save com tecnologia Turbo Compound e foco em
                  economia de combustível.
                </li>
                <li>
                  • Opções de potência de 420 a 750 cv, cobrindo da operação
                  padrão ao extrapesado.
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Segurança e controle total
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Freio motor VEB+ com alta capacidade de frenagem em descidas
                  longas.
                </li>
                <li>
                  • Sistemas eletrônicos de apoio ao motorista e Volvo Dynamic
                  Steering (VDS).
                </li>
                <li>
                  • Transmissão I-Shift, deixando o motorista focado na estrada.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* MOTORES D13 & D16 */}
        <section id="motores" aria-labelledby="motores-title">
          <div className="mb-6">
            <h2
              id="motores-title"
              className="text-2xl md:text-3xl font-extrabold text-slate-900"
            >
              Motores D13 e D16: força, torque e economia
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              A linha Volvo FH utiliza motores Diesel de última geração,
              projetados para entregar alto torque em baixas rotações, cumprir
              normas rigorosas de emissões e reduzir o consumo de combustível.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-700">
                  <th className="px-4 py-3 font-semibold">Série / Motor</th>
                  <th className="px-4 py-3 font-semibold">Cilindrada</th>
                  <th className="px-4 py-3 font-semibold">Potências típicas</th>
                  <th className="px-4 py-3 font-semibold">Posicionamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    D13
                  </td>
                  <td className="px-4 py-3 text-slate-700">12,8 L</td>
                  <td className="px-4 py-3 text-slate-700">
                    420 / 460 / 500 / 540 cv
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Versátil, ideal para aplicações rodoviárias padrão e
                    intermediárias.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    D13 I-Save
                  </td>
                  <td className="px-4 py-3 text-slate-700">12,8 L</td>
                  <td className="px-4 py-3 text-slate-700">
                    420 / 460 / 480 / 500 cv
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Focado em economia, com tecnologia Turbo Compound, torque
                    extra e redução consistente de consumo.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    D16
                  </td>
                  <td className="px-4 py-3 text-slate-700">16,1 L</td>
                  <td className="px-4 py-3 text-slate-700">
                    600 / 700 / 750 cv
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Topo de linha, indicado para PBTC elevado e transporte
                    especial ou extrapesado em condições severas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600 max-w-3xl">
            O D13 é o motor mais comum em frotas de longa distância, conhecido
            pela robustez e baixo custo operacional. O D13 I-Save prioriza a
            economia de diesel sem abrir mão de torque. Já o D16 foi pensado
            para cenários extremos, com aclives severos, cargas indivisíveis e
            composições de alto PBTC.
          </p>
        </section>

        {/* TECNOLOGIAS PRINCIPAIS */}
        <section aria-labelledby="tecnologias">
          <div className="mb-6">
            <h2
              id="tecnologias"
              className="text-2xl md:text-3xl font-extrabold text-slate-900"
            >
              Tecnologia a favor da segurança e da rentabilidade
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              O Volvo FH combina transmissão inteligente, direção assistida e
              sistemas avançados de freio motor para entregar mais segurança ao
              motorista e melhor resultado financeiro à frota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* I-Shift */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                I-Shift – a transmissão que pensa por você
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Caixa de câmbio automatizada que monitora peso, velocidade,
                  inclinação e torque em tempo real.
                </li>
                <li>
                  • Mantém o motor sempre na faixa ideal de eficiência, reduzindo
                  consumo e fadiga do motorista.
                </li>
                <li>
                  • Opção I-Shift Dual Clutch com dupla embreagem, quase sem
                  interrupção de torque – perfeita para aclives e ultrapassagens.
                </li>
              </ul>
            </div>

            {/* I-See */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                I-See – piloto automático com leitura de topografia
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Sistema que memoriza o relevo da rota e usa dados em nuvem
                  para prever subidas e descidas.
                </li>
                <li>
                  • Ajusta antecipadamente marchas e velocidade, aproveitando ao
                  máximo a inércia do veículo.
                </li>
                <li>
                  • Gera economia significativa em rotas repetitivas de longa
                  distância.
                </li>
              </ul>
            </div>

            {/* VDS */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Volvo Dynamic Steering (VDS)
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Direção assistida com motor elétrico integrado à coluna.
                </li>
                <li>
                  • Compensa automaticamente ventos laterais, desníveis e
                  irregularidades da pista.
                </li>
                <li>
                  • Reduz drasticamente o esforço no volante e a fadiga ao final
                  do turno.
                </li>
              </ul>
            </div>

            {/* VEB+ */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                VEB+ – Volvo Engine Brake Plus
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  • Freio motor de alta potência, essencial em descidas
                  prolongadas.
                </li>
                <li>
                  • Preserva os freios de serviço, reduzindo temperatura e
                  desgaste de lonas.
                </li>
                <li>
                  • Aumenta a segurança do conjunto, principalmente em regiões
                  montanhosas.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CABINE GLOBETROTTER XL */}
        <section id="cabine" aria-labelledby="cabine-title">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
            <div>
              <h2
                id="cabine-title"
                className="text-2xl md:text-3xl font-extrabold text-slate-900"
              >
                Cabine Globetrotter XL: casa de alto padrão na estrada
              </h2>
              <p className="mt-3 text-slate-600">
                O Volvo FH parte do princípio de que o motorista passa boa parte
                da vida na cabine. A versão Globetrotter XL oferece um ambiente
                de trabalho e descanso em nível premium.
              </p>

              <ul className="mt-4 text-sm text-slate-600 space-y-2">
                <li>
                  • Altura interna generosa, com pé-direito superior a 2 m
                  (dependendo da versão), trazendo liberdade de movimento.
                </li>
                <li>
                  • Cama inferior larga com opções de colchão premium e beliche
                  superior reclinável com ajuste elétrico.
                </li>
                <li>
                  • Suspensão de cabine e chassi refinada, reduzindo vibrações e
                  garantindo sono mais reparador.
                </li>
                <li>
                  • Grande volume de porta-objetos internos e compartimentos
                  externos para bagagens e itens de trabalho.
                </li>
                <li>
                  • Painel digital e central multimídia posicionados para
                  minimizar desvios de atenção.
                </li>
                <li>
                  • Sistemas de climatização que mantêm a temperatura ideal,
                  mesmo em paradas prolongadas, conforme configuração.
                </li>
              </ul>
            </div>

            <div className="w-full max-w-md mx-auto">
              <div
                className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-100"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src="/images/trucks/volvo-fh-interior.jpg"
                  alt="Interior da cabine Volvo FH Globetrotter XL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500 text-center">
                Imagem ilustrativa da cabine Volvo FH Globetrotter XL.
              </p>
            </div>
          </div>
        </section>

        {/* CONFIGURAÇÕES DE EIXOS */}
        <section aria-labelledby="eixos-title">
          <div className="mb-6">
            <h2
              id="eixos-title"
              className="text-2xl md:text-3xl font-extrabold text-slate-900"
            >
              Plataforma modular: o FH se adapta à sua missão
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              O chassi do Volvo FH foi desenhado para combinar capacidade de
              carga, tração e eficiência. As configurações de eixos atendem
              desde operações rodoviárias leves até aplicações extrapesadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 4x2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1">4x2</h3>
              <p className="text-sm text-slate-600">
                Dois eixos, com um eixo traseiro motriz.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Ideal para rotas rodoviárias de longa distância onde a
                eficiência e a menor tara do conjunto são prioridade.
              </p>
            </div>

            {/* 6x2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1">6x2</h3>
              <p className="text-sm text-slate-600">
                Três eixos, com um motriz e um de apoio (trucado).
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Indicado para cargas mais pesadas e volumosas, oferecendo melhor
                distribuição de peso e maior PBTC.
              </p>
            </div>

            {/* 6x4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1">6x4</h3>
              <p className="text-sm text-slate-600">
                Três eixos, com dois eixos traseiros motrizes.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Vocacionado para operações severas, aclives acentuados, pisos de
                menor aderência e composições extrapesadas.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Dependendo da operação, o FH também pode ser configurado em versões
            especiais (8x2, 8x4, entre outras) para cargas indivisíveis e
            aplicações superpesadas.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="mt-4 mb-4">
          <div className="bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] rounded-2xl px-6 py-8 md:px-10 md:py-10 text-white text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Volvo FH 2025: pronto para levar sua operação a outro nível
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-6">
              Com motores D13 e D16 eficientes, tecnologias I-Shift, I-See, VDS
              e VEB+ e uma cabine Globetrotter XL de padrão premium, o Volvo FH
              2025 eleva o patamar de segurança, conforto e rentabilidade da sua
              frota.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contato">
                <span className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-black text-white font-semibold text-sm md:text-base shadow-sm hover:bg-black/90 active:translate-y-[1px] transition">
                  Falar sobre versões e fichas técnicas
                </span>
              </Link>
              <Link href="/caminhoes-eletricos">
                <span className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/70 text-white font-semibold text-sm md:text-base hover:bg-white/10 active:translate-y-[1px] transition">
                  Comparar com caminhões elétricos
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
