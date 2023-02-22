"use client";
import Image from "next/image";
import PocketBase from "pocketbase";

import _ from "lodash";
import { AiFillEye } from "react-icons/ai";
import { BsFacebook, BsFillCalendar3WeekFill, BsInstagram, BsSpotify, BsTwitter } from "react-icons/bs";
import { RiHeart3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { fDate, fNumber } from "@/app/pages/api/helper";
import { ArtistButton } from "@/stories/ArtistButton";
import { ImageButton } from "@/stories/ImageButton";
import { OverlayArtists } from "@/stories/OverlayArtist";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";
import { FaTshirt } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";

const getArtist = async (id: string) => {
  const artist = await pb
    .collection("artists")
    .getFirstListItem(`urlParameter="${id}"`, {
      expand: "artists",
    });
  console.log(artist);
  return artist;
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
  
  const getSets = async () => {
    const sets = await pb.collection("sets").getFullList(200 /* batch size */, {
      sort: "created",
      expand: "artist,venue,tracks,event",
    });
    console.log(sets);
    return sets;
  };

  
  
const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export default function Artist({ params }: any) {
  const artistId = params.id;
  const [artist, setArtist] = useState<any>([]);
  const [overlay, setOverlay] = useState<boolean>(false);
  const [artists, setArtists] = useState<any>([]);
  const [sets, setSets] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const artistPromise = await getArtist(artistId);
      setArtist(artistPromise);
      const artistsPromise = await getArtists();
      setArtists(artistsPromise);
      const setsPromise = await getSets();
      setSets(setsPromise);
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
      <div className="grid grid-cols-12 gap-x-16 gap-y-8 pb-36 pt-32 pl-16 w-full pr-32">
      <div className="col-span-12">

 <div className="flex flex-row gap-12">
{" "}
<Image
  src={
    "http://localhost:8090/api/files/" +
    artist.collectionId +
    "/" +
    artist.id +
    "/" +
    artist.profilepicture
  }
  unoptimized={true}
  width={100}
  height={100}
  alt="Picture of the artist"
  className="w-64 h-64 min-w-64 min-h-64 rounded-4xl"
/>
<div className="flex flex-col justify-center gap-5">
  <div className="text-4xl font-bold w-full flex">
    {artist.name} 🇧🇪
  </div>

  <div className="text-2xl">
    Tomorrowland is an annual electronic dance music festival held
    in Belgium, featuring top DJs and musical acts, elaborate
    stages, and interactive experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo dolorum sed nemo optio assumenda unde sint sit doloremque, ipsam animi veritatis deserunt autem laudantium similique aspernatur dolor. Ratione, nemo.
  </div>
  <div className="flex flex-row gap-5">
    <div className="text-white/50 hover:text-white duration-200" >
    < BsSpotify size={30}/>
    </div>
    <div className="text-white/50 hover:text-white duration-200" >
    < BsFacebook size={30}/>
    </div>
    <div className="text-white/50 hover:text-white duration-200" >
    < BsInstagram size={30}/>
    </div>
    <div className="text-white/50 hover:text-white duration-200" >
    < BsTwitter size={30}/>
    </div>
    <div className="text-white/50 hover:text-white duration-200" >
    < FaTshirt size={30}/>
    </div>
  </div>
</div>
</div> 
        </div>
        <div className="col-span-9">
          <div className="flex flex-row items-center justify-between">
            <span className="text-3xl font-bold">Tracklists</span>
            <div className="flex flex-row gap-2 justify-between rounded-full my-4 items-center">
              <div className=" border-b-4 border-white  font-bold text-white/  flex items-center py-2 px-5 w-36 flex-row justify-center">
                Most Popular
              </div>
              <div className=" border-b-4 border-white/50  font-bold text-white/50  flex items-center py-2 px-5 w-36 flex-row justify-center">
                Loved
              </div>
              <div className=" border-b-4 border-white/50  font-bold text-white/50  flex items-center py-2 px-5 w-36 flex-row justify-center">
                History
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full overflow-x-scroll gap-5 duration-500 py-8 no-scrollbar">
            {sets.length > 0
              ? sets.map((set: any) => {
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
                          <Link href={"/set/" + set.id}>
                            {set?.expand.artist[0].name}
                          </Link>
                          <span className="text-sm font-normal">
                            <div className="text-sm flex flex-col lg:flex-row items-center gap-3 text-white/50">
                              <div className="flex row gap-2 items-center">
                                <RiHeart3Fill size={15} />
                                {fNumber(set?.likes)}
                              </div>
                              <div className="flex row gap-2 items-center">
                                <AiFillEye size={15} />
                                {fNumber(set?.views)}
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <span className="text-lg col-span-1">
                        {set?.expand?.venue > 0
                          ? set?.expand?.venue[0]?.name
                          : //   : set?.expand
                            //         ?.event
                            //         .name}
                            "Mainstage"}
                      </span>
                      {/* <div className="flex-grow border border-white/10 hidden xl:block"></div> */}
                      <div
                        className="text-lg flex whitespace-nowrap hover:opacity-50 duration-100"
                        onClick={() => setOverlay(!overlay)}
                      >
                        {set?.expand?.tracks > 0
                          ? set?.expand?.tracks.length + " Tracks"
                          : "42 Tracks"}
                      </div>
                      <div className="flex flex-row items-center gap-3">
                        <BsFillCalendar3WeekFill />
                        {set.date ? fDate(set.date) : "31.12.3003"}
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
                Events
              </div>

              <div className="flex flex-row flex-1 overflow-x-scroll gap-5 duration-500 py-5 no-scrollbar">
                   {artists.length > 0
                  ? artists.map((artist: any) => {
                      return (
                        <ArtistButton
                          key={artist.id}
                          link={"/artist/" + artist.urlParameter}
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
          
                    <div key={"test"} className={"aspect-square"}>
                      <div className="w-full h-full overflow-hidden rounded-xl bg-dark2 ">
                        <div className="opacity-100 flex flex-row items-center justify-center overflow-clip w-full h-full z-20 relative">
                          <span className="text-xl font-bold">2022</span>
                        </div>
                      </div>
                    </div>
                
          </div>
          <div className={"pr-8  " + (true ? "pl-32" : "pl-72")}></div>
        </div>
      </div>
    </BackgroundWrapper>
  </>
  );
}

