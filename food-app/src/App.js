import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import {
  AboutPage,
  AboutPageGoodSemantics,
  HomePage,
  HomePageAccessible,
  MenuPage,
  MenuPageAccessible,
  ContactPage,
} from "./pages";
import { routes } from "./utils/routes";

function App() {
  return (
    <Router>
      <img src="circle_1.png" className="absolute top-0 right-0 w-1/2 -z-50" />

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={routes.HOME_ACCESSIBLE} element={<HomePageAccessible />} />
        <Route exact path={routes.MENU} element={<MenuPage />} />
        <Route
          exact
          path={routes.MENU_ACCESSIBLE}
          element={<MenuPageAccessible />}
        />
        <Route path={routes.ABOUT} element={<AboutPage />} />
        <Route
          path={routes.ABOUT_GOOD_SEMANTICS}
          element={<AboutPageGoodSemantics />}
        />
        <Route path={routes.CONTACT} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
