import React, { useEffect } from "react";
// import { live_comments } from "../utils/livechats";
import {
  addToLiveChatArray,
  clearLiveChatArray,
} from "../utils/live_chat_Slice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomText } from "../utils/livechats";
import { v4 as uuidv4 } from "uuid";
// import { toggleClose } from "../utils/appSlice";

const LiveChatDisplayList = () => {
  const dispatch = useDispatch();
  // dispatch(toggleClose());
  const live_chat_messages = useSelector((store) => store.chat.chatArray);
  // console.log("hey live chat1");
  useEffect(() => {
    // console.log("hey live chat2");
    const interval = setInterval(() => {
      dispatch(
        addToLiveChatArray({
          name: generateRandomName(),
          text: generateRandomText(),
        })
      );
    }, 1500);

    return () => {
      dispatch(clearLiveChatArray());
      clearInterval(interval);
      // console.log("hey return live chat");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="flex rounded-md flex-col-reverse h-[490px] overflow-y-scroll border border-black">
        {live_chat_messages.map((each_live_comment_obj) => {
          const key = uuidv4() + Date.now(); // Generate a unique key for each element
          return (
              <div key={key} className="flex flex-row gap-10 p-3">
                <span className="text-md font-bold w-[30%]">
                  {each_live_comment_obj.name}
                </span>
                <span className="text-sm font-semibold text-gray-700 w-[80%]">
                  {each_live_comment_obj.text}
                </span>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default LiveChatDisplayList;
