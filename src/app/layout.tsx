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
            darkm<code className="font-mono font-bold">.dev</code>
          </Link>

        </div>
        <div className="w-full max-w-5xl">
            {children}
        </div>

        <footer className="mt-auto pt-16 pb-8 flex flex-col items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <a href="https://github.com/d-arken" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/last-commit/d-arken/blog?label=last%20commit&logo=github&style=flat-square&color=555" alt="Last commit" className="h-5" />
            </a>
          </div>
        </footer>
      </main>
      </body>
    </html>
  );
}
