// import React from "react";
// import { v4 as uuidv4 } from "uuid";
// // import comments from "../utils/commentsList";

// const CommentsDisplayList = ({ commentsData }) => {
//   return (
//     <>
//       {commentsData.map((each_comment_obj, index) => {
//         const key = uuidv4() + Date.now(); // Generate a unique key for each element
//         return (
//           <>
//             <div
//               key={key}
//               className="p-1 flex flex-col gap-2 shadow-md shadow-light-500 border border-l-black border-b-black"
//             >
//               <p className="font-medium text-xl">{each_comment_obj?.name}</p>
//               <p className="font-normal">{each_comment_obj?.text}</p>
//             </div>
//             {each_comment_obj?.replies ? (
//               <div key={key+"abcd"} className="ml-5">
//                 <CommentsDisplayList commentsData={each_comment_obj?.replies} />
//               </div>
//             ) : null}
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default CommentsDisplayList;
import React from "react";
import { v4 as uuidv4 } from "uuid";

const CommentsDisplayList = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((each_comment_obj, index) => {
        const key = uuidv4() + Date.now(); // Generate a unique key for each element
        return (
          <div
            key={key} // Set the key on the outermost element
            className="p-1 flex flex-col gap-2 shadow-md shadow-light-500 border border-l-black "
          >
            <p className="font-medium text-xl">{each_comment_obj?.name}</p>
            <p className="font-normal">{each_comment_obj?.text}</p>
            {each_comment_obj?.replies ? (
              <div key={key} className="ml-5">
                <CommentsDisplayList commentsData={each_comment_obj?.replies} />
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default CommentsDisplayList;
