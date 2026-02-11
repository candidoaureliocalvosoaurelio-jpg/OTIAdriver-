// scripts/new-alerta.mjs (UPGRADE FINAL)
// Gera páginas SEO "premium" por slug (templates específicos)
// e registra metadados completos em data/alertas.json.

import fs from "node:fs";
import path from "node:path";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
function nowISO() {
  return new Date().toISOString().slice(0, 10);
}
function readJSONSafe(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    const txt = fs.readFileSync(file, "utf8").trim();
    if (!txt) return fallback;
    return JSON.parse(txt);
  } catch {
    return fallback;
  }
}
function writePrettyJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function escapeTS(str) {
  return String(str).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/"/g, '\\"');
}

function riskBadgeComponent() {
  return `
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
    <div className={\`rounded-2xl \${map.bg} ring-1 \${map.ring} p-4\`}>
      <div className="flex items-center gap-2">
        <span className={\`h-2.5 w-2.5 rounded-full \${map.dot}\`} />
        <p className={\`font-extrabold \${map.text}\`}>{map.label}</p>
      </div>
      <p className="mt-1 text-sm text-slate-700">{map.desc}</p>
    </div>
  );
}
`.trim();
}

// ------------------- TEMPLATES PREMIUM POR SLUG -------------------
function getTemplate(slug) {
  const T = {
    "caminhao-perdendo-forca": {
      meaning:
        "Quando o caminhão perde força, normalmente existe limitação de ar/combustível, proteção eletrônica (modo de emergência) ou falha em sensores/atuadores. O segredo é identificar o padrão: acontece em subida? só com carga? depois de abastecer? com fumaça?",
      causes: [
        "Filtro de combustível saturado / combustível ruim (água, impureza)",
        "Filtro de ar entupido / mangueira do turbo vazando",
        "Sensor MAP/MAF com leitura errada",
        "EGR travada aberta (perde rendimento)",
        "DPF saturado (Euro 5/6) e regeneração não concluída",
        "Problema de turbo (atuador, geometria, vazamento)",
        "Pressão no rail / bico injetor com retorno alto",
        "Arla/SCR com falha limitando torque",
        "Embreagem patinando / estratégia do câmbio automatizado",
      ],
      doNow: [
        "Reduza carga e rotação; evite ‘puxar’ no fundo.",
        "Observe painel: luz de motor/injeção/temperatura/Arla/DPF.",
        "Se entrar em modo de emergência, pare com segurança.",
        "Faça leitura com scanner e anote códigos (não apague antes do diagnóstico).",
      ],
      proTip:
        "Perda de força + aumento de consumo costuma ser ar/combustível; perda de força + fumaça preta tende a falta de ar/excesso de diesel; perda de força sem fumaça costuma ser proteção eletrônica/sensor.",
      faq: [
        {
          q: "Posso continuar rodando mesmo perdendo força?",
          a: "Depende. Se for leve e sem luz piscando, dá para seguir com cautela até um ponto seguro. Se houver superaquecimento, luz piscando, ruído anormal ou fumaça forte, pare.",
        },
        {
          q: "Desligar e ligar resolve?",
          a: "Pode ‘limpar’ o modo de emergência momentaneamente, mas a falha volta. O correto é ler códigos e corrigir causa raiz.",
        },
      ],
      related: [
        { href: "/modo-emergencia-caminhao", label: "Modo de emergência no caminhão" },
        { href: "/consumo-alto-diesel-caminhao", label: "Consumo alto de diesel" },
      ],
    },

    "modo-emergencia-caminhao": {
      meaning:
        "Modo de emergência é uma estratégia da ECU para proteger motor e emissões. O caminhão limita potência/torque quando detecta falha séria (sensores, pressão, temperatura, emissões).",
      causes: [
        "Falha em sensores críticos (MAP/MAF, temperatura, pressão)",
        "Pressão do turbo fora do padrão (vazamento/atuador)",
        "DPF saturado / falha na regeneração",
        "SCR/Arla com erro (pode limitar torque e até velocidade)",
        "Baixa pressão de combustível / filtro saturado",
        "Superaquecimento ou baixa pressão de óleo (grave)",
      ],
      doNow: [
        "Tire o pé e procure local seguro.",
        "Evite subida/peso: reduza carga e rotação.",
        "Se a luz estiver piscando ou temperatura alta: PARE.",
        "Leia códigos com scanner e anote (foto ajuda).",
      ],
      proTip:
        "Quando vem com limitação de velocidade, muitas vezes é emissões (DPF/SCR). Se vem com tremedeira/ruído, pode ser injeção/combustível.",
      faq: [
        { q: "Modo de emergência estraga o caminhão?", a: "Ele existe para proteger. O que estraga é ignorar a causa e continuar forçando." },
        { q: "Posso rodar até o destino?", a: "Só se estiver leve e sem sinais graves. Se piorar, pare e evite prejuízo maior." },
      ],
      related: [
        { href: "/caminhao-perdendo-forca", label: "Caminhão perdendo força" },
        { href: "/consumo-alto-diesel-caminhao", label: "Consumo alto de diesel" },
      ],
    },

    "cambio-automatizado-como-funciona": {
      meaning:
        "Câmbio automatizado é uma caixa mecânica com atuadores eletrônicos/hidráulicos fazendo embreagem e trocas. O motorista ganha eficiência e segurança, mas precisa usar do jeito certo.",
      causes: [
        "Uso incorreto em subida (forçar embreagem)",
        "Manobra com aceleração alta (aquecimento)",
        "Modo errado (Econômico x Potência) para a carga/rota",
        "Desgaste por arrancadas fortes e uso constante no ‘creep’",
      ],
      doNow: [
        "Use modo correto para a carga (Eco no plano, Power quando necessário).",
        "Em subida, mantenha rotação saudável; evite “meia embreagem”.",
        "Em manobra, use movimentos curtos e sem acelerar forte.",
        "Se aparecer aviso de temperatura/embreagem: pare e deixe resfriar.",
      ],
      proTip:
        "Regra de ouro: automatizado não gosta de ‘segurar’ caminhão no acelerador em rampa. Use freio e técnica.",
      faq: [
        { q: "Automatizado gasta mais?", a: "Se usado certo, geralmente economiza. Se usado errado (subida/manobra forçada), pode aumentar consumo e desgaste." },
        { q: "Por que ele demora a trocar?", a: "Pode ser estratégia para proteger embreagem/motor. Se for frequente, vale diagnóstico." },
      ],
      related: [
        { href: "/freio-motor-como-usar", label: "Como usar freio motor" },
        { href: "/consumo-alto-diesel-caminhao", label: "Como reduzir consumo" },
      ],
    },

    "freio-motor-como-usar": {
      meaning:
        "Freio motor usa compressão do motor para segurar o veículo, reduzindo uso do freio de serviço. Em descidas, ele é segurança e economia de lona.",
      causes: ["Marcha alta demais (não segura)", "Freio motor fraco para a descida", "Uso excessivo do freio de serviço (superaquecimento)"],
      doNow: [
        "Entre na descida já na marcha certa (antes de embalar).",
        "Use freio motor + (retarder se tiver) e o freio de serviço só para correções.",
        "Se embalar, reduza antes que fique crítico.",
      ],
      proTip:
        "Se você usa freio de serviço o tempo todo na descida, você está gastando lona e aumentando o risco.",
      faq: [
        { q: "Freio motor estraga o motor?", a: "Não quando usado corretamente. Ele foi feito para isso." },
        { q: "Em pista molhada posso usar?", a: "Pode, mas com suavidade e atenção para não perder aderência." },
      ],
      related: [{ href: "/retarder-o-que-e", label: "Retarder: o que é" }],
    },

    "retarder-o-que-e": {
      meaning:
        "Retarder é um freio auxiliar (hidráulico ou eletromagnético) que ajuda a segurar em descidas sem gastar lona. Ele é um dos maiores aliados em serra.",
      causes: ["Uso incorreto em piso escorregadio", "Aquecimento por uso extremo", "Manutenção do conjunto conforme fabricante"],
      doNow: [
        "Use níveis progressivos, sem trancos.",
        "Combine com freio motor e escolha marcha adequada.",
        "Em baixa aderência, use com cuidado.",
      ],
      proTip:
        "Retarder bem usado = freio de serviço mais frio, mais seguro e mais barato no fim do mês.",
      faq: [
        { q: "Retarder substitui o freio?", a: "Não. Ele reduz uso e aumenta segurança, mas o freio de serviço continua essencial." },
        { q: "Por que alguns caminhões não têm?", a: "Depende do pacote/versão e aplicação do veículo." },
      ],
      related: [{ href: "/freio-motor-como-usar", label: "Freio motor: como usar" }],
    },

    "ebs-caminhao-o-que-e": {
      meaning:
        "EBS é o sistema eletrônico de frenagem. Ele otimiza pressão, distribui força e melhora estabilidade, principalmente com carga e em emergência.",
      causes: ["Sensor de roda (ABS) com falha pode afetar EBS", "Baixa tensão elétrica pode gerar alerta", "Válvula/modulador com defeito (caso técnico)"],
      doNow: [
        "Se acender luz de freio/EBS: trate como prioridade.",
        "Evite seguir em serra/alta velocidade.",
        "Faça diagnóstico com scanner.",
      ],
      proTip:
        "Freio é segurança. Qualquer alerta persistente não é para ignorar.",
      faq: [
        { q: "EBS é o mesmo que ABS?", a: "Não. ABS evita travamento; EBS gerencia frenagem eletrônica e usa ABS como parte do sistema." },
        { q: "Dá para rodar com luz de EBS?", a: "Depende do alerta. Se for falha real, o risco é alto. Diagnóstico recomendado." },
      ],
      related: [{ href: "/abs-caminhao-o-que-e", label: "ABS no caminhão" }],
    },

    "abs-caminhao-o-que-e": {
      meaning:
        "ABS evita que as rodas travem em frenagens fortes, mantendo direção e estabilidade. A luz acesa indica falha no sistema — e a frenagem pode ficar mais perigosa em emergência.",
      causes: ["Sensor de roda sujo/danificado", "Cabo/Conector com mau contato", "Anel fônico danificado", "Baixa tensão elétrica"],
      doNow: ["Reduza velocidade e aumente distância.", "Evite freadas bruscas.", "Faça diagnóstico (scanner) e correção."],
      proTip:
        "ABS ajuda em emergência, mas quem manda é a técnica e distância de segurança.",
      faq: [
        { q: "Sem ABS o caminhão não freia?", a: "Freia, mas pode travar roda e perder controle em piso ruim ou emergência." },
        { q: "A luz acendeu e apagou. Tá ok?", a: "Pode ser falha intermitente. Vale checar sensor e conector." },
      ],
      related: [{ href: "/ebs-caminhao-o-que-e", label: "EBS no caminhão" }],
    },

    "consumo-alto-diesel-caminhao": {
      meaning:
        "Consumo alto quase sempre vem de: direção (técnica), carga/rota, pneus, manutenção (filtros), motor/emissões (EGR/DPF/SCR), ou combustível ruim.",
      causes: [
        "Pneus com calibragem errada / alinhamento",
        "Filtro de ar/combustível saturado",
        "EGR/DPF/SCR com problemas",
        "Condução agressiva",
        "Marcha/rotação fora do ideal",
        "Aerodinâmica e excesso de peso",
        "Bicos/sensores fora do padrão",
        "Diesel ruim/contaminado",
        "Freios ‘pegando’",
        "Baixa pressão no turbo",
        "Uso incorreto do câmbio automatizado",
        "Regenerações mal feitas (quando houver)",
      ],
      doNow: [
        "Calibre pneus e cheque freio pegando.",
        "Troque filtros (ar/combustível) se estiver no limite.",
        "Evite giro alto sem necessidade e aceleração “tudo ou nada”.",
        "Mantenha regenerações corretas (DPF/SCR).",
      ],
      proTip:
        "A maior economia vem de constância: velocidade estável, antecipação e rotação ideal.",
      faq: [
        { q: "Ar-condicionado aumenta muito o consumo?", a: "Aumenta um pouco, mas geralmente não é o vilão. O vilão costuma ser técnica/manutenção." },
        { q: "Depois que abasteci piorou.", a: "Pode ser diesel ruim/água. Se vier com falha/perda de força, cheque filtro e qualidade do combustível." },
      ],
      related: [{ href: "/caminhao-perdendo-forca", label: "Caminhão perdendo força" }],
    },

    "caminhao-fumando-preto": {
      meaning:
        "Fumaça preta geralmente é excesso de combustível ou falta de ar: mistura rica. Pode vir de filtro de ar, turbo, EGR, bico ou sensor.",
      causes: ["Filtro de ar entupido", "Vazamento no turbo/intercooler", "Turbo com falha", "EGR travada", "Bico injetor com defeito", "Sensor MAP/MAF errado", "Diesel ruim"],
      doNow: ["Evite acelerar forte.", "Verifique filtro de ar e mangueiras do turbo.", "Se perder força junto: faça diagnóstico com scanner."],
      proTip:
        "Fumaça preta + perda de força costuma ser falta de ar (turbo/intercooler).",
      faq: [
        { q: "É normal em subida?", a: "Uma leve pode acontecer, mas fumaça forte e constante indica problema." },
        { q: "Pode dar multa?", a: "Em excesso pode gerar autuação e reprovação em inspeções." },
      ],
      related: [{ href: "/caminhao-perdendo-forca", label: "Perdendo força" }],
    },

    "caminhao-fumando-branco": {
      meaning:
        "Fumaça branca pode ser vapor/condensação (frio) ou sinal de água/combustão irregular. Se persistir quente, merece atenção.",
      causes: ["Condensação normal (frio)", "Diesel com água", "Problema em bico", "Junta/cabeçote (grave) se baixa água", "Estratégia/regeneração em alguns sistemas"],
      doNow: ["Veja se some com motor quente.", "Monitore nível do líquido de arrefecimento.", "Se tiver cheiro doce/baixar água/falhar: pare e diagnostique."],
      proTip:
        "Fumaça branca persistente + baixa de água = sinal vermelho.",
      faq: [
        { q: "Se for só de manhã é normal?", a: "Pode ser condensação. Se some rápido, geralmente ok." },
        { q: "E se tiver cheiro forte?", a: "Cheiro doce + fumaça branca pode indicar líquido de arrefecimento indo para a combustão." },
      ],
      related: [{ href: "/modo-emergencia-caminhao", label: "Modo de emergência" }],
    },

    "caminhao-fumando-azul": {
      meaning:
        "Fumaça azul quase sempre indica queima de óleo. Pode ser turbina, anéis, retentores, respiro ou excesso de óleo.",
      causes: ["Turbo passando óleo", "Anéis/retentores do motor", "Respiro/cárter pressurizando", "Óleo acima do nível", "Ventilação do motor (respiro/PCV)"],
      doNow: ["Pare de forçar e monitore nível de óleo.", "Se o consumo de óleo aumentar rápido: pare.", "Faça diagnóstico (turbina é suspeita comum)."],
      proTip:
        "Fumaça azul + assobio diferente do turbo + consumo de óleo = cheque turbina urgente.",
      faq: [
        { q: "Dá para rodar assim?", a: "Pouco tempo e com risco. Se o óleo baixar, você destrói o motor." },
        { q: "Pode ser só óleo demais?", a: "Sim. Nível acima do máximo pode causar queima e fumaça." },
      ],
      related: [{ href: "/consumo-alto-diesel-caminhao", label: "Consumo e manutenção" }],
    },

    "simbolos-painel-caminhao": {
      meaning:
        "O painel é o ‘idioma’ do caminhão. Saber interpretar luzes evita pane, multa, motor fundido e manutenção cara. Luz amarela = atenção/diagnóstico; luz vermelha = pare e proteja o conjunto.",
      causes: ["Alertas de motor/injeção/emissões", "Freio (ABS/EBS)", "Temperatura/pressão de óleo", "Elétrico (bateria/alternador)"],
      doNow: ["Nunca ignore luz vermelha.", "Se luz piscar, trate como urgente.", "Use scanner quando possível e registre o código.", "Priorize: óleo/temperatura/freio primeiro."],
      proTip:
        "O motorista inteligente não ‘apaga’ a luz: ele entende, registra e resolve antes de virar prejuízo.",
      faq: [
        { q: "Luz amarela posso seguir?", a: "Em muitos casos sim, mas com cautela e diagnóstico o quanto antes." },
        { q: "Luz vermelha posso seguir?", a: "Não. Pare com segurança para evitar dano grave." },
      ],
      related: [{ href: "/simbolos-painel", label: "Ver Símbolos do Painel (OTIAdriver)" }],
    },
  };

  return (
    T[slug] || {
      meaning:
        "Este guia explica o significado, as causas mais comuns e o que fazer para evitar prejuízo. Se houver perda de potência, luz piscando ou ruído anormal, pare com segurança e faça diagnóstico.",
      causes: ["Manutenção atrasada", "Uso severo (subida/carga/calor)", "Falha intermitente (conector/sensor)"],
      doNow: ["Reduza esforço do motor e monitore o painel.", "Evite acelerar forte em subida.", "Faça leitura com scanner e anote códigos."],
      proTip: "Registre o código e corrija causa raiz — apagar erro sem diagnóstico só adia o problema.",
      faq: [{ q: "Posso continuar rodando?", a: "Se não houver sinais graves, siga com cautela e procure diagnóstico o quanto antes." }],
      related: [{ href: "/simbolos-painel", label: "Símbolos do painel" }],
    }
  );
}

