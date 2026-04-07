import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";
import { consola } from "consola";

// contentsのpathの宣言
const postDirectory = path.join(process.cwd(), "contents");

// 関数の戻り値の型宣言
type params = {
    slug: string;
    contentMarkdown: string;
    date: string;
    title: string;
};
// mdファイルをreactコンポーネントに変換する関数
const getPostData = async (slug: string): Promise<params> => {
    const fullPath = path.join(postDirectory, `${slug}.md`);
    // mdファイルの取得
    const fileContent = await fs.readFile(fullPath);
    // gray-matterでmdファイルのfrontmatterを取得
    const mdData = matter(fileContent);

    // paramsを返す
    return {
        slug,
        contentMarkdown: mdData.content,
        date: mdData.data.date,
        title: mdData.data.title,
    };
};

export default getPostData;
