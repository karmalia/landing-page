"use client";
import Experience from "@/components/about-me/experience";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import React from "react";
import { SteamText } from "react-steam-components";

const Experiences = [
  {
    imgUrl: "/izmir_inovasyon_ve_teknoloji_logo.jpeg",
    companyName: "Izmir Inovasyon ve Teknoloji",
    jobTitle: "Frontend Developer",
    startDate: "April 2023",
    endDate: "August 2024",
    techStack: [
      {
        label: "ReactJS",
        src: "/tech/pixel-react.png",
      },
      {
        label: "NextJS",
        src: "/tech/pixel-next.png",
      },
      {
        label: "TailwindCSS",
        src: "/tech/pixel-tailwindcss.png",
      },
      {
        label: "TypeScript",
        src: "/tech/pixel-typescript.png",
      },
    ],
    description: [
      "✨Developed the front end using NextJS, TailwindCSS, and TypeScript",
      "🎨Created and published multiple projects using React and similar libraries",
      "⌛Designed and implemented modern, high performance user interfaces.",
      "🎯Integrated and managed data from REST based services.",
      "🖌️Developed and maintained web applications using React.",
    ],
  },
  {
    imgUrl: "/bizyeriz.png",
    companyName: "Biz Yeriz",
    jobTitle: "Mobile Developer",
    startDate: "May 2024",
    endDate: "~",
    techStack: [
      {
        label: "React Native",
        src: "/tech/pixel-react.png",
      },
      {
        label: "Expo",
        src: "/tech/icons8-expo-500.png",
      },
      {
        label: "TypeScript",
        src: "/tech/pixel-typescript.png",
      },
    ],
    description: [
      "🍴 A side project dedicated to helping people find top dining spots in their area.",
      "🛠️ Building the mobile app with React Native and Expo for a seamless user experience.",
      "💪 Utilizing .NET 8 with RESTful Web API and CQRS architecture to power the platform.",
    ],
  },
  {
    imgUrl: "/freelance.png",
    companyName: "Freelance",
    jobTitle: "Fullstack Developer",
    startDate: "2020",
    endDate: "~",
    techStack: [
      {
        label: "React",
        src: "/tech/pixel-react.png",
      },
      {
        label: "NodeJS",
        src: "/tech/icons8-nodejs-48.png",
      },
      {
        label: "JavaScript",
        src: "/tech/icons8-javascript-480.png",
      },
    ],
    description: [
      "🔨 Building robust web applications using MongoDB, Express.js, React, and Node.js.",
      "🖼️ Crafting user interfaces that adapt seamlessly to various screen sizes.",
      "⚙️ Leveraging MongoDB with Mongoose or Supabase for efficient data handling.",
    ],
  },
];

function AboutMePage() {
  return (
    <CustomSteamWindow
      variant="inner"
      className="p-3 space-y-2 h-[400px] max-h-[400px] overflow-y-auto"
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

export default AboutMePage;
