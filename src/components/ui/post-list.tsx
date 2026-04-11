import type { PostData } from "@/lib/post";
import TagList from "./tag-list";
import Link from "next/link";
import path from "path";

// postsで./posts/のコンテンツ一覧を受け取り
const PostList = ({ posts }: { posts: PostData[] }) => {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    // liはカード形式？かリスト形式にしたい
                    <li key={post.slug} className="block">
                        <Link href={path.join(process.cwd(), post.slug)}>
                            <h1>{post.title}</h1>
                            <time>{post.date}</time>
                            <TagList tags={post.tag} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default PostList;
