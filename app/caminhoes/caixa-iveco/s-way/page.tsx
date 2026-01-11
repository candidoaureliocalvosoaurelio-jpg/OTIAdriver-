// app/caminhoes/caixa-iveco/s-way/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Tone = "info" | "success" | "warning" | "danger" | "purple";

function toneStyles(tone: Tone) {
  switch (tone) {
    case "success":
      return {
        wrap: "border-emerald-200 bg-emerald-50",
        dot: "bg-emerald-500",
        title: "text-emerald-900",
        text: "text-emerald-900/90",
      };
    case "warning":
      return {
        wrap: "border-amber-200 bg-amber-50",
        dot: "bg-amber-500",
        title: "text-amber-900",
        text: "text-amber-900/90",
      };
    case "danger":
      return {
        wrap: "border-rose-200 bg-rose-50",
        dot: "bg-rose-500",
        title: "text-rose-900",
        text: "text-rose-900/90",
      };
    case "purple":
      return {
        wrap: "border-fuchsia-200 bg-fuchsia-50",
        dot: "bg-fuchsia-500",
        title: "text-fuchsia-900",
        text: "text-fuchsia-900/90",
      };
    default:
      return {
        wrap: "border-sky-200 bg-sky-50",
        dot: "bg-sky-500",
        title: "text-sky-900",
        text: "text-sky-900/90",
      };
  }
}

function Badge({
  children,
  tone = "info",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const s = toneStyles(tone);
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${s.wrap}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      <span className={`${s.title}`}>{children}</span>
    </span>
  );
}

