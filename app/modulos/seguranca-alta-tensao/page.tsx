// app/modulos/seguranca-alta-tensao/page.tsx
import React from "react";

export const metadata = {
  title: "Cabos Laranjas e 800 Volts – Segurança Alta Tensão | OTIAdriver",
  description:
    "Módulo de treinamento sobre identificação de riscos de alta tensão, procedimentos de emergência e inspeção visual em caminhões elétricos.",
};

export default function SegurancaAltaTensaoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          ⚡ Módulo 1A: Segurança com Alta Tensão (O Risco Invisível)
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Módulo de treinamento essencial sobre identificação de riscos de alta
          tensão, procedimentos de emergência e inspeção visual em caminhões
          elétricos.
        </p>
      </header>

      <section className="prose max-w-none">
        <h2>1. Onde está a Alta Tensão?</h2>
        <p>
          Os sistemas de alta tensão operam tipicamente entre <strong>400V e
          800V</strong>, energia suficiente para ser fatal.
        </p>

        <ul>
          <li><strong>Baterias:</strong> principal reservatório, geralmente no chassi ou sob a cabine.</li>
          <li><strong>Cabos de Alta Tensão:</strong> linhas grossas que conectam baterias ao motor e ao sistema de carregamento.</li>
          <li><strong>Motor Elétrico:</strong> onde a energia é convertida em movimento.</li>
        </ul>

        <blockquote className="border-l-4 pl-4 italic">
          ⚠️ <strong>Regra Crucial da OTIAdriver:</strong> no transporte elétrico o <em>laranja</em> sinaliza alta tensão. Nunca toque, corte ou interfira em componentes laranja.
        </blockquote>

        <h2>2. Procedimentos de Inspeção Visual (Checklist Diário)</h2>
        <p>Antes de sair, o motorista deve checar:</p>
        <ol>
          <li><strong>Integridade do chassi:</strong> procurar impactos ou deformações.</li>
          <li><strong>Cabos laranjas:</strong> verificar se estão soltos, rachados ou com o isolamento danificado.</li>
          <li><strong>Vazamentos:</strong> fluidos perto da caixa da bateria são sinal de problema.</li>
          <li><strong>Sinalização no painel:</strong> qualquer luz de advertência ligada deve ser investigada.</li>
        </ol>

        <h2>3. Ação Imediata em Caso de Acidente</h2>
        <ul>
          <li><strong>Mantenha distância segura:</strong> em caso de fumaça/fogo, ficar a pelo menos 15 metros.</li>
          <li><strong>Chame a emergência e o fabricante:</strong> informe que é veículo elétrico de alta tensão.</li>
          <li><strong>Nunca tente desconectar cabos:</strong> somente resgate treinado ou técnicos qualificados podem desenergizar.</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700">
          Conteúdo criado por <strong>Equipe Técnica OTIAdriver</strong>.
        </p>
      </section>
    </main>
  );
}
