---
date: 2026-04-11
tags: [tag-feature, next-js, component-design, blog, routing]
---

# タグ機能の設計

## 背景・問題意識

ブログにタグ機能を追加したい。タグ一覧の表示、タグによる記事フィルタリング、タグ専用ページの実装方針を整理する必要があった。

## 出た案・選択肢

- `blog/page.tsx` にクエリパラメータ（`?tag=xxx`）でフィルターする案
- `blog/tag/[tag]/page.tsx` を別ページとして作り、共通コンポーネントを共有する案
- `PostList` がデータを内部でfetchする案
- `PostList` が外からpostsを受け取る案
- `getAllTags()` を独立した関数として作る案
- `getAllPosts()` の結果からタグを抽出・dedupeする案
- `blog/page.tsx` にselectでタグ選択・その場でリスト切り替えするUI案
- タグの複数選択機能をつける案
- `[tag]/page.tsx` をラップするコンポーネントを `blog/page.tsx` で使う案

## 反論・懸念点

- クエリパラメータ方式はURLが `/blog?tag=javascript` になりSEO的に不利
- `TagList` に渡すデータの出どころが、記事個別ページとタグ一覧ページで異なる点を整理する必要があった
- `blog/page.tsx` にフィルター機能を持たせると `blog/tag/[tag]/page.tsx` と役割が被る
- page.tsx はルートファイルのため、別ページからimportする設計は歪む
- 個人ブログ規模では複数タグの掛け合わせ絞り込みのユースケースはほぼ発生しない

## 決定・方向性

- **ルーティング**：`blog/tag/[tag]/page.tsx` を別ページとして作成。URLは `/blog/tag/[tag]` の形。
- **`blog/page.tsx` の役割**：全件表示のみ。フィルター機能は持たない。タグクリックで `/blog/tag/[tag]` に遷移する。
- **複数タグ選択**：不要。単一タグのフィルタリングのみ実装する。
- **`TagList` コンポーネント**：`tags: string[]` を受け取り、各タグを `/blog/tag/[tag]` へのLinkとして表示。個別post・タグ一覧ページ両方で使用。
- **`PostList` コンポーネント**：`posts` を外から受け取って表示するだけ。ラッパー不要。データ取得は呼び出し側の責務（表示と取得の分離）。
  - `blog/page.tsx` → `getAllPosts()` の結果を渡す
  - `blog/tag/[tag]/page.tsx` → `getPostsByTag(tag)` の結果を渡す
- **ページ側の責務**：
  - `blog/page.tsx` → `getAllPosts()` して `<PostList posts={posts} />`
  - `blog/tag/[tag]/page.tsx` → `getPostsByTag(tag)` して `<PostList posts={posts} />`
- **タグ取得**：独立した `getAllTags()` は作らない。`getAllPosts()` の結果から `tags` を抽出・dedupeして `TagList` に渡す。

## 積み残し・次のアクション

- `getPostsByTag(tag)` の実装
- `getAllPosts()` 結果からのタグ抽出・dedupe処理の実装
- `blog/tag/[tag]/page.tsx` の作成
