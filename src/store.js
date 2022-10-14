import { configureStore } from "@reduxjs/toolkit";
import textSlicer from "./redux/textSlicer";

export const store = configureStore({
    reducer: {
        texts: textSlicer
    }
})