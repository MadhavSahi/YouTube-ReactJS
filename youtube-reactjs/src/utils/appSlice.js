import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({

    //while creating the slice...we have to give a name to it...it will be used to put reference in store.
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})
export const {toggleSideBar} = appSlice.actions;
export default appSlice.reducer;