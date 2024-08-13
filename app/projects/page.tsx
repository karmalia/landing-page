"use client";
import Image from "next/image";
import React from "react";
import {
  SteamProgressBar,
  SteamRadio,
  SteamText,
  SteamWindow,
} from "react-steam-components";
import CustomSteamRadio from "@/components/CustomSteamRadio/CustomSteamRadio";
import CustomSteamProgressBar from "@/components/CustomSteamProgressBar";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import Project from "@/components/projects/project";

const MyProjects = [
  {
    imgUrls: ["/projects/steam-lib-2.png", "/projects/steam-lib.png"],
    title: "Steam Component Library",
    link: "https://www.npmjs.com/package/react-steam-components",
    description:
      "A library of components for ReactJS Client Components, inspired by the Steam UI.",
    progress: 70,
    techs: [
      { label: "ReactJS", url: "/tech/icons8-react-480.png" },
      { label: "TypeScript", url: "/tech/icons8-typescript-480.png" },
      { label: "TailwindCSS", url: "/tech/icons8-tailwindcss-480.png" },
      { label: "TailwindCSS", url: "/tech/radix-ui.png" },
      { label: "NextJS", url: "/tech/storybook-icon.png" },
    ],
  },
  {
    imgUrls: [
      "/projects/android.png",
      "/projects/app-map.png",
      "/projects/app-menu.jpg",
    ],
    title: "Biz Yeriz",
    link: "https://github.com/karmalia/yeriz-react-native",
    description:
      "A Phone app for saving food loss and waste. Work in progress.",
    progress: 10,
    techs: [
      { label: "CSS", url: "/tech/icons8-css-240.png" },
      { label: "ReactJS", url: "/tech/icons8-react-480.png" },
      { label: "TypeScript", url: "/tech/icons8-typescript-480.png" },
      { label: "RollupJS", url: "/tech/rollup.png" },
    ],
  },
  {
    imgUrls: ["/projects/gyro-card.png"],
    title: "React Gyro Card",
    link: "https://github.com/karmalia/react-gyro-card",
    description: "A Simple 3D Card Component for using in React Projects.",
    progress: 80,
    techs: [
      { label: "CSS", url: "/tech/icons8-css-240.png" },
      { label: "ReactJS", url: "/tech/icons8-react-480.png" },
      { label: "TypeScript", url: "/tech/icons8-typescript-480.png" },
      { label: "RollupJS", url: "/tech/rollup.png" },
    ],
  },
];

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
