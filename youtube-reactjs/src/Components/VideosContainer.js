import React, { useEffect, useState } from "react";
import VideoCardContainer from "./VideoCardContainer";
import YOUTUBE_API_KEY from "../utils/config";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // console.log("Hey video container");
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
        <div className="mt-1 lg:mx-3 md:mx-1 sm:mx-1 rounded-lg flex flex-row gap-1 flex-wrap">
          {videos.map((item) => (
            <Link to={"/watch?v=" + item?.id} key={item.id}>
              <VideoCardContainer key={item.id} info={item} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default VideosContainer;
