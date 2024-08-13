"use client";
import React from "react";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import {
  SteamProgressBar,
  SteamText,
  SteamWindow,
} from "react-steam-components";
import Image from "next/image";
import CustomSteamProgressBar from "@/components/CustomSteamProgressBar";
import Education from "@/components/educations/education";

const educations = [
  {
    imgUrl: "/education/ayu_logo.png",
    universityName: "Ahmet Yesevi University",
    degree: "Management Information Systems",
    startDate: "2023",
    endDate: "~",
    description: "",
    progressPercentage: 80,
  },
  {
    imgUrl: "/education/jagelonnian.jpg",
    universityName: "Jagiellonian University (Erasmus+ Program)",
    degree: "Education in German Teaching",
    startDate: "2019",
    endDate: "2020",
    progressPercentage: 100,
    description: "",
  },
  {
    imgUrl: "/education/mugla.png",
    universityName: "Muğla Sıtkı Koçman University",
    degree: "B.Ed. Education in German Teaching",
    startDate: "2016",
    endDate: "2022",
    progressPercentage: 100,
    description: "",
  },
];

function Educations() {
  return (
    <SteamWindow
      variant="inner"
      className="p-2 space-y-2 w-full h-[400px] max-h-[400px] overflow-y-auto"
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
