import { getAllPosts } from "@/lib/post";
import { Card, CardAction, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import path from "path";
import TagList from "@/components/common/tag-list";

const PostList = async () => {
    const posts = await getAllPosts();
    return (
        <main className="grid grid-cols-3">
            {posts.map((post) => {
                return (
                    <Link key={post.slug} href={path.join("/blog", post.slug)}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <TagList tags={post.tag} />
                            </CardHeader>
                        </Card>
                    </Link>
                );
            })}
        </main>
    );
};

export default PostList;
