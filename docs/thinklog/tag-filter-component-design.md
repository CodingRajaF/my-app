---
date: 2026-04-11
tags: [next-js, server-components, use-router, routing, component-design]
---

# タグフィルターのコンポーネント設計 - useStateかuseRouterか

## 背景・問題意識

`post-list.tsx` に `PostList`（サーバーコンポーネント）と `PostListByTag`（async サーバーコンポーネント）が混在している。
`PostListByTag` に select によるタグフィルターを追加したく、最初は `useState` を使う方針を考えていた。
このコンポーネントは `blog/page.tsx` と `tag/[tag]/page.tsx` の両方で使う予定。

## 出た案・選択肢

- **useState でフィルタ状態を管理する**: select の変更で state を更新し、クライアントサイドで再レンダリング
- **useRouter で URL 遷移する**: select の onChange で `router.push('/tag/{tag}')` を呼び、サーバーサイドでレンダリング

## 反論・懸念点

- `PostListByTag` に `useState` を入れると `async` と共存できなくなる（`use client` コンポーネントは async にできない）
- `useState` で管理すると、リロード・ブックマーク時にフィルタ状態が失われる
- `tag/[tag]/page.tsx` がすでに存在するなら、それを活かせない

## 決定・方向性

`useRouter` を使い、タグ切り替えは `/tag/{tag}` へのページ遷移として実装する。

- 状態は URL が持つ → リロード・ブックマーク・共有が可能
- `TagFilter`（`use client`）だけを小さいクライアントコンポーネントとして切り出す
- `PostListByTag` は async サーバーコンポーネントのまま保つ

```
TagFilter（use client） → select + router.push('/tag/{tag}')
PostListByTag（server） → getAllPosts してフィルタ・描画
```

**判断基準として残す:** 「状態として持つべきか、URLで表現できるか」。URLで表現できるものはURLに乗せる。

## タスク

- [ ] `TagFilter` コンポーネントを `use client` で作成する
- [ ] `PostList` / `PostListByTag` をファイル分割する（server / client の混在解消）
- [ ] `blog/page.tsx` と `tag/[tag]/page.tsx` への組み込みを確認する
