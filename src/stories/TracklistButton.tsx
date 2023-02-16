import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";

interface TracklistButtonProps {
    image: string;
}

export const TracklistButton = ({ image }: TracklistButtonProps) => (
    <>
        <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
            <div className="opacity-100 flex flex-row items-center justify-center h-full z-20 bg-dark/2">
                <Image
                    unoptimized={true}
                    src={image}
                    width={250}
                    height={250}
                    alt={"logo"}
                    className="lg:h-4/12 lg:w-4/12 w-1/2 h-1/2"
                />
            </div>

            {/* load svg image next.js */}
        </div>
    </>
);
