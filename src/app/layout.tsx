import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony - Life Management System",
  description: "A comprehensive life management system for organizing your time, studies, goals, and finances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#FADADD] to-[#E6DAF1] min-h-screen`}>
        <Navigation />
        <div className="pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
