import { Link, useLocation } from "react-router-dom";
import { fakeClickTrack } from "../../utils/helpers";

import { routes } from "../../utils/routes";
import { SkipToMainContent } from "../SkipToMainContent";

export const NavBarAccessible = () => {
  const location = useLocation();

  const handleLinkClick = (to) => {
    fakeClickTrack(location.pathname, to);
  };

  return (
    <nav className="flex">
      <div className="container flex items-center px-4 mx-auto my-4">
        <img src="/logo.png" className="mr-16" alt="Food App logo" />
        <div className="flex space-x-16 text-2xl font-extrabold text-black hover:text-gray-800 active:text-gray-800">
          <SkipToMainContent />
          <Link
            to={routes.HOME_ACCESSIBLE}
            onClick={() => handleLinkClick(routes.HOME_ACCESSIBLE)}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Inicio
          </Link>
          <Link
            to={routes.MENU_ACCESSIBLE}
            onClick={() => handleLinkClick(routes.MENU_ACCESSIBLE)}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Menú
          </Link>
          <Link
            to={routes.ABOUT_ACCESSIBLE}
            onClick={() => handleLinkClick(routes.ABOUT_ACCESSIBLE)}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            ¿Quiénes somos?
          </Link>
          <Link
            to={routes.GALLERY_ACCESSIBLE}
            onClick={() => handleLinkClick(routes.GALLERY_ACCESSIBLE)}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Galería
          </Link>
          <Link
            to={routes.CONTACT_ACCESSIBLE}
            onClick={() => handleLinkClick(routes.CONTACT_ACCESSIBLE)}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
