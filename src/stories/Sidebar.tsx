import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SidebarButton } from "./SidebarButton";

type User = {
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    mail: string;
};

interface SidebarProps {
    user?: User;
    isCollapsed?: boolean;
    onLogin: () => void;
    onLogout: () => void;
    onProfile: () => void;
}

export const Sidebar = ({
    user,
    isCollapsed,
    onLogin,
    onLogout,
    onProfile,
}: SidebarProps) => (
    <div
        className={
            "h-screen border-r-1 border-gray-100 px-5 pb-12 pt-16 flex flex-col items-center justify-between dark:bg-dark2 " +
            (isCollapsed ? "w-24" : "w-72")
        }
    >
        <div>
            <Image
                src={
                    "https://www.preemptive.com/wp-content/uploads/2021/12/FedEx-Logo-white@2x.png"
                }
                width="0"
                height="0"
                sizes="100vw"
                alt={"Profile Picture"}
                className={
                    "w-auto h-auto px-5 " + (isCollapsed ? "hidden" : "")
                }
            />
        </div>
        <nav className="flex flex-col gap-12 w-full justify-between">
            <ul className="flex flex-col gap-2">
                <li
                    className={
                        "text-primary font-bold flex flex-row gap-5 items-center bg-gray-100 dark:bg-primary/10 dark:border-2 border-white/5 rounded-2xl " +
                        (isCollapsed
                            ? "w-12 h-12 justify-center rounded-full"
                            : "py-4 px-5 rounded-2xl")
                    }
                >
                    <AiFillHome />
                    {isCollapsed ? "" : "Home"}
                </li>
                <SidebarButton isCollapsed={isCollapsed} text={"Trending"} />
                <SidebarButton isCollapsed={isCollapsed} text={"Match"} />
                <SidebarButton isCollapsed={isCollapsed} text={"Friends"} />
                <SidebarButton isCollapsed={isCollapsed} text={"Schedule"} />
                <SidebarButton isCollapsed={isCollapsed} text={"Messages"} />
            </ul>
            <ul className="flex flex-col gap-2">
                <SidebarButton isCollapsed={isCollapsed} text={"Settings"} />
                <SidebarButton isCollapsed={isCollapsed} text={"Log Out"} />
            </ul>
        </nav>
        {isCollapsed ? (
            <Image
                src={user!.profilePicture}
                width={48}
                height={48}
                alt={"Profile Picture"}
                className="rounded-full shadow-md"
            />
        ) : (
            <div className="text-primary dark:text-white flex flex-row items-center font-bold gap-5 bg-gray-100 dark:bg-dark1 py-2 px-3 rounded-xl justify-between w-full">
                <Image
                    src={user!.profilePicture}
                    width={40}
                    height={40}
                    alt={"Profile Picture"}
                    className="rounded-lg shadow-md"
                />
                <div className="flex-1">{user!.firstName}</div>
                <FaAngleDown />
            </div>
        )}
    </div>
);
