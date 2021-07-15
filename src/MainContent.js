import { logDOM } from "@testing-library/react";
import React, { useState, useHook } from "react";
import "./MainContentStyles.css";

function Explanation(props) {
  const { explanation } = props;
  return (
    <div className="contentBox">
      <h3 className="contentTitle">Content Summary</h3>
      <div className="explanationText">{explanation}</div>
    </div>
  );
}

function Video(props) {
  const { videoTitle, videoURL } = props;
  return (
    <div className="contentBox explanationBox">
      <h3 className="contentTitle">{videoTitle}</h3>
      <div className="videoBox">
        <iframe
          width="100%"
          height="440"
          src={videoURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

function MainContent(props) {
  const { explanation, videoTitle, videoURL } = props;
  return (
    <section className="mainSection">
      <Explanation explanation={explanation} />
      <Video videoTitle={videoTitle} videoURL={videoURL} />
    </section>
  );
}

export default MainContent;
