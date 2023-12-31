import React from "react";
import { useSelector } from "react-redux";

const VideoCardContainer = ({ info }) => {
  const toggleSidebar = useSelector((store) => store.app.isMenuOpen);

  let title = info?.snippet?.title;
  title = title.length > 50 ? title.substring(0, 55) + "..." : title;
  // console.log(title);
  return (
    <>
      {toggleSidebar ? (
        <div className="rounded-lg shadow-lg mt-2 p-1 h-72">
          <img
            alt="thumbnail"
            src={info?.snippet?.thumbnails?.medium?.url}
            className="rounded-lg hover:cursor-pointer hover:scale-95"
          />
          <ul className="flex flex-col w-auto gap-1 mt-2">
            <li className="hover:cursor-pointer hover:scale-105 font-bold ml-2 py-2 w-72 block">
              {title}
            </li>
            <li className="hover:cursor-pointer inline-flex ml-2 w-fit">
              {info?.snippet?.channelTitle}
            </li>
          </ul>
        </div>
      ) : (
        <>
          <div className="rounded-lg shadow-lg mt-3 px-5 p-1 h-80">
            <img
              alt="thumbnail"
              src={info?.snippet?.thumbnails?.medium?.url}
              className="rounded-lg hover:cursor-pointer hover:scale-95"
            />
            <ul className="flex flex-col w-auto gap-1 mt-2">
              <li className="hover:cursor-pointer hover:scale-105 font-bold ml-2 py-2 w-72 block">
                {title}
              </li>
              <li className="hover:cursor-pointer inline-flex ml-2 w-fit">
                {info?.snippet?.channelTitle}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default VideoCardContainer;
