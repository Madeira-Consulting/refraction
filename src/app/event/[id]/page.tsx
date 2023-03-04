"use client";
import Image from "next/image";
import PocketBase from "pocketbase";

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
import { getEvent } from "@/util/getEvent";
import { getEvents } from "@/util/getEvents";
import { getArtists } from "@/util/getArtists";
import { getSets } from "@/util/getSets";

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Event({ params }: any) {
    const eventId = params.id;
    const [event, setEvent] = useState<any>([]);
    const [events, setEvents] = useState<any>([]);
    const [artists, setArtists] = useState<any>([]);
    const [sets, setSets] = useState<any>([]);
    const [overlay, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const eventPromise = await getEvent(pb, eventId);
            setEvent(eventPromise);
            const eventsPromise = await getEvents(pb);
            setEvents(eventsPromise);
            const artistsPromise = await getArtists(pb);
            setArtists(artistsPromise);
            const setsPromise = await getSets(pb);
            setSets(setsPromise);
        })();
    }, [eventId]);

    return (
        <>
            <div
                className={
                    "fixed z-40 right-0 max-w-screen-sm h-screen shadow-lg shadow-black/10 duration-500 " +
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
            <BackgroundWrapper>
                <div className="grid grid-cols-12 gap-x-16 gap-y-8">
                    <div className="col-span-12">
                        <span className="text-5xl font-bold">
                            {event?.name + " 🇧🇪"}
                        </span>
                        <div className="flex w-full justify-start gap-8 duration-500 py-8 no-scrollbar h-fit">
                            {/* {events.length > 0
                                        ? events.map((event: any) => {
                                              return (
                                                  <TracklistButton
                                                      key={event?.id}
                                                      image={
                                                          "http://localhost:8090/api/files/" +
                                                          event?.collectionId +
                                                          "/" +
                                                          event?.id +
                                                          "/" +
                                                          event?.logo
                                                      }
                                                  />
                                              );
                                          })
                                        : console.log("loading")} */}

                            <div className="flex items-center justify-start bg-dark2 rounded-2xl">
                                <div className="opacity-100 w-64 flex flex-row items-center justify-center h-max z-20 bg-dark/2">
                                    <Image
                                        unoptimized={true}
                                        src={
                                            "http://localhost:8090/api/files/" +
                                            event?.collectionId +
                                            "/" +
                                            event?.id +
                                            "/" +
                                            event?.logo
                                        }
                                        width={250}
                                        height={250}
                                        alt={"logo"}
                                        className="w-32 h-32"
                                    />
                                </div>

                                {/* load svg image next.js */}
                            </div>

                            <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                    Tomorrowland is an annual electronic dance
                                    music festival held in Belgium, featuring
                                    top DJs and musical acts, elaborate stages,
                                    and interactive experiences.
                                </div>

                                {/* load svg image next.js */}
                            </div>
                            <div className="h-60 aspect-square lg:aspect-video  bg-dark2 rounded-2xl">
                                <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                    <div className="flex flex-col gap-1">
                                        <div className=" grid-cols-2 flex flex-row gap-5">
                                            <span className="font-bold">
                                                Location:{" "}
                                            </span>
                                            <span>Boom, Belgium</span>
                                        </div>
                                        <div className=" grid-cols-2 flex flex-row gap-5">
                                            <span className="font-bold">
                                                Date:{" "}
                                            </span>
                                            <span>23.07.2021</span>
                                        </div>
                                        <div className=" grid-cols-2 flex flex-row gap-5">
                                            <span className="font-bold">
                                                Capacity :{" "}
                                            </span>
                                            <span>180.000</span>
                                        </div>
                                        <div className=" grid-cols-2 flex flex-row gap-5">
                                            <span className="font-bold">
                                                Tickets:{" "}
                                            </span>
                                            <span>€ 300</span>
                                        </div>
                                    </div>
                                </div>

                                {/* load svg image next.js */}
                            </div>
                            <div className="h-60 flex-grow bg-dark2 rounded-2xl">
                                <div className="opacity-100 flex items-center justify-center h-full z-20 bg-dark/2 text-xl leading-6 px-12">
                                    <span className="font-bold">Socials</span>
                                </div>

                                {/* load svg image next.js */}
                            </div>
                        </div>
                    </div>
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
                            {sets?.length > 0
                                ? sets?.map((set: any) => {
                                      return (
                                          <div
                                              className="flex flex-row gap-20 justify-between items-center"
                                              key={set.id}
                                          >
                                              <div className="flex flex-row items-center gap-12 w-full">
                                                  <div className="w-28 hover:bg-dark1/50">
                                                      <ImageButton
                                                          isSquare={false}
                                                          rounded={"lg"}
                                                          image={
                                                              "http://localhost:8090/api/files/" +
                                                              set.collectionId +
                                                              "/" +
                                                              set.id +
                                                              "/" +
                                                              set.thumbnail
                                                          }
                                                      />
                                                  </div>
                                                  <div className="text-lg font-bold flex flex-col whitespace-nowrap">
                                                      <Link
                                                          href={
                                                              "/set/" + set.id
                                                          }
                                                      >
                                                          {
                                                              set?.expand
                                                                  .artist[0]
                                                                  .name
                                                          }
                                                      </Link>
                                                      <span className="text-sm font-normal">
                                                          <div className="text-sm flex flex-col lg:flex-row items-center gap-3 text-white/50">
                                                              <div className="flex row gap-2 items-center">
                                                                  <RiHeart3Fill
                                                                      size={15}
                                                                  />
                                                                  {fNumber(
                                                                      set?.likes
                                                                  )}
                                                              </div>
                                                              <div className="flex row gap-2 items-center">
                                                                  <AiFillEye
                                                                      size={15}
                                                                  />
                                                                  {fNumber(
                                                                      set?.views
                                                                  )}
                                                              </div>
                                                          </div>
                                                      </span>
                                                  </div>
                                              </div>
                                              <span className="text-lg col-span-1">
                                                  {set?.expand?.venue > 0
                                                      ? set?.expand?.venue[0]
                                                            ?.name
                                                      : //   : set?.expand
                                                        //         ?.event
                                                        //         .name}
                                                        "Mainstage"}
                                              </span>
                                              {/* <div className="flex-grow border border-white/10 hidden xl:block"></div> */}
                                              <div
                                                  className="text-lg flex whitespace-nowrap hover:opacity-50 duration-100"
                                                  onClick={() =>
                                                      setOverlay(!overlay)
                                                  }
                                              >
                                                  {set?.expand?.tracks > 0
                                                      ? set?.expand?.tracks
                                                            .length + " Tracks"
                                                      : "42 Tracks"}
                                              </div>
                                              <div className="flex flex-row items-center gap-3">
                                                  <BsFillCalendar3WeekFill />
                                                  {set.date
                                                      ? fDate(set.date)
                                                      : "31.12.3003"}
                                              </div>
                                              <span className="text-lg whitespace-nowrap">
                                                  1h 30m
                                              </span>
                                          </div>
                                      );
                                  })
                                : console.log("loading")}
                            <div className="">
                                <div className="text-white font-bold text-3xl py-2">
                                    Artists
                                </div>

                                <div className="flex flex-row flex-1 overflow-x-scroll gap-5 duration-500 py-5 no-scrollbar">
                                    {artists.length > 0
                                        ? artists.map((artist: any) => {
                                              return (
                                                  <ArtistButton
                                                      key={artist.id}
                                                      link={
                                                          "/artist/" +
                                                          artist.urlParameter
                                                      }
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
                    </div>
                    <div className="col-span-3">
                        <span className="text-3xl font-bold">Socials</span>
                        <div className="grid grid-cols-2 gap-4 py-8">
                            {" "}
                            {events.length > 0
                                ? events.map((event: any) => {
                                      return (
                                          <div
                                              key={event?.id}
                                              className={"aspect-square"}
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
                            className={"pr-8  " + (true ? "pl-32" : "pl-72")}
                        ></div>
                    </div>
                </div>
            </BackgroundWrapper>
        </>
    );
}
