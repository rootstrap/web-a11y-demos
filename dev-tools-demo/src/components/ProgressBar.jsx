import React from "react";

const ProgressBar = ({ progress }) => (
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-400">
    <div className="h-1 bg-red-500" style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
