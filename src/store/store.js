import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/CountSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default store;