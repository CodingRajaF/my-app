import { Author } from "./Author";
import { cn } from "@/lib/utils";
type SidebarProps = {
    className?: string;
};
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={cn("col-span-1 flex flex-col gap-5 ", className)}>
            <Author />
        </div>
    );
};
