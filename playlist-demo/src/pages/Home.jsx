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
            <Link
              to={routes.badSemanticsPlaylist(data[0].slug)}
              className="text-blue-500 underline"
            >
              Bad Semantics example
            </Link>
          </li>
          <li>
            <Link
              to={routes.goodSemanticsPlaylist(data[0].slug)}
              className="text-blue-500 underline"
            >
              Good Semantics example
            </Link>
          </li>
          <li>
            <Link
              to={routes.reallyAccessiblePlaylist(data[0].slug)}
              className="text-blue-500 underline"
            >
              Really accessible example
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Home;
