// app/pagamento/pendente/page.tsx
import PendingClient from "./PendingClient";

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

function pickString(v: string | string[] | undefined) {
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v[0];
  return "";
}

export default async function PagamentoPendentePage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : undefined;

  const nextUrlParam = pickString(sp?.nextUrl);
  const paymentIdParam = pickString(sp?.payment_id) || pickString(sp?.paymentId);
  const topicParam = pickString(sp?.topic) || pickString(sp?.type);

  const nextUrl =
    typeof nextUrlParam === "string" && nextUrlParam.trim().length > 0 ? nextUrlParam : "/";

  const payment_id = (paymentIdParam || "").trim();
  const topic = (topicParam || "").trim();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Pagamento pendente</h1>
        <p className="mt-2 text-slate-700">
          Assim que o pagamento confirmar, vamos sincronizar seu acesso automaticamente.
        </p>

        <PendingClient nextUrl={nextUrl} payment_id={payment_id} topic={topic} />
      </div>
    </main>
  );
}
