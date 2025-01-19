import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "aos/dist/aos.css";

import { ThemeToggle } from "@/Components/theme-toggle";
import { Providers } from "./provider";
import { Toaster } from "sonner";

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
  title: "Nahidul Islam Fahad | Nifahad | Full-Stack Developer",
  description:
    "Official website of Nahidul Islam Fahad (Nifahad), a full-stack developer showcasing innovative projects and professional web development services.",
  icons: {
    icon: "/favicon.png",
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased   `}
      >
        <Toaster></Toaster>
        <Providers>
          <nav className="absolute top-10 right-2 flex items-center justify-end  px-5 py-2 z-50">
            {" "}
            <ThemeToggle />
          </nav>
          <div className="relative w-full  min-h-screen flex ">
            {/* Main Content */}
            <div className="mx-auto w-full  flex-grow">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
