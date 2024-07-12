import Link from "next/link";
import {getArticles} from "@/next-data/blogData";


export default async function Home() {
  const articles = await getArticles()
  return articles.map(a => <Link href={`articles/${a}`} key={a}>{a}</Link>)
}
