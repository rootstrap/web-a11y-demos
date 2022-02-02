import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";
import { trackClick } from "../../helpers";
import Badge from "../../components/Badge";
import ProgressBar from "../../components/ProgressBar";

const SomewhatAccessiblePlaylist = () => {
  let { slug } = useParams();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(data.find((item) => item.slug === slug));
  }, [slug]);

  if (!current) return <span>loading</span>;

  return (
    <div className="container mx-auto">
      <Link to={routes.home} className="text-blue-500 hover:text-blue-400">
        Go Home
      </Link>
      <h1 className="my-4 text-2xl">Somewhat Accessible playlist</h1>
      <div className="flex">
        <div className="flex-1">
          <Video />
          <h2 className="my-4 text-3xl">{current.title}</h2>
        </div>
        <ol className="w-[400px] ml-6">
          {data.map((item) => (
            <li key={item.slug}>
              <Link
                className="flex mb-4 text-gray-800 no-underline hover:text-gray-800"
                to={routes.somewhatAccessiblePlaylist(item.slug)}
                onClick={() => trackClick(`playlist-item-${item.slug}`)}
              >
                <div className="relative mr-2">
                  <Video className="h-[70px]" />
                  <Badge>{item.duration}</Badge>
                  {item.slug === slug && <PlayIcon />}
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
