"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDisplateInfo } from "@/app/types/types";

import axios from "axios";

import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchDisplates = createAsyncThunk("getDisplates", async () => {
  const response = await axios.get("http://localhost:3000/api/displate");
  if (response.status === 200) {
    const displates = response.data;
    return displates;
  }
});

export interface DisplateState {
  displates: IDisplateInfo[];
  currentDisplate: IDisplateInfo;
  favoriteDisplates: IDisplateInfo[];
  displateCategories: IDisplateInfo[];
  category: string | null;
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
  category: null,
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
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.displateCategories = state.displates.filter(
        (displate) => displate.category === state.category
      );
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
  setCategory,
} = displateSlice.actions;

export default displateSlice.reducer;
