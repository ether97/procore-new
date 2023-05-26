"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IDisplateInfo } from "@/app/types/types";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const {setUser, logoutUser} = userSlice.actions

export default userSlice.reducer;