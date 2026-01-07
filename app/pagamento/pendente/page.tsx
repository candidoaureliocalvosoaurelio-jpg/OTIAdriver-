// app/pagamento/pendente/page.tsx
import Link from "next/link";
import PendingClient from "./PendingClient";

export const metadata = {
  title: "Pagamento pendente | OTIAdriver",
};

export const dynamic = "force-dynamic";

export default function PagamentoPendente({
  searchParams,
}: {
  searchParams?: {
    plano?: string;
    status?: string;
    lang?: string;
    payment_id?: string;
  };
}) {
  const lang = searchParams?.lang ?? "pt";
  const plano = searchParams?.plano ?? "basico";
  const status = searchParams?.status ?? "pending";
  const paymentId = searchParams?.payment_id ?? "";

  // ✅ destino final: página das marcas (home interna)
  const next = `/caminhoes?lang=${lang}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento pendente
        </h1>

        <p className="mt-2 text-slate-600">
          Seu pagamento está como <strong>{status}</strong>. Em PIX, a confirmação
          pode levar alguns instantes. Assim que for confirmado, o acesso do plano{" "}
          <strong>{plano.toUpperCase()}</strong> será liberado.
        </p>

        {(paymentId || status || plano) && (
          <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
            <p>
              <strong>Plano:</strong> {plano.toUpperCase()}
            </p>
            <p>
              <strong>Status:</strong> {status}
            </p>
            {paymentId && (
              <p>
                <strong>Pagamento:</strong> {paymentId}
              </p>
            )}
          </div>
        )}

        {/* ✅ Verifica automaticamente e redireciona quando liberar */}
        <PendingClient nextUrl={next} />

        <div className="mt-6 flex gap-3 flex-wrap">
          <Link
            href={`/entrar?lang=${lang}&next=${encodeURIComponent(next)}&reason=auth`}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-700"
          >
            Já paguei — entrar e liberar acesso
          </Link>

          <Link
            href={next}
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Ir para caminhões (marcas)
          </Link>

          <Link
            href={`/planos?lang=${lang}`}
            className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
          >
            Ver planos
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Alguns bancos não retornam automaticamente para a loja após o PIX. Se
          necessário, volte para o site e clique em “Entrar”.
        </p>
      </div>
    </main>
  );
}
