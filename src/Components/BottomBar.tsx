"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail, MessageCircle, Cog } from "lucide-react";
import Link from "next/link";

const BottomBar = () => {
  type NavItem = {
    name: string;
    icon: React.ElementType;
    href: string;
  };

  const navItems: NavItem[] = [
    { name: "HOME", icon: Home, href: "/" },
    { name: "ABOUT", icon: User, href: "/About" },
    { name: "Skills", icon: Cog, href: "/Skills" },
    { name: "PORTFOLIO", icon: Briefcase, href: "/Portfolio" },
    { name: "CONTACT", icon: Mail, href: "/Contact" },
    { name: "BLOGS", icon: MessageCircle, href: "/Blogs" },
  ];

  const pathname = usePathname(); // Get the current route

  return (
    <div className="w-full bg-slate-50 border-t dark:bg-[#2B2A2A] fixed bottom-0 md:hidden">
      <div className="w-full mx-auto grid grid-cols-6 gap-2 items-center justify-between p-2">
        {navItems.map((item, key) => {
          const isActive = pathname === item.href; // Check if the current route matches the item's href

          return (
            <Link
              href={item.href}
              key={key}
              className={`flex items-center justify-center mx-auto p-2 rounded-full transition-all duration-150 ${
                isActive
                  ? "bg-amber-500 text-white"
                  : "bg-slate-100 dark:bg-[#444444] hover:bg-amber-500"
              }`}
            >
              <item.icon
                className={`h-9 w-9 ${
                  isActive ? "text-white" : "text-black dark:text-white"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
