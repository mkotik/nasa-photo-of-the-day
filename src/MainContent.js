import { logDOM } from "@testing-library/react";
import React, { useState, useHook } from "react";
import styled from "styled-components";

const MainSection = styled.div`
  height: 200%;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    ),
    url("https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80");
  background-size: cover;
  /* background-attachment: fixed; */
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-family: "Nunito", sans-serif;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  padding: 10%;
  padding-top: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 30px;
  z-index: 2;
`;

const ContentTitle = styled.h3`
  text-align: center;
  margin-top: 0px;
`;

function Explanation(props) {
  const { explanation, mediaTitle } = props;
  return (
    <ContentBox>
      <ContentTitle>{mediaTitle}</ContentTitle>
      <div className="explanationText">{explanation}</div>
    </ContentBox>
  );
}

function Media(props) {
  const { mediaURL, mediaType } = props;
  if ({ mediaType } === "video") {
    return (
      <ContentBox>
        <div className="videoBox">
          <iframe
            width="100%"
            height="440"
            src={mediaURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ContentBox>
    );
  } else {
    return (
      <ContentBox>
        <StyledImage src={mediaURL} />
      </ContentBox>
    );
  }
}

function MainContent(props) {
  const { explanation, mediaTitle, mediaURL, mediaType } = props;
  return (
    <MainSection>
      <Explanation explanation={explanation} mediaTitle={mediaTitle} />
      <Media
        mediaTitle={mediaTitle}
        mediaURL={mediaURL}
        mediaType={mediaType}
      />
    </MainSection>
  );
}

export default MainContent;
