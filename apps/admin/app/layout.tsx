import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@genii/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genii Admin",
  description: "Admin dashboard for Genii Courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  );
}
