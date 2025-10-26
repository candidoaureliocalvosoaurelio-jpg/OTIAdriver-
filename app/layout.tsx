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
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo-otia.png"
              alt="Logo OTIAdriver"
              className="h-20 w-auto"
            />
            <h1 className="text-6xl md:text-8x1 font-extrabold tracking-tight text-center leading-none">
              <span className="text-[#1F6FEB]">OTIA</span>
              <span className="text-[#40E0D0]">driver</span>
            </h1>
          </div>

          <p className="mt-4 text-2xl md:text-4xl font-extrabold text-black text-center">
            Conhecimento Inteligente para Motoristas
          </p>
        </header>

        {/* 🔹 Conteúdo principal do site */}
        <main className="w-full max-w-7xl px-4">{children}</main>
      </body>
    </html>
  );
}
