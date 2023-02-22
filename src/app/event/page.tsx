"use client";
import Image from "next/image";
import PocketBase from "pocketbase";

import _ from "lodash";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

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
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const eventsPromise = await getEvents();
      setEvents(eventsPromise);
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
      <div className="pt-32 px-16">
                <div className="text-white font-bold text-6xl py-8">
                  Events
                </div>

                <div className="flex flex-wrap flex-1 overflow-x-scroll gap-12 duration-500 py-5 no-scrollbar">
                     {events.length > 0
                    ? events.map((event: any) => {
                        return (
                          <EventBigButton
                            key={event.id}
                            link={"/event/" + event.urlParameter}
                            image={
                              "http://localhost:8090/api/files/" +
                              event.collectionId +
                              "/" +
                              event.id +
                              "/" +
                              event.logo
                            }
                            text={event.name}
                          />
                        );
                      })
                    : console.log("loading")}
                </div>      
              </div>
      </BackgroundWrapper>
    </>
  );
}


const EventBigButton = ({ text, image, link }: any) => {
  const [currentLink, setCurrentLink] = useState<string>("");

  useEffect(() => {
      setCurrentLink(link);
  }, [link]);

  return (
      <>
          <Link
              href={link ? currentLink : "/"}
              className="flex flex-col items-center gap-5 font-semibold text-md text-center select-none">
          <div className="rounded-4xl overflow-clip shadow-xl duration-200 w-56 h-56">
              <div className="aspect-square overflow-clip flex flex-row items-center justify-center bg-dark2">
                  <Image
                      unoptimized={true}
                      src={image ? image : ""}
                      width={100}
                      height={100}
                      alt="Picture of the event"
                      className="min-w-42 min-h-42"
                  />
              </div>
          </div>
          {text}
      </Link>
  </>
  )
              }
