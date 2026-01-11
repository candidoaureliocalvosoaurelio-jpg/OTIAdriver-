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
        {/* ... TODO o conteúdo (Visão geral, Especificações, Funções, Modos, etc.) permanece igual ao seu ... */}

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

          {/* BLOCO "Observação importante (para evitar 404)" REMOVIDO conforme solicitado */}
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
