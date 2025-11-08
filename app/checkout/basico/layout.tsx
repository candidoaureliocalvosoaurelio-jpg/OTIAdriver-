import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Básico | OTIAdriver",
  description: "Finalize sua assinatura do plano Básico.",
};

export default function CheckoutBasicoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
