---
date: 2026-04-12
tags: [shadcn-ui, react, component-design, directory-structure, architecture]
---

# shadcn/ui コンポーネントの配置方針

## 背景・問題意識

`select.tsx` のように shadcn/ui からコピーしてきたファイルはパーツがバラバラに定義されている。それを組み合わせた独自コンポーネント（`SelectBox` など）を別ファイルに切り出すより、同じファイル内に書いたほうが密結合で管理しやすいのではないかという疑問から議論が始まった。

## 出た案・選択肢

- shadcn/ui ファイル内に独自コンポーネントを同居させる
- 別ファイルに切り出す（`components/ui/select-box.tsx` や `components/tag-filter.tsx` など）
- `components/ui/` に shadcn/ui と自作を混在させる（現状）
- ディレクトリを分ける（`ui/` / `common/` / `features/`）

## 反論・懸念点

- `npx shadcn add <component>` を再実行すると対象ファイルが上書きされる可能性がある。同居させると独自コンポーネントが消える危険がある。
- 設計層が異なる。`select.tsx` は UIプリミティブ（汎用）、`SelectBox` はアプリ固有の組み合わせ（アプリ層）。同居させると層の境界が曖昧になる。
- `components/ui/` に混在させると shadcn/ui の再生成時にどれが自作かわからなくなる。

## 決定・方向性

- `components/ui/` は shadcn/ui 専用の「聖域」として一切手を加えない
- 自作コンポーネントは `components/common/` に配置する
- 規模が大きくなったら `components/features/` に切り出す

```
components/
  ui/        ← shadcn/ui のみ。再生成で上書きされる前提
  common/    ← 自作の汎用コンポーネント
  features/  ← 機能固有コンポーネント（必要になったら）
```

## タスク

- [ ] `components/common/` ディレクトリを作成し、既存の自作コンポーネントを移動する

## 積み残し・次のアクション

現状コンポーネント数が10未満なので `common/` だけで十分。増えてきたタイミングで `features/` への切り出しを検討する。
