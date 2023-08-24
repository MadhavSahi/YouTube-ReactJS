import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice";

const store=configureStore({
    reducer:{

        //the app is the name and it is refering to appSlice slice which we created.
        app:appSlice,
    },

});

export default store;