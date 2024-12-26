import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "aos/dist/aos.css";

import { Providers } from "./provider";
import { ThemeToggle } from "@/Components/theme-toggle";
import { Sidebar } from "@/Components/Sidebar";

// Font Configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata Configuration
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased   `}
      >
        <Providers>
          <nav className="absolute right-2 flex items-center justify-end  px-5 py-2 z-50">
            {" "}
            <ThemeToggle />
          </nav>
          <div className="relative min-h-screen flex default:bg-[#1a1919] ">
            {/* Main Content */}
            <div className="flex-grow flex justify-start items-start">
              {children}
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
