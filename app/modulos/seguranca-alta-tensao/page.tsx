// app/modulos/seguranca-alta-tensao/page.tsx
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Segurança Alta Tensão | OTIAdriver",
  description:
    "Cabos laranjas e 800V — guia de segurança para motoristas de caminhões elétricos.",
};

export default function SegurancaAltaTensaoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <Link
          href="/caminhoes-eletricos"
          className="text-sm text-slate-700 hover:underline"
        >
          ← Voltar aos Caminhões Elétricos
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-2">
          <span>⚡</span>
          <span>Módulo 1A: Segurança com Alta Tensão (O Risco Invisível)</span>
        </h1>

        <p className="mt-3 text-base text-slate-700">
          O caminhão elétrico elimina a fumaça, mas introduz um novo risco invisível:
          <strong> a eletricidade de alta tensão (HV)</strong>. Entender onde essa energia está
          e como ela é sinalizada é a primeira regra de segurança do motorista de VE.
        </p>
      </header>

      <section className="prose max-w-none text-slate-800">
        <h2>1. Onde está a Alta Tensão?</h2>

        <p>
          Os sistemas de alta tensão operam tipicamente entre <strong>400V e 800V</strong>,
          energia suficiente para ser fatal.
        </p>

        <ul>
          <li>
            <strong>Baterias:</strong> O principal reservatório, localizado geralmente no
            chassi ou sob a cabine.
          </li>
          <li>
            <strong>Cabos de Alta Tensão:</strong> Linhas de energia grossas que conectam as
            baterias ao motor e ao sistema de carregamento.
          </li>
          <li>
            <strong>Motor Elétrico:</strong> Onde a energia é convertida em movimento.
          </li>
        </ul>

        <blockquote className="border-l-4 border-amber-400 pl-4 text-slate-700">
          <strong>⚠️ Regra Crucial da OTIAdriver:</strong> No transporte elétrico, o{" "}
          <strong>laranja</strong> indica componentes de alta tensão. Nunca toque ou interfira
          nesses componentes.
        </blockquote>

        <h2>2. Procedimentos de Inspeção Visual (Checklist Diário)</h2>

        <p>Antes de iniciar a jornada, inclua na inspeção visual:</p>

        <ol>
          <li>
            <strong>Integridade do chassi</strong> — verifique impactos na estrutura.
          </li>
          <li>
            <strong>Cabos laranjas</strong> — procure fios soltos, rachados ou com isolamento
            rompido.
          </li>
          <li>
            <strong>Vazamentos de fluido</strong> — atenção a vazamentos próximos à caixa de
            baterias.
          </li>
          <li>
            <strong>Sinalização no painel</strong> — verifique luzes de advertência (HV).
          </li>
        </ol>

        <h2>3. Ação Imediata em Caso de Acidente</h2>

        <ul>
          <li>
            <strong>Mantenha distância:</strong> se houver fumaça, fogo ou vazamento, afaste-se
            pelo menos <strong>15 metros</strong>.
          </li>
          <li>
            <strong>Chame a emergência e o fabricante:</strong> informe que se trata de um veículo
            elétrico de alta tensão (VE).
          </li>
          <li>
            <strong>Não tente desconectar cabos:</strong> somente pessoal treinado ou técnico
            qualificado pode desenergizar o sistema.
          </li>
        </ul>

        <hr />

        <p className="text-sm text-slate-600">
          Material preparado por <strong>Equipe Técnica OTIAdriver</strong> • Categoria:
          Segurança Elétrica • Tags: elétrico · alta-tensão · segurança
        </p>
      </section>
    </main>
  );
}
