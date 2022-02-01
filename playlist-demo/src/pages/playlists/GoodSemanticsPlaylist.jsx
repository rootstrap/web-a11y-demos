import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";

const GoodSemanticsPlaylist = () => {
  let { slug } = useParams();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(data.find((item) => item.slug === slug));
  }, [slug]);

  if (!current) return <div>loading</div>;

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-2xl">Good semantics playlist</h1>
      <div className="flex">
        <div className="flex-1">
          <Video />
          <h2 className="my-4 text-3xl">{current.title}</h2>
        </div>
        <ol className="w-[400px] ml-6">
          {data.map((item) => (
            <li key={item.slug}>
              <Link
                className="flex mb-4"
                to={routes.goodSemanticsPlaylist(item.slug)}
              >
                <div className="relative mr-2">
                  <Video className="h-[70px]" />
                  <div className="badge">{item.duration}</div>
                  {item.slug === slug && <PlayIcon className="play-icon" />}
                  <div className="progress-container">
                    <div
                      className="h-1 progress-bar"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
                <div>{item.title}</div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default GoodSemanticsPlaylist;
