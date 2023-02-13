import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { UsersRecord } from "../types/pocketbase-types";

interface SidebarProfileProps {
    user: UsersRecord;
    isCollapsed: boolean;
}

export const SidebarProfile = ({ user, isCollapsed }: SidebarProfileProps) => (
    <>
        <div
            className={
                "flex flex-row items-center gap-5 text-white/20 " +
                (isCollapsed ? "justify-center" : "")
            }
        >
            <div className="rounded-xl overflow-clip w-[44px] h-[44px] items-center">
                {" "}
                <Image
                    src={user!.avatar as any}
                    width={48}
                    height={48}
                    alt={"Profile Picture"}
                />
            </div>
            <div
                className={"w-max font-medium " + (isCollapsed ? "hidden" : "")}
            >
                Hi, {user!.firstName}
            </div>
            {/* <div className={isCollapsed ? "hidden" : ""}>
                <IoIosArrowDown />
            </div> */}
        </div>
    </>
);
