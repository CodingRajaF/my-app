import { getAllPosts } from "@/lib/post";
import { getPostsByTag } from "@/lib/post";
import PostListByTag from "@/components/common/post-list";

const TagPage = async ({ params }: { params: Promise<{ tag: string }> }) => {
    const posts = await getAllPosts();
    const { tag } = await params;
    return (
        <main>
            <h1>{tag}の記事一覧</h1>
            <PostListByTag tag={tag} />
        </main>
    );
};

export default TagPage;
