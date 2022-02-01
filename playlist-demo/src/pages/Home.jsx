import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import routes from "../routes";

const Home = () => {
  return (
    <div>
      <h1>Playlist Demo</h1>
      <nav>
        <ol>
          <li>
            <Link to={routes.notAccessiblePlaylist(data[0].slug)}>
              Bad Semantics example
            </Link>
          </li>
          <li>
            <Link to={routes.somewhatAccessiblePlaylist(data[0].slug)}>
              Good Semantics example
            </Link>
          </li>
          <li>
            <Link to={routes.totallyAccessiblePlaylist(data[0].slug)}>
              "Totally" accessible example
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Home;
