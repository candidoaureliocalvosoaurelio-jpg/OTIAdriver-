"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-start px-4 py-3">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo-otia.png"
            alt="Logo OTIAdriver"
            width="90"
            height="90"
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/proposito"
            className="text-sm font-semibold text-[#004AAD] hover:underline transition"
          >
            Propósito
          </Link>
          <Link href="/sobre" className="hover:text-blue-600 transition">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-blue-600 transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
