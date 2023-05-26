import { Inter } from "next/font/google";
import { Providers } from "../components/providers";
import { type Metadata } from "next";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG - Farmers",
  description: "Generated by create next app",
  applicationName: "Shop-Green For Farmers",
  manifest: "/manifest.json",
  icons: ["icons/favicon-16x16.png", "icons/favicon-32x32.png"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ width: "100vw", height: "100vh", margin: 0 }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
