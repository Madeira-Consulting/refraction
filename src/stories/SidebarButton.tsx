import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";

interface SidebarButtonProps {
    text: string;
    isCollapsed?: boolean;
    icon?: JSX.Element;
}

export const SidebarButton = ({
    text,
    isCollapsed,
    icon,
}: SidebarButtonProps) => (
    <>
        <li
            className={
                "text-slate-500 dark:text-white/50 hover:text-white font-medium flex flex-row gap-5 items-center bg-inherit duration-200 " +
                (isCollapsed ? " justify-center" : "h-12 py-2 rounded-2xl")
            }
        >
            <div className="p-3 bg-white/20 rounded-2xl hover:shadow-lg hover:shadow-white/5 duration-200">
                {icon ? icon : <BsQuestionLg size={20} />}
            </div>
            {isCollapsed ? "" : text}
        </li>
    </>
);
