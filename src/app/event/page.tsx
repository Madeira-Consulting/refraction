"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import PocketBase from "pocketbase";

import _ from "lodash";
import { Sidebar } from "@/stories/Sidebar";
import Header from "@/stories/Header";
import { AiFillEye } from "react-icons/ai";
import { BsPlusLg, BsFillCalendarDateFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { RiHeart3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { VideoPlayer } from "@/stories/VideoPlayer";
import { Mediabar } from "@/stories/Mediabar";
import { Tracklist } from "@/stories/Tracklist";
import { fDate, fNumber } from "@/app/pages/api/helper";
import { EventButton } from "@/stories/EventButton";
import { ArtistButton } from "@/stories/ArtistButton";

const getEvents = async () => {
    const events = await pb
        .collection("events")
        .getFullList(200 /* batch size */, {
            sort: "created",
        });
    console.log(events);
    return events;
};

const getArtists = async () => {
    const events = await pb
        .collection("artists")
        .getFullList(200 /* batch size */, {
            sort: "created",
        });
    console.log(events);
    return events;
};

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Event({ params }: any) {
    const [events, setEvents] = useState<any>([]);
    const [artists, setArtists] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const eventsPromise = await getEvents();
            const artistsPromise = await getArtists();
            setEvents(eventsPromise);
            setArtists(artistsPromise);
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
        <div className="flex flex-row w-screen bg-cover duration-500 relative">
            <div className="absolute min-w-full min-h-full">
                <video
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                    className="min-w-full min-h-full"
                >
                    <source src="/tml.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="fixed z-50">
                <Sidebar
                    user={user}
                    isCollapsed={true}
                    onLogin={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onLogout={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onProfile={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>

            <div className={"fixed z-50 w-full " + (true ? "pl-24" : "pl-72")}>
                <Header isTransparent={true} />
            </div>

            <div className={"bottom-0 fixed z-50 w-full"}>
                <Mediabar
                    play={null}
                    setPlay={null}
                    player={null}
                    playbackStatus={null}
                    setPlaybackStatus={null}
                    currentTrack={null}
                    set={null}
                />
            </div>
            <div
                className={
                    "w-full h-screen z-30 bg-gradient-to-r from-dark1 to-transparent "
                }
            >
                <div
                    className={
                        "w-full h-screen z-30 pt-24 bg-gradient-to-t from-dark1 via-dark1 to-dark1/80 pb-44 flex flex-col gap-5 justify-end"
                    }
                >
                    {/* <div className={"pr-8  " + (true ? "pl-32" : "pl-72")}>
                    <span className="text-white font-bold text-3xl">
                        Hot artists
                    </span>

                    <div className="flex flex-row flex-wrap gap-5 duration-500 py-5">
                        {artists.length > 0
                            ? artists.map((artist: any) => {
                                  return (
                                      <ArtistButton
                                          key={artist.id}
                                          image={
                                              "http://localhost:8090/api/files/" +
                                              artist.collectionId +
                                              "/" +
                                              artist.id +
                                              "/" +
                                              artist.profilepicture
                                          }
                                          text={artist.name}
                                      />
                                  );
                              })
                            : console.log("loading")}
                    </div>
                </div> */}

                    <div className={"pr-8 " + (true ? "pl-36" : "pl-72")}>
                        <div className="flex flex-col pb-24 z-100 text-4xl md:text-5xl lg:text-6xl">
                            <span className="text-white text- font-bold">
                                {/* add html whitespace */}
                                Welcome back,&nbsp;
                            </span>
                            <span className="text-white font-bold">
                                Marvin!
                            </span>
                        </div>
                        <span className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                            Choose your weapon
                        </span>

                        <div className="flex flex-row w-full overflow-x-scroll gap-5 duration-500 py-8 no-scrollbar">
                            {events.length > 0
                                ? events.map((event: any) => {
                                      return (
                                          <EventButton
                                              key={event.id}
                                              image={
                                                  "http://localhost:8090/api/files/" +
                                                  event.collectionId +
                                                  "/" +
                                                  event.id +
                                                  "/" +
                                                  event.logo
                                              }
                                              link={"./event/" + event.id}
                                          />
                                      );
                                  })
                                : console.log("loading")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
