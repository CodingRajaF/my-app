import Link from "next/link";
import path from "path";
// tagsを受け取って、Linkをバッジ表示する。各リンク先は、./@/app/blog/tag/[tag]へ
const TagList = ({ tags }: { tags: string[] }) => {
    const tagPagePath = path.join(process.cwd(), "blog/tag");
    return (
        // 横に並べる感じ
        <div>
            {tags.map((tag) => {
                return (
                    <Link key={tag} href={path.join(tagPagePath, tag)}>
                        {tag}
                    </Link>
                );
            })}
        </div>
    );
};
export default TagList;
