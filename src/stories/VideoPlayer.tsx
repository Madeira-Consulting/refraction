"use client";

import { fTime } from "@/app/pages/api/helper";
import Image from "next/image";
import Script from "next/script";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { AiFillPlayCircle } from "react-icons/ai";
import {
    BsFillPlayCircleFill,
    BsFillPlayFill,
    BsPauseFill,
} from "react-icons/bs";
import { Rnd } from "react-rnd";

function convertRemToPixels(rem) {
    return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
}

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

export const handleVideoChange = (
    player: { loadVideoById: (arg0: any) => void },
    videoId: any
) => {
    if (player) {
        player.loadVideoById(videoId, 0, "highres");
    }
};

export const handleAttach = (
    isAttached: any,
    setIsAttached: (arg0: boolean) => void,

    setPosition: (arg0: { x: number; y: number }) => void
) => {
    if (isAttached) {
        // setIsAttached(false);
        setPosition({ x: 0, y: 0 });
    } else {
        // setIsAttached(true);

        setPosition({ x: 1000, y: 0 });
    }
};

export const VideoPlayer = ({
    cover,
    seek,
    player,
    setPlayer,
    playbackStatus,
    setPlaybackStatus,
    fullScreen,
    setFullScreen,
    url,
    scrollRef,
    isAttached,
    setIsAttached,
    width,
    setWidth,
}: any) => {
    const playerRef = React.useRef<any>(null);
    const ytRef = React.useRef<any>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [detachtedPosition, setDetachtedPosition] = useState({
        x: 320,
        y: 180,
    });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const elementRef = document.getElementById("playerref");

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            setWidth(width);
            console.log("width changed to " + width);
        });

        if (elementRef) {
            observer.observe(elementRef);
        }

        return () => {
            if (elementRef) {
                observer.unobserve(elementRef);
            }
        };
    }, [elementRef]);

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

    const handleFullScreen = () => {
        if (playerRef.current.requestFullscreen) {
            playerRef.current.requestFullscreen();
        } else if (playerRef.current.mozRequestFullScreen) {
            playerRef.current.mozRequestFullScreen();
        } else if (playerRef.current.webkitRequestFullscreen) {
            playerRef.current.webkitRequestFullscreen();
        } else if (playerRef.current.msRequestFullscreen) {
            playerRef.current.msRequestFullscreen();
        }
    };

    useEffect(() => {
        if (!fullScreen) {
            handleFullScreen();
        } else {
        }
    }, [fullScreen, setFullScreen]);

    //init state for video after component mounted
    useEffect(() => {
        handlePlay(player);
    }, [player]);

    useEffect(() => {
        handleSeek(player, seek);
        handlePlay(player);
    }, [player, seek]);

    useEffect(() => {
        if (player) {
            handleAttach(isAttached, setIsAttached, setPosition);
        }
    }, [setIsAttached, isAttached]);

    useEffect(() => {
        (window as any).onYouTubeIframeAPIReady = () => {
            const player = new (window as any).YT.Player(ytRef.current, {
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
            />{" "}
            <div
                className={
                    "ml-36 mt-24 duration-500 " +
                    (!isAttached && playbackStatus != 1
                        ? "opacity-0"
                        : "opacity-100")
                }
                // onClick={() =>
                //     playbackStatus ? handlePause(player) : handlePlay(player)
                // }
                style={
                    !isAttached
                        ? {
                              position: "absolute",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              marginBottom: 0,
                              zIndex: 100,
                              //   pointerEvents: "none",
                          }
                        : {
                              position: "relative",
                          }
                }
            >
                <Rnd
                    disableDragging={isAttached}
                    position={position}
                    enableResizing={
                        isAttached
                            ? false
                            : {
                                  bottom: false,
                                  bottomLeft: false,
                                  bottomRight: true,
                                  left: false,
                                  right: true,
                                  top: false,
                                  topLeft: false,
                                  topRight: false,
                              }
                    }
                    size={{
                        width: isAttached ? width : detachtedPosition.x,
                        height: isAttached ? width : detachtedPosition.x / 1.78,
                    }}
                    onResize={(e, direction, ref, delta, position) => {
                        console.log(e);
                        console.log(direction);
                        console.log(delta);
                        console.log(position);
                        setDetachtedPosition({
                            x: +ref.style.width.replace("px", ""),
                            y: +ref.style.height.replace("px", ""),
                        });
                    }}
                    lockAspectRatio={true}
                    onDrag={(e) => {
                        console.log(e);
                        setPosition({
                            x:
                                e.clientX -
                                convertRemToPixels(9) -
                                detachtedPosition.x / 2,
                            y:
                                e.clientY -
                                convertRemToPixels(6) -
                                detachtedPosition.y / 2,
                        });
                    }}
                >
                    <div
                        className={
                            "aspect-video rounded-2xl overflow-clip relative text-transparent hover:text-white/90 z-50"
                        }
                        ref={playerRef}
                        style={{
                            width: isAttached ? width : "100%",
                            height: isAttached ? width * 0.5625 : "100%",
                        }}
                    >
                        <div
                            className={
                                "duration-500 w-full h-full absolute flex flex-row items-center justify-center "
                            }
                        >
                            {playbackStatus ? (
                                <BsPauseFill size={100} />
                            ) : (
                                <></>
                            )}{" "}
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
                            ref={ytRef}
                            style={{ pointerEvents: "none" }}
                            width={"100%"}
                            height={"100%"}
                            src={
                                "https://www.youtube.com/embed/" +
                                url +
                                "?controls=0&autoplay=1&mute=1&enablejsapi=1"
                            }
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className={
                                "bg-dark1 select-none " +
                                (playbackStatus
                                    ? "opacity-100 duration-500"
                                    : "opacity-100")
                            }
                        ></iframe>
                    </div>
                </Rnd>
            </div>
        </>
    );
};
