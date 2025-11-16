// app/modulos/inspecao-diagnostico-ev/page.tsx
// Utilize a mesma lógica MDX robusta dos módulos anteriores.

import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { cache } from 'react';

// ATENÇÃO: Caminho atualizado para o Módulo 3
const CONTENT_PATH = path.join(process.cwd(), 'content', 'modulos', 'inspecao-diagnostico-ev.md');

const getContent = cache(async () => {
    // Lógica de leitura de arquivo (mantida igual ao Módulo 1)
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


export default async function InspecaoDiagnosticoEvPage() {
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
