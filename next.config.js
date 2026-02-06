// next.config.js

const PUBLIC_NAV_PATHS = [
  "/",
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
  if (p === "/") return true;
  return PUBLIC_NAV_PATHS.some((base) => base !== "/" && p.startsWith(base));
}

function isProtectedNavigation(url) {
  const p = url.pathname || "/";
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
  {
    urlPattern: /^\/api\/.*$/i,
    handler: "NetworkOnly",
  },

  {
    urlPattern: ({ request, url }) =>
      request.mode === "navigate" && isPublicNavigation(url),
    handler: "NetworkFirst",
    options: {
      cacheName: "html-public",
      networkTimeoutSeconds: 3,
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      },
    },
  },

  {
    urlPattern: ({ request, url }) =>
      request.mode === "navigate" && isProtectedNavigation(url),
    handler: "NetworkOnly",
  },

  {
    urlPattern: /^\/_next\/static\/.*$/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static",
      expiration: { maxEntries: 256, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },

  {
    urlPattern: /\.(png|jpg|jpeg|webp|svg|ico)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "images",
      expiration: { maxEntries: 256, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },

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

  // ✅ FORÇA USO DE WEBPACK (resolve erro Next 16 + PWA)
  turbopack: {},

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
