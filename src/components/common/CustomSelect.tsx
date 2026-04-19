"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const CustomSelect = ({ tags }: { tags: string[] }) => {
    return (
        <Select>
            <SelectTrigger className="w-48 ml-3">
                <SelectValue placeholder="Select a Tag" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tag</SelectLabel>
                    <SelectItem value="all">all</SelectItem>
                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
