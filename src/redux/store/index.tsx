import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "../slices/appSlices";

const store = configureStore({
  reducer: {
    reducer: appSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<StoreDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
