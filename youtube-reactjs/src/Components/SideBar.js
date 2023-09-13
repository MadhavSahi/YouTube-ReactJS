import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  //we have to subscribe to our store now....it is done using useSelector...keep in mind that we have to subscribe only to the value which we will use.
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //store.app refers to the initialstate
  // Use the screenWidth state to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the screenWidth state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add an event listener to update the screen width state when the window size changes
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // Determine whether to show or hide the sidebar based on screen width
  const showSidebar = screenWidth >= 640; // Adjust the breakpoint as needed

  //early return
  if (!isMenuOpen) {
    return null;
  }
  return (
    // <div className="bg-gray-100 flex flex-col pt-4 pb-4 pr-4 pl-5 gap-4 w-48">
    // Inside Sidebar.js
    <div
      className={`bg-gray-100 ${
        showSidebar ? "sm:w-48" : "sm:hidden"
      } flex flex-col pt-4 pb-4 pr-2 sm:pr-4 pl-2 sm:pl-5 gap-4`}
    >
      <ul className="list-none flex flex-col gap-2">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">Shorts</li>
        <li className="cursor-pointer">Videos</li>
        <li className="cursor-pointer">Live</li>
      </ul>
      <p className="font-bold text-xl">Subscriptions</p>
      <ul className="list-none flex flex-col gap-2">
        <li className="cursor-pointer">Music</li>
        <li className="cursor-pointer">Sports</li>
        <li className="cursor-pointer">Gaming</li>
        <li className="cursor-pointer">News</li>
      </ul>
      <p className="font-bold text-xl">Watch Later</p>
      <ul className="list-none flex flex-col gap-2">
        <li className="cursor-pointer hover:underline-dark-900">Music</li>
        <li className="cursor-pointer">Sports</li>
        <li className="cursor-pointer">Gaming</li>
        <li className="cursor-pointer">News</li>
      </ul>
    </div>
  );
};

export default SideBar;
