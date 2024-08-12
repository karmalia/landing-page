import Image from "next/image";
import React from "react";
import { SteamRadio, SteamText, SteamWindow } from "react-steam-components";
import CustomSteamRadio from "../CustomSteamRadio/CustomSteamRadio";
import BouncyWrapper from "../shared/bouncy-wrapper/bouncy-wrapper";

const FrontEndTechStack = [
  {
    label: "HTML5",
    src: "/tech/icons8-html-480.png",
  },
  {
    label: "CSS3",
    src: "/tech/icons8-css-240.png",
  },
  {
    label: "JavaScript",
    src: "/tech/icons8-javascript-480.png",
  },
  {
    label: "TypeScript",
    src: "/tech/icons8-typescript-480.png",
  },
  {
    label: "ReactJS",
    src: "/tech/icons8-react-480.png",
  },

  {
    label: "NextJS",
    src: "/tech/icons8-nextjs-240.png",
  },
  {
    label: "TailwindCSS",
    src: "/tech/icons8-tailwindcss-480.png",
  },
];

const BackEndTechStack = [
  {
    label: "NodeJS",
    src: "/tech/icons8-nodejs-48.png",
  },
  {
    label: "ExpressJS",
    src: "/tech/icons8-express-js-500.png",
  },
  {
    label: "MongoDB",
    src: "/tech/icons8-mongodb-480.png",
  },
  {
    label: "PostgreSQL",
    src: "/tech/icons8-postgresql-480.png",
  },
];

const TechStacks = {
  FrontEnd: FrontEndTechStack,
  BackEnd: BackEndTechStack,
  All: [...FrontEndTechStack, ...BackEndTechStack],
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
    <SteamWindow variant="inner" className="px-2 py-1 space-y-2 h-[400px]">
      <SteamText variant="goldLight">
        <span className="text-lg">🛠️ My Tech Stack</span>
      </SteamText>
      <SteamWindow className="flex flex-col justify-between p-2 ">
        <div className="flex gap-4 py-2 pl-3 items-center">
          {filters.map((filter, index) => (
            <CustomSteamRadio
              id={filter}
              name={filter}
              onChange={() => handleFilterChange(filter)}
              key={filter}
              label={filter}
              checked={filter === currentTechStack.label}
            />
          ))}
        </div>
        <BouncyWrapper trigger={[currentTechStack]}>
          {currentTechStack.stack.map((tech, index) => (
            <SteamWindow
              key={index}
              className="flex flex-col p-2 gap-1 items-center w-max fade-in-up"
            >
              <SteamWindow variant="inner" className="p-2">
                <Image width={50} height={50} src={tech.src} alt={tech.label} />
              </SteamWindow>
              <SteamText variant="goldLight">
                <span className="text-xs">{tech.label}</span>
              </SteamText>
            </SteamWindow>
          ))}
        </BouncyWrapper>
      </SteamWindow>
    </SteamWindow>
  );
}

export default Skills;
