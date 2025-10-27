// app/checkout/[plan]/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PRICING } from "@/data/pricing";

type Props = { params: { plan: string } };

// Normaliza o slug vindo da URL
function normalizeSlug(s: string) {
  return decodeURIComponent(s).trim().toLowerCase();
}

// Tenta achar o plano dentro de PRICING (estrutura flexível)
function findPlan(slug: string) {
  const plans = (PRICING as any[]) || [];
  const s = normalizeSlug(slug);
  return (
    plans.find((p) => normalizeSlug(p?.slug ?? p?.id ?? p?.name ?? "") === s) ??
    plans.find((p) => normalizeSlug(p?.name ?? "") === s) ??
    null
  );
}

// SEO dinâmico
export function generateMetadata({ params }: Props): Metadata {
  const plan = findPlan(params.plan);
  if (!plan) {
    return {
      title: "Plano não encontrado — OTIAdriver",
      description: "Selecione um plano válido para continuar o checkout."
    };
  }
  return {
    title: `${plan?.name ?? "Plano"} | Checkout — OTIAdriver`,
    description: `Finalize a assinatura do plano ${plan?.name ?? ""} na OTIAdriver.`
  };
}

export default function CheckoutPage({ params }: Props) {
  const plan = findPlan(params.plan);
  if (!plan) return notFound();

  // Campos com fallback para evitar erros de tipagem/estrutura
  const name: string = plan?.name ?? "Plano";
  const price: string = plan?.price ?? plan?.valor ?? "";
  const period: string = plan?.period ?? plan?.periodo ?? "/mês";
  const features: string[] = (plan?.features as string[]) ?? [];
  const mpLink: string | undefined = plan?.mercadoPagoUrl ?? plan?.mpUrl ?? plan?.link;

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-6">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Voltar
          </Link>
        </div>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-8 shadow-xl">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Checkout — {name}
            </h1>
            <p className="mt-2 text-gray-300">
              Revise os detalhes do seu plano e escolha o método de pagamento.
            </p>
          </header>

          {/* Card de resumo do plano */}
          <div className="rounded-xl bg-zinc-950/60 border border-white/10 p-5 md:p-6 mb-8">
            <div className="flex items-end gap-2">
              <div className="text-4xl font-extrabold text-white leading-none">
                {price}
              </div>
              <div className="pb-1 text-gray-300">{period}</div>
            </div>
            <div className="mt-3 text-gray-200">
              <ul className="list-disc pl-5 space-y-1">
                {features.length > 0 ? (
                  features.map((f, i) => <li key={i}>{f}</li>)
                ) : (
                  <li>Benefícios do plano {name}</li>
                )}
              </ul>
            </div>
          </div>

          {/* Botões de pagamento */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Mercado Pago */}
            {mpLink ? (
              <a
                href={mpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-500 transition"
              >
                <Image
                  src="/assets/mercadopago-logo.png"
                  alt="Mercado Pago"
                  width={22}
                  height={22}
                />
                <span className="ml-2">Pagar com Mercado Pago</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600/40 px-6 py-3 font-semibold text-white/70 cursor-not-allowed"
                title="Link do Mercado Pago não configurado"
              >
                <Image
                  src="/assets/mercadopago-logo.png"
                  alt="Mercado Pago"
                  width={22}
                  height={22}
                />
                <span className="ml-2">Mercado Pago indisponível</span>
              </button>
            )}

            {/* PIX (exemplo opcional — ajuste conforme sua integração) */}
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-500 transition"
            >
              <Image
                src="/assets/pix-logo.png"
                alt="PIX"
                width={22}
                height={22}
              />
              <span className="ml-2">Pagar via PIX</span>
            </a>
          </div>

          {/* Avisos legais */}
          <p className="mt-6 text-xs text-gray-400">
            Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade da OTIAdriver.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
