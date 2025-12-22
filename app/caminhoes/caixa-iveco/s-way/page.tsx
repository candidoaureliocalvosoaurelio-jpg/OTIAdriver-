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
    { href: "#freio-motor", label: "Freio motor" },
    { href: "#operacao", label: "Operação e modos" },
    { href: "#alertas", label: "Alertas e proteção" },
    { href: "#oleo", label: "Óleo e manutenção" },
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
      {/* HERO — igual caixa-volkswagen */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="purple">ZF TraXon • AMT</Badge>
              <Badge tone="success">Eficiência e economia</Badge>
              <Badge tone="warning">Alertas e segurança</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Caixa Iveco S-Way (ZF TraXon)
              <span className="block text-lg md:text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600">
                Guia completo: especificações, funções inteligentes, operação,
                proteção e boas práticas.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
              A <strong>ZF TraXon</strong> que equipa o <strong>Iveco S-Way</strong>{" "}
              é referência global em transmissões automatizadas para caminhões
              pesados. No Brasil, substituiu a antiga <strong>ZF AS-Tronic</strong>, trazendo
              ganhos relevantes em velocidade de troca, conforto acústico e
              economia de combustível.
            </p>

            {/* CTA (apenas PDF) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/fichas-tecnicas/caixa-zf-traxon-iveco-s-way.pdf"
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
                href="/caminhoes"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
              >
                Ver caminhões
              </Link>
            </div>

            <PillNav />
          </div>

          {/* Imagem (reutilizando a da caixa-volkswagen) */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/caixa/caixa-volkswagen-hero.jpg"
                  alt="ZF TraXon — Iveco S-Way"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa — reutilizando{" "}
              <code className="px-1 rounded bg-slate-100">
                /public/images/caixa/caixa-volkswagen-hero.jpg
              </code>
              .
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
            title="1) Visão geral — o que é a ZF TraXon"
            subtitle="A TraXon é uma transmissão mecânica com gerenciamento eletrônico da embreagem e das trocas (AMT). O objetivo é aumentar eficiência, proteger o trem de força e melhorar conforto e produtividade."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="Conforto e padronização"
              desc="Sem pedal de embreagem e com lógica de trocas consistente."
              items={[
                "Menos fadiga do motorista",
                "Trocas rápidas e suaves",
                "Melhor condução no dia a dia",
              ]}
            />
            <InfoCard
              tone="purple"
              title="Proteção do conjunto"
              desc="A TCU ajuda a evitar rotações inadequadas e manobras agressivas."
              items={[
                "Proteção contra sobre/baixa rotação",
                "Estratégias de proteção térmica",
                "Menos desgaste por operação incorreta",
              ]}
            />
            <InfoCard
              tone="success"
              title="Eficiência"
              desc="Arquitetura otimizada para reduzir perdas mecânicas."
              items={[
                "Direct Drive (1:00) em cruzeiro",
                "Trocas inteligentes para faixa eficiente",
                "Potencial de economia por km",
              ]}
            />
          </div>
        </section>

        {/* ESPECIFICAÇÕES */}
        <section id="especificacoes" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Dados técnicos"
            title="2) Especificações Técnicas (referência do conjunto)"
            subtitle="O conteúdo abaixo segue o material que você passou (modelo de referência 12TX2620 TD, conforme aplicação do S-Way)."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="info"
              title="Tipo e marchas"
              desc="Automatizada (AMT) de 12 velocidades à frente e 2 à ré."
            />
            <InfoCard
              tone="purple"
              title="Configuração: Direct Drive"
              desc="Última marcha com relação 1:00, reduzindo perdas mecânicas em cruzeiro."
            />
            <InfoCard
              tone="success"
              title="Capacidade de torque"
              desc="Suporta até 2.600 Nm — ideal para motores Cursor 13 de 480 cv e 540 cv (conforme referência informada)."
            />
            <InfoCard
              tone="warning"
              title="Embreagem + ZF ConAct"
              desc="Monodisco a seco (430 mm) com atuador concêntrico pneumático (ConAct), eliminando garfo de embreagem e suavizando saídas/manobras."
            />
          </div>
        </section>

        {/* FUNÇÕES */}
        <section id="funcoes" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Inteligência embarcada"
            title="3) Funções inteligentes e calibração"
            subtitle="A Iveco implementou novas calibrações no S-Way focadas em produtividade e redução de TCO (custo total de operação)."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="purple"
              title="PreVision (GPS Preditivo)"
              desc="Usa mapas e GPS para antecipar topografia e escolher a marcha ideal antes de subidas/descidas."
              items={[
                "Evita trocas desnecessárias",
                "Mantém o motor em faixa eficiente",
                "Aumenta produtividade em rotas repetidas",
              ]}
            />
            <InfoCard
              tone="success"
              title="EcoRoll (Banguela Controlada)"
              desc='Em declives suaves ou planos com embalo, desacopla eletronicamente (N) para aproveitar inércia e economizar combustível.'
              items={[
                "Economia em trechos favoráveis",
                "Atuação controlada pelo sistema",
                "Retorna marcha quando necessário",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Rocking Mode"
              desc="Para baixa aderência (lama/areia), permite “balançar” para frente e para trás para sair de atoleiros."
              items={[
                "Ajuda em atolamentos",
                "Evita esforço excessivo",
                "Melhor controle em baixa aderência",
              ]}
            />
            <InfoCard
              tone="info"
              title="Modo Manobra"
              desc="Limita velocidade e suaviza entrega de torque para manobras milimétricas em docas/pátios."
              items={[
                "Precisão em docas",
                "Menos trancos",
                "Mais segurança em espaços apertados",
              ]}
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Benefícios"
            title="4) Principais diferenciais"
            subtitle="O que muda na prática: eficiência, silêncio, integração e segurança."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="success"
              title="Eficiência muito alta"
              desc="Referência citada: eficiência próxima de 99,7% (quase toda força do motor chega às rodas)."
            />
            <InfoCard
              tone="purple"
              title="Mais silêncio"
              desc="Engrenagens helicoidais reduzem drasticamente o ruído de rodagem na cabine."
            />
            <InfoCard
              tone="info"
              title="Trocas mais rápidas"
              desc="Trocas ágeis e suaves, com ganho de conforto e eficiência em relação à geração anterior."
            />
          </div>
        </section>

        {/* FREIO MOTOR */}
        <section id="freio-motor" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Segurança em descidas"
            title="5) Integração com freio motor"
            subtitle="A TraXon pode reduzir rapidamente para manter a rotação alta e maximizar o poder de frenagem do freio motor."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="success"
              title="Reduções rápidas"
              desc="Em descidas, trabalha com o freio motor de 4 estágios (referência citada: até 610 cv), mantendo rotação para máxima frenagem."
              items={[
                "Maior controle em serras",
                "Menos aquecimento do freio de serviço",
                "Mais segurança",
              ]}
            />
            <InfoCard
              tone="danger"
              title='Perigo: usar "N" em descidas'
              desc='Em "N", nenhuma marcha está engatada e o freio motor perde efeito. Nunca desça serra em neutro.'
            />
          </div>
        </section>

        {/* OPERAÇÃO */}
        <section id="operacao" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Operação"
            title="6) Operação e modos — como usar corretamente"
            subtitle="Regras simples para reduzir desgaste, manter segurança e extrair economia."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion tone="info" title="Auto vs. Manual — quando usar" defaultOpen>
              <ul className="space-y-2">
                <li>
                  • <strong>AUTO</strong>: melhor para uso rodoviário e operação
                  geral, com foco em consumo e proteção do conjunto.
                </li>
                <li>
                  • <strong>MANUAL</strong>: útil em descidas longas (controle +
                  freio motor), aclives com carga e situações especiais.
                </li>
              </ul>
            </Accordion>

            <Accordion tone="warning" title="Manobras — o que evita aquecimento">
              <ul className="space-y-2">
                <li>• Use o modo manobra apenas quando necessário.</li>
                <li>• Evite “segurar” o caminhão na embreagem em rampas.</li>
                <li>• Faça pausas se houver alerta de temperatura/uso severo.</li>
              </ul>
            </Accordion>
          </div>
        </section>

        {/* ALERTAS */}
        <section id="alertas" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Proteção"
            title="7) Alertas e proteção — o que fazer"
            subtitle="Sempre que houver alerta de transmissão/embreagem, reduza carga térmica e evite insistir em arrancadas repetidas."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion
              tone="warning"
              title="Alerta de aquecimento/uso severo — como reagir"
              defaultOpen
            >
              <ul className="space-y-2">
                <li>• Reduza manobras contínuas e acelerações bruscas.</li>
                <li>• Pare em local seguro e aguarde resfriamento se necessário.</li>
                <li>• Em rampas, use freio de estacionamento/assistência para arrancar.</li>
              </ul>
            </Accordion>

            <Accordion
              tone="danger"
              title="Falha de engate / neutro inesperado — cuidados"
            >
              <ul className="space-y-2">
                <li>• Reduza velocidade e busque um local seguro.</li>
                <li>• Leia mensagens no painel e evite tentativas repetidas.</li>
                <li>• Se persistir, acione suporte/oficina para diagnóstico.</li>
              </ul>
            </Accordion>
          </div>
        </section>

        {/* ÓLEO */}
        <section id="oleo" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Manutenção"
            title="8) Óleo e manutenção — boas rotinas"
            subtitle="A manutenção correta preserva sincronismo, atuadores e vida útil do conjunto."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="info"
              title="Óleo correto"
              desc="Use o fluido especificado pelo fabricante (manual do veículo e especificação ZF aplicável)."
              items={[
                "Não misture óleos fora de padrão",
                "Respeite intervalos e procedimentos",
                "Verifique vazamentos periodicamente",
              ]}
            />
            <InfoCard
              tone="success"
              title="Rotina preventiva"
              desc="Boa rotina evita falhas e reduz TCO."
              items={[
                "Inspeção visual (vazamentos, conectores, chicotes)",
                "Diagnóstico quando houver alerta",
                "Atualizações/calibração conforme rede autorizada",
              ]}
            />
          </div>
        </section>

        {/* BOAS PRÁTICAS */}
        <section id="boas-praticas" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Dia a dia"
            title="9) Boas práticas — checklist rápido"
            subtitle="O essencial para rodar bem e preservar embreagem e transmissão."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="success"
              title="Condução"
              items={[
                "Aceleração progressiva",
                "Use AUTO na maior parte do tempo",
                "Evite intervenções sem necessidade",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Manobras"
              items={[
                "Use modo manobra para precisão",
                "Evite manobra contínua por muito tempo",
                "Faça pausas se houver aquecimento",
              ]}
            />
            <InfoCard
              tone="danger"
              title="Serras"
              items={[
                'Nunca desça em "N"',
                "Use freio motor + marcha adequada",
                "Controle velocidade e evite aquecer freios",
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="10) FAQ"
            subtitle="Respostas diretas para as dúvidas mais comuns."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion tone="info" title="EcoRoll é perigoso?" defaultOpen>
              <p>
                Não, quando acionado pela estratégia do sistema dentro das
                condições previstas. O que é perigoso é o motorista colocar
                manualmente em <strong>N</strong> descendo serra.
              </p>
            </Accordion>

            <Accordion tone="success" title="Qual modo dá mais economia?">
              <p>
                Em geral, o modo <strong>AUTO</strong> com condução estável e
                aproveitando as estratégias preditivas tende a entregar melhor
                consumo e menor desgaste.
              </p>
            </Accordion>

            <Accordion tone="warning" title="Rocking Mode posso usar sempre?">
              <p>
                Use apenas quando necessário (baixa aderência/atolamento). Evite
                insistir com aceleração agressiva por longos períodos.
              </p>
            </Accordion>

            <Accordion tone="purple" title="O cuidado nº 1 em serra?">
              <p>
                Nunca desça em <strong>N</strong>. Mantenha marcha engatada e use
                freio motor para controlar velocidade, evitando aquecimento dos
                freios de serviço.
              </p>
            </Accordion>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <p className="text-sm text-slate-700">
              <strong>Observação importante (para evitar 404):</strong>
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-sm text-slate-700">
              <li>
                Confirme se o PDF existe em{" "}
                <code className="px-1 rounded bg-slate-100">
                  /public/fichas-tecnicas/caixa-zf-traxon-iveco-s-way.pdf
                </code>
                .
              </li>
              <li>
                A imagem do hero está reutilizando{" "}
                <code className="px-1 rounded bg-slate-100">
                  /public/images/caixa/caixa-volkswagen-hero.jpg
                </code>
                .
              </li>
              <li>
                Nomes de arquivos e pastas precisam ser idênticos (maiúsculas e
                minúsculas contam no deploy).
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Ver caminhões
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-black transition"
              >
                Voltar ao início
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
