import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
// import { BsYoutube } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

//we do image imports like this...images has to be kept inside src folder.
import logoImage from "../images/youtube-logo.jpg"

const Header = () => {

  //useDispatch for calling the action which will call the reducer fxn
  const dispatch = useDispatch();

  //we wrap the dispatch inside our fxn so that we can refer to our fxn which can call dispatch on the reducer fxn....which will toggle the state.
  const toggleSideBarFxn = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="flex flex-row justify-between p-5">
      <div className="flex flex-row justify-between gap-6">
        <GiHamburgerMenu
          //when using arrow fxn..we have to call...or we cud h used onClick={toggleSideBarFxn}
          onClick={()=>{toggleSideBarFxn()}}
          className="text-5xl cursor-pointer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
        <img alt="logo" className="h-16 w-40 -mt-2" src={logoImage} />
          {/* <BsYoutube className="text-5xl text-red-600 cursor-pointer" /> */}
        </a>
      </div>
      <div className="flex flex-row">
        <input
          placeholder="Search"
          type="text"
          className="pl-4 w-3/4 h-14 outline-black-900 border-black border-2 rounded-l-full"
        />
        <div className=" outline-black-900 border-black border-2 rounded-r-full">
          <button className="p-3 text-xl rounded-r-full ">
            <BsSearch />
          </button>
        </div>
        {/* <button className="rounded-r-full border-black bg-black-900">SEARCh</button> */}
      </div>
      <div className="text-5xl mr-6">
        <AiOutlineUserSwitch className="text-blue-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
