"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type TabProp = {
    tabName: string;
    tabLink: string;
};

export type NonEmptyArray<T> = [T, ...T[]];

export const CustomTabs = ({ params }: { params: NonEmptyArray<TabProp> }) => {
    const pathName = usePathname();
    const activeTab =
        (params.find((p) => p.tabLink === pathName)?.tabName ?? pathName.startsWith("/blog"))
            ? params[0].tabName
            : params[0].tabName;

    return (
        // usePathnameを使ってtabNameを逆算する機能を追加する
        // ワイルドカードにして、blog/のときはallになるようにする
        <Tabs defaultValue={activeTab}>
            <TabsList variant={"line"}>
                {params.map((param) => {
                    return (
                        <Link key={param.tabName} href={param.tabLink}>
                            <TabsTrigger value={param.tabName} className="text-1.5xl">
                                {param.tabName}
                            </TabsTrigger>
                        </Link>
                    );
                })}
            </TabsList>
        </Tabs>
    );
};
