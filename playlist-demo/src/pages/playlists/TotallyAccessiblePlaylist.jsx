import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";
import { isWatched, trackClick } from "../../helpers";
import { Helmet } from "react-helmet";
import { formatDuration } from "date-fns";

const TITLE = '"Totally" Accessible Playlist';
const TotallyAccessiblePlaylist = () => {
  let { slug } = useParams();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(data.find((item) => item.slug === slug));
  }, [slug]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>
          {current?.title
            ? `${current?.title} - ${TITLE} - Demo`
            : `${TITLE} - Demo`}
        </title>
      </Helmet>
      <nav>
        <Link to={routes.home}>Go Home</Link>
      </nav>
      <main>
        <h1 className="my-4 text-2xl">{TITLE}</h1>
        {!current ? (
          <span aria-live="polite">loading</span>
        ) : (
          <div className="flex">
            <div className="flex-1">
              <Video />
              <h2 className="my-4 text-3xl">{current.title}</h2>
            </div>
            <ol className="w-[400px] ml-6">
              {data.map((item) => {
                const durationArr = item.duration
                  .split(":")
                  .map((durationSlug) => parseInt(durationSlug, 10));
                const formattedDuration = formatDuration({
                  minutes: durationArr[0],
                  seconds: durationArr[1],
                });
                return (
                  <li key={item.slug}>
                    <Link
                      className="item hover:bg-gray-100 focus:bg-gray-100"
                      to={routes.totallyAccessiblePlaylist(item.slug)}
                      onClick={() => trackClick(`playlist-item-${item.slug}`)}
                    >
                      <div className="relative mr-2">
                        <Video className="h-[70px]" />
                        <span className="badge" aria-hidden>
                          {item.duration}
                        </span>
                        {item.slug === slug && (
                          <PlayIcon
                            className="play-icon"
                            aria-label="Now playing - "
                          />
                        )}
                        <div className="progress-container">
                          <div
                            className="h-1 progress-bar"
                            style={{ width: `${item.progress}%` }}
                          />
                          {isWatched(item.progress) && (
                            <span className="sr-only">Watched - </span>
                          )}
                        </div>
                      </div>
                      <span></span>
                      <span>{item.title}</span>
                      <span className="sr-only">
                        - Duration: {formattedDuration}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </main>
    </div>
  );
};

export default TotallyAccessiblePlaylist;
