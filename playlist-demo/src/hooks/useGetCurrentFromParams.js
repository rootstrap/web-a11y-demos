import { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const useGetCurrentFromParams = () => {
  let { slug } = useParams();
  const current = useMemo(
    () => data.find((item) => item.slug === slug),
    [slug]
  );

  return current;
};

export default useGetCurrentFromParams;
