import React, { useEffect, useState } from "react";
import VideoCardContainer from "./VideoCardContainer";
import YOUTUBE_API_KEY_TOP_50, { suggestion_search_fxn } from "../utils/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchSelect, setSearchSelect] = useState(false);
  const check_search_query = useSelector(
    (store) => store.searchbox.searchString
  );

  useEffect(() => {
    // console.log("Hey video container");
    if (check_search_query !== "") {
      getSearchBoxVideos(check_search_query);
    } else {
      getPopularVideos();
    }
  }, [check_search_query]);

  // const generateUUID=()=>{
  //   return uuidv4();
  // };
  const getPopularVideos = async () => {
    //not used Axios..fetch also works fine in production...but the next step is very imp.
    const videos_result = await fetch(YOUTUBE_API_KEY_TOP_50);

    //this step is very important as it will make the data into json format.
    const jsonVideoData = await videos_result.json();

    // console.log(jsonVideoData);
    setVideos(jsonVideoData?.items);
  };
  const getSearchBoxVideos = async (check_search_query) => {
    setSearchSelect(true);
    const videos_result = await suggestion_search_fxn(check_search_query);
    // const jsonVideoData = await videos_result.json();
    setVideos(videos_result?.items);
  };
  // const key = uuidv4(); // Generate a unique key for each element
  return (
    <>
      {searchSelect ? (
        <div className="mt-1 lg:mx-3 md:mx-1 sm:mx-1 rounded-lg flex flex-row gap-1 flex-wrap">
          {videos.map((item) => {
            const key = uuidv4() + Date.now(); // Generate a unique key for each element
            return (
              <Link to={"/watch?v=" + item?.id?.videoId} key={key}>
                <VideoCardContainer info={item} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="mt-1 lg:mx-3 md:mx-1 sm:mx-1 rounded-lg flex flex-row gap-1 flex-wrap">
           {videos.map((item) => {
            const key = uuidv4() + Date.now(); // Generate a unique key for each element
            return (
              <Link to={"/watch?v=" + item?.id} key={key}>
                <VideoCardContainer info={item} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default VideosContainer;
