import { configureStore } from "@reduxjs/toolkit";
import addressInfoReducer from "./addressInfo";
const store = configureStore({
  reducer: {
    address: addressInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
