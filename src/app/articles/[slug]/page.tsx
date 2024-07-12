import {getArticles, getMdxModule} from "@/next-data/blogData";

export async function generateStaticParams() {
    const paths = await getArticles()
    return paths.map(a => {
        return {slug: a}
    })
}

type ArticleProps = {
    params: {
        slug:string
    }
}
export default async function Article({params:{slug}}: ArticleProps) {
    const MdxModule = await getMdxModule(slug)
    return <MdxModule />
}