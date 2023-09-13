// import React from "react";
// import CategoryButton from "./CategoryButton";
// import { useSelector } from "react-redux";

// const Categories = () => {
//   const toggleSidebar = useSelector((store) => store.app.isMenuOpen);
//   const btnList = [
//     "All",
//     "Sports",
//     "News",
//     "Songs",
//     "Cooking",
//     "Gaming",
//     "Cricket",
//     "Live",
//     "Movies",
//     "Tech",
//     "Comedy",
//     "Cars",
//     "Stocks",
//   ];
//   // const [sidebarOpen, setSidebarOpen] = useState(true);
//   // console.log(toggleSidebar + " SNSND");

//   return (
//     <>
//       {/* {toggleSidebar ? (
//         <>
//           <div className="ml-1 flex flex-row gap-1 flex-wrap">
//             {btnList.map((item, index) => {
//               return <CategoryButton name={item} key={index} />;
//             })}
//           </div>
//         </>
//       ) : (
//         <div className="ml-2 flex flex-row gap-4 flex-wrap">
//           {btnList.map((item, index) => {
//             return <CategoryButton name={item} key={index} />;
//           })}
//         </div>
//       )} */}
//       <div
//         className={`grid gap-1 ${
//           toggleSidebar ? "grid-cols-1" : "grid-cols-2"
//         } sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8`}
//       >
//         {btnList.map((item, index) => {
//           return <CategoryButton name={item} key={index} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default Categories;
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
    "Fashion",
    "React JS",
    "Iphone"
  ];

  return (
    <>
      <div
        className={`grid gap-1 ${
        toggleSidebar ? "grid-cols-2" : "grid-cols-3"
        } sm:grid-cols-${toggleSidebar ? "2" : "3"} md:grid-cols-4 lg:grid-cols-8`}
      >
        {btnList.map((item, index) => {
          return <CategoryButton name={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Categories;
