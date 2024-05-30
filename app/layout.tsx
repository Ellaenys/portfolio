import type { Metadata } from "next";
import {Source_Serif_4} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";
import Providers from "@/app/providers";
import Header from "@/app/section/header";
import Footer from "@/app/section/footer";
import Navigation from "@/app/component/navbar";

const source:NextFont = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASHRY LAETITIA",
  description: "Développeuse web front et designeuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="fr" className={"dark"}>
      <body className={source.className}>
      <Providers>
          <Navigation/>
          <Header/>
          {children}
          <Footer/>
      </Providers>
      </body>
      </html>

  );
}
