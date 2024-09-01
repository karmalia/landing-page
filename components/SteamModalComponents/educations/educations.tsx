import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";
import Education from "@/components/educations/education";
import educations from "./educations-data.json";

function Educations() {
  return (
    <SteamWindow
      variant="inner"
      className="p-2 space-y-2 w-full  max-h-[400px] overflow-y-auto"
    >
      <SteamText variant="goldLight">
        <span className="text-lg">📚 Education</span>
      </SteamText>
      {educations.map((education, index) => (
        <Education key={index} {...education} />
      ))}
    </SteamWindow>
  );
}

export default Educations;
