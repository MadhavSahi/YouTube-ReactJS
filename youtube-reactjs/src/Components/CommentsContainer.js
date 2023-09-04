import React from "react";
import comments from "../utils/commentsList";
import CommentsDisplayList from "./CommentsDisplayList";

const CommentsContainer = () => {
  return (
    <>
      <div className="px-5 mt-5">
        <p className="font-bold text-2xl">Comments:-</p>
        <div className="flex flex-col mt-5">
          <CommentsDisplayList commentsData={comments}/>
        </div>
      </div>
    </>
  );
};

export default CommentsContainer;
