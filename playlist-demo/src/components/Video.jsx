import React from "react";
import cn from "classnames";

const Video = ({ className }) => (
  <div className={cn("bg-gray-300 aspect-video", className)} />
);

export default Video;
