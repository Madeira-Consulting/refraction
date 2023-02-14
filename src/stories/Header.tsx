"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CgBell } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRouter, withRouter } from "next/router";

interface HeaderPropTypes {
    isTransparent?: boolean;
}

const Header = ({ isTransparent }: HeaderPropTypes) => {
    // const router = useRouter();
    // const [canGoBack, setCanGoBack] = useState(router.back);
    // const [canGoForward, setCanGoForward] = useState(router.forward);

    // const handleBack = () => {
    //     if (canGoBack) {
    //         router.back();
    //     }
    // };

    // const handleForward = () => {
    //     if (canGoForward) {
    //         router.forward();
    //     }
    // };
    return (
        <header
            className={
                "flex grow h-min bg-opacity-20 " +
                (isTransparent
                    ? ""
                    : "backdrop-blur-lg bg-gradient-to-r from-dark1 via-dark1/50 to-transparent")
            }
        >
            <div
                className={
                    "py-6 w-full " +
                    (isTransparent
                        ? ""
                        : "bg-gradient-to-b from-dark1 via-dark1/50 to-transparent")
                }
            >
                <div className="flex flex-row w-full justify-between font-normal gap-4 h-12 pr-5 pl-12">
                    <div className="flex flex-row h-10 w-full gap-12">
                        <div className="flex flex-row gap-4 items-center">
                            <IoIosArrowBack
                                size={30}
                                // className={
                                //     canGoBack
                                //         ? "text-slate-500 dark:text-white/50"
                                //         : "text-slate-500 dark:text-white/50 opacity-50"
                                // }
                                // onClick={handleBack}
                            />
                            <IoIosArrowForward
                                size={30}
                                // className={
                                //     canGoForward
                                //         ? "text-slate-500 dark:text-white/50"
                                //         : "text-slate-500 dark:text-white/50 opacity-50"
                                // }
                            />
                        </div>
                        <div className="flex flex-row w-3/5 items-center bg-gray-100 dark:bg-dark2/50 text-slate-500 dark:text-white/50 rounded-2xl justify-between font-normal px-5">
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
};

// export default withRouter(Header);
export default Header;
