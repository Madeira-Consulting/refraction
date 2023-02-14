"use client";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface EventButtonProps {
    image: string;
    link: string;
}

export const EventButton = ({ image, link }: EventButtonProps) => {
    const [currentLink, setCurrentLink] = useState<string>("");

    useEffect(() => {
        setCurrentLink(link);
    }, [link]);

    return (
        <>
            <Link
                href={link ? currentLink : "/"}
                className={
                    "text-slate-500 aspect-square lg:aspect-video  dark:text-white/20 hover:text-white font-medium rounded-3xl overflow-clip flex flex-row gap-5 items-center shadow-lg bg-inherit justify-center group select-none z-50"
                }
            >
                <div className="h-44 aspect-square lg:aspect-video  bg-dark2 hover:bg-transparent duration-1000 flex flex-row relative items-center justify-center overflow-hidden">
                    <div className="opacity-100 flex flex-row w-full items-center justify-center h-full z-20 bg-dark/2 hover:bg-transparent duration-1000">
                        <Image
                            src={image}
                            width={250}
                            height={250}
                            alt={"logo"}
                            className="lg:h-4/12 lg:w-4/12 w-1/2 h-1/2"
                        />
                    </div>
                    <div className="absolute h-screen w-screen bg-dark2 -z-20"></div>
                    <div
                        className={
                            "absolute -z-20 h-40 w-auto min-w-full min-h-full max-w-none hidden group-hover:block"
                        }
                    >
                        <video
                            src="./tml.mp4"
                            loop
                            autoPlay
                            muted
                            className="absolute h-40 w-auto min-w-full min-h-full max-w-none"
                        ></video>
                        <div className="absolute h-screen w-screen bg-black/80"></div>

                        <div className="absolute h-screen w-screen backdrop-blur-sm"></div>
                    </div>
                    {/* load svg image next.js */}
                </div>
            </Link>
        </>
    );
};
