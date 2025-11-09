// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "OTIAdriver",
  description: "Conhecimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* flex + min-h-screen para permitir footer colado no fim da tela */}
      <body className="bg-gradient-to-b from-[#eef7ff] to-white text-gray-900 flex flex-col min-h-screen">

        {/* Barra azul-turquesa fixa no topo */}
        <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            {/* Lado esquerdo */}
            <div className="font-semibold text-base md:text-lg tracking-wide">
              🌐 Plataforma Oficial OTIAdriver
            </div>

            {/* Menu */}
            <nav className="flex space-x-6 text-sm md:text-base font-medium">
              <Link href="/" className="hover:underline">Início</Link>
              <Link href="/proposito" className="hover:underline">Propósito</Link>
              <Link href="/caminhoes-eletricos" className="hover:underline">Caminhões Elétricos ⚡</Link>
              <Link href="/planos" className="hover:underline">Planos</Link>
              <Link href="/pneus" className="hover:underline">Pneus</Link>
              <Link href="/contato" className="hover:underline">Contato</Link>
            </nav>
          </div>
        </div>

        {/* Espaço para não cobrir o conteúdo pela barra fixa (~56px) */}
        <div className="h-[56px]" />

        {/* Cabeçalho principal (Hero) */}
         {/* HERO global, aparece em todas as páginas */}
         <header id="site-hero" className="w-full flex flex-col items-center justify-center py-6 mt-2">
          <h1 className="text-center leading-none tracking-tight font-extrabold text-4xl md:text-6xl">
          <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
           </h1>
        <p className="mt-4 text-center font-extrabold text-black text-lg md:text-2xl">
        Conhecimento Inteligente para Motoristas
          </p>
       </header>

        {/* Conteúdo principal (flex-1 para empurrar o footer para baixo) */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4">
          {children}
        </main>

        {/* Footer global fixo ao fim da tela */}
        <footer className="mt-auto bg-gradient-to-r from-[#0F2454] to-emerald-600 text-white text-center py-4 rounded-t-2xl">
          <p>
            <a href="#" className="hover:underline">Termos e Condições</a> •{" "}
            <a href="#" className="hover:underline">Política de Privacidade</a>
          </p>
          <p className="text-sm mt-1">
            © 2025 <span className="font-bold">OTIAdriver</span> | Conhecimento Inteligente para Motoristas
          </p>
        </footer>

      </body>
    </html>
  );
}
