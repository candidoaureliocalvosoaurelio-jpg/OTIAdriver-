// app/ebook-driver/page.tsx

import React from "react";

export default function EbookDriverPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-3">
              Ebook Driver • Condução Econômica
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Driver Economy:
              <span className="block text-sky-300">
                condução econômica para motoristas de caminhão
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-xl mb-5">
              Conteúdo didático preparado para apoiar o motorista profissional a
              reduzir o consumo de combustível, diminuir o desgaste do veículo e
              aumentar a segurança em cada viagem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-sky-300 font-medium mb-1">
                  Economia de combustível
                </p>
                <p className="text-slate-200">
                  Técnicas para trabalhar na faixa econômica do motor, usar
                  marchas corretamente e aproveitar a inércia do veículo.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-amber-300 font-medium mb-1">
                  Menos desgaste
                </p>
                <p className="text-slate-200">
                  Práticas de manutenção e condução que preservam pneus,
                  suspensão, freios e trem de força.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-emerald-300 font-medium mb-1">
                  Mais segurança
                </p>
                <p className="text-slate-200">
                  Direção suave, planejamento de percurso e uso correto dos
                  recursos do caminhão.
                </p>
              </div>
            </div>
          </div>

          {/* Card lateral de destaque */}
          <div className="bg-slate-900/70 border border-sky-500/40 rounded-2xl px-5 py-6 shadow-xl shadow-sky-900/50">
            <p className="text-sm font-medium text-sky-300 mb-2">
              Ebook Driver – Conteúdo resumido
            </p>
            <p className="text-xs text-slate-200 mb-4">
              Esta página é um resumo estruturado do Ebook Driver Economy. Use
              como guia rápido durante o trabalho, treinamento ou estudo
              individual.
            </p>

            <ul className="space-y-2 text-xs text-slate-100">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Checklist diário de inspeção do veículo.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Técnicas de condução na faixa econômica do conta-giros.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>
                  Boas práticas com pneus, alinhamento, carga e defletores de
                  ar.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>
                  Estratégias para subidas, descidas e diferentes condições de
                  rodagem.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-12 space-y-10">
        {/* Seção 1 – Introdução */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            1. O que é Condução Econômica?
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Condução econômica é o conjunto de técnicas que permite ao
            motorista profissional{" "}
            <span className="font-medium">
              reduzir o custo operacional do transporte
            </span>
            , principalmente através da diminuição do consumo de combustível, da
            redução de manutenções corretivas e do aumento da segurança nas
            operações diárias.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            Quando aplicada de forma consistente, a condução econômica:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Reduz o consumo de combustível por quilômetro rodado.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  Diminui o desgaste físico do motorista, com uma condução mais
                  suave e previsível.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  Aumenta a vida útil de pneus, freios, embreagem e componentes
                  do trem de força.
                </span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>
                  Melhora a segurança, reduzindo situações de risco e frenagens
                  de emergência.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>
                  Contribui para menor emissão de poluentes e melhor imagem da
                  empresa e do motorista.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 2 – Checklist diário */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            2. Checklist diário do motorista
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-4">
            Antes de iniciar qualquer jornada, faça uma inspeção rápida e
            sistemática. Isso evita paradas imprevistas e ajuda a manter o
            veículo sempre em condição econômica de operação.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm md:text-[0.93rem]">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                2.1. Itens de segurança e funcionamento
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Nível de óleo do motor.</li>
                <li>• Nível do fluido da embreagem (se aplicável).</li>
                <li>• Nível de água do limpador de para-brisa.</li>
                <li>• Funcionamento de faróis, lanternas e luzes de freio.</li>
                <li>• Pressão de ar do sistema de freios.</li>
                <li>• Instrumentos do painel e luzes de advertência.</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                2.2. Rodagem e acoplamento
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Estado geral dos pneus e possíveis danos visíveis.</li>
                <li>• Verificar se não há vazamentos aparentes.</li>
                <li>• Conferir acoplamento do reboque/carreta.</li>
                <li>• Verificar travas, engates e conexões de ar e elétricas.</li>
                <li>• Garantir que a carga esteja bem acondicionada e segura.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 3 – Pneus, alinhamento e consumo */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            3. Pneus, alinhamento e economia de combustível
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Pneus e alinhamento têm impacto direto no consumo de combustível e
            na vida útil dos componentes de suspensão e trem de força.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                3.1. Calibração correta
              </h3>
              <p className="text-slate-700 mb-2">
                Manter a pressão dos pneus conforme recomendação do fabricante é
                uma das ações mais simples e eficientes para economizar
                combustível.
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Pressão cerca de 20% menor → + consumo.</li>
                <li>• A vida útil do pneu pode cair pela metade.</li>
                <li>• Maior área de contato = maior resistência ao rolamento.</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                3.2. Alinhamento do cavalo e da carreta
              </h3>
              <p className="text-slate-700 mb-2">
                Conjuntos desalinhados aumentam o esforço do veículo para se
                manter em linha reta.
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Mais consumo de combustível.</li>
                <li>• Desgaste irregular dos pneus.</li>
                <li>• Maior esforço em suspensão, rolamentos e buchas.</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                3.3. Defletores de ar e aerodinâmica
              </h3>
              <p className="text-slate-700 mb-2">
                Ajustar corretamente os defletores de ar reduz a resistência do
                vento, principalmente em velocidades de cruzeiro.
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Melhora a eficiência em rodovia.</li>
                <li>• Ajuda a manter velocidade com menos aceleração.</li>
                <li>• Contribui para menor consumo em longas distâncias.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 4 – Técnicas de condução econômica */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            4. Técnicas práticas de condução econômica
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm md:text-[0.95rem]">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                4.1. Trabalhando na faixa econômica do motor
              </h3>
              <p className="text-slate-700 mb-2">
                Use o conta-giros como seu principal aliado. A faixa econômica é
                onde o motor entrega{" "}
                <span className="font-medium">
                  mais torque com menor consumo de combustível
                </span>
                .
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Evite rotações muito baixas (motor “amarrado”).</li>
                <li>• Evite rotações muito altas (motor “gritando”).</li>
                <li>• Faça as trocas de marcha dentro da faixa verde.</li>
              </ul>

              <h3 className="font-semibold text-slate-800 mt-4 mb-2">
                4.2. Trocas de marcha inteligentes
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Sempre que possível, pule marchas com segurança.</li>
                <li>• Não acelere durante a troca: isso só aumenta consumo.</li>
                <li>• Ajuste a marcha à carga, ao relevo e à velocidade.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                4.3. Condução suave e planejamento
              </h3>
              <p className="text-slate-700 mb-2">
                Dirigir com previsibilidade é chave para reduzir consumo e
                aumentar a segurança.
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Evite acelerações e frenagens bruscas.</li>
                <li>• Mantenha distância segura para não “frear toda hora”.</li>
                <li>• Observe o trânsito à frente e antecipe manobras.</li>
                <li>• Aproveite a inércia do veículo nas descidas leves.</li>
              </ul>

              <h3 className="font-semibold text-slate-800 mt-4 mb-2">
                4.4. Uso do piloto automático
              </h3>
              <p className="text-slate-700">
                Em trechos planos e com tráfego leve, o piloto automático ajuda
                a manter velocidade constante e poupar combustível. Evite usar
                em{" "}
                <span className="font-medium">
                  relevo acidentado ou tráfego intenso
                </span>
                , onde a leitura do motorista é mais eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 5 – Aclives, declives e peso total */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            5. Aclives, declives e influência do peso
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                5.1. Subidas (aclives)
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• “Ataque” a subida com velocidade adequada.</li>
                <li>• Use a faixa de torque para manter o desempenho.</li>
                <li>
                  • Só reduza marcha quando a rotação estiver caindo para o
                  limite inferior da faixa econômica.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                5.2. Descidas (declives)
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Nunca desça desengrenado.</li>
                <li>• Use freio motor e marchas adequadas à inclinação.</li>
                <li>• Evite aquecer demais os freios de serviço.</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">
                5.3. Peso total e equipamentos auxiliares
              </h3>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Mais peso = mais esforço do motor = mais consumo.</li>
                <li>
                  • Tomada de força, baú refrigerado e outros equipamentos
                  aumentam o consumo total.
                </li>
                <li>
                  • Planeje operação, rota e tempo de uso desses recursos.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 6 – Encerramento */}
        <section className="bg-slate-900 rounded-2xl border border-slate-800 p-5 md:p-7 text-slate-100">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            6. Conclusão – Perfil do motorista Driver Economy
          </h2>
          <p className="text-sm md:text-base mb-3 text-slate-100">
            O motorista que pratica a condução econômica é um profissional que
            entende que cada aceleração, cada frenagem e cada escolha de marcha
            têm impacto direto no resultado da operação.
          </p>
          <p className="text-sm md:text-base mb-3 text-slate-100">
            Mais do que “dirigir o caminhão”, ele{" "}
            <span className="font-medium">
              gerencia energia, tempo e segurança
            </span>
            , contribuindo para a sustentabilidade da empresa, para a
            preservação do veículo e para a própria qualidade de vida.
          </p>
          <p className="text-sm md:text-base text-slate-100">
            Utilize este conteúdo como referência diária, revise os pontos
            principais e aplique as técnicas em cada viagem. Pequenas mudanças
            de hábito geram grandes resultados ao longo de milhares de
            quilômetros.
          </p>
        </section>
      </section>

      {/* BLOCO DE DOWNLOAD DO E-BOOK COMPLEMENTAR */}
      <div className="max-w-6xl mx-auto px-4 mt-12 mb-16">
        <div className="bg-sky-900 text-white rounded-2xl p-6 md:p-8 shadow-lg border border-sky-700">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Baixe o E-book Treinamento Inteligente de Motoristas de Caminhões
          </h2>

          <p className="text-slate-200 mb-4 text-sm md:text-base">
            Este material complementar aprofunda técnicas profissionais de
            condução, economia operacional e segurança no transporte de cargas.
          </p>

          <a
            href="/ebooks/E-book-Treinamento-Inteligente-de-Motoristas-de-Caminhoes.pdf"
            target="_blank"
            className="inline-block bg-yellow-400 text-slate-900 font-bold px-5 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            Baixar E-book Treinamento Inteligente
          </a>
        </div>
      </div>
    </main>
  );
}
