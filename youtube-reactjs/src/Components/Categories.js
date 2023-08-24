import React from "react";
import CategoryButton from "./CategoryButton";

const Categories = () => {
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
    "EDM",
    "Tech",
    "Comedy",
    "Cars",
    "Stocks"
  ];
  return (
    <>
      <div className="flex flex-row">
        {btnList.map((item, index) => {
          return (<CategoryButton name={item} key={index} />);
        })}
      </div>
    </>
  );
};

export default Categories;
