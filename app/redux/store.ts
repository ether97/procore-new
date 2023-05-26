"use client";

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/features/user/userSlice";
import displateReducer from "./features/displate/displateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    displate: displateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
