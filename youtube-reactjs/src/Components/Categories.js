import React from "react";
import CategoryButton from "./CategoryButton";
import { useSelector } from "react-redux";

const Categories = () => {
  const toggleSidebar = useSelector((store) => store.app.isMenuOpen);
  const btnList = [
    "All",
    "Sports",
    "News",
    "Songs",
    "Cooking",
    "Gaming",
    "Cricket",
    "Live",
    "Movies",
    "Tech",
    "Comedy",
    "Cars",
    "Stocks",
  ];
  // const [sidebarOpen, setSidebarOpen] = useState(true);
  // console.log(toggleSidebar + " SNSND");

  return (
    <>
      {toggleSidebar ? (
        <>
          <div className="ml-1 flex flex-row gap-1 flex-wrap">
            {btnList.map((item, index) => {
              return <CategoryButton name={item} key={index} />;
            })}
          </div>
        </>
      ) : (
        <div className="ml-2 flex flex-row gap-4 flex-wrap">
          {btnList.map((item, index) => {
            return <CategoryButton name={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default Categories;
