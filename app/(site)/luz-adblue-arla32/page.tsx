// app/(site)/luz-adblue-arla32/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Luz do AdBlue (ARLA 32): o que significa e como resolver | OTIAdriver",
  description:
    "Entenda o que significa a luz do AdBlue / ARLA 32 no caminhão, principais causas, riscos, modo de emergência e como resolver na prática.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Normalmente é aviso de nível baixo. Dá tempo de resolver.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode limitar potência em breve. Não adie o diagnóstico.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Pode entrar em modo de emergência e limitar velocidade.",
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

export default function LuzAdBlueArla32Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">Luz do AdBlue / ARLA 32</span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz do AdBlue (ARLA 32): o que significa e como resolver
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Se a luz do <strong>AdBlue / ARLA 32</strong> acendeu no painel, o caminhão está
                avisando sobre nível baixo, falha no sistema SCR ou problema no controle de emissões.
              </p>

              {/* IMAGEM GRANDE (coloque a sua imagem aqui) */}
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/adblue.png"
                      alt="Luz do AdBlue / ARLA 32"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">AdBlue / ARLA 32 (Sistema SCR)</p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/simbolos/adblue.png"
                    alt="Símbolo do AdBlue / ARLA 32 no painel do caminhão"
                    width={720}
                    height={720}
                    className="max-w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/simbolos-painel"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:opacity-90 transition"
                >
                  Ver Símbolos do Painel
                </Link>

                <Link
                  href="/planos"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver Planos
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Voltar
                </Link>
              </div>
            </div>

            {/* Card premium */}
            <div className="min-w-[260px] max-w-[360px] w-full">
              <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/adblue.png"
                      alt="Luz do AdBlue / ARLA 32"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Sistema SCR</p>
                    <p className="text-white/90 text-sm">
                      Emissões, ARLA 32 e proteção do motor
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Ação</p>
                    <p className="font-bold">Resolver</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Risco</p>
                    <p className="font-bold">Médio</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Impacto</p>
                    <p className="font-bold">Potência</p>
                  </div>
                </div>
              </div>

              {/* Nível de risco */}
              <div className="mt-4 grid gap-3">
                <RiskBadge level="Baixo" />
                <RiskBadge level="Médio" />
                <RiskBadge level="Alto" />
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior premium */}
        <div className="border-t bg-slate-50 px-6 py-4">
          <p className="text-sm text-slate-700">
            ✅ Dica rápida: se aparecer aviso de ARLA 32, <strong>não complete com água</strong> e
            <strong> não rode ignorando</strong>. Pode limitar potência e velocidade.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que é AdBlue / ARLA 32?</h2>
        <p>
          O <strong>AdBlue</strong> (no Brasil chamado de <strong>ARLA 32</strong>) é um fluido
          usado no sistema <strong>SCR</strong> (Redução Catalítica Seletiva) para reduzir emissões.
          Ele não é combustível e não entra diretamente no motor — ele atua no escapamento.
        </p>

        <h2>🚨 O que significa a luz do AdBlue / ARLA 32 acesa?</h2>
        <p>Normalmente a luz pode indicar:</p>
        <ul>
          <li><strong>Nível baixo</strong> de ARLA 32 no reservatório</li>
          <li><strong>ARLA 32 fora do padrão</strong> (contaminado ou vencido)</li>
          <li><strong>Falha no sistema SCR</strong> (bomba, injetor, aquecimento)</li>
          <li><strong>Sensor de NOx</strong> com defeito</li>
          <li><strong>Falha no aquecimento</strong> do tanque/linhas (em frio)</li>
        </ul>

        <h2>⚠️ Se eu ignorar a luz do ARLA 32, o que acontece?</h2>
        <p>
          Em muitos caminhões, o sistema é programado para:
        </p>
        <ul>
          <li>Gerar aviso no painel</li>
          <li>Contar quilômetros restantes</li>
          <li>Reduzir potência</li>
          <li>Entrar em <strong>modo de emergência</strong></li>
          <li>Limitar velocidade em casos extremos</li>
        </ul>

        <h2>🧠 O que fazer quando a luz do AdBlue acende?</h2>
        <ol>
          <li>
            <strong>Verifique o nível</strong> no painel ou no reservatório.
          </li>
          <li>
            Complete com <strong>ARLA 32 original</strong> (produto certificado).
          </li>
          <li>
            Se a luz não apagar, pode ser <strong>falha no sistema SCR</strong>.
          </li>
          <li>
            Faça leitura com <strong>scanner</strong> (códigos do SCR / NOx).
          </li>
          <li>
            Se o caminhão limitar potência → <strong>não force</strong> (pode piorar).
          </li>
        </ol>

        <h2>🚫 Erros que dão prejuízo (muito comuns)</h2>
        <ul>
          <li>Colocar ARLA 32 de procedência duvidosa</li>
          <li>Colocar água no tanque</li>
          <li>Rodar com tanque vazio até o caminhão limitar</li>
          <li>Ignorar alerta achando que é “bobagem”</li>
        </ul>

        <h2>🚛 Quer entender o painel do seu caminhão como profissional?</h2>
        <p>
          Na <strong>OTIAdriver</strong> você aprende na prática:
        </p>
        <ul>
          <li>Todos os símbolos e alertas</li>
          <li>O que é falha leve ou grave</li>
          <li>Como agir sem prejudicar o caminhão</li>
          <li>Como economizar diesel e manutenção</li>
        </ul>

        <div className="mt-8 not-prose">
          <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-6 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">
              🔥 Seja motorista operador de tecnologia
            </h3>
            <p className="mt-2 text-white/90">
              Conteúdo completo para você dominar painel, alertas e condução moderna.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/planos"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-slate-900 hover:opacity-90 transition"
              >
                Ver Planos
              </Link>

              <Link
                href="/simbolos-painel"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Ver Símbolos do Painel
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-10">🔎 Perguntas frequentes</h2>

        <h3>O ARLA 32 pode acabar e eu rodar assim?</h3>
        <p>
          Pode até rodar por um tempo, mas muitos caminhões vão limitar potência e velocidade.
          O correto é completar assim que aparecer o aviso.
        </p>

        <h3>Completei o ARLA 32 e a luz não apagou. Por quê?</h3>
        <p>
          Pode ser falha no SCR, sensor de NOx, bomba, injetor ou ARLA fora do padrão.
          O ideal é fazer leitura com scanner.
        </p>

        <h3>ARLA 32 ruim acende a luz?</h3>
        <p>
          Sim. ARLA contaminado ou vencido pode gerar falhas e até dano no sistema SCR.
        </p>
      </article>

      {/* Rodapé */}
      <div className="mt-12 text-sm text-slate-500">
        Conteúdo educativo. Para diagnóstico técnico, utilize scanner e mecânico especializado.
      </div>
    </main>
  );
}
