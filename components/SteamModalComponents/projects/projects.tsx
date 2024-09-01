import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";
import Project from "@/components/projects/project";

import MyProjects from "./projects-data.json";

function Projects() {
  const ex = MyProjects[0];
  return (
    <SteamWindow
      variant="inner"
      className="max-h-[400px] overflow-y-auto p-3 space-y-2 w-full"
    >
      <div className="">
        <SteamText variant="goldLight">
          <span className="text-lg">🔨 My Projects</span>
        </SteamText>
      </div>
      <div className="space-y-4">
        {MyProjects.map((project, index) => (
          <Project key={index + ex.title} {...project} />
        ))}
      </div>
    </SteamWindow>
  );
}

export default Projects;
