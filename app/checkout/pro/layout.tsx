import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout PRO | OTIAdriver",
  description: "Finalize sua assinatura do plano PRO.",
};

export default function CheckoutProLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
