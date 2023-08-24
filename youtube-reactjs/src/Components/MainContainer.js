import React from "react";
import Categories from "./Categories";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <>
      <div className="flex flex-col">
        <Categories />
        <VideosContainer />
      </div>
    </>
  );
};

export default MainContainer;
