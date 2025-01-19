"use client";

import { AlignJustify, Maximize, Search, Settings } from "lucide-react";
import React from "react";

const DashboardNav = () => {
  return (
    <div className="w-full flex items-center justify-between sticky dark:text-white border-b  top-0 bg-slate-50 dark:bg-[#1A1C1E] px-5 py-3">
      <div>
        <AlignJustify />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Search /> <Maximize /> <Settings />{" "}
      </div>
    </div>
  );
};

export default DashboardNav;
