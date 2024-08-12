import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";

type ExperienceProps = {
  imgUrl: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  techStack: { label: string; src: string }[];
  description: string[];
};

function Experience({
  imgUrl,
  companyName,
  jobTitle,
  startDate,
  endDate,
  techStack,
  description,
}: ExperienceProps) {
  return (
    <BouncyWrapper trigger={[]}>
      <SteamWindow className="p-3 grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <SteamWindow
              variant="inner"
              className="p-1 w-[120px] h-[120px] flex items-center justify-center"
            >
              <Image
                src={imgUrl}
                width={100}
                height={100}
                alt={companyName}
                className="object-contain h-[100px]"
              />
            </SteamWindow>
            <div className="h-full flex-1">
              <SteamText variant="goldLight">
                <Link
                  href="https://www.izmirteknoloji.com.tr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {companyName}
                </Link>
              </SteamText>
              <SteamText variant="underlined">{jobTitle}</SteamText>
              <SteamText variant="olive">{`${startDate} - ${endDate}`}</SteamText>
            </div>
          </div>
          <SteamText variant="goldLight">TECH STACK:</SteamText>
          <ul className="text-xs flex flex-col gap-1 w-min">
            {techStack.map((tech, index) => (
              <li key={index} className="flex gap-1 items-center fade-in-up">
                <Image
                  src={tech.src}
                  width={15}
                  height={15}
                  alt={tech.label}
                  className="object-contain"
                />
                <SteamText variant="goldLight">
                  <u>{tech.label}</u>
                </SteamText>
              </li>
            ))}
          </ul>
        </div>
        <SteamWindow variant="inner" className="p-2 space-y-2 flex-1">
          <ul className="list-disc list-inside text-xs space-y-1">
            {description.map((desc, index) => (
              <SteamText key={index} variant="olive">
                {desc}
              </SteamText>
            ))}
          </ul>
        </SteamWindow>
      </SteamWindow>
    </BouncyWrapper>
  );
}

export default Experience;
