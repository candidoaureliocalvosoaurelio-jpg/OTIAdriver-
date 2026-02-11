// app/(site)/luz-injecao-caminhao/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Luz da Injeção no Caminhão: o que significa e o que fazer | OTIAdriver",
  description:
    "Entenda o que significa a luz da injeção acesa no caminhão, principais causas, riscos e o que fazer para evitar danos no motor.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Pode seguir com atenção e agendar diagnóstico.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Evite puxar forte e faça leitura com scanner.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "PARE se houver falha forte, fumaça ou luz piscando.",
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

export default function LuzInjecaoCaminhaoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">
          Luz da injeção no caminhão
        </span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz da Injeção no Caminhão: o que significa e o que fazer
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Se a luz da injeção acendeu no painel, o caminhão está avisando
                que existe uma falha registrada no sistema eletrônico do motor.
              </p>

              {/* ✅ OPÇÃO 2: IMAGEM GRANDE LOGO ABAIXO DO TÍTULO */}
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-26.jpg"
                      alt="Luz da injeção"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">
                    Luz da injeção (indicador de avaria)
                  </p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/simbolos/simbolo-26.jpg"
                    alt="Luz da injeção no painel do caminhão"
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

            {/* Card imagem/ícone */}
            <div className="min-w-[260px] max-w-[360px] w-full">
              <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  {/* ✅ ÍCONE NO CARD (troca do 🚨 para imagem) */}
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-26.jpg"
                      alt="Luz da injeção"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="font-extrabold text-lg">Alerta do motor</p>
                    <p className="text-white/90 text-sm">
                      Anomalia na injeção / emissões
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Ação</p>
                    <p className="font-bold">Verificar</p>
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
            ✅ Dica rápida: se a luz estiver <strong>piscando</strong>, houver{" "}
            <strong>perda forte de potência</strong> ou <strong>fumaça</strong>,
            pare em local seguro e faça diagnóstico.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que é a luz da injeção?</h2>
        <p>
          A <strong>luz da injeção</strong> (também conhecida como{" "}
          <strong>luz de anomalia do motor</strong>) indica que o módulo do motor
          (ECU) detectou algum problema no sistema de injeção eletrônica,
          sensores, emissões ou funcionamento do motor.
        </p>

        <h2>🚨 É perigoso rodar com a luz da injeção acesa?</h2>
        <p>
          Depende do tipo de falha. Em muitos casos, o caminhão pode continuar
          rodando, mas:
        </p>
        <ul>
          <li>Se a falha for leve → o caminhão segue funcionando normalmente.</li>
          <li>
            Se a falha for grave → pode entrar em{" "}
            <strong>modo de emergência</strong> (reduz potência).
          </li>
          <li>
            Se ignorar → pode gerar{" "}
            <strong>danos caros no motor, turbina e sistema de emissões</strong>.
          </li>
        </ul>

        <h2>⚠️ Principais causas da luz da injeção no caminhão</h2>
        <p>As causas mais comuns são:</p>
        <ul>
          <li>Sensor de pressão do rail com defeito</li>
          <li>Falha em bico injetor (entupido ou com retorno alto)</li>
          <li>Sensor MAF/MAP com leitura errada</li>
          <li>Falha na EGR (muito comum)</li>
          <li>DPF saturado (caminhões Euro 5/Euro 6)</li>
          <li>Problemas com AdBlue / Arla 32</li>
          <li>Combustível ruim ou com água</li>
          <li>Filtro de combustível saturado</li>
        </ul>

        <h2>🧠 O que fazer quando a luz da injeção acende?</h2>
        <ol>
          <li>
            <strong>Observe se o caminhão perdeu força.</strong>
          </li>
          <li>
            <strong>Evite acelerar forte.</strong>
          </li>
          <li>
            <strong>Se entrar em modo de emergência</strong>, pare em local
            seguro.
          </li>
          <li>
            Se tiver acesso, <strong>faça leitura com scanner</strong> para ver
            o código da falha.
          </li>
          <li>
            Se a luz estiver piscando ou houver fumaça anormal →{" "}
            <strong>pare imediatamente</strong>.
          </li>
        </ol>

        <h2>📌 Dica profissional (o que o motorista inteligente faz)</h2>
        <p>
          O motorista profissional não ignora painel. Ele entende o alerta, evita
          rodar no erro e resolve antes de virar prejuízo.
        </p>

        <h2>🚛 Quer aprender a interpretar TODOS os símbolos do painel?</h2>
        <p>Na <strong>OTIAdriver</strong> você aprende:</p>
        <ul>
          <li>O que cada luz significa</li>
          <li>Quando é falha leve ou grave</li>
          <li>O que fazer na prática</li>
          <li>Como evitar manutenção cara</li>
        </ul>

        <div className="mt-8 not-prose">
          <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-6 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">
              🔥 Seja motorista operador de tecnologia
            </h3>
            <p className="mt-2 text-white/90">
              Acesse os conteúdos completos e evolua sua profissão.
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

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Voltar para início
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-10">🔎 Perguntas frequentes</h2>

        <h3>A luz da injeção acende e apaga. É normal?</h3>
        <p>
          Não é normal. Geralmente indica falha intermitente (sensor ou conexão).
          O sistema registra o erro mesmo que apague.
        </p>

        <h3>Se eu desligar e ligar o caminhão, some. Resolvi?</h3>
        <p>
          Não. Você apenas reiniciou o sistema. O problema continua e pode voltar
          a qualquer momento.
        </p>

        <h3>O que é modo de emergência?</h3>
        <p>
          É quando o caminhão reduz potência para proteger motor e emissões.
          Geralmente vem junto com a luz de falha.
        </p>
      </article>

      {/* Rodapé */}
      <div className="mt-12 text-sm text-slate-500">
        Conteúdo educativo. Para diagnóstico técnico, utilize scanner e mecânico
        especializado.
      </div>
    </main>
  );
}
