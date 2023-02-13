import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";

interface ArtistButtonProps {
    text: string;
    image: string;
}

export const ArtistButton = ({ text, image }: ArtistButtonProps) => (
    <>
        <div className="flex flex-col items-center gap-2 font-semibold text-sm">
            <div className="rounded-4xl overflow-clip shadow-xl duration-200">
                <div className="aspect-square overflow-clip">
                    <Image
                        src={image ? image : ""}
                        width={100}
                        height={100}
                        alt="Picture of the artist"
                        className="min-w-full min-h-full"
                    />
                </div>
            </div>
            {text}
        </div>
    </>
);
