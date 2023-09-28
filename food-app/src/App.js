import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";

import "./App.css";

import { NavBar } from "./components/NavBar";
import {
  AboutPage,
  AboutPageGoodSemantics,
  HomePage,
  HomePageAccessible,
  MenuPage,
  MenuPageAccessible,
  ContactPage,
  GalleryPage,
  GalleryPageAccessible,
} from "./pages";
import { routes } from "./utils/routes";
import {A11ySwitch} from "./components/A11ySwitch";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Food App</title>
      </Helmet>
      <img src="/circle_1.png" className="absolute top-0 right-0 w-1/2 -z-50" />

      <NavBar />
      <main id="main">
        <Routes>
          {/* HOME */}
          <Route path={routes.HOME} element={<HomePage />} />
          <Route
            path={routes.HOME_ACCESSIBLE}
            element={<HomePageAccessible />}
          />

          {/* MENU */}
          <Route path={routes.MENU} element={<MenuPage />} />
          <Route
            path={routes.MENU_ACCESSIBLE}
            element={<MenuPageAccessible />}
          />

          {/* ABOUT US */}
          <Route path={routes.ABOUT} element={<AboutPage />} />
          <Route
            path={routes.ABOUT_ACCESSIBLE}
            element={<AboutPageGoodSemantics />}
          />

          {/* CONTACT */}
          <Route path={routes.CONTACT} element={<ContactPage />} />
          <Route
            path={routes.CONTACT_ACCESSIBLE}
            element={<ContactPage accessible />}
          />

          {/* GALLERY */}
          <Route path={routes.GALLERY} element={<GalleryPage />} />
          <Route
            path={routes.GALLERY_ACCESSIBLE}
            element={<GalleryPageAccessible />}
          />
        </Routes>
      </main>
      <A11ySwitch />
    </Router>
  );
}

export default App;
