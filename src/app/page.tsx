import fs from 'fs'
import path from "path"

async function getArticles() {
    return fs.readdirSync("content").filter(p => path.extname(p).toLowerCase() === ".mdx")
}
export default async function Home() {
  const p = await getArticles()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          darkm
          <code className="font-mono font-bold">dev</code>
        </p>

          {p.map(p => <p key={p}>{p}</p>)}
      </div>
    </main>
  );
}
