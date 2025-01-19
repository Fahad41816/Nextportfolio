"use client";

import Aos from "aos";
import { Home, User, Briefcase, Mail, MessageCircle, Cog } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

export function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="fixed right-5 top-5 h-screen md:flex hidden flex-col justify-center items-end space-y-4">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href; // Check if the current route matches the item's href

        return (
          <Link href={item.href} key={item.name}>
            <button
              className="group relative flex items-center justify-end"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center gap-3 rounded-full transition-all duration-300 ease-in-out px-3 py-3 ${
                  isActive
                    ? "bg-amber-500 text-white px-6"
                    : hoveredIndex === index
                    ? "bg-amber-500 text-white px-6"
                    : "bg-gray-900 text-white"
                }`}
              >
                {(hoveredIndex === index || isActive) && (
                  <span className="whitespace-nowrap text-sm font-medium">
                    {item.name}
                  </span>
                )}
                <item.icon
                  className={`h-7 w-7 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                />
              </div>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
