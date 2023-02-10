import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { CgBell } from "react-icons/cg";
import { AiOutlineKey } from "react-icons/ai";

type User = {
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    mail: string;
};

interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onProfile: () => void;
}

export const Header = ({ user, onLogin, onLogout, onProfile }: HeaderProps) => (
    <header className="w-full h-min p-8 border-b-2 border-gray-100 shadow-sm">
        <div className="flex flex-row w-full justify-between text-slate-500 font-normal gap-4 h-12">
            <div className="flex flex-row grow items-center bg-gray-100 rounded-full px-4 gap-4 font-semibold">
                <FiSearch className="text-slate-500" />
                Find a match...
            </div>
            <div className="flex grow-0 gap-4">
                <div className="w-12 bg-gray-100 rounded-lg flex justify-center items-center">
                    <CgBell className="text-primary" size={20} />
                </div>

                {user ? (
                    <>
                        <Image
                            src={user!.profilePicture}
                            width={48}
                            height={48}
                            alt={"Profile Picture"}
                            className="rounded-lg shadow-md"
                            onClick={onProfile}
                        />
                    </>
                ) : (
                    <>
                        <div
                            className="w-12 bg-primary rounded-lg flex justify-center items-center"
                            onClick={onLogin}
                        >
                            <AiOutlineKey className="text-white" size={20} />
                        </div>
                    </>
                )}
            </div>
        </div>
    </header>
);
