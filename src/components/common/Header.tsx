import Image from "next/image";
import Link from "next/link";
import localImage from "../../../public/topImage.png";
import { SwitchTheme } from "@/components/common/SwitchTheme";
import {
    CustomTabs,
    type TabProp,
    NonEmptyArray,
} from "@/components/common/CustomTabs";
const tabProps: NonEmptyArray<TabProp> = [
    {
        name: "01 . HOME",
        link: "/",
    },
    {
        name: "02 . WORK",
        link: "/blog/tag/works",
    },
    {
        name: "03 . ABOUT",
        link: "/about",
    },
];
const tabSize = "w-35 h-auto";

export const Header = () => {
    return (
        <header className="col-span-2 flex items-center border border-border m-8 h-25 divide-x divide-border bg-background/20 text-input">
            <Link
                href="/"
                aria-label="トップページへ戻る"
                className="flex-1 flex p-4 h-full"
            >
                <Image
                    src={localImage}
                    alt="プロフィール画像"
                    height={64}
                    width={64}
                    className="mr-4 rounded-full object-cover"
                />
                <div className="text-border">
                    <p>Personal Log</p>
                    <div className="flex items-end gap-2">
                        <h1 className="text-foreground text-3xl font-bold">
                            DEV活
                        </h1>
                        <p>RyoK73@omarchy</p>
                    </div>
                </div>
            </Link>
            <div className="flex h-full justify-end">
                <CustomTabs tabs={tabProps} className={tabSize} />
            </div>
            <SwitchTheme
                className={`flex justify-center items-center ${tabSize}`}
            />
        </header>
    );
};
