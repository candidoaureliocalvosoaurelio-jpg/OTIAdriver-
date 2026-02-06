// app/pagamento/pendente/page.tsx

import PendingClient from "./PendingClient";

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PagamentoPendentePage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : undefined;

  const nextUrlParam = sp?.nextUrl;

  const nextUrl =
    typeof nextUrlParam === "string" && nextUrlParam.trim().length > 0
      ? nextUrlParam
      : "/";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Pagamento pendente</h1>
        <p className="mt-2 text-slate-700">
          Assim que o pagamento confirmar, vamos sincronizar seu acesso.
        </p>

        <PendingClient nextUrl={nextUrl} />
      </div>
    </main>
  );
}
