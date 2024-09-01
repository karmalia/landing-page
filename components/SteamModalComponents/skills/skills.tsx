import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";
import CustomSteamRadio from "@/components/CustomSteamRadio/CustomSteamRadio";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import Skill from "@/components/skills/skill";

import SkillsData from "./skills-data.json";

const TechStacks = {
  FrontEnd: SkillsData.FrontEndTechStack,
  BackEnd: SkillsData.BackEndTechStack,
  All: [...SkillsData.FrontEndTechStack, ...SkillsData.BackEndTechStack],
};

function Skills() {
  const filters = ["All", "Front-end", "Back-end"];
  const [currentTechStack, setCurrentTechStack] = React.useState({
    label: "All",
    stack: TechStacks.All,
  });

  const handleFilterChange = (filter: string) => {
    switch (filter) {
      case "Front-end":
        setCurrentTechStack({
          label: "Front-end",
          stack: TechStacks.FrontEnd,
        });
        break;
      case "Back-end":
        setCurrentTechStack({
          label: "Back-end",
          stack: TechStacks.BackEnd,
        });
        break;
      default:
        setCurrentTechStack({
          label: "All",
          stack: TechStacks.All,
        });
        break;
    }
  };

  return (
    <SteamWindow
      variant="inner"
      className="px-2 py-1 space-y-2 max-h-[400px] overflow-y-auto"
    >
      <SteamText variant="goldLight">
        <span className="text-lg">🛠️ My Tech Stack</span>
      </SteamText>
      <SteamWindow className="flex flex-col justify-between p-2 ">
        <div className="flex flex-wrap gap-4 py-2 pl-3 items-center">
          {filters.map((filter, index) => (
            <CustomSteamRadio
              id={filter}
              name={filter}
              onChange={() => handleFilterChange(filter)}
              key={filter + index}
              label={filter}
              checked={filter === currentTechStack.label}
            />
          ))}
        </div>
        <BouncyWrapper trigger={[currentTechStack]}>
          {currentTechStack.stack.map((tech, index) => (
            <Skill key={index} {...tech} />
          ))}
        </BouncyWrapper>
      </SteamWindow>
    </SteamWindow>
  );
}

export default Skills;