function makeArticleJSX(tpl) {
  const causes = tpl.causes.map((c) => `<li>${escapeTS(c)}</li>`).join("\n          ");
  const doNow = tpl.doNow.map((s) => `<li>${escapeTS(s)}</li>`).join("\n          ");
  const faq = (tpl.faq || [])
    .map((x) => `<h3>${escapeTS(x.q)}</h3>\n        <p>${escapeTS(x.a)}</p>`)
    .join("\n\n        ");
  const related =
    (tpl.related || []).length > 0
      ? tpl.related
          .map(
            (r) => `
            <Link href="${r.href}" className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-900 hover:bg-slate-50 transition">
              ${escapeTS(r.label)}
            </Link>
          `.trim()
          )
          .join("\n            ")
      : "";

  return `
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa</h2>
        <p>${escapeTS(tpl.meaning)}</p>

        <h2>⚠️ Principais causas</h2>
        <ul>
          ${causes}
        </ul>

        <h2>🧠 O que fazer na prática</h2>
        <ol>
          ${doNow}
        </ol>

        <h2>📌 Dica profissional</h2>
        <p>${escapeTS(tpl.proTip)}</p>

        <h2>🔎 Perguntas frequentes</h2>
        ${faq || "<p>Se persistir, faça diagnóstico com scanner e manutenção correta.</p>"}

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

        ${
          related
            ? `
        <h2 className="mt-10">➡️ Conteúdos relacionados</h2>
        <div className="not-prose mt-4 flex flex-wrap gap-3">
          ${related}
        </div>
        `
            : ""
        }
      </article>
  `.trim();
}

