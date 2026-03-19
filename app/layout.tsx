import "./globals.css";
import type { Metadata } from "next";
import { Zeyada, Arapey } from "next/font/google";

const zeyada = Zeyada({
  subsets: ["latin"],
  weight: "400",
});

const arapey = Arapey({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "greekgive",
  description: "Fundraising, Made Simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${zeyada.className} ${arapey.className}`}>
        {children}
      </body>
    </html>
  );
}
