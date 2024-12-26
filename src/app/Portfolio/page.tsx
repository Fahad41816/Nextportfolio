"use client";

import { Eye, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const portfolioData = [
  {
    id: 1,
    name: "E-Commerce Website",
    image: "https://via.placeholder.com/300x200?text=E-Commerce+Website",
    detailsLink: "#",
    livePreviewLink: "#",
  },
  {
    id: 2,
    name: "Recipe Sharing App",
    image: "https://via.placeholder.com/300x200?text=Recipe+Sharing+App",
    detailsLink: "#",
    livePreviewLink: "#",
  },
  {
    id: 3,
    name: "Personal Blog Platform",
    image: "https://via.placeholder.com/300x200?text=Blog+Platform",
    detailsLink: "#",
    livePreviewLink: "#",
  },
  {
    id: 4,
    name: "Portfolio Website",
    image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    detailsLink: "#",
    livePreviewLink: "#",
  },
];

const PortfolioCard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-[420px] mx-auto">
        <h1 className="text-[120px] font-bold text-gray-300/20 absolute -top-8 left-0 select-none">
          works
        </h1>

        {/* Main heading */}
        <h2 className="text-5xl font-bold relative mb-16 pt-12">
          MY <span className="text-amber-500">PORTFOLIO</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden  shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.name}
              width={320}
              height={384}
              className="w-80 h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />

            {/* Project Name */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
            </div>

            {/* Hover Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.detailsLink}
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-500 transition-colors"
              >
                <Eye />
              </a>
              <a
                href={project.livePreviewLink}
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-500 transition-colors"
              >
                <MoveRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
