import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";

interface ImageButtonProps {
    image: string;
    isSquare?: boolean;
}

export const ImageButton = ({ image, isSquare }: ImageButtonProps) => (
    <>
        <div className={isSquare ? "aspect-square" : "aspect-video"}>
            <div className="w-full h-full overflow-hidden rounded-2xl ">
                <div className="opacity-100 flex flex-row items-center justify-center overflow-clip w-full h-full relative">
                    <Image src={image} alt={"logo"} fill />
                </div>
            </div>

            {/* load svg image next.js */}
        </div>
    </>
);
