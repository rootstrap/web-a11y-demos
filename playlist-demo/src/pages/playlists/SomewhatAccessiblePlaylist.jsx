import React from "react";
import { Link } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";
import { trackClick } from "../../helpers";
import Badge from "../../components/Badge";
import ProgressBar from "../../components/ProgressBar";
import useGetCurrentFromParams from "../../hooks/useGetCurrentFromParams";

const SomewhatAccessiblePlaylist = () => {
  const current = useGetCurrentFromParams();

  const handleClick = (slug) => {
    trackClick(`playlist-item-${slug}`);
  };

  if (!current) return <span>loading</span>;

  return (
    <div className="container my-4 px-4 lg:px-0 mx-auto">
      <Link to={routes.home} className="text-blue-500 hover:text-blue-400">
        Go Home
      </Link>
      <h1 className="my-4 text-2xl">Somewhat Accessible playlist</h1>
      <div className="flex">
        <div className="flex-1">
          <Video />
          <h2 className="my-4 text-3xl">{current.title}</h2>
        </div>
        <ol className="w-[200px] md:w-[300px] lg:w-[400px] ml-6">
          {data.map((item) => (
            <li key={item.slug}>
              <Link
                className="flex mb-4 text-gray-800 no-underline hover:text-gray-800"
                to={routes.somewhatAccessiblePlaylist(item.slug)}
                onClick={() => handleClick(item.slug)}
              >
                <div className="relative mr-2">
                  <Video className="h-[70px]" />
                  <Badge>{item.duration}</Badge>
                  {item.slug === current.slug && <PlayIcon />}
                  <ProgressBar progress={item.progress} />
                </div>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SomewhatAccessiblePlaylist;
