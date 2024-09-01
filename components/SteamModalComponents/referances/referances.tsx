import CustomSteamText from "@/components/CustomSteamText/CustomSteamText";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import Referance from "@/components/referances/referance";
import React from "react";
import ReferancesArr from "./referances-data.json";

function Referances() {
  return (
    <CustomSteamWindow variant="inner" className="p-2 space-y-2 min-h-[400px]">
      <CustomSteamText
        variant="goldLight"
        className="space-y-2 w-full h-auto text-lg"
      >
        <span>Here are my referances:</span>
      </CustomSteamText>
      {ReferancesArr.map((referance) => (
        <Referance
          key={referance.name}
          name={referance.name}
          title={referance.title}
          linkedIn={referance.linkedIn}
        />
      ))}
    </CustomSteamWindow>
  );
}

export default Referances;
