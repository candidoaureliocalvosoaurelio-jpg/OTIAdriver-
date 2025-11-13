// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
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

        {/* espaçamento da barra fixa */}
        <div className="h-[56px]" />

        {/* HERO PADRÃO DO SITE (aparece em TODAS as páginas) */}
        <div id="site-hero" className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-center">
          <h1 className="text-[44px] md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
          </h1>
          <p className="mt-1 text-lg md:text-xl font-semibold">
            Conhecimento Inteligente para Motoristas
          </p>
        </div>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
