import Link from "next/link";

export const metadata = {
  title: "Pagamento aprovado | OTIAdriver",
};

export default function PagamentoConcluido({
  searchParams,
}: {
  searchParams?: { plano?: string; payment_id?: string; status?: string };
}) {
  const plano = searchParams?.plano ?? "pro";
  const paymentId = searchParams?.payment_id ?? "";
  const status = searchParams?.status ?? "";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento aprovado
        </h1>

        <p className="mt-2 text-slate-600">
          Obrigado. Estamos processando a liberação do seu acesso ({plano}).
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
            href="/"
            className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
          >
            Ir para a página inicial
          </Link>

          <Link
            href="/entrar?lang=pt"
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Fazer login (CPF/telefone)
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Se seu acesso ainda não liberou, aguarde alguns segundos (confirmação via webhook).
        </p>
      </div>
    </main>
  );
}
