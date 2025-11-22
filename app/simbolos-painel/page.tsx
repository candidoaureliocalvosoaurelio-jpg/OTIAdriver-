// app/simbolos-painel/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Símbolos do Painel de Instrumentos | OTIAdriver",
  description:
    "Biblioteca prática dos símbolos do painel de caminhões: cores, alertas, instrumentos e ações recomendadas para segurança e manutenção.",
};

export default function SimbolosPainelPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* CABEÇALHO */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Símbolos do Painel de Instrumentos
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Entenda o que cada luz e indicador do painel do caminhão significa,
          qual é o risco e qual ação tomar. Este guia foi pensado para apoiar
          motoristas e gestores de frota na{" "}
          <span className="font-semibold">
            segurança operacional e prevenção de falhas.
          </span>
        </p>
      </header>

      <article className="prose prose-slate max-w-none">
        {/* 1. CLASSIFICAÇÃO POR CORES */}
        <section>
          <h2>Classificação por Cor das Luzes de Aviso</h2>
          <p>
            A cor da luz no painel segue um padrão universal de gravidade. Antes
            de olhar símbolo por símbolo, é fundamental entender o que cada{" "}
            <strong>cor</strong> comunica:
          </p>

          <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {/* Vermelho */}
            <div className="rounded-xl border-l-8 border-red-600 bg-red-50 p-4 shadow-sm">
              <h3 className="font-bold text-red-700 mb-1">
                🔴 Vermelho – Falha Grave
              </h3>
              <p className="text-sm text-red-900 mb-2">
                Emergência. Risco imediato à segurança ou de dano severo ao
                veículo.
              </p>
              <p className="text-xs text-red-900 font-semibold">
                Ação: Pare o caminhão em local seguro, desligue o motor e
                acione a manutenção. Não continue rodando.
              </p>
            </div>

            {/* Amarelo */}
            <div className="rounded-xl border-l-8 border-amber-500 bg-amber-50 p-4 shadow-sm">
              <h3 className="font-bold text-amber-700 mb-1">
                🟡 Amarelo/Laranja – Advertência
              </h3>
              <p className="text-sm text-amber-900 mb-2">
                Falha moderada ou condição que requer atenção.
              </p>
              <p className="text-xs text-amber-900 font-semibold">
                Ação: Dirigir com cautela, verificar o problema e programar
                parada para inspeção/reparo na primeira oportunidade.
              </p>
            </div>

            {/* Verde / Azul / Branco */}
            <div className="rounded-xl border-l-8 border-emerald-500 bg-emerald-50 p-4 shadow-sm">
              <h3 className="font-bold text-emerald-700 mb-1">
                🟢 🔵 ⚪ Verde / Azul / Branco – Informativo
              </h3>
              <p className="text-sm text-emerald-900 mb-2">
                Indicam sistemas ligados ou funções ativas (faróis, setas, PTO,
                etc.).
              </p>
              <p className="text-xs text-emerald-900 font-semibold">
                Ação: Não é emergência. Servem como confirmação visual de que o
                recurso está em uso.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FALHAS GRAVES (VERMELHO) */}
        <section>
          <h2>Falhas Graves – Luzes Vermelhas (Parada Imediata)</h2>
          <p>
            Qualquer luz <strong>vermelha</strong> no painel indica situação
            crítica. Ignorar esse tipo de alerta pode causar acidentes ou danos
            irreversíveis ao veículo.
          </p>

          <h3>Pressão do Óleo do Motor</h3>
          <p>
            <strong>Símbolo:</strong> geralmente uma almotolia (lata de óleo)
            pingando. <br />
            <strong>Significado:</strong> pressão de óleo insuficiente no motor.{" "}
            <br />
            <strong>Risco:</strong> falta de lubrificação, aquecimento e
            travamento do motor. <br />
            <strong>Ação:</strong> parar imediatamente em local seguro e desligar
            o motor. Não voltar a dar partida antes da inspeção.
          </p>

          <h3>Temperatura do Motor</h3>
          <p>
            <strong>Símbolo:</strong> termômetro submerso em um líquido. <br />
            <strong>Significado:</strong> superaquecimento do motor. <br />
            <strong>Causas comuns:</strong> falta de líquido de arrefecimento,
            ventoinha inoperante, vazamentos ou obstruções. <br />
            <strong>Ação:</strong> parar o veículo, aguardar resfriar e acionar
            a manutenção. Nunca abrir a tampa do radiador com o motor quente.
          </p>

          <h3>Freio de Estacionamento / Sistema de Freios</h3>
          <p>
            <strong>Símbolo:</strong> círculo com “P” ou com ponto de
            exclamação, às vezes acompanhado de (
            <strong>!</strong>). <br />
            <strong>Significado:</strong> freio de estacionamento acionado ou
            baixo nível de fluido / falha no sistema de freios. <br />
            <strong>Ação:</strong> se acender em movimento, parar imediatamente
            e não prosseguir até inspeção do sistema de freios.
          </p>

          <h3>Falha no Sistema de Carga da Bateria</h3>
          <p>
            <strong>Símbolo:</strong> desenho de uma bateria com sinais de{" "}
            <strong>+</strong> e <strong>−</strong>. <br />
            <strong>Significado:</strong> alternador não está carregando a
            bateria. <br />
            <strong>Risco:</strong> o caminhão continuará funcionando até
            exaurir a carga da bateria, podendo apagar em marcha. <br />
            <strong>Ação:</strong> seguir apenas até um local seguro/oficina,
            evitando uso de consumidores elétricos desnecessários.
          </p>

          <h3>Airbag com Avarias</h3>
          <p>
            <strong>Símbolo:</strong> figura de uma pessoa com um círculo
            (airbag) à frente. <br />
            <strong>Significado:</strong> falha no sistema de airbags. <br />
            <strong>Risco:</strong> o airbag pode não disparar em uma colisão.{" "}
            <br />
            <strong>Ação:</strong> veículo pode rodar, mas deve ser levado para
            diagnóstico assim que possível.
          </p>

          <h3>Pressão Pneumática Baixa (Sistema de Ar)</h3>
          <p>
            <strong>Símbolo:</strong> varia conforme o fabricante; pode ser um
            símbolo de balão de ar ou exclamação associado ao manômetro. <br />
            <strong>Significado:</strong> pressão abaixo do mínimo nos circuitos
            de freio pneumático. <br />
            <strong>Risco:</strong> o veículo pode ficar sem capacidade de
            frenagem. <br />
            <strong>Ação:</strong> parar imediatamente, não continuar viagem
            enquanto a pressão não for restabelecida e a causa identificada.
          </p>

          <h3>Cabine Destravada / Porta Aberta</h3>
          <p>
            <strong>Símbolo:</strong> caminhão com cabine levantada ou desenho
            de porta aberta. <br />
            <strong>Significado:</strong> algum acesso estruturante não está
            devidamente fechado. <br />
            <strong>Risco:</strong> risco de abertura em movimento, queda de
            carga ou perda de controle. <br />
            <strong>Ação:</strong> parar e verificar imediatamente.
          </p>
        </section>

        {/* 3. ADVERTÊNCIAS (AMARELO) */}
        <section>
          <h2>Advertências – Luzes Amarelas/Laranja</h2>
          <p>
            As luzes amarelas indicam condições que não impedem
            necessariamente a continuidade da viagem, mas exigem atenção e
            correção planejada.
          </p>

          <h3>Injeção Eletrônica / Luz de Mau Funcionamento (MIL)</h3>
          <p>
            <strong>Símbolo:</strong> desenho de um motor. <br />
            <strong>Significado:</strong> falha no sistema de injeção ou
            emissões. <br />
            <strong>Efeitos:</strong> aumento de consumo, perda de potência,
            dificuldade de partida. <br />
            <strong>Ação:</strong> registrar o evento, seguir até local seguro
            e programar diagnóstico com scanner.
          </p>

          <h3>Filtro de Partículas de Diesel (DPF)</h3>
          <p>
            <strong>Símbolo:</strong> retângulo com pontos internos. <br />
            <strong>Significado:</strong> DPF saturado, necessitando regeneração.{" "}
            <br />
            <strong>Ação:</strong> seguir o procedimento recomendado pelo
            fabricante (regeneração automática assistida ou regeneração
            estacionária em local seguro).
          </p>

          <h3>ABS / EBS</h3>
          <p>
            <strong>Símbolos:</strong> letras “ABS” ou “EBS” em um círculo.{" "}
            <br />
            <strong>Significado:</strong> falha no ABS ou sistema eletrônico de
            frenagem. <br />
            <strong>Efeito:</strong> o sistema de freio convencional continua
            funcionando, mas sem recursos de antibloqueio/estabilidade. <br />
            <strong>Ação:</strong> dirigir com cautela e encaminhar para
            manutenção.
          </p>

          <h3>Controle de Tração / ESC</h3>
          <p>
            <strong>Símbolo:</strong> veículo com marcas de derrapagem. <br />
            <strong>Significado:</strong> pode indicar atuação do sistema (em
            verde/azul) ou falha (em amarelo). <br />
            <strong>Ação:</strong> se em amarelo fixo, perderá auxílio de
            estabilidade; conduzir com cuidado e buscar diagnóstico.
          </p>

          <h3>Nível de Combustível Baixo</h3>
          <p>
            <strong>Símbolo:</strong> bomba de combustível. <br />
            <strong>Significado:</strong> veículo em reserva. <br />
            <strong>Ação:</strong> planejar abastecimento imediato, considerando
            rota e segurança.
          </p>
        </section>

        {/* 4. SÍMBOLOS INFORMATIVOS */}
        <section>
          <h2>Símbolos Informativos – Luzes Verdes, Azuis e Brancas</h2>
          <p>
            São luzes que apenas confirmam que um sistema está{" "}
            <strong>ligado ou em uso</strong>. Não representam falha.
          </p>

          <ul>
            <li>
              <strong>Setas / Luzes de Direção:</strong> confirmação de que a
              seta está acionada.
            </li>
            <li>
              <strong>Farol Alto:</strong> geralmente azul; indica o farol alto
              ligado.
            </li>
            <li>
              <strong>Luz de Neblina:</strong> indica uso do farol de neblina
              dianteiro ou traseiro.
            </li>
            <li>
              <strong>Piloto Automático / Cruise Control:</strong> mostra que o
              controle de velocidade está ativo.
            </li>
            <li>
              <strong>Tomada de Força (PTO):</strong> indica acoplamento da PTO
              para acionamento de equipamentos (caçamba, betoneira, bomba
              hidráulica, etc.).
            </li>
            <li>
              <strong>Freio Motor Acionado:</strong> informa que o freio motor
              está ativo para auxiliar nas desacelerações.
            </li>
          </ul>
        </section>

        {/* 5. INSTRUMENTOS DE MEDIÇÃO */}
        <section>
          <h2>Instrumentos de Medição do Painel</h2>
          <p>
            Além das luzes de advertência, o painel dos caminhões traz diversos
            instrumentos analógicos ou digitais que o motorista deve interpretar
            continuamente.
          </p>

          <ul>
            <li>
              <strong>Manômetros do Sistema Pneumático:</strong> indicam a
              pressão de ar nos diferentes circuitos de freio (em bar ou PSI).
              Devem estar dentro da faixa operacional segura antes de iniciar a
              viagem.
            </li>
            <li>
              <strong>Tacômetro (Conta-Giro):</strong> mostra as rotações por
              minuto (RPM) do motor. Auxilia no{" "}
              <em>eco-driving</em> e na prevenção de sobrecarga mecânica.
            </li>
            <li>
              <strong>Velocímetro / Tacógrafo:</strong> indica a velocidade
              instantânea e, no caso do tacógrafo, registra velocidade, tempo de
              direção e pausas.
            </li>
            <li>
              <strong>Indicador de Combustível:</strong> mostra o nível de
              combustível disponível no tanque.
            </li>
            <li>
              <strong>Temperatura do Líquido de Arrefecimento:</strong> indica a
              faixa de temperatura de trabalho do motor.
            </li>
          </ul>
        </section>

        {/* 6. RECOMENDAÇÕES ADICIONAIS */}
        <section>
          <h2>Recomendações para Uso da Biblioteca OTIAdriver</h2>
          <ul>
            <li>
              <strong>Imagens Claras:</strong> sempre que possível, associe cada
              símbolo a um ícone visual no padrão do fabricante (você poderá
              incorporar as imagens do seu PowerPoint aqui).
            </li>
            <li>
              <strong>Atenção a Modelos Específicos:</strong> caminhões mais
              modernos (Volvo, Isuzu, entre outros) incluem alertas adicionais
              como assistentes de distância, falhas de telemetria, RIO BOX etc.
            </li>
            <li>
              <strong>Protocolos por Cor:</strong> reforce nas formações que
              vermelho pede parada imediata, amarelo requer atenção e verde/azul
              são apenas informativos.
            </li>
            <li>
              <strong>Integração com Treinamento:</strong> este módulo pode ser
              utilizado como referência em sala de aula, EAD ou na cabine, via
              aplicativo OTIAdriver.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
