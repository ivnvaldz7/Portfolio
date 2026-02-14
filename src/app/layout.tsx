import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Valdez | Full Stack Developer",
  description:
    "Ivan Valdez - Full Stack Developer Portfolio. Projects built with Next.js, React, TypeScript and more. Focused on logistics, automation and scalable web applications.",
  metadataBase: new URL("https://ivnvaldz.com"),
  keywords: [
    "Ivan Valdez",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Buenos Aires",
  ],
  authors: [{ name: "Ivan Valdez", url: "https://ivnvaldz.com" }],
  creator: "Ivan Valdez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ivan Valdez - Full Stack Developer",
    description:
      "Full Stack Developer Portfolio. Projects built with Next.js, React, TypeScript and more.",
    url: "https://ivnvaldz.com",
    siteName: "Ivan Valdez Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Valdez - Full Stack Developer",
    description:
      "Full Stack Developer Portfolio. Projects built with Next.js, React, TypeScript and more.",
  },
  alternates: {
    canonical: "https://ivnvaldz.com",
    languages: {
      "en-US": "https://ivnvaldz.com",
      "es-AR": "https://ivnvaldz.com",
    },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <JsonLd />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
