"use client";
import React from "react";
import BouncyWrapper from "@/components/shared/bouncy-wrapper/bouncy-wrapper";
import { SteamText, SteamWindow } from "react-steam-components";
import Image from "next/image";
import Link from "next/link";
import Hobby from "@/components/hobbies/hobby";

import hobbies from "./hobbies-data.json";

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
