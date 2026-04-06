import matter from "gray-matter";
import fs from "fs";
import path from "path";

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
const getPostData = (slug: string): params => {
    const mdDirectory = path.join(postDirectory, `${slug}.md`);
    // mdファイルの取得
    const fileContent = fs.readFileSync(mdDirectory);
    // gray-matterでmdファイルのfrontmatterを取得
    const mdData = matter(fileContent);
    // reactコンポーネントに変換

    // paramsを返す
    return {
        slug,
        contentMarkdown: mdData.content,
        date: mdData.data.date,
        title: mdData.data.title,
    };
};
