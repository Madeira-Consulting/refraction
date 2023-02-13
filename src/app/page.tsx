"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import PocketBase from "pocketbase";
import cheerio, { AnyNode } from "cheerio";
import _ from "lodash";
import lodash from "lodash";

const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("http://127.0.0.1:8090");

export default function Home() {
    const scrapeTracklist = (html: string | AnyNode | AnyNode[] | Buffer) => {
        const $ = cheerio.load(html);
        const tracks: {
            time: string;
            trackNumber: string;
            title: string;
            artist: string;
        }[] = [];
        $("ol#TheList li").each((i, el) => {
            const time = $(el).find(".time-item").text().trim();
            const trackNumber = $(el).find(".track-number").text().trim();
            const title = $(el).find(".title").text().trim();
            const artist = $(el).find(".artist").text().trim();
            tracks.push({ time, trackNumber, title, artist });
        });
        console.log(tracks);
        return tracks;
    };

    const getTracklist = () => {
        console.log("wuwu");
        const options = {
            method: "GET",
            headers: { origin: "localhost:3030" },
        };

        fetch(
            "http://localhost:8080/https://www.livetracklist.com/heldeep-radio-450-oliver-heldens/",
            options
        )
            //use the response to scrapTracklist
            .then((response) => response.text())
            .then((html) => scrapeTracklist(html))
            .catch((err) => console.error(err));
        console.log("wuwu2");
    };

    const searchTrack = async (artist: any, title: any) => {
        const query = encodeURIComponent(`${artist} ${title}`);
        const response = await fetch(
            `https://api.discogs.com/database/search?q=${query}&type=release&token=jXkALcplBntIYPDuIexEtmrQVqNaAJnlGSBzxVyA`
        );
        const data = await response.json();
        const releases = data.results;

        console.log(releases);

        //get the cover_image from all releases and return them in an array
        const coverImages = releases.map((release: any) => {
            return release.cover_image;
        });

        const release: any = lodash.pick(
            releases[0],
            "country",
            "title",
            "genre",
            "style",
            "year",
            "uri"
        );

        release.coverImages = coverImages;

        console.log(release);

        return releases ? release : null;
    };

    const getMix = async (id: string) => {
        const record = await pb.collection("mixes").getOne(id, {
            expand: "artist",
        });
        console.log(record);
    };

    getMix("ap2461g1o889new");

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing this&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    By{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </div>
            </div>

            <button
                onClick={(e) => {
                    // e.target.innerHTML = getTracklist();
                    // getTracklist();
                    searchTrack("HI-LO & Space 92", "Mercury");
                }}
            >
                WORK
            </button>
            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="/thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Explore the Next.js 13 playground.
                    </p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div>
        </main>
    );
}
