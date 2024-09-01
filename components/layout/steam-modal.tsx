"use client";

import React from "react";
import CustomSteamWindow from "../CustomSteamWindow";
import Icons from "../icons";
import { SteamButton, SteamTabs, SteamWindow } from "react-steam-components";
import ProfileHeader from "../shared/profile-header/profile-header";
import { usePathname, useRouter } from "next/navigation";
import CustomSteamTabs from "../CustomSteamTab";
import AboutMe from "../SteamModalComponents/about-me/about-me";
import Educations from "../SteamModalComponents/educations/educations";
import Hobbies from "../SteamModalComponents/hobbies/hobbies";
import Projects from "../SteamModalComponents/projects/projects";
import Referances from "../SteamModalComponents/referances/referances";
import Skills from "../SteamModalComponents/skills/skills";
import { cn } from "@/utils/utils";

const lookUp = {
  "About Me": AboutMe,
  Projects: Projects,
  Skills: Skills,
  Educations: Educations,
  Referances: Referances,
  Hobbies: Hobbies,
};
const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const staticBorder = `p-2 min-w-52 min-h-24 bg-weldedIron border-t-2 border-t-steamOlive
                border-l-2 border-l-steamOlive
                border-r-2 border-r-borderBottomRight
                border-b-2 border-b-borderBottomRight`;

  return <div className={cn(staticBorder)}>{children || ""}</div>;
};

function SteamModal({ closeModal }: { closeModal: () => void }) {
  const [activeTab, setActiveTab] =
    React.useState<keyof typeof lookUp>("About Me");

  const handleTab = (tab: keyof typeof lookUp) => {
    setActiveTab(tab);
  };

  const ModalSection = lookUp[activeTab];

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
          <SteamButton onClick={closeModal}>
            <Icons.CloseIcon className="w-3 h-3" />
          </SteamButton>
        </div>
        <SteamWindow className="mx-auto space-y-4 p-4 h-auto">
          <ProfileHeader />

          <div className="col-span-2">
            <CustomSteamTabs
              handleTab={handleTab}
              activeTab={activeTab}
              lookUp={lookUp}
            />
            <ContentWrapper>
              <ModalSection />
            </ContentWrapper>
          </div>
        </SteamWindow>
      </CustomSteamWindow>
    </section>
  );
}

export default SteamModal;
