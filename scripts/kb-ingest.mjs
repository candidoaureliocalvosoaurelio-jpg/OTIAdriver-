import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "node:fs";
import path from "node:path";
import * as pdfParse from "pdf-parse";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const ROOT = process.cwd();
const pdf = pdfParse.default || pdfParse;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

function walk(dir, exts) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    if (!fs.existsSync(d)) continue;
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) stack.push(p);
      else {
        const ext = path.extname(ent.name).toLowerCase();
        if (!exts || exts.has(ext)) out.push(p);
      }
    }
  }
  return out;
}

function readText(file) {
  return fs.readFileSync(file, "utf8");
}

function cleanText(t) {
  return String(t || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function chunkText(text, maxChars = 1200, overlap = 120) {
  const t = cleanText(text);
  if (!t) return [];
  const chunks = [];
  let i = 0;
  while (i < t.length) {
    const end = Math.min(t.length, i + maxChars);
    chunks.push(t.slice(i, end));
    i = end - overlap;
    if (i < 0) i = 0;
    if (end === t.length) break;
  }
  return chunks.filter(Boolean);
}

async function embed(text) {
  const r = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return r.data[0].embedding;
}

async function upsertDocument({ doc_key, source, title, relPath, tags, content }) {
  const { data, error } = await supabase
    .from("kb_documents")
    .upsert(
      {
        doc_key,
        source,
        title,
        path: relPath,
        tags: tags || [],
        content,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "doc_key" }
    )
    .select("id")
    .single();

  if (error) throw error;
  return data.id;
}

async function deleteChunksByDoc(docId) {
  const { error } = await supabase.from("kb_chunks").delete().eq("doc_id", docId);
  if (error) throw error;
}

async function insertChunks(docId, chunks, metaBase) {
  for (let i = 0; i < chunks.length; i++) {
    const content = chunks[i];
    const embedding = await embed(content);

    const { error } = await supabase.from("kb_chunks").insert({
      doc_id: docId,
      chunk_index: i,
      content,
      embedding,
      meta: { ...metaBase, chunk: i },
      created_at: new Date().toISOString(),
    });

    if (error) throw error;
  }
}

function rel(p) {
  return p.replace(ROOT, "").replace(/^[\\/]/, "");
}

/** Extrai dados do data/simbolosPainel.ts (id/titulo/icon) */
function parseSimbolosPainel(tsText) {
  const items = [];
  const objRe = /\{\s*id:\s*"([^"]+)"[\s\S]*?icon:\s*"([^"]+)"[\s\S]*?titulo:\s*"([^"]+)"[\s\S]*?\}/g;
  let m;
  while ((m = objRe.exec(tsText))) {
    items.push({ id: m[1], icon: m[2], titulo: m[3] });
  }
  return items;
}

async function ingestMarkdown() {
  const files = walk(path.join(ROOT, "content"), new Set([".md", ".mdx"]));
  for (const f of files) {
    const txt = readText(f);
    const relPath = rel(f);
    const title = path.basename(f).replace(/\.(md|mdx)$/i, "").replace(/[-_]/g, " ");
    const doc_key = `md:${relPath}`;
    const docId = await upsertDocument({
      doc_key,
      source: "md",
      title,
      relPath,
      tags: [relPath.split(path.sep)[1] || "conteudo"],
      content: cleanText(txt),
    });

    await deleteChunksByDoc(docId);
    const chunks = chunkText(txt);
    await insertChunks(docId, chunks, { source: "md", title, path: relPath });
    console.log(`✅ MD: ${relPath} (${chunks.length} chunks)`);
  }
}

async function ingestJsonAlertas() {
  const f = path.join(ROOT, "data", "alertas.json");
  if (!fs.existsSync(f)) return;
  const relPath = rel(f);
  const raw = JSON.parse(readText(f));
  const pretty = cleanText(JSON.stringify(raw, null, 2));

  const doc_key = `json:${relPath}`;
  const docId = await upsertDocument({
    doc_key,
    source: "json",
    title: "Alertas (SEO / Base)",
    relPath,
    tags: ["alertas"],
    content: pretty,
  });

  await deleteChunksByDoc(docId);
  const chunks = chunkText(pretty);
  await insertChunks(docId, chunks, { source: "json", title: "Alertas", path: relPath });
  console.log(`✅ JSON: ${relPath} (${chunks.length} chunks)`);
}

async function ingestSimbolosPainel() {
  const f = path.join(ROOT, "data", "simbolosPainel.ts");
  if (!fs.existsSync(f)) return;

  const relPath = rel(f);
  const tsText = readText(f);
  const items = parseSimbolosPainel(tsText);

  const lines = items.map(
    (x) => `ID: ${x.id}\nTítulo: ${x.titulo}\nÍcone: ${x.icon}\n`
  ).join("\n---\n");

  const doc_key = `ts:${relPath}`;
  const docId = await upsertDocument({
    doc_key,
    source: "ts",
    title: "Símbolos do Painel (Catálogo)",
    relPath,
    tags: ["simbolos", "painel"],
    content: lines,
  });

  await deleteChunksByDoc(docId);
  const chunks = chunkText(lines);
  await insertChunks(docId, chunks, { source: "ts", title: "Símbolos do Painel", path: relPath });
  console.log(`✅ TS: ${relPath} (${chunks.length} chunks)`);
}

async function ingestHtmlRoot() {
  const htmlFiles = walk(ROOT, new Set([".html"])).filter((p) => rel(p).split(path.sep).length <= 2);
  for (const f of htmlFiles) {
    const relPath = rel(f);
    const txt = readText(f)
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ");
    const content = cleanText(txt);
    if (!content) continue;

    const doc_key = `html:${relPath}`;
    const title = path.basename(f).replace(/\.html$/i, "");
    const docId = await upsertDocument({
      doc_key,
      source: "html",
      title,
      relPath,
      tags: ["html"],
      content,
    });

    await deleteChunksByDoc(docId);
    const chunks = chunkText(content);
    await insertChunks(docId, chunks, { source: "html", title, path: relPath });
    console.log(`✅ HTML: ${relPath} (${chunks.length} chunks)`);
  }
}

async function ingestPdfs() {
  const pdfFiles = [
    ...walk(path.join(ROOT, "public"), new Set([".pdf"])),
    ...walk(ROOT, new Set([".pdf"])),
  ];

  // evita duplicar PDFs fora do public (se já estiverem dentro)
  const seen = new Set();
  const files = pdfFiles.filter((p) => {
    const rp = rel(p);
    if (seen.has(rp)) return false;
    seen.add(rp);
    return true;
  });

  for (const f of files) {
    const relPath = rel(f);
    const buf = fs.readFileSync(f);
    let text = "";
    try {
      const out = await pdf(buf);
      text = cleanText(out.text || "");
    } catch {
      text = "";
    }
    if (!text || text.length < 50) {
      console.log(`⚠️ PDF sem texto (provável imagem): ${relPath}`);
      continue;
    }

    const title = path.basename(f).replace(/\.pdf$/i, "");
    const doc_key = `pdf:${relPath}`;
    const docId = await upsertDocument({
      doc_key,
      source: "pdf",
      title,
      relPath,
      tags: ["pdf"],
      content: text,
    });

    await deleteChunksByDoc(docId);
    const chunks = chunkText(text, 1400, 140);
    await insertChunks(docId, chunks, { source: "pdf", title, path: relPath });
    console.log(`✅ PDF: ${relPath} (${chunks.length} chunks)`);
  }
}

async function main() {
  if (!process.env.OPENAI_API_KEY) throw new Error("Faltou OPENAI_API_KEY");
  if (!process.env.SUPABASE_URL) throw new Error("Faltou SUPABASE_URL");
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error("Faltou SUPABASE_SERVICE_ROLE_KEY");

  console.log("🚛🔥 Ingestão OTIAdriver KB iniciada...");

  await ingestMarkdown();
  await ingestJsonAlertas();
  await ingestSimbolosPainel();
  await ingestHtmlRoot();
  await ingestPdfs();

  console.log("✅✅ KB pronta! Agora a Copilot IA já consegue responder com base no seu conteúdo.");
}

main().catch((e) => {
  console.error("❌ Erro ingestão:", e);
  process.exit(1);
});
