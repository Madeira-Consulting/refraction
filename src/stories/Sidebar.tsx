import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

type User = {
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    mail: string;
};

interface SidebarProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onProfile: () => void;
}

export const Sidebar = ({
    user,
    onLogin,
    onLogout,
    onProfile,
}: SidebarProps) => (
    <div className="h-screen w-72 border-r-2 border-gray-100 px-5 pb-12 pt-16 flex flex-col justify-between">
        <div>
            <Image
                src={
                    "https://6495341.fs1.hubspotusercontent-na1.net/hubfs/6495341/Actindo_Anbindung_FedEx.svg"
                }
                width="0"
                height="0"
                sizes="100vw"
                alt={"Profile Picture"}
                className="w-auto h-auto px-10"
            />
        </div>
        <nav className="flex flex-col gap-12 justify-between">
            <ul className="flex flex-col gap-2">
                <li className="text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-gray-100 rounded-2xl">
                    <AiFillHome />
                    Home
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Trending
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Match
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Friends
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Schedule
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Messages
                </li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Settings
                </li>
                <li className="text-slate-500 hover:text-primary font-bold flex flex-row gap-5 items-center py-4 px-5 bg-inherit rounded-2xl duration-200">
                    <AiFillHome />
                    Log Out
                </li>
            </ul>
        </nav>
        <div className="text-primary flex flex-row items-center font-bold gap-5 bg-gray-100 py-2 px-3 rounded-xl justify-between">
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
    </div>
);
