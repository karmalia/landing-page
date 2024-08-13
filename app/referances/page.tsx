import CustomSteamText from "@/components/CustomSteamText/CustomSteamText";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import Icons from "@/components/icons";
import Referance from "@/components/referances/referance";
import Link from "next/link";
import React from "react";

const ReferancesArr = [
  {
    name: "Sinan Ergin",
    title: "Fullstack Developer",
    linkedIn: "https://www.linkedin.com/in/sinoergin/",
  },
  {
    name: "Mahsun Budak",
    title: "UX/UI Designer",
    linkedIn: "https://www.linkedin.com/in/mahsun-budak-bb9a78156/",
  },
];

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
