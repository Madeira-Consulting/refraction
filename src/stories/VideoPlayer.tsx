"use client";

import { fTime } from "@/app/pages/api/helper";
import Image from "next/image";
import Script from "next/script";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {
    BsFillPlayCircleFill,
    BsFillPlayFill,
    BsPauseFill,
} from "react-icons/bs";

export const handleSeek = (player: any, seconds: number) => {
    if (player) {
        console.log("seeking to " + seconds + " | mm:ss " + fTime(seconds));
        player.seekTo(seconds, true);
    }
};

export const handlePlay = (player: { playVideo: () => void }) => {
    if (player) {
        console.log("Handle play");
        player.playVideo();
    }
};

export const handlePause = (player: { pauseVideo: () => void }) => {
    if (player) {
        console.log("Handle pause");
        player.pauseVideo();
    }
};

export const handleMute = (player: { mute: () => void }) => {
    if (player) {
        console.log("Handle mute");
        player.mute();
    }
};

export const handleUnmute = (player: { unMute: () => void }) => {
    if (player) {
        console.log("Handle unmute");
        player.unMute();
    }
};

export const handleVolumeChange = (
    player: { setVolume: (arg0: any) => void },
    volume: any
) => {
    if (player) {
        console.log("volume changed to " + volume);
        player.setVolume(volume);
    }
};

export const handleDuration = (player: { getDuration: () => any }) => {
    if (player) {
        console.log("duration is " + player.getDuration());
        return player.getDuration();
    }
};

export const VideoPlayer = ({
    cover,
    seek,
    player,
    setPlayer,
    playbackStatus,
    setPlaybackStatus,
    url,
}: any) => {
    const [mute, setMute] = React.useState(false);
    const playerRef = React.useRef<any>(null);
    const [currentTime, setCurrentTime] = useState(0);

    const handleStateChange = useCallback(
        (event: { data: number }) => {
            event.data == 1
                ? setPlaybackStatus(true)
                : setPlaybackStatus(false);
            console.log(
                "state changed to " + (event.data == 1 ? "playing" : "paused")
            );
        },
        [setPlaybackStatus]
    );

    //init state for video after component mounted
    useEffect(() => {
        handlePlay(player);
    }, [player]);

    useEffect(() => {
        handleSeek(player, seek);
        handlePlay(player);
    }, [player, seek]);

    useEffect(() => {
        (window as any).onYouTubeIframeAPIReady = () => {
            const player = new (window as any).YT.Player(playerRef.current, {
                events: {
                    onReady: () => {
                        console.log("Player is ready");
                        setPlayer(player);
                        handleDuration(player);
                    },
                    onStateChange: (event: any) => {
                        setCurrentTime(player.getCurrentTime());
                        handleStateChange(event);
                    },
                },
            });

            return () => {
                player.destroy();
            };
        };
    }, [handleStateChange, setPlayer]);

    return (
        <>
            <Script
                src="https://www.youtube.com/iframe_api"
                onLoad={() => {
                    console.log("YT Script has loaded");
                }}
            />
            <div
                className={
                    "w-full h-min aspect-video rounded-2xl overflow-clip relative text-transparent hover:bg-black/80 hover:text-white/90 "
                }
                onClick={() =>
                    playbackStatus ? handlePause(player) : handlePlay(player)
                }
            >
                <div
                    className={
                        "duration-500 w-full h-full absolute flex flex-row items-center justify-center "
                    }
                >
                    {playbackStatus ? <BsPauseFill size={100} /> : <></>}{" "}
                </div>
                <div
                    className={
                        "text-transparent w-full h-full z-20 absolute " +
                        (playbackStatus
                            ? "opacity-0 duration-1000"
                            : "opacity-100 duration-1000")
                    }
                >
                    <div className="flex flex-row w-full h-full duration-200 hover:text-white text-white/80 bg-dark2/50 absolute z-50 items-center justify-center">
                        <div className="">
                            <BsFillPlayFill size={200} />
                        </div>
                    </div>
                    <Image src={cover} fill alt={"cover"} />
                </div>
                <iframe
                    ref={playerRef}
                    style={{ pointerEvents: "none" }}
                    width={"100%"}
                    height={"100%"}
                    src={url + "?controls=0&autoplay=1&mute=1&enablejsapi=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className={
                        "bg-dark1 select-none " +
                        (playbackStatus
                            ? "opacity-100 duration-500"
                            : "opacity-0")
                    }
                ></iframe>
            </div>
        </>
    );
};
