"use client";
import { createSlice } from "@reduxjs/toolkit";
import { authEntity } from "./entity.auth";

const initialState: authEntity = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload?.id;
      state.firstName = action.payload?.firstName;
      state.email = action.payload?.email;
    },
    setLogout: (state, action) => {
      state.id = "";
      state.firstName = "";
      state.email = "";
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
