/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import useAxios from "@/Hook/useAxios";

export const getProjectData = async () => {
  const { data } = await useAxios.get("portfolio");
  console.log(data);
  return data;
};

export const addProjectData = async (ProjectData: any) => {
  const { data } = await useAxios.post("portfolio", ProjectData);

  return data;
};

export const deleteProjectData = async (id: any) => {
  const { data } = await useAxios.delete(`portfolio/${id}`);

  return data;
};

export const updateProjecteData = async (ProfileData: any, id: string) => {
  const { data } = await useAxios.patch(`portfolio/${id}`, ProfileData);

  return data;
};
