import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Newsreader({
  weight: "400",
  style: "normal",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Chùa Hội Sơn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#2a2121]  relative text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
