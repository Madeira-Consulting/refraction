"use client";
import Header from "@/stories/Header";
import { Mediabar } from "@/stories/Mediabar";
import { Sidebar } from "@/stories/Sidebar";
import { handleVideoChange, VideoPlayer } from "@/stories/VideoPlayer";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = {
        username: "johndoe",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com",
        avatar: "/pp.jpg",
    };

    const [seek, setSeek] = useState(false);
    const [player, setPlayer] = useState<any>(null);
    const [playbackStatus, setPlaybackStatus] = useState(false);
    const scrollRef = useRef(null);

    const [fullScreen, setFullScreen] = useState(false);

    const [width, setWidth] = useState<number>(1200);

    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div
                    className="flex flex-row bg-cover duration-500 bg-gradient-to-r from-dark1 to-dark1/95 w-full"
                    style={
                        {
                            // backgroundImage:
                            //     "url(http://localhost:8090/api/files/oo8jxhoo8efsvqh/" +
                            //     setId +
                            //     "/" +
                            //     set?.thumbnail,
                        }
                    }
                >
                    <div className="flex flex-row">
                        <div className="fixed z-50">
                            <Sidebar
                                user={user}
                                isCollapsed={true}
                                onLogin={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                onLogout={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                onProfile={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </div>
                        <div className={"z-50 absolute"}>
                            <VideoPlayer
                                cover={"/poster.jpg"}
                                seek={seek}
                                playbackStatus={playbackStatus}
                                setPlaybackStatus={setPlaybackStatus}
                                fullScreen={fullScreen}
                                setFullScreen={setFullScreen}
                                width={width}
                                setWidth={setWidth}
                            />
                        </div>
                        <div className="w-screen">
                            <div
                                className={"fixed z-50 w-full"}
                                onClick={() => {
                                    // setIsAttached(!isAttached);
                                    // handleVideoChange(player, "hdwUbiRP2_Q");
                                }}
                            >
                                <Header />
                            </div>

                            <div className={"bottom-0 fixed z-50 w-full"}>
                                <Mediabar
                                    seek={seek}
                                    playbackStatus={playbackStatus}
                                    setPlaybackStatus={setPlaybackStatus}
                                    fullScreen={fullScreen}
                                    setFullScreen={setFullScreen}
                                />
                            </div>
                            <div className={"w-full h-full z-40 ml-24 "}>
                                <div className="" ref={scrollRef}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
