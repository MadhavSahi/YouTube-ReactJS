import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
// import { API_KEY } from "../utils/config";

//when coming back n forth...the component gets Re-Mounted again..hence it will always close the sidebar when coming on /watch page.
const VideoWatchPage = () => {
//   let VIDEO_ID = "";
//   const VIDEO_API =
//     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
//     VIDEO_ID +
//     "=" +
//     API_KEY;
  const [searchParams] = useSearchParams();
//   VIDEO_ID = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    // getVideoData();
    dispatch(toggleClose());
    // console.log("hey watch page");
    return()=>{
        // console.log("hey retrun");
    }
    // eslint-disable-next-line
  }, []);

//   const getVideoData = async () => {
//     const video_data = await fetch(VIDEO_API);
//     const video_data_json=await video_data.json();
//     console.log(video_data_json);
//   };

  return (
    <>
      <div className="px-5 py-5">
        <iframe
          className=""
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoWatchPage;
