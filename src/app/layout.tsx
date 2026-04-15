import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "darkm.dev blog",
  description: "engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Link href="/" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            darkm
            <code className="font-mono font-bold">dev</code>
          </Link>

        </div>
            {children}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <footer className="mt-auto pt-16 pb-8 flex flex-col items-center gap-4 opacity-80">
          <a href="https://github.com/d-arken" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-readme-stats.vercel.app/api?username=d-arken&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" alt="GitHub Stats" />
          </a>
          <a href="https://github.com/d-arken" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=d-arken&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" alt="Top Languages" />
          </a>
          <a href="https://github.com/d-arken" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=d-arken&theme=tokyonight&hide_border=true&background=00000000" alt="GitHub Streak" />
          </a>
        </footer>
      </main>
      </body>
    </html>
  );
}
