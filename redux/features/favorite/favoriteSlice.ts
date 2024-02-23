"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const favoriteSlice = createSlice({
  name: "auth",
  initialState: {
    favorits: [],
  },
  reducers: {
    stateFavorites: (state, action) => {
      console.log(action.payload);

      //   state.favorits = [];
      //   state.favorits.push();
    },
  },
});

export const { stateFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
