import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

type size = "sm" | "md" | "lg";

interface ListItemProps {
    cover: string;
    text: string;
    subtext: string;
    rounded?: boolean;
    size?: size;
}

export const ListItem = ({
    cover,
    text,
    subtext,
    rounded,
    size,
}: ListItemProps) =>
    size === "sm" ? (
        <div className="flex flex-col snap-start">
            <div className="w-[200px] h-[200px] overflow-clip rounded-3xl mb-2">
                <motion.div
                // className="w-[250px] h-[250px]"
                // onMouseMove={(e) => {
                //     setMouseX(e.movementX);
                //     setMouseY(e.movementY);
                // }}
                // animate={{
                //     x: mouseX / 50,
                //     y: mouseY / 50,
                // }}
                // transition={{
                //     type: "spring",
                //     stiffness: 100,
                //     damping: 50,
                //     mass: 2,
                //     velocity: 0,
                // }}
                >
                    <Image src={cover} width={250} height={250} alt={"Cover"} />
                </motion.div>
            </div>
            <span className="font-bold text-xl dark:text-white">{text}</span>
            <span className="font-regular text-sm dark:text-white/20">
                {subtext}
            </span>
        </div>
    ) : size === "md" ? (
        <div className="flex flex-row items-center gap-3">
            <div className="w-[50px] h-[50px] overflow-clip rounded-2xl">
                <motion.div
                // className="w-[250px] h-[250px]"
                // onMouseMove={(e) => {
                //     setMouseX(e.movementX);
                //     setMouseY(e.movementY);
                // }}
                // animate={{
                //     x: mouseX / 50,
                //     y: mouseY / 50,
                // }}
                // transition={{
                //     type: "spring",
                //     stiffness: 100,
                //     damping: 50,
                //     mass: 2,
                //     velocity: 0,
                // }}
                >
                    <Image src={cover} width={50} height={50} alt={"Cover"} />
                </motion.div>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-md dark:text-white">
                    {text}
                </span>
                <span className="font-regular text-xs dark:text-white/20">
                    {subtext}
                </span>
            </div>
            <span className="font-regular text-xs dark:text-white/20 ml-12">
                3:40
            </span>
            <span className="font-regular text-xs dark:text-yellow-400 flex flex-row items-center gap-1 ml-2">
                3 <AiFillStar size={15} />
            </span>
            <span className="font-regular text-xs dark:text-white/20 flex flex-row items-center gap-1">
                <BsThreeDots />
            </span>
        </div>
    ) : size === "lg" ? (
        <div className="flex flex-col snap-start">
            <div className="w-[200px] h-[200px] overflow-clip rounded-3xl mb-2">
                <motion.div
                // className="w-[250px] h-[250px]"
                // onMouseMove={(e) => {
                //     setMouseX(e.movementX);
                //     setMouseY(e.movementY);
                // }}
                // animate={{
                //     x: mouseX / 50,
                //     y: mouseY / 50,
                // }}
                // transition={{
                //     type: "spring",
                //     stiffness: 100,
                //     damping: 50,
                //     mass: 2,
                //     velocity: 0,
                // }}
                >
                    <Image src={cover} width={250} height={250} alt={"Cover"} />
                </motion.div>
            </div>
            <span className="font-bold text-xl dark:text-white">{text}</span>
            <span className="font-regular text-sm dark:text-white/20">
                {subtext}
            </span>
        </div>
    ) : (
        <></>
    );
