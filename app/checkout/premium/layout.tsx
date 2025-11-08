import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Premium | OTIAdriver",
  description: "Finalize sua assinatura do plano Premium.",
};

export default function CheckoutPremiumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
