import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/shared/footer/footer";
import Image from "next/image";
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
      <body className="h-dvh relative">
        <main className="h-dvh w-full z-30 p-4">{children}</main>
        <div className="w-full h-full absolute top-0 left-0 z-[-1] ">
          <Image
            src="/windows_xp.jpg"
            className="w-full h-full object-cover"
            alt="Vercel Logo"
            width={1920}
            height={1080}
          />
          <div className="absolute bg-black/40 top-0 left-0 w-full h-full" />
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
