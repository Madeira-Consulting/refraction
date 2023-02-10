import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./page.css";
import { FaAngleDown } from "react-icons/fa";

type User = {
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    mail: string;
};

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>({
        userName: "test",
        firstName: "Test",
        lastName: "User",
        profilePicture:
            "https://i1.sndcdn.com/artworks-DoavOeHRnAqXbfO7-6FJP0A-t500x500.jpg",
        mail: "test",
    });

    return (
        <>
            <div className="flex flex-row w-screen dark:bg-dark1">
                <div className="fixed">
                    <Sidebar
                        user={user}
                        isCollapsed={true}
                        onLogin={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onLogout={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onProfile={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </div>

                <div className="flex flex-col w-full ml-24 px-10">
                    <Header
                        user={user}
                        onLogin={() =>
                            setUser({
                                userName: "test",
                                firstName: "Test",
                                lastName: "User",
                                profilePicture:
                                    "https://i1.sndcdn.com/artworks-DoavOeHRnAqXbfO7-6FJP0A-t500x500.jpg",
                                mail: "test",
                            })
                        }
                        onLogout={() => setUser(undefined)}
                        onProfile={() => setUser(undefined)}
                    />
                    <div className="grid grid-cols-3 gap-4 p-5">
                        <div className="text-black col-span-2">Test</div>
                        <div className="text-black">
                            <div className="flex flex-col gap-8">
                                <div className="bg-gray-100 dark:bg-dark2 p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between">
                                    Match League Of Legends
                                    <FaAngleDown />
                                </div>
                                <div className="bg-gray-100 dark:bg-dark2 h-96 p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between"></div>
                                <div className="bg-gray-100 dark:bg-dark2 h-96 p-5 font-bold text-slate-500 dark:text-white rounded-2xl flex flex-row items-center justify-between"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