function InfoCard({
  title,
  desc,
  tone = "info",
  items,
}: {
  title: string;
  desc?: string;
  tone?: Tone;
  items?: string[];
}) {
  const s = toneStyles(tone);
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${s.wrap}`}>
      <p className={`text-sm font-extrabold ${s.title}`}>{title}</p>
      {desc ? <p className={`mt-2 text-sm ${s.text}`}>{desc}</p> : null}
      {items?.length ? (
        <ul className={`mt-3 space-y-1.5 text-sm ${s.text}`}>
          {items.map((it) => (
            <li key={it}>• {it}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm md:text-base text-slate-700">{subtitle}</p>
      ) : null}
    </div>
  );
}

function PillNav() {
  const links = [
    { href: "#visao-geral", label: "Visão geral" },
    { href: "#especificacoes", label: "Especificações" },
    { href: "#funcoes", label: "Funções inteligentes" },
    { href: "#modos", label: "Modos" },
    { href: "#ecoroll", label: "EcoRoll" },
    { href: "#kickdown", label: "Kick-down" },
    { href: "#rocking", label: "Rocking" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#integracao", label: "Freio motor" },
    { href: "#boas-praticas", label: "Boas práticas" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
  tone = "info",
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
  defaultOpen?: boolean;
}) {
  const s = toneStyles(tone);
  return (
    <details
      className="rounded-2xl border bg-white shadow-sm overflow-hidden"
      open={defaultOpen}
    >
      <summary className="list-none cursor-pointer select-none">
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
            <p className="font-extrabold text-slate-900">{title}</p>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Abrir/Fechar
          </span>
        </div>
        <div className="h-px bg-slate-200" />
      </summary>

      <div className="px-5 py-4 text-sm text-slate-700 leading-relaxed">
        {children}
      </div>
    </details>
  );
}

export default function CaixaIvecoSWayTraXonPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO — padrão igual caixa-volkswagen */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="purple">ZF TraXon / Hi-Tronix</Badge>
              <Badge tone="success">Eficiência</Badge>
              <Badge tone="warning">Manual oficial Iveco</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Caixa Iveco S-Way (ZF TraXon)
              <span className="block text-lg md:text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600">
                Guia completo: especificações, modos, funções inteligentes,
                operação e melhores práticas.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
              A <strong>ZF TraXon</strong> que equipa o{" "}
              <strong>Iveco S-Way</strong> é uma transmissão{" "}
              <strong>manual automatizada (AMT)</strong>: a base é mecânica, e a
              embreagem/trocas são gerenciadas por eletrônica. O resultado é
              mais <strong>conforto</strong>, trocas consistentes,{" "}
              <strong>proteções do trem de força</strong> e foco em{" "}
              <strong>eficiência</strong> e <strong>durabilidade</strong>.
            </p>

            {/* CTA (PDF + Voltar ao caminhão) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/fichas-tecnicas/caixa-iveco-s-way-traxon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl
                           bg-gradient-to-r from-sky-600 to-blue-700
                           px-6 py-3 text-sm font-extrabold text-white
                           shadow-lg shadow-sky-600/25
                           hover:from-sky-700 hover:to-blue-800
                           focus:outline-none focus:ring-4 focus:ring-sky-200
                           transition-all"
              >
                Abrir apostila oficial (PDF)
              </a>

              <Link
                href="/caminhoes/iveco-s-way-540-6x4"
                className="inline-flex items-center justify-center rounded-xl
                           border border-slate-300 bg-white px-6 py-3
                           text-sm font-extrabold text-slate-800
                           hover:bg-slate-50 transition"
              >
                Ver Iveco S-Way 540 6x4
              </Link>
            </div>

            <PillNav />
          </div>

          {/* Imagem / bloco visual */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/caixa-zf-traxon-iveco-s-way.png"
                  alt="ZF TraXon no Iveco S-Way — transmissão automatizada"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Transmissão ZF TraXon — Iveco S-Way.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* VISÃO GERAL */}
        <section id="visao-geral" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Fundamentos"
            title="1) Visão geral — o que é a ZF TraXon no S-Way"
            subtitle="Transmissão AMT: robustez mecânica + inteligência eletrônica para controlar embreagem e trocas, elevando eficiência, conforto e proteção do conjunto."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="Manual automatizada (AMT)"
              desc="Trocas automáticas com lógica inteligente e proteções eletrônicas."
              items={[
                "Mais conforto (sem pedal de embreagem)",
                "Trocas rápidas e consistentes",
                "Menos erro operacional e mais padronização",
              ]}
            />
            <InfoCard
              tone="purple"
              title="Aplicação no S-Way"
              desc="Compatível com alto torque e uso rodoviário pesado."
              items={[
                "Motores Cursor 13 (480/540 cv)",
                "Foco em cruzeiro eficiente",
                "Integração com freios auxiliares",
              ]}
            />
            <InfoCard
              tone="success"
              title="Eficiência"
              desc="Projeto voltado a reduzir perdas e melhorar consumo."
              items={[
                "Estratégias de troca otimizadas",
                "Redução de ruído",
                "Potencial de economia em rotas repetitivas",
              ]}
            />
          </div>
        </section>

        {/* ESPECIFICAÇÕES */}
        <section id="especificacoes" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Técnico"
            title="2) Especificações técnicas (modelo 12TX2620 TD / família TraXon)"
            subtitle="Resumo das características mais relevantes para operação e dimensionamento."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Configuração e capacidade
              </p>
              <div className="grid gap-4">
                <InfoCard
                  tone="info"
                  title="Tipo / Marchas"
                  items={[
                    "Automatizada (AMT)",
                    "12 marchas à frente",
                    "2 marchas à ré",
                  ]}
                />
                <InfoCard
                  tone="purple"
                  title="Direct Drive"
                  desc="Última marcha em relação 1:00 — reduz perdas mecânicas em cruzeiro."
                />
                <InfoCard
                  tone="success"
                  title="Torque suportado"
                  desc="Até 2.600 Nm (aplicações extrapesadas)."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Embreagem e atuador
              </p>
              <div className="grid gap-4">
                <InfoCard
                  tone="warning"
                  title="Embreagem"
                  desc="Monodisco a seco (430 mm), adequada ao alto torque."
                />
                <InfoCard
                  tone="info"
                  title="ZF ConAct (atuador concêntrico)"
                  desc="Atuador pneumático concêntrico que elimina o garfo de embreagem, melhorando suavidade em saídas e manobras."
                />
                <InfoCard
                  tone="success"
                  title="Benefício prático"
                  items={[
                    "Saídas mais suaves",
                    "Menos trancos em manobra",
                    "Maior previsibilidade no acoplamento",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FUNÇÕES INTELIGENTES */}
        <section id="funcoes" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Software & Estratégias"
            title="3) Funções inteligentes e calibração no Iveco S-Way"
            subtitle="Recursos de produtividade, conforto e redução de consumo/TCO (conforme calibração e condições de operação)."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="purple"
              title="PreVision (GPS preditivo)"
              desc="Antecipação de topografia (subidas/descidas) para escolher marcha ideal antes do trecho."
              items={[
                "Evita trocas desnecessárias",
                "Mantém rotação eficiente",
                "Ajuda em rotas repetitivas",
              ]}
            />
            <InfoCard
              tone="success"
              title="EcoRoll (neutro eletrônico)"
              desc='Em condições específicas, pode colocar em "N" eletronicamente para aproveitar inércia.'
              items={[
                "Reduz consumo em trechos leves",
                "Desativa ao acelerar ou frear",
                "Não usar como “estratégia manual” em serra",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Rocking Mode"
              desc="Ajuda a sair de baixa aderência (lama/areia), com balanço controlado do veículo."
              items={[
                "Função de emergência (desatolamento)",
                "Uso excessivo pode acelerar desgaste",
              ]}
            />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="info"
              title="Modo manobra"
              desc="Entrega de torque suavizada e controle de deslocamento para manobras milimétricas em docas/pátios."
            />
            <InfoCard
              tone="danger"
              title='Atenção: EcoRoll e descidas'
              desc='Em "N", não há marcha engatada e o freio motor perde efetividade. Em descidas longas, mantenha marcha engatada e use freio motor.'
            />
          </div>
        </section>

        {/* MODOS */}
        <section id="modos" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Comandos"
            title="4) Modos de condução — como operar no dia a dia"
            subtitle="A escolha do modo muda a estratégia de troca e o nível de intervenção do motorista (com proteções do sistema)."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="AUTO"
              desc="Trocas totalmente automáticas conforme carga, relevo e aceleração."
              items={[
                "Melhor para rodagem e operação padrão",
                "Busca rotação eficiente",
                "Proteções contra abuso",
              ]}
            />
            <InfoCard
              tone="purple"
              title="SEMI (Manual assistido)"
              desc="Motorista solicita as marchas; o sistema protege contra seleção inadequada."
              items={[
                "Útil em serra, tráfego pesado e controle fino",
                "Evita sobre-rotação e erros críticos",
              ]}
            />
            <InfoCard
              tone="warning"
              title="AUTO suspenso"
              desc="Após intervenção manual, o AUTO pode retornar automaticamente após alguns segundos."
              items={[
                "Normal em algumas calibrações",
                "Retorno varia por lógica do fabricante",
              ]}
            />
          </div>
        </section>

        {/* ECOROLL DETALHADO */}
        <section id="ecoroll" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Função inteligente"
            title="5) EcoRoll — rodagem em neutro eletrônico (explicação premium)"
            subtitle="Recurso automático de eficiência que usa inércia em condições específicas. O ponto-chave: é o sistema que decide."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="success"
              title="Como funciona (visão prática)"
              items={[
                "Ativa automaticamente em modo AUTO",
                "Faixa típica: 20 a 120 km/h",
                "Disponível somente a partir da 7ª marcha",
                'Entra em "N" eletrônico controlado para aproveitar embalo',
                "Sai do EcoRoll ao acelerar ou frear",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Regras e alertas importantes"
              items={[
                "EcoRoll não é configurável pelo motorista",
                "Freio motor não atua em EcoRoll (marcha desengatada)",
                "Em descidas longas/serra: mantenha marcha engatada",
              ]}
            />
          </div>

          <div className="mt-6">
            <Accordion tone="danger" title='Por que “N” em serra é proibido?' defaultOpen>
              <p>
                Em <strong>N</strong> o freio motor praticamente não atua.
                O veículo tende a ganhar velocidade, elevando o risco de
                superaquecimento dos freios e perda de controle. Em serra, a
                prioridade é <strong>controle e frenagem</strong>, não economia.
              </p>
            </Accordion>
          </div>
        </section>

        {/* KICKDOWN */}
        <section id="kickdown" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Performance"
            title="6) Kick-down — solicitação de potência máxima"
            subtitle="Estratégia para resposta imediata em situações críticas (ex.: ultrapassagem/retomada)."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="danger"
              title="O que acontece quando ativa"
              items={[
                "Acelerador totalmente pressionado",
                "Cancela momentaneamente o modo ECO (quando aplicável)",
                "Reduz marchas automaticamente",
                "Entrega potência máxima para retomada",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Uso recomendado (com disciplina)"
              items={[
                "Use apenas quando necessário (segurança/produtividade)",
                "Evite acionar repetidamente (consumo e temperatura sobem)",
                "Após a manobra, retorne à condução suave",
              ]}
            />
          </div>
        </section>

        {/* ROCKING DETALHADO */}
        <section id="rocking" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Tração"
            title="7) Rocking Mode — desatolamento com controle"
            subtitle="Função de emergência para baixa aderência, alternando tração frente/ré com lógica de proteção."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="warning"
              title="Uso correto"
              items={[
                "Somente com o veículo parado",
                "Geralmente disponível no modo SEMI",
                "Alterna marchas para frente e ré",
                "Use por tempo curto e com cuidado",
              ]}
            />
            <InfoCard
              tone="danger"
              title="Evite abuso"
              items={[
                "Uso excessivo pode aquecer e desgastar embreagem",
                "Patinação prolongada reduz vida útil de componentes",
                "Se não sair, interrompa e reavalie (calço/apoio/assistência)",
              ]}
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Performance"
            title="8) Principais diferenciais da ZF TraXon"
            subtitle="Eficiência mecânica, conforto acústico e integração avançada com o trem de força."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="success"
              title="Eficiência elevada"
              desc="Alta eficiência de transmissão, reduzindo perdas de energia no trem de força."
            />
            <InfoCard
              tone="info"
              title="Silêncio e conforto"
              desc="Engrenagens helicoidais reduzem ruído e vibração percebida na cabine."
            />
            <InfoCard
              tone="purple"
              title="Trocas rápidas"
              desc="Estratégias otimizadas para fluidez e produtividade na rota."
            />
          </div>
        </section>

        {/* INTEGRAÇÃO COM FREIO MOTOR */}
        <section id="integracao" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Segurança"
            title="9) Integração com freio motor e controle em descidas"
            subtitle="A transmissão pode reduzir rapidamente para elevar rotação e aumentar a capacidade de frenagem do motor em descidas."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion tone="success" title="Como a caixa ajuda em descidas" defaultOpen>
              <ul className="space-y-2">
                <li>
                  • Em descidas, manter a <strong>marcha engatada</strong>{" "}
                  permite usar freio motor.
                </li>
                <li>
                  • A transmissão pode <strong>reduzir</strong> para elevar a
                  rotação, mantendo o motor em faixa eficiente de frenagem.
                </li>
                <li>
                  • Isso reduz o uso do freio de serviço e ajuda a controlar
                  temperatura.
                </li>
              </ul>
            </Accordion>

            <Accordion tone="danger" title='Nunca descer serra em "N"'>
              <p>
                Em <strong>N</strong> o freio motor praticamente não atua. O
                veículo ganha velocidade com facilidade, aumentando risco de
                superaquecimento dos freios e acidentes.
              </p>
            </Accordion>
          </div>
        </section>

        {/* BOAS PRÁTICAS */}
        <section id="boas-praticas" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Operação"
            title="10) Boas práticas — o que mais preserva embreagem e caixa"
            subtitle="Regras simples que evitam aquecimento, trancos e desgaste prematuro."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="success"
              title="Saídas e manobras"
              items={[
                "Acelere suave ao iniciar movimento",
                "Evite segurar o caminhão no acelerador em rampa",
                "Use freio de estacionamento/assistência em rampa",
                "Prefira manobras curtas e objetivas (evita aquecimento)",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Situações de esforço"
              items={[
                "Em aclives longos, use modo SEMI quando necessário",
                "Evite patinar (aquecimento) em manobra prolongada",
                "Respeite alertas de temperatura do sistema",
                "Se houver odor de embreagem/aquecimento: interrompa e resfrie",
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Dúvidas comuns"
            title="11) FAQ — perguntas rápidas"
            subtitle="Respostas diretas para dúvidas recorrentes na operação diária."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion tone="info" title="A TraXon é automática de verdade?" defaultOpen>
              <p>
                Ela é uma <strong>AMT</strong> (manual automatizada). A base é
                mecânica, mas a embreagem e as trocas são controladas por
                eletrônica, oferecendo conforto e eficiência.
              </p>
            </Accordion>

            <Accordion tone="warning" title='EcoRoll é "banguela"?'>
              <p>
                É um <strong>neutro eletrônico controlado</strong> em condições
                específicas. Em descidas longas/serra, mantenha marcha engatada
                para garantir freio motor.
              </p>
            </Accordion>

            <Accordion
              tone="success"
              title="Por que as trocas parecem “diferentes” entre caminhões?"
            >
              <p>
                A estratégia de trocas depende de calibração do fabricante,
                peso, topografia, modo de condução e do estilo do motorista. É
                normal haver variações.
              </p>
            </Accordion>

            <Accordion
              tone="danger"
              title="O que fazer se aparecer alerta de temperatura da embreagem?"
            >
              <p>
                Reduza manobras/patinação, pare em local seguro quando possível
                e aguarde resfriar. Se persistir, procure assistência para
                diagnóstico.
              </p>
            </Accordion>
          </div>

          {{/* BLOCO "Observação importante (para evitar 404)" REMOVIDO conforme solicitado */}
        </section>

        {/* BLOCO FINAL — CTA forte (PDF) */}
        <section className="mt-12 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer dominar a TRAXON e reduzir custo por km?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-300">
              Abra a apostila completa em PDF e utilize este guia para treinar
              condução, padronizar operação e preservar embreagem e transmissão.
            </p>

            <div className="mt-6 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href="/fichas-tecnicas/caixa-iveco-s-way-zf-traxon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500
                           px-8 sm:px-10 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-fuchsia-500/20
                           hover:brightness-110
                           focus:outline-none focus:ring-4 focus:ring-white/20
                           transition-all"
              >
                Abrir apostila da Caixa (PDF)
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl
                           border border-white/20 bg-white/10 px-8 sm:px-10 py-4
                           text-base font-extrabold text-white
                           hover:bg-white/15
                           focus:outline-none focus:ring-4 focus:ring-white/20
                           transition-all"
              >
                Ir para a página inicial
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Dica: se aparecer alerta crítico (pressão de ar / embreagem),
              reduza exigência e procure assistência especializada.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
