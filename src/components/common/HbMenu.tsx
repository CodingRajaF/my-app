"use client";
import { LuGrid2X2Plus } from "react-icons/lu";
import { useState } from "react";
import { CustomButton } from "./CustomButton";

export const HbMenu = ({ tags, tabs }: { tags: string[]; tabs: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <div className="">
                <CustomButton onClick={() => setIsOpen(!isOpen)}>
                    <LuGrid2X2Plus />
                </CustomButton>
                <div>
                    {tags.map((tag) => {
                        return <></>;
                    })}
                </div>
            </div>
            {tabs.map((tab) => {
                return <button></button>;
            })}
        </div>
    );
};
