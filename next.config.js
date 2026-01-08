// next.config.js

// 1) Runtime caching seguro para site com cookies (auth/planos)
const runtimeCaching = [
  // API: nunca cachear (sessão, pagamento, webhooks etc.)
  {
    urlPattern: /^\/api\/.*$/i,
    handler: "NetworkOnly",
    method: "GET",
  },

  // Navegação HTML: sempre buscar da rede (respeita cookies atuais)
  {
    urlPattern: ({ request }) => request.mode === "navigate",
    handler: "NetworkOnly",
  },

  // Assets do Next (JS/CSS chunks): cache forte
  {
    urlPattern: /^\/_next\/static\/.*$/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static",
      expiration: { maxEntries: 256, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },

  // Imagens/ícones
  {
    urlPattern: /\.(?:png|jpg|jpeg|webp|gif|svg|ico)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "images",
      expiration: { maxEntries: 256, maxAgeSeconds: 14 * 24 * 60 * 60 },
    },
  },

  // Fontes
  {
    urlPattern: /\.(?:woff2|woff|ttf|otf)$/i,
    handler: "CacheFirst",
    options: {
      cacheName: "fonts",
      expiration: { maxEntries: 64, maxAgeSeconds: 365 * 24 * 60 * 60 },
    },
  },
];

// 2) Habilita PWA
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
});

// 3) Habilita MDX (como você já tem)
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true, // recomendo manter ligado

  // Redirect: SEM www -> COM www
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

// 4) Export final: MDX + PWA + config
module.exports = withMDX(withPWA(nextConfig));
