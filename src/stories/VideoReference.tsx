"use client";

import { fTime } from "@/app/pages/api/helper";
import Image from "next/image";
import Script from "next/script";
import React, { useCallback, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { AiFillPlayCircle } from "react-icons/ai";
import {
    BsFillPlayCircleFill,
    BsFillPlayFill,
    BsPauseFill,
} from "react-icons/bs";
import { Rnd } from "react-rnd";

export const VideoReference = ({}: any) => {
    return (
        <>
            <div
                className={
                    "w-full h-min aspect-video rounded-2xl overflow-clip relative text-transparent  hover:text-white/90"
                }
                id="playerref"
            >
                <div
                    className={
                        "duration-500 w-full h-full absolute flex flex-row items-center justify-center "
                    }
                ></div>
                <div className={"text-transparent w-full h-full z-0 absolute "}>
                    <div className="flex flex-row w-full h-full duration-200 hover:text-white text-white/80 bg-dark2/100 absolute z-0 items-center justify-center">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </>
    );
};
