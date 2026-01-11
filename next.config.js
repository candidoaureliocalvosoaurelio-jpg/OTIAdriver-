// next.config.js

const PUBLIC_NAV_PATHS = [
  "/", // home
  "/planos",
  "/entrar",
  "/suporte",
  "/privacidade",
  "/termos",
  "/catalogo",
  "/fichas-tecnicas",
];

function isPublicNavigation(url) {
  const p = url.pathname || "/";
  // exato "/" ou começa com qualquer uma das rotas públicas
  if (p === "/") return true;
  return PUBLIC_NAV_PATHS.some((base) => base !== "/" && p.startsWith(base));
}

function isProtectedNavigation(url) {
  const p = url.pathname || "/";
  // tudo que NÃO queremos cachear HTML (por segurança / cookies / conteúdo pago)
  return (
    p.startsWith("/app") ||
    p.startsWith("/caminhoes") ||
    p.startsWith("/modulos") ||
    p.startsWith("/treinamentos") ||
    p.startsWith("/pneus") ||
    p.startsWith("/simbolos-painel") ||
    p.startsWith("/pagamento")
  );
}

const runtimeCaching = [
  // API: nunca cachear
  {
    urlPattern: /^\/api\/.*$/i,
    handler: "NetworkOnly",
  },

  // ✅ Navegação HTML PÚBLICA: funciona offline (cai pro cache)
  {
    urlPattern: ({ request, url }) =>
      request.mode === "navigate" && isPublicNavigation(url),
    handler: "NetworkFirst",
    options: {
      cacheName: "html-public",
      networkTimeoutSeconds: 3, // se a rede não responder rápido, usa cache
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 dias
      },
    },
  },

  // ✅ Navegação HTML PROTEGIDA: nunca cachear (evita vazar conteúdo)
  {
    urlPattern: ({ request, url }) =>
      request.mode === "navigate" && isProtectedNavigation(url),
    handler: "NetworkOnly",
  },

  // JS/CSS do Next
  {
    urlPattern: /^\/_next\/static\/.*$/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static",
      expiration: { maxEntries: 256, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },

  // Imagens
  {
    urlPattern: /\.(png|jpg|jpeg|webp|svg|ico)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "images",
      expiration: { maxEntries: 256, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },

  // ✅ PDFs (apostilas): cacheia depois que abrir 1 vez
  {
    urlPattern: /\.(pdf)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "pdfs",
      expiration: { maxEntries: 64, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },
];

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "otiadriver.com.br" }],
        destination: "https://www.otiadriver.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(withPWA(nextConfig));
