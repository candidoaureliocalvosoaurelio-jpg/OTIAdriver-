// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
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
      {/* flex + min-h-screen para permitir footer colado no fim da tela */}
      <body className="bg-gradient-to-b from-[#eef7ff] to-white text-gray-900 flex flex-col min-h-screen">
        {/* Barra azul-turquesa fixa no topo (ATUALIZADA) */}
        <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            {/* Marca */}
            <Link href="/" className="font-extrabold tracking-tight">
              Plataforma Oficial OTIAdriver
            </Link>

            {/* Navegação (SEM Contato + COM Inspeção e Manutenção) */}
            <nav className="hidden md:flex items-center gap-6 font-medium">
              <Link href="/" className="hover:underline">Início</Link>
              <Link href="/proposito" className="hover:underline">Propósito</Link>
              <Link href="/caminhoes-eletricos" className="hover:underline">
                Caminhões Elétricos <span aria-hidden>⚡</span>
              </Link>
              <Link href="/planos" className="hover:underline">Planos</Link>
              <Link href="/pneus" className="hover:underline">Pneus</Link>
              <Link href="/inspecao-manutencao" className="hover:underline">
                Inspeção e Manutenção
              </Link>
              {/* <Link href="/contato" className="hover:underline">Contato</Link>  ← removido */}
            </nav>
          </div>
        </div>

        {/* empurra o conteúdo para baixo da barra fixa */}
        <div className="h-[56px]" />

        {/* conteúdo das páginas */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
