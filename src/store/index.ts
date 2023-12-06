import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { salariesSlice } from "./slices/salariesSlice";


export const store = configureStore({
  reducer: {
    salaries: salariesSlice.reducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { populateSalary, changeSalary } = salariesSlice.actions;