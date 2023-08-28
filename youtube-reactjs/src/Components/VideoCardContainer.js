import React from "react";

const VideoCardContainer = ({ info }) => {
  // console.log(info);
  return (
    <div className=" rounded-lg shadow-lg p-2">
      <img alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url} className="rounded-lg hover:cursor-pointer" />
      <ul className="flex flex-col gap-2">
        <li className="hover:cursor-pointer font-bold py-2 w-72">{info?.snippet?.title}</li>
        <li className="hover:cursor-pointer w-fit">{info?.snippet?.channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCardContainer;
