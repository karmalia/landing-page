import React from "react";
import BouncyWrapper from "../shared/bouncy-wrapper/bouncy-wrapper";
import CustomSteamWindow from "../CustomSteamWindow";
import Image from "next/image";
import CustomSteamText from "../CustomSteamText/CustomSteamText";
import Link from "next/link";

function Hobby({
  imgUrl,
  title,
  description,
  link,
}: {
  imgUrl: string;
  title: string;
  description: string;
  link: {
    href: string;
    text: string;
  };
}) {
  return (
    <CustomSteamWindow className="p-2 grid grid-cols-6 gap-2 w-full">
      <div className=" col-span-6 md:col-span-1 flex items-center">
        <CustomSteamWindow variant="inner" className="p-2 h-32">
          <Image
            src={imgUrl}
            width={350}
            height={350}
            alt="Gaming"
            className="w-full h-full"
          />
        </CustomSteamWindow>
      </div>

      <div className="col-span-5 flex flex-col justify-start gap-1">
        <CustomSteamText variant="goldLight">
          <span className="text-lg">{title}</span>
        </CustomSteamText>

        <CustomSteamText variant="olive">
          <span className="text-md">{description}</span>
        </CustomSteamText>
        <CustomSteamText variant="underlined">
          <Link href={link.href}>{link.text}</Link>
        </CustomSteamText>
      </div>
    </CustomSteamWindow>
  );
}

export default Hobby;
