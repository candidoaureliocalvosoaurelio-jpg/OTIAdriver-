import Link from "next/link";

export const metadata = {
  title: "Pagamento não concluído | OTIAdriver",
};

export default function PagamentoErro({
  searchParams,
}: {
  searchParams?: { plano?: string; status?: string };
}) {
  const plano = searchParams?.plano ?? "pro";
  const status = searchParams?.status ?? "failure";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Não foi possível concluir
        </h1>

        <p className="mt-2 text-slate-600">
          O pagamento falhou ou foi cancelado (<strong>{status}</strong>). Você pode tentar novamente.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <Link
            href={`/planos?lang=pt`}
            className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
          >
            Voltar aos planos
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Ir para Home
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Plano selecionado: {plano}
        </p>
      </div>
    </main>
  );
}
