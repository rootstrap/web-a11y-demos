import React from "react";
import { Link } from "react-router-dom";
import Video from "../../components/Video";
import data from "../../data";
import routes from "../../routes";
import PlayIcon from "../../components/PlayIcon";
import { isWatched, trackClick } from "../../helpers";
import { Helmet } from "react-helmet";
import { formatDuration } from "date-fns";
import Badge from "../../components/Badge";
import ProgressBar from "../../components/ProgressBar";
import useGetCurrentFromParams from "../../hooks/useGetCurrentFromParams";

const TITLE = '"Totally" Accessible Playlist';

const TotallyAccessiblePlaylist = () => {
  const current = useGetCurrentFromParams();

  const handleClick = (slug) => {
    trackClick(`playlist-item-${slug}`);
  };

  return (
    <div className="container my-4 px-4 lg:px-0 mx-auto">
      <Helmet>
        <title>
          {current?.title
            ? `${current?.title} - ${TITLE} - Demo`
            : `${TITLE} - Demo`}
        </title>
      </Helmet>
      <nav>
        <Link
          to={routes.home}
          className="text-blue-600 underline hover:text-blue-500"
        >
          Go Home
        </Link>
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
            <ol className="w-[200px] md:w-[300px] lg:w-[400px] ml-6">
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
                      className="flex mb-4 text-gray-800 no-underline hover:text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                      to={routes.totallyAccessiblePlaylist(item.slug)}
                      onClick={() => handleClick(item.slug)}
                    >
                      <div className="relative mr-2">
                        <Video className="h-[70px]" />
                        <Badge aria-hidden>{item.duration}</Badge>
                        {item.slug === current.slug && (
                          <PlayIcon aria-label="Now playing, " />
                        )}
                        <ProgressBar progress={item.progress} />
                        {isWatched(item.progress) && (
                          <span className="sr-only">Watched, </span>
                        )}
                      </div>
                      <span></span>
                      <span>
                        {item.title}
                        <span className="sr-only">,</span>
                      </span>
                      {!!item.progress && (
                        <span className="sr-only">
                          Progress: {item.progress}%,
                        </span>
                      )}
                      <span className="sr-only">
                        Duration: {formattedDuration}
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
