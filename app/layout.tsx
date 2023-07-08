import "./globals.css";
import styles from "../styles/MainLayout.module.scss";

import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${styles["c-main-layout"]}`}>
        <Navbar></Navbar>
        <div className={`${styles["c-main-content"]}`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
