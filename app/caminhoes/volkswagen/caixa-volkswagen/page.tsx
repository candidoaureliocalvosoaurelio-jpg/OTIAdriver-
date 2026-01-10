// app/caminhoes/volkswagen/caixa-volkswagen/page.tsx
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
    { href: "#comandos", label: "Comandos e modos" },
    { href: "#partida", label: "Partida e condução" },
    { href: "#modos-conducao", label: "Modos de condução" },
    { href: "#alertas", label: "Alertas e proteção" },
    { href: "#manutencao", label: "Óleo e manutenção" },
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

export default function CaixaVolkswagenPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="purple">Transmissão Automatizada</Badge>
              <Badge tone="success">Boas práticas</Badge>
              <Badge tone="warning">Alertas e segurança</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Caixa Volkswagen (TRAXON)
              <span className="block text-lg md:text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600">
                Guia completo: funcionamento, modos, segurança, alertas e
                manutenção.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
              Aqui você encontra um material técnico e prático para operar
              corretamente a transmissão automatizada Volkswagen: comandos,
              modos de troca, função preditiva, manobras, procedimentos de
              partida, alertas do sistema e cuidados com óleo e embreagem.
            </p>

            {/* CTA (PDF) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/fichas-tecnicas/caixa-volkswagen.pdf"
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
            </div>

            <PillNav />
          </div>

          {/* Imagem – padrão igual Caixa Iveco */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/caixa-volkswagen.png"
                  alt="Caixa de mudanças Volkswagen TRAXON"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa — Caixa Volkswagen (ZF TraXon).
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
            title="1) Visão geral — o que é a TRAXON e por que ela existe"
            subtitle="A transmissão automatizada é uma caixa mecânica com gerenciamento eletrônico da embreagem e das trocas. O objetivo é reduzir esforço do motorista, padronizar condução, proteger o trem de força e melhorar consumo e disponibilidade."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="Conforto e padronização"
              desc="Sem pedal de embreagem, com lógica de trocas consistente e foco em condução estável, especialmente em operações rodoviárias."
              items={[
                "Reduz fadiga em trânsito e longas viagens",
                "Trocas mais suaves e previsíveis",
                "Menos erros operacionais",
              ]}
            />
            <InfoCard
              tone="purple"
              title="Proteção do conjunto"
              desc="A TCU pode impedir trocas que causem sobre-giro ou rotação insuficiente, preservando motor e embreagem."
              items={[
                "Bloqueio de manobras que aumentem risco mecânico",
                "Estratégias de proteção térmica",
                "Controle automático da embreagem",
              ]}
            />
            <InfoCard
              tone="success"
              title="Eficiência"
              desc="A lógica automática, somada a funções inteligentes, busca operar em faixa de rotação eficiente e reduzir trocas desnecessárias."
              items={[
                "Melhor aproveitamento de torque",
                "Menos variações bruscas de rotação",
                "Potencial de economia em rotas repetitivas",
              ]}
            />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="warning"
              title="Atenção em declives"
              desc='Em "N" (Neutro), nenhuma marcha está engatada e o freio-motor perde efeito. Nunca coloque em "N" descendo serra.'
            />
            <InfoCard
              tone="success"
              title="Dica OTIAdriver"
              desc="Em descidas longas, prefira modo MANUAL para segurar marcha + freio motor. Isso reduz aquecimento de freios e melhora controle."
            />
          </div>
        </section>

        {/* COMANDOS */}
        <section id="comandos" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Operação"
            title="2) Comandos — chave seletora, alavanca AUTO/MAN e indicações"
            subtitle="Entenda cada posição e o que muda na prática. Operar corretamente evita falhas, reduz desgaste da embreagem e melhora segurança."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Chave seletora — posições
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-800">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">D</p>
                  <p className="text-slate-700">Dirigir para frente</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">N</p>
                  <p className="text-slate-700">Neutro</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">R</p>
                  <p className="text-slate-700">Ré</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">DM / RM</p>
                  <p className="text-slate-700">
                    Manobra lenta (frente / ré)
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <InfoCard
                  tone="danger"
                  title='Perigo: usar "N" em descidas'
                  desc='Em "N", o veículo pode ganhar velocidade rapidamente e o freio-motor não atua. Risco de acidentes graves.'
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Alavanca AUTO / MAN — quando usar cada modo
              </p>

              <div className="grid gap-4">
                <InfoCard
                  tone="info"
                  title="AUTO"
                  desc="Trocas automáticas priorizando conforto e eficiência. É o modo padrão após selecionar D e iniciar condução."
                  items={[
                    "Uso geral em rodovias",
                    "Trânsito com para-e-anda",
                    "Rotas planas e médias ondulações",
                  ]}
                />
                <InfoCard
                  tone="purple"
                  title="MAN"
                  desc="O motorista seleciona as marchas. A transmissão mantém proteções contra rotações inadequadas."
                  items={[
                    "Aclives acentuados",
                    "Descidas longas (controle + freio motor)",
                    "Piso irregular / operação especial",
                  ]}
                />
              </div>

              <p className="mt-4 text-sm text-slate-700">
                Observação: ao selecionar uma marcha manualmente durante o AUTO,
                o sistema pode manter o modo manual temporariamente e depois
                retornar ao automático (dependendo da estratégia do veículo).
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Accordion
              tone="info"
              title="Indicação de marchas no painel — como interpretar"
              defaultOpen
            >
              <ul className="space-y-2">
                <li>
                  • O visor mostra a <strong>marcha engatada</strong> (ex.: 1–12
                  ou 1–16, conforme aplicação) e as letras <strong>N</strong>{" "}
                  (neutro) e <strong>R</strong> (ré).
                </li>
                <li>
                  • Em alguns casos, o visor também indica{" "}
                  <strong>M</strong> (manual) e <strong>D</strong> (automático).
                </li>
                <li>
                  • Em <strong>N</strong> e <strong>R</strong>, o modo de
                  operação pode não aparecer — comportamento normal.
                </li>
              </ul>
            </Accordion>

            <Accordion tone="success" title="Kickdown — uso correto (desempenho)">
              <p>
                O kickdown é acionado quando você pressiona o acelerador até o
                final do curso (maior força). Ele pode reduzir marchas para
                elevar rotação e entregar desempenho imediato.
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Use para ultrapassagens e situações pontuais.</li>
                <li>
                  • Evite uso contínuo — aumenta consumo e pode elevar
                  temperatura do conjunto.
                </li>
                <li>
                  • A resistência maior no pedal existe para reduzir uso
                  indevido.
                </li>
              </ul>
            </Accordion>
          </div>
        </section>

        {/* PARTIDA */}
        <section id="partida" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Procedimentos"
            title="3) Partida, saída e manobras — passo a passo e cuidados"
            subtitle="Rotinas corretas evitam trancos, reduzem desgaste da embreagem e melhoram segurança, especialmente com carga."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Passo a passo — sair com o veículo
              </p>

              <ol className="space-y-2 text-sm text-slate-800">
                <li>
                  <strong>1.</strong> Mantenha o{" "}
                  <strong>freio de estacionamento</strong> acionado.
                </li>
                <li>
                  <strong>2.</strong> Ligue a ignição e verifique se aparece{" "}
                  <strong>N</strong> no painel.
                </li>
                <li>
                  <strong>3.</strong> Dê partida no motor e aguarde a
                  estabilização.
                </li>
                <li>
                  <strong>4.</strong> Pise no <strong>freio</strong>.
                </li>
                <li>
                  <strong>5.</strong> Selecione <strong>D</strong> (frente) ou{" "}
                  <strong>R</strong> (ré).
                </li>
                <li>
                  <strong>6.</strong> Aguarde cerca de <strong>2 segundos</strong>{" "}
                  para o engate.
                </li>
                <li>
                  <strong>7.</strong> Solte o freio de estacionamento e acelere{" "}
                  <strong>suavemente</strong>.
                </li>
              </ol>

              <div className="mt-4">
                <InfoCard
                  tone="warning"
                  title="Em rampas"
                  desc="Com o veículo carregado, utilize o freio de estacionamento para reduzir esforço da embreagem durante a saída."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Função Manobra (DM/RM) — uso correto
              </p>
              <p className="text-sm text-slate-700">
                Os modos <strong>DM</strong> (manobra para frente) e{" "}
                <strong>RM</strong> (manobra para trás) são destinados a
                movimentos extremamente lentos, como engate de reboque,
                aproximação de doca e ajustes finos.
              </p>

              <div className="mt-4 grid gap-4">
                <InfoCard
                  tone="info"
                  title="Quando usar"
                  items={[
                    "Acoplar/desacoplar reboque e semirreboque",
                    "Docas e pátios apertados",
                    "Movimento controlado em baixa velocidade",
                  ]}
                />
                <InfoCard
                  tone="danger"
                  title="Evite uso prolongado"
                  desc="Uso prolongado pode causar aquecimento/sobrecarga da embreagem. Utilize somente quando necessário."
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Accordion
              tone="purple"
              title="Assistência de partida em rampa — como aproveitar"
            >
              <p>
                A assistência de partida em rampa ajuda a evitar que o veículo
                recue ao iniciar movimento em aclives, especialmente com carga.
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  • Mesmo com assistência, em rampas carregado,{" "}
                  <strong>use o freio de estacionamento</strong> como
                  procedimento seguro.
                </li>
                <li>
                  • Evite “segurar no acelerador” por muito tempo: isso aumenta
                  aquecimento e desgaste da embreagem.
                </li>
              </ul>
            </Accordion>
          </div>
        </section>

        {/* MODOS DE CONDUÇÃO */}
        <section id="modos-conducao" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Estratégias"
            title="4) Modos de condução — Normal, Eco, Power, Off-Road e Rocking Free"
            subtitle="Os modos ajustam estratégia de trocas e resposta, conforme conforto, consumo, desempenho e condição do terreno."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="Normal"
              desc="Equilíbrio entre conforto, desempenho e trocas adequadas para uso rodoviário."
            />
            <InfoCard
              tone="success"
              title="Eco"
              desc="Prioriza menor consumo; busca rotação eficiente e trocas mais voltadas à economia."
            />
            <InfoCard
              tone="purple"
              title="Power"
              desc="Prioriza desempenho; pode manter rotações mais altas e respostas mais rápidas."
            />
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <InfoCard
              tone="warning"
              title="Off-Road"
              desc="Voltado a operações fora de estrada: privilegia dinâmica em terreno irregular e topografia severa. Pode manter trocas mais rápidas e comportamento mais agressivo."
            />
            <InfoCard
              tone="danger"
              title="Rocking Free (desatolar)"
              desc="Use apenas para sair de atolamento. Pode impedir trocas de marcha e, se usado indevidamente, aumentar desgaste da embreagem."
              items={[
                "Use somente em situação crítica",
                "Desative após sair da condição de atolamento",
                "Evite insistir por longos períodos",
              ]}
            />
          </div>
        </section>

        {/* ALERTAS */}
        <section id="alertas" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Proteções"
            title="5) Alertas e proteção do sistema — o que fazer quando aparecer no painel"
            subtitle="Quando a transmissão entra em modo de proteção, o objetivo é evitar dano mecânico. A resposta correta reduz custo e tempo parado."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion
              tone="warning"
              title="Baixa pressão de ar no atuador — impacto nas trocas"
              defaultOpen
            >
              <p>
                Se houver baixa pressão de ar no sistema do atuador de mudança,
                o veículo pode apresentar limitação de funcionamento e o modo
                automático pode ser desativado.
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  • Verifique possíveis vazamentos e condição do sistema de ar.
                </li>
                <li>• Procure assistência / concessionária o quanto antes.</li>
                <li>
                  • Se a pressão continuar caindo, pode não ser possível trocar
                  marchas.
                </li>
              </ul>
            </Accordion>

            <Accordion
              tone="danger"
              title="Sobrecarga da embreagem — causas e conduta correta"
            >
              <p>
                A sobrecarga geralmente ocorre por saída em marcha alta, manobras
                prolongadas, rampas com carga e uso indevido de modos de manobra.
              </p>
              <div className="mt-3 grid gap-3">
                <InfoCard
                  tone="success"
                  title="Como evitar"
                  items={[
                    "Sair com marcha reduzida (sem exigir demais)",
                    "Se necessário, selecionar marcha ainda mais reduzida",
                    "Aumentar rotação apenas com embreagem acoplada",
                    'Em paradas longas (> 1 min), colocar em "N"',
                    "Em rampa, usar freio de estacionamento na saída",
                  ]}
                />
                <InfoCard
                  tone="warning"
                  title="Se insistir"
                  desc="Persistindo a condição, pode haver falha e modo de proteção. Aguarde resfriamento do conjunto e procure diagnóstico."
                />
              </div>
            </Accordion>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Accordion tone="danger" title="Embreagem desgastada — o que significa">
              <p>
                A indicação de embreagem desgastada sugere limite de desgaste do
                componente. Em geral, recomenda-se inspeção e correção para evitar
                dano ao conjunto.
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Evite continuar exigindo em rampas e manobras longas.</li>
                <li>• Agende avaliação em concessionária/oficina especializada.</li>
                <li>• Revise hábitos de condução para aumentar vida útil.</li>
              </ul>
            </Accordion>

            <Accordion tone="info" title="Predictive Shifting — como garantir funcionamento">
              <p>
                A função de troca preditiva depende de dados de rota/topografia e
                sinal GPS. Para funcionar:
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Operar em modo <strong>AUTO</strong>.</li>
                <li>• Ter sinal GPS disponível.</li>
                <li>• Rotas com informação de topografia habilitada.</li>
              </ul>
              <p className="mt-3">
                Benefícios: menos trocas desnecessárias, condução mais suave e
                potencial de economia em rotas longas.
              </p>
            </Accordion>
          </div>
        </section>

        {/* MANUTENÇÃO */}
        <section id="manutencao" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Manutenção"
            title="6) Óleo da caixa de mudanças — nível, troca e cuidados ambientais"
            subtitle="A manutenção correta do óleo é decisiva para durabilidade. Respeite sempre o óleo especificado no manual do agregado."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Nível de óleo — procedimento
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Estacione o veículo em local plano.</li>
                <li>• Remova o bujão de abastecimento/nível.</li>
                <li>
                  • O nível está correto quando o óleo atinge a{" "}
                  <strong>borda inferior</strong> do bujão.
                </li>
                <li>
                  • Se necessário, complete com óleo do mesmo tipo já utilizado
                  e conforme especificação.
                </li>
              </ul>

              <div className="mt-4">
                <InfoCard
                  tone="warning"
                  title="Atenção"
                  desc="Óleo quente pode causar queimaduras. Proteja-se adequadamente."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <p className="text-sm font-extrabold text-slate-900 mb-3">
                Troca de óleo — boas práticas
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Realize a troca com o óleo quente (com cuidado).</li>
                <li>• Posicione recipiente para coletar o óleo drenado.</li>
                <li>• Remova bujões de abastecimento e dreno.</li>
                <li>• Limpe e reinstale o bujão após escoar.</li>
                <li>
                  • Abasteça até a borda inferior do bujão de abastecimento.
                </li>
                <li>
                  • Utilize óleo conforme orientação de manutenção e
                  especificação do agregado.
                </li>
              </ul>

              <div className="mt-4">
                <InfoCard
                  tone="success"
                  title="Meio ambiente"
                  desc="Armazene e descarte o óleo usado corretamente. Não descarte em solo, esgoto ou locais inadequados."
                />
              </div>
            </div>
          </div>
        </section>

        {/* BOAS PRÁTICAS */}
        <section id="boas-praticas" className="scroll-mt-24">
          <SectionTitle
            eyebrow="OTIAdriver — prática real"
            title="7) Boas práticas que aumentam a vida útil (e reduzem custo)"
            subtitle="Checklist direto ao ponto para operar a TRAXON com segurança, economia e menor desgaste."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="success"
              title="Para economizar"
              items={[
                "Use ECO quando a operação permitir",
                "Antecipe reduções em serra (MAN + freio motor)",
                "Evite kickdown sem necessidade",
                "Mantenha ritmo constante em rodovia",
              ]}
            />
            <InfoCard
              tone="warning"
              title="Para preservar embreagem"
              items={[
                "Evite segurar em rampa no acelerador",
                "Use freio de estacionamento para sair carregado",
                "Não prolongue manobras em DM/RM",
                'Em paradas longas, coloque em "N"',
              ]}
            />
            <InfoCard
              tone="danger"
              title="Para evitar risco"
              items={[
                'Nunca use "N" em descidas',
                "Use MAN em descidas longas para controle",
                "Cuidado com troca em meio a curva/declive",
                "Ao ver alertas críticos, reduza exigência e procure assistência",
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="FAQ — dúvidas comuns do motorista"
            subtitle="Respostas objetivas para as situações mais recorrentes."
          />

          <div className="grid gap-4">
            <Accordion tone="info" title='Posso colocar em "N" para economizar combustível?'>
              <p>
                Não. Em <strong>N</strong> você perde freio-motor e controle do
                conjunto, principalmente em declives. O risco é alto e a economia
                não compensa. O correto é operar em modo adequado (Eco/Normal) e
                condução suave.
              </p>
            </Accordion>

            <Accordion tone="purple" title="Quando devo usar o modo MANUAL?">
              <p>
                Use o <strong>MAN</strong> em situações que exigem controle fino:
                subidas íngremes, descidas longas (controle + freio motor),
                terrenos irregulares e operações específicas. A transmissão mantém
                proteções para evitar rotações inadequadas.
              </p>
            </Accordion>

            <Accordion tone="success" title="O que é Predictive Shifting e por que ajuda?">
              <p>
                É uma função que utiliza GPS/topografia para antecipar trocas em
                subidas e descidas, reduzindo trocas desnecessárias e ajudando na
                economia e conforto. Para funcionar, mantenha o modo AUTO e sinal
                GPS disponível.
              </p>
            </Accordion>

            <Accordion tone="danger" title="Apareceu sobrecarga da embreagem. O que faço agora?">
              <p>
                Reduza a exigência imediatamente: evite rampas e manobras longas,
                saia em marcha reduzida e, em paradas longas, coloque em N. Se o
                aviso persistir ou houver modo de proteção, aguarde resfriamento e
                procure diagnóstico.
              </p>
            </Accordion>
          </div>
        </section>

        {/* BLOCO FINAL — CTA forte (PDF) */}
        <section className="mt-12 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer dominar a TRAXON e reduzir custo por km?
            </h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Abra a apostila completa em PDF e utilize este guia para treinar
              condução, padronizar operação e preservar embreagem e transmissão.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/fichas-tecnicas/caixa-volkswagen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500
                           px-10 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-fuchsia-500/20
                           hover:brightness-110
                           focus:outline-none focus:ring-4 focus:ring-white/20
                           transition-all"
              >
                Abrir apostila da Caixa (PDF)
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Dica: se aparecer alerta crítico (pressão de ar / embreagem),
              reduza exigência e procure assistência especializada.
            </p>
          </div>
        </section>

        {/* Navegação */}
        <section className="flex flex-wrap gap-3">
          <Link
            href="/fichas-tecnicas/caixa-volkswagem.pdf
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition"
          >
            Ir para a página inicial
          </Link>
        </section>
      </section>
    </main>
  );
}
