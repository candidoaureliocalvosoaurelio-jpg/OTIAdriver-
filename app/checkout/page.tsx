// app/checkout/page.tsx
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function CheckoutRouter({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) {
  const plan = (searchParams?.plan || "").toLowerCase();

  if (plan === "basico" || plan === "básico") redirect("/checkout/basico");
  if (plan === "pro") redirect("/checkout/pro");
  if (plan === "premium") redirect("/checkout/premium");

  // fallback: volta para planos
  redirect("/planos");
}
