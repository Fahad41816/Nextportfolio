import type { Metadata } from "next";

import "aos/dist/aos.css";

import DashboardSidebar from "@/Components/DashboardSidebar";
import DashboardNav from "@/Components/DashboardNav";
import { Toaster } from "sonner";

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
    <div className="flex h-screen">
      <Toaster />
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <DashboardNav />
        <main>{children}</main>
      </div>
    </div>
  );
}
