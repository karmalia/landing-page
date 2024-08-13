import React, { useEffect, useRef, useState } from "react";
import CustomSteamText from "../CustomSteamText/CustomSteamText";

import { cn } from "@/utils/utils";
import useWindowSize from "@/utils/useWindowSize";

type SteamTabsProps = {
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
function CustomSteamTabs({
  children,
  list,
  activeTab,
  handleTab,
}: SteamTabsProps) {
  const { width } = useWindowSize();

  const [hideTabs, setHideTabs] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  console.log("Hide Tabs", hideTabs);
  const tabBorder = `cursor-pointer pl-2 pr-8 text-left  border-t-2 border-t-steamOlive
  border-l-2 border-l-steamOlive
  border-r-2 border-r-borderBottomRight
  `;

  useEffect(() => {
    if (tabsRef.current) {
      console.log("offsetWidth", tabsRef.current.clientWidth);
      console.log("Width", width);
      setHideTabs(width <= tabsRef.current.clientWidth);
    }
  }, [width]);

  return (
    <div className="relative">
      <div
        className={`flex gap-1 absolute top-[-22px] left-0 ${
          hideTabs ? "hidden" : ""
        }`}
        ref={tabsRef}
      >
        {list.map((tab, index) => (
          <div
            key={index}
            className={cn(tabBorder, {
              "text-steamGold border-b-2 border-b-steam z-[0]":
                activeTab === index,
            })}
            onClick={() => handleTab(tab)}
          >
            <CustomSteamText
              variant={
                activeTab === index
                  ? "goldLight"
                  : tab.isDisabled
                  ? "disabled"
                  : "default"
              }
            >
              {tab.label}
            </CustomSteamText>
          </div>
        ))}
      </div>
      {/* <ContentWrapper>{children}</ContentWrapper> */}
    </div>
  );
}

export default CustomSteamTabs;
