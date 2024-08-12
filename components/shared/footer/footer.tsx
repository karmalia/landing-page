"use client";
import CustomSteamText from "@/components/CustomSteamText/CustomSteamText";
import Link from "next/link";
import React from "react";
import { SteamWindow, SteamText } from "react-steam-components";

type Props = {};

function Footer({}: Props) {
  return (
    <SteamWindow className="fixed bottom-0 z-10 text-white h-auto w-full flex justify-center gap-2 items-center">
      <div className="justify-center flex gap-2 ">
        <CustomSteamText variant="olive" className="text-center py-2">
          <span className="text-xs">
            {"This page is inspired by Valve's Steam application, created by "}
          </span>
          <Link
            href="https://github.com/karmalia"
            target="_blank"
            rel="noreferrer"
          >
            <u className="text-xs text-steamGold">Ismail Sevgi</u>
          </Link>
        </CustomSteamText>
      </div>
    </SteamWindow>
  );
}

export default Footer;
