import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { nav } from "@/lib/content";
import { AppShell } from "@/components/layout/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "InfoSec Notes",
    template: "%s · InfoSec Notes",
  },
  description: "Lecture notes for information security.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/favicon-256x256.png", sizes: "256x256" },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="msapplication-TileImage" content="/favicon-192x192.png" />
      </head>
      <body className="font-sans">
        <AppShell lectures={nav}>{children}</AppShell>
      </body>
    </html>
  );
}
