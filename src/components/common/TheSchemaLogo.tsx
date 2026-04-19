import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
    /** アイコン+テキストの横幅。デフォルト 160 */
    width?: number;
    /** テキストのフォントサイズ。デフォルト 22 */
    fontSize?: number;
};

/**
 * The Schema — ロゴコンポーネント
 *
 * ライト／ダークモード自動対応。
 * テキスト色は currentColor を使うので、親要素の color / CSS変数で制御できます。
 *
 * 使い方:
 *   <TheSchemaLogo />
 *   <TheSchemaLogo width={120} fontSize={16} className="text-foreground" />
 */
export function TheSchemaLogo({ width = 160, fontSize = 22, ...props }: Props) {
    // アイコン部分の固定サイズ
    const iconW = 42;
    const iconH = 66; // bottom of lowest cube (y=48+18=66 in local coords, offset by 1 for -1 top)
    const gap = 10;
    const textX = iconW + gap;

    const totalWidth = width + iconW;
    const totalHeight = Math.max(iconH, fontSize * 1.4);
    const iconOffsetY = (totalHeight - iconH) / 2;

    return (
        <svg
            width={totalWidth}
            height={totalHeight}
            viewBox={`0 0 ${totalWidth} ${totalHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="The Schema"
            {...props}
        >
            <title>The Schema</title>

            {/* ---- 4段モノリス キューブ ---- */}
            <g transform={`translate(0, ${iconOffsetY})`}>
                {/* 段1 (一番下): Amber */}
                <polygon points="14,49 28,42 42,49 28,56" fill="#FAC775" />
                <polygon points="14,49 14,59 28,66 28,56" fill="#EF9F27" />
                <polygon points="42,49 42,59 28,66 28,56" fill="#BA7517" />

                {/* 段2: Teal */}
                <polygon points="14,35 28,28 42,35 28,42" fill="#5DCAA5" />
                <polygon points="14,35 14,45 28,52 28,42" fill="#1D9E75" />
                <polygon points="42,35 42,45 28,52 28,42" fill="#0F6E56" />

                {/* 段3: Coral */}
                <polygon points="14,21 28,14 42,21 28,28" fill="#F0997B" />
                <polygon points="14,21 14,31 28,38 28,28" fill="#D85A30" />
                <polygon points="42,21 42,31 28,38 28,28" fill="#993C1D" />

                {/* 段4 (一番上): Purple */}
                <polygon points="14,7 28,0 42,7 28,14" fill="#AFA9EC" />
                <polygon points="14,7 14,17 28,24 28,14" fill="#7F77DD" />
                <polygon points="42,7 42,17 28,24 28,14" fill="#534AB7" />
            </g>

            {/* ---- テキスト: currentColor でライト/ダーク自動切り替え ---- */}
            <text
                x={textX}
                y={totalHeight / 2 + fontSize * 0.36}
                fontFamily="inherit"
                fontSize={fontSize}
                fontWeight="500"
                fill="currentColor"
                letterSpacing="-0.01em"
            >
                The Schema
            </text>
        </svg>
    );
}

export default TheSchemaLogo;
