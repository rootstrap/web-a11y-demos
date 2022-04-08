import React from "react";
import { Link } from "react-router-dom";

import data from "../data";
import routes from "../routes";

const FIRST_VIDEO_SLUG = data[0].slug;

const Home = () => (
  <div className="container my-4 mx-auto">
    <main>
      <h1 className="text-2xl mb-4">Playlist Demo</h1>
      <ol className="rounded-lg border border-gray-200 w-96 text-gray-900">
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
          <Link
            to={routes.notAccessiblePlaylist(FIRST_VIDEO_SLUG)}
            className="text-blue-600 underline hover:text-blue-500"
          >
            Not Accessible Example
          </Link>
        </li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">
          <Link
            to={routes.somewhatAccessiblePlaylist(FIRST_VIDEO_SLUG)}
            className="text-blue-600 underline hover:text-blue-500"
          >
            Somewhat Accessible Example
          </Link>
        </li>
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-b-lg">
          <Link
            to={routes.totallyAccessiblePlaylist(FIRST_VIDEO_SLUG)}
            className="text-blue-600 underline hover:text-blue-500"
          >
            "Totally" accessible example
          </Link>
        </li>
      </ol>
    </main>
  </div>
);

export default Home;
