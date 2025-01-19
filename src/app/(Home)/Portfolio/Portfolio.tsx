/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import getProjects from "@/service/project/getProject";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Eye, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [ProjectData, refetch, isLoading, isError] = getProjects();

  // State for Modal
  const [selectedProject, setSelectedProject]: any = useState(null);

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative w-full max-w-[420px] mx-auto mb-12 sm:mb-16">
        <h1 className="text-6xl sm:text-8xl md:text-[120px] font-bold text-gray-300/20 absolute -top-4 sm:-top-6 md:-top-8 left-0 select-none">
          works
        </h1>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative pt-8 sm:pt-10 md:pt-12">
          MY <span className="text-amber-500">PORTFOLIO</span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {ProjectData?.map((project: any) => (
          <div
            key={project._id}
            className="w-full relative group overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.name}
              width={280}
              height={384}
              className="w-full h-64 sm:h-72 md:h-80 object-fill transform group-hover:scale-110 transition-transform duration-300"
            />

            {/* Project Name */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
              <h3 className="text-base sm:text-lg font-semibold">
                {project.name}
              </h3>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setSelectedProject(project)}
                className="p-3 bg-gray-800 text-white rounded-md hover:bg-amber-500 transition-colors"
              >
                <Eye className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-4 p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject?.name}
            </h3>
            <div className="mb-4">
              <Image
                src={selectedProject?.image}
                alt={selectedProject?.name}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              <strong>Overview:</strong> {selectedProject?.overview}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Languages:</strong> {selectedProject?.technologies}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Preview:</strong>{" "}
              <a
                href={selectedProject?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 underline hover:text-amber-700"
              >
                {selectedProject.liveLink}
              </a>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>GitHub:</strong>{" "}
              <a
                href={selectedProject?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 underline hover:text-amber-700"
              >
                {selectedProject.githubLink}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
