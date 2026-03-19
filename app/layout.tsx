import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "greekgive",
  description: "Fundraising, made simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Zeyada&family=Arapey&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
