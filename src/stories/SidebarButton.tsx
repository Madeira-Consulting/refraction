import React from "react";
import { AiFillHome } from "react-icons/ai";

interface SidebarButtonProps {
    text: string;
    isCollapsed?: boolean;
}

export const SidebarButton = ({ text, isCollapsed }: SidebarButtonProps) => (
    <>
        <li
            className={
                "text-slate-500 dark:text-white hover:text-primary font-bold flex flex-row gap-5 items-center bg-inherit duration-200 " +
                (isCollapsed
                    ? "w-12 h-12 justify-center rounded-full"
                    : "py-4 px-5 rounded-2xl")
            }
        >
            <AiFillHome />
            {isCollapsed ? "" : text}
        </li>
    </>
);
