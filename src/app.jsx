import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/videoList";
import Header from "./components/header";

const App = () => {
  const APIKEY = "AIzaSyCwzV6L2iME81Pav8oOjPHk2FQLzqDB9Yw";
  const youtubeUrl = "https://youtube.googleapis.com";
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(query);
    fetch(
      `${youtubeUrl}/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((e) => console.log(`search ERROR => ${e}`));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `${youtubeUrl}/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=kr&maxResults=25&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((e) => console.log(`ListView ERROR => ${e}`));
  }, []);

  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
};

export default App;
