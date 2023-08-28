import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        //either we can make the whole initial state empty or we can make another object inside it and make that empty.
    },
    reducers:{
        cachedSuggestions:(state,action)=>{
            Object.assign(state,action.payload)
        },
    }
});

export const {cachedSuggestions} = searchSlice.actions;

export default searchSlice.reducer;
