// app/caminhoes-eletricos/[id]/page.tsx

import Link from "next/link";
import { electricTrucks } from "@/data/caminhoesEletricos";

type PageProps = {
  params: {
    id: string;
  };
};

export default function CaminhaoEletricoPage({ params }: PageProps) {
  const truck = electricTrucks.find((item) => item.id === params.id);

  if (!truck) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <Link href="/caminhoes-eletricos" className="text-sm text-blue-600 hover:underline">
          ← Voltar para caminhões elétricos
        </Link>
        <h1 className="mt-6 text-2xl font-semibold">
          Caminhão não encontrado
        </h1>
        <p className="mt-2 text-zinc-600">
          Verifique o link acessado ou volte para a lista de caminhões elétricos.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Breadcrumb / Voltar */}
      <div>
        <Link href="/caminhoes-eletricos" className="text-sm text-blue-600 hover:underline">
          ← Voltar para caminhões elétricos
        </Link>
      </div>

      {/* Cabeçalho */}
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          Caminhões Elétricos · {truck.mercado}
        </p>
        <h1 className="text-3xl font-bold text-zinc-900">
          {truck.nome}
        </h1>
        <p className="text-sm text-zinc-600">{truck.tipoPropulsao}</p>
        <p className="mt-3 text-zinc-700">
          {truck.usoIdeal}
        </p>
      </header>

      {/* Grade principal de informações */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Bloco: Energia e Autonomia */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            Energia e Autonomia
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            <InfoRow label="Autonomia" value={truck.autonomia} />
            <InfoRow label="Bateria" value={truck.bateria} />
            {truck.celulaCombustivel && (
              <InfoRow
                label="Célula de combustível"
                value={truck.celulaCombustivel}
              />
            )}
          </dl>
        </div>

        {/* Bloco: Desempenho */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            Desempenho
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            <InfoRow label="Potência" value={truck.potencia} />
            {truck.potenciaTotalCombinada && (
              <InfoRow
                label="Potência total combinada"
                value={truck.potenciaTotalCombinada}
              />
            )}
            <InfoRow label="Torque" value={truck.torque} />
            {truck.transmissao && (
              <InfoRow label="Transmissão" value={truck.transmissao} />
            )}
          </dl>
        </div>

        {/* Bloco: Capacidade Operacional */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            Capacidade Operacional
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            <InfoRow label="Peso Bruto Total (PBT)" value={truck.pbt} />
            <InfoRow label="Configuração de eixos" value={truck.configuracao} />
            <InfoRow label="Capacidade de carga" value={truck.capacidadeCarga} />
          </dl>
        </div>

        {/* Bloco: Recarga e Origem */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            Recarga e Origem
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            <InfoRow label="Recarga rápida" value={truck.recargaRapida} />
            <InfoRow label="Tempo de recarga (20–80%)" value={truck.tempoRecarga} />
            <InfoRow label="País(es) de origem" value={truck.paisOrigem} />
          </dl>
        </div>
      </section>

      {/* Bloco: IA e Conectividade (quando existir) */}
      {truck.iaIntegrada && (
        <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            IA, Conectividade e Recursos Avançados
          </h2>
          <p className="text-sm text-zinc-700">
            {truck.iaIntegrada}
          </p>
        </section>
      )}
    </main>
  );
}

// Componente auxiliar para linhas de informação
type InfoRowProps = {
  label: string;
  value?: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {label}
      </dt>
      <dd className="flex-1 text-right text-sm text-zinc-800">
        {value}
      </dd>
    </div>
  );
}
