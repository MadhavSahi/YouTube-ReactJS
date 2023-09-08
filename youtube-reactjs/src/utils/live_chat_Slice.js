import { createSlice } from "@reduxjs/toolkit";

const live_chat_slice = createSlice({
  name: "chat",
  initialState: {
    chatArray: [],
  },
  reducers: {
    addToLiveChatArray: (state, action) => {
      //splice will help in only making 19 entries and then will delete the start ones...
      state.chatArray.splice(19,1);
      //unshift will start adding from start so means new comments will come from below
      state.chatArray.unshift(action.payload);
    },
    clearLiveChatArray:(state)=>{
        state.chatArray=[];
    },
  },
});

export const { addToLiveChatArray,clearLiveChatArray } = live_chat_slice.actions;

export default live_chat_slice.reducer;
