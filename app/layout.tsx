 import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Header } from "@/components/Header";

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
      <Header />
        
          <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            
            {/* Lado esquerdo */}
            <div className="font-semibold text-base md:text-lg tracking-wide">
              🌐 Plataforma Oficial OTIAdriver
            </div>

            {/* Lado direito */}
            <nav className="flex space-x-6 text-sm md:text-base font-medium">
              <Link href="/" className="hover:underline">Início</Link>
              <Link href="/proposito" className="hover:underline">Propósito</Link>
              <Link href="/caminhoes-eletricos" className="hover:underline">Elétricos ⚡</Link>
              <Link href="/contato" className="hover:underline">Contato</Link>
            </nav>
          </div>
        </div>

        {/* 🔹 Espaço para o cabeçalho não cobrir o conteúdo */}
        <div className="pt-20"></div>

        {/* 🔹 Cabeçalho principal da OTIAdriver */}
        <header className="w-full flex flex-col items-center justify-center py-6 -mt-6">
          <h1 className="text-center leading-none tracking-tight font-extrabold text-4xl md:text-6xl">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
          </h1>
          <p className="mt-4 text-center font-extrabold text-black text-lg md:text-2xl">
            Conhecimento Inteligente para Motoristas
          </p>
        </header>

        {/* 🔹 Conteúdo principal do site */}
        <main className="w-full max-w-7xl px-4">{children}</main>
      </body>
    </html>
  );
        }
