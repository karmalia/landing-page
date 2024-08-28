import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/shared/footer/footer";
import Image from "next/image";
import CustomSteamWindow from "@/components/CustomSteamWindow";
import Icons from "@/components/icons";
import { SteamButton, SteamTabs, SteamWindow } from "react-steam-components";
import ProfileHeader from "@/components/shared/profile-header/profile-header";
import DefaultLayout from "@/components/layout/default";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "İsmail Sevgi",
  description: "My personal website for sharing my experiences and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-dvh relative">
          <div className="w-full h-full absolute top-0 left-0 z-0 ">
            <Image
              src="/windows_xp.jpg"
              className="w-full h-full object-cover"
              alt="Vercel Logo"
              width={1920}
              height={1080}
            />
            <div className="absolute bg-black/40 top-0 left-0 w-full h-full" />
          </div>

          <DefaultLayout>{children}</DefaultLayout>
          <Analytics />
        </main>

        <Footer />
      </body>
    </html>
  );
}
