"use client";
import Image from "next/image";
import { SteamButton } from "react-steam-components";
export default function Home() {
  return (
    <main className="w-dvw h-dvh relative">
      <section className="z-10 absolute top-0 left-0 w-full h-full border-2 border-red-500 grid place-content-center">
        <div></div>
      </section>
      <div className="w-full h-full absolute top-0 left-0 z-0 ">
        <Image
          src="/windows_xp.jpg"
          className="w-full h-full"
          alt="Vercel Logo"
          width={1920}
          height={1080}
        />
      </div>
    </main>
  );
}
