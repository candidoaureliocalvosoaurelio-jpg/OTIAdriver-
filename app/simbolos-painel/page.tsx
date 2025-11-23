// app/simbolos-painel/page.tsx

import Image from "next/image";
import { painelSymbols } from "@/data/simbolosPainel";

export default function SimbolosPainelPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Símbolos do painel
        </h1>
        <p className="mt-2 text-slate-600">
          Entenda o significado dos principais indicadores de segurança e
          advertência do veículo.
        </p>
      </header>

      <div className="space-y-4">
        {painelSymbols.map((symbol) => (
          <section
            key={symbol.id}
            className="flex gap-4 rounded-xl bg-slate-50 p-4 shadow-sm"
          >
            <div className="relative h-16 w-16 flex-shrink-0">
              <Image
                src={symbol.icon}
                alt={symbol.titulo}
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                {symbol.titulo}
              </h2>

              {symbol.paragrafos.length > 0 ? (
                symbol.paragrafos.map((p, i) => (
                  <p key={i} className="mt-1 text-sm text-slate-700">
                    {p}
                  </p>
                ))
              ) : (
                <></>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
