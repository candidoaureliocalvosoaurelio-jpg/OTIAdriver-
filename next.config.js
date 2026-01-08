// next.config.js

const runtimeCaching = [
  // API: nunca cachear
  {
    urlPattern: /^\/api\/.*$/i,
    handler: "NetworkOnly",
  },

  // Navegação HTML: sempre respeita cookies
  {
    urlPattern: ({ request }) => request.mode === "navigate",
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
