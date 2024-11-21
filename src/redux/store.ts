import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        products: productSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store