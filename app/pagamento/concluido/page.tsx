import Link from "next/link";

export const metadata = {
  title: "Pagamento aprovado | OTIAdriver",
};

export const dynamic = "force-dynamic";

export default function PagamentoConcluido({
  searchParams,
}: {
  searchParams?: { plano?: string; payment_id?: string; status?: string; lang?: string };
}) {
  const lang = searchParams?.lang ?? "pt";
  const plano = searchParams?.plano; // pode vir vazio
  const paymentId = searchParams?.payment_id ?? "";
  const status = searchParams?.status ?? "";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento aprovado
        </h1>

        <p className="mt-2 text-slate-600">
          Obrigado. Seu pagamento foi confirmado.
          {plano ? (
            <>
              {" "}
              Vamos liberar seu acesso do plano <strong>{plano.toUpperCase()}</strong>.
            </>
          ) : (
            <> Vamos liberar seu acesso.</>
          )}
        </p>

        {(paymentId || status) && (
          <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
            {status && (
              <p>
                <strong>Status:</strong> {status}
              </p>
            )}
            {paymentId && (
              <p>
                <strong>Pagamento:</strong> {paymentId}
              </p>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/entrar?lang=${lang}`}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-700"
          >
            Entrar agora (CPF/telefone)
          </Link>

          <Link
            href={`/?lang=${lang}`}
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Voltar ao site
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Após entrar, o sistema reconhece seu CPF e libera o acesso premium automaticamente.
          Se você cair em “Planos”, aguarde alguns instantes e tente novamente.
        </p>
      </div>
    </main>
  );
}
