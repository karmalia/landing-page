"use client";
import Icons from "@/components/icons";
import SteamModal from "@/components/layout/steam-modal";
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
      <Icons.SteamIcon
        width={32}
        height={32}
        onClick={() => setActiveModal("steam")}
        className="cursor-pointer"
      />
      {ActiveModalC && <ActiveModalC closeModal={() => setActiveModal("")} />}
    </>
  );
}

export default HomePage;
