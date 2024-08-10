import React, { useState } from "react";
import { SteamButton, SteamWindow } from "react-steam-components";

type Props = {};

const tabs = ["About", "Projects", "Education", "Hobbies"];

function Tabs({}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <React.Fragment>
      <div className="">
        {tabs.map((tab, index) => (
          <SteamButton
            key={index}
            onClick={() => setActiveTab(index)}
            variant={activeTab === index ? "secondary" : "primary"}
          >
            <div className="p-2 text-xs">{tab}</div>
          </SteamButton>
        ))}
      </div>
      <SteamWindow variant="inner" className="p-2">
        test
      </SteamWindow>
    </React.Fragment>
  );
}

export default Tabs;
