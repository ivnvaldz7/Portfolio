import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Valdez | Frontend Developer",
  description:
    "Ivan Valdez - Frontend Developer Portfolio. Projects built with Next.js, React, TypeScript and more.",
  metadataBase: new URL("https://ivnvaldz.com"),
  openGraph: {
    title: "Ivan Valdez - Frontend Developer",
    description:
      "Frontend Developer Portfolio. Projects built with Next.js, React, TypeScript and more.",
    type: "website",
  },
  icons: {
    icon: "/icons/noun_code_2438946.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
