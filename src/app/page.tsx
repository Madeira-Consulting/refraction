"use client";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { EventButton } from "@/stories/EventButton";
import { getEvents } from "@/util/getEvents";

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Event() {
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const eventsPromise = await getEvents(pb);
            setEvents(eventsPromise);
        })();
    }, []);

    return (
        <div className="flex flex-row w-screen bg-cover duration-500">
            <div className="absolute min-h-full w-screen">
                <video
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                    className="min-h-full h-full w-screen"
                >
                    <source src="/tml.mp4" type="video/mp4" />
                </video>
            </div>

            <div
                className={
                    "w-full z-30 bg-gradient-to-r from-dark1 to-transparent "
                }
            >
                <div
                    className={
                        "w-full h-full -z-10 bg-gradient-to-t from-dark1 to-dark1/50 fixed"
                    }
                ></div>
                <div
                    className={
                        "w-full h-full -z-10 bg-gradient-to-t from-dark1 via-dark1 to-transparent fixed"
                    }
                ></div>
                <div
                    className={
                        "w-full z-30 bg-gradient-to-t from-dark1 to-transparent flex flex-col gap-5 justify-end"
                    }
                >
                    <div
                        className={
                            "pr-16 pl-16 h-screen flex flex-col justify-end pb-32"
                        }
                    >
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
                                              link={
                                                  "./event/" +
                                                  event.urlParameter
                                              }
                                          />
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
