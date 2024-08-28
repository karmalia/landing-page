import React from "react";

import { cn } from "@/utils/utils";
import styles from "./SteamTabs.module.css";
import { SteamText } from "react-steam-components";
import CustomSteamText from "../CustomSteamText";

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
  return <div className={styles.contentWrapper}>{children || ""}</div>;
};

function CustomSteamTabs({
  children,
  list,
  activeTab,
  handleTab,
}: SteamTabsProps) {
  return (
    <div className={styles.relativeContainer}>
      <div className={styles.tabsContainer}>
        {list.map((tab, index) => (
          <div
            key={index}
            className={cn(styles.tab, {
              [styles.activeTab]: activeTab === index,
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

      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
}

export default CustomSteamTabs;
