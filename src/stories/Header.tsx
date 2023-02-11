import React from "react";
import { FiSearch } from "react-icons/fi";
import { CgBell } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const Header = () => (
    <header className="flex grow h-min bg-opacity-20 backdrop-blur-lg bg-gradient-to-r from-dark1 via-dark1/50 to-transparent">
        <div className="bg-gradient-to-b w-full from-dark1 via-dark1/50 to-transparent py-8">
            <div className="flex flex-row w-full justify-between font-normal gap-4 h-12 pr-5 pl-8">
                <div className="flex flex-row h-12 w-full gap-12">
                    <div className="flex flex-row gap-4 items-center">
                        <IoIosArrowBack size={30} />
                        <IoIosArrowForward
                            size={30}
                            className="text-slate-500 dark:text-white/50"
                        />
                    </div>
                    <div className="flex flex-row w-3/5 items-center bg-gray-100 dark:bg-dark2/50 text-slate-500 dark:text-white/50 rounded-2xl px-4 justify-between font-normal px-5">
                        Search
                        <FiSearch size={24} />
                    </div>
                </div>
                <div className="flex grow-0 gap-4">
                    <div className="w-12  text-primary dark:text-white/50 rounded-full flex justify-center items-center">
                        <CgBell size={24} />
                    </div>
                </div>
            </div>
        </div>
    </header>
);
