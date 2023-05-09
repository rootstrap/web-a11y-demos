import { useLocation } from "react-router-dom";

const A11Y_KEYWORD = "accesible";

export const useIsRouteAccessible = () => {
  const location = useLocation();
  return location.pathname.includes(A11Y_KEYWORD);
};
