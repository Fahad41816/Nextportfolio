/* eslint-disable react-hooks/rules-of-hooks */

import { getAboutData } from "@/utils/About";
import { useQuery } from "@tanstack/react-query";

const getAbout = () => {
  const {
    data: AboutData,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const data = await getAboutData();

      return data.data[0];
    },
  });

  return [AboutData, refetch, isLoading, isError];
};

export default getAbout;
