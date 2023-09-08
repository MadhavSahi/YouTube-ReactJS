import { createSlice } from "@reduxjs/toolkit";

const searchBox_slice = createSlice({
  name: "searchbox",
  initialState: {
    searchString: "",
  },
  reducers: {
    query_fill:(state,action)=>{
        state.searchString=action.payload;
    }
  },
});
export const {query_fill} = searchBox_slice.actions;
export default searchBox_slice.reducer;
