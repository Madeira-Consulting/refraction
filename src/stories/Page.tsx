import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./page.css";
import { Home } from "./Home";
import { Player } from "./Player";

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
    collapsed?: boolean;
}

export const Page = ({ user, screenName, collapsed }: PageProps) => (
    <>
        <div className="flex flex-row w-screen dark:bg-hero-lg bg-cover">
            <div className="fixed">
                <Sidebar
                    user={user}
                    isCollapsed={collapsed}
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

            <div
                className={
                    "fixed z-50 w-full " + (collapsed ? "pl-24" : "pl-72")
                }
            >
                <Header />
            </div>
            <div
                className={
                    "w-full h-full pt-24 bg-gradient-to-r from-dark1 via-dark1/98 to-dark1/95 "
                }
            >
                <div className={"pr-8 " + (collapsed ? "pl-32" : "pl-72")}>
                    {screenName == "home" ? <Home /> : <></>}
                    {screenName == "player" ? <Player /> : <></>}
                </div>
            </div>
        </div>
    </>
);
