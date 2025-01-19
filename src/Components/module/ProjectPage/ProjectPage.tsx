/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import getProjects from "@/service/project/getProject";
import {
  addProjectData,
  deleteProjectData,
  updateProjecteData,
} from "@/utils/project";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ProjectPage = () => {
  const [ProjectData, refetch, isLoading, isError] = getProjects();

  const [projects, setProjects] = useState([]);

  const [IsupdateModalOpen, setIsupdateModalOpen] = useState(false);
  const [updateProjectData, setupdateProjectData] = useState({
    _id: "",
    name: "",
    image: "",
    liveLink: "",
    githubLink: "",
    technologies: "",
    overview: "",
  });
  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
    liveLink: "",
    githubLink: "",
    technologies: "",
    overview: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProjects(ProjectData);
  }, [ProjectData]);

  const handleAddProject = async () => {
    const responce = await addProjectData(newProject);

    console.log(responce);

    if (responce.acknowledged) {
      toast.success("Project Added Success!", { position: "top-right" });
      refetch();
    } else {
      toast.error("Something Wrong!", { position: "top-right" });
    }

    console.log(newProject);

    setNewProject({
      name: "",
      image: "",
      liveLink: "",
      githubLink: "",
      technologies: "",
      overview: "",
    });
    setIsModalOpen(false);
  };

  const handleDeleteProject = async (id: string) => {
    const responce = await deleteProjectData(id);
    console.log(responce);

    if (responce.success) {
      toast.success("Project Deleted!", { position: "top-right" });
      refetch();
    } else {
      toast.error("Something Wrong!", { position: "top-right" });
    }
  };

  const handleUpdateProject = (updateData: any) => {
    setIsupdateModalOpen(true);
    setupdateProjectData(updateData);
  };

  const handleSubmitUpdateProject = async () => {
    const updateData = {
      name: updateProjectData.name,
      image: updateProjectData.image,
      liveLink: updateProjectData.liveLink,
      githubLink: updateProjectData.githubLink,
      technologies: updateProjectData.technologies,
      overview: updateProjectData.overview,
    };

    const responce = await updateProjecteData(
      updateData,
      updateProjectData._id
    );

    console.log(responce);

    if (responce.success) {
      toast.success("Project Updated!", { position: "top-right" });
      setIsupdateModalOpen(false);
      refetch();
    } else {
      toast.error("Something Wrong!", { position: "top-right" });
      setIsupdateModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white p-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard - Project Showcase</h1>

      {/* Add Project Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mb-8"
      >
        Add Project
      </button>

      {/* Modal for Adding Projects */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-5 rounded w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Name"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProject.image}
                onChange={(e) =>
                  setNewProject({ ...newProject, image: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Live Link"
                value={newProject.liveLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, liveLink: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="GitHub Link"
                value={newProject.githubLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, githubLink: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Technologies (comma separated)"
                value={newProject.technologies}
                onChange={(e) =>
                  setNewProject({ ...newProject, technologies: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <textarea
                placeholder="Project Overview"
                value={newProject.overview}
                onChange={(e) =>
                  setNewProject({ ...newProject, overview: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white col-span-2"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* update project modal  */}
      {IsupdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-5 rounded w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Name"
                value={updateProjectData.name}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    name: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={updateProjectData.image}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    image: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Live Link"
                value={updateProjectData.liveLink}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    liveLink: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="GitHub Link"
                value={updateProjectData.githubLink}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    githubLink: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Technologies (comma separated)"
                value={updateProjectData.technologies}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    technologies: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <textarea
                placeholder="Project Overview"
                value={updateProjectData.overview}
                onChange={(e) =>
                  setupdateProjectData({
                    ...updateProjectData,
                    overview: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white col-span-2"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setIsupdateModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitUpdateProject}
                className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
              >
                Update Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing Projects */}
      <h2 className="text-2xl font-semibold mb-4">Existing Projects</h2>
      <div className="grid grid-cols-3 gap-6">
        {projects?.map((project: any) => (
          <div
            key={project._id}
            className="dark:bg-gray-800 rounded shadow-md border dark:border-0"
          >
            <Image
              width={400}
              height={200}
              src={project.image}
              alt={project.name}
            />
            <div className="p-2">
              <h3 className="text-xl font-bold mb-2">{project?.name}</h3>
              <p className="text-sm mb-2">
                {project?.overview.substring(0, 100)}...
              </p>
              <p className="text-sm mb-2">
                <strong>Technologies:</strong> {project?.technologies}
              </p>
              <div className="flex gap-4">
                <a
                  href={project?.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Link
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleDeleteProject(project._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdateProject(project)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black py-1 px-3 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
