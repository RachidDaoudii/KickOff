import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./service/Match/MatchApi";
import playerSlice from "./features/player/playerSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      players: playerSlice,
      [authApi.reducerPath]: authApi.reducer,
      favorites: favoriteSlice,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authApi.middleware]),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
