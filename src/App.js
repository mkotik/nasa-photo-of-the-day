import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import URL from "./constants";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const dateFormatter = function (origDate) {
  const array = origDate.split("-");
  const year = array[0];
  const month = array[1];
  const day = array[2];
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "full",
    timeStyle: "long",
  })
    .format(new Date(`${month} ${day}, ${year}`))
    .split(" ")
    .slice(0, 4)
    .join(" ");

  return formattedDate;
};

function App() {
  const [date, setDate] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [mediaTitle, setMediaTitle] = useState(null);
  const [mediaURL, setMediaURL] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setDate(dateFormatter(res.data.date));
        setExplanation(res.data.explanation);
        setMediaTitle(res.data.title);
        setMediaURL(res.data.url);
        setMediaType(res.data.media_type);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(date);
  return (
    <div>
      <Header date={date} />

      <MainContent
        explanation={explanation}
        mediaTitle={mediaTitle}
        mediaURL={mediaURL}
        mediaType={mediaType}
      />
      <Footer />
    </div>
  );
}

export default App;
