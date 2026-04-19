"use client";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { CustomButton } from "./CustomButton";

export const SwitchTheme = () => {
    const { setTheme, theme } = useTheme();
    return (
        <div className="h-auto w-auto">
            <CustomButton
                onClick={() => {
                    theme == "dark" ? setTheme("light") : setTheme("dark");
                }}
            >
                {theme == "dark" ? <LuSun /> : <LuMoonStar />}
            </CustomButton>
        </div>
    );
};
