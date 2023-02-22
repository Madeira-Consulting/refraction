"use client";
import Image from "next/image";
import PocketBase from "pocketbase";

import _ from "lodash";
import { AiFillEye } from "react-icons/ai";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { RiHeart3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { fDate, fNumber } from "@/app/pages/api/helper";
import { ArtistButton } from "@/stories/ArtistButton";
import { ImageButton } from "@/stories/ImageButton";
import { OverlayArtists } from "@/stories/OverlayArtist";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

const getArtist = async (id: string) => {
    const artist = await pb.collection("artists").getFirstListItem(`urlParameter="${id}"`, {
        expand: "artists",
    });
    console.log(artist);
    return artist;
};
const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Artist({ params }: any) {
    const artistId = params.id;
    const [artist, setArtist] = useState<any>([]);
    const [overlay, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const artistPromise = await getArtist(artistId);
            setArtist(artistPromise);
        })();
    }, []);

    const user = {
        username: "johndoe",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com",
        avatar: "/pp.jpg",
    };

    return (
        <>
        <BackgroundWrapper>
                        <div className="grid grid-cols-12 gap-x-16 gap-y-8 pb-36 pt-32 pl-16 w-full pr-32">
                            {/* <div className="col-span-12">
                                <span className="text-5xl font-bold">
                                    {event.name + " 🇧🇪"} 
                                </span>
                                <div className="flex w-full justify-between gap-8 duration-500 py-8 no-scrollbar h-fit">
                                    {/* {events.length > 0
                                        ? events.map((event: any) => {
                                              return (
                                                  <TracklistButton
                                                      key={event.id}
                                                      image={
                                                          "http://localhost:8090/api/files/" +
                                                          event.collectionId +
                                                          "/" +
                                                          event.id +
                                                          "/" +
                                                          event.logo
                                                      }
                                                  />
                                              );
                                          })
                                        : console.log("loading")} 

                                    <div className="flex flex-grow items-center justify-center bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex flex-row items-center justify-center h-max z-20 bg-dark/2">
                                            <Image
                                                unoptimized={true}
                                                src={
                                                    "http://localhost:8090/api/files/" +
                                                    event.collectionId +
                                                    "/" +
                                                    event.id +
                                                    "/" +
                                                    event.logo
                                                }
                                                width={250}
                                                height={250}
                                                alt={"logo"}
                                                className="w-32 h-32"
                                            />
                                        </div>

                             
                                    </div>

                                    <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                            Tomorrowland is an annual electronic
                                            dance music festival held in
                                            Belgium, featuring top DJs and
                                            musical acts, elaborate stages, and
                                            interactive experiences.
                                        </div>

                                 
                                    </div>
                                    <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                            <div className="flex flex-col gap-1">
                                                <div className="grid grid-cols-2 flex flex-row gap-5">
                                                    <span className="font-bold">
                                                        Location:{" "}
                                                    </span>
                                                    <span>Boom, Belgium</span>
                                                </div>
                                                <div className="grid grid-cols-2 flex flex-row gap-5">
                                                    <span className="font-bold">
                                                        Date:{" "}
                                                    </span>
                                                    <span>23.07.2021</span>
                                                </div>
                                                <div className="grid grid-cols-2 flex flex-row gap-5">
                                                    <span className="font-bold">
                                                        Capacity :{" "}
                                                    </span>
                                                    <span>180.000</span>
                                                </div>
                                                <div className="grid grid-cols-2 flex flex-row gap-5">
                                                    <span className="font-bold">
                                                        Tickets:{" "}
                                                    </span>
                                                    <span>€ 300</span>
                                                </div>
                                            </div>
                                        </div>

                                     
                                    </div>
                                    <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                            <span className="font-bold">
                                                Socials
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div> */}
                            <div className="col-span-9">
                                <div className="flex flex-row items-center justify-between">
                                    <span className="text-3xl font-bold">
                                        Most Popular
                                    </span>
                                    <div className="flex flex-row gap-2 justify-between rounded-full my-4 items-center">
                                        <div className=" border-b-4 border-white  font-bold text-white/  flex items-center py-2 px-5 w-36 flex-row justify-center">
                                            Most Popular
                                        </div>
                                        <div className=" border-b-4 border-white/50  font-bold text-white/50  flex items-center py-2 px-5 w-36 flex-row justify-center">
                                            Stages
                                        </div>
                                        <div className=" border-b-4 border-white/50  font-bold text-white/50  flex items-center py-2 px-5 w-36 flex-row justify-center">
                                            History
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full overflow-x-scroll gap-5 duration-500 py-8 no-scrollbar">
                      
                                    <div className="">
                                        <div className="text-white font-bold text-3xl py-2">
                                            Artists
                                        </div>

                                        <div className="flex flex-row overflow-clip gap-5 duration-500 py-5">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <span className="text-3xl font-bold">
                                    Socials
                                </span>
                                <div className="grid grid-cols-2 gap-4 py-8">
                                    {" "}
                                  
                                </div>
                                <div
                                    className={
                                        "pr-8  " + (true ? "pl-32" : "pl-72")
                                    }
                                ></div>
                            </div>
                        </div>
           
            </BackgroundWrapper>
        </>
    );
}
