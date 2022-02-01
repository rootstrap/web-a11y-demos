import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BadSemanticsPlaylist from "./pages/playlists/BadSemanticsPlaylist";
import GoodSemanticsPlaylist from "./pages/playlists/GoodSemanticsPlaylist";
import ReallyAccessiblePlaylist from "./pages/playlists/ReallyAccessiblePlaylist";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.badSemanticsPlaylist()}
        component={BadSemanticsPlaylist}
      />
      <Route
        path={routes.goodSemanticsPlaylist()}
        component={GoodSemanticsPlaylist}
      />
      <Route
        path={routes.reallyAccessiblePlaylist()}
        component={ReallyAccessiblePlaylist}
      />
      <Route path={routes.home} exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
