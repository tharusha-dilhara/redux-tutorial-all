import { configureStore } from "@reduxjs/toolkit";
import LaptopSlice2Reducer from "../reducers/LaptopSlice2";

const store = configureStore({
    reducer:{
        laptopSlice2:LaptopSlice2Reducer
    },
});



export default store;