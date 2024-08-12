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
    <div className="col-span-2 flex gap-4 justify-between">
      <div className="flex gap-2 h-40">
        <SteamWindow
          className="w-40 h-full pt-1 bg-black grid place-content-center"
          variant="inner"
        >
          <Image src="/profile.png" width={150} height={150} alt="me" />
        </SteamWindow>
        <div className="flex flex-col justify-between">
          <div>
            <SteamText variant="goldLight">ISMAIL SEVGI</SteamText>
            <div className="flex items-center gap-1 ">
              <Icons.TurkeyFlag className="w-4 h-4" />
              <span className="text-steamOlive font-verdana text-[12px]">
                Turkey / Izmir
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex gap-1 items-center">
              <Icons.LinkedInIcon className="w-4 h-4" />
              <span>
                <Link
                  href="https://www.linkedin.com/in/ismailsevgi/"
                  target="_blank"
                  className="text-steamOlive font-verdana text-[12px] "
                >
                  LinkedIn
                </Link>
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Icons.GithubIcon className="w-4 h-4" />
              <span>
                <Link
                  href="https://github.com/karmalia"
                  target="_blank"
                  className="text-steamOlive font-verdana text-[12px] "
                >
                  Github
                </Link>
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Icons.MailIcon className="w-4 h-4" />
              <span>
                <Link
                  href="mailto:ismailsevgi95@gmail.com"
                  target="_blank"
                  className="text-steamOlive font-verdana text-[12px]"
                >
                  ismailsevgi95@gmail.com
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto duration-300 ease-linear transition-all">
        {streakImageSrc && (
          <Image
            src={streakImageSrc}
            alt="GitHub Streak"
            width={500} // You can set this to the desired width
            height={200} // You can set this to the desired height
          />
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;
