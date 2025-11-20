// app/modulos/carregamento-eficiente/page.tsx
// Versão compatível com App Router usando next-mdx-remote/rsc

import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function CarregamentoEficientePage() {
    const filePath = path.join(
        process.cwd(),
        'content',
        'modulos',
        'carregamento-eficiente.md'
    );

    let raw;

    try {
        raw = await fs.readFile(filePath, 'utf-8');
    } catch (err) {
        console.error("Arquivo MD não encontrado:", filePath);
        notFound();
    }

    const { content, data } = matter(raw);

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
                {data?.title ?? "Título Não Encontrado"}
            </h1>

            <p className="text-gray-500 mb-8">
                Por: {data?.author ?? "—"} | Data: {data?.date ?? "—"}
            </p>

            <article className="prose lg:prose-xl">
                <MDXRemote source={content} />
            </article>
        </div>
    );
}
