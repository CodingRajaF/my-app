import { SwitchTheme } from "@/components/common/SwitchTheme";
import { CustomTabs, type TabProp, NonEmptyArray } from "@/components/common/CustomTabs";
const TabProps: NonEmptyArray<TabProp> = [
    {
        name: "01 . Home",
        link: "/",
    },
    {
        name: "02 . Work",
        link: "/blog/tag/works",
    },
    {
        name: "03 . About",
        link: "/about",
    },
];

export const Header = () => {
    const tabSize = "w-40 h-auto";
    return (
        <header className="col-span-2">
            <div className="flex h-20 item-center border border-border divide-x divide-border">
                <CustomTabs tabs={TabProps} className={`${tabSize}`} />
                <SwitchTheme
                    className={`flex justify-center items-center ${tabSize}`}
                />
            </div>
        </header>
    );
};
