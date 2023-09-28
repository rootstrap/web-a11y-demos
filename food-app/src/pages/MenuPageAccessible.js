import { menuData } from "../mock/menuData";

import "./MenuPageAccessible.css";
import {Helmet} from "react-helmet";

export const MenuPageAccessible = () => (
  <>
    <Helmet>
      <title>Menú | Food App</title>
    </Helmet>
    <div className="menu-background-overlay h-screen">
      <section className="container px-4 mx-auto">
        <div className="menu-list">
          <h1 className='h1'>Menu</h1>

          {Object.entries(menuData).map((dayMenuData) => {
            const [day, dayMenu] = dayMenuData;
            return (
              <div key={day}>
                <h2 className="capitalize mt-6 h2">{day}</h2>
                <ol>
                  {dayMenu.map((plate) => (
                    <li key={plate.id} className="mb-2">
                      {plate.nombre}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  </>
);
