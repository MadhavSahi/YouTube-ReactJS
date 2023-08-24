import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

  //we have to subscribe to our store now....it is done using useSelector...keep in mind that we have to subscribe only to the value which we will use.
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  //early return
  if(!isMenuOpen){
    return null;
  }
  return (
    <div className="bg-gray-100 flex flex-col pt-4 pb-4 pr-4 pl-5 gap-4 w-48">
      <ul className="list-none flex flex-col gap-2">
        <li className="cursor-pointer">Home</li>
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
