import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";
import { trackClick } from "../../helpers";
import Badge from "../../components/Badge";
import ProgressBar from "../../components/ProgressBar";

const NotAccessiblePlaylist = () => {
  let { slug } = useParams();
  const history = useHistory();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(data.find((item) => item.slug === slug));
  }, [slug]);

  const handleClick = (slug) => {
    trackClick(`playlist-item-${slug}`);
    history.push(routes.notAccessiblePlaylist(slug));
  };

  if (!current) return <div>loading</div>;

  return (
    <div className="container mx-auto">
      <Link to={routes.home} className="text-blue-500">
        Go Home
      </Link>
      <div className="my-4 text-2xl">Not Accessible playlist</div>
      <div className="flex">
        <div className="flex-1">
          <Video />
          <div className="my-4 text-3xl">{current.title}</div>
        </div>
        <div className="w-[400px] ml-6">
          {data.map((item) => (
            <div
              key={item.slug}
              onClick={() => handleClick(item.slug)}
              className="flex mb-4 text-gray-800 no-underline hover:text-gray-800"
            >
              <div className="relative mr-2">
                <Video className="h-[70px]" />
                <Badge>{item.duration}</Badge>
                {item.slug === slug && <PlayIcon />}
                <ProgressBar progress={item.progress} />
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotAccessiblePlaylist;
