// AUTO-GERADO em 2026-02-11
// app/(site)/falha-sistema-scr-caminhao/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Falha no Sistema SCR: por que acontece e como resolver | OTIAdriver",
  description: "Entenda o que significa a falha no sistema SCR, causas comuns e o que fazer para evitar limitações de potência.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Pode ser aviso inicial. Monitore e evite forçar.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode virar falha. Reduza carga e faça verificação.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Pode causar dano/pane. Pare com segurança se piorar.",
    },
  }[level];

  return (
    <div className={`rounded-2xl ${map.bg} ring-1 ${map.ring} p-4`}>
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${map.dot}`} />
        <p className={`font-extrabold ${map.text}`}>{map.label}</p>
      </div>
      <p className="mt-1 text-sm text-slate-700">{map.desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">Início</Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">Falha no Sistema SCR: por que acontece e como resolver</span>
      </nav>

      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Falha no Sistema SCR: por que acontece e como resolver
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Entenda o que significa a falha no sistema SCR, causas comuns e o que fazer para evitar limitações de potência.
              </p>

              
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image src="/simbolos/simbolo-07.png" alt="Falha no Sistema SCR: por que acontece e como resolver" width={40} height={40} className="object-contain" />
                  </div>
                  <p className="font-bold text-white">Símbolo do painel</p>
                </div>

                <div className="flex justify-center bg-white rounded-xl p-3">
                  <Image
                    src="/simbolos/simbolo-07.png"
                    alt="Falha no Sistema SCR: por que acontece e como resolver"
                    width={720}
                    height={720}
                    className="max-w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
              

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/simbolos-painel" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:opacity-90 transition">
                  Ver Símbolos do Painel
                </Link>
                <Link href="/planos" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition">
                  Ver Planos
                </Link>
                <Link href="/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition">
                  Voltar
                </Link>
              </div>
            </div>

            <div className="min-w-[260px] max-w-[360px] w-full">
              <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                    <Image src="/simbolos/simbolo-07.png" alt="Falha no Sistema SCR: por que acontece e como resolver" width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Alerta do painel</p>
                    <p className="text-white/90 text-sm">Diagnóstico e ação rápida</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Foco</p>
                    <p className="font-bold">Checar</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Risco</p>
                    <p className="font-bold">Variável</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Prioridade</p>
                    <p className="font-bold">Alta</p>
                  </div>
                </div>
              </div>

              
              <div className="mt-4 grid gap-3">
                <RiskBadge level="Baixo" />
                <RiskBadge level="Médio" />
                <RiskBadge level="Alto" />
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t bg-slate-50 px-6 py-4">
          <p className="text-sm text-slate-700">
            ✅ Dica rápida: faça leitura com scanner quando possível e não adie manutenção preventiva.
          </p>
        </div>
      </section>

<article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa</h2>
        <p>Este guia explica o significado, as causas mais comuns e o que fazer para evitar prejuízo. Se houver perda de potência, luz piscando ou ruído anormal, pare com segurança e faça diagnóstico.</p>

        <h2>⚠️ Principais causas</h2>
        <ul>
          <li>Manutenção atrasada</li>
          <li>Uso severo (subida/carga/calor)</li>
          <li>Falha intermitente (conector/sensor)</li>
        </ul>

        <h2>🧠 O que fazer na prática</h2>
        <ol>
          <li>Reduza esforço do motor e monitore o painel.</li>
          <li>Evite acelerar forte em subida.</li>
          <li>Faça leitura com scanner e anote códigos.</li>
        </ol>

        <h2>📌 Dica profissional</h2>
        <p>Registre o código e corrija causa raiz — apagar erro sem diagnóstico só adia o problema.</p>

        <h2>🔎 Perguntas frequentes</h2>
        <h3>Posso continuar rodando?</h3>
        <p>Se não houver sinais graves, siga com cautela e procure diagnóstico o quanto antes.</p>

        <div className="mt-8 not-prose">
          <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-6 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">🔥 OTIAdriver: painel sem mistério</h3>
            <p className="mt-2 text-white/90">
              Aprenda o que cada luz significa e o que fazer na hora para evitar prejuízo.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/planos" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-slate-900 hover:opacity-90 transition">
                Ver Planos
              </Link>
              <Link href="/simbolos-painel" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10 transition">
                Ver Símbolos do Painel
              </Link>
            </div>
          </div>
        </div>

        
        <h2 className="mt-10">➡️ Conteúdos relacionados</h2>
        <div className="not-prose mt-4 flex flex-wrap gap-3">
          <Link href="/simbolos-painel" className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-900 hover:bg-slate-50 transition">
              Símbolos do painel
            </Link>
        </div>
        
      </article>

      <div className="mt-12 text-sm text-slate-500">
        Conteúdo educativo. Para diagnóstico técnico, utilize scanner e mecânico especializado.
      </div>
    </main>
  );
}
