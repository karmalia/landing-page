import Image from "next/image";
import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";

type SkillProps = {
  src: string;
  label: string;
};

function Skill(tech: SkillProps) {
  return (
    <SteamWindow className="flex flex-col p-2 gap-1 items-center w-max fade-in-up">
      <SteamWindow variant="inner" className="p-2">
        <Image width={50} height={50} src={tech.src} alt={tech.label} />
      </SteamWindow>
      <SteamText variant="goldLight">
        <span className="text-xs">{tech.label}</span>
      </SteamText>
    </SteamWindow>
  );
}

export default Skill;
