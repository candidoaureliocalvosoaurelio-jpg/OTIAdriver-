import "./globals.css";
import type { Metadata } from "next";
import React from "react";

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
      <body className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white flex flex-col items-center">

        {/* 🔹 Cabeçalho principal da OTIAdriver */}
        <header className="w-full flex flex-col items-center justify-center py-10">
          <h1 className="text-center leading-none tracking-tight font-extrabold text-6xl md:text-8xl">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
          </h1>
          <p className="mt-4 text-center font-extrabold text-black text-2xl md:text-4xl">
            Conhecimento Inteligente para Motoristas
          </p>
        </header>

        {/* 🔹 Conteúdo principal do site */}
        <main className="w-full max-w-7xl px-4">{children}</main>

      </body>
    </html>
  );
}
