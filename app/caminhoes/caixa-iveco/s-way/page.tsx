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
      className={`rounded-2xl border bg-white shadow-sm overflow-hidden ${
        defaultOpen ? "open" : ""
      }`}
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
              <Badge tone="purple">Transmissão Automatizada</Badge>
              <Badge tone="success">Eficiência</Badge>
              <Badge tone="warning">Boas práticas</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Caixa Iveco S-Way (ZF TraXon)
              <span className="block text-lg md:text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600">
                Guia completo: especificações, funções inteligentes, operação e
                melhores práticas.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
              A <strong>ZF TraXon</strong> que equipa o{" "}
              <strong>Iveco S-Way</strong>{" "}
              é uma das transmissões automatizadas mais modernas do mercado. No
              Brasil, substituiu a antiga <strong>ZF AS-Tronic</strong>,
              trazendo ganhos relevantes em{" "}
              <strong>velocidade de troca</strong>,{" "}
              <strong>redução de ruído</strong> e{" "}
              <strong>economia de combustível</strong>.
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
                Abrir apostila (PDF)
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

          {/* Imagem / bloco visual — usando a sua imagem em /public/images */}
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
              Caixa TRAXON.
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
            subtitle="A TraXon é uma transmissão manual automatizada (AMT): base mecânica robusta + gerenciamento eletrônico da embreagem e das trocas, buscando eficiência, conforto e proteção do trem de força."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="Automatizada (AMT)"
              desc="Trocas automáticas com lógica inteligente e proteções eletrônicas."
              items={[
                "Mais conforto (sem pedal de embreagem)",
                "Trocas rápidas e consistentes",
                "Menos erro operacional",
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
            subtitle="A calibração do conjunto pode incluir funções para produtividade, conforto e redução de consumo/TCO."
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
              title="EcoRoll (banguela controlada)"
              desc='Em condições específicas, pode colocar em "N" eletronicamente para aproveitar inércia.'
              items={[
                "Reduz consumo em trechos leves",
                "Atua quando faz sentido (lógica do sistema)",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Rocking Mode"
              desc="Ajuda a sair de baixa aderência (lama/areia), permitindo balanço controlado do veículo."
              items={["Facilita desatolar", "Reduz risco de abuso do trem de força"]}
            />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <InfoCard
              tone="info"
              title="Modo manobra"
              desc="Entrega de torque suavizada e velocidade limitada para manobras milimétricas em docas/pátios."
            />
            <InfoCard
              tone="danger"
              title='Atenção: EcoRoll e descidas'
              desc='Em "N", não há marcha engatada e o freio motor perde efetividade. Em descidas longas, prefira manter marcha engatada e usar freio motor.'
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Performance"
            title="4) Principais diferenciais da ZF TraXon"
            subtitle="O conjunto foi projetado para eficiência mecânica, conforto acústico e integração avançada com o trem de força."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="success"
              title="Eficiência elevada"
              desc="Eficiência de transmissão muito alta, com menor perda de energia no trem de força."
            />
            <InfoCard
              tone="info"
              title="Silêncio e conforto"
              desc="Engrenagens helicoidais reduzem ruído de rodagem e vibração percebida na cabine."
            />
            <InfoCard
              tone="purple"
              title="Trocas rápidas"
              desc="Estratégias de troca otimizadas contribuem para fluidez e produtividade na rota."
            />
          </div>
        </section>

        {/* INTEGRAÇÃO COM FREIO MOTOR */}
        <section id="integracao" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Segurança"
            title="5) Integração com freio motor e controle em descidas"
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
            title="6) Boas práticas — o que mais preserva embreagem e caixa"
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
              ]}
            />
            <InfoCard
              tone="warning"
              title="Situações de esforço"
              items={[
                "Em aclives longos, use modo MAN quando necessário",
                "Evite patinar (aquecimento) em manobra prolongada",
                "Respeite alertas de temperatura do sistema",
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Dúvidas comuns"
            title="7) FAQ — perguntas rápidas"
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

          {/* BLOCO "Observação importante (para evitar 404)" REMOVIDO conforme solicitado */}
        </section>
      </section>
    </main>
  );
}
