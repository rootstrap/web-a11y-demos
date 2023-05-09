import { useLocation, useNavigate } from "react-router-dom";
import { fakeClickTrack } from "../../utils/helpers";
import { routes } from "../../utils/routes";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    fakeClickTrack(location.pathname, to);

    navigate(to);
  };

  return (
    <div className="flex">
      <div className="container flex items-center px-4 mx-auto my-4">
        <img src="/logo.png" className="mr-16" />
        <div className="flex space-x-16 text-2xl font-extrabold text-black hover:text-gray-800 active:text-gray-800">
          <div
            onClick={() => handleLinkClick(routes.HOME)}
            className="text-black hover:text-gray-800 active:text-gray-800 hover:underline"
          >
            Inicio
          </div>
          <div
            onClick={() => handleLinkClick(routes.MENU)}
            className="text-black hover:text-gray-800 active:text-gray-800 hover:underline"
          >
            Menú
          </div>
          <div
            onClick={() => handleLinkClick(routes.ABOUT)}
            className="text-black hover:text-gray-800 active:text-gray-800 hover:underline"
          >
            ¿Quiénes somos?
          </div>
          <div
            onClick={() => handleLinkClick(routes.GALLERY)}
            className="text-black hover:text-gray-800 active:text-gray-800 hover:underline"
          >
            Galería
          </div>
        </div>
      </div>
    </div>
  );
};
