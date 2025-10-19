"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-black text-white py-3 px-6 flex justify-between items-center">
      {/* Logo → página inicial */}
      <a href="/" className="flex items-center gap-2" aria-label="Voltar para a página inicial">
        <Image src="/assets/logo-otiadriver.png" alt="OTIAdriver" width={120} height={40} />
      </a>

      {/* Menu principal */}
      <nav className="hidden md:flex gap-6 text-sm font-semibold">
        <a href="/">Introdução</a>
        <a href="/planos">Soluções</a>
        <a href="/suporte">Suporte ao Usuário</a>
        <a href="/recursos">Recursos</a>
        <a href="/essencia">Missão, Visão e Valores</a>
      </nav>

      {/* Idiomas (globo + select) */}
      <div className="flex items-center gap-2">
        <span aria-hidden>🌐</span>
        <select
          className="bg-black text-white border border-gray-700 rounded px-2 py-1 text-sm"
          defaultValue="PT-BR"
          aria-label="Selecionar idioma"
        >
          <option>PT-BR</option>
          <option>EN-US</option>
          <option>ES-ES</option>
          <option>ZH-CN</option>
        </select>
      </div>
    </header>
  );
}
