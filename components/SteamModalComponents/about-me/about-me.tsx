import Experience from "@/components/about-me/experience";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import React from "react";
import { SteamText } from "react-steam-components";
import Experiences from "./about-me-data.json";

function AboutMe() {
  return (
    <CustomSteamWindow
      variant="inner"
      className="p-3 space-y-2 max-h-[400px] overflow-y-auto"
    >
      <SteamText variant="olive">Hello There!👋</SteamText>
      <SteamText variant="olive">
        I&apos;m a web developer with a passion for creating interactive
        experiences. I have a strong foundation in web development and am
        currently expanding my skillset to mobile app development. I am
        currently working on a mobile app that will help people find the best
        places to eat in their area.
      </SteamText>
      <SteamText variant="goldLight">
        <span className="text-lg">🏢</span>
        <span className="tracking-wide text-lg">PROFESSIONAL EXPERIENCES</span>
      </SteamText>

      {Experiences.map((experience, index) => (
        <Experience {...experience} key={index} />
      ))}
    </CustomSteamWindow>
  );
}

export default AboutMe;
