// app/pagamento/concluido/page.tsx
import Link from "next/link";
import SyncAfterPayment from "./SyncAfterPayment";

export const metadata = {
  title: "Pagamento aprovado | OTIAdriver",
};

export const dynamic = "force-dynamic";

function normalizeLang(v: any) {
  const s = String(v || "").toLowerCase();
  return s === "en" ? "en" : "pt";
}

function safeNext(nextRaw: string | undefined, lang: string) {
  const fallback = `/caminhoes?lang=${lang}`;
  if (!nextRaw) return fallback;

  // só aceita path interno
  if (!nextRaw.startsWith("/")) return fallback;

  // bloqueia // e protocolos disfarçados
  if (nextRaw.startsWith("//")) return fallback;
  if (nextRaw.toLowerCase().startsWith("/\\") || nextRaw.toLowerCase().includes("http")) return fallback;

  // garante lang
  if (nextRaw.includes("lang=")) return nextRaw;
  return `${nextRaw}${nextRaw.includes("?") ? "&" : "?"}lang=${lang}`;
}

type PageProps = {
  searchParams?: {
    plano?: string;
    payment_id?: string;
    status?: string;
    lang?: string;
    next?: string;
  };
};

export default function PagamentoConcluido({ searchParams }: PageProps) {
  const sp = searchParams || {};

  const lang = normalizeLang(sp.lang);
  const plano = sp.plano ? String(sp.plano).toLowerCase() : "";
  const paymentId = sp.payment_id ? String(sp.payment_id) : "";
  const status = sp.status ? String(sp.status) : "";

  // ✅ melhor: respeita ?next= quando vier (com segurança)
  const next = safeNext(sp.next, lang);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white px-4 py-12">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Pagamento confirmado
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

        {/* ✅ se estiver logado, ele faz polling em /api/auth/session até liberar e redireciona */}
        <SyncAfterPayment nextUrl={next} lang={lang} />

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/entrar?lang=${lang}&next=${encodeURIComponent(next)}&reason=auth`}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-700"
          >
            Entrar agora (CPF/telefone)
          </Link>

          <Link
            href={next}
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
          >
            Continuar
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          No PIX, o Mercado Pago às vezes não redireciona automaticamente. Se você já está logado, esta tela sincroniza
          seu plano e libera o acesso assim que o webhook confirmar.
        </p>
      </div>
    </main>
  );
}
