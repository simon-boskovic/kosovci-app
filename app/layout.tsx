import "./globals.css";
import styles from "../styles/MainLayout.module.scss";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const poppins = Poppins({ subsets: ["devanagari"], weight: ["400", "700"] });

export const metadata = {
  title: "Kosovci - hudební skupina 🤘",
  description: "Kosovci - Zábavová skupina s dlouholetou historií",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../favc/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favc/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favc/favicon-16x16.png"
        />
        <link rel="manifest" href="../favc/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="../favc/favicon.ico" />
      </Head>
      <body className={`${poppins.className} ${styles["c-main-layout"]}`}>
        <Navbar></Navbar>
        <div className={`${styles["c-main-content"]}`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
