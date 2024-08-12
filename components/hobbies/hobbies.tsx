import React from "react";
import BouncyWrapper from "../shared/bouncy-wrapper/bouncy-wrapper";
import { SteamText, SteamWindow } from "react-steam-components";
import Image from "next/image";
import Link from "next/link";

const hobbies = [
  {
    imgUrl: "/hobbies/go-game.jpg",
    title: "GO",
    description:
      "Go is an ancient Chinese board game that I've been playing for six years. I consider myself an average player. My interest in Go began after hearing about AlphaGo, the A.I. that famously beat a world champion.",
    link: {
      href: "https://online-go.com/user/view/332183",
      text: "My OGS Account",
    },
  },
  {
    imgUrl: "/hobbies/bass.jpg",
    title: "Bass Guitar",
    description:
      "I've been playing bass guitar for seven years. I love playing punk and metal songs. My favorite bands are RHCP, RATM, and Tool.",
    link: {
      href: "https://music.youtube.com/playlist?list=PLxC3T9HKOBg5KOyqUcgHYBIESyLjDEqCS&si=YNoqfYEqHw_DJGjJ",
      text: "My Youtube Playlist",
    },
  },
  {
    imgUrl: "/hobbies/books.avif",
    title: "Reading",
    description:
      "I love reading books. My favorite genres are Si-Fi, Fantasy, and Mystery.",
    link: {
      href: "https://www.goodreads.com/user/show/57429332-i-smail-sevgi",
      text: "My Goodreads Account",
    },
  },
  {
    imgUrl: "/hobbies/movie.avif",
    title: "Movies and Series",
    description:
      "I love watching series. My favorite series are Game of Thrones, Breaking Bad, and The Witcher.",
    link: {
      href: "https://www.imdb.com/user/ur69997062/",
      text: "My IMDB Account",
    },
  },
];

function Hobbies() {
  return (
    <SteamWindow
      variant="inner"
      className="p-2 space-y-2 w-full h-[400px] max-h-[400px] overflow-y-auto"
    >
      <div className="flex flex-col gap-2">
        <SteamText variant="goldLight">
          <span className="text-lg">🎮 My Hobbies</span>
        </SteamText>
        <SteamText variant="olive">
          <span className="text-sm pl-2">
            I love playing video games, watching movies and series, and reading
            Si-Fi, Fantasy books.
          </span>
        </SteamText>
      </div>
      {hobbies.map((hobby, index) => (
        <Hobby key={index} {...hobby} />
      ))}
    </SteamWindow>
  );
}

export default Hobbies;
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
    <BouncyWrapper trigger={[]}>
      <SteamWindow className="p-2 grid grid-cols-6 gap-2 w-full">
        <SteamWindow variant="inner" className="p-2 h-32 col-span-1">
          <Image
            src={imgUrl}
            width={350}
            height={350}
            alt="Gaming"
            className="w-full h-full"
          />
        </SteamWindow>
        <div className="col-span-5 flex flex-col justify-start gap-1">
          <SteamText variant="goldLight">
            <span className="text-lg">{title}</span>
          </SteamText>

          <SteamText variant="olive">
            <span className="text-md">{description}</span>
          </SteamText>
          <SteamText variant="underlined">
            <Link href={link.href}>{link.text}</Link>
          </SteamText>
        </div>
      </SteamWindow>
    </BouncyWrapper>
  );
}
