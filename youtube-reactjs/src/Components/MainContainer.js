import React, { useEffect } from "react";
import Categories from "./Categories";
import VideosContainer from "./VideosContainer";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch=useDispatch();
  dispatch(toggleOpen());
  useEffect(() => {
    // console.log("hey main container");
    return () => {
      // console.log("return main container");
      // console.log("hey return live chat");
    };
    // esl
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="flex flex-col sm:overflow-hidden md:overflow-hidden">
        <Categories />
        <VideosContainer />
      </div>
    </>
  );
};

export default MainContainer;
