import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import Category from "./componets/Category";
import Footer from "./componets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crazy-D",
  description: "This is E-commerce website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Header/>
        <Category/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
