// app/catalogo/page.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import { TruckGrid } from "@/components/TruckGrid";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function CatalogoPage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : undefined;
  const lang = sp?.lang ?? "pt";

  // ✅ Next 16: cookies() pode ser async
  const cookieStore = await cookies();

  // ✅ Cookie usado pelo middleware: "active" libera acesso premium
  const plan = cookieStore.get("otia_plan")?.value;
  const isPremium = plan === "active";

  // ✅ Para quem está no espelho, tudo vai para /entrar e depois retorna ao catálogo
  const loginGate = `/entrar?lang=${lang}&next=${encodeURIComponent(
    `/catalogo?lang=${lang}`
  )}`;

  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* TOPO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700">
                OTIAdriver • Catálogo
              </p>

              <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">
                Caminhões e Conteúdo Técnico
              </h1>

              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                {isPremium
                  ? "Seu acesso premium está ativo. Abra qualquer conteúdo do catálogo."
                  : "Modo demonstração: para abrir conteúdos completos, entre com CPF/telefone ou assine um plano."}
              </p>
            </div>

            {/* AÇÕES */}
            <div className="flex flex-wrap gap-3">
              {!isPremium ? (
                <>
                  <Link
                    href={`/planos?lang=${lang}`}
                    className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                  >
                    Ver planos
                  </Link>

                  <Link
                    href={loginGate}
                    className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-black"
                  >
                    Entrar (CPF/telefone)
                  </Link>

                  <Link
                    href={`/?lang=${lang}`}
                    className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
                  >
                    Voltar ao site
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={`/?lang=${lang}`}
                    className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
                  >
                    Voltar ao início
                  </Link>

                  <Link
                    href={`/api/auth/logout?lang=${lang}`}
                    className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-black"
                  >
                    Sair
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-7xl mx-auto px-4 pt-10">
        <TruckGrid
          lang={lang}
          mode={isPremium ? "premium" : "mirror"}
          loginGateHref={loginGate}
        />
      </section>
    </main>
  );
}
