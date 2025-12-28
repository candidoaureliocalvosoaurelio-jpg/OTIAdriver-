import Link from "next/link";

export const metadata = {
  title: "Pagamento pendente | OTIAdriver",
};

export default function PagamentoPendente({
  searchParams,
}: {
  searchParams?: { plano?: string; status?: string };
}) {
  const plano = searchParams?.plano ?? "pro";
  const status = searchParams?.status ?? "pending";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento pendente
        </h1>

        <p className="mt-2 text-slate-600">
          Seu pagamento está como <strong>{status}</strong>. Assim que for confirmado,
          o acesso ({plano}) será liberado automaticamente.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <Link
            href="/"
            className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
          >
            Ir para Home
          </Link>

          <Link
            href="/planos?lang=pt"
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Ver planos
          </Link>
        </div>
      </div>
    </main>
  );
}
