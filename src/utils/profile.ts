/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import useAxios from "@/Hook/useAxios";

export const getProfileData = async () => {
  const { data } = await useAxios.get("Profile");

  return data;
};

export const updateProfileData = async (ProfileData: any, id: string) => {
  const { data } = await useAxios.patch(`profile/${id}`, ProfileData);

  return data;
};
