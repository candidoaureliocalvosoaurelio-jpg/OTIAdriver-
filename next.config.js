// 1. Importa a função para habilitar o MDX
const withMDX = require('@next/mdx')({
  // Opção para habilitar o suporte a arquivos .md E .mdx
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adiciona a extensão .md e .mdx ao roteamento do Next.js
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// 3. Exporta a configuração final
module.exports = withMDX(nextConfig);
