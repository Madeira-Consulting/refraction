"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { CgBell } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import {
    BsFillPauseFill,
    BsFillPlayCircleFill,
    BsFillPlayFill,
} from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa";
import { BiExpandAlt, BiVerticalCenter } from "react-icons/bi";
import { handlePause, handlePlay, handleSeek } from "./VideoPlayer";
import { fTime } from "@/app/pages/api/helper";

export const Mediabar = ({
    play,
    setPlay,
    player,
    playbackStatus,
    setPlaybackStatus,
    currentTrack,
    set,
}: any) => {
    const [floating, setFloating] = React.useState(false);
    const [mini, setMini] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [pictureToggle, setPictureToggle] = React.useState(true);

    //update current time every second
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (player) {
                setCurrentTime(player?.getCurrentTime());
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [player]);

    return (
        <div
            className={
                mini
                    ? "flex flex-row w-full justify-end duration-500 pr-5"
                    : floating
                    ? "mx-32 duration-500"
                    : "duration-500"
            }
        >
            <div
                className={
                    "duration-500 " +
                    (floating
                        ? "flex h-32 mb-5 items-center bg-opacity-20 backdrop-blur-md bg-dark1/50 border-dark1/80 rounded-3xl shadow-2xl shadow-black/20 "
                        : "flex h-32 bg-opacity-20 backdrop-blur-md bg-dark2/100 ") +
                    (mini ? "w-min mb-4 " : "w-full")
                }
            >
                <div
                    className={
                        "bg-gradient-to-b from-dark1/0 via-dark1/0 to-transparent py-8 " +
                        (mini ? "w-min" : "w-full")
                    }
                >
                    <div className="flex flex-row justify-between items-center px-12  duration-500">
                        <div className="flex flex-row items-center">
                            <div
                                className={
                                    floating && !mini ? "w-32 spacer" : ""
                                }
                            ></div>
                            <div
                                className={
                                    floating && !mini
                                        ? "w-32 h-32 rounded-full overflow-clip hover:bg-dark1/50 absolute -top-8 aspect-square"
                                        : "w-16 h-16 rounded-2xl overflow-clip hover:bg-dark1/50 aspect-square"
                                }
                                onClick={() => {
                                    if (mini) {
                                        setPictureToggle(!pictureToggle);
                                    }
                                }}
                            >
                                {set?.artist ? (
                                    <Image
                                        src={
                                            "http://localhost:8090/api/files/wt02nz9hdjxzhxx/" +
                                            set?.artist[0] +
                                            "/" +
                                            set?.expand.artist[0].profilepicture
                                        }
                                        width={floating ? 150 : 150}
                                        height={floating ? 150 : 150}
                                        alt="Picture of the artist"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div
                                className={
                                    "flex flex-col items-center " +
                                    (mini
                                        ? pictureToggle
                                            ? "hidden"
                                            : ""
                                        : "")
                                }
                            >
                                <div className="flex flex-row px-8 py-2 items-center whitespace-nowrap">
                                    <div className="flex flex-col justify-items-stretch w-full">
                                        <span className="font-medium leading-5">
                                            {currentTrack?.title}
                                        </span>
                                        <span className="font-normal text-sm text-white/50">
                                            {currentTrack?.artist}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-16 flex flex-row items-center gap-20">
                            <div className="flex flex-row items-center gap-5">
                                <div
                                    onClick={() =>
                                        handleSeek(player, currentTime - 10)
                                    }
                                >
                                    <FaBackward size={20} />
                                </div>
                                <div
                                    onClick={() =>
                                        playbackStatus
                                            ? handlePause(player)
                                            : handlePlay(player)
                                    }
                                >
                                    {playbackStatus ? (
                                        <BsFillPauseFill size={40} />
                                    ) : (
                                        <BsFillPlayFill size={40} />
                                    )}
                                </div>
                                <div
                                    onClick={() =>
                                        handleSeek(
                                            player,
                                            currentTrack.timestamp + 10
                                        )
                                    }
                                >
                                    <FaForward size={20} />
                                </div>
                            </div>
                            <div
                                className={
                                    "flex flex-col flex-1 items-center" +
                                    (mini ? " hidden" : "")
                                }
                            >
                                {/* build progress bar with slider */}

                                <div
                                    className={
                                        "bg-white w-full h-1 rounded-full"
                                    }
                                    onClick={(e) => {
                                        const rect =
                                            e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const percent = x / rect.width;
                                        handleSeek(
                                            player,
                                            player?.getDuration() * percent
                                        );
                                    }}
                                >
                                    {/* signal progress with gradient  */}
                                    <div
                                        className="bg-gradient-to-r from-purple-400 to-blue-500 h-full rounded-full"
                                        style={{
                                            width: `${
                                                (currentTime /
                                                    player?.getDuration()) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-12 text-white/50">
                            <span className="font-normal text-sm  flex flex-row whitespace-nowrap">
                                {fTime(player?.getCurrentTime() || 0)} /{" "}
                                {fTime(player?.getDuration() || 0)}
                            </span>
                            {/* toggle between mini false && floating false, mini false && floating true, mini true && floating true with on click event */}

                            <div onClick={() => setFloating(!floating)}>
                                {floating ? (
                                    <BiVerticalCenter />
                                ) : (
                                    <BiExpandAlt />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
