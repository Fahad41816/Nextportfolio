import type { Metadata } from "next";
import "../../app/globals.css";

import "aos/dist/aos.css";

import { Sidebar } from "@/Components/Sidebar";
import BottomBar from "@/Components/BottomBar";

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
    <div className="w-full">
      <div className="w-full ">
        {/* Main Content */}
        <div className="w-full h-screen">{children}</div>
        {/* Sidebar */}
        <Sidebar />
        <BottomBar />
      </div>
    </div>
  );
}
