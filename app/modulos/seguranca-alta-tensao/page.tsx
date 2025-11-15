// app/modulos/seguranca-alta-tensao/page.tsx
import React from "react";

export const metadata = {
  title: "Cabos Laranjas e 800 Volts — Segurança Alta Tensão | OTIAdriver",
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
        <p>
          O caminhão elétrico elimina a fumaça, mas introduz um novo risco
          invisível: <strong>a eletricidade de alta tensão (HV)</strong>. Entender
          onde essa energia está e como ela é sinalizada é a primeira regra de
          segurança do motorista de VE.
        </p>

        <h2>1. Onde está a Alta Tensão?</h2>
        <p>
          Os sistemas de alta tensão operam tipicamente entre <strong>400V e
          800V</strong>, energia suficiente para ser fatal. Os principais
          componentes que devem ser observados:
        </p>
        <ul>
          <li>
            <strong>Baterias:</strong> o principal reservatório, geralmente no
            chassi ou sob a cabine.
          </li>
          <li>
            <strong>Cabos de Alta Tensão:</strong> linhas grossas com isolamento
            laranja que conectam baterias, motor e sistema de carregamento.
          </li>
          <li>
            <strong>Motor Elétrico:</strong> onde a energia é convertida em
            movimento.
          </li>
        </ul>

        <blockquote>
          <strong>⚠️ Regra Crucial OTIAdriver:</strong> no transporte elétrico,
          <em> o laranja é o novo vermelho</em>. Nunca tocar, cortar ou
          interferir em componentes com isolamento laranja.
        </blockquote>

        <h2>2. Procedimentos de Inspeção Visual (Checklist Diário)</h2>
        <p>
          Antes de iniciar a jornada, inclua estes itens na inspeção visual:
        </p>
        <ol>
          <li>
            <strong>Integridade do chassi:</strong> verifique impactos ou
            deformações.
          </li>
          <li>
            <strong>Cabos laranjas:</strong> procure fios soltos, rachaduras,
            isolamento rompido.
          </li>
          <li>
            <strong>Vazamentos de fluido:</strong> fluido perto da caixa da
            bateria pode indicar dano sério.
          </li>
          <li>
            <strong>Sinalização no painel:</strong> atente-se a luzes/alertas do
            sistema HV.
          </li>
        </ol>

        <h2>3. Ação Imediata em Caso de Acidente</h2>
        <ul>
          <li>
            <strong>Mantenha distância:</strong> em caso de fumaça, fogo ou
            vazamento, fique a pelo menos <strong>15 metros</strong>.
          </li>
          <li>
            <strong>Chame emergência e o fabricante:</strong> informe que é um
            veículo elétrico de alta tensão.
          </li>
          <li>
            <strong>Nunca desconecte cabos:</strong> somente resgatistas treinados
            ou técnicos qualificados devem desenergizar o sistema.
          </li>
        </ul>

        <h3>Referência rápida</h3>
        <p>
          Tags: <em>elétrico · alta-tensão · segurança</em>
        </p>
      </section>
    </main>
  );
}
