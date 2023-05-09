import { useIsRouteAccessible } from "../../utils/useIsRouteAccessible";
import { NavBar } from "./NavBar";
import { NavBarAccessible } from "./NavBarAccessible";

export const NavBarStrategy = () => {
  const isRouteAccessible = useIsRouteAccessible();

  return isRouteAccessible ? <NavBarAccessible /> : <NavBar />;
};
