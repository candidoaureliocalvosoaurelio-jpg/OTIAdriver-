// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssinaturaHero from "@/components/AssinaturaHero";

export const metadata: Metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-[#eef7ff] to-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <div className="h-[72px] md:h-[80px]" />

        <div
          id="site-hero"
          className="max-w-7xl mx-auto px-4 pt-6 pb-6 md:pb-8 text-center"
        >
          <h1 className="text-[44px] md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl font-semibold text-slate-900">
            Conhecimento Inteligente para Motoristas
          </p>
        </div>

        <AssinaturaHero />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
