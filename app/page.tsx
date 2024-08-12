"use client";
import AboutMe from "@/components/about-me/about-me";
import Educations from "@/components/educations/educations";
import Hobbies from "@/components/hobbies/hobbies";
import Icons from "@/components/icons";
import Projects from "@/components/projects/projects";
import ProfileHeader from "@/components/shared/profile-header/profile-header";
import Tabs from "@/components/shared/tabs";
import Skills from "@/components/skills/skills";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  SteamButton,
  SteamWindow,
  SteamText,
  SteamTabs,
} from "react-steam-components";

const ContentLookUp = {
  0: { element: AboutMe, label: "About Me" },
  1: { element: Projects, label: "Projects" },
  2: { element: Skills, label: "Skills" },
  3: { element: Educations, label: "Educations" },
  4: { element: Hobbies, label: "Hobbies" },
};

const list = Object.values(ContentLookUp).map((val, index) => ({
  label: val.label,
  value: index.toString(),
}));

type ContentRange = keyof typeof ContentLookUp;

export default function Home() {
  const [activeTab, setActiveTab] = useState<ContentRange>(0);
  const handleTabChange = React.useCallback(
    (tab: { label: string; value: string }) => {
      const index = list.findIndex((item) => item.label === tab.label);
      setActiveTab((index as ContentRange) || 0);
    },
    []
  );

  const Content =
    ContentLookUp[activeTab].element || (() => <div>Not Found</div>);

  return (
    <main className="w-dvw h-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 z-0 ">
        <Image
          src="/windows_xp.jpg"
          className="w-full h-full"
          alt="Vercel Logo"
          width={1920}
          height={1080}
        />
        <div className="absolute bg-black/40 top-0 left-0 w-full h-full" />
      </div>

      <section className="z-10 absolute top-0 left-0 w-full h-full grid place-content-center">
        <SteamWindow className="w-[1024px] h-auto p-2 space-y-4">
          <div className="flex">
            <div className="flex w-full items-center gap-2">
              <Icons.SteamIcon className="w-6 h-6" />
              <span className="text-white font-verdana text-[12px] ">
                ISMAIL SEVGI
              </span>
            </div>
            <SteamButton>
              <Icons.CloseIcon className="w-3 h-3" />
            </SteamButton>
          </div>
          <SteamWindow className="w-[996px] mx-auto p-4 grid grid-cols-2 gap-2">
            <ProfileHeader />

            <div className="mt-12 col-span-2">
              <SteamTabs
                handleTab={handleTabChange}
                activeTab={activeTab}
                list={list}
              >
                <Content />
              </SteamTabs>
            </div>
          </SteamWindow>
        </SteamWindow>
      </section>
    </main>
  );
}
