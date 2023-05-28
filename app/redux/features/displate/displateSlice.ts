"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDisplateInfo } from "@/app/types/types";

import axios from "axios";

import type { PayloadAction } from "@reduxjs/toolkit";

const fetchDisplates = createAsyncThunk(
  "getDisplates",
  async (_, displateAPI) => {
    const response = await axios.get("api/displates");
    if (response.status === 200) {
      const displates = response.data;
      return displates;
    }
  }
);

export interface DisplateState {
  displates: IDisplateInfo[];
  currentDisplate: IDisplateInfo;
  favoriteDisplates: IDisplateInfo[];
  displateCategories: IDisplateInfo[];
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
  displateCategories: [],
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
    setDisplateCategories: (state, action: PayloadAction<IDisplateInfo[]>) => {
      state.displateCategories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDisplates.fulfilled, (state, action) => {
      state.displates = action.payload;
    });
  },
});

export const {
  setCurrentDisplate,
  setDisplates,
  setFavoriteDisplates,
  setDisplateCategories,
} = displateSlice.actions;

export default displateSlice.reducer;
