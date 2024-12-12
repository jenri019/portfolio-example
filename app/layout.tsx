import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import "../styles/background.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Background from "@/components/background";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TarreDev Landing Page",
  description: "Landing page made by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={urbanist.className}>
        <Background />
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