function makePageTSX({ slug, title, description, h1, intro, symbolPath, type }) {
  const hasSymbol = Boolean(symbolPath && String(symbolPath).trim());
  const tpl = getTemplate(slug);
  const article = makeArticleJSX(tpl);

  const isGuia = type === "guia";

  return `// AUTO-GERADO em ${nowISO()}
// app/(site)/${slug}/page.tsx
import Link from "next/link";
${hasSymbol ? `import Image from "next/image";` : ""}

export const metadata = {
  title: "${escapeTS(title)} | OTIAdriver",
  description: "${escapeTS(description)}",
};

${hasSymbol ? riskBadgeComponent() : ""}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">Início</Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">${escapeTS(h1)}</span>
      </nav>

      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                ${escapeTS(h1)}
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                ${escapeTS(intro)}
              </p>

              ${
                hasSymbol
                  ? `
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image src="${symbolPath}" alt="${escapeTS(h1)}" width={40} height={40} className="object-contain" />
                  </div>
                  <p className="font-bold text-white">Símbolo do painel</p>
                </div>

                <div className="flex justify-center bg-white rounded-xl p-3">
                  <Image
                    src="${symbolPath}"
                    alt="${escapeTS(h1)}"
                    width={720}
                    height={720}
                    className="max-w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
              `
                  : ""
              }

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
                    ${
                      hasSymbol
                        ? `<Image src="${symbolPath}" alt="${escapeTS(h1)}" width={48} height={48} className="object-contain" />`
                        : `<span className="text-2xl">${isGuia ? "📌" : "⚠️"}</span>`
                    }
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">${hasSymbol ? "Alerta do painel" : isGuia ? "Guia do motorista" : "Alerta"}</p>
                    <p className="text-white/90 text-sm">${hasSymbol ? "Diagnóstico e ação rápida" : "Conteúdo direto e prático"}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Foco</p>
                    <p className="font-bold">${hasSymbol ? "Checar" : "Resolver"}</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">${hasSymbol ? "Risco" : "Nível"}</p>
                    <p className="font-bold">${hasSymbol ? "Variável" : "Prático"}</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Prioridade</p>
                    <p className="font-bold">Alta</p>
                  </div>
                </div>
              </div>

              ${
                hasSymbol
                  ? `
              <div className="mt-4 grid gap-3">
                <RiskBadge level="Baixo" />
                <RiskBadge level="Médio" />
                <RiskBadge level="Alto" />
              </div>
              `
                  : `
              <div className="mt-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                <p className="font-extrabold text-slate-900">✅ Dica rápida</p>
                <p className="mt-1 text-sm text-slate-700">
                  Se piorar, aparecer outro aviso no painel ou tiver perda de potência, reduza carga e faça diagnóstico.
                </p>
              </div>
              `
              }
            </div>
          </div>
        </div>

        <div className="border-t bg-slate-50 px-6 py-4">
          <p className="text-sm text-slate-700">
            ✅ Dica rápida: faça leitura com scanner quando possível e não adie manutenção preventiva.
          </p>
        </div>
      </section>

${article}

      <div className="mt-12 text-sm text-slate-500">
        Conteúdo educativo. Para diagnóstico técnico, utilize scanner e mecânico especializado.
      </div>
    </main>
  );
}
`;
}

