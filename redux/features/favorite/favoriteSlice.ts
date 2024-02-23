"use client";
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "auth",
  initialState: {
    favorites: [
      {
        id: 0,
        starting_at: "",
        participants: [],
        result_info: "",
      },
    ],
  },
  reducers: {
    stateFavorites: (state, action) => {
      console.log(action.payload);
      state.favorites.push({
        id: action.payload?.id,
        starting_at: action.payload.starting_at,
        participants: action.payload?.participants,
        result_info: action.payload?.result_info,
      });
    },
  },
});

export const { stateFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
