import Link from "next/link";
import {getArticles} from "@/next-data/blogData";

export default async function Home() {
  const articles = await getArticles()
  return (
    <div className="pt-16 pb-24 w-full">
      <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
        {articles.map(a => (
          <Link
            href={`articles/${a.slug}`}
            key={a.slug}
            className="flex items-baseline justify-between gap-4 py-4 group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-gray-900 dark:text-gray-100 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
                {a.title}
              </span>
              {a.keywords.length > 0 && (
                <span className="text-[11px] text-gray-400 dark:text-gray-600">
                  {a.keywords.join(" · ")}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 font-mono">
              {a.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
