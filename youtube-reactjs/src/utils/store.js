import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import live_chat_Slice from "./live_chat_Slice";

const store = configureStore({
  reducer: {
    //the app is the name and it is refering to appSlice slice which we created.
    app: appSlice,
    search: searchSlice,
    chat: live_chat_Slice,
  },
});

export default store;
