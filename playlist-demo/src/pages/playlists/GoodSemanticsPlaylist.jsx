import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";

const GoodSemanticsPlaylist = () => {
  let { slug } = useParams();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(data.find((item) => item.slug === slug));
  }, [slug]);

  if (!current) return <div>loading</div>;

  return (
    <div className="container mx-auto">
      <div>Good semantics playlist</div>
      <div className="flex">
        <div className="flex-1">
          <Video />
          <h1>{current.title}</h1>
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
                  <div className="absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-gray-400 rounded-full bottom-2 right-2">
                    {item.duration}
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
