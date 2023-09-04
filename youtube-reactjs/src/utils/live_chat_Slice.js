import { createSlice } from "@reduxjs/toolkit";

const live_chat_slice = createSlice({
  name: "chat",
  initialState: {
    chatArray: [],
  },
  reducers: {
    addToLiveChatArray: (state, action) => {
      state.chatArray.splice(19,1);
      state.chatArray.unshift(action.payload);
    },
    clearLiveChatArray:(state)=>{
        state.chatArray=[];
    },
  },
});

export const { addToLiveChatArray,clearLiveChatArray } = live_chat_slice.actions;

export default live_chat_slice.reducer;
