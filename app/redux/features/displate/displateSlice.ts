"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  EFinish,
  EFrame,
  ESize,
  IDisplateInfo,
  Specs,
} from "@/app/types/types";

import axios from "axios";

import type { PayloadAction } from "@reduxjs/toolkit";
import { getPrice } from "@/app/utils/getPrice";
import { toast } from "react-hot-toast";
import Error from "next/error";
export interface DisplateState {
  displates: IDisplateInfo[];
  currentDisplate: IDisplateInfo;
  favoriteDisplates: IDisplateInfo[];
  displateCategories: IDisplateInfo[];
  category: string | null;
  specs: Specs;
}

const initialState: DisplateState = {
  displates: [],
  currentDisplate: {
    img: "",
    title: "",
    category: "",
    id: "",
  },
  favoriteDisplates: [],
  displateCategories: [],
  category: null,
  specs: {
    size: 200,
    finish: "Matte",
    frame: "None",
    price: 50,
  },
};

export const fetchDisplates = createAsyncThunk("getDisplates", async () => {
  const response = await axios.get("http://localhost:3000/api/displate");
  if (response.status === 200) {
    const displates = response.data;
    return displates;
  }
});

export const addToCart = createAsyncThunk(
  "addToCart",
  async (data: { specs: Specs; title: string }) => {
    const response = await axios.post(
      "http://localhost:3000/api/displate",
      data
    );
    if (response.status === 200) {
      const favorites = response.data;
      return favorites;
    }
  }
);

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
    setSpecs: (state, action: PayloadAction<Partial<Specs>>) => {
      console.log("before: ", state.specs);
      state.specs = {
        ...state.specs,
        ...action.payload,
      };
      state.specs.price = getPrice(state.specs);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDisplates.fulfilled, (state, action) => {
        state.displates = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.favoriteDisplates = action.payload;
        toast.success('added to cart!')
      })
      .addCase(addToCart.rejected, (state, action) => {
        toast.error("error adding to cart!");
      });
  },
});

export const {
  setCurrentDisplate,
  setDisplates,
  setFavoriteDisplates,
  setCategory,
  setSpecs,
} = displateSlice.actions;

export default displateSlice.reducer;
