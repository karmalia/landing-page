import React from "react";
import { SteamWindow } from "react-steam-components";
import { SteamText } from "react-steam-components";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function AboutMe({}: Props) {
  return (
    <SteamWindow
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
      <SteamText variant="goldLight">EXPERIENCES</SteamText>
      {/* İnovasyon */}
      <SteamWindow className="p-3 grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src="/izmir_inovasyon_ve_teknoloji_logo.jpeg"
              width={100}
              height={100}
              alt="Izmir Inovasyon ve Teknoloji"
              className="object-cover h-[100px]"
            />

            <div className="h-full flex-1">
              <SteamText variant="goldLight">
                <Link
                  href="https://www.izmirteknoloji.com.tr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Izmir Inovasyon ve Teknoloji
                </Link>
              </SteamText>
              <SteamText variant="underlined">Frontend Developer</SteamText>
              <SteamText variant="olive">2023 - 2024</SteamText>
            </div>
          </div>
          <SteamText variant="goldLight">TECH STACK:</SteamText>
          <ul className="text-xs flex flex-col gap-1 w-min">
            <li className=" flex gap-1 items-center">
              <Image
                src="/pixel-react.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>ReactJS</u>
              </SteamText>
            </li>
            <li className=" flex gap-1 items-center ">
              <Image
                src="/pixel-next.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>NextJS</u>
              </SteamText>
            </li>
            <li className=" flex gap-1 items-center ">
              <Image
                src="/pixel-tailwindcss.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>TailwindCSS</u>
              </SteamText>
            </li>
            <li className=" flex gap-1 items-center ">
              <Image
                src="/pixel-typescript.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>TypeScript</u>
              </SteamText>
            </li>
          </ul>
        </div>

        <SteamWindow variant="inner" className="p-2 space-y-2 flex-1">
          <ul className="list-disc list-inside text-xs space-y-1">
            <SteamText variant="olive">
              ✨Developed the front end using NextJS, TailwindCSS, and
              TypeScript
            </SteamText>

            <SteamText variant="olive">
              🎨Created and published multiple projects using React and similar
              libraries
            </SteamText>

            <SteamText variant="olive">
              ⌛Designed and implemented modern, high performance user
              interfaces.
            </SteamText>

            <SteamText variant="olive">
              🎯Integrated and managed data from REST based services.
            </SteamText>

            <SteamText variant="olive">
              🖌️Developed and maintained web applications using React.
            </SteamText>
          </ul>
        </SteamWindow>
      </SteamWindow>
      {/* Biz Yeriz */}
      <SteamWindow className="p-3 grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src="/bizyeriz.png"
              width={100}
              height={100}
              alt="Biz Yeriz"
              className="object-cover h-[100px]"
            />

            <div className="h-full flex-1">
              <SteamText variant="goldLight">
                <Link href="#" target="_blank" rel="noreferrer">
                  Biz Yeriz
                </Link>
              </SteamText>
              <SteamText variant="underlined">Mobile Developer</SteamText>
              <SteamText variant="olive">2024 - ~</SteamText>
            </div>
          </div>
          <SteamText variant="goldLight">TECH STACK:</SteamText>
          <ul className="text-xs flex flex-col gap-1 ">
            <li className=" flex gap-1 items-center">
              <Image
                src="/pixel-react.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>React Native</u>
              </SteamText>
            </li>
            <li className=" flex gap-1 items-center">
              <Image
                src="/icons8-expo-500.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>Expo</u>
              </SteamText>
            </li>

            <li className=" flex gap-1 items-center ">
              <Image
                src="/pixel-typescript.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>TypeScript</u>
              </SteamText>
            </li>
          </ul>
        </div>

        <SteamWindow variant="inner" className="p-2 space-y-2 ">
          <ul className="list-disc list-inside text-xs space-y-1">
            <SteamText variant="olive">
              🍴 A start-up project dedicated to helping people find top dining
              spots in their area.
            </SteamText>

            <SteamText variant="olive">
              🛠️ Building the mobile app with React Native and Expo for a
              seamless user experience.
            </SteamText>

            <SteamText variant="olive">
              💪 Utilizing .NET 8 with RESTful Web API and CQRS architecture to
              power the platform.
            </SteamText>
          </ul>
        </SteamWindow>
      </SteamWindow>
      {/* Freelance */}
      <SteamWindow className="p-3 grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src="/freelance.png"
              width={100}
              height={100}
              alt="Biz Yeriz"
              className="object-cover h-[100px]"
            />

            <div className="h-full flex-1">
              <SteamText variant="goldLight">
                <Link href="#" target="_blank" rel="noreferrer">
                  Freelance
                </Link>
              </SteamText>
              <SteamText variant="underlined">Fullstack Developer</SteamText>
              <SteamText variant="olive">2020 - ~</SteamText>
            </div>
          </div>
          <SteamText variant="goldLight">TECH STACK:</SteamText>
          <ul className="text-xs flex flex-col gap-1 w-min">
            <li className=" flex gap-1 items-center">
              <Image
                src="/pixel-react.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>React</u>
              </SteamText>
            </li>
            <li className=" flex gap-1 items-center">
              <Image
                src="/icons8-nodejs-48.png"
                width={15}
                height={15}
                alt="React"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>NodeJS</u>
              </SteamText>
            </li>

            <li className=" flex gap-1 items-center ">
              <Image
                src="/icons8-javascript-480.png"
                width={15}
                height={15}
                alt="JavaScript"
                className="object-contain"
              />
              <SteamText variant="goldLight">
                <u>JavaScript</u>
              </SteamText>
            </li>
          </ul>
        </div>

        <SteamWindow variant="inner" className="p-2 space-y-2 ">
          <ul className="list-disc list-inside text-xs space-y-1">
            <SteamText variant="olive">
              🔨 Building robust web applications using MongoDB, Express.js,
              React, and Node.js.
            </SteamText>

            <SteamText variant="olive">
              🖼️ Crafting user interfaces that adapt seamlessly to various
              screen sizes.
            </SteamText>

            <SteamText variant="olive">
              ⚙️ Leveraging MongoDB with Mongoose or Supabase for efficient data
              handling.
            </SteamText>
          </ul>
        </SteamWindow>
      </SteamWindow>
    </SteamWindow>
  );
}

export default AboutMe;
