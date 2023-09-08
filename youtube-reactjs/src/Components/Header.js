import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
// import { BsYoutube } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

//we do image imports like this...images has to be kept inside src folder.
import logoImage from "../images/youtube-logo.jpg";
import { YOUTUBE_SUGGESTION_API } from "../utils/config";
import { cachedSuggestions } from "../utils/searchSlice";
import { query_fill } from "../utils/searchBox_Slice";

const Header = ({ onSearchRedirect }) => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search); //it will refer to the initial state object of search.
  const [searchText, setSearchText] = useState("");
  const [suggestionsArray, setSuggestionsArray] = useState([]);
  const [showSuggestionsDiv, setShowSuggestionsDiv] = useState(false);
  //  console.log("hi");
  // const [searchquery,setSearchQuery]=useState("");

  //useDispatch for calling the action which will call the reducer fxn

  useEffect(() => {
    const debouncingTimer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestionsArray(searchCache[searchText]);
      } else {
        suggestionsCall();
      }
    }, 200);
    // suggestionsCall();

    return () => {
      clearTimeout(debouncingTimer);
    };
    // eslint-disable-next-line
  }, [searchText]);

  const suggestionsCall = async () => {
    // console.log("API CALL - " + searchText);
    const suggestionData = await fetch(YOUTUBE_SUGGESTION_API + searchText);
    const data = await suggestionData.json();
    setSuggestionsArray(data[1]);
    dispatch(cachedSuggestions({ [searchText]: data[1] }));

    // console.log(suggestionsArray);
  };

  //we wrap the dispatch inside our fxn so that we can refer to our fxn which can call dispatch on the reducer fxn....which will toggle the state.
  const toggleSideBarFxn = () => {
    // console.log("heyyy- "+"");
    dispatch(toggleSideBar());
  };
  const handleSuggestionClick = (each_suggestion) => {
    // console.log("heyyy - " + each_suggestion);
    // window.location.href = "/";
    setShowSuggestionsDiv(false);
    // Handle the click event with the suggestion
    dispatch(query_fill(each_suggestion));
    setSearchText(each_suggestion);
    // console.log("hey lol-1");
  };
  const handleLiveChat_enter = (e) => {
    if (e.key === "Enter") {
      // console.log("hey lol-2");
      handleSuggestionClick(searchText);
    }
  };
  return (
    <div className=" sm:overflow-hidden md:overflow-hidden flex flex-row justify-between p-5 shadow-lg mb-4 shadow-white-500 w-auto">
      <div className="flex flex-row justify-between gap-6">
        <GiHamburgerMenu
          //when using arrow fxn..we have to call...or we cud h used onClick={toggleSideBarFxn}
          onClick={() => {
            toggleSideBarFxn();
          }}
          className="text-5xl cursor-pointer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/">
          <img alt="logo" className="h-16 w-40 -mt-2" src={logoImage} />
          {/* <BsYoutube className="text-5xl text-red-600 cursor-pointer" /> */}
        </a>
      </div>
      <div className="flex flex-row">
        <div className="flex">
          <input
            placeholder="Search"
            type="text"
            className="pl-4 md:w-[30rem] sm:w-[10rem] h-10 outline-black-900 border-black focus:outline-black border-2 rounded-l-full"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            onFocus={() => setShowSuggestionsDiv(true)}
            onKeyDown={handleLiveChat_enter}
            // onBlur={()=>setSearchText("")}
          />
          <div className=" outline-black-900 border-black border-2 rounded-r-full h-10">
            <button className="p-3 text-xl rounded-r-full ">
              <BsSearch />
            </button>
          </div>
        </div>
        {showSuggestionsDiv && (
          <div className="flex flex-col bg-white shadow-lg absolute md:w-[30rem] sm:w-[10rem] mt-10 mx-1">
            <ul>
              {suggestionsArray.map((each_suggestion, index) => {
                return (
                  <li
                    onClick={() => handleSuggestionClick(each_suggestion)}
                    className="rounded-lg border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-100"
                    key={index}
                  >
                    {/* <li onClick={()=>handleSuggestionClick(each_suggestion)} className="rounded-lg border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-100" key={index}> */}
                    {" 🔎 " + each_suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {/* <button className="rounded-r-full border-black bg-black-900">SEARCh</button> */}
      </div>
      <div className="text-5xl mr-6">
        <AiOutlineUserSwitch className="text-blue-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
