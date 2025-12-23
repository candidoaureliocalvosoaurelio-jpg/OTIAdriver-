import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =======================
   TIPOS E HELPERS VISUAIS
======================= */

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
      <span className={s.title}>{children}</span>
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
      {desc && <p className={`mt-2 text-sm ${s.text}`}>{desc}</p>}
      {items && (
        <ul className={`mt-3 space-y-1.5 text-sm ${s.text}`}>
          {items.map((it) => (
            <li key={it}>• {it}</li>
          ))}
        </ul>
      )}
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
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-slate-700">{subtitle}</p>
      )}
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
      className={`rounded-2xl border bg-white shadow-sm overflow-hidden`}
      open={defaultOpen}
    >
      <summary className="list-none cursor-pointer select-none">
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
            <p className="font-extrabold text-slate-900">{title}</p>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Abrir / Fechar
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

/* =======================
   PÁGINA PRINCIPAL
======================= */

export default function CaixaIvecoSWayTraXonPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="purple">ZF TraXon / Hi-Tronix</Badge>
              <Badge tone="success">Eficiência</Badge>
              <Badge tone="warning">Manual oficial Iveco</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
              Caixa Iveco S-Way — ZF TraXon
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
              Transmissão manual automatizada (AMT) utilizada no{" "}
              <strong>Iveco S-Way</strong>, com gerenciamento eletrônico
              inteligente, múltiplos modos de condução e foco em eficiência,
              durabilidade e segurança operacional.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="/fichas-tecnicas/caixa-iveco-s-way-traxon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg"
              >
                Abrir apostila oficial (PDF)
              </a>

              <Link
                href="/caminhoes/iveco-s-way-540-6x4"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-slate-800"
              >
                Ver Iveco S-Way 540 6x4
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/caixa-zf-traxon-iveco-s-way.png"
                  alt="ZF TraXon Iveco S-Way"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-center text-slate-500">
              Transmissão ZF TraXon — Iveco S-Way
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          CONTEÚDO TÉCNICO
      ======================= */}

      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-12">

        {/* ECO ROLL */}
        <section>
          <SectionTitle
            eyebrow="Função inteligente"
            title="EcoRoll — Rodagem em neutro eletrônico"
            subtitle="Função automática para redução de consumo em condições específicas."
          />

          <InfoCard
            tone="success"
            title="Como funciona"
            items={[
              "Ativa automaticamente em modo AUTO",
              "Disponível entre 20 e 120 km/h",
              "Somente a partir da 7ª marcha",
              "Veículo entra em neutro eletrônico controlado",
            ]}
          />

          <InfoCard
            tone="warning"
            title="Atenção"
            items={[
              "EcoRoll não é configurável pelo motorista",
              "Freio motor não atua em EcoRoll",
              "Desativado automaticamente ao frear ou acelerar",
            ]}
          />
        </section>

        {/* MODOS DE OPERAÇÃO */}
        <section>
          <SectionTitle
            eyebrow="Comandos"
            title="Modos de condução da transmissão"
          />

          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              tone="info"
              title="AUTO"
              desc="Trocas totalmente automáticas conforme carga, relevo e aceleração."
            />
            <InfoCard
              tone="purple"
              title="SEMI (Manual)"
              desc="Motorista seleciona as marchas; sistema protege contra erro."
            />
            <InfoCard
              tone="warning"
              title="AUTO suspenso"
              desc="Após intervenção manual, o modo AUTO retorna automaticamente após alguns segundos."
            />
          </div>
        </section>

        {/* KICKDOWN */}
        <section>
          <SectionTitle
            eyebrow="Performance"
            title="Kick-down"
            subtitle="Solicitação de potência máxima."
          />
          <InfoCard
            tone="danger"
            title="Funcionamento"
            items={[
              "Ativado ao pressionar totalmente o acelerador",
              "Cancela momentaneamente o modo ECO",
              "Reduz marchas automaticamente",
              "Utilizado para ultrapassagens e situações críticas",
            ]}
          />
        </section>

        {/* ROCKING */}
        <section>
          <SectionTitle
            eyebrow="Tração"
            title="Rocking Mode — Desatolamento"
          />
          <InfoCard
            tone="warning"
            title="Uso correto"
            items={[
              "Somente com o veículo parado",
              "Disponível no modo SEMI",
              "Alterna marchas para frente e ré",
              "Uso excessivo pode causar danos",
            ]}
          />
        </section>

        {/* BOAS PRÁTICAS */}
        <section>
          <SectionTitle
            eyebrow="Operação segura"
            title="Boas práticas fundamentais"
          />
          <InfoCard
            tone="success"
            title="Recomendações do manual"
            items={[
              "Nunca descer serra em N",
              "Evitar segurar o veículo no acelerador",
              "Usar freio de estacionamento em rampas",
              "Respeitar alertas de temperatura",
            ]}
          />
        </section>

        {/* FAQ */}
        <section>
          <SectionTitle
            eyebrow="Dúvidas"
            title="Perguntas frequentes (FAQ)"
          />

          <Accordion title="A TraXon é automática de verdade?" defaultOpen>
            <p>
              Não. Trata-se de uma <strong>manual automatizada (AMT)</strong>,
              com embreagem e trocas controladas eletronicamente.
            </p>
          </Accordion>

          <Accordion title="EcoRoll é perigoso?">
            <p>
              Não, desde que utilizado automaticamente pelo sistema.
              Em descidas longas, mantenha marcha engatada.
            </p>
          </Accordion>

          <Accordion title="Posso usar Rocking sempre?">
            <p>
              Não. É uma função de emergência para desatolamento.
              Uso excessivo pode danificar a transmissão.
            </p>
          </Accordion>
        </section>
      </section>
    </main>
  );
}
