import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface ArtistButtonProps {
    text: string;
    image: string;
    link: string;
}

export const ArtistButton = ({ text, image, link }: ArtistButtonProps) => {
    const [currentLink, setCurrentLink] = useState<string>("");

    useEffect(() => {
        setCurrentLink(link);
    }, [link]);

    return (
        <>
            <Link
                href={link ? currentLink : "/"}
                className="flex flex-col items-center gap-2 font-semibold text-sm text-center select-none">
            <div className="rounded-4xl overflow-clip shadow-xl duration-200 w-24 h-24">
                <div className="aspect-square overflow-clip">
                    <Image
                        unoptimized={true}
                        src={image ? image : ""}
                        width={100}
                        height={100}
                        alt="Picture of the artist"
                        className="min-w-full min-h-full"
                    />
                </div>
            </div>
            {text}
        </Link>
    </>
    )
                }
