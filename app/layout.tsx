// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header"; // ✅ importa o Header certo

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
        {/* ✅ Usa o Header importado */}
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-1 mt-[70px]">{children}</main>
      </body>
    </html>
  );
}
