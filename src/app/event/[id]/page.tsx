"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import PocketBase from "pocketbase";

import _ from "lodash";
import { Sidebar } from "@/stories/Sidebar";
import { Header } from "@/stories/Header";
import { AiFillEye, AiOutlineClockCircle } from "react-icons/ai";
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
import { TracklistButton } from "@/stories/TracklistButton";
import { ImageButton } from "@/stories/ImageButton";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { OverlayArtists } from "@/stories/OverlayArtist";

const getEvent = async (id: string) => {
    const event = await pb.collection("events").getOne(id, {
        expand: "events",
    });
    console.log(event);
    return event;
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

const getEvents = async () => {
    const events = await pb
        .collection("events")
        .getFullList(200 /* batch size */, {
            sort: "created",
        });
    console.log(events);
    return events;
};

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Event({ params }: any) {
    const eventId = params.id;
    const [event, setEvent] = useState<any>([]);
    const [events, setEvents] = useState<any>([]);
    const [artists, setArtists] = useState<any>([]);
    const [overlay, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const eventPromise = await getEvent(eventId);
            setEvent(eventPromise);
            const eventsPromise = await getEvents();
            setEvents(eventsPromise);
            const artistsPromise = await getArtists();
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
            <div
                className={
                    "fixed z-50 right-0 w-3/12 h-screen shadow-lg shadow-black/10 duration-500 " +
                    (overlay ? "block" : "hidden")
                }
            >
                <div
                    className="h-full w-full bg-dark2/50 backdrop-blur-lg px-10"
                    onClick={() => setOverlay(!overlay)}
                >
                    <OverlayArtists sets={artists} />
                </div>
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
                    "w-full h-screen z-30 bg-gradient-to-r from-dark1 to-dark1/30 "
                }
            >
                <div
                    className={
                        "w-full z-30 pt-36 bg-gradient-to-t from-dark1 via-dark1 to-dark1/90 pb-44 flex flex-col gap-5"
                    }
                >
                    <div className={"pr-12  " + (true ? "pl-36" : "pl-72")}>
                        <div className="grid grid-cols-12 gap-x-16 gap-y-8">
                            <div className="col-span-12">
                                <span className="text-5xl font-bold">
                                    {event.name} 🇧🇪
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
                                        : console.log("loading")} */}

                                    <div className="flex flex-grow items-center justify-center bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex flex-row items-center justify-center h-max z-20 bg-dark/2">
                                            <Image
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
                                                className="lg:h-4/12 lg:w-4/12 w-1/2 h-1/2"
                                            />
                                        </div>

                                        {/* load svg image next.js */}
                                    </div>

                                    <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                            Tomorrowland is an annual electronic
                                            dance music festival held in
                                            Belgium, featuring top DJs and
                                            musical acts, elaborate stages, and
                                            interactive experiences.
                                        </div>

                                        {/* load svg image next.js */}
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

                                        {/* load svg image next.js */}
                                    </div>
                                    <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                        <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                            <span className="font-bold">
                                                Socials
                                            </span>
                                        </div>

                                        {/* load svg image next.js */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 aspect-video">
                                <span className="text-3xl font-bold">
                                    Most Popular
                                </span>
                                <div className="flex flex-col w-full overflow-x-scroll gap-5 duration-500 py-8 no-scrollbar">
                                    {events.length > 0
                                        ? events.map((event: any) => {
                                              return (
                                                  <div
                                                      className="flex flex-row gap-20 justify-between items-center"
                                                      key={event.id}
                                                  >
                                                      <div className="flex flex-row items-center gap-12 w-fit">
                                                          <div className="w-14 h-14 hover:bg-dark1/50">
                                                              <ImageButton
                                                                  isSquare={
                                                                      true
                                                                  }
                                                                  image={
                                                                      "/poster.jpg"
                                                                  }
                                                              />
                                                          </div>
                                                          <div className="text-lg font-bold flex flex-col whitespace-nowrap">
                                                              <span>
                                                                  3 Are Legend
                                                              </span>
                                                              <span className="text-sm font-normal">
                                                                  21.07.2021
                                                              </span>
                                                          </div>
                                                      </div>
                                                      <span className="text-lg col-span-1">
                                                          Mainstage
                                                      </span>
                                                      <div className="flex-grow border border-white/10 hidden xl:block"></div>
                                                      <div
                                                          className="text-lg flex whitespace-nowrap hover:opacity-50 duration-100"
                                                          onClick={() =>
                                                              setOverlay(
                                                                  !overlay
                                                              )
                                                          }
                                                      >
                                                          64 Tracks
                                                      </div>
                                                      <div className="text-lg flex flex-col lg:flex-row items-center gap-6">
                                                          <div className="flex row gap-2 items-center">
                                                              <RiHeart3Fill
                                                                  size={20}
                                                              />
                                                              420
                                                          </div>
                                                          <div className="flex row gap-2 items-center">
                                                              <AiFillEye
                                                                  size={20}
                                                              />
                                                              10
                                                          </div>
                                                      </div>

                                                      <span className="text-lg whitespace-nowrap">
                                                          1h 30m
                                                      </span>
                                                  </div>
                                              );
                                          })
                                        : console.log("loading")}
                                </div>
                                <div className="">
                                    <div className="text-white font-bold text-3xl py-2">
                                        Artists
                                    </div>

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
                                </div>
                            </div>
                            <div className="col-span-3">
                                <span className="text-3xl font-bold">
                                    History
                                </span>
                                <div className="grid grid-cols-2 gap-4 py-8">
                                    {" "}
                                    {events.length > 0
                                        ? events.map((event: any) => {
                                              return (
                                                  <div
                                                      key={event.id}
                                                      className={
                                                          "aspect-square"
                                                      }
                                                  >
                                                      <div className="w-full h-full overflow-hidden rounded-xl bg-dark2 ">
                                                          <div className="opacity-100 flex flex-row items-center justify-center overflow-clip w-full h-full z-20 relative">
                                                              <span className="text-xl font-bold">
                                                                  2022
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              );
                                          })
                                        : console.log("loading")}
                                </div>
                                <div
                                    className={
                                        "pr-8  " + (true ? "pl-32" : "pl-72")
                                    }
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
