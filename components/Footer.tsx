import Link from "next/link";
import AdsenseUnit from "@/components/AdsenseUnit";

type Social = {
  name: string;
  href: string;
  icon: string;
};

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/otiadriver",
    icon: "/social/instagram.png",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@otiadriver",
    icon: "/social/threads.png",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@otiadriver0",
    icon: "/social/tiktok.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@OTIADRIVER",
    icon: "/social/youtube.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/otiadriver-conhecimento-inteligente-para-motoristas-663b713a6",
    icon: "/social/linkedin.png",
  },
];

export default function Footer() {
  return (
    <>
      {/* ✅ ANÚNCIO FIXO ACIMA DO RODAPÉ */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <AdsenseUnit slot="9672985932" />
      </div>

      <footer className="w-full bg-gradient-to-r from-[#0A1D4D] to-[#038C73] text-white py-10 mt-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
          {/* LADO ESQUERDO */}
          <div className="text-center md:text-left space-y-2 text-sm">
            <div className="space-x-4">
              <Link href="/termos" className="hover:underline">
                Termos e Condições
              </Link>
              <span>•</span>
              <Link href="/privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link href="/cookies" className="hover:underline">
                Política de Cookies
              </Link>
            </div>

            <p>
              © 2025 <strong>OTIAdriver</strong> | Conhecimento Inteligente para Motoristas
            </p>
          </div>

          {/* LADO DIREITO — REDES SOCIAIS */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm font-semibold mb-3">Siga a OTIAdriver</span>

            <div className="flex gap-5">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="group flex flex-col items-center text-xs"
                >
                  <div className="w-14 h-14 p-2 rounded-2xl bg-white/10 ring-1 ring-white/20 shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <span className="mt-2 text-white/90 group-hover:text-white">
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
