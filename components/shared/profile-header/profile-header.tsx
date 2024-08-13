"use client";
import CustomSteamText from "@/components/CustomSteamText/CustomSteamText";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import Icons from "@/components/icons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SteamText, SteamWindow } from "react-steam-components";

async function fetchStats(cb: any) {
  const data = await axios.get("/api/stats");
  cb(data.data.streakImageSrc);
}
function ProfileHeader() {
  const [streakImageSrc, setStreakImageSrc] = useState<string | null>(null);
  useEffect(() => {
    fetchStats(setStreakImageSrc);
  }, []);

  return (
    <div className="h-auto sm:h-32  md:w-full sm:flex justify-between gap-1 ">
      <div className="flex sm:flex-row  gap-2 ">
        <CustomSteamWindow className="sm:w-32 h-24 sm:h-full" variant="inner">
          <div className="w-20 sm:w-full sm:h-full md:p-2 h-24 p-1  ">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt="me"
              className="h-full w-full object-contain"
            />
          </div>
        </CustomSteamWindow>
        <div className="flex w-min flex-col gap-2 justify-between">
          <div className="">
            <CustomSteamText variant="goldLight" className="md:text-lg">
              ISMAIL SEVGI
            </CustomSteamText>
            <div className="flex items-center gap-1 ">
              <Icons.TurkeyFlag className="w-4 h-4" />
              <span className="text-steamOlive font-verdana text-xs md:text-sm">
                Turkey / Izmir
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-start ">
            <div className="flex gap-1 items-center text-xs md:text-sm ">
              <Icons.LinkedInIcon className="w-4 h-4" />
              <span>
                <Link
                  href="https://www.linkedin.com/in/ismailsevgi/"
                  target="_blank"
                  className="text-steamOlive font-verdana "
                >
                  LinkedIn
                </Link>
              </span>
            </div>
            <div className="flex gap-1 items-center text-xs md:text-sm ">
              <Icons.GithubIcon className="w-4 h-4" />
              <span>
                <Link
                  href="https://github.com/karmalia"
                  target="_blank"
                  className="text-steamOlive font-verdana "
                >
                  Github
                </Link>
              </span>
            </div>
            <div className="flex gap-1 items-center text-xs md:text-sm ">
              <Icons.MailIcon className="w-4 h-4" />
              <span>
                <Link
                  href="mailto:ismailsevgi95@gmail.com"
                  target="_blank"
                  className="text-steamOlive font-verdana"
                >
                  ismailsevgi95@gmail.com
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:h-full flex h-36  mt-2 sm:mt-0">
        {streakImageSrc && (
          <Image
            src={streakImageSrc}
            alt="GitHub Streak"
            width={500}
            height={200}
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;
