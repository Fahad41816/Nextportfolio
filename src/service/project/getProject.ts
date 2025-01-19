/* eslint-disable react-hooks/rules-of-hooks */

import { getProjectData } from "@/utils/project";
import { useQuery } from "@tanstack/react-query";

const getProjects = () => {
  const {
    data: ProjectData,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const data = await getProjectData();

      return data.data;
    },
  });

  return [ProjectData, refetch, isLoading, isError];
};

export default getProjects;
