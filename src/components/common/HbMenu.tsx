"use client";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";

export const HbMenu = ({ tags, tabs }: { tags: string[]; tabs: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <div className="">
                <button type="button" className="text-3xl ">
                    <FcMenu />
                </button>
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
