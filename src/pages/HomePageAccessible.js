import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

export const HomePageAccessible = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl font-extrabold">
            Comida <span className="text-orange-400">Deliciosa,</span>
            <br /> Vida <span className="text-orange-400">Deliciosa</span>
          </h1>
          <p className="mt-8 text-xl font-extrabold">
            Por reservas o consultas llamar al{" "}
            <a className="text-orange-400" href="tel:111-111-1111">
              111-111-1111
            </a>{" "}
            o{" "}
            <Link to={routes.CONTACT} className="text-orange-400">
              envianos un mensaje
            </Link>
          </p>
        </div>
        <img src="plate_of_food.png" className="w-1/2" alt="" />
      </div>
    </section>
  );
};
