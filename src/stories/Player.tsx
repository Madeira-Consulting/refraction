import React, { useEffect, useRef, useState } from "react";
import "./page.css";

import ReactPlayer from "react-player/lazy";
import { BsFillCalendarDateFill, BsPlusLg, BsSpotify } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { RiHeart3Fill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";

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

export const Player = ({ user, screenName }: PageProps) => {
    const playerRef = useRef(null as any);

    return (
        <>
            <div className="py-5">
                <div className="grid grid-cols-10 gap-x-10 gap-y-10">
                    <div className="rounded-2xl overflow-clip col-span-7 aspect-video">
                        <ReactPlayer
                            ref={playerRef as any}
                            onProgress={(e) => {
                                console.log(e);
                            }}
                            showInfo={false}
                            controls={false}
                            url="https://youtu.be/4gUpPHf3MpQ?t=492&modestbranding=1&autohide=1&showinfo=0&controls=0"
                            playing={true}
                            muted={true}
                            height="100%"
                            width="100%"
                        />
                    </div>
                    {/* <div className="col-span-3 rounded-2xl bg-gradient-to-b from-dark1 via-dark1/50 to-transparent"> */}
                    <div className="col-span-3 rounded-2xl bg-dark2">
                        <div className="flex flex-row border-b-2 border-white/5 mx-5 py-8 px-4 justify-between items-center">
                            <span className="text-2xl font-semibold">
                                Tracklist
                            </span>
                            <div className="flex flex-row bg-dark1 rounded-lg font-medium text-base justify-center items-center gap-2 w-8 h-8">
                                <BsSpotify size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="grid grid-cols-6 gap-x-8 gap-y-4">
                            <div className="col-span-4">
                                <div className="flex flex-row items-center gap-3">
                                    <div className="flex flex-row items-end">
                                        <div className="rounded-full overflow-clip">
                                            <Image
                                                src={
                                                    "https://news.bangerz-army.com/wp-content/uploads/2020/11/lost-frequencies-profile.jpg"
                                                }
                                                width={65}
                                                height={65}
                                                alt="Picture of the artist"
                                            />
                                        </div>

                                        <div className="w-6 h-6 bg-primary rounded-full -ml-5 border-2 border-dark1 flex flex-row items-center justify-center">
                                            <BsPlusLg size={10} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold">
                                            Lost Frequencies
                                        </span>
                                        <span>123.312 Fans</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="text-2xl font-semibold">
                                    <div className="flex flex-row gap-5">
                                        <div className="flex flex-row p-3 w-1/2 bg-dark2 rounded-lg font-medium text-base justify-center items-center gap-2 hover:shadow-dark2/40 hover:shadow-xl duration-300">
                                            <MdScreenShare size={15} />
                                            Share
                                        </div>
                                        <div
                                            onClick={() => {
                                                console.log("Sending love ❤");
                                            }}
                                            className="flex flex-row p-3 w-1/2 bg-red-500 rounded-lg font-medium text-base justify-center items-center gap-2 hover:shadow-red-500/20 hover:shadow-xl duration-300"
                                        >
                                            <RiHeart3Fill size={20} />
                                            Love
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="col-span-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-2xl font-semibold">
                                        Forest National Brussels 2020 |
                                        21.12.2022
                                    </span>
                                    <span className="text-white/50 text-lg">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta, sunt magnam
                                        accusantium sed veniam accusamus. Magni,
                                        voluptatem repudiandae similique
                                        molestiae itaque sapiente veritatis
                                        asperiores mollitia fugit, quod aperiam
                                        animi. Ex!
                                    </span>
                                    <span className="text-white/50 text-lg">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta, sunt magnam
                                        accusantium sed veniam accusamus. Magni,
                                        voluptatem repudiandae similique
                                        molestiae itaque sapiente veritatis
                                        asperiores mollitia fugit, quod aperiam
                                        animi. Ex!
                                    </span>
                                    <span className="text-white/50 text-lg">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta, sunt magnam
                                        accusantium sed veniam accusamus. Magni,
                                        voluptatem repudiandae similique
                                        molestiae itaque sapiente veritatis
                                        asperiores mollitia fugit, quod aperiam
                                        animi. Ex!
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
                                                125.908 views
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-8 items-center gap-10">
                                            <div className="col-span-1">
                                                <RiHeart3Fill size={20} />
                                            </div>
                                            <div className="col-span-7">
                                                5.412 likes
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-8 items-center gap-10">
                                            <div className="col-span-1">
                                                <BsFillCalendarDateFill
                                                    size={18}
                                                />
                                            </div>
                                            <div className="col-span-7">
                                                21.12.2022
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
                    <div className="col-span-3 flex flex-col gap-5">
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
        </>
    );
};
