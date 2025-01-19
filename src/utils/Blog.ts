/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import useAxios from "@/Hook/useAxios";

export const getblogData = async () => {
  const { data } = await useAxios.get("blog");

  return data;
};

export const getSingleblogData = async (title: string) => {
  console.log(title);
  const { data } = await useAxios.get(`blog/${title}`);
  console.log(data);
  return data;
};

export const addblogData = async (ProjectData: any) => {
  const { data } = await useAxios.post("blog", ProjectData);

  return data;
};

export const deleteblogData = async (id: any) => {
  const { data } = await useAxios.delete(`blog/${id}`);

  return data;
};

export const updateblogData = async (ProfileData: any, id: string) => {
  const { data } = await useAxios.patch(`blog/${id}`, ProfileData);

  return data;
};
