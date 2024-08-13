"use client";

import React from "react";
import CustomSteamWindow from "../CustomSteamWindow";
import Icons from "../icons";
import { SteamButton, SteamTabs, SteamWindow } from "react-steam-components";
import ProfileHeader from "../shared/profile-header/profile-header";
import { usePathname, useRouter } from "next/navigation";
import CustomSteamTabs from "../CustomSteamTab";

type Props = {
  children: React.ReactNode;
};

const list = [
  {
    label: "About Me",
    value: "/about-me",
  },
  {
    label: "Projects",
    value: "/projects",
  },
  {
    label: "Skills",
    value: "/skills",
  },
  {
    label: "Educations",
    value: "/educations",
  },
  {
    label: "Referances",
    value: "/referances",
  },
  {
    label: "Hobbies",
    value: "/hobbies",
  },
];

function DefaultLayout({ children }: Props) {
  const router = useRouter();

  const pathname = usePathname();
  const [activeTab, setActiveTab] = React.useState(
    list.findIndex((item) => item.value === pathname)
  );

  const handleTab = (tab: { label: string; value: string }) => {
    setActiveTab(list.findIndex((item) => item.label === tab.label));
    router.push(tab.value);

    return;
  };

  return (
    <section className="z-10 absolute top-0 left-0 w-full h-full flex justify-center items-start pt-12">
      <CustomSteamWindow className="container mx-auto  h-auto p-2 space-y-4">
        <div className="w-full flex justify-between">
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
        <SteamWindow className="mx-auto space-y-4 p-4 h-auto">
          <ProfileHeader />

          <div className="col-span-2">
            <CustomSteamTabs
              handleTab={handleTab}
              activeTab={activeTab}
              list={list}
            >
              {children}
            </CustomSteamTabs>
          </div>
        </SteamWindow>
      </CustomSteamWindow>
    </section>
  );
}

export default DefaultLayout;
