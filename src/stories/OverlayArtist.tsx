import React from "react";
import { AiFillHome, AiOutlineClockCircle } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ArtistButton } from "./ArtistButton";

interface OverlayArtistProps {
    sets: any;
}

export const OverlayArtists = ({ sets }: OverlayArtistProps) => (
    <>
        <div className="flex flex-col items-center py-12 gap-3">
            <ArtistButton
                image={
                    "http://localhost:8090/api/files/" +
                    sets[0]?.collectionId +
                    "/" +
                    sets[0]?.id +
                    "/" +
                    sets[0]?.profilepicture
                }
                text={""}
            />
            <div className="text-2xl font-bold w-full flex justify-center">
                {sets[0]?.name} 🇧🇪
            </div>

            <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-md text-center">
                Tomorrowland is an annual electronic dance music festival held
                in Belgium, featuring top DJs and musical acts, elaborate
                stages, and interactive experiences.
            </div>
            <div className="flex flex-row gap-2 bg-white/20 w-72 justify-between rounded-full my-4 items-center">
                <div className=" text-white/50 font-bold rounded-full flex items-center py-3 px-5">
                    Recent
                </div>
                <div className=" text-white/50 font-bold rounded-full flex items-center py-3 px-5">
                    Loved
                </div>
                <div className=" bg-white font-bold text-dark1/80 rounded-full flex items-center py-3 px-5">
                    Viewed
                </div>
            </div>
            <div className="flex flex-col w-full gap-5">
                {sets.map((artist: any) => (
                    <>
                        <div className="flex flex-row items-center w-full">
                            <div className="h-14 w-auto aspect-video rounded-lg overflow-clip bg-dark1">
                                <Image
                                    src={"/poster.jpg"}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="text-md font-medium flex flex-col whitespace-nowrap pl-4 text-white/50">
                                <span>Tomorrowland</span>
                                <span className="text-sm font-normal text-white/50">
                                    21.07.2021
                                </span>
                            </div>
                            <div className="flex flex-row grow justify-center items-center">
                                <div className="text-md font-medium flex flex-col gap-0 items-start text-white/50">
                                    <div className="flex row gap-2 items-center leading-5">
                                        <AiOutlineClockCircle size={20} />
                                        1h 30m
                                    </div>
                                </div>
                            </div>
                            <div className="flex text-white/50">
                                <BiDotsVerticalRounded size={20} />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
);
