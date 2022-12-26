import React from "react";

import "./youtube.css";
import YouTube from "react-youtube";

const Youtube = () => {
  return (
    <div className="video">
      <iframe
        className="youtube_video"
        src={`https://www.youtube.com/embed/8eeq-loNmis`}
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default Youtube;
