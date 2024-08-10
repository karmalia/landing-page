import React from "react";
import SteamText from "../SteamText/index";

import { cn } from "@/utils/utils";

type SteamRadioProps = {
  list: Array<{
    label: string;
    value: string;
    isDisabled?: boolean;
  }>;
  activeTab: number;
  handleTab: any;
  children?: React.ReactNode;
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const staticBorder = `p-2 min-w-52 min-h-24 bg-weldedIron border-t-2 border-t-steamOlive
                border-l-2 border-l-steamOlive
                border-r-2 border-r-borderBottomRight
                border-b-2 border-b-borderBottomRight`;

  return <div className={cn(staticBorder)}>{children || ""}</div>;
};
function SteamTabs({ children, list, activeTab, handleTab }: SteamRadioProps) {
  const tabBorder = `cursor-pointer pl-2 pr-8 text-left  border-t-2 border-t-steamOlive
  border-l-2 border-l-steamOlive
  border-r-2 border-r-borderBottomRight
  
  `;

  return (
    <div className="relative">
      <div className="flex gap-1 absolute top-[-22px] left-0">
        {list.map((tab, index) => (
          <div
            key={index}
            className={cn(tabBorder, {
              "text-steamGold border-b-2 border-b-steam z-[0]":
                activeTab === index,
            })}
            onClick={() => handleTab(tab)}
          >
            <SteamText
              variant={
                activeTab === index
                  ? "gold"
                  : tab.isDisabled
                  ? "disabled"
                  : "default"
              }
            >
              {tab.label}
            </SteamText>
          </div>
        ))}
      </div>
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
}

export default SteamTabs;
