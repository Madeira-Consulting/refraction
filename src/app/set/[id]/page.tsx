"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import PocketBase from "pocketbase";

import _ from "lodash";
import { Sidebar } from "@/stories/Sidebar";
import Header from "@/stories/Header";
import { AiFillEye } from "react-icons/ai";
import { BsPlusLg, BsFillCalendarDateFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { RiHeart3Fill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { handleAttach, VideoPlayer } from "@/stories/VideoPlayer";
import { Mediabar } from "@/stories/Mediabar";
import { Tracklist } from "@/stories/Tracklist";
import { fDate, fNumber } from "@/app/pages/api/helper";
import Plyr from "plyr";
import { VideoReference } from "@/stories/VideoReference";

const getSet = async (id: string) => {
    const record = await pb.collection("sets").getOne(id, {
        expand: "artist,venue,tracks",
    });
    console.log(record);
    return record;
};

const findCurrentTrack = (tracks: any, time: number) => {
    let currentTrack = null;
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].timestamp > time) {
            break;
        }
        currentTrack = tracks[i];
    }
    console.log("Current track: " + currentTrack?.title);
    return currentTrack;
};

const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("http://127.0.0.1:8090");
const player = new Plyr("#player");

pb.autoCancellation(false);

export default function Set({ params }: any) {
    const setId = params.id;
    const [set, setSet] = useState<any>();

    const [seek, setSeek] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(false);

    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        (async () => {
            const setPromise = await getSet(setId);
            setSet(setPromise);
        })();
    }, [setId]);

    // //update current track every second
    useEffect(() => {
        const interval = setInterval(() => {
            set?.expand.tracks && player?.getCurrentTime
                ? setCurrentTrack(
                      findCurrentTrack(
                          set?.expand.tracks,
                          player?.getCurrentTime()
                      )
                  )
                : console.log("no tracks or player");
        }, 1000);
        return () => clearInterval(interval);
    }, [player, set?.expand.tracks]);

    // const searchTrack = async (artist: any, title: any) => {
    //     const query = encodeURIComponent(`${artist} ${title}`);
    //     const response = await fetch(
    //         `https://api.discogs.com/database/search?q=${query}&type=release&token=jXkALcplBntIYPDuIexEtmrQVqNaAJnlGSBzxVyA`
    //     );
    //     const data = await response.json();
    //     const releases = data.results;

    //     console.log(releases);

    //     get the cover_image from all releases and return them in an array
    //     const coverImages = releases.map((release: any) => {
    //         return release.cover_image;
    //     });

    //     const release: any = lodash.pick(
    //         releases[0],
    //         "country",
    //         "title",
    //         "genre",
    //         "style",
    //         "year",
    //         "uri"
    //     );

    //     release.coverImages = coverImages;

    //     console.log(release);

    //     return releases ? release : null;
    // };

    return (
        <div className="pt-24 px-12">
            <div className="grid grid-cols-10 gap-x-10 gap-y-10 pr-24">
                <div className="col-span-7 aspect-video">
                    <VideoReference />
                </div>
                <div className="col-span-3">
                    <Tracklist
                        set={set}
                        currentTrack={currentTrack}
                        setSeek={setSeek}
                        setId={setId}
                        pb={pb}
                        player={player}
                    />
                </div>
                <div className="col-span-7">
                    <div className="grid grid-cols-6 gap-x-8 gap-y-4">
                        <div className="col-span-4">
                            <div className="flex flex-row items-center gap-3">
                                <div className="flex flex-row items-end">
                                    <div className="rounded-full aspect-square overflow-clip">
                                        {set?.artist ? (
                                            <Image
                                                src={
                                                    "http://localhost:8090/api/files/wt02nz9hdjxzhxx/" +
                                                    set?.artist[0] +
                                                    "/" +
                                                    set?.expand.artist[0]
                                                        .profilepicture
                                                }
                                                width={50}
                                                height={50}
                                                alt="Picture of the artist"
                                                className="w-full h-full"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div className="w-6 h-6 hover:bg-white hover:text-primary duration-300 bg-primary rounded-full -ml-5 border-2 border-dark1 flex flex-row items-center justify-center">
                                        <BsPlusLg size={10} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold">
                                        {set?.expand.artist[0].name}
                                    </span>
                                    <span>
                                        {fNumber(
                                            set?.expand.artist[0].followers
                                        ) + " Fans"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-2xl font-semibold">
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-row p-3 w-1/2 bg-dark2 rounded-lg font-medium text-base justify-center items-center gap-2 hover:shadow-dark2/40 hover:shadow-xl duration-1000">
                                        <MdScreenShare size={15} />
                                        Share
                                    </div>
                                    <div
                                        onClick={() => {
                                            // console.log(playerRef.current);
                                            // playerRef!.current.seekTo(0);
                                        }}
                                        className="flex flex-row p-3 w-1/2 bg-red-500 rounded-lg font-medium text-base justify-center items-center gap-2 hover:shadow-red-500/20 hover:shadow-xl duration-1000"
                                    >
                                        <RiHeart3Fill size={20} />
                                        Love
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-span-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-white/50 text-lg">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: set?.description,
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-white/50 text-md">
                                <div className="flex flex-col gap-2">
                                    <div className="grid grid-cols-8 items-center gap-10">
                                        <div className="col-span-1 justify-center">
                                            <AiFillEye size={20} />
                                        </div>
                                        <div className="col-span-7">
                                            {fNumber(set?.views) + " views"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-8 items-center gap-10">
                                        <div className="col-span-1">
                                            <RiHeart3Fill size={20} />
                                        </div>
                                        <div className="col-span-7">
                                            {fNumber(set?.likes) + " likes"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-8 items-center gap-10">
                                        <div className="col-span-1">
                                            <BsFillCalendarDateFill size={18} />
                                        </div>
                                        <div className="col-span-7">
                                            {fDate(set?.date)}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-8 items-center gap-10">
                                        <div className="col-span-1">
                                            <FaLocationArrow size={18} />
                                        </div>
                                        <div className="col-span-7">
                                            <div className="flex hover:text-white duration-200">
                                                Forest National Brussels
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                    <div className="flex flex-row mb-4">
                        <span className="text-2xl font-semibold">
                            Related Videos
                        </span>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="overflow-clip rounded-xl h-32 w-44">
                            <div className="object-cover h-48 w-96">
                                <Image
                                    src={
                                        "https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-1.jpg"
                                    }
                                    width={400}
                                    height={400}
                                    alt="Picture of the video"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">
                                Lost Frequencies
                            </span>
                            <span className="text-white/50">
                                Forest National Brussels 2022
                            </span>
                            <div className="flex flex-row text-white/50 gap-2">
                                <span>123.434 views</span>
                                <span>5.423 likes</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="overflow-clip rounded-xl h-32 w-44">
                            <div className="object-cover h-48 w-96">
                                <Image
                                    src={
                                        "https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-1.jpg"
                                    }
                                    width={300}
                                    height={400}
                                    alt="Picture of the video"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">
                                Lost Frequencies
                            </span>
                            <span className="text-white/50">
                                Forest National Brussels 2022
                            </span>
                            <div className="flex flex-row text-white/50 gap-2">
                                <span>123.434 views</span>
                                <span>5.423 likes</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center p-5 bg-primary mt-3 rounded-xl font-semibold hover:shadow-primary/10 hover:shadow-xl duration-300">
                        See all related videos (32)
                    </div>
                </div>
            </div>
        </div>
    );
}
