import React from "react";
import Image from "next/image";
import { SidebarButton } from "./SidebarButton";
import { SidebarProfile } from "./SidebarProfile";
import { VscRadioTower, VscSettings } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import {
    BsFillCalendar3WeekFill,
    BsPeopleFill,
    BsSpeakerFill,
} from "react-icons/bs";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoLibrarySharp } from "react-icons/io5";
import { IoMdRadio } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { UsersRecord } from "../types/pocketbase-types";
import { FiRadio } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

interface SidebarProps {
    user?: UsersRecord;
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
            "h-screen border-r-1 border-white/10 px-5 flex flex-col items-center justify-between dark:bg-dark1 " +
            (isCollapsed ? "w-24 border-r-2" : "w-72")
        }
    >
        <div>
            <Image
                src={
                    "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                }
                width="0"
                height="0"
                sizes="100vw"
                alt={"Profile Picture"}
                className={
                    "w-auto h-auto px-5 mt-12 opacity-50 " +
                    (isCollapsed ? "hidden" : "")
                }
            />
        </div>
        <nav
            className={
                "flex flex-col gap-12 w-full justify-between " +
                (isCollapsed ? " " : "ml-6")
            }
        >
            <ul className="flex flex-col gap-6">
                <span
                    className={
                        "text-slate-500 dark:text-white/20 font-medium " +
                        (isCollapsed ? "hidden" : "")
                    }
                >
                    Menu
                </span>
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Home"}
                    icon={<AiFillHome size={20} />}
                    link={"/"}
                />
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Library"}
                    icon={<IoLibrarySharp size={21} />}
                    link={"/library"}
                />
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Artists"}
                    icon={<BsPeopleFill size={20} />}
                    link={"/artist"}
                />
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Events"}
                    icon={<BiWorld size={20} />}
                    link={"/event"}
                />
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Shows"}
                    icon={<FiRadio size={20} />}
                    link={"/show"}
                />
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Timewarp"}
                    icon={<BsFillCalendar3WeekFill size={20} />}
                    link={"/timewarp"}
                />
            </ul>
            <ul className="flex flex-col gap-6">
                <span
                    className={
                        "text-slate-500 dark:text-white/20 font-medium " +
                        (isCollapsed ? "hidden" : "")
                    }
                >
                    Playlist
                </span>
                <SidebarButton
                    isCollapsed={isCollapsed}
                    text={"Settings"}
                    icon={<FaHistory size={20} />}
                    link={"/settings"}
                />
                <SidebarProfile user={user!} isCollapsed={isCollapsed!} />
            </ul>
        </nav>
        <div></div>
    </div>
);
