"use client";
import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-start gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoMark size={70} />
        </Link>

        {/* Nome e slogan */}
        <div className="leading-tight">
          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-700">OTIA</span>
            <span className="text-green-600">driver</span>
          </h1>
          <p className="text-gray-600 font-semibold text-sm">
            Conhecimento Inteligente para Motoristas
          </p>
        </div>
      </div>
    </header>
  );
}
