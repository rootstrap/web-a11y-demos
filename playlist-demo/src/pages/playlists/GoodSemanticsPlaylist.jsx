import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";

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
        <div className="w-[400px]">{/* TODO: playlist */}</div>
      </div>
    </div>
  );
};

export default GoodSemanticsPlaylist;
