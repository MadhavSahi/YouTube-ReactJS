import React, { useState } from "react";
import LiveChatDisplayList from "./LiveChatDisplayList";
import { addToLiveChatArray } from "../utils/live_chat_Slice";
import { useDispatch } from "react-redux";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const [livechatQuery, setLivechatQuery] = useState("");
  // useEffect(()=>{
  //   console.log("hey container live chat");
  // },[])
  const handleLiveChat = () => {
    dispatch(
      addToLiveChatArray({
        name: "Madhav Sahi",
        text: livechatQuery,
      })
    );
    setLivechatQuery("");
  };
  const handleLiveChat_enter = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addToLiveChatArray({
          name: "Madhav Sahi",
          text: livechatQuery,
        })
      );
      setLivechatQuery("");
    }
  };
  return (
    <>
      <div className="flex bg-slate-200 flex-col border border-black ml-4 w-[30%] rounded-md p-2 justify-between">
        <p className="text-center font-bold text-2xl border border-black">
          Live chat
        </p>

        {/* Comments  */}
        <LiveChatDisplayList />

        {/* //for entering new live chat message. */}
        <div className="bg-gray-300 border rounded-md border-black p-2 flex-row justify-between">
          <input
            type="text"
            placeholder="Enter Live Chat Text Here !"
            value={livechatQuery}
            onChange={(e) => {
              setLivechatQuery(e.target.value);
            }}
            className="rounded-md px-2 ml-3 w-[70%]"
            onKeyDown={handleLiveChat_enter}
          />
          <button
            onClick={handleLiveChat}
            className="hover:scale-90 text-xl w-[20%]"
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChatContainer;
