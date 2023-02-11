import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./page.css";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ListItem } from "./ListItem";

type User = {
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    mail: string;
};

interface PageProps {
    user?: User;
    screenName?: string;
}

export const Home = ({ user, screenName }: PageProps) => (
    <>
        <div className="grid grid-cols-7 gap-12 p-5 backdrop-blur-md">
            <div className="text-black col-span-5">
                <div className="flex flex-col">
                    <div className="flex flex-row items-baseline dark:text-white justify-between mb-8">
                        <h1 className="font-bold text-2xl">Discover</h1>
                        <div className="flex flex-row dark:text-white/20 hover:text-white items-center font-semibold gap-2 duration-100">
                            More
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-8 overflow-hidden scroll-m-0 snap-x mb-12">
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="lg"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="lg"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="lg"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="lg"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="lg"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row items-baseline dark:text-white justify-between mb-3">
                        <h1 className="font-bold text-2xl">Recently played</h1>
                        <div className="flex flex-row dark:text-white/20 hover:text-white items-center font-semibold gap-2 duration-100">
                            More
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="md"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="md"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="md"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="md"
                    />
                    <ListItem
                        cover={
                            "https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg"
                        }
                        text={"Tomorrowland"}
                        subtext={"173 Songs"}
                        size="md"
                    />
                </div>
            </div>
            <div className="text-black col-span-2">
                <div className="flex flex-col gap-8">
                    <div className="bg-gray-100 dark:bg-dark2 dark:bg-opacity-25 backdrop-blur-md p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between">
                        Match League Of Legends
                        <FaAngleDown />
                    </div>
                    <div className="bg-gray-100 dark:bg-dark2 dark:bg-opacity-25 backdrop-blur-md h-96 p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between"></div>
                    <div className="bg-gray-100 dark:bg-dark2 dark:bg-opacity-25 backdrop-blur-md h-96 p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between"></div>
                </div>
            </div>
        </div>
    </>
);
