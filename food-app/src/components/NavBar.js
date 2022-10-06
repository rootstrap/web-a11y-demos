import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { SkipToMainContent } from './SkipToMainContent';

export const NavBar = () => {
  return (
    <div className="flex">
      <div className="container flex items-center px-4 mx-auto my-4">
        <img src="/logo.png" className="mr-16" />
        <div className="flex space-x-16 text-2xl font-extrabold text-black hover:text-gray-800 active:text-gray-800">
          <SkipToMainContent />
          <Link
            to={routes.HOME}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Inicio
          </Link>
          <Link
            to={routes.MENU}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Menú
          </Link>
          <Link
            to={routes.ABOUT}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            ¿Quiénes somos?
          </Link>
          <Link
            to={routes.GALLERY}
            className="text-black hover:text-gray-800 active:text-gray-800"
          >
            Galería
          </Link>
        </div>
      </div>
    </div>
  );
};
