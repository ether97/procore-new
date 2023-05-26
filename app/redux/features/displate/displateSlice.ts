"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IDisplateInfo } from "@/app/types/types";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface DisplateState {
  displates: IDisplateInfo[];
  currentDisplate: IDisplateInfo;
  favoriteDisplates: IDisplateInfo[];
}

const initialState: DisplateState = {
  displates: [],
  currentDisplate: {
    img: null,
    title: null,
    category: null,
    id: null,
  },
  favoriteDisplates: [],
};

export const displateSlice = createSlice({
  name: "displate",
  initialState,
  reducers: {
    setDisplates: (state, action: PayloadAction<IDisplateInfo[]>) => {
      state.displates = action.payload;
    },
    setCurrentDisplate: (state, action: PayloadAction<IDisplateInfo>) => {
      state.currentDisplate = action.payload;
    },
    setFavoriteDisplates: (state, action: PayloadAction<IDisplateInfo[]>) => {
      state.favoriteDisplates = action.payload;
    },
  },
});

export const { setCurrentDisplate, setDisplates, setFavoriteDisplates } =
  displateSlice.actions;

export default displateSlice.reducer;
