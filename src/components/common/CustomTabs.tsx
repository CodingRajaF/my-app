import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export type TabProp = {
    tabName: string;
    tabLink: string;
};
export const CustomTabs = ({ params }: { params: TabProp[] }) => {
    return (
        <Tabs defaultValue={params[0].tabName}>
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
