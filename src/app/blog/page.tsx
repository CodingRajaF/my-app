import Markdown from "react-markdown";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";
import path from "path";

const PostList = async () => {
    const postContents = await getAllPosts();
    // 日付で降順に並び替え
    postContents.sort((a, b) => b.date.localeCompare(a.date));
    return (
        <main>
            <ul>
                {postContents.map((postContent) => {
                    return (
                        <li key={postContent.slug} className="block">
                            <Link href={path.join(process.cwd(), postContent.slug)}>
                                <h1>{postContent.title}</h1>
                                <time>{postContent.date}</time>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default PostList;
