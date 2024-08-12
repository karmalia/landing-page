import CustomSteamProgressBar from "@/components/CustomSteamProgressBar";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SteamText, SteamWindow } from "react-steam-components";

function Project({
  imgUrls,
  title,
  description,
  progress,
  techs,
  link,
}: {
  imgUrls: string[];
  title: string;
  description: string;
  progress: number;
  techs: { url: string }[];
  link: string;
}) {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev < imgUrls.length - 1 ? prev + 1 : 0));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BouncyWrapper trigger={[]}>
      <SteamWindow variant="default" className="p-2 space-y-2 w-full">
        <div className="flex gap-4 flex-wrap lg:flex-nowrap ">
          <SteamWindow variant="inner" className="p-1">
            <div className="w-40 h-40 bg-steam">
              <Image
                src={imgUrls[currentImage]}
                width={250}
                height={250}
                alt={title}
                className="object-contain w-full h-full"
              />
            </div>
          </SteamWindow>
          <div className="w-auto space-y-2">
            <SteamText variant="goldLight">
              <h1 className="text-lg">{title}</h1>
            </SteamText>
            <SteamText variant="olive">{description}</SteamText>
            <Link href={link || "#"} target="_blank">
              <SteamText variant="goldLight">
                <u>Project Link</u>
              </SteamText>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <SteamText variant="goldLight">
              <span className="tracking-wide">Progress</span>
            </SteamText>
            <CustomSteamProgressBar
              progressPercentage={progress}
              className="h-8"
            />
          </div>
          <div className="space-y-2">
            <SteamText variant="goldLight">
              <span className="tracking-wide">Technologies</span>
            </SteamText>
            {
              <div className="flex flex-wrap gap-2 items-center h-7">
                {techs.map((tech, index) => (
                  <div className="h-7 w-7 overflow-hidden" key={index}>
                    <Image
                      src={tech.url}
                      width={28}
                      height={28}
                      alt="tech"
                      className="object-cover "
                    />
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </SteamWindow>
    </BouncyWrapper>
  );
}

export default Project;
