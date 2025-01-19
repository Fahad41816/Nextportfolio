/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  UserRoundPen,
} from "lucide-react";

import { useState } from "react";
import { cn } from "@nextui-org/react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Profile",
      href: "/dashboard/Profile",
      icon: UserRoundPen,
    },
    {
      name: "About",
      href: "/dashboard/About",
      icon: User,
    },
    {
      name: "Projects",
      href: "/dashboard/Projects",
      icon: Briefcase,
    },
    {
      name: "Blogs",
      href: "/dashboard/Blogs",
      icon: BookOpen,
    },
    {
      name: "Contact",
      href: "/dashboard/Contact",
      icon: Mail,
    },
  ];

  return (
    <>
      <div
        className={`sticky text-white top-0  h-screen p-4 bg-[#111C43] dark:bg-[#1A1C1E]   border-r transition-transform duration-300 ease-in-out z-40 w-52 transform md:translate-x-0  ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="text-xl font-bold">NI Fahad</span>
          </Link>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              console.log(isActive);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:dark:bg-[#4B4B4B] hover:bg-slate-100 hover:text-accent-foreground",
                    isActive
                      ? "bg-slate-100 dark:bg-[#4B4B4B] text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
