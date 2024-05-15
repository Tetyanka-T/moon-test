import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Arrakis",
  description: "the Arrakis AI Ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@500,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
