// app/pagamento/concluido/page.tsx
import Link from "next/link";
import SyncAfterPayment from "./SyncAfterPayment";

export const metadata = {
  title: "Pagamento aprovado | OTIAdriver",
};

export const dynamic = "force-dynamic";

type SearchParams = {
  plano?: string;
  payment_id?: string;
  status?: string;
  lang?: string;
  next?: string;
};

type PageProps = {
  searchParams?: Promise<SearchParams>;
};

export default async function PagamentoConcluido({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : undefined;

  const lang = sp?.lang ?? "pt";
  const plano = sp?.plano ?? "premium";
  const paymentId = sp?.payment_id ?? "";
  const status = sp?.status ?? "";

  // ✅ destino fixo pós-pagamento
  const next = `/caminhoes?lang=${lang}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento aprovado
        </h1>

        <p className="mt-2 text-slate-600">
          Obrigado. Seu pagamento foi confirmado. Vamos liberar seu acesso{" "}
          <strong>{plano.toUpperCase()}</strong>.
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

        {/* ✅ Se estiver logado: tenta sync forçado + redirect automático */}
        <SyncAfterPayment
          nextUrl={next}
          lang={lang}
          plano={plano}
          paymentId={paymentId}
          status={status}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/entrar?lang=${lang}&next=${encodeURIComponent(
              `/pagamento/concluido?lang=${lang}&plano=${encodeURIComponent(plano)}${
                paymentId ? `&payment_id=${encodeURIComponent(paymentId)}` : ""
              }${status ? `&status=${encodeURIComponent(status)}` : ""}`
            )}&reason=auth`}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-700"
          >
            Entrar agora (CPF/telefone)
          </Link>

          <Link
            href={next}
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Ir para caminhões (marcas)
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Se após pagar você cair em “Entrar”, é normal: o navegador pode não ter sessão.
          Basta entrar 1 vez e o acesso será liberado automaticamente.
        </p>
      </div>
    </main>
  );
}

