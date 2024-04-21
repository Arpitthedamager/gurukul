// components/BackgroundVideo.js

import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute z-50 w-full h-full object-cover"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
