import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "variable"
});

const interRounded = LocalFont({
  variable: "--font-inter-rounded",
  src: [
    { path: "./fonts/OpenRunde-Semibold.woff2", weight: "500" }
  ]
});

export const metadata: Metadata = {
  title: "SpeakEasy",
  description: "An app to learn language through media with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interRounded.variable} antialiased font-sans dark relative h-[100dvh]`}
      >
        <div className="absolute w-full h-full blur-xl -z-10 mix-blend-multiply">
          <Image
            src={"https://v3.tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg"}
            className="object-cover object-top"
            fill
            alt=""
          />
        </div>
        {children}
      </body>
    </html>
  );
}
