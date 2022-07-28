import { menuData } from "../mock/menuData";

export const MenuPageAccessible = () => {
  return (
    <section className="container px-4 mx-auto">
      <h1>Menu</h1>
      <div>
        {Object.entries(menuData).map((dayMenuData) => {
          const [day, dayMenu] = dayMenuData;
          return (
            <div key={day}>
              <h2>{day}</h2>
              <ul>
                {dayMenu.map((plate) => (
                  <li key={plate.id}>{plate.nombre}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* TODO: add clickable tiles that open a modal to see more about recommended plates but use div with on click so keyboard users can't access the modal   */}
    </section>
  );
};
