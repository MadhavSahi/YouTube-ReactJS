import React from "react";
import LiveChatDisplayList from "./LiveChatDisplayList";

const LiveChatContainer = () => {
  // useEffect(()=>{
  //   console.log("hey container live chat");
  // },[])
  return (
    <>
      <div className="flex bg-slate-200 flex-col border border-black ml-4 w-[30%] rounded-md p-2 justify-between">
        <p className="text-center font-bold text-2xl border border-black">
          Live chat
        </p>

        {/*Comments  */}
        <LiveChatDisplayList />

        <div className="bg-gray-300 border rounded-md border-black p-2 flex-row justify-between">
          <input
            type="text"
            placeholder="Enter Live Chat Text here !"
            className="rounded-md px-2 ml-3 w-[70%]"
          />
          <button className="hover:scale-90 text-xl w-[20%]">▶</button>
        </div>
      </div>
    </>
  );
};

export default LiveChatContainer;
