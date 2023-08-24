import React, { useEffect, useState } from "react";
import VideoCardContainer from "./VideoCardContainer";
import YOUTUBE_API_KEY from "../utils/config";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    //not used Axios..fetch also works fine in production...but the next step is very imp.
    const videos_result = await fetch(YOUTUBE_API_KEY);

    //this step is very important as it will make the data into json format.
    const jsonVideoData = await videos_result.json();

    // console.log(jsonVideoData);
    setVideos(jsonVideoData?.items);
  };
  return (
    <>
      <div className="mt-5 mx-3 rounded-lg flex flex-row flex-wrap">
        {videos.map((item) => (
          <VideoCardContainer info={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default VideosContainer;
