import getPostData from "@/lib/post";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { consola } from "consola";

const blogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const pageContent = await getPostData(slug);
    consola.info(pageContent);
    return (
        <article className="prose">
            <header>
                <h1>{pageContent.title}</h1>
                <time>{pageContent.date}</time>
            </header>
            <Markdown remarkPlugins={[remarkGfm]}>{pageContent.contentMarkdown}</Markdown>
        </article>
    );
};

export default blogPage;
