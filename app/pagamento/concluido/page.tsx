// app/pagamento/concluido/page.tsx
import Link from "next/link";
import SyncAfterPayment from "./SyncAfterPayment";

export const metadata = {
  title: "Pagamento aprovado | OTIAdriver",
};

export const dynamic = "force-dynamic";

export default function PagamentoConcluido({
  searchParams,
}: {
  searchParams?: {
    plano?: string;
    payment_id?: string;
    status?: string;
    lang?: string;
    next?: string;
  };
}) {
  const lang = searchParams?.lang ?? "pt";
  const plano = searchParams?.plano;
  const paymentId = searchParams?.payment_id ?? "";
  const status = searchParams?.status ?? "";

  // ✅ Para onde voltar depois
  const next = searchParams?.next || `/catalogo?lang=${lang}`;

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

        {/* ✅ Sincroniza plano/cookies e redireciona automaticamente se já estiver logado */}
        <SyncAfterPayment nextUrl={next} lang={lang} />

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/entrar?lang=${lang}&next=${encodeURIComponent(next)}`}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-700"
          >
            Entrar agora (CPF/telefone)
          </Link>

          <a
            href={next}
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Ir para o catálogo
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Após o pagamento, o sistema sincroniza seu plano pelo CPF e libera o acesso.
          Se cair em “Entrar” ou “Planos”, geralmente é porque o cookie não está sendo
          reconhecido (www/sem www) ou a sincronização ainda não ocorreu.
        </p>
      </div>
    </main>
  );
}
