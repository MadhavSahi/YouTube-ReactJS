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
        },
        toggleClose:(state)=>{
            state.isMenuOpen=false;
        }
    }
})
export const {toggleSideBar,toggleClose} = appSlice.actions;
export default appSlice.reducer;