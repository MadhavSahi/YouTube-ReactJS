import React, { useEffect } from "react";
import SideBar from "./SideBar";
// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { toggleOpen } from "../utils/appSlice";
import { useDispatch } from "react-redux";


const Body = () => {
  const dispatch=useDispatch();
  // console.log("hey body1");
  dispatch(toggleOpen());
  useEffect(()=>{
    // console.log("hey body2");
    // eslint-disable-next-line
  },[])
  return (
    <>
      <div className="flex flex-row gap-2 sm:overflow-hidden md:overflow-hidden">
        <SideBar />
        
        {/*we will use Outlet here...bcz either the main container or the watch page should load inside body...sidebar will remain constant both times hence not doing any change there.. */}
        {/* <MainContainer /> or <VideoWatchPage/>...and these will be done according to the routing provided...for the normal body page..it will be <MC> and for /watch it will be <VWP>...this logic will be written in appRouter...in the children object...the <Outlet> will be rendered according to the children of the body in appRouter */}
        <Outlet/>


      </div>
    </>
  );
};

export default Body;
