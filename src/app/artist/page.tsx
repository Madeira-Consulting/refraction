"use client";
import Image from "next/image";
import PocketBase from "pocketbase";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";
import { getArtists } from "@/util/getArtists";

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Artist() {
    const [artists, setArtists] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const artistsPromise = await getArtists(pb);
            setArtists(artistsPromise);
        })();
    }, []);

    return (
        <>
            <BackgroundWrapper>
                <div className="pt-32 px-16">
                    <div className="text-white font-bold text-6xl py-8">
                        Artists
                    </div>

                    <div className="flex flex-wrap flex-1 overflow-x-scroll gap-12 duration-500 py-5 no-scrollbar">
                        {artists.length > 0
                            ? artists.map((artist: any) => {
                                  return (
                                      <ArtistBigButton
                                          key={artist.id}
                                          link={
                                              "/artist/" + artist.urlParameter
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
                            : null}
                    </div>
                </div>
            </BackgroundWrapper>
        </>
    );
}

const ArtistBigButton = ({ text, image, link }: any) => {
    const [currentLink, setCurrentLink] = useState<string>("");

    useEffect(() => {
        setCurrentLink(link);
    }, [link]);

    return (
        <>
            <Link
                href={link ? currentLink : "/"}
                className="flex flex-col items-center gap-5 font-semibold text-md text-center select-none"
            >
                <div className="rounded-4xl overflow-clip shadow-xl duration-200 w-56 h-56">
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
    );
};
