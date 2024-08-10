"use client";
import SteamText from "@/components/SteamText";
import Link from "next/link";
import React from "react";
import { SteamWindow } from "react-steam-components";

type Props = {};

function Footer({}: Props) {
  return (
    <SteamWindow className="fixed bottom-0 z-10 text-white h-10 w-full flex justify-center gap-2 items-center">
      <SteamText variant="olive">
        {"This page is inspired by Valve's Steam application, created by "}
      </SteamText>
      <Link href="https://github.com/karmalia" target="_blank" rel="noreferrer">
        <SteamText variant="goldLight">
          <u>Ismail Sevgi</u>
        </SteamText>
      </Link>
      <SteamText variant="olive">{" and "}</SteamText>
      <Link
        href="https://github.com/yusufcmlt"
        target="_blank"
        rel="noreferrer"
      >
        <SteamText variant="goldLight">
          <u>Yusuf Cemal Tokmak</u>
        </SteamText>
      </Link>
    </SteamWindow>
  );
}

export default Footer;
