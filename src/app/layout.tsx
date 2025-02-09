import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/navbar/Navbar";
import { constructMetadata } from "@/utils/metadata";

const helvetica = localFont({
  src: [
    {
      path: "./helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./helvetica/helvetica-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./helvetica/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} bg-black overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
