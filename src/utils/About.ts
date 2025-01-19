/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import useAxios from "@/Hook/useAxios";

export const getAboutData = async () => {
  const { data } = await useAxios.get("about");

  return data;
};

export const updateAbouteData = async (AboutData: any, id: any) => {
  try {
    console.log(AboutData, id);

    const { data } = await useAxios.patch(`about/${id}`, AboutData);

    return data;
  } catch (error: any) {
    console.error(
      "Error in updateAbouteData:",
      error.response?.data || error.message
    );
    throw error;
  }
};
