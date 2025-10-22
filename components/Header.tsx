import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0A2A6C] via-[#1473E6] to-[#0AD88F] text-white shadow-md">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <span className="text-lg sm:text-xl font-bold tracking-wide">
          OTIAdriver
        </span>
        <nav className="space-x-4 text-sm sm:text-base font-medium">
          <a href="/essencia" className="hover:underline">Essência</a>
          <a href="/planos" className="hover:underline">Planos</a>
          <a href="/suporte" className="hover:underline">Suporte</a>
        </nav>
      </div>
    </header>
  );
}
