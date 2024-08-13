import React from "react";
import CustomSteamWindow from "../CustomSteamWindow";
import CustomSteamText from "../CustomSteamText/CustomSteamText";
import Icons from "../icons";
import Link from "next/link";

const Referance = (props: {
  name: string;
  title: string;
  linkedIn: string;
}) => (
  <CustomSteamWindow className="p-2 space-y-2 w-full h-auto">
    <CustomSteamText variant="goldLight" className="space-x-2">
      <span className="text-lg">{props.name}</span>
      <span className="text-md">{props.title}</span>
    </CustomSteamText>
    <div className="flex items-center gap-2">
      <Icons.LinkedInIcon className="w-4 h-4" />
      <CustomSteamText variant="underlined">
        <Link
          href={props.linkedIn}
          target="_blank"
          className="text-steamOlive font-verdana"
        >
          LinkedIn
        </Link>
      </CustomSteamText>
    </div>
  </CustomSteamWindow>
);

export default Referance;
