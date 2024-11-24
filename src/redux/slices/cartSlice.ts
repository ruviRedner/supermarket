import {
    Action,
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import { dataStatus } from "../../types/redux";
  import { IUser } from "../../types/user";
  import userState from "../../types/userState";
import { cartState } from "../../types/cartState";
  
  const port = import.meta.env.VITE_PORT;
  const initialData: cartState = {
    error: null,
    status: dataStatus.IDLE,
    data: null,
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState: initialData,
    reducers: {
        addToCart: (state, action) => {
            state.data?.receipt.push(action.payload)
        }

    },
    extraReducers: (builder: ActionReducerMapBuilder<cartState>) => {
    },
  });
  
  export const { } = cartSlice.actions;
  export { };
  export default cartSlice;
  