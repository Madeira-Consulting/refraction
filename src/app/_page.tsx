"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import PocketBase from "pocketbase";
import cheerio, { AnyNode } from "cheerio";
import _ from "lodash";
import lodash from "lodash";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr-react/plyr.css";

const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("http://127.0.0.1:8090");

export default function Home() {
    return <></>;
}
