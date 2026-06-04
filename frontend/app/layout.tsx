import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { lectures } from "@/data/lectures";
import { AppShell } from "@/components/layout/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "InfoSec Notes",
    template: "%s · InfoSec Notes",
  },
  description: "Lecture notes for information security.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <AppShell lectures={lectures}>{children}</AppShell>
      </body>
    </html>
  );
}
