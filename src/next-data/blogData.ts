import fs from "node:fs/promises";
import path from "path";
import {compile, run} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function getArticles() {
    return (await fs.readdir("./content/articles")).filter(p => path.extname(p).toLowerCase() === ".mdx")
}

export async function getMdxModule(slug: string) {
    const file = await fs.readFile(`./content/articles/${slug}`)
    const code = await compile(file, {outputFormat: "function-body"})
    // @ts-expect-error: `runtime` types are currently broken.
    const {default: MdxModule} = await run(code, {...runtime, baseUrl: import.meta.url})
    return MdxModule
}