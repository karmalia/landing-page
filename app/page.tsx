"use client";
import Icons from "@/components/icons";
import SteamModal from "@/components/layout/steam-modal";
import Image from "next/image";
import React, { useState } from "react";

const modalsLookUp = {
  "": null,
  steam: SteamModal,
};

function HomePage() {
  const [activeModal, setActiveModal] =
    useState<keyof typeof modalsLookUp>("steam");
  const ActiveModalC = modalsLookUp[activeModal];
  return (
    <>
      <Image
        width={42}
        height={42}
        src={"/Steam-Emblem.png"}
        onClick={() => setActiveModal("steam")}
        className="cursor-pointer"
        alt="steam-logo"
      />
      {/* <Icons.SteamIcon
        width={32}
        height={32}
        onClick={() => setActiveModal("steam")}
        className="cursor-pointer"
      /> */}
      {ActiveModalC && <ActiveModalC closeModal={() => setActiveModal("")} />}
    </>
  );
}

export default HomePage;
