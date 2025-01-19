/* eslint-disable react-hooks/rules-of-hooks */

import { getblogData } from "@/utils/Blog";
import { useQuery } from "@tanstack/react-query";

const getBlogs = () => {
  const {
    data: BlogsData,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Blogs"],
    queryFn: async () => {
      const data = await getblogData();

      return data;
    },
  });

  return [BlogsData, refetch, isLoading, isError];
};

export default getBlogs;
