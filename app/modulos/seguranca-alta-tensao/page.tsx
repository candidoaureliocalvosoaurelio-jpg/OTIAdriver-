// app/modulos/seguranca-alta-tensao/page.tsx
// COLE ESTE CÓDIGO FINAL

import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

// O caminho agora aponta para a pasta /content/ que criamos
const CONTENT_PATH = path.join(process.cwd(), 'content/modulos/seguranca-alta-tensao.md');

// Componente Principal (deve ser assíncrono para ler o arquivo)
export default async function SegurancaAltaTensaoPage() {
  let source: any;
  let data: any;
  let content;

  try {
    // Tenta ler o arquivo de conteúdo do disco
    content = await fs.readFile(CONTENT_PATH, 'utf-8');
  } catch (error) {
    // Se o arquivo não for encontrado, exibe a página 404
    notFound();
  }

  // Usa o gray-matter para separar o Frontmatter (metadados) do conteúdo
  const { data: frontmatter, content: mdxContent } = matter(content);
  data = frontmatter;

  // Serializa o conteúdo MDX para ser renderizado com segurança
  source = await serialize(mdxContent);

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-8">Por: {data.author} | Data: {data.date}</p>
      
      {/* Renderiza o conteúdo MDX */}
      <article className="prose lg:prose-xl">
        <MDXRemote {...source} />
      </article>
    </div>
  );
}
