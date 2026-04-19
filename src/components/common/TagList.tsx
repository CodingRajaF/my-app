import Link from "next/link";
import path from "path";
import { Badge } from "../ui/badge";

// tagsを受け取って、Linkをバッジ表示する。各リンク先は、./@/app/blog/tag/[tag]へ
const TagList = ({ tags }: { tags: string[] }) => {
    return (
        // 横に並べる感じ
        <div>
            {tags.map((tag) => {
                return (
                    <Link key={tag} href={path.join("/blog/tag", tag)}>
                        <Badge variant={"outline"}>{tag}</Badge>
                    </Link>
                );
            })}
        </div>
    );
};
export default TagList;
