 1 | import "./globals.css";
 2 | import type { Metadata } from "next";
 3 | import Link from "next/link";
 4 | import React from "react";
 5 |
 6 | export const metadata: Metadata = {
 7 |   title: "OTIAdriver",
 8 |   description: "Conhecimento Inteligente para Motoristas",
 9 | };
10 |
11 | export default function RootLayout({
12 |   children,
13 | }: {
14 |   children: React.ReactNode;
15 | }) {
16 |   return (
17 |     <html lang="pt-BR">
18 |       <body className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-white flex flex-col items-center">
19 |
20 |         {/* 🔹 CABEÇALHO SUPERIOR FIXO */}
21 |         <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white shadow-md">
22 |           <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
23 |             {/* Lado esquerdo */}
24 |             <div className="font-semibold text-base md:text-lg tracking-wide">
25 |               🌍 Plataforma Oficial OTIAdriver
26 |             </div>
27 |
28 |             {/* Lado direito */}
29 |             <nav className="flex space-x-6 text-sm md:text-base font-medium">
30 |               <Link href="/" className="hover:underline">Início</Link>
31 |               <Link href="/proposito" className="hover:underline">Propósito</Link>
32 |               <Link href="/caminhoes-eletricos" className="hover:underline">Elétricos ⚡</Link>
33 |               <Link href="/contato" className="hover:underline">Contato</Link>
34 |             </nav>
35 |           </div>
36 |         </div>
37 |
38 |         {/* 🔹 Espaçamento para o cabeçalho não cobrir o conteúdo */}
39 |         <div className="pt-16"></div>
40 |
41 |         {/* Cabeçalho principal da OTIAdriver */}
42 |         <header className="w-full flex flex-col items-center justify-center py-10">
43 |           <h1 className="text-center leading-none tracking-tight font-extrabold text-6xl md:text-8xl">
44 |             <span className="text-[#1F6FEB]">OTIA</span>
45 |             <span className="text-[#40E0D0]">driver</span>
46 |           </h1>
47 |           <p className="mt-4 text-center font-extrabold text-black text-2xl md:text-4xl">
48 |             Conhecimento Inteligente para Motoristas
49 |           </p>
50 |         </header>
51 |
52 |         {/* Conteúdo principal do site */}
53 |         <main className="w-full max-w-7xl px-4">{children}</main>
54 |
55 |       </body>
56 |     </html>
57 |   );
58 | }
