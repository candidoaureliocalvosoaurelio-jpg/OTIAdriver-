export default function Footer() {...}
  return (
    <footer className="w-full bg-gradient-to-r from-[#0AD88F] via-[#1473E6] to-[#0A2A6C] text-white text-center text-sm py-6 shadow-inner border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex gap-4">
          <a href="/termos" className="hover:underline">
            Termos e Condições
          </a>
          <a href="/privacidade" className="hover:underline">
            Política de Privacidade
          </a>
        </div>
        <p className="mt-2 md:mt-0">
          © {new Date().getFullYear()} <strong>OTIAdriver</strong> — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
