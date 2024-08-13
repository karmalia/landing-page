import CustomSteamProgressBar from "@/components/CustomSteamProgressBar";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import Image from "next/image";
import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";

type EducationProps = {
  imgUrl: string;
  universityName: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  progressPercentage: number;
};

function Education({
  imgUrl,
  universityName,
  degree,
  startDate,
  endDate,
  description,
  progressPercentage,
}: EducationProps) {
  return (
    <SteamWindow className="p-2 gap-2 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-2">
        <SteamWindow variant="inner" className="w-max p-2 h-32">
          <div className="w-24 h-full">
            <Image
              src={imgUrl}
              width={350}
              height={350}
              alt={universityName}
              className="w-full h-full bg-white"
            />
          </div>
        </SteamWindow>
      </div>
      <div className="w-full col-span-12 lg:col-span-10">
        <SteamText variant="goldLight">
          <span className="text-lg">{degree}</span>
        </SteamText>
        <SteamText variant="olive">
          {universityName} - {startDate} - {endDate}
        </SteamText>
        <div className="mt-4 w-full">
          <SteamText variant="goldLight">Progress:</SteamText>
          <CustomSteamProgressBar progressPercentage={progressPercentage} />
        </div>
      </div>
    </SteamWindow>
  );
}

export default Education;
