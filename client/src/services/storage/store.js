import { configureStore } from "@reduxjs/toolkit";
import empReducer from "./empSlice";

export const store = configureStore({
    reducer: {
        "app": empReducer
    },
  });
  