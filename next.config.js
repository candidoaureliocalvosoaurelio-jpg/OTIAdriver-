// next.config.js

// 1) Habilita MDX
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2) Extensões aceitas pelo roteamento
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // 3) Redirect: SEM www -> COM www (evita perda de cookies / sessão)
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

// 4) Exporta config final + MDX
module.exports = withMDX(nextConfig);
