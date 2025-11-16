// app/modulos/carregamento-eficiente/page.tsx
// Utilize a lógica MDX que já está funcionando.

import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { cache } from 'react';

// Define o caminho para o arquivo .md do Módulo 2
const getContent = cache(async () => {
    // CORREÇÃO: Usa path.resolve para garantir o caminho absoluto no servidor
    const CONTENT_PATH = path.resolve(process.cwd(), 'content', 'modulos', 'carregamento-eficiente.md');
    
    let content;

    try {
        content = await fs.readFile(CONTENT_PATH, 'utf-8');
    } catch (error) {
        console.error("Erro ao ler arquivo Markdown:", CONTENT_PATH, error);
        notFound();
    }

    const { data: frontmatter, content: mdxContent } = matter(content);
    const source = await serialize(mdxContent, { parseFrontmatter: true });

    return { source, data: frontmatter };
});


export default async function CarregamentoEficientePage() {
    const result = await getContent();
    
    if (!result) {
        return notFound();
    }

    const { source, data } = result;

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{data?.title || "Título Não Encontrado"}</h1>
            <p className="text-gray-500 mb-8">Por: {data?.author} | Data: {data?.date || "—"}</p>
            
            <article className="prose lg:prose-xl">
                <MDXRemote {...source} />
            </article>
        </div>
    );
}
