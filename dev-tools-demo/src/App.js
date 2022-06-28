import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotAccessiblePlaylist from "./pages/playlists/NotAccessiblePlaylist";
import SomewhatAccessiblePlaylist from "./pages/playlists/SomewhatAccessiblePlaylist";
import TotallyAccessiblePlaylist from "./pages/playlists/TotallyAccessiblePlaylist";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <p>Hola</p>
    <Switch>
      <Route
        path={routes.notAccessiblePlaylist()}
        component={NotAccessiblePlaylist}
      />
      <Route
        path={routes.somewhatAccessiblePlaylist()}
        component={SomewhatAccessiblePlaylist}
      />
      <Route
        path={routes.totallyAccessiblePlaylist()}
        component={TotallyAccessiblePlaylist}
      />
      <Route path={routes.home} exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
