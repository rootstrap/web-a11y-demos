import { menuData } from "../mock/menuData";

import "./MenuPageAccessible.css";

export const MenuPageAccessible = () => (
  <div className="menu-background-overlay h-screen">
    <section className="container px-4 mx-auto">
      <div className="menu-list">
        <h1>Menu</h1>

        {Object.entries(menuData).map((dayMenuData) => {
          const [day, dayMenu] = dayMenuData;
          return (
            <div key={day}>
              <h2 className="capitalize mt-6">{day}</h2>
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
      {/* TODO: add clickable tiles that open a modal to see more about recommended plates but use div with on click so keyboard users can't access the modal   */}
    </section>
  </div>
);
