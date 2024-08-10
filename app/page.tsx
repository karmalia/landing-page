"use client";
import AboutMe from "@/components/about-me/about-me";
import Education from "@/components/education/education";
import Hobbies from "@/components/hobbies/hobbies";
import Icons from "@/components/icons";
import Projects from "@/components/projects/projects";
import Tabs from "@/components/shared/tabs";
import SteamTabs from "@/components/SteamTabs";
import SteamText from "@/components/SteamText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SteamButton, SteamWindow } from "react-steam-components";

const ContentLookUp = {
  0: AboutMe,
  1: Projects,
  2: Education,
  3: Hobbies,
};

export default function Home() {
  const list = [
    {
      label: "About",
      value: "about",
    },
    {
      label: "Projects",
      value: "projects",
    },
    {
      label: "Education",
      value: "education",
    },
    {
      label: "Hobbies",
      value: "hobbies",
    },
  ];
  type range = 0 | 1 | 2 | 3;
  const [activeTab, setActiveTab] = useState<range>(0);
  const handleTabChange = (tab: { label: string; value: string }) => {
    const index = list.findIndex((item) => item.label === tab.label);
    setActiveTab((index as range) || 0);
  };

  const Content = ContentLookUp[activeTab];

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
        <SteamWindow className="w-[800px] h-auto p-2 space-y-4">
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
          <SteamWindow className="w-[750px] mx-auto p-4 grid grid-cols-2 gap-2">
            <div className="col-span-2 flex gap-4 ">
              <SteamWindow
                className="w-40 h-auto bg-black grid place-content-center"
                variant="inner"
              >
                <Image src="/profile.png" width={150} height={150} />
              </SteamWindow>
              <div className="flex flex-col justify-between">
                <div>
                  <SteamText
                    className="text-red-500 font-verdana text-[12px] text-center"
                    variant="goldLight"
                  >
                    ISMAIL SEVGI
                  </SteamText>
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

            <div className="mt-12 col-span-2">
              <SteamTabs
                handleTab={handleTabChange}
                activeTab={activeTab}
                list={[
                  { label: "About", value: "about" },
                  {
                    label: "Projects",
                    value: "projects",
                  },
                  {
                    label: "Education",
                    value: "education",
                  },
                  {
                    label: "Hobbies",
                    value: "hobbies",
                  },
                ]}
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
