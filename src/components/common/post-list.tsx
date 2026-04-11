import type { PostData } from "@/lib/post";
import { getAllPosts } from "@/lib/post";
import TagList from "@/components/common/tag-list";
import Link from "next/link";
import path from "path";

// postsで./posts/のコンテンツ一覧を受け取りリストを表示する
export const PostList = (posts: PostData[]) => {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    // liはカード形式？かリスト形式にしたい
                    <li key={post.slug} className="block">
                        <Link href={path.join("/blog", post.slug)}>
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

// tagで./posts/*.mdをフィルターし適合するpostsをリストで表示する
const PostListByTag = async ({ tag }: { tag?: string }) => {
    const posts = await getAllPosts();
    const postsByTag = tag
        ? posts.filter((post) => {
              return post.tag.includes(tag);
          })
        : posts;
    return PostList(postsByTag);
};
export default PostListByTag;
