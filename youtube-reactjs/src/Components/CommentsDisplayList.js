import React from "react";
// import comments from "../utils/commentsList";

const CommentsDisplayList = ({ commentsData }) => {

  
  return (
    <>
      {commentsData.map((each_comment_obj, index) => {
        return (
          <>
            <div
              key={index}
              className="p-1 flex flex-col gap-2 shadow-md shadow-light-500 border border-l-black border-b-black"
            >
              <p className="font-medium text-xl">{each_comment_obj?.name}</p>
              <p className="font-normal">{each_comment_obj?.text}</p>
            </div>
            {each_comment_obj?.replies ? (
              <div key={index+10000} className="ml-5">
                <CommentsDisplayList commentsData={each_comment_obj?.replies} />
              </div>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default CommentsDisplayList;
