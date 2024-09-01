import React, { useEffect, useRef, useState } from "react";
import CustomSteamText from "../CustomSteamText/CustomSteamText";

import { cn } from "@/utils/utils";
import useWindowSize from "@/utils/useWindowSize";
import { SteamDropdown } from "react-steam-components";

type SteamTabsProps = {
  lookUp: {
    "About Me": () => React.JSX.Element;
    Projects: () => React.JSX.Element;
    Skills: () => React.JSX.Element;
    Educations: () => React.JSX.Element;
    Referances: () => React.JSX.Element;
    Hobbies: () => React.JSX.Element;
  };
  activeTab: string;
  handleTab: any;
  children?: React.ReactNode;
};

function CustomSteamTabs({
  children,
  lookUp,
  activeTab,
  handleTab,
}: SteamTabsProps) {
  const tabBorder = `cursor-pointer pl-2 pr-8 text-left  border-t-2 border-t-steamOlive
  border-l-2 border-l-steamOlive
  border-r-2 border-r-borderBottomRight
  border-b-2 border-b-borderBottomRight
  `;

  return (
    <div className="relative">
      <div className={`flex flex-wrap gap-1`}>
        {Object.keys(lookUp).map((tab, index) => (
          <div
            key={index}
            className={cn(tabBorder, {
              "text-steamGold  z-[0]": activeTab === tab,
            })}
            onClick={() => handleTab(tab)}
          >
            <CustomSteamText
              variant={activeTab === tab ? "goldLight" : "default"}
            >
              {tab}
            </CustomSteamText>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomSteamTabs;
