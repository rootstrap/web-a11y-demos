import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import routes from "../routes";
import './home.css'

const Home = () => {
  return (
    <div className="routes-container">
      <h1>Playlist Demo</h1>
      <nav>
        <ol>
          <li>
            <Link
              to={routes.notAccessiblePlaylist(data[0].slug)}
              className="text-blue-600 underline hover:text-blue-500"
            >
              Not Accessible Example
            </Link>
          </li>
          <li>
            <Link
              to={routes.somewhatAccessiblePlaylist(data[0].slug)}
              className="text-blue-600 underline hover:text-blue-500"
            >
              Somewhat Accessible Example
            </Link>
          </li>
          <li>
            <Link
              to={routes.totallyAccessiblePlaylist(data[0].slug)}
              className="text-blue-600 underline hover:text-blue-500"
            >
              "Totally" accessible example
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Home;
