import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './service/Match/MatchApi';
import authSlice from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authApi.middleware]),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
