import { CustomCard } from "./CustomCard";
import { TagList } from "./TagList";
import { getAllPosts } from "@/lib/post";
import { Author } from "./Author";
const posts = await getAllPosts();
export const Sidebar = () => {
    return (
        <div className="col-span-1 flex flex-col gap-5 ">
            <Author />
            {/* タグ一覧を配置予定 */}
            {/* <CustomCard title={"Tag"}>
                <TagList tags={allTags} />
            </CustomCard> */}
        </div>
    );
};
