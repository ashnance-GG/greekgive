import "./globals.css";
import type { Metadata } from "next";
import { Zeyada, Arapey } from "next/font/google";

const zeyada = Zeyada({
  weight: "400", // Zeyada only has regular; we’ll simulate bold via CSS
  subsets: ["latin"],
  display: "swap",
});

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreekGive",
  description: "Fundraising made simple for Greek organizations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gg-body">{children}</body>
    </html>
  );
}