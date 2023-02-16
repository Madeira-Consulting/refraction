import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";

interface ImageButtonProps {
    image: string;
    isSquare?: boolean;
    rounded?: string;
}

export const ImageButton = ({ image, isSquare, rounded }: ImageButtonProps) => (
    <>
        <div className={isSquare ? "aspect-square" : "aspect-video"}>
            <div className={"w-full h-full overflow-hidden rounded-" + rounded}>
                <div className="opacity-100 flex flex-row items-center justify-center overflow-clip w-full h-full relative">
                    <Image unoptimized={true} src={image} alt={"logo"} fill />
                </div>
            </div>

            {/* load svg image next.js */}
        </div>
    </>
);
