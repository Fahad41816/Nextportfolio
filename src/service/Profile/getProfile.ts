/* eslint-disable react-hooks/rules-of-hooks */

import { getProfileData } from "@/utils/profile";
import { useQuery } from "@tanstack/react-query";

const getProfile = () => {
  const {
    data: ProfileData,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await getProfileData();

      return data.data[0];
    },
  });

  return [ProfileData, refetch, isLoading, isError];
};

export default getProfile;
