import fs from "node:fs/promises";
import path from "path";
import {compile, run} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export type Article = {
    slug: string;
    title: string;
    date: string;
    keywords: string[];
}

export async function getArticles(): Promise<Article[]> {
    const dir = "./content/articles";
    const files = (await fs.readdir(dir)).filter(p => path.extname(p).toLowerCase() === ".mdx");

    const articles = await Promise.all(files.map(async (file) => {
        const content = await fs.readFile(path.join(dir, file), "utf-8");
        const stat = await fs.stat(path.join(dir, file));
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const dateMatch = content.match(/\{\/\*\s*date:\s*(\d{4}-\d{2}-\d{2})\s*\*\/\}/);
        const keywordsMatch = content.match(/\{\/\*\s*keywords:\s*(.+?)\s*\*\/\}/);
        return {
            slug: file,
            title: titleMatch ? titleMatch[1] : file.replace(".mdx", ""),
            date: dateMatch ? dateMatch[1] : stat.mtime.toISOString().split("T")[0],
            keywords: keywordsMatch ? keywordsMatch[1].split(",").map(k => k.trim()) : [],
        };
    }));

    return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getMdxModule(slug: string) {
    const file = await fs.readFile(`./content/articles/${slug}`)
    const code = await compile(file, {outputFormat: "function-body"})
    // @ts-expect-error: runtime types mismatch between mdx and react
    const {default: MdxModule} = await run(code, {...runtime, baseUrl: import.meta.url})
    return MdxModule
}