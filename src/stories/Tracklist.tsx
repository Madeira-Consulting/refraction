"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiPyramid, BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlusLg, BsSpotify } from "react-icons/bs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import cheerio, { AnyNode } from "cheerio";
import { fTime, fDate, fNumber } from "@/app/pages/api/helper";
import { handleUnmute } from "./VideoPlayer";

export const Tracklist = ({
    set,
    currentTrack,
    setSeek,
    setId,
    pb,
    playbackStatus,
    player,
}: any) => {
    const [requestedTracklist, setRequestedTracklist] = useState(false);

    //parse MM:SS to seconds
    const parseTime = (time: string) => {
        const [minutes, seconds] = time.split(":");
        return parseInt(minutes) * 60 + parseInt(seconds);
    };

    const parseTracklist = (html: string) => {
        const $ = cheerio.load(html);
        const tracks: {
            time: number;
            trackNumber: string;
            title: string;
            artist: string;
        }[] = [];
        $("ol#TheList li").each((i: any, el: any) => {
            const time = parseTime($(el).find(".time-item").text().trim());
            const trackNumber = $(el).find(".track-number").text().trim();
            const title = $(el).find(".title").text().trim();
            const artist = $(el).find(".artist").text().trim();
            tracks.push({ time, trackNumber, title, artist });
        });
        console.log("Successfully parsed tracklist!");
        console.log(tracks);
        return tracks;
    };

    const fetchTracklist = async (url: string) => {
        const options = {
            method: "GET",
            headers: { origin: "localhost:3030" },
        };

        return fetch("http://localhost:8080/" + url, options)
            .then((response) => response.text())
            .then((html) => {
                return parseTracklist(html);
            })
            .catch((err) => console.error(err));
    };

    const createTracklist = async (setId: string, set: any) => {
        const data = {
            isInitial: true,
            set: setId,
        };
        const tracklist = await fetchTracklist(set?.tracklistURL).then(
            (res) => {
                console.log("Successfully fetched tracklist!");
                console.log(res);
                return res;
            }
        );
        const tracks = await generateTracks(tracklist, setId);
        updateSetTracklist(setId, tracks as any);
    };

    const generateTracks = async (tracklist: any, setId: string) => {
        console.log("Generating tracks...");
        console.log(tracklist);

        //for each track in tracklist create a track in the database and add the return value of the create function to the tracks array
        const tracks = await Promise.all(
            tracklist.map(async (t: any) => {
                const track = await createTrack(t, setId);
                return track;
            })
        );

        return tracks;
    };

    const createTrack = async (track: any, setId: any) => {
        const data = {
            tracknumber: track.trackNumber,
            title: track.title,
            artist: track.artist,
            timestamp: track.time,
            set: setId,
        };
        const trackId = await pb
            .collection("tracks")
            .create(data)
            .then((e: { id: any }) => {
                return e.id;
            });

        return trackId;
    };

    const updateSetTracklist = async (setId: string, tracks: []) => {
        console.log("Updating set with tracks...");
        console.log(tracks);
        console.log(setId);
        await pb.collection("sets").update(setId, { tracks: tracks });
        console.log("Successfully updated set with tracks!");
    };

    return (
        <div className="rounded-2xl to-transparent relative overflow-clip h-full ">
            {/* <div className="col-span-3 bg-white flex flex-col h-1/2 rounded-2xl overflow-clip"> */}
            <div className="flex flex-row bg-transparent rounded-t-lg pb-6 pt-2 px-4 justify-between items-center sticky border-b-2 border-spacing-4 border-white/5">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-end">
                            <div className="rounded-full aspect-square">
                                {set?.artist ? (
                                    <Image
                                        // src={
                                        //     "http://localhost:8090/api/files/wt02nz9hdjxzhxx/" +
                                        //     set?.artist[0] +
                                        //     "/" +
                                        //     set?.expand.artist[0].profilepicture
                                        // }
                                        src={
                                            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo-tomorrowland.jpg"
                                        }
                                        width={50}
                                        height={50}
                                        alt="Picture of the artist"
                                        className="w-full h-full"
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div className="w-6 h-6 hover:bg-white hover:text-primary duration-300 bg-slate-500 rounded-full -ml-5 border-2 border-dark1 flex flex-row items-center justify-center">
                                <BsPlusLg size={10} />
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col"
                        onClick={() => handleUnmute(player)}
                    >
                        {" "}
                        <span className="text-2xl font-semibold">
                            Tomorrowland 2019
                        </span>
                        <span className="text-md font-semibold">
                            3 Are Legend | {fDate(set?.date)}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row bg-transparent rounded-lg font-medium text-base justify-center items-center w-8 h-8 text-white/50 hover:text-white duration-500">
                    <BsSpotify size={20} />
                </div>
            </div>
            <div className="absolute h-full overflow-scroll no-scrollbar pb-28 pt-4 snap-y snap-proximity duration-300">
                {set?.expand.tracks ? (
                    set?.expand.tracks.map((track: any) => {
                        return (
                            <div
                                className={
                                    "duration-1000 flex flex-row px-6 py-2 items-center " +
                                    (track == currentTrack
                                        ? "bg-dark1/50 snap-center "
                                        : "hover:bg-dark1/50")
                                }
                                key={track.tracknumber}
                                onClick={() => setSeek(track.timestamp)}
                            >
                                <div className="flex w-8 mr-8 flex-row justify-center">
                                    {track != currentTrack ? (
                                        track.tracknumber
                                    ) : (
                                        <BiPyramid
                                            size={20}
                                            className={
                                                playbackStatus
                                                    ? "animate-bounce"
                                                    : ""
                                            }
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col justify-items-stretch w-full">
                                    <span className="font-medium leading-5">
                                        {track.title}
                                    </span>
                                    <span className="font-normal text-sm text-white/50">
                                        {fTime(track.timestamp)} |{" "}
                                        {track.artist}
                                    </span>
                                </div>
                                <div className="ml-8 text-white/50 hover:text-white duration-300">
                                    <BiDotsVerticalRounded size={20} />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
            {set?.expand && set?.expand?.tracks == null ? (
                <div className="flex flex-1 items-center h-full rounded-2xl justify-center  text-white/50 hover:text-white bg-dark2/80 backdrop-blur-3xl duration-200">
                    {requestedTracklist ? (
                        <></>
                    ) : (
                        <MdOutlinePlaylistAdd
                            size={100}
                            onClick={() => {
                                // getTracklist();
                                createTracklist(setId, set);
                                setRequestedTracklist(true);
                            }}
                        />
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
