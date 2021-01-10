import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/videoList";
import Header from "./components/header";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
};

export default App;
