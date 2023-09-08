import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleClose } from "../utils/appSlice";
import { useSearchParams} from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { useLocation } from "react-router-dom";
// import LiveChatDisplayList from "./LiveChatDisplayList";
import LiveChatContainer from "./LiveChatContainer";
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// import VideosContainer from "./VideosContainer";
// import { API_KEY } from "../utils/config";

//when coming back n forth...the component gets Re-Mounted again..hence it will always close the sidebar when coming on /watch page.
const VideoWatchPage = () => {
  const location = useLocation();
  //   let VIDEO_ID = "";
  //   const VIDEO_API =
  //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  //     VIDEO_ID +
  //     "=" +
  //     API_KEY;
  const [searchParams] = useSearchParams();
  // const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  //   VIDEO_ID = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(toggleClose()); 
    window.scrollTo(0, 0);
    // eslint-disable-next-line 
  },[location.pathname])

  //   const getVideoData = async () => {
  //     const video_data = await fetch(VIDEO_API);
  //     const video_data_json=await video_data.json();
  //     console.log(video_data_json);
  //   };

  return (
    <>
      <div className="flex flex-col ml-5 w-full">
        <div className="px-5 flex flex-row">
          <iframe
            className="w-[70%] rounded-lg"
            // width="w-72"
            height="605"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <LiveChatContainer />
        </div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default VideoWatchPage;