function main() {
  const [, , slug, title, description, typeArg, priorityArg, changefreqArg, symbolPathArg] = process.argv;

  if (!slug || !title || !description) {
    console.log(
      `Uso:
node scripts/new-alerta.mjs "slug" "Título" "Descrição" "type(guia|alerta)" "priority(0.7)" "changefreq(monthly)" "symbolPath(opcional)"
Exemplo:
node scripts/new-alerta.mjs "consumo-alto-diesel-caminhao" "Consumo alto de diesel: ..." "Veja 12 causas..." "guia" "0.7" "monthly" ""
`
    );
    process.exit(1);
  }

  const type = (typeArg || "guia").toLowerCase();
  const priority = typeof priorityArg !== "undefined" ? Number(priorityArg) : 0.7;
  const changefreq = (changefreqArg || "monthly").toLowerCase();
  const symbolPath = symbolPathArg ? String(symbolPathArg) : "";

  // 1) Cria/atualiza página
  const pageDir = path.join(process.cwd(), "app", "(site)", slug);
  ensureDir(pageDir);

  const pagePath = path.join(pageDir, "page.tsx");
  const pageTSX = makePageTSX({
    slug,
    title,
    description,
    h1: title,
    intro: description,
    symbolPath,
    type,
  });

  fs.writeFileSync(pagePath, pageTSX, "utf8");

  // 2) Atualiza data/alertas.json (formato completo)
  const dataDir = path.join(process.cwd(), "data");
  ensureDir(dataDir);

  const alertasFile = path.join(dataDir, "alertas.json");
  const list = readJSONSafe(alertasFile, []);

  const today = nowISO();
  const arr = Array.isArray(list) ? list : [];

  const filtered = arr.filter((x) => x?.slug !== slug);

  filtered.unshift({
    slug,
    title,
    description,
    type,
    symbolPath: symbolPath || "",
    updatedAt: today,
    priority: Number.isFinite(priority) ? priority : 0.7,
    changefreq: changefreq || "monthly",
  });

  writePrettyJSON(alertasFile, filtered);

  console.log(`✅ Página criada/atualizada: ${pagePath}`);
  console.log(`✅ alertas.json atualizado: ${alertasFile}`);
  console.log(`👉 Abra: http://localhost:3000/${slug}`);
}

main();
