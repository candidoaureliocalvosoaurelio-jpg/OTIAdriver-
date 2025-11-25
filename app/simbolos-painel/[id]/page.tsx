// app/simbolos-painel/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getAllSymbols, getSymbolById } from "../symbolData";

type PageProps = {
  params: { id: string };
};

// Gera as rotas estáticas /simbolos-painel/1 ... /simbolos-painel/51
export function generateStaticParams() {
  const symbols = getAllSymbols();
  return symbols.map((s) => ({ id: String(s.id) }));
}

export default function SymbolPage({ params }: PageProps) {
  const id = Number(params.id);
  const symbol = getSymbolById(id);

  if (!symbol) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">Símbolo não encontrado</h1>
        <Link
          href="/simbolos-painel"
          className="text-sky-700 hover:underline font-semibold"
        >
          Voltar para a lista de símbolos
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/simbolos-painel"
          className="text-sm text-sky-700 hover:underline font-semibold"
        >
          ← Voltar para Símbolos do Painel
        </Link>

        <div className="mt-4 flex items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 w-28 h-28">
            <Image
              src={symbol.imagePath}
              alt={symbol.title}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {symbol.title}
            </h1>

            <p className="text-gray-700 leading-relaxed">
              Aqui você pode adicionar a descrição técnica completa desse
              símbolo: quando acende, causas mais comuns, riscos envolvidos e
              a ação operacional recomendada para o motorista.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
